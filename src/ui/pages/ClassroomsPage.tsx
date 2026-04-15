import React from "react";
import { PageHeader } from "../shared/PageHeader";

export function ClassroomsPage() {
  return (
    <div>
      <PageHeader
        title="My Classrooms"
        subtitle="Manage your class and enrolled students."
        right={
          <button className="primaryBtn" type="button" style={{ width: 170 }}>
            + Create Classroom
          </button>
        }
      />

      <div className="card">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontWeight: 900, fontSize: 18 }}>pup brushbond</div>
            <div className="pageSubtitle">
              Code: <span style={{ color: "rgba(241,194,75,.92)", fontWeight: 900 }}>V24TQA</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <div className="pageSubtitle" style={{ marginTop: 6 }}>
              BAND OVERALL PROGRESS
            </div>
            <div
              style={{
                width: 160,
                height: 8,
                borderRadius: 999,
                background: "rgba(255,255,255,.06)",
                border: "1px solid rgba(255,255,255,.06)",
              }}
            >
              <div style={{ width: "0%", height: "100%" }} />
            </div>
            <div className="pageSubtitle">0%</div>
          </div>
        </div>

        <div className="pageSubtitle" style={{ marginTop: 18, letterSpacing: ".14em" }}>
          ENROLLED STUDENTS
        </div>

        <div
          style={{
            marginTop: 10,
            padding: 12,
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,.06)",
            background: "rgba(255,255,255,.02)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 28,
                height: 28,
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
            <div style={{ fontWeight: 900 }}>berto</div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div className="pageSubtitle" style={{ fontWeight: 900 }}>
              PROGRESS
            </div>
            <div
              style={{
                width: 260,
                height: 8,
                borderRadius: 999,
                background: "rgba(255,255,255,.06)",
                border: "1px solid rgba(255,255,255,.06)",
              }}
            />
            <div className="pageSubtitle">0%</div>
            <button
              type="button"
              className="signOutBtn"
              style={{ width: 160 }}
            >
              DETAILED MONITORING
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

