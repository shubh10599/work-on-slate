import React from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

const QuillEditor = ({ handleChange, value }) => {
//   // let editor = new Quill('.editor');
//   // let option  = {
//   //   debug: 'info',
//   //   modules: {
//   //     toolbar: '#toolbar'
//   //   },
//   //   placeholder: 'Compose an epic...',
//   //   readOnly: true,
//   //   theme: 'snow'
//   // };
//   return( 
//   <ReactQuill theme="snow" value={value} onChange={handleChange} />
//   );
// };

// export default QuillEditor;

// class MyComponent extends Component {
  // constructor(props) {
    // super(props);
    // this.state = {
      // text: "",
    // }
  // }

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

  
    return (
      <div className="text-editor">
        <ReactQuill theme="snow"
                    modules={modules}
                    formats={formats}
                    value={value}
                    onChange={handleChange}
                    >
        </ReactQuill>
      </div>
    )
  
}

export default QuillEditor;