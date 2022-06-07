
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import { AddFun, DivisionFun, MultiFun, SubstrackFun } from './store/actiontype';


function App() {
  const [query,setQuery]=useState(0);
  const dispatch=useDispatch();
  const state=useSelector((state)=>state);
 
  return (
    <div className="App">
      <input type='number' placeholder='enter value' value={query} onChange={(e)=>setQuery(e.target.value)} ></input>
     { state.count!==Infinity  ? <h1>Count:-{state.count}</h1>:<h1>Not a valid Number</h1>}
     <div>
       <button onClick={()=>dispatch(AddFun(query))}>+</button>
       <button disabled={state===0} onClick={()=>dispatch(SubstrackFun(query))}>-</button>
       <button onClick={()=>dispatch(MultiFun(query))}>*</button>
       <button  onClick={()=>dispatch(DivisionFun(query))}>/</button>
     </div>
    </div>
  );
}

export default App;
