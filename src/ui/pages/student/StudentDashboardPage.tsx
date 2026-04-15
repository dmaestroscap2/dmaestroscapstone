import React from "react";
import { useNavigate } from "react-router-dom";
import { PageHeader } from "../../shared/PageHeader";

type JoinedClassroom = {
  code: string;
  name: string;
};

const AVAILABLE_CLASSROOMS: JoinedClassroom[] = [
  { code: "V24TQA", name: "pup brushbond" },
  { code: "VIRI101", name: "virtuoso roots" },
];

export function StudentDashboardPage() {
  const navigate = useNavigate();
  const [isJoinOpen, setIsJoinOpen] = React.useState(false);
  const [joinCode, setJoinCode] = React.useState("");
  const [joinMessage, setJoinMessage] = React.useState("");
  const [classrooms, setClassrooms] = React.useState<JoinedClassroom[]>([
    { code: "V24TQA", name: "pup brushbond" },
  ]);

  return (
    <div>
      <PageHeader
        title="Hello, berto"
        subtitle="Ready to practice your piano today?"
        right={
          <div className="topActions">
            <button
              type="button"
              className="ghostBtn"
              onClick={() => {
                setJoinCode("");
                setJoinMessage("");
                setIsJoinOpen(true);
              }}
            >
              + Join Class
            </button>
            <button
              type="button"
              className="ghostBtn ghostBtnGold"
              onClick={() => navigate("/student/practice")}
            >
              Start Practice
            </button>
            <button
              type="button"
              className="ghostBtn"
              onClick={() => navigate("/student/trainer")}
            >
              Instrument Trainer
            </button>
          </div>
        }
      />

      <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 14 }}>
        <div className="card" style={{ minHeight: 110 }}>
          <div className="sectionTitle">My Classrooms</div>
          {classrooms.map((room) => (
            <div
              key={room.code}
              style={{
                marginTop: 10,
                padding: 12,
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,.06)",
                background: "rgba(255,255,255,.02)",
              }}
            >
              <div style={{ fontWeight: 900, color: "rgba(241,194,75,.92)" }}>
                {room.name}
              </div>
              <div className="pageSubtitle">Classroom • {room.code}</div>
            </div>
          ))}
        </div>

        <div>
          <div className="kpiRow">
            <div className="miniCard">
              <div className="cardLabel">Practice Sessions</div>
              <div className="cardValue">0</div>
              <div className="pageSubtitle">Total sessions completed</div>
            </div>
            <div className="miniCard">
              <div className="cardLabel">Average Accuracy</div>
              <div className="cardValue">0%</div>
            </div>
            <div className="miniCard">
              <div className="cardLabel">Pending Assignments</div>
              <div className="cardValue">1</div>
              <div className="pageSubtitle">Pieces waiting for you</div>
            </div>
          </div>

          <div className="card widePanel">
            <div className="sectionTitle">Recent Sessions</div>
            <div className="emptyState" style={{ height: 170, marginTop: 10 }}>
              No practice sessions yet. Start playing!
            </div>
          </div>
        </div>
      </div>

      {isJoinOpen ? (
        <div
          className="modalBackdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Join a Classroom"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setIsJoinOpen(false);
          }}
        >
          <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
            <div className="modalTop">
              <div>
                <div className="modalTitle">Join a Classroom</div>
                <div className="modalSub">
                  Enter the code provided by your instructor.
                </div>
              </div>
              <button
                type="button"
                className="modalClose"
                aria-label="Close"
                onClick={() => setIsJoinOpen(false)}
              >
                ×
              </button>
            </div>

            <div style={{ marginTop: 12 }}>
              <input
                className="input"
                placeholder="ENTER CLASS CODE (E.G. VIRI101)"
                value={joinCode}
                onChange={(e) => {
                  setJoinCode(e.target.value.toUpperCase());
                  setJoinMessage("");
                }}
              />
              {joinMessage ? (
                <div
                  className="pageSubtitle"
                  style={{
                    marginTop: 8,
                    color: joinMessage.startsWith("Joined")
                      ? "rgba(95,214,156,.92)"
                      : "rgba(255,107,107,.92)",
                  }}
                >
                  {joinMessage}
                </div>
              ) : null}
            </div>

            <div className="modalActions">
              <button
                type="button"
                className="modalPrimary"
                onClick={() => {
                  const code = joinCode.trim().toUpperCase();
                  if (!code) {
                    setJoinMessage("Please enter a classroom code.");
                    return;
                  }

                  const found = AVAILABLE_CLASSROOMS.find((c) => c.code === code);
                  if (!found) {
                    setJoinMessage("Invalid code. Please check and try again.");
                    return;
                  }

                  const alreadyJoined = classrooms.some((c) => c.code === code);
                  if (alreadyJoined) {
                    setJoinMessage("You already joined this classroom.");
                    return;
                  }

                  setClassrooms((prev) => [...prev, found]);
                  setJoinMessage(`Joined ${found.name}.`);
                  setTimeout(() => setIsJoinOpen(false), 500);
                }}
              >
                Join
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

