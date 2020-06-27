import {CARD} from '../action/types' ;
import _ from 'lodash';

export  default (state={},action)=>{
   switch(action.type){
    case CARD:
      return {...state,..._.mapKeys(action.payload,'success')}
    default:
        return state;
      }
    };