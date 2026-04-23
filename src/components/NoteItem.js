import React from 'react'

export default function NoteItem(props) {
  const {note} = props;
  return (
    <>
    <div className="col-md-3">
      <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <button className="btn btn-secondary">{note.tag}</button>
          <div className="card-footer d-flex justify-content-end">
            <button type="button" className="btn btn-primary me-2">Edit </button>
            <button type="button" className="btn btn-danger ms-2">Delete</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}