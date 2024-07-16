import React from "react";

const Registration = () => {
    return (
        <>
            <div className="rsidebar">
                
                <div className="usersignup">
                <p style={{color: 'blue', textAlign: 'center', fontSize: '20px'}}>SignUp User</p>
                    <label className="lbl px-1 my-2">User Name :</label>
                    <input type="text"></input>
                    <label className="lbl px-2">Phone No  :</label>
                    <input type="text"></input>
                    <label className="lbl px-3 py-2">Email Id  :</label>
                    <input type="email"></input>
                    <label className="lbl px-2 my-2 mx-2">Password  :</label>
                    <input type="password"></input>
                    <label className="px-1 my-2">Profile Image :</label>
                    <input type="text"></input>

                    <button className="my-2 signup">SignUp</button>


                </div>


            </div>
        </>
    )
}
export default Registration;