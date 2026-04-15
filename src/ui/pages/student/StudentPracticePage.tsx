import React from "react";
import { PageHeader } from "../../shared/PageHeader";

export function StudentPracticePage() {
  return (
    <div>
      <PageHeader
        title="Practice Session"
        subtitle="Choose a piece to practice with real-time feedback."
      />

      <div className="card" style={{ maxWidth: 420 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: 12,
                display: "grid",
                placeItems: "center",
                background: "rgba(241,194,75,.10)",
                border: "1px solid rgba(241,194,75,.22)",
                color: "rgba(241,194,75,.92)",
                fontWeight: 900,
              }}
            >
              ♪
            </div>
            <div>
              <div style={{ fontWeight: 900, fontSize: 18 }}>happu</div>
              <div className="pageSubtitle">happy</div>
              <div className="pageSubtitle">⏱ 0:42</div>
            </div>
          </div>

          <span
            className="pill"
            style={{
              borderColor: "rgba(216,221,231,.16)",
              background: "rgba(255,255,255,.04)",
              color: "rgba(216,221,231,.85)",
            }}
          >
            Medium
          </span>
        </div>

        <button className="primaryBtn" type="button" style={{ marginTop: 18 }}>
          ⦿ Start Practice
        </button>
      </div>
    </div>
  );
}

