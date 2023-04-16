import React,{useState,useEffect} from 'react';
import database from './firebase'
import firebase from 'firebase'
import './App.css';

function App() {
const[input,setinput]=useState("")
const [values,setvalues]=useState([])
useEffect(()=>{
  database.collection("messages").onSnapshot(snanshop=>setvalues(snanshop.docs.map(doc=>({
    id:doc.id,data:doc.data()
  }))))
},[])
function savetodatabase(value){
  database.collection("messages").add({
    message:input,
    timestamp:firebase.firestore.FielValue.serverTimestamp(),
  })
  setinput("")
}
  return (
    <div className="App">
      <header >
        <header>
          <input type='text'placeholder='Data input..' value={input} onChange={(e)=>setinput(e.target.value)} />
          <button disabled={!input}>Save to database</button>
        </header>
      </header>
      <div className='messages'>
        {values.map(item=>(<ul><li>{item.data.message}</li></ul>))}
      </div>
    
    </div>
  );
}

export default App;
