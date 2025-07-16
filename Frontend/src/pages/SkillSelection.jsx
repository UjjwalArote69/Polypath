import React, { useState } from "react";
import { createSkill } from "../services/auth"; // make sure import is correct
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const skillCategories = {
  Programming: ["JavaScript", "Python", "C++", "Java", "Go"],
  Music: ["Guitar", "Piano", "Drums", "Vocals"],
  Art: ["Drawing", "Painting", "Digital Art"],
  Sports: ["Football", "Basketball", "Cricket", "Badminton"],
  Writing: ["Poetry", "Storytelling", "Technical Writing"],
};

const SkillSelection = () => {
  const [selectedSkills, setSelectedSkills] = useState({});
  const navigate = useNavigate();

  const handleSelect = (category, skill) => {
    setSelectedSkills((prev) => ({
      ...prev,
      [category]: skill,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const selected = Object.entries(selectedSkills);
    if (selected.length === 0) {
      toast.error("Please select at least one skill.");
      return;
    }

    const token = localStorage.getItem("token");

    try {
      // Loop through selected categories and send each skill to backend
      await Promise.all(
        selected.map(([category, title]) =>
          createSkill(
            {
              title,
              category,
              tags: [], // optional, or can be derived later
              progress: 0, // initial progress
            },
            token
          )
        )
      );

      toast.success("Skills saved!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error saving skills:", error.response?.data?.message);
      toast.error("Failed to save skills.");
    }
  };

  return (
    <div className="min-h-screen bg-[#121A20] text-white flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-[#1c262e] p-6 rounded-xl shadow-xl space-y-6">
        <h2 className="text-2xl font-bold text-center text-primary">
          Select Your Skills
        </h2>
        <p className="text-sm text-center text-muted-foreground">
          Choose at least one skill from the categories below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category}>
              <label className="block text-md font-semibold mb-1">
                {category}
              </label>
              <select
                className="w-full bg-[#232D39] border border-gray-600 p-2 rounded-lg"
                value={selectedSkills[category] || ""}
                onChange={(e) => handleSelect(category, e.target.value)}
              >
                <option value="">-- Select {category} Skill --</option>
                {skills.map((skill) => (
                  <option key={skill} value={skill}>
                    {skill}
                  </option>
                ))}
              </select>
            </div>
          ))}

          <button
            type="submit"
            className="w-full py-2 bg-[#3f4d63] rounded-lg hover:bg-[#4d5d75] transition"
          >
            Save & Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default SkillSelection;
