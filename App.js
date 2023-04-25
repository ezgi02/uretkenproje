import React,{useState,useEffect} from 'react';

import firebase from './firebase'

import {db} from './firebase'
import './App.css';


function App() {
  const[input,setinput]=useState("")
const [values,setvalues]=useState([])
useEffect(()=>{
 
  db.collection("messages").orderBy("timestamp","desc").onSnapshot(snapshop=>setvalues(snapshop.docs.map(doc=>({
    id:doc.id,data:doc.data()
  }))))
},[])
function ekle(value){
  db.collection("messages").add({
    message:value,
    timestamp:firebase.firestore.FieldValue.serverTimestamp(),
  })
  setinput("")
}
function silveri(value){
  db.collection("messages").doc(value).delete()
}

  return (
    <div className="App">
      <h1>Yapilacaklar Listesi</h1>
      <header>
        <input type='text' placeholder='Yeni görev ekle' value={input}onChange={(e)=>setinput(e.target.value)}/>
        <button disabled={!input} onClick={()=>ekle(input)}>Ekle</button>
      </header>
      <div className='messages'>
        {values.map(item=>(<ul><li>{item.data.message}<div><button onClick={()=>silveri(item.id)}>Sil</button><button>Düzenle</button></div></li></ul>))}
      </div>
      
      
    </div>
  );
}

export default App;
