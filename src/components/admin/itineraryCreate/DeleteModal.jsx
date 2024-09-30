import React, { useState } from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
const DeleteModal = ({ Deleted_id, isOpen, onClose, onDelete }) => {
  const [open, setOpen] = React.useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const deletePackage = async (packageList_id) => {
    try {
      const response = await fetch(`/api/package/delete-package`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ packageList_id }),
      });
      // console.log("badge id show for delete" ,packageList_id)
      if (response.ok) {
        // const fetchedFaqHeading = await fetchFaqHeading();
        console.log("your package is now delete");
      } else {
        console.error("Failed to delete badge");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = () => {
    setIsDeleting(true);
    onDelete();

    // console.log("delete id value show is here",Deleted_id)
    deletePackage(Deleted_id);
    setOpen(true);
  };

  return (
    <>
      <div className="">
        <div>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Package Deleted"
            action={action}
          />
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Confirm Deletion
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Are you sure you want to delete this item?
            </p>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mr-2"
                onClick={handleDelete}
                disabled={isDeleting}
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </button>
              <button
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                onClick={onClose}
                disabled={isDeleting}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteModal;
