import { useState } from "react";
import Notecontext from "./notecontext";
const Notestate = (props) => {
  const defaultnotes = [
    {
      _id: "68a4b6370f60738d84b360b2",
      user: "68a4a79d0f60738d84b360ac",
      title: "My title",
      description: "Pleasehsh add a note",
      tag: "personel",
      date: "2025-08-19T17:36:55.396Z",
      __v: 0,
    },
    {
      _id: "68a4b6370f60738d84b360b2",
      user: "68a4a79d0f60738d84b360ac",
      title: "My title",
      description: "Pleasehsh add a note",
      tag: "personel",
      date: "2025-08-19T17:36:55.396Z",
      __v: 0,
    },
    {
      _id: "68a4b6370f60738d84b360b2",
      user: "68a4a79d0f60738d84b360ac",
      title: "My title",
      description: "Pleasehsh add a note",
      tag: "personel",
      date: "2025-08-19T17:36:55.396Z",
      __v: 0,
    },
    {
      _id: "68a4b6370f60738d84b360b2",
      user: "68a4a79d0f60738d84b360ac",
      title: "My title",
      description: "Pleasehsh add a note",
      tag: "personel",
      date: "2025-08-19T17:36:55.396Z",
      __v: 0,
    },
    {
      _id: "68a4b6370f60738d84b360b2",
      user: "68a4a79d0f60738d84b360ac",
      title: "My title",
      description: "Pleasehsh add a note",
      tag: "personel",
      date: "2025-08-19T17:36:55.396Z",
      __v: 0,
    },
    {
      _id: "68a4b6370f60738d84b360b2",
      user: "68a4a79d0f60738d84b360ac",
      title: "My title",
      description: "Pleasehsh add a note",
      tag: "personel",
      date: "2025-08-19T17:36:55.396Z",
      __v: 0,
    },
  ];
  const [notes, setnotes] = useState(defaultnotes);
  const addnote = (title, description, tag) => {
    console.log("works well");
    const note = {
      _id: "68a4b6370f60738d84b360b2",
      user: "68a4a79d0f60738d84b360ac",
      title: title,
      description: description,
      tag: tag,
      date: "2025-08-19T17:36:55.396Z",
      __v: 0,
    };
    setnotes(notes.concat(note));
  };
  const deletenote = () => {};
  const editnote = () => {};
  return (
    <Notecontext.Provider value={{ notes, addnote }}>
      {props.children}
    </Notecontext.Provider>
  );
};
export default Notestate;
