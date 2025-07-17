import React from "react";

const JournalEntryCard = ({ entry }) => {
  return (
    <div className="bg-[#232D39] p-4 rounded-lg shadow-md text-white">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold">{entry.title}</h3>
        <span className="text-sm text-gray-400">
          {new Date(entry.date).toLocaleString("en-IN", {
              hour: "numeric",
              minute: "2-digit",
            day: "numeric",
            month: "long",
            year: "numeric",
            hour12: true,
          })}
        </span>
      </div>

      <p className="text-sm text-gray-300 mb-3 line-clamp-3">{entry.content}</p>

      <div className="flex flex-wrap gap-2 text-xs text-gray-400">
        {entry?.tags?.map((tag, i) => (
          <span
            key={i}
            className="bg-[#2E3947] px-2 py-1 rounded-full text-white"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default JournalEntryCard;
