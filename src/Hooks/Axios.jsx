import React,{useState, useEffect} from 'react'; //imports useState
import axios from 'axios';       //Promise based HTTP Client. Returns a Promise. npm module 

function Axios() { 
   const [albums,setAlbums] = useState([]); 

    useEffect( () => { //replaces componentDidMount, componentDidUpdate & componentWilUnmount that exist in a class component can replaced by useEffect, for this functional component
                       //executes once compnent is injected ino the page  
       axios.get('https://jsonplaceholder.typicode.com/albums/')  //send GET request to the REST url for data
       .then(res => {              //listen for response
          console.log(res);
          setAlbums(res.data);    //data passed to the setAlbums() function that changes the state of the albums array and updates it with data
      });

    },[]);            //[] stops infinite useEffect() execution each time view refreshes.  Can add variable also. fires if value changes
   
   return(
      <ul>
      {albums.map((album) => {    //map function called once for each array element. 
         return <li key={album.id}>{album.id} -> {album.title}</li>
         })
      }
      </ul>
  )

}
export default Axios;

