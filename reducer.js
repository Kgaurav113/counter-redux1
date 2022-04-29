export const reducer = (state,action) =>{
  
    switch(action.type){
        case "INCREMENT":{
       return {
           ...state,
           count:state.count++
       }

        }
        case "DECREMENT":{
            return {
                ...state,
                count:state.count--
            }
        }
        default:{
          return state;
        }
    }
};