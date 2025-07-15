import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { loginUser } from "../services/auth";
import toast from "react-hot-toast";
import { useUser } from "../context/UserDataContext";

const Login = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = useUser();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userData = await loginUser({ emailOrUsername, password });
      setUser(userData.user);
      toast.success("Login successful!");
      navigate("/");
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
      console.error("Login error:", error.response?.data?.message);
    }
  };

  return (
    <div className="min-h-screen text-gray-200 flex items-center justify-center bg-muted text-foreground px-4 bg-[#121A20]">
      <div className="w-full max-w-md bg-background p-8 rounded-2xl shadow-lg space-y-6 bg-[#1c262e]">
        <h2 className="text-center text-3xl font-extrabold text-primary">
          Polypath
        </h2>
        {/* <h3 className="text-xl font-semibold text-center">Welcome back</h3> */}
        <p className="text-sm text-center text-muted-foreground">
          Log in to continue your polymath journey.
        </p>

        <form onSubmit={handleLogin} className="space-y-4 ">
          <div>
            {/* <label className="block text-sm font-medium">Email</label> */}
            <input
              value={emailOrUsername}
              onChange={(e) => setEmailOrUsername(e.target.value)}
              type="email"
              className="mt-1 w-full px-4 py-2 border-1 border-gray-400 rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Email or Username"
            />
          </div>
          <div>
            {/* <label className="block text-sm font-medium">Password</label> */}
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="mt-1 w-full px-4 py-2 border border-gray-400 border-border rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Passwords"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-primary bg-[#232D39] rounded-xl hover:bg-primary/90 cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* Divider with Google */}
        <div className="flex items-center gap-2 my-4">
          <div className="flex-grow h-px bg-border" />
          <span className="text-xs text-muted-foreground">or</span>
          <div className="flex-grow h-px bg-border" />
        </div>

        <button className="w-full flex items-center justify-center gap-2 py-2 border border-gray-400 border-border rounded-lg cursor-pointer hover:bg-muted transition">
          <FcGoogle className="text-xl" />
          <span className="text-sm">Login with Google</span>
        </button>

        <div className="flex items-center justify-center text-sm text-muted-foreground ">
          Don't have an account?&nbsp;
          <Link to="/register" className="text-primary underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
