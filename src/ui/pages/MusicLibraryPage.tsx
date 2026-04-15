import React from "react";
import { PageHeader } from "../shared/PageHeader";

export function MusicLibraryPage() {
  return (
    <div>
      <PageHeader
        title="Music Library"
        subtitle="Manage your sheet music and assign pieces to students."
        right={
          <button className="primaryBtn" type="button" style={{ width: 140 }}>
            Upload MP3
          </button>
        }
      />

      <div className="card" style={{ maxWidth: 430 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 12,
          }}
        >
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 12,
              display: "grid",
              placeItems: "center",
              background: "rgba(241,194,75,.10)",
              border: "1px solid rgba(241,194,75,.22)",
              color: "rgba(241,194,75,.92)",
              fontWeight: 900,
            }}
          >
            ♪
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 900 }}>happu</div>
            <div className="pageSubtitle">happy</div>
            <div className="pageSubtitle">medium</div>
          </div>
          <div className="pageSubtitle">0:42</div>
        </div>

        <div
          style={{
            height: 6,
            borderRadius: 999,
            background: "rgba(255,255,255,.06)",
            border: "1px solid rgba(255,255,255,.06)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "35%",
              height: "100%",
              background: "rgba(241,194,75,.45)",
            }}
          />
        </div>
        <div className="pageSubtitle" style={{ textAlign: "center", marginTop: 10 }}>
          Curated for 7 instruments
        </div>

        <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
          <button type="button" className="signOutBtn" style={{ flex: 1 }}>
            ▶ Preview
          </button>
          <button type="button" className="signOutBtn" style={{ width: 46 }}>
            ⇵
          </button>
          <button type="button" className="signOutBtn" style={{ width: 46 }}>
            🗑
          </button>
        </div>

        <button
          type="button"
          className="signOutBtn"
          style={{ width: "100%", marginTop: 10, color: "rgba(216,221,231,.9)" }}
        >
          ＋ Assign
        </button>
      </div>
    </div>
  );
}

