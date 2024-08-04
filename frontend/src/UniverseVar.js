import React, { useState } from "react"
const DataAppContext = React.createContext();
const UniverseVar = (props) => {
    const initialValue = {
        userid:"",
        username:"",
        phone:"",
        email:"",
        pimage:""
    }
    const [userData, updateData] = useState(initialValue)
    return(
        <DataAppContext.Provider value={{userData, updateData}} >
            {
                props.children
            }
        </DataAppContext.Provider>
    )
}
export default UniverseVar;
export {DataAppContext};