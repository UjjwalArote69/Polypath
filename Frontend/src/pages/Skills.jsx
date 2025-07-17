import React, { useEffect, useState } from "react";
import { deleteSkill, getSkills } from "../services/skills";
import { useUser } from "../context/UserDataContext";
import toast from "react-hot-toast";
import Sidebar from "../components/Sidebar/Sidebar";
import AddSkillModal from "../components/Skills/AddSkillModal";
import DeleteConfirmModal from "../components/Skills/DeleteConfirmModal"; // ✅ import
import SkillsSection from "../components/Skills/SkillsSection";

const Skills = () => {
  const { user } = useUser();
  const [skills, setSkills] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  // ✅ Manage Delete Modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedSkillId, setSelectedSkillId] = useState(null);

  const refreshSkills = async () => {
    try {
      const token = localStorage.getItem("token");
      const data = await getSkills(token);
      setSkills(data);
    } catch (error) {
      toast.error("Failed to load skills");
      console.error("Skill fetch error:", error);
    }
  };

  useEffect(() => {
    refreshSkills();
  }, []);

  const openDeleteModal = (skillId) => {
    setSelectedSkillId(skillId);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setSelectedSkillId(null);
    setShowDeleteModal(false);
  };

  return (
    <div className="flex h-screen bg-[#0F0F00] text-white">
      <Sidebar />

      <div className="flex-1 px-6 py-10 bg-[#0F0F0F] text-white">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Your Skills</h2>
          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            + Add Skill
          </button>
        </div>

        <SkillsSection
          skills={skills}
          onDelete={openDeleteModal} // ✅ trigger modal
          onRefresh={refreshSkills}
        />
      </div>

      {showAddModal && (
        <AddSkillModal
          onClose={() => setShowAddModal(false)}
          onSuccess={refreshSkills}
        />
      )}

      {showDeleteModal && selectedSkillId && (
        <DeleteConfirmModal
          skillId={selectedSkillId}
          onClose={closeDeleteModal}
          onSuccess={refreshSkills}
        />
      )}
    </div>
  );
};

export default Skills;
