import React,{useState, useEffect} from 'react'; //imports useState & useEffect

function UseEffect() { //functional component with useEffect() Hook
   const [isOn,setIsOn] = useState(false); 
   //const [new State,setter function ] = useState(initial state); 
   /*          setIsOn: Custom method that updates the state variable, registered here
                  isOn: current value of state variable
       useState(false): inital state property value set = false for isOn
   */
   useEffect(() => {  //replaces componentDidMount, componentDidUpdate & componentWilUnmount in a class component, 
                      //executes once compnent is injected into the page  
       console.log('Executed! ' + Math.random()*100);
      //Indicates useEffect() is called moment component is mounted
   })
   
   return(
      <div>
         <h1>useEffect() Effect Hook</h1>

         {!isOn && (
            <button type="button" onClick={ () => setIsOn(true)}>  {/*Changes state of isOn = true  */}
               <h1>Subscribe</h1>
            </button>
         )}
         
         {isOn && (
            <button type="button" onClick={ () => setIsOn(false)}>  {/*Changes state of isOn = false  */}
               <h1>Sucessfully subscribed</h1>
            </button>
         )}
      </div>
   )
}
export default UseEffect;

