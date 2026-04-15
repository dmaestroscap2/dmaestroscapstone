import React from "react";
import { PageHeader } from "../shared/PageHeader";

export function StudentsPage() {
  return (
    <div>
      <PageHeader
        title="ALL MEMBERS"
        subtitle="Monitor individual progress and assigned instruments."
      />

      <div className="card" style={{ maxWidth: 430 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: 999,
              background: "rgba(255,255,255,.06)",
              border: "1px solid rgba(255,255,255,.06)",
              display: "grid",
              placeItems: "center",
              color: "rgba(216,221,231,.9)",
              fontWeight: 900,
            }}
          >
            b
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 900 }}>berto</div>
            <span className="pill" style={{ marginTop: 6 }}>
              ♪ Piano
            </span>
          </div>
        </div>

        <div className="emptyState" style={{ height: 120, marginTop: 14 }}>
          No practice data yet
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 12,
            marginTop: 12,
          }}
        >
          <div
            style={{
              padding: 12,
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,.06)",
              background: "rgba(255,255,255,.02)",
            }}
          >
            <div className="cardLabel">Practice Time</div>
            <div className="cardValue" style={{ fontSize: 20 }}>
              0m
            </div>
          </div>
          <div
            style={{
              padding: 12,
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,.06)",
              background: "rgba(255,255,255,.02)",
            }}
          >
            <div className="cardLabel">Sessions</div>
            <div className="cardValue" style={{ fontSize: 20 }}>
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

