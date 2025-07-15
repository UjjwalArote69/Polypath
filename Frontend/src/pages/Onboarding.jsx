import { Link } from "react-router-dom";

const Onboarding = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">Become a Polymath</h1>
        <p className="text-muted-foreground text-lg">
          Track, reflect, and master diverse skills across disciplines.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/register"
            className="rounded-2xl px-6 py-2 bg-primary text-white font-medium shadow hover:shadow-lg transition"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="text-sm font-medium underline underline-offset-4 text-primary hover:text-primary/80"
          >
            Log In
          </Link>
          <div
            style={{
              backgroundColor: "var(--bg-color)",
              color: "var(--text-color)",
            }}
          >
            Hello Polymath
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
