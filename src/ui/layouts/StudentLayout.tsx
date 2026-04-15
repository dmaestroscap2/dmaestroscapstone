import React from "react";
import { Outlet } from "react-router-dom";
import { StudentSidebar } from "../shared/StudentSidebar";

export function StudentLayout() {
  return (
    <div className="appRoot">
      <StudentSidebar />
      <main className="appMain">
        <Outlet />
      </main>
    </div>
  );
}

