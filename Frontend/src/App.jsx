import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import SkillSelection from "./pages/SkillSelection";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";
import Skills from "./pages/Skills";
import Journal from "./pages/Journal";
import Timeline from "./pages/Timeline";
import ProgressTracker from "./pages/ProgressTracker";
import Achievements from "./pages/Achievements";
import Projects from "./pages/Projects";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SkillSelection />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/skills"
          element={
            <ProtectedRoute>
              <Skills />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/journal"
          element={
            <ProtectedRoute>
              <Journal />
            </ProtectedRoute>
          }
        />
        <Route
          path="/timeline"
          element={
            <ProtectedRoute>
              <Timeline />
            </ProtectedRoute>
          }
        />
        <Route
          path="/progress-tracker"
          element={
            <ProtectedRoute>
              <ProgressTracker />
            </ProtectedRoute>
          }
        />
        <Route
          path="/achievements"
          element={
            <ProtectedRoute>
              <Achievements />
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <Projects/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
