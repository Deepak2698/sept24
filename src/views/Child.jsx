import React,{Component} from "react";

class Child extends Component{ //React.Component
    render(){
        return(
            <div>
                <h2> We are learning : {this.props.dataFromParent}</h2>
                <h3>{this.props.batch}</h3>
            </div>
        )
    }
}

export default Child;