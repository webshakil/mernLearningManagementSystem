import jwt from 'jsonwebtoken';
import { comparePassword, hashPassword } from "../helper/auth";
import User from "../models/user";
export const register=async(req, res)=>{
   try{
       const {name, email, password, condition}= req.body;
       //validations
       if (!name) return res.status(400).send("Name is must be provided");
       if(!password || password.length < 8) {
           
        return res.status(400).send("Password must be 8 character long")
    }
    let userExists = await User.findOne({email}).exec();
    if (userExists) return res.status(400).send("email is taken");
    
//hash password
const hashedPassword = await hashPassword(password);
     //register user
    const user = new User({
        name,
        email,
        password:hashedPassword,
        condition,
    });
    await user.save();
    return res.json({ ok: true });

   }catch(err){
       console.log(err);
       return res.status(400).send("error. try again later")
   }
}

export const login = async (req, res)=>{
  try{
    const {email, password} = req.body;
    //check whether we have the user or not with that email
    const user= await User.findOne({email}).exec();
    console.log(user);
    if(!user) return res.status(400).send("No user found");
    //check password
    const match = await comparePassword(password, user.password);
    //create singed jw tokens
    const token = jwt.sign({_id:user._id}, process.env.JWT_SECRET, {expiresIn:"5d"});
    user.password= undefined;
    res.cookie("token", token,{
        httpOnly: true,
    });
    res.json(user);

  }catch(err){
      console.log(err);
      return res.status(400).send("Error, Please try again");
  }
}

export const logout = async (req, res) => {
    try{
        res.clearCookie("token");
        return res.json({message:"Signout Success"})

    }catch(err){
        console.log(err);
    }
}