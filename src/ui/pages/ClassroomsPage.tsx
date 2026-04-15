import React from "react";
import { PageHeader } from "../shared/PageHeader";

type Classroom = {
  id: string;
  name: string;
  code: string;
};

function makeJoinCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i = 0; i < 6; i++) {
    out += chars[Math.floor(Math.random() * chars.length)];
  }
  return out;
}

export function ClassroomsPage() {
  const [isCreateOpen, setIsCreateOpen] = React.useState(false);
  const [isEditOpen, setIsEditOpen] = React.useState(false);
  const [editId, setEditId] = React.useState<string | null>(null);
  const [isDeleteOpen, setIsDeleteOpen] = React.useState(false);
  const [deleteId, setDeleteId] = React.useState<string | null>(null);
  const [classroomName, setClassroomName] = React.useState("");
  const [isMonitoringOpen, setIsMonitoringOpen] = React.useState(false);
  const [assignOpen, setAssignOpen] = React.useState(false);
  const [selectedPiece, setSelectedPiece] = React.useState<string | null>(null);
  const [classrooms, setClassrooms] = React.useState<Classroom[]>([
    { id: "c1", name: "pup brushbond", code: "V24TQA" },
  ]);
  const [activeId, setActiveId] = React.useState("c1");

  const active = classrooms.find((c) => c.id === activeId) ?? classrooms[0];
  const joinCode = active?.code ?? "V24TQA";

  const openCreate = () => {
    setClassroomName("");
    setIsEditOpen(false);
    setEditId(null);
    setIsCreateOpen(true);
  };

  const openEdit = (c: Classroom) => {
    setClassroomName(c.name);
    setIsCreateOpen(false);
    setEditId(c.id);
    setIsEditOpen(true);
  };

  const openDelete = (c: Classroom) => {
    setDeleteId(c.id);
    setIsDeleteOpen(true);
  };

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
            onClick={openCreate}
          >
            + Create Classroom
          </button>
        }
      />

      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 14 }}>
        {classrooms.map((c) => (
          <div
            key={c.id}
            className="card"
            style={{
              outline:
                c.id === activeId
                  ? "1px solid rgba(241,194,75,.22)"
                  : "1px solid transparent",
            }}
            onClick={() => setActiveId(c.id)}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontWeight: 900, fontSize: 18 }}>{c.name}</div>
                <div className="pageSubtitle">
                  Code:{" "}
                  <span
                    style={{ color: "rgba(241,194,75,.92)", fontWeight: 900 }}
                  >
                    {c.code}
                  </span>
                </div>
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <button
                  type="button"
                  className="iconBtn"
                  aria-label="Edit classroom"
                  onClick={(e) => {
                    e.stopPropagation();
                    openEdit(c);
                  }}
                >
                  ✎
                </button>
                <button
                  type="button"
                  className="iconBtn"
                  aria-label="Delete classroom"
                  onClick={(e) => {
                    e.stopPropagation();
                    openDelete(c);
                  }}
                >
                  🗑
                </button>

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

            <div
              className="pageSubtitle"
              style={{ marginTop: 18, letterSpacing: ".14em" }}
            >
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
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveId(c.id);
                    setIsMonitoringOpen(true);
                  }}
                >
                  DETAILED MONITORING
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isMonitoringOpen ? (
        <div
          className="modalBackdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Classroom Monitoring"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setIsMonitoringOpen(false);
          }}
        >
          <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
            <div className="monitorHeaderRow">
              <div>
                <div className="monitorTitleRow">
                  <div className="monBadge" aria-hidden="true">
                    {(active?.name?.[0] ?? "p").toLowerCase()}
                  </div>
                  <div style={{ fontWeight: 900, fontSize: 18 }}>
                    {active?.name ?? "pup brushbond"}
                  </div>
                </div>
                <div className="joinCodeRow">
                  <span>Join Code:</span>
                  <span className="codePill">{joinCode}</span>
                  <button
                    type="button"
                    className="iconBtn"
                    aria-label="Copy join code"
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(joinCode);
                      } catch {
                        // ignore in UI-only demo
                      }
                    }}
                  >
                    ⧉
                  </button>
                </div>
              </div>

              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                {active ? (
                  <>
                    <button
                      type="button"
                      className="iconBtn"
                      aria-label="Edit classroom"
                      onClick={() => {
                        setIsMonitoringOpen(false);
                        openEdit(active);
                      }}
                    >
                      ✎
                    </button>
                    <button
                      type="button"
                      className="iconBtn"
                      aria-label="Delete classroom"
                      onClick={() => {
                        setIsMonitoringOpen(false);
                        openDelete(active);
                      }}
                    >
                      🗑
                    </button>
                  </>
                ) : null}
                <button
                  type="button"
                  className="modalClose"
                  aria-label="Close"
                  onClick={() => setIsMonitoringOpen(false)}
                >
                  ×
                </button>
              </div>
            </div>

            <div className="monitorSectionLabel">👥 Enrolled Students</div>
            <div className="studentRow">
              <div className="avatarCircle" aria-hidden="true">
                b
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 900 }}>berto</div>
                <div className="studentSub">Piano</div>
              </div>
            </div>

            <div className="monitorSectionLabel">♫ Assign Music to Class</div>
            <div className="assignRow">
              <div className="dropdownWrap">
                <button
                  type="button"
                  className="dropdownBtn"
                  onClick={() => setAssignOpen((v) => !v)}
                >
                  {selectedPiece ?? "Select a piece..."}
                </button>

                {assignOpen ? (
                  <div className="dropdownMenu">
                    {["FGH - VBNM", "FGH - GHJ", "happu - happy"].map((opt) => (
                      <div
                        key={opt}
                        className="dropdownItem"
                        onClick={() => {
                          setSelectedPiece(opt);
                          setAssignOpen(false);
                        }}
                      >
                        {opt}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>

              <button
                type="button"
                className="assignBtnSmall"
                onClick={() => setAssignOpen(false)}
              >
                Assign
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {isDeleteOpen ? (
        <div
          className="modalBackdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Delete Classroom"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setIsDeleteOpen(false);
          }}
        >
          <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
            <div className="modalTop">
              <div>
                <div className="modalTitle">Delete Classroom</div>
                <div className="modalSub">
                  This will remove the classroom from the list.
                </div>
              </div>
              <button
                type="button"
                className="modalClose"
                aria-label="Close"
                onClick={() => setIsDeleteOpen(false)}
              >
                ×
              </button>
            </div>

            <div className="modalActions" style={{ gap: 10 }}>
              <button
                type="button"
                className="signOutBtn"
                style={{ width: "auto", marginTop: 0 }}
                onClick={() => setIsDeleteOpen(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="modalPrimary"
                onClick={() => {
                  if (!deleteId) return;
                  setClassrooms((prev) => prev.filter((c) => c.id !== deleteId));
                  setIsDeleteOpen(false);
                  setDeleteId(null);
                  setAssignOpen(false);
                  setSelectedPiece(null);
                  setActiveId((prevActive) => {
                    if (prevActive !== deleteId) return prevActive;
                    const remaining = classrooms.filter((c) => c.id !== deleteId);
                    return remaining[0]?.id ?? "";
                  });
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {isCreateOpen || isEditOpen ? (
        <div
          className="modalBackdrop"
          role="dialog"
          aria-modal="true"
          aria-label={isEditOpen ? "Edit Classroom" : "Create New Classroom"}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setIsCreateOpen(false);
              setIsEditOpen(false);
            }
          }}
        >
          <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
            <div className="modalTop">
              <div>
                <div className="modalTitle">
                  {isEditOpen ? "Edit Classroom" : "Create New Classroom"}
                </div>
                <div className="modalSub">
                  {isEditOpen
                    ? "Update your classroom name."
                    : "Give your new class a name."}
                </div>
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
                  const trimmed = classroomName.trim();
                  if (trimmed.length > 0 && isEditOpen && editId) {
                    setClassrooms((prev) =>
                      prev.map((c) => (c.id === editId ? { ...c, name: trimmed } : c)),
                    );
                  } else if (trimmed.length > 0) {
                    const id = crypto.randomUUID?.() ?? `c_${Date.now()}`;
                    const next: Classroom = {
                      id,
                      name: trimmed,
                      code: makeJoinCode(),
                    };
                    setClassrooms((prev) => [next, ...prev]);
                    setActiveId(id);
                  }
                  setClassroomName("");
                  setIsCreateOpen(false);
                  setIsEditOpen(false);
                  setEditId(null);
                }}
              >
                {isEditOpen ? "Save Changes" : "Create Class"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

