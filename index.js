import Store from "./Store.js";
import { reducer } from "./reducer.js";
const store=new Store(reducer,{count:50})
// let value=0;
let counter =document.getElementById("counterValue");
let inc=document.getElementById("incrementCounter");
let dec=document.getElementById("decrementCounter");
counter.innerText=store.getState().count;
inc.addEventListener("click",function(){
store.dispatch({
    type:"INCREMENT"
})
counter.innerText=store.getState().count;
});
dec.addEventListener("click",function(){
store.dispatch({
    type:"DECREMENT"
})
counter.innerText=store.getState().count;
})