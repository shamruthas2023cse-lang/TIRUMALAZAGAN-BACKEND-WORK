import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const login = async () => {
    try {
      const res = await api.post("/login", form);
      localStorage.setItem("token", res.data.access_token);
      navigate("/profile");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="page-container">
      <div className="card">
        <h2>Login</h2>

        <div className="input-group">
          <input
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>

        <button onClick={login}>Login</button>

        <div className="link">
          New here?{" "}
          <span onClick={() => navigate("/")}>Create an account</span>
        </div>
      </div>
    </div>
  );
}
