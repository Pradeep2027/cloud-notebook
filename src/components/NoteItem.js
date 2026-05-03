import React, {useContext} from 'react'
import NoteContext from '../context/notes/NoteContext';

export default function NoteItem(props) {
  const context = useContext(NoteContext);
  const {deleteNote} = context;

  const {note, updateNote} = props;

  const handleDelete = () => {
    const confirmed = window.confirm(`Are you sure you want to delete note with id ${note._id}?`);
    if (confirmed)  deleteNote(note._id);
  }

  return (
    <>
    <div className="col-md-3">
      <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <button className="btn btn-secondary">{note.tag}</button>
          <div className="card-footer d-flex justify-content-end">
            <button type="button" className="btn btn-primary me-2" onClick={() => {updateNote(note);}}><i className="fa-regular fa-pen-to-square"></i></button>
            <button type="button" className="btn btn-danger ms-2" onClick={handleDelete}><i className="fa-regular fa-trash-can"></i></button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}