import React from "react";
import { useContext } from "react";
import notecontext from "../context/Notes/notecontext";
import NoteItem from "./Noteitem";
export default function Notes() {
  const context = useContext(notecontext);
  const { notes, setnotes } = context;
  return (
    <div className="row">
        <h2>Your Notes</h2>
        {notes.map((note)=>{
            return <NoteItem note={note}/>;
        })}
    </div>
  );
}
