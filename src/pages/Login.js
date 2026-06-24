import "./Login.css";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful!");
      navigate("/");
    } catch (error) {
      toast.error("Invalid email or password");
    }
  }

  return (
  <div className="auth-page">
    <div className="auth-card">
      
      <h2 className="auth-subtitle">Login to continue shopping</h2>

      <form className="auth-form" onSubmit={handleLogin}>
        <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Login</button>
      </form>

      <div className="auth-footer">Don't have an account?{" "}<Link to="/signup">Create Account</Link></div>

    </div>
  </div>
);
}

export default Login;