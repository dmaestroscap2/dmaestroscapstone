import React from "react";
import { PageHeader } from "../shared/PageHeader";

export function FeedbackPage() {
  return (
    <div>
      <PageHeader
        title="Feedback"
        subtitle="Share your thoughts, suggestions, or report issues to help us improve."
      />

      <div className="contentGrid">
        <div className="card">
          <div className="sectionTitle">Submit Feedback</div>
          <div className="sectionSub">
            Tell us what you think about the system, suggest new features, or
            report problems.
          </div>

          <div className="field">
            <div className="label">
              Category <span style={{ color: "rgba(241,194,75,.92)" }}>*</span>
            </div>
            <select className="select" style={{ width: "100%" }}>
              <option>Select a category</option>
              <option>Feature Request</option>
              <option>Bug Report</option>
              <option>Practice Feedback</option>
            </select>
          </div>

          <div className="field">
            <div className="label">
              Subject <span style={{ color: "rgba(241,194,75,.92)" }}>*</span>
            </div>
            <input className="input" placeholder="Brief summary of your feedback" />
          </div>

          <div className="field">
            <div className="label">
              Message <span style={{ color: "rgba(241,194,75,.92)" }}>*</span>
            </div>
            <textarea className="textarea" placeholder="Please describe in detail..." />
          </div>

          <div className="field">
            <div className="label">Rate Your Experience (Optional)</div>
            <div style={{ display: "flex", gap: 10, opacity: 0.75 }}>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
            </div>
          </div>

          <button className="primaryBtn" type="button">
            Submit Feedback
          </button>
        </div>

        <div className="rightRail">
          <div className="tipBox">
            <div className="tipTitle">Quick Tips</div>
            <div className="tipItem">
              <div className="tipHead" style={{ color: "rgba(126,168,255,.92)" }}>
                Feature Requests
              </div>
              <div className="tipBody">
                Describe the feature you'd like and how it would help your
                learning.
              </div>
            </div>
            <div className="tipItem">
              <div className="tipHead" style={{ color: "rgba(241,194,75,.92)" }}>
                Bug Reports
              </div>
              <div className="tipBody">
                Include what you were doing when the issue occurred and what you
                expected to happen.
              </div>
            </div>
            <div className="tipItem">
              <div className="tipHead" style={{ color: "rgba(95,214,156,.92)" }}>
                Practice Feedback
              </div>
              <div className="tipBody">
                Share your experience with the practice tools, microphone
                detection, and note accuracy.
              </div>
            </div>
          </div>

          <div className="tipBox">
            <div className="tipBody">
              Logged in as <span style={{ color: "rgba(241,194,75,.92)", fontWeight: 900 }}>bert</span>
              <div style={{ marginTop: 4 }}>Instructor</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

