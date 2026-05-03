import React, { useContext, useEffect, useRef, useState } from 'react';
import NoteContext from '../context/notes/NoteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

export default function Notes() {
  const modalOpen = useRef(null);
  const modalClose = useRef(null);
  const context = useContext(NoteContext);
  const {notes, getAllNotes, editNote} = context;
  useEffect(() => {
    getAllNotes();
    // eslint-disable-next-line
  }, []);

  const [tNote, setNote] = useState({eid: "", etitle: "", edescription: "", etag: ""});
  
  const updateNote = (enote) => {
    modalOpen.current.click();
    setNote({eid: enote._id, etitle: enote.title, edescription: enote.description, etag: enote.tag});
  }

  const onChange = (e) => {
    setNote({...tNote, [e.target.name]:e.target.value});
  }

  const handleUpdate = () => {
    editNote(tNote.eid, tNote.etitle, tNote.edescription, tNote.etag);
    modalClose.current.click();
  }

  return (
    <>
      <AddNote />
      <button type="button" ref={modalOpen} className='d-none' data-bs-toggle="modal" data-bs-target="#exampleModal"></button>
      <div className="modal fade" id="exampleModal" tabIndex={"-1"} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" value={tNote.etitle} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label"> Description </label>
                  <input type="text" className="form-control" id="edescription" name="edescription" value={tNote.edescription} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="etag" name="etag" aria-describedby="emailHelp" value={tNote.etag} onChange={onChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={modalClose}> Cancel </button>
              <button type="button" className="btn btn-primary" onClick={handleUpdate}> Update Note </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2>Your notes</h2>
        {notes.map((note) => {
          return (
            <NoteItem key={note._id} note={note} updateNote={updateNote} />
          );
        })}
      </div>
    </>
  );
}