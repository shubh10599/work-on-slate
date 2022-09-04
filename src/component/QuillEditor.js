import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const QuillEditor = ({ handleChange, value }) => {
  return <ReactQuill theme="snow" value={value} onChange={handleChange} />;
};

export default QuillEditor;
