import React, { useState } from "react";
import notecontext from "../context/Notes/notecontext";
import { useContext } from "react";
const Addnote = (props) => {
  const context = useContext(notecontext);
  const { addnote } = context;
  const [note, setnote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const onchange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  const handleclick = (e) => {
    e.preventDefault();
    addnote(note.title, note.description, note.tag);
    setnote({
      title: "",
      description: "",
      tag: "",
    });
    props.showalert("Note added successfully", "success");
  };
  return (
    <div>
      <div className="container my-3 add-note-container">
        <h1>Welcome to the Home Page</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onchange}
              value={note.title}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onchange}
              value={note.description}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              onChange={onchange}
              value={note.tag}
            />
          </div>

          <button
            onClick={handleclick}
            type="submit"
            className="btn btn-primary"
            disabled={note.title < 3 || note.description.length < 5}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addnote;
