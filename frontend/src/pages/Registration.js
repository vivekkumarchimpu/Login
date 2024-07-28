import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"

const Registration = () => {
   const navigate = useNavigate()
    const [file, setFile] = new useState("")

    const [user, setUser] = useState({
        username: "",
        phone: "",
        email: "",
        password: "",
        pimage: "",
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    

    const uploadFile = async (e) => {

        e.preventDefault()
        const formData = new FormData()
        formData.append("username", user.username)
        formData.append("phone", user.phone)
        formData.append("email", user.email)
        formData.append("password", user.password)
        formData.append("pimage", file)

        

        //console.log(user.username)
        //console.log(file.name)

        //user.pimage = file.name

            alert("Posted")
            axios.post("http://localhost:8000/Api/v1/users/registration", formData).then((res) => console.log(res))
            alert("Registered Successfully")
            navigate("/home")

        //const { username, phone, email, password, pimage } = user
        // if (username && phone && email && password && pimage) {
        //     //console.log(user)
        //     alert("Posted")
        //     axios.post("http://localhost:8000/Api/v1/users/registration", formData).then((res) => console.log(res))
        //     navigate("/home")
        // } else {
        //     alert("invalid input")
        // }
        
    }


    return (
        <>
            <div className="rsidebar">

                <div className="usersignup">
                    <p style={{ color: 'blue', textAlign: 'center', fontSize: '20px' }}>SignUp User</p>

                    <form onSubmit={uploadFile}>
                        <label className="lbl px-1 my-2">User Name :</label>
                        <input type="text" name="username" value={user.username} onChange={handleChange}></input>
                        <label className="lbl px-2">Phone No  :</label>
                        <input type="text" name="phone" value={user.phone} onChange={handleChange}></input>
                        <label className="lbl px-3 py-2">Email Id  :</label>
                        <input type="email" name="email" value={user.email} onChange={handleChange}></input>
                        <label className="lbl px-2 my-2 mx-2">Password  :</label>
                        <input type="password" name="password" value={user.password} onChange={handleChange}></input><br />
                        <label className="px-2 my-2">Profile:</label>
                        <input type="file" className="px-2" name="pimage" onChange={(e) => setFile(e.target.files[0])}></input>

                        <button className="my-2 signup" type="submit">SignUp</button>

                    </form>

                </div>


            </div>
        </>
    )
}
export default Registration;