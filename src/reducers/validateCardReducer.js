import {VALIDATE_CARD} from '../action/types' ;

export  default  (state={},action)=>{
   switch(action.type){
    case VALIDATE_CARD:
       return action.payload ;
    default:
        return state;
      }
    }