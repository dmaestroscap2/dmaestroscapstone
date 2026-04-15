import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../shared/Sidebar";

export function AppLayout() {
  return (
    <div className="appRoot">
      <Sidebar />
      <main className="appMain">
        <Outlet />
      </main>
    </div>
  );
}

