import React from 'react'
import {store, get_data} from '../store/Search'
import {Provider, ReactReduxContext} from 'react-redux'
import { strictEqual } from 'assert'





const SearchBar:React.FC<{}> =(props)=>{

const[search, setSearch] = React.useState([])





const handleChange = async (event:any)=>{

  
    var start = store.subscribe(
        async function(){
           await store.getState().data
        }

      )
      setSearch(event.target.value.toLowerCase())
      store.dispatch({type:'add', data:search})
      start()

 }

const v =  ()=>{
 store.subscribe(()=>store.getState())
}








return(
    <>


   {`search:${search} store:${get_data().length}`}


    </>
)

}




//export default Search
export {SearchBar}
