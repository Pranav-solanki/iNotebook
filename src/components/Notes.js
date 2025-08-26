import React from "react";
import { useContext, useRef, useState } from "react";
import notecontext from "../context/Notes/notecontext";
import NoteItem from "./Noteitem";
import Addnote from "./Addnote";
import { useEffect } from "react";
export default function Notes(props) {
  const context = useContext(notecontext);
  const { notes, getnote, editnote } = context;
  useEffect(() => {
    getnote();
  }, []);

  const [note, setnote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });
  const updatenote = (currnote) => {
    setnote({
      id: currnote._id,
      etitle: currnote.title,
      edescription: currnote.description,
      etag: currnote.tag,
    });
    ref.current.click();
  };
  const ref = useRef();
  const refclose = useRef();
  const onchange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  const handleclick = (e) => {
    // console.log("i am clicked");
    props.showalert("Note updated successfully", "success");
    editnote(note.id, note.etitle, note.edescription, note.etag);
    refclose.current.click();

    // addnote(note.title, note.description, note.tag);
  };
  return (
    <>
      <Addnote showalert={props.showalert} />
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    aria-describedby="emailHelp"
                    value={note.etitle}
                    onChange={onchange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    onChange={onchange}
                    value={note.edescription}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    onChange={onchange}
                    value={note.etag}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refclose}
              >
                Close
              </button>
              <button
                onClick={handleclick}
                type="button"
                className="btn btn-primary"
                disabled={
                  note.etitle.length < 3 || note.edescription.length < 5
                }
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <h2>Your Notes</h2>
        {notes.map((note) => {
          return (
            <NoteItem
              key={note._id}
              note={note}
              updatenote={updatenote}
              showalert={props.showalert}
            />
          );
        })}
      </div>
    </>
  );
}
