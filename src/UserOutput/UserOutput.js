import React from "react";
import "./UserOutput.css";


// functional component, only presentational
const userOutput = (props) => {
    return(
        <div>
            <p>{props.username}</p>
            <p>{props.text}</p>
        </div>
    )
}

export default userOutput;