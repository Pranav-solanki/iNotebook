import React from "react";
import { useContext } from "react";
import notecontext from "../context/Notes/notecontext";
import NoteItem from "./Noteitem";
import Addnote from "./Addnote";
export default function Notes() {
  const context = useContext(notecontext);
  const { notes, setnotes } = context;
  return (
    <>
      <Addnote />
      <div className="row">
        <h2>Your Notes</h2>
        {notes.map((note) => {
          return <NoteItem note={note} />;
        })}
      </div>
    </>
  );
}
