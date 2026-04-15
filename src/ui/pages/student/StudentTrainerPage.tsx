import React from "react";
import { PageHeader } from "../../shared/PageHeader";

export function StudentTrainerPage() {
  return (
    <div>
      <PageHeader
        title="Instrument Trainer"
        subtitle="Precision tuning and training for your piano."
      />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 14 }}>
        <div className="card" style={{ minHeight: 320 }}>
          <div style={{ fontWeight: 900, display: "flex", gap: 8, alignItems: "center" }}>
            ♪ <span>Live Tuner</span>
          </div>
          <div className="pageSubtitle">
            Detecting: <span className="pill">Piano</span>
          </div>

          <div
            style={{
              marginTop: 24,
              height: 200,
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,.06)",
              background: "rgba(255,255,255,.02)",
              display: "grid",
              placeItems: "center",
              color: "rgba(216,221,231,.6)",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ letterSpacing: ".12em", marginBottom: 8 }}>▮▮</div>
              <div style={{ fontWeight: 900, marginBottom: 18 }}>Silence</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: 360,
                  maxWidth: "100%",
                  fontSize: 11,
                  opacity: 0.8,
                }}
              >
                <span>Low</span>
                <span>Perfect</span>
                <span>High</span>
              </div>
              <div
                style={{
                  marginTop: 10,
                  height: 8,
                  borderRadius: 999,
                  background: "rgba(255,255,255,.06)",
                  border: "1px solid rgba(255,255,255,.06)",
                }}
              />
              <div style={{ marginTop: 10, fontWeight: 900 }}>0 cents</div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div className="card">
            <div className="sectionTitle">Controls</div>
            <button className="primaryBtn" type="button" style={{ marginTop: 12 }}>
              🎙 Start Training
            </button>
            <button className="signOutBtn" type="button" style={{ marginTop: 10 }}>
              ⊕ Calibration
            </button>
          </div>

          <div className="card">
            <div className="sectionTitle">Tips</div>
            <div className="pageSubtitle" style={{ marginTop: 8, lineHeight: 1.6 }}>
              - Ensure you are in a quiet room.
              <br />- Play a single note at a time for best accuracy.
              <br />- The center line indicates perfect tuning.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

