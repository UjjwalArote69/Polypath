import React, { useState } from "react";
import toast from "react-hot-toast";
import { createSkill, updateSkill } from "../../services/skills";

const categories = [
  "Programming",
  "Music",
  "Art",
  "Sports",
  "Writing",
  "Other",
];

const AddSkillModal = ({ onClose, onSuccess }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let result;

      if (mode === "edit") {
        result = await updateSkill(skillToEdit._id, form, user.token); // ✅ Use service
        onSkillAdded(result.skill);
        toast.success("Skill updated");
      } else {
        result = await createSkill(form, user.token); // ✅ Use service
        onSkillAdded(result.skill);
        toast.success("Skill created");
      }

      onClose();
      setForm({ title: "", category: "", tags: [], progress: 0 });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative bg-[#1c262e] p-6 rounded-lg shadow-lg w-full max-w-md">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-white text-2xl hover:text-gray-300"
        >
          &times;
        </button>

        <h2 className="text-xl font-bold mb-4">Add New Skill</h2>
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

          {/* <div className="flex justify-between mt-4"> */}
          {/* <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700"
            >
              Cancel
            </button> */}
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
          >
            Add Skill
          </button>
          {/* </div> */}
        </form>
      </div>
    </div>
  );
};

export default AddSkillModal;
