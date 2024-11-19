import React from "react";

const ChildFn = (props) => {
    return(
        <div>
            <h3>We are learning : {props.dataFromParent}</h3>
        </div>
    )
}

export default ChildFn;