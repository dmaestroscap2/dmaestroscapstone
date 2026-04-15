import React from "react";
import { PageHeader } from "../shared/PageHeader";

export function DashboardPage() {
  return (
    <div>
      <PageHeader
        title="Dashboard"
        subtitle="Welcome back, Maestro. Here is your academy's overview."
      />

      <div className="gridCards">
        <div className="card">
          <div className="cardLabel">My Classrooms</div>
          <div className="cardValue">1</div>
          <div className="pageSubtitle">Active Courses</div>
        </div>
        <div className="card">
          <div className="cardLabel">Total Members</div>
          <div className="cardValue">1</div>
          <div className="pageSubtitle">1 enrolled</div>
        </div>
        <div className="card">
          <div className="cardLabel">Active Assignments</div>
          <div className="cardValue">1</div>
          <div className="pageSubtitle">0% completion rate</div>
        </div>
        <div className="card">
          <div className="cardLabel">Avg. Class Accuracy</div>
          <div className="cardValue" style={{ fontSize: 20 }}>
            N/A
          </div>
          <div className="pageSubtitle">No practice data yet</div>
        </div>
      </div>

      <div className="twoCols">
        <div className="card">
          <div className="sectionTitle">Active Classrooms</div>
          <div className="sectionSub"> </div>
          <div
            style={{
              padding: 12,
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,.06)",
              background: "rgba(255,255,255,.02)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 8,
                  background: "rgba(241,194,75,.10)",
                  border: "1px solid rgba(241,194,75,.22)",
                  display: "grid",
                  placeItems: "center",
                  color: "rgba(241,194,75,.92)",
                  fontWeight: 900,
                }}
              >
                p
              </div>
              <div>
                <div style={{ fontWeight: 900 }}>pup brushbond</div>
                <div className="pageSubtitle">1 members</div>
              </div>
            </div>
            <span className="pill">V24TQA</span>
          </div>
        </div>

        <div className="card">
          <div className="sectionTitle">Recent Assignments</div>
          <div className="sectionSub"> </div>
          <div
            style={{
              padding: 12,
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,.06)",
              background: "rgba(255,255,255,.02)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
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
              <div>
                <div style={{ fontWeight: 900 }}>happu</div>
                <div className="pageSubtitle">Assigned to bert</div>
              </div>
            </div>
            <span
              className="pill"
              style={{
                borderColor: "rgba(126,168,255,.22)",
                background: "rgba(126,168,255,.10)",
                color: "rgba(126,168,255,.92)",
              }}
            >
              not_started
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

