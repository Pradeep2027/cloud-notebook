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
    setNote({title: "", description: "", tag: ""});
  }

  return (
    <div className='my-3'>
      <h2>Add notes</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name='title' value={note.title} onChange={onChange} minLength={3} required />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" className="form-control" id="tag" name='tag' value={note.tag} onChange={onChange} minLength={3} required />
        </div>
        <button disabled={(note.title.length < 3) || (note.description.length < 5)} type="submit" className="btn btn-primary" onClick={handleSubmit}>Add Note</button>
      </form>
    </div>
  )
}