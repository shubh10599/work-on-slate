import React, { useState } from "react";
import "./App.css";
// import RichTextExample from "./component/editor";
import QuillEditor from "./component/QuillEditor";
import "react-quill/dist/quill.snow.css";

const App = () => {
  const [value, setValue] = useState("<h3>Hello, <i>Nisarg</i></h3>");

  return (
    <>
      <QuillEditor handleChange={setValue} value={value} />
      <button onClick={() => console.log(value)}>Submit</button>
      {/* <LinkedInIcon /> */}
    </>
  );
};
export default App;
