import React from "react";
import { useNavigate } from "react-router-dom";
import { PageHeader } from "../../shared/PageHeader";

export function StudentDashboardPage() {
  const navigate = useNavigate();

  return (
    <div>
      <PageHeader
        title="Hello, berto"
        subtitle="Ready to practice your piano today?"
        right={
          <div className="topActions">
            <button type="button" className="ghostBtn" onClick={() => {}}>
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
        <div className="card" style={{ height: 110 }}>
          <div className="sectionTitle">My Classrooms</div>
          <div
            style={{
              marginTop: 10,
              padding: 12,
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,.06)",
              background: "rgba(255,255,255,.02)",
            }}
          >
            <div style={{ fontWeight: 900, color: "rgba(241,194,75,.92)" }}>
              pup brushbond
            </div>
            <div className="pageSubtitle">Classroom</div>
          </div>
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
    </div>
  );
}

