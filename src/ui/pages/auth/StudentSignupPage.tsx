import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { INSTRUMENTS } from "../../data/instruments";

export function StudentSignupPage() {
  const navigate = useNavigate();

  return (
    <div className="authCard">
      <div className="capIcon" aria-hidden="true">
        ♪
      </div>
      <div className="authTitle">Join DMAESTRO</div>
      <div className="authSub">Create your member account</div>

      <div className="field">
        <div className="label">Full Name</div>
        <input className="input" defaultValue="berto" />
      </div>
      <div className="field">
        <div className="label">Email</div>
        <input className="input" defaultValue="berto@gmail.com" />
      </div>
      <div className="field">
        <div className="label">Password</div>
        <input className="input" type="password" defaultValue="password" />
      </div>
      <div className="field">
        <div className="label">Confirm Password</div>
        <input className="input" type="password" defaultValue="password" />
      </div>
      <div className="field">
        <div className="label">Instrument</div>
        <select className="select" style={{ width: "100%" }} defaultValue="piano">
          {INSTRUMENTS.map((inst) => (
            <option key={inst} value={inst}>
              {inst.charAt(0).toUpperCase() + inst.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <button
        className="primaryBtn"
        type="button"
        onClick={() => navigate("/student/dashboard")}
      >
        Create Account
      </button>

      <div className="authLinks">
        <div style={{ marginTop: 10 }}>
          <span>Switch to </span>
          <Link to="/login">Instructor</Link>
        </div>
        <div style={{ marginTop: 8 }}>
          <span>Already have an account? </span>
          <Link to="/student/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

