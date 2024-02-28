import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Please provide both email and password.");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "An error occurred.");
        return;
      }
      const { _id } = data;
      console.log(data);
      navigate(`/:${_id}/Home`);
    } catch (error) {
      setError("An error occurred.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-gray-800 p-4 flex">
        <h2 className="text-white text-lg font-bold">Gamify-Lang</h2>
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="p-3 w-1/3 mx-auto">
          <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="email"
              id="email"
              className="p-3 border rounded-lg"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="password"
              id="password"
              className="p-3 border rounded-lg"
              value={formData.password}
              onChange={handleChange}
            />
            <button
              disabled={loading}
              className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
            >
              {loading ? "Loading..." : "Sign In"}
            </button>
          </form>
          <div className="flex gap-2 mt-5">
            <p>Do you currently have no account?</p>
            <Link to={"/sign-up"} className="text-blue-700">
              Sign Up
            </Link>
          </div>
          {error && (
            <p className="text-red-500">{`${error}. please provide valid credentials.`}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default SignIn;
