import React from "react";
import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="authBg">
      <div className="authBgGlow" />
      <Outlet />
    </div>
  );
}

