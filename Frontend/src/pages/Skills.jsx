import React, { useEffect, useState } from "react";
import { getSkills } from "../services/auth"; // or "../services/skills"
import { useUser } from "../context/UserDataContext";
import toast from "react-hot-toast";
import Sidebar from "../components/Sidebar/Sidebar";

const Skills = () => {
  const { user } = useUser();
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const token = localStorage.getItem("token");
        const data = await getSkills(token);
        setSkills(data);
      } catch (error) {
        toast.error("Failed to load skills");
        console.error("Skill fetch error:", error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <div className="flex h-screen  bg-[#0F0F00] text-white">

      <Sidebar />

      <div className="flex-1 px-6 py-10 bg-[#0F0F0F] text-white">
        <h2 className="text-2xl font-bold mb-4">Your Skills</h2>
        {skills.length === 0 ? (
          <p>No skills added yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div
                key={skill._id}
                className="bg-[#1f2a36] p-4 rounded-lg shadow-md"
              >
                <h3 className="text-lg font-semibold">{skill.title}</h3>
                <p className="text-sm text-gray-400">{skill.category}</p>
                {skill.progress && (
                  <div className="mt-2 w-full bg-gray-700 h-2 rounded-full">
                    <div
                      className="bg-green-400 h-2 rounded-full"
                      style={{ width: `${skill.progress}%` }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
