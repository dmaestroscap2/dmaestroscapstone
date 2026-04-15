import React from "react";
import { PageHeader } from "../shared/PageHeader";

export function ClassroomsPage() {
  const [isCreateOpen, setIsCreateOpen] = React.useState(false);
  const [classroomName, setClassroomName] = React.useState("");

  return (
    <div>
      <PageHeader
        title="My Classrooms"
        subtitle="Manage your class and enrolled students."
        right={
          <button
            className="primaryBtn"
            type="button"
            style={{ width: 170 }}
            onClick={() => setIsCreateOpen(true)}
          >
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

      {isCreateOpen ? (
        <div
          className="modalBackdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Create New Classroom"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setIsCreateOpen(false);
          }}
        >
          <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
            <div className="modalTop">
              <div>
                <div className="modalTitle">Create New Classroom</div>
                <div className="modalSub">Give your new class a name.</div>
              </div>
              <button
                type="button"
                className="modalClose"
                aria-label="Close"
                onClick={() => setIsCreateOpen(false)}
              >
                ×
              </button>
            </div>

            <div style={{ marginTop: 12 }}>
              <input
                className="input"
                value={classroomName}
                onChange={(e) => setClassroomName(e.target.value)}
                placeholder="e.g. Jazz Advanced"
              />
            </div>

            <div className="modalActions">
              <button
                type="button"
                className="modalPrimary"
                onClick={() => {
                  // UI-only: close modal for now
                  setClassroomName("");
                  setIsCreateOpen(false);
                }}
              >
                Create Class
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

