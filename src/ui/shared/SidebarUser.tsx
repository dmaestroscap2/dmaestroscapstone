import React from "react";
import { useNavigate } from "react-router-dom";

export function SidebarUser() {
  const navigate = useNavigate();
  return (
    <div className="sidebarUser">
      <div className="userChip">
        <div className="avatarCircle" aria-hidden="true">
          b
        </div>
        <div className="userMeta">
          <div className="userName">bert</div>
          <div className="userRole">Instructor</div>
        </div>
      </div>

      <button
        type="button"
        className="signOutBtn"
        onClick={() => navigate("/login")}
      >
        Sign Out
      </button>
    </div>
  );
}

