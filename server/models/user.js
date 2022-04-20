import mongoose from 'mongoose';
const {Schema}= mongoose;
const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
      },
      email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
        min: 6,
        max: 64,
      },
      condition: {
        type: String,
       
      },
      picture: {
        type: String,
        default: "/avatar.png",
      },
    role:{
        type:[String],
        default:["Subscriber"],
        enum: ["Subscriber", "Instructor", "Admin", "SuperAmdin"]
    },
  
},
   {timestamp:true}
  
);

export default mongoose.model("User",userSchema);