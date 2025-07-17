import React, { useState } from "react";

const AddJournalModal = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const handleSubmit = () => {
    const entry = {
      title,
      content,
      tags: tags.split(",").map((tag) => tag.trim()),
      date,
    };
    onSubmit(entry);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-[#1E2630] p-6 rounded-lg w-full max-w-md text-white space-y-4 shadow-lg">
        <h2 className="text-xl font-semibold">New Journal Entry</h2>

        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 rounded bg-[#2E3947] text-white"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          rows="4"
          placeholder="What did you learn today?"
          className="w-full p-2 rounded bg-[#2E3947] text-white"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <input
          type="text"
          placeholder="Tags (comma separated)"
          className="w-full p-2 rounded bg-[#2E3947] text-white"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />

        <input
          type="date"
          className="w-full p-2 rounded bg-[#2E3947] text-white"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <div className="flex justify-end gap-3 mt-4">
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddJournalModal;
