import React from "react";
import { useNavigate } from "react-router-dom";
import { PageHeader } from "../../shared/PageHeader";

type AssignmentSong = {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  difficulty: string;
  status: "Not Started" | "In Progress" | "Completed";
};

const ASSIGNED_SONGS: AssignmentSong[] = [
  {
    id: "a1",
    title: "happu",
    subtitle: "happy",
    duration: "0:42",
    difficulty: "Medium Difficulty",
    status: "Not Started",
  },
  {
    id: "a2",
    title: "FGH",
    subtitle: "VBNM",
    duration: "1:39",
    difficulty: "Medium Difficulty",
    status: "Not Started",
  },
];

export function StudentAssignmentsPage() {
  const navigate = useNavigate();

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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
          gap: 14,
          alignItems: "start",
        }}
      >
        {ASSIGNED_SONGS.map((song) => (
          <div key={song.id} className="card">
            <div style={{ fontWeight: 900, fontSize: 34, lineHeight: 1.05 }}>
              {song.title}
            </div>
            <div className="pageSubtitle" style={{ fontSize: 24 }}>
              {song.subtitle}
            </div>
            <div className="pageSubtitle" style={{ marginTop: 10 }}>
              ⏱ {song.duration} &nbsp;&nbsp; {song.difficulty}
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
                onClick={() =>
                  navigate(
                    `/student/practice/session?title=${encodeURIComponent(song.title)}&subtitle=${encodeURIComponent(song.subtitle)}&instrument=piano`,
                  )
                }
              >
                ⦿ Practice Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

