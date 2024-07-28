import React, { useState, useRef, useMemo } from 'react';
import dynamic from 'next/dynamic';
import "../../../app/globals.css"

// Dynamically import JoditEditor with SSR disabled
const JoditEditor = dynamic(() => import('jodit-react'), {
  ssr: false,
});

const Payment = () => {
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState([]);
  const [seoTitle, setSeoTitle] = useState('');
  const [seoDescription, setSeoDescription] = useState('');
  const [seoKeywords, setSeoKeywords] = useState('');

  const handleTagChange = (event) => {
    setTags(event.target.value.split(',').map(tag => tag.trim()));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const blogData = {
      title,
      content,
      category,
      tags,
      seoTitle,
      seoDescription,
      seoKeywords,
    };

    try {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      // You can add more actions here, e.g., redirecting the user to another page
    } catch (error) {
      console.error('Failed to create blog:', error);
    }
  };

  const config = useMemo(() => ({
    readonly: false,
    placeholder: 'Start typing...',
    toolbar: true,
    height: 600,
    buttons: [
      'bold',
      'italic',
      'underline',
      'strikethrough',
      'eraser',
      'ul',
      'ol',
      'outdent',
      'indent',
      'font',
      'fontsize',
      'brush',
      'paragraph',
      'image',
      'link',
      'align',
      'undo',
      'redo',
      'table',
    ],
  }), []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='flex justify-between items-center border-b border-slate-50 mb-5'>
          <div>
            <h2>Payment</h2>
          </div>

          <div className='flex gap-3 justify-end mb-2'>
            <button type="button" className='border border-primary/80 hover:bg-primary hover:text-white text-primary px-4 py-1 rounded'>Draft</button>
            <button type="submit" className='bg-navyblack/80 hover:bg-navyblack text-white px-4 py-1 rounded'>Publish</button>
          </div>
        </div>
        <div className='md:flex gap-5 '>
          <div className='grow'>
            <div>
              <label className='text-sm font-semibold text-black/60'>Title</label>
              <input
                type="text"
                value={title}
                className='border w-full rounded-md h-8 px-2 text-sm grow focus:border-black/60 font-sans outline-none'
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <label className='text-sm font-semibold text-black/60'>Content</label>
              {typeof window !== 'undefined' && (
                <JoditEditor
                  ref={editor}
                  value={content}
                  config={config}
                  className=''
                  tabIndex={1}
                  onBlur={(newContent) => setContent(newContent)}
                  onChange={() => {}}
                />
              )}
            </div>
          </div>
          <div className='min-w-[230px] mt-6'>
            <div className='flex gap-2 items-center'>
              <label className='text-sm font-semibold text-black/60'>Category</label>
              <select className='h-7 focus:border-none rounded-md border-none' value={category} onChange={(e) => setCategory(e.target.value)} required>
                <option value="">Select a category</option>
                <option value="tech">Tech</option>
                <option value="lifestyle">Lifestyle</option>
                <option value="travel">Travel</option>
                {/* Add more categories as needed */}
              </select>
            </div>
            <div>
              <div>
                <label className='text-sm font-semibold text-black/60'>Tags (comma separated)</label>
              </div>
              <input
                type="text"
                value={tags.join(', ')}
                onChange={handleTagChange}
                className='border w-full text-sm rounded-md h-8 px-2 grow focus:border-black/60 font-sans outline-none'
              />
            </div>
            
            <div>
              <div>
                <label className='text-sm font-semibold text-black/60'>SEO Title</label>
              </div>
              <input
                type="text"
                value={seoTitle}
                onChange={(e) => setSeoTitle(e.target.value)}
                className='border w-full text-sm rounded-md h-8 px-2 grow focus:border-black/60 font-sans outline-none'
              />
            </div>
            <div>
              <div>
                <label className='text-sm font-semibold text-black/60'>SEO Description</label>
              </div>
              <textarea
                value={seoDescription}
                onChange={(e) => setSeoDescription(e.target.value)}
                className='border w-full text-sm rounded-md resize-none h-32 p-2 grow focus:border-black/60 font-sans outline-none'
              />
            </div>
            <div>
              <div>
                <label className='text-sm font-semibold text-black/60'>SEO Keywords (comma separated)</label>
              </div>
              <input
                type="text"
                value={seoKeywords}
                onChange={(e) => setSeoKeywords(e.target.value)}
                className='border w-full text-sm rounded-md h-8 px-2 grow focus:border-black/60 font-sans outline-none'
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Payment;
