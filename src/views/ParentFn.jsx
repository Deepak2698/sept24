import React from "react";
import ChildFn from "./ChildFn";

const ParentFn = () => {
    return(
        <div>
            <ChildFn dataFromParent = "passing props in functional component"/>
        </div>
    )
}

export default ParentFn;