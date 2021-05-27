import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import CreateArea from "./CreateArea";

function App() {
const [keeperobj,setItem] = useState([]);


function addObj(newNote){
  console.log(newNote);
  setItem(prevValues =>{
    return [...prevValues, newNote];
  })
  console.log(keeperobj);
  // setObj({title:"",content:""});
 
}

function deleteNote(id){
  setItem(prevNotes=>{
    return prevNotes.filter((value,index)=>{
      return index !== id;
    })
  })
}

  return (
    <div>
      <Header />
      <CreateArea onAdd={addObj} />
      {keeperobj.map(function(el,index){
        return <Note key={index} id={index} title={el.title} content={el.content} deleteNote={deleteNote}/>
      })}
      
      <Footer />
    </div>
  );
}

export default App;
