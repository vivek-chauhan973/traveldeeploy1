import React, { useState } from 'react';

export default function Reviews() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button
        onClick={handleOpen}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Open modal
      </button>
      {open && (
        <div>hello</div>
      )}
    </div>
  );
}
