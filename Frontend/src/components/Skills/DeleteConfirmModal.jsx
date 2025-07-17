import React, { useContext } from "react";
import toast from "react-hot-toast";
import { deleteSkill } from "../../services/skills";
import { useUser } from "../../context/UserDataContext";

const DeleteConfirmModal = ({ skillId, onClose, onSuccess }) => {
  const { user } = useUser();
  const handleDeleteConfirm = async () => {
    try {
      // console.log(user.token);

      await deleteSkill(skillId, user.token); // assuming token is handled in service or passed
      toast.success("Skill deleted");
      onSuccess(); // notify parent
      onClose(); // close modal
    } catch (err) {
      console.error(err);
      toast.error("Delete failed");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-[#1c262e] p-6 rounded-lg shadow-lg w-full max-w-sm text-white">
        <h2 className="text-lg font-bold mb-4">Delete Skill</h2>
        <p className="mb-4">Are you sure you want to delete this skill?</p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700"
          >
            Cancel
          </button>
          <button
            onClick={handleDeleteConfirm}
            className="px-4 py-2 bg-red-600 rounded hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
