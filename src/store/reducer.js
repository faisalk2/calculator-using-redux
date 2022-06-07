import { Add, Division, Multi } from "./action";
import { Substrack } from "./action";
export const reducer=(state,action)=>{
    switch(action.type){
        case Add:{
            state.count=state.count+action.payLoad;
            return {...state};
            
        }
        case Substrack:{
            state.count=state.count-action.payLoad;
            return {...state};
        }
        case Multi:{
            state.count=state.count*action.payLoad;
            return {...state};
        }
        case Division:{
            state.count=state.count/action.payLoad;
            return {...state};
        }
        default:{
            return state;
        }
    }
}