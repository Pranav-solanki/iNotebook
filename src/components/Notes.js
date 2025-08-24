import React from "react";
import { useContext } from "react";
import notecontext from "../context/Notes/notecontext";
import NoteItem from "./Noteitem";
import Addnote from "./Addnote";
import { useEffect } from "react";
export default function Notes() {
  const context = useContext(notecontext);
  const { notes, getnote } = context;
  useEffect(() => {
    getnote();
  }, []);
  
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
