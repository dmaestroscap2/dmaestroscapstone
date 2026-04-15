import React from "react";
import { PageHeader } from "../shared/PageHeader";
import { INSTRUMENTS, type Instrument } from "../data/instruments";

export function MusicLibraryPage() {
  const [isPreviewOpen, setIsPreviewOpen] = React.useState(false);
  const [isUploadOpen, setIsUploadOpen] = React.useState(false);
  const [isAssignOpen, setIsAssignOpen] = React.useState(false);
  const [isTransposeOpen, setIsTransposeOpen] = React.useState(false);
  const [assignMode, setAssignMode] = React.useState<"class" | "student">("class");
  const [assignTarget, setAssignTarget] = React.useState("");
  const [previewTab, setPreviewTab] = React.useState<
    "original" | "synth" | "instrument"
  >("original");
  const [instrument, setInstrument] = React.useState<Instrument>("piano");
  const [transposeInstrument, setTransposeInstrument] =
    React.useState<Instrument>("piano");
  const [semitones, setSemitones] = React.useState(0);
  const [uploadTitle, setUploadTitle] = React.useState("");
  const [uploadComposer, setUploadComposer] = React.useState("");
  const [uploadFileName, setUploadFileName] = React.useState<string | null>(null);

  return (
    <div>
      <PageHeader
        title="Music Library"
        subtitle="Manage your sheet music and assign pieces to students."
        right={
          <button
            className="primaryBtn"
            type="button"
            style={{ width: 140 }}
            onClick={() => setIsUploadOpen(true)}
          >
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
          <button
            type="button"
            className="signOutBtn"
            style={{ flex: 1 }}
            onClick={() => setIsPreviewOpen(true)}
          >
            ▶ Preview
          </button>
          <button
            type="button"
            className="signOutBtn"
            style={{ width: 46 }}
            onClick={() => setIsTransposeOpen(true)}
          >
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
          onClick={() => setIsAssignOpen(true)}
        >
          ＋ Assign
        </button>
      </div>

      {isPreviewOpen ? (
        <div
          className="modalBackdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Preview"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setIsPreviewOpen(false);
          }}
        >
          <div
            className="modal previewModal"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="modalTop">
              <div>
                <div className="previewHeaderTitle">FGH</div>
                <div className="previewHeaderSub">VBNM</div>
              </div>
              <button
                type="button"
                className="modalClose"
                aria-label="Close"
                onClick={() => setIsPreviewOpen(false)}
              >
                ×
              </button>
            </div>

            <div className="tabsRow">
              <div className="tabsLeft">
                <div className="pageSubtitle" style={{ marginTop: 0 }}>
                  Preview Sound:
                </div>
                <button
                  type="button"
                  className={
                    "tabPill" + (previewTab === "original" ? " tabPillActive" : "")
                  }
                  onClick={() => setPreviewTab("original")}
                >
                  Original Audio
                </button>
                <button
                  type="button"
                  className={
                    "tabPill" + (previewTab === "synth" ? " tabPillActive" : "")
                  }
                  onClick={() => setPreviewTab("synth")}
                >
                  Synthesized Notes
                </button>
                <button
                  type="button"
                  className={
                    "tabPill" +
                    (previewTab === "instrument" ? " tabPillActive" : "")
                  }
                  onClick={() => setPreviewTab("instrument")}
                >
                  Instrument:
                </button>
              </div>

              <select
                className="select"
                style={{ minWidth: 180 }}
                value={instrument}
                onChange={(e) => setInstrument(e.target.value as Instrument)}
              >
                {INSTRUMENTS.map((inst) => (
                  <option key={inst} value={inst}>
                    {inst}
                  </option>
                ))}
              </select>
            </div>

            <div className="dividerLine" />

            <div className="pageSubtitle" style={{ marginTop: 14 }}>
              Sheet Music Preview
            </div>
            <div className="sheetPreviewBox">
              <svg
                viewBox="0 0 1000 260"
                width="100%"
                height="100%"
                role="img"
                aria-label={`Sheet music preview for ${instrument}`}
              >
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
                {[170, 190, 210, 230, 250].map((y) => (
                  <line
                    key={`staff2-${y}`}
                    x1="30"
                    y1={y}
                    x2="970"
                    y2={y}
                    stroke="rgba(216,221,231,.2)"
                    strokeWidth="1"
                  />
                ))}

                {[170, 320, 470, 620, 770, 920].map((x) => (
                  <line
                    key={`bar-${x}`}
                    x1={x}
                    y1="58"
                    x2={x}
                    y2="250"
                    stroke="rgba(216,221,231,.18)"
                    strokeWidth="1"
                  />
                ))}

                <text
                  x="45"
                  y="92"
                  fill="rgba(216,221,231,.85)"
                  fontSize="30"
                  fontFamily="serif"
                >
                  𝄞
                </text>

                {[
                  { x: 210, y: 118, up: true },
                  { x: 265, y: 98, up: true },
                  { x: 340, y: 138, up: true },
                  { x: 420, y: 108, up: true },
                  { x: 510, y: 88, up: true },
                  { x: 590, y: 118, up: false },
                  { x: 665, y: 98, up: false },
                  { x: 740, y: 128, up: false },
                  { x: 820, y: 108, up: false },
                ].map((n, idx) => (
                  <g key={`n-${idx}`}>
                    <ellipse
                      cx={n.x}
                      cy={n.y}
                      rx="10"
                      ry="7"
                      fill={
                        previewTab === "original"
                          ? "rgba(216,221,231,.9)"
                          : previewTab === "synth"
                            ? "rgba(126,168,255,.95)"
                            : "rgba(241,194,75,.95)"
                      }
                      transform={`rotate(-20 ${n.x} ${n.y})`}
                    />
                    <line
                      x1={n.up ? n.x + 8 : n.x - 8}
                      y1={n.y}
                      x2={n.up ? n.x + 8 : n.x - 8}
                      y2={n.up ? n.y - 36 : n.y + 36}
                      stroke="rgba(216,221,231,.85)"
                      strokeWidth="2"
                    />
                  </g>
                ))}

                <text
                  x="760"
                  y="34"
                  fill="rgba(216,221,231,.45)"
                  fontSize="12"
                  fontFamily="ui-sans-serif, system-ui"
                >
                  {previewTab === "original"
                    ? "Original Audio"
                    : previewTab === "synth"
                      ? `Synthesized (${instrument})`
                      : `Instrument: ${instrument}`}
                </text>
              </svg>
            </div>

            <div className="audioBlock">
              <div className="audioTitle">
                <span>▶ Play Original Audio</span>
                <button type="button" className="audioBtn">
                  Click to preview original audio
                </button>
              </div>
              <div className="audioSub">Song: FGH • 1:39</div>
            </div>

            <div className="audioBlock">
              <div className="audioTitle">
                <span>🔊 Play Synthesized Notes</span>
              </div>
              <div className="audioSub">
                Automatically transposed for {instrument}
              </div>
            </div>

            <div className="audioBlock">
              <div className="audioTitle">
                <span>⬇ Download PDF</span>
              </div>
              <div className="audioSub">Export the sheet music preview</div>
            </div>
          </div>
        </div>
      ) : null}

      {isUploadOpen ? (
        <div
          className="modalBackdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Upload Audio"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setIsUploadOpen(false);
          }}
        >
          <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
            <div className="modalTop">
              <div>
                <div className="modalTitle">Upload Audio</div>
                <div className="modalSub">
                  Upload an MP3 file. Our AI will automatically convert it to
                  sheet music for all supported instruments.
                </div>
              </div>
              <button
                type="button"
                className="modalClose"
                aria-label="Close"
                onClick={() => setIsUploadOpen(false)}
              >
                ×
              </button>
            </div>

            <div style={{ marginTop: 12 }}>
              <div className="field">
                <div className="label">Title</div>
                <input
                  className="input"
                  placeholder="e.g. Moonlight Sonata"
                  value={uploadTitle}
                  onChange={(e) => setUploadTitle(e.target.value)}
                />
              </div>

              <div className="field">
                <div className="label">Composer / Artist</div>
                <input
                  className="input"
                  placeholder="e.g. Beethoven"
                  value={uploadComposer}
                  onChange={(e) => setUploadComposer(e.target.value)}
                />
              </div>

              <div className="field">
                <div className="label">Audio File (MP3)</div>
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                    padding: "10px 12px",
                    borderRadius: 10,
                    background: "rgba(255,255,255,.03)",
                    border: "1px solid rgba(255,255,255,.08)",
                  }}
                >
                  <label
                    className="modalPrimary"
                    style={{
                      padding: "6px 10px",
                      borderRadius: 8,
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Choose File
                    <input
                      type="file"
                      accept=".mp3,audio/mpeg"
                      style={{ display: "none" }}
                      onChange={(e) => {
                        const f = e.target.files?.[0];
                        setUploadFileName(f ? f.name : null);
                      }}
                    />
                  </label>
                  <div className="pageSubtitle" style={{ marginTop: 0 }}>
                    {uploadFileName ?? "No file chosen"}
                  </div>
                </div>
              </div>
            </div>

            <button
              className="primaryBtn"
              type="button"
              onClick={() => {
                // UI-only: close + reset
                setUploadTitle("");
                setUploadComposer("");
                setUploadFileName(null);
                setIsUploadOpen(false);
              }}
            >
              Upload &amp; Convert
            </button>
          </div>
        </div>
      ) : null}

      {isAssignOpen ? (
        <div
          className="modalBackdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Assign Piece"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setIsAssignOpen(false);
          }}
        >
          <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
            <div className="modalTop">
              <div>
                <div className="modalTitle">Assign "FGH"</div>
                <div className="modalSub">
                  Assign this piece to a whole class or individual student.
                </div>
              </div>
              <button
                type="button"
                className="modalClose"
                aria-label="Close"
                onClick={() => setIsAssignOpen(false)}
              >
                ×
              </button>
            </div>

            <div className="assignModeToggle">
              <button
                type="button"
                className={
                  "assignModeBtn" + (assignMode === "class" ? " assignModeBtnActive" : "")
                }
                onClick={() => {
                  setAssignMode("class");
                  setAssignTarget("");
                }}
              >
                Whole Class
              </button>
              <button
                type="button"
                className={
                  "assignModeBtn" +
                  (assignMode === "student" ? " assignModeBtnActive" : "")
                }
                onClick={() => {
                  setAssignMode("student");
                  setAssignTarget("");
                }}
              >
                Member
              </button>
            </div>

            <div style={{ marginTop: 12 }}>
              <select
                className="select"
                style={{ width: "100%" }}
                value={assignTarget}
                onChange={(e) => setAssignTarget(e.target.value)}
              >
                <option value="">
                  {assignMode === "class" ? "Select Classroom" : "Select Member"}
                </option>
                {assignMode === "class" ? (
                  <>
                    <option value="pup-brushbond">pup brushbond</option>
                    <option value="jazz-advanced">jazz advanced</option>
                  </>
                ) : (
                  <>
                    <option value="berto">berto</option>
                    <option value="beryl">beryl</option>
                  </>
                )}
              </select>
            </div>

            <div className="assignConfirmRow">
              <button
                type="button"
                className="assignConfirmBtn"
                onClick={() => setIsAssignOpen(false)}
              >
                Confirm Assignment
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {isTransposeOpen ? (
        <div
          className="modalBackdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Transpose Piece"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setIsTransposeOpen(false);
          }}
        >
          <div
            className="modal previewModal"
            onMouseDown={(e) => e.stopPropagation()}
            style={{ maxWidth: 980 }}
          >
            <div className="modalTop">
              <div>
                <div className="previewHeaderTitle">Transpose "FGH"</div>
                <div className="previewHeaderSub">
                  Shift all notes up or down by semitones
                </div>
              </div>
              <button
                type="button"
                className="modalClose"
                aria-label="Close"
                onClick={() => setIsTransposeOpen(false)}
              >
                ×
              </button>
            </div>

            <div style={{ marginTop: 14, display: "flex", justifyContent: "space-between" }}>
              <div className="sectionTitle" style={{ marginBottom: 0 }}>
                Transpose Amount
              </div>
              <div style={{ fontSize: 38, fontWeight: 900, color: "rgba(241,194,75,.95)" }}>
                {semitones} semitones
              </div>
            </div>

            <div style={{ marginTop: 10 }}>
              <input
                type="range"
                min={-12}
                max={12}
                step={1}
                value={semitones}
                onChange={(e) => setSemitones(Number(e.target.value))}
                style={{ width: "100%", accentColor: "#f1c24b" }}
              />
              <div
                className="pageSubtitle"
                style={{ marginTop: 2, display: "flex", justifyContent: "space-between" }}
              >
                <span>-12 (1 octave down)</span>
                <span>0 (original)</span>
                <span>+12 (1 octave up)</span>
              </div>
            </div>

            <div style={{ marginTop: 12, display: "flex", gap: 10, alignItems: "center" }}>
              <div className="pageSubtitle" style={{ marginTop: 0 }}>
                Preview as:
              </div>
              <select
                className="select"
                style={{ minWidth: 170 }}
                value={transposeInstrument}
                onChange={(e) => setTransposeInstrument(e.target.value as Instrument)}
              >
                {INSTRUMENTS.map((inst) => (
                  <option key={inst} value={inst}>
                    {inst}
                  </option>
                ))}
              </select>
              <button type="button" className="audioBtn">
                🔊 Play Notes
              </button>
            </div>

            <div className="pageSubtitle" style={{ marginTop: 16 }}>
              Transposed Preview
            </div>
            <div className="sheetPreviewBox" style={{ height: 240 }}>
              <svg viewBox="0 0 1000 240" width="100%" height="100%">
                <rect x="0" y="0" width="1000" height="240" fill="rgba(255,255,255,0.01)" />
                {[52, 72, 92, 112, 132].map((y) => (
                  <line
                    key={`t-s-${y}`}
                    x1="30"
                    y1={y}
                    x2="970"
                    y2={y}
                    stroke="rgba(216,221,231,.24)"
                    strokeWidth="1"
                  />
                ))}
                <line x1="430" y1="0" x2="430" y2="240" stroke="rgba(241,194,75,.75)" strokeWidth="2" />
                {[520, 590, 650, 720, 780, 845, 900].map((x, i) => (
                  <g key={`tn-${x}`}>
                    <ellipse
                      cx={x}
                      cy={105 + (i % 3) * 12}
                      rx="10"
                      ry="7"
                      fill="rgba(216,221,231,.94)"
                      transform={`rotate(-20 ${x} ${105 + (i % 3) * 12})`}
                    />
                    <line
                      x1={x + 8}
                      y1={105 + (i % 3) * 12}
                      x2={x + 8}
                      y2={68 + (i % 3) * 12}
                      stroke="rgba(216,221,231,.85)"
                      strokeWidth="2"
                    />
                  </g>
                ))}
              </svg>
            </div>

            <div style={{ marginTop: 10 }}>
              <button type="button" className="audioBtn">
                📄 Download Transposed PDF
              </button>
            </div>

            <div className="modalActions" style={{ gap: 10 }}>
              <button
                type="button"
                className="signOutBtn"
                style={{ width: "auto", marginTop: 0 }}
                onClick={() => setIsTransposeOpen(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="assignConfirmBtn"
                onClick={() => setIsTransposeOpen(false)}
              >
                Apply Transpose
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

