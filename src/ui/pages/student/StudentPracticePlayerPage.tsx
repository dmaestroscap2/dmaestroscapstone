import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export function StudentPracticePlayerPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const title = searchParams.get("title") ?? "happu";
  const subtitle = searchParams.get("subtitle") ?? "happy";
  const instrument = searchParams.get("instrument") ?? "piano";

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button
          type="button"
          className="ghostBtn"
          style={{ padding: "8px 12px" }}
          onClick={() => navigate(-1)}
        >
          ← Exit Practice
        </button>
        <button type="button" className="ghostBtn" style={{ padding: "8px 12px" }}>
          📄 Download PDF
        </button>
      </div>

      <div style={{ textAlign: "center", marginTop: 8 }}>
        <div style={{ fontSize: 44, fontWeight: 900, lineHeight: 1 }}>{title}</div>
        <div style={{ color: "rgba(241,194,75,.95)", fontSize: 30, fontWeight: 900 }}>
          {subtitle}
        </div>
        <div style={{ marginTop: 10, display: "flex", justifyContent: "center", gap: 8 }}>
          <span className="pill">√ Microphone Ready</span>
          <span className="pill">🎵 {instrument}</span>
        </div>
      </div>

      <div
        style={{
          marginTop: 14,
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: 12,
          maxWidth: 540,
          marginInline: "auto",
          textAlign: "center",
        }}
      >
        <div>
          <div style={{ fontWeight: 900, fontSize: 40 }}>0</div>
          <div className="pageSubtitle" style={{ marginTop: 0 }}>
            SCORE
          </div>
        </div>
        <div>
          <div style={{ fontWeight: 900, fontSize: 40 }}>0%</div>
          <div className="pageSubtitle" style={{ marginTop: 0 }}>
            PROGRESS
          </div>
        </div>
        <div>
          <div style={{ fontWeight: 900, fontSize: 40, color: "rgba(241,194,75,.95)" }}>E2</div>
          <div className="pageSubtitle" style={{ marginTop: 0 }}>
            EXPECTED
          </div>
        </div>
        <div>
          <div style={{ fontWeight: 900, fontSize: 40 }}>—</div>
          <div className="pageSubtitle" style={{ marginTop: 0 }}>
            YOU PLAY
          </div>
        </div>
      </div>

      <div className="sheetPreviewBox" style={{ marginTop: 16, height: 260, borderWidth: 2 }}>
        <svg viewBox="0 0 1000 260" width="100%" height="100%">
          <rect x="0" y="0" width="1000" height="260" fill="rgba(255,255,255,0.01)" />
          {[58, 78, 98, 118, 138].map((y) => (
            <line
              key={`staff1-${y}`}
              x1="30"
              y1={y}
              x2="970"
              y2={y}
              stroke="rgba(216,221,231,.25)"
              strokeWidth="1"
            />
          ))}
          {[170, 320, 470, 620, 770, 920].map((x) => (
            <line
              key={`bar-${x}`}
              x1={x}
              y1="58"
              x2={x}
              y2="138"
              stroke="rgba(216,221,231,.18)"
              strokeWidth="1"
            />
          ))}
          <line x1="420" y1="0" x2="420" y2="260" stroke="rgba(241,194,75,.8)" strokeWidth="2" />
          {[210, 260, 335, 430, 650, 790, 860, 915].map((x, i) => (
            <g key={x}>
              <ellipse
                cx={x}
                cy={118 - (i % 3) * 10}
                rx="10"
                ry="7"
                fill="rgba(216,221,231,.9)"
                transform={`rotate(-20 ${x} ${118 - (i % 3) * 10})`}
              />
              <line
                x1={x + 8}
                y1={118 - (i % 3) * 10}
                x2={x + 8}
                y2={82 - (i % 3) * 10}
                stroke="rgba(216,221,231,.85)"
                strokeWidth="2"
              />
            </g>
          ))}
        </svg>
      </div>

      <div className="card" style={{ marginTop: 14 }}>
        <div style={{ height: 66, borderRadius: 10, border: "1px solid rgba(255,255,255,.06)" }} />
        <div
          style={{
            marginTop: 10,
            height: 6,
            borderRadius: 999,
            background: "rgba(241,194,75,.28)",
            border: "1px solid rgba(241,194,75,.22)",
          }}
        />
        <div style={{ marginTop: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div className="pageSubtitle" style={{ marginTop: 0 }}>
            Playback Speed: 1x
          </div>
          <button type="button" className="primaryBtn" style={{ width: 66, height: 48, marginTop: 0 }}>
            ▶
          </button>
          <div className="pageSubtitle" style={{ marginTop: 0 }}>
            Playback Settings
          </div>
        </div>
      </div>
    </div>
  );
}

