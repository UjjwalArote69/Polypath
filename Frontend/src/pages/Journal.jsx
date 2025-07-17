import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle, Filter } from "lucide-react";
import AddJournalModal from "../components/Journal/AddJournalModal";
import JournalEntryCard from "../components/Journal/JournalEntryCard";
import Sidebar from "../components/Sidebar/Sidebar";
import { getAllJournals } from "../services/journal";
import { useUser } from "../context/UserDataContext";

const dummyEntries = [
  {
    id: 1,
    title: "Learned Flexbox Today",
    content: "Practiced layout using Tailwind. Built 2 mini UIs.",
    date: "2025-07-17",
    tags: ["Frontend", "CSS", "Tailwind"],
  },
  {
    id: 2,
    title: "Read 10 Pages of Atomic Habits",
    content: "Notes on habit stacking and identity-based habits.",
    date: "2025-07-16",
    tags: ["Reading", "Self Growth"],
  },
];

const Journal = () => {
  const [showModal, setShowModal] = useState(false);

  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();

  

  useEffect(() => {
    const fetchJournals = async () => {
      try {
        const data = await getAllJournals(user?.token);
        setEntries(data);
      } catch (error) {
        console.error("Error fetching journals:", error);
      } finally {
        setLoading(false);
      }
    };
    if (user?.token) {
      fetchJournals();
    }
  }, [user]);

  return (
    <div className="flex h-screen bg-[#0F0F00] text-white">
      <Sidebar />
      <div className="flex-1 p-6 text-white">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">My Journal</h2>
          <div className="flex gap-3">
            <Button className="flex gap-2" onClick={() => setShowModal(true)}>
              <PlusCircle size={18} />
              New Entry
            </Button>
            <Button variant="outline" className="flex gap-2">
              <Filter size={18} />
              Filter
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {entries.map((entry) => (
            <JournalEntryCard key={entry.id || entry._id} entry={entry} />
          ))}
        </div>

        {showModal && (
          <AddJournalModal
            onClose={() => setShowModal(false)}
            onSubmit={(entry) => {
              console.log("New Entry Submitted:", entry);
              setShowModal(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Journal;
