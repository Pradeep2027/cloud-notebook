import React, {useContext, useState} from 'react'
import NoteContext from '../context/notes/NoteContext';

export default function AddNote() {
  const context = useContext(NoteContext);
  const {addNote} = context;

  const [note, setNote] = useState({title: "", description: "", tag: ""});
  
  const onChange = (e) => {
    setNote({...note, [e.target.name]:e.target.value});
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
  }

  return (
    <div className='my-3'>
      <h2>Add notes</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" name="description" onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" className="form-control" id="tag" name='tag' aria-describedby="emailHelp" onChange={onChange} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Add Note</button>
      </form>
    </div>
  )
}