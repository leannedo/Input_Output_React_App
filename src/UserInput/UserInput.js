import React from "react";
import "./UserInput.css"

// functional component, only presentational
const userInput = (props) => {
    return(
        <div>
            <input className="input-box"
                type="text"
                onChange={props.change}
                value={props.value}/>
        </div>
    )
}

export default userInput;
