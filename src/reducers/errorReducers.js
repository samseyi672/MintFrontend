import {GET_ERRORS} from "../action/types" ;

export  default  (state={},action)=>{
   switch(action.type){
    case GET_ERRORS:
       return action.payload ;
    default:
        return state;
      }
    }