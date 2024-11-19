import React from 'react';

class  Event  extends React.Component{
    
    click(event){
        alert("Good One");
    }
    
    render(){
      return (
          <button onClick={(event) => {this.click(Event)}}>Click Here</button>
      );
    }
 };
 
 export default Event;