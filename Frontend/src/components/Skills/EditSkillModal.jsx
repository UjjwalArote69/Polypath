import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { updateSkill } from "../../services/skills";

const categories = [
  "Programming",
  "Music",
  "Art",
  "Sports",
  "Writing",
  "Other",
];

const EditSkillModal = ({ skill, onClose, onSuccess }) => {
  if (!skill) return null; // If no skill is provided, don't render the modal

  const [title, setTitle] = useState(skill.title || "");
  const [category, setCategory] = useState(skill.category || "");
  const [tags, setTags] = useState(skill.tags?.join(", ") || "");
  const [progress, setProgress] = useState(skill.progress || 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await updateSkill(
        skill._id,
        {
          title,
          category,
          tags: tags.split(",").map((t) => t.trim()),
          progress,
        },
        token
      );
      toast.success("Skill updated!");
      onSuccess();
      onClose();
    } catch (err) {
      toast.error("Error updating skill");
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-[#1c262e] p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Edit Skill</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Skill Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 rounded-md bg-[#232D39] text-white"
            required
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 rounded-md bg-[#232D39] text-white"
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Tags (comma separated)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full p-2 rounded-md bg-[#232D39] text-white"
          />
          <input
            type="number"
            placeholder="Progress %"
            value={progress}
            onChange={(e) => setProgress(Number(e.target.value))}
            min={0}
            max={100}
            className="w-full p-2 rounded-md bg-[#232D39] text-white"
          />

          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 rounded hover:bg-green-700"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditSkillModal;
