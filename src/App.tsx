import React from 'react'
import {Provider} from 'react-redux'
import './App.css'
import Images from './components/Images'
import {get_data,set_data} from './store/Search'







const App: React.FC<{}>  = () =>  {
  const[state, setState] = React.useState([]);
  const[button, setButton] = React.useState({value:'', show:{display:"none"}})
  const[result, setSearch] = React.useState('')

  const handleChange = (event:any):void=>{
     return setSearch(event.target.value)
  }
  
  const handleValue=(value:string)=>{
      return (x:string)=> x.toLowerCase().includes(value.toLowerCase())
  }

 React.useEffect(()=>{
    async function fetchDogBreeds(){ 
  await fetch("https://dog.ceo/api/breeds/list").then(data=>data.json())
          .then(data => setState(data.message))}


         fetchDogBreeds()
        },[])

      
     

       


  
  return (
     
 
         <>
              
    <div className="container"> 
      <div className="header"> <div className="logo">Dogs!</div>
      
      <div className ="search">
        <form><input type="text" placeholder="search"  onChange={handleChange} ></input></form>
        
    </div>
      
      
        </div>
      
    
      <div className="buttondivs"> 
      {state.filter(handleValue(result)).map((k,v)=><button key={v}  id={k}
             onClick={()=>setButton({value:k, show:{display:"inline"}}
             )

            }
      >{k}</button>)}
      </div>
     
    
      {button.show.display !== "none" ? <Images image={button.value} show={button.show}></Images> :<div></div>}
     
 
      </div>
      <div>
   
     </div>
    
     </>

  
  )
}

export default App;
