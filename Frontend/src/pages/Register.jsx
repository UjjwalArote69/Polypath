import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import toast from "react-hot-toast";
import { registerUser } from "../services/auth";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // console.log("Registering user:", {
    //   firstName,
    //   lastName,
    //   email,
    //   username,
    //   password,
    // });

    const userData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      username,
      email,
      password,
    };

    // console.log("User data to be sent:", userData);

    try {
      await registerUser(userData);

      toast.success("Registration successful!");
      navigate("/login");
    } catch (error) {
      console.log("Full error object:", error); // Add this line
      const errMsg =
        error?.response?.data?.message ||
        error.message ||
        "Registration failed!";
      toast.error(errMsg);
      console.error("Registration error:", errMsg);
    }
  };

  return (
    <div className="min-h-screen text-gray-300 flex items-center justify-center bg-muted text-foreground px-4 bg-[#121A20]">
      <div className="w-full max-w-md bg-background p-8 rounded-2xl shadow-lg space-y-6 bg-[#1c262e]">
        <h2 className="text-center text-3xl font-extrabold text-primary">
          Polypath
        </h2>
        <p className="text-sm text-center text-muted-foreground">
          Create an account to start your journey
        </p>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-1/2 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="First name"
              required
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-1/2 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Last name"
              required
            />
          </div>

          <div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Username "
              required
            />
          </div>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Email address"
              required
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#232D39] rounded-xl hover:bg-primary/90 cursor-pointer"
          >
            Register
          </button>
        </form>

        <div className="flex items-center gap-2 my-4">
          <div className="flex-grow h-px bg-border" />
          <span className="text-xs text-muted-foreground">or</span>
          <div className="flex-grow h-px bg-border" />
        </div>

        <button className="w-full flex items-center justify-center gap-2 py-2 border border-gray-400 rounded-lg hover:bg-muted transition">
          <FcGoogle className="text-xl" />
          <span className="text-sm">Register with Google</span>
        </button>

        <div className="text-sm text-center text-muted-foreground">
          Already have an account?&nbsp;
          <Link to="/login" className="text-primary underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
