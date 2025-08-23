import React, { useState } from "react";
import notecontext from "../context/Notes/notecontext";
import { useContext } from "react";
const Addnote = () => {
  const context = useContext(notecontext);
  const { addnote } = context;
  const [note, setnote] = useState({ title: "", description: "", tag: "default" });
  const onchange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  const handleclick = (e) => {
    e.preventDefault();
    addnote(note.title,note.description,note.tag);
  };
  return (
    <div>
      <div className="container my-3">
        <h1>Welcome to the Home Page</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label"></label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onchange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label"></label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onchange}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button
            onClick={handleclick}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addnote;
