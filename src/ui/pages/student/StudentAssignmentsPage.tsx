import React from "react";
import { PageHeader } from "../../shared/PageHeader";

export function StudentAssignmentsPage() {
  return (
    <div>
      <PageHeader
        title="My Assignments"
        subtitle="Sheet music assigned by your instructor."
        right={
          <span
            className="pill"
            style={{
              borderColor: "rgba(216,221,231,.16)",
              background: "rgba(255,255,255,.04)",
              color: "rgba(216,221,231,.85)",
            }}
          >
            Not Started
          </span>
        }
      />

      <div className="card" style={{ maxWidth: 520 }}>
        <div style={{ fontWeight: 900, fontSize: 18 }}>happu</div>
        <div className="pageSubtitle">happy</div>
        <div className="pageSubtitle" style={{ marginTop: 10 }}>
          ⏱ 0:42 &nbsp;&nbsp; Medium Difficulty
        </div>

        <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
          <button
            type="button"
            className="signOutBtn"
            style={{ width: 44, marginTop: 0 }}
          >
            ▶
          </button>
          <button
            type="button"
            className="primaryBtn"
            style={{ flex: 1, marginTop: 0 }}
          >
            ⦿ Practice Now
          </button>
        </div>
      </div>
    </div>
  );
}

