import { Action } from "redux"


export const DogReducer=(state:any,  action: { type: any; data: any })=>{
  const m = ''
  
  switch(action.type){
    
       case 'add':{
            return {
                data: 
                    action.data
              
            }
        }
        case 'Show_Names':{
         return {
              data: state.data,
         }

        }
        default:{
          return {data: ''}
        }

     }


}