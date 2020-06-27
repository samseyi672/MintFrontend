import {VALIDATE_CARD,GET_ERRORS} from "./types" ;
import api from './api/api' ;

//this function get card validation 
export const validateCard  = cardnumber => async dispatch =>{
      try {
        const  response = await api.get(`/cardscheme/verify/${cardnumber}`) ;
        // dispatch to reducers
       dispatch({type:VALIDATE_CARD,
         payload:response.data,
          }) ;
         // history.push('/') ;   
    } catch (error) {
       console.log(error) ;
       dispatch({type:GET_ERRORS,
        error:" card error",
         })   
    }
   
 }

 export const  fetchCardList  = (start , limit) => async dispatch =>{
    try {
      const  response = await api.get(`/card-scheme/start/${start}/${limit}`) ;
      // dispatch to reducers
     dispatch({type:VALIDATE_CARD,
       payload:response.data,
        }) ;
       // history.push('/') ;   
  } catch (error) {
     console.log(error) ;
     dispatch({type:GET_ERRORS,
      error:" card error",
       })   
  }
 
}