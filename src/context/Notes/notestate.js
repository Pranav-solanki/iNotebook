import { useState } from "react";
import Notecontext from "./notecontext";
import { data } from "react-router-dom";
const Notestate = (props) => {
  const defaultnotes = [];
  const [notes, setnotes] = useState(defaultnotes);
  const host = "http://localhost:5000";
  const addnote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST", // or 'POST', 'PUT', 'DELETE', etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    // console.log("works well");
    const note = await response.json();
    setnotes(notes.concat(note));
    // const note = {
    //   _id: "68a4b6370f60738d84b360b2",
    //   user: "68a4a79d0f60738d84b360ac",
    //   title: title,
    //   description: description,
    //   tag: tag,
    //   date: "2025-08-19T17:36:55.396Z",
    //   __v: 0,
    // };
  };

  const getnote = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET", // or 'POST', 'PUT', 'DELETE', etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    // console.log(json);
    setnotes(json);
  };
  const editnote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT", // or 'POST', 'PUT', 'DELETE', etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const newnotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newnotes.length; index++) {
      const element = newnotes[index];
      if (element._id == id) {
        newnotes[index].title = title;
        newnotes[index].description = description;
        newnotes[index].tag = tag;
        break;
      }
    }
    setnotes(newnotes);
  };
  const deletenote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE", // or 'POST', 'PUT', 'DELETE', etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    // const result = await response.json();
    // console.log(result);
    const newnotes = notes.filter((note) => {
      return note._id != id;
    });
    setnotes(newnotes);
  };
  return (
    <Notecontext.Provider
      value={{ notes, addnote, deletenote, editnote, getnote }}
    >
      {props.children}
    </Notecontext.Provider>
  );
};
export default Notestate;
