import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function StudentLoginPage() {
  const navigate = useNavigate();

  return (
    <div className="authCard">
      <div className="capIcon" aria-hidden="true">
        ♪
      </div>
      <div className="authTitle">Welcome Back</div>
      <div className="authSub">Sign in to your member account</div>

      <div className="field">
        <div className="label">Email</div>
        <input className="input" defaultValue="berto@gmail.com" />
      </div>
      <div className="field">
        <div className="label">Password</div>
        <input className="input" type="password" defaultValue="password" />
      </div>

      <button
        className="primaryBtn"
        type="button"
        onClick={() => navigate("/student/dashboard")}
      >
        Sign In
      </button>

      <div className="authLinks">
        <div style={{ marginTop: 10 }}>
          <span>Switch to </span>
          <Link to="/login">Instructor</Link>
        </div>
        <div style={{ marginTop: 8 }}>
          <span>Don't have an account? </span>
          <Link to="/student/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

