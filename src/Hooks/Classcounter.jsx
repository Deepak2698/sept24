import React from "react";

class Classcounter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        };
    }

    render() {
        return (
            <div> 
                <h1>You click {this.state.count}  times</h1>
                <button onClick={() => this.setState( {count: this.state.count + 1} )}>Click me </button>
            </div>
        );
    }
}
export default Classcounter;