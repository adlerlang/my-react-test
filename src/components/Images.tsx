import React from 'react';
import "./images.css"



 

const Images : React.FC<{image:string, show:Object}> = (props)=>{
  
       const [state,setState]= React.useState({data:[], loading:true})
    
       React.useEffect(()=>{
         async function getDogImages(){
      
       if(props.image != null){
       await fetch(`https://dog.ceo/api/breed/${props.image}/images`).then(data => data.json())
       .then(data => setState({data:data.message, loading:false}))
       .catch(e => console.log(e))
         
      }}
       getDogImages()
       }, [props.image])
 
      


   


   

    


    return(
     
    <React.Fragment>
       
   <div className="imagescontainer" style={props.show}>
    
   {state.loading ?<div>loading...</div> :
     
     state.data.map((k:string,v:number)=><img alt={k} key={v} src={k}></img>)

   }

   </div>
   
  


  </React.Fragment>
    )


}

export default Images