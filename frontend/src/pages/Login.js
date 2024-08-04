import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { DataAppContext } from "../UniverseVar.js";

const Login = () => {
    const [user, setUser] = useState({
        email:"",
        password:""
    })

    const localContext = useContext(DataAppContext);
    const {userData, updateData} = localContext;

    //console.log(localContext)
    // const userData = new Object({
    //     userid:"",
    //     username:"",
    //     phone:"",
    //     email: "",
    //     pimage:""
    // })

    let data = new Object()

    const navigate = useNavigate()
    const reg = () => {
        navigate('/users/registration')
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]:value
        })
    }

    const login = () => {
        const { email, password } = user
        if(email && password){
            axios.post("http://localhost:8000/Api/v1/users/login", user).then((res) => {
                alert(res.data.message)
                //console.log(res.data.data.user)
                // userData.userid = res.data.data.user._id
                // userData.username = res.data.data.user.username
                // userData.phone = res.data.data.user.phone
                // userData.email = res.data.data.user.email
                // userData.pimage = res.data.data.user.pimage
                // console.log(userData)

                data = res.data.data.user
                //console.log(data)
                
                updateData({...userData, userid: data._id, username: data.username, phone: data.phone, email: data.email, pimage: data.pimage})

                navigate('/home')
            } )
            
        } else {
            alert("Invailed Email or Password")
        }
    }

    return (
        <>
            <div className="rsidebar">
                <div className="row">
                    <div className="col-6 userlogo">

                    </div>
                    <div className="col-6">
                        <div className="userinput">
                            <label className="py-2 emailid">Email ID :</label>
                            <input type="email" name="email" value={user.email} onChange={handleChange}></input>
                            <label className="py-3">Password  :</label>
                            <input type="password" name="password" value={user.password} onChange={handleChange}></input>
                            <div className="loginbtn">
                                <button className="mx-1 signup" onClick={reg}>SignUp</button>
                                <button className="mx-1 login" onClick={login}>Login</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;