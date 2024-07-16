import React from "react";
import { useNavigate } from "react-router-dom";

const RightSidebar = () => {
    const navigate = useNavigate()
    const reg = () => {
        navigate('/registration')
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
                            <input type="email"></input>
                            <label className="py-3">Password  :</label>
                            <input type="password"></input>
                            <div className="loginbtn">
                                <button className="mx-1 signup" onClick={reg}>SignUp</button>
                                <button className="mx-1 login">Login</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default RightSidebar;