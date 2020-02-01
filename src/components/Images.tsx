import React from 'react';
import { isArray, isString } from 'util';



 

const Images : React.FC<{image:string, show:Object}> = (props)=>{
  
       const [state,setState]= React.useState(["loading..."])
    
       React.useEffect(()=>{
         async function getDogImages(){
      
       if(props.image != null){
       await fetch(`https://dog.ceo/api/breed/${props.image}/images`).then(data => data.json())
       .then(data => setState(data.message))
       .catch(e => console.log(e))
         
      }}
       getDogImages()
       }, [props.image])
 
      


   


   

    


    return(
     
    <React.Fragment>
       
   <div style={props.show}>
    


   </div>

   {
      state.map((k,v)=><img key={v} src={k}></img>)

   }
 
{console.log(state)}
  </React.Fragment>
    )


}

export default Images