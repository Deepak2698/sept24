//calling the custom hook 

import React,{useState} from 'react'; //imports useState & useEffect
import useTitle from './CustomHook';  //imports user defined custom hook "usetitle"

const  Title2 = () => {
    const [record,setRecord] = useState(0);
   //const [new State,setter function ] = useState(initial state); 
   /* setRecord: Custom method that updates the state variable, registered here
      record: current value of state variable
      useState(0) : inital state property value of the record variable set=0
   */

    useTitle(record);  //call the custom hook and pass the state variable to it

    return (
        <div>
              <button onClick={() => setRecord(record+1)}>   {/*data passed to the setRecord() function,  changes the state of "record" variable  */}
                 Record : {record}
               </button>
        </div>
    )
}

export default Title2;