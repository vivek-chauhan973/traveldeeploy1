import { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

// Dynamic import for Quill.js as it needs to be loaded on the client-side
const QuillNoSSRWrapper = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

// Component for the rich text editor
const RichTextEditor = () => {
  const [editorHtml, setEditorHtml] = useState('');

  // Define Quill modules and formats
  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link',],
    ],
  };

  // Handle editor content change
  const handleEditorChange = (html) => {
    setEditorHtml(html);
  };

  return (
    <div>
      <QuillNoSSRWrapper
        className='rounded'
        theme="snow"
        value={editorHtml}
        onChange={handleEditorChange}
        modules={modules}
      />
    </div>
  );
};

export default RichTextEditor;
