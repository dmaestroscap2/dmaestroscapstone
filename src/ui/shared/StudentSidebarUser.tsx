import React from "react";
import { useNavigate } from "react-router-dom";

export function StudentSidebarUser() {
  const navigate = useNavigate();
  return (
    <div className="sidebarUser">
      <div className="userChip">
        <div className="avatarCircle" aria-hidden="true">
          b
        </div>
        <div className="userMeta">
          <div className="userName">berto</div>
          <div className="userRole">Student</div>
        </div>
      </div>

      <button
        type="button"
        className="signOutBtn"
        onClick={() => navigate("/student/login")}
      >
        Sign Out
      </button>
    </div>
  );
}

