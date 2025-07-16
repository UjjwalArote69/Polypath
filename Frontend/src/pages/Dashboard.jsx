import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import Sidebar from "../components/Sidebar/Sidebar";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const Dashboard = () => {
  const chartData = {
    labels: ["Apr 6", "Apr 12", "Apr 18", "Apr 24", "Apr 30", "May 6"],
    datasets: [
      {
        label: "Visitors",
        data: [10, 25, 18, 30, 22, 28],
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: 4,
      },
    ],
  };

  return (
    <div className="flex h-screen bg-[#0F0F0F] text-white">
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        {/* Welcome + Quote */}
        <div>
          <h2 className="text-2xl font-bold">Welcome back, Ujjwal 👋</h2>
          <p className="text-gray-400 mt-1">
            “Learning never exhausts the mind.” – Leonardo da Vinci
          </p>
        </div>

        {/* Skills Overview */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Your Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Coding", progress: 75 },
              { name: "Writing", progress: 60 },
              { name: "Fitness", progress: 80 },
            ].map((skill) => (
              <div
                key={skill.name}
                className="bg-[#1A1A1A] p-4 rounded-lg shadow"
              >
                <p className="font-medium">{skill.name}</p>
                <div className="w-full bg-gray-700 h-2 rounded mt-2">
                  <div
                    className="bg-blue-500 h-2 rounded"
                    style={{ width: `${skill.progress}%` }}
                  />
                </div>
                <p className="text-sm text-gray-400 mt-1">
                  Progress: {skill.progress}%
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Journals */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Recent Journals</h3>
          <div className="space-y-3">
            <div className="bg-[#1A1A1A] p-4 rounded-lg">
              <p className="text-sm text-gray-400">2 days ago</p>
              <h4 className="font-medium">Reflections on JavaScript</h4>
              <p className="text-sm text-gray-500">
                Completed a major section of async functions...
              </p>
            </div>
          </div>
        </div>

        {/* Progress Charts */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Progress Overview</h3>
          <div className="bg-[#1A1A1A] p-4 rounded-lg">
            <Bar data={chartData} options={{ responsive: true }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
