import React from "react";
import { NavLink } from "react-router-dom";
import { SidebarUser } from "./SidebarUser";

const nav = [
  { to: "/instructor/dashboard", label: "Dashboard", icon: "▦" },
  { to: "/instructor/classrooms", label: "Classrooms", icon: "⌂" },
  { to: "/instructor/library", label: "Music Library", icon: "♫" },
  { to: "/instructor/students", label: "ALL MEMBERS", icon: "⦿" },
  { to: "/instructor/session-analytics", label: "Session Analytics", icon: "▤" },
  { to: "/instructor/feedback", label: "Feedback", icon: "✎" },
];

export function Sidebar() {
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
            <span className={item.label === "ALL MEMBERS" ? "navCaps" : ""}>
              {item.label}
            </span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebarBottom">
        <NavLink
          to="/instructor/notifications"
          className={({ isActive }) =>
            "navItem navBottom" + (isActive ? " navItemActive" : "")
          }
        >
          <span className="navIcon" aria-hidden="true">
            🔔
          </span>
          <span>Notifications</span>
        </NavLink>

        <SidebarUser />
      </div>
    </aside>
  );
}

