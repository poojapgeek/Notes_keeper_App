import CreateArea from "./components/CreateArea";
import Footer from "./components/Footer"
import Header from "./components/Header"
import Note from "./components/Note"
import { useState,useEffect } from "react";
function App() {
  const [notes,setNotes]=useState(()=>{
    const savedNotes=localStorage.getItem('notes');
    return savedNotes?JSON.parse(savedNotes):[];
  });
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  function addNote(newNote){
    setNotes(prevNotes=>[...prevNotes,newNote]);
  }
  function deleteNode(id){
    setNotes(prevNotes=>prevNotes.filter((_,index)=>index!==id));
  }
  return (
    <>
     <Header/>
     <CreateArea onAdd={addNote}/>
     {notes.map((noteItem,index)=>(
      <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNode}/>
     ))}
     <Footer/>
    </>
  )
}

export default App
