//defining the custom hook, that will update the Title tab of the browser page

import {useEffect} from 'react'; //imports system defined useEffect

const  useTitle = (record) => {  //functional component. In this case behaves as a reusable react custom hook beginning with "use"
    
    useEffect(()=> { //replaces componentDidMount, componentDidUpdate & componentWilUnmount that exist in a class component, 
                     //for this functional component executes once compnent is injected ino the page  

        document.title =`Record ${record}`  //sets the browser tab page title to the value that is passed to this component
     });

   
}

export default useTitle;