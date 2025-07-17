import React from "react";
import EditSkillModal from "./EditSkillModal";

const SkillsSection = ({ skills, onEdit, onDelete }) => {
  const [editSkill, setEditSkill] = React.useState(null);

  if (!skills || skills.length === 0) {
    return <p>No skills added yet.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {skills.map((skill) => (
        <div
          key={skill._id}
          className="bg-[#232D39] p-4 rounded-lg shadow-md text-white"
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">{skill.title}</h3>
              <p className="text-sm text-gray-400">{skill.category}</p>
              <div className="text-sm mt-2">Tags: {skill.tags.join(", ")}</div>
              <div className="text-sm mt-1">Progress: {skill.progress}%</div>
            </div>

            <div className="flex flex-col gap-2 items-end ml-4">
              <button
                onClick={() => setEditSkill(skill)}
                className="text-blue-400 hover:underline text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(skill._id)} // uses parent's openDeleteModal
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}

      <EditSkillModal
        skill={editSkill}
        onClose={() => setEditSkill(null)}
        onSuccess={() => {
          setEditSkill(null);
          onEdit?.(); // optional chaining if not provided
        }}
      />
    </div>
  );
};

export default SkillsSection;
