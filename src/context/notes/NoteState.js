import { useState } from "react";
import NoteContext from "./NoteContext";

export default function NoteState(props)    {
  const host = "http://localhost:5000";
  
  const [notes, setNotes] = useState([]);
  
  const getAllNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        'Content-Type': "application/json",
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjllODYxZTcxOTBhYzQ3ZGQwZDMxZDYyIn0sImlhdCI6MTc3Njk0NDQ2MH0.45smmCs48PF-Hw8aszAmcRXKUZyf54qIUCBn4o0Jkio"
        // 'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjlmYTM1YzFkNmZlNDM2ODA2ZmE5ZGExIn0sImlhdCI6MTc3ODA3NjExNX0.ggfijVfYz2DnKDXRm58-m3w4QjfVVwIP4Rg28M2ROcg"
      }
    });
    const json = await response.json();
    setNotes(json);
  }

  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjllODYxZTcxOTBhYzQ3ZGQwZDMxZDYyIn0sImlhdCI6MTc3Njk0NDQ2MH0.45smmCs48PF-Hw8aszAmcRXKUZyf54qIUCBn4o0Jkio"
      },
      body : JSON.stringify({title, description, tag})
    });
    const newNote = await response.json();
    setNotes(notes.concat(newNote));
  }
  
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': "application/json",
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjllODYxZTcxOTBhYzQ3ZGQwZDMxZDYyIn0sImlhdCI6MTc3Njk0NDQ2MH0.45smmCs48PF-Hw8aszAmcRXKUZyf54qIUCBn4o0Jkio"
      }
    });
    const updatedNotes = notes.filter((note) => {return note._id!==id});
    setNotes(updatedNotes);
  }

  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': "application/json",
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjllODYxZTcxOTBhYzQ3ZGQwZDMxZDYyIn0sImlhdCI6MTc3Njk0NDQ2MH0.45smmCs48PF-Hw8aszAmcRXKUZyf54qIUCBn4o0Jkio"
      },
      body : JSON.stringify({title, description, tag})
    })
    console.log("Editing Note with Id : " + id);
    const json = await response.json();
    console.log(json);
    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let i = 0; i < newNotes.length; i++) {
      const element = newNotes[i];
      if (element._id === id) {
        newNotes[i].title = title;
        newNotes[i].description = description;
        newNotes[i].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getAllNotes}}>
      {props.children}
    </NoteContext.Provider>
  )
};