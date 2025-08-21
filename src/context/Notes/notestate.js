import Notecontext from "./notecontext";

const Notestate = (props) => {
  const state = {
    name: "pranav",
  };
  return (
    <Notecontext.Provider value={state}>{props.children}</Notecontext.Provider>
  );
};
export default Notestate;
