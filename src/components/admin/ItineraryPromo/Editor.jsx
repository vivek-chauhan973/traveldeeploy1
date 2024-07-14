import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const QuillNoSSRWrapper = dynamic(() => import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading editor...</p>,
});

const Editor = ({ onChange,editorData }) => {
    const [editorHtml, setEditorHtml] = useState();
    const [modules, setModules] = useState({});
// console.log('html11111111111: ',editorHtml)
    useEffect(() => {
         setEditorHtml(editorData||'');
        const initializeModules = () => {
            setModules({
                toolbar: [
                    [{ 'header': '1' }, { 'header': '2' }],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                    ['link', 'image']
                ]
            });
        };

        initializeModules();
    }, [editorData]);

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ];

    const handleEditorChange = (html) => {
        setEditorHtml(html);
        onChange(html);
    };

    return (
        <div>
            <div className='w-full'>
                <QuillNoSSRWrapper
                    className='rounded h-60 mb-10'
                    theme="snow"
                    formats={formats}
                    value={editorHtml}
                    onChange={handleEditorChange}
                    modules={modules}
                />
            </div>
        </div>
    );
};

export default Editor;
