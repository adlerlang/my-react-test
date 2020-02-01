import React from 'react';
import logo from './logo.svg';
import './App.css';
import { isArray } from 'util';
import { render } from 'react-dom';
import { getAllByAltText } from '@testing-library/react';
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import Images from "./components/Images"




const App: React.FC = () =>  {
  const[state, setState] = React.useState([]);
  const[button, setButton] = React.useState({value:'', show:{display:"none"}})

 React.useEffect(()=>{
    async function fetchDogBreeds(){ 
  await fetch("https://dog.ceo/api/breeds/list").then(data=>data.json())
          .then(data => setState(data.message))}
         fetchDogBreeds()
        },[])

       


  
  return (
     
 
         <React.Fragment>
      <div className="container"> 
      <div className="header"> <div className="logo">Dogs!</div>
      <div className ="search"><form>search:<input type="text" name="search"></input></form></div>
      </div> 
      <div className="buttondivs"> 
      {state.map((k,v)=><button key={v}  id={k}
             onClick={()=>setButton({value:k, show:{display:"inline"}}
             )
            
            }
      >{k}</button>)}
      </div>
       
      {button.show.display !== "none" ? <Images image={button.value} show={button.show}></Images> :<div></div>}
       
      </div>

     </React.Fragment>

  
  )
}

export default App;
