import React from "react";
import { PageHeader } from "../../shared/PageHeader";

export function StudentAnalyticsPage() {
  return (
    <div>
      <PageHeader
        title="Practice Analytics"
        subtitle="Track your progress and performance over time."
      />

      <div className="gridCards">
        <div className="card">
          <div className="cardLabel">Total Sessions</div>
          <div className="cardValue">0</div>
        </div>
        <div className="card">
          <div className="cardLabel">Average Score</div>
          <div className="cardValue">0%</div>
        </div>
        <div className="card">
          <div className="cardLabel">Average Accuracy</div>
          <div className="cardValue">0%</div>
        </div>
        <div className="card">
          <div className="cardLabel">Note Hit Rate</div>
          <div className="cardValue">0%</div>
        </div>
      </div>

      <div className="twoCols">
        <div className="card">
          <div className="sectionTitle">Performance Trend</div>
          <div className="sectionSub">Your last 10 practice sessions</div>
          <div className="emptyState">No practice data yet</div>
        </div>
        <div className="card">
          <div className="sectionTitle">Performance by Piece</div>
          <div className="sectionSub">Average scores for each piece</div>
          <div className="emptyState">No practice data yet</div>
        </div>
      </div>

      <div style={{ marginTop: 14 }} className="card">
        <div className="sectionTitle">Recent Practice Sessions</div>
        <div className="emptyState" style={{ height: 140, marginTop: 10 }}>
          No practice data yet
        </div>
      </div>
    </div>
  );
}

