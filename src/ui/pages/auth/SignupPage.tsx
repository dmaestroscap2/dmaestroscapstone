import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function SignupPage() {
  const navigate = useNavigate();

  return (
    <div className="authCard">
      <div className="capIcon" aria-hidden="true">
        🎓
      </div>
      <div className="authTitle">Join DMAESTRO</div>
      <div className="authSub">Create your instructor account</div>

      <div className="field">
        <div className="label">Full Name</div>
        <input className="input" defaultValue="bert" />
      </div>
      <div className="field">
        <div className="label">Email</div>
        <input className="input" defaultValue="bert@gmail.com" />
      </div>
      <div className="field">
        <div className="label">Password</div>
        <input className="input" type="password" defaultValue="password" />
      </div>
      <div className="field">
        <div className="label">Confirm Password</div>
        <input className="input" type="password" defaultValue="password" />
      </div>

      <button
        className="primaryBtn"
        type="button"
        onClick={() => navigate("/instructor/dashboard")}
      >
        Create Account
      </button>

      <div className="authLinks">
        <div style={{ marginTop: 10 }}>
          <span>Switch to </span>
          <Link to="/student/signup">Student</Link>
        </div>
        <div style={{ marginTop: 8 }}>
          <span>Already have an account? </span>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

