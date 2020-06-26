import {VALIDATE_CARD,GET_ERRORS} from "./types" ;
import api from './api/api' ;

export const validateCard  = id => async dispatch =>{
      try {
        const  response = await api.get(`/cardscheme/verify/${id}`) ;
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