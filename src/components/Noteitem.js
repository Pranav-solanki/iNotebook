import React from "react";
import notecontext from "../context/Notes/notecontext";
import { useContext } from "react";
export default function Noteitem(props) {
  const context = useContext(notecontext);
  const { deletenote } = context;
  const { note, updatenote } = props;
  const handleclick = (e) => {
    props.showalert("Deleted successfully", "success");
    deletenote(note._id);
  };
  return (
    <div className="col-md-3 card-container">
      <div className="card my-3 note-card">
        <div className="card-body ">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i onClick={handleclick} className="fa-solid fa-trash action-icon"></i>
            <i
              onClick={() => {
                updatenote(note);
              }}
              className="fa-solid fa-pen-to-square action-icon"
            ></i>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
}
