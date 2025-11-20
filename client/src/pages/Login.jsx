import { useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", { email, password });
        console.log("LOGIN RESPONSE:", res);
      if (res.token) {
        localStorage.setItem("token", res.token);
        localStorage.setItem("name", res.user.name);

        window.dispatchEvent(new Event("storage"));

        navigate("/dashboard");
      } else {
        alert(res.message || "Login failed");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-dark text-light">
      <form
        onSubmit={handleSubmit}
        className="card p-4 bg-secondary text-light shadow"
        style={{ width: "22rem" }}
      >
        <h2 className="card-title text-center mb-4">Login</h2>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>

        <p className="text-center mt-3">
          Don't have an account?{" "}
          <a href="/signup" className="text-decoration-underline text-info">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
}
