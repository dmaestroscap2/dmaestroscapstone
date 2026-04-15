import React from "react";
import { PageHeader } from "../shared/PageHeader";

export function SessionAnalyticsPage() {
  return (
    <div>
      <PageHeader
        title="Session Analytics"
        subtitle="View practice session analytics and performance heatmaps."
        right={
          <>
            <select className="select" defaultValue="All Classrooms">
              <option>All Classrooms</option>
            </select>
            <select className="select" defaultValue="All Students">
              <option>All Students</option>
            </select>
          </>
        }
      />

      <div className="gridCards">
        <div className="card">
          <div className="cardLabel">Total Sessions</div>
          <div className="cardValue">0</div>
        </div>
        <div className="card">
          <div className="cardLabel">Avg Accuracy</div>
          <div className="cardValue">0%</div>
        </div>
        <div className="card">
          <div className="cardLabel">Avg Score</div>
          <div className="cardValue">0</div>
        </div>
        <div className="card">
          <div className="cardLabel">Wrong Notes</div>
          <div className="cardValue">0</div>
        </div>
      </div>

      <div className="twoCols">
        <div className="card">
          <div className="sectionTitle">Performance Trend</div>
          <div className="sectionSub">Score and accuracy over recent sessions</div>
          <div className="emptyState">No practice data yet</div>
        </div>
        <div className="card">
          <div className="sectionTitle">Performance by Piece</div>
          <div className="sectionSub">Average accuracy per music piece</div>
          <div className="emptyState">No practice data yet</div>
        </div>
      </div>

      <div style={{ marginTop: 14 }} className="card">
        <div className="sectionTitle">Practice Heatmap</div>
        <div className="sectionSub">
          When your students practice throughout the week
        </div>
        <div className="emptyState" style={{ height: 130 }}>
          No practice data yet
        </div>
      </div>
    </div>
  );
}

