import React, { useContext } from "react";
import Notecontext from "../context/Notes/notecontext";
const About = () => {
    const a =useContext(Notecontext);
  return <div>This is {a.name}</div>;
};

export default About;
