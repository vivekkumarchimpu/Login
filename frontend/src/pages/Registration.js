import React, { useState } from "react";
import axios from "axios";


const Registration = () => {
    const [user, setUser] = useState({
        username: "",
        phone: "",
        email: "",
        password: "",
        pimage: "",
    })
    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    const fileUpload = (e) => {
        
        const {name, value} = e.target;
        
        setUser({
            ...user,
            [name]: value
        })
    }
    const register = () => {
        const { username, phone, email, password, pimage } = user
        if(username && phone && email && password && pimage){
            //axios.post("http://localhost:8000/Api/v1/users/registration", user).then(res => console.log(res))
            console.log(pimage)
            alert("Submit")
        } else{
            alert("Invalid Input")
        }
    }
    return (
        <>
            <div className="rsidebar">
                
                <div className="usersignup">
                <p style={{color: 'blue', textAlign: 'center', fontSize: '20px'}}>SignUp User</p>
                    <label className="lbl px-1 my-2">User Name :</label>
                    <input type="text" name="username" value={user.username} onChange={handleChange}></input>
                    <label className="lbl px-2">Phone No  :</label>
                    <input type="text" name="phone" value={user.phone} onChange={handleChange}></input>
                    <label className="lbl px-3 py-2">Email Id  :</label>
                    <input type="email" name="email" value={user.email} onChange={handleChange}></input>
                    <label className="lbl px-2 my-2 mx-2">Password  :</label>
                    <input type="password" name="password" value={user.password} onChange={handleChange}></input><br/>
                    <label className="px-2 my-2">Profile:</label>
                    <input type="file" className="px-2" id="path" name="pimage" value={user.pimage} onChange={fileUpload}></input>

                    <button className="my-2 signup" onClick={register}>SignUp</button>


                </div>


            </div>
        </>
    )
}
export default Registration;