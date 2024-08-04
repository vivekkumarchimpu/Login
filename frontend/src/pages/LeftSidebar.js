import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataAppContext } from "../UniverseVar.js";

const LeftSidebar = () => {

    const localContext = useContext(DataAppContext);
    // const {userData, upateData} = localContext;
    // const {name} = userName

    return (
        <>
            <div className="lsidebar">

                <Link to='/users/login' className="loginLink">Login</Link>


                <div className="row profile">
                    <div className="col-5 profileImage" >
                        <img src={localContext.userData.pimage} />
                    </div>
                    <div className="col-7 profileData">
                        {/* {localContext.userData.userid} */}
                        <label>User Name: {localContext.userData.username}</label><br />
                        <label>Phone No: {localContext.userData.phone}</label><br />
                        <label>Email Id: {localContext.userData.email}</label>
                        {/* {localContext.userData.pimage} */}
                    </div>
                </div>






            </div>
        </>
    )
}
export default LeftSidebar;