import React from 'react';

class State extends React.Component{
    constructor(){
      super();
      this.state = {
        subject: "React Certification course"
      }    
    }
   render(){
     return (
        <div>
            <h2>
                Welcome to {this.state.subject};
            </h2>
            
        </div>
     );
   }
};
export default State;