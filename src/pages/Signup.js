import "./Login.css";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { toast } from "react-toastify";

function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSignup(e) {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      toast.success("Account created successfully!");
      navigate("/");
    }
    catch (error) {
        if (error.code === "auth/email-already-in-use") {
          toast.error("Email already exists");}
        else if (error.code === "auth/weak-password") {
        toast.error("Password should be at least 6 characters");}
        else {
        toast.error("Failed to create account");}
    }
  }

  return (
  <div className="auth-page">
    <div className="auth-card">

      <h1>Create Account</h1>
      <p className="auth-subtitle">Join ShopXY and start shopping today</p>

      <form className="auth-form" onSubmit={handleSignup}>
        <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Create Account</button>
      </form>

      <div className="auth-footer">Already have an account?{" "}<Link to="/login">Login</Link></div>

    </div>
  </div>
);
}

export default Signup;