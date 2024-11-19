import React,{Component} from "react";
import Child from "./Child";

class Parent extends Component{ //React.Component
    render(){
        return(
            <div>
               <Child 
               dataFromParent = "Passing props in Class Component"
               batch = "React Session"
               />
            </div>
        )
    }
}

export default Parent;