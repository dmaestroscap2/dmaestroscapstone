import React from "react";
import { NavLink } from "react-router-dom";
import { StudentSidebarUser } from "./StudentSidebarUser";

const nav = [
  { to: "/student/dashboard", label: "My Dashboard", icon: "▦" },
  { to: "/student/trainer", label: "Trainer", icon: "⚡" },
  { to: "/student/practice", label: "Practice", icon: "✎" },
  { to: "/student/assignments", label: "Assignments", icon: "♫" },
  { to: "/student/analytics", label: "Analytics", icon: "▤" },
  { to: "/student/feedback", label: "Feedback", icon: "✉" },
];

export function StudentSidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brandTitle">DMAESTRO</div>
        <div className="brandSub">AI MUSIC ACADEMY</div>
      </div>

      <nav className="nav">
        {nav.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              "navItem" + (isActive ? " navItemActive" : "")
            }
          >
            <span className="navIcon" aria-hidden="true">
              {item.icon}
            </span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebarBottom">
        <NavLink
          to="/student/notifications"
          className={({ isActive }) =>
            "navItem navBottom" + (isActive ? " navItemActive" : "")
          }
        >
          <span className="navIcon" aria-hidden="true">
            🔔
          </span>
          <span>Notifications</span>
        </NavLink>

        <StudentSidebarUser />
      </div>
    </aside>
  );
}

