import * as redux from 'redux'
import {DogReducer} from './../reducers/Search'

const store = redux.createStore(DogReducer)

function set_data(value:string){
    
    store.dispatch({type:'add', data:value})
       
}

function get_data(){
    var value = store.getState()
    return value.data
}

export {store,get_data,set_data}