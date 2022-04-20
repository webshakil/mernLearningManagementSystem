import { SyncOutlined } from '@ant-design/icons';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from "next/router";
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { Context } from '../context';
const register = () => {
        const [email, setEmail]=useState("chumkysk@gmail.com");
        const [password, setPassword]=useState("123435667");
        const [loading, setLoading] =useState(false);
        //state
            const {state, dispatch}= useContext(Context);
        //rotuers
        const router = useRouter();
       
        const handleSubmit = async (e) => {
            e.preventDefault();
            // console.table({ name, email, password });
            try {
              setLoading(true);
              const { data } = await axios.post(`/api/login`, {
                email,
                password,
              });
              // console.log("LOGIN RESPONSE", data);
              dispatch({
                type: "LOGIN",
                payload: data,
              });
              // save in local storage
              window.localStorage.setItem("user", JSON.stringify(data));
              // redirect
              router.push("/");
              // setLoading(false);
            } catch (err) {
              toast(err.response.data);
              setLoading(false);
            }
          };
return (
      <>
      
     <h1 className="mt-4 p-5 bg-light text-dark rounded text-center">Sign in and Start Learning! </h1>
            <div className="container ">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                            <div className="padTop">
                                <form  onSubmit={handleSubmit}>
                                    
                                    <div className="mb-3 mt-3">
                                        <input type="email" className="form-control" value={email}  onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your email" name="email"/>
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" className="form-control" value={password}  onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your  password" name="password"/>
                                    </div>
                                 
                                    <button type="submit"
                                    className="btn btn-primary"
                                        disabled={!email||!password||loading}
                                    >
                                      
                                        {loading ? <SyncOutlined spin/>: "Submit"}
                                        </button>
                                </form>
                                <div className="text-center ">
                                    If not registerd <br/>
                                     <Link href="/register">
                                        <a className="text-danger">Register</a>
                                    </Link>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default register;






































































































{/* import React, { useState } from 'react';

const register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] =useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.table({name, email, password, remember})
    }
  return (
      <>
      <h1 className="mt-4 p-5 bg-light text-dark rounded text-center">Sign Up and Start Learning! </h1>
            <div className="container ">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                            <div className="padTop">
                                <form  onSubmit={handleSubmit}>
                                    <div className="mb-3 mt-3">
                                        <input type="name" className="form-control" id="name"  onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" name="name"/ >
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <input type="email" className="form-control" id="email"  onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your email" name="email"/>
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" className="form-control" id="pwd"  onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your  password" name="password"/>
                                    </div>
                                    <div className="form-check mb-3">
                                        <label className="form-check-label">
                                            <input className="form-check-input" type="checkbox" onChange={(e) => setRemember(e.target.value)} name="remember"/> Yes! I want to get the most out of Udemy by receiving emails with exclusive deals, personal recommendations and learning tips! 
                                        </label>
                                    </div>
                                    <button type="submit"
                                    className="btn btn-primary"
                                    disabled={!name ||! email||!password||!remember}
                                    >
                                        Submit</button>
                                </form>
                            </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default register */}