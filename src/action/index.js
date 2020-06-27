import {VALIDATE_CARD,GET_ERRORS,CARD} from "./types" ;
import api from './api/api' ;

//this function get card validation 
export const validateCard  = cardnumber => async dispatch =>{
      try {
        const  response = await api.get(`/cardscheme/verify/${cardnumber}`) ;
        // dispatch to reducers
       dispatch({type:VALIDATE_CARD,
         payload:response.data,
          }) ;  
    } catch (error) {
       console.log(error) ;
       dispatch({
        type:GET_ERRORS,
        payload:error,
    }) 
    }
   
 }
 export const fetchStream  =  async id =>{
  const  response = await api.get(`/cardscheme/verify/${id}`) ;
   // dispatch to reducers
   console.log(response.data) ;
    // history.push('/') ;
}

  export const  fetchCardList = (start,limit) => async dispatch =>{
    console.log(start,limit) ;

    let path=`http://localhost:8091/cardscheme/card-scheme/start?start=${start}&limits=${limit}` ;
    console.log(path) ;
    try {
      const  response = await api.get(path) ;
      // dispatch to reducers
      console.log('pagination', response.data) ;
     dispatch({type:CARD,
       payload:response.data,
            }) ;
       }catch (error) {
        console.log(error) ;
        dispatch({type:GET_ERRORS,
               payload:error,
            })   
  }
 
}





















