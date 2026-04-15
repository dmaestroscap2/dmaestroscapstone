import React from "react";
import { PageHeader } from "../shared/PageHeader";
import { INSTRUMENTS, type Instrument } from "../data/instruments";

export function MusicLibraryPage() {
  const [isPreviewOpen, setIsPreviewOpen] = React.useState(false);
  const [isUploadOpen, setIsUploadOpen] = React.useState(false);
  const [isAssignOpen, setIsAssignOpen] = React.useState(false);
  const [assignMode, setAssignMode] = React.useState<"class" | "student">("class");
  const [assignTarget, setAssignTarget] = React.useState("");
  const [previewTab, setPreviewTab] = React.useState<
    "original" | "synth" | "instrument"
  >("original");
  const [instrument, setInstrument] = React.useState<Instrument>("piano");
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
              <div className="sheetPreviewInner">
                {previewTab === "original"
                  ? "Original Audio View"
                  : previewTab === "synth"
                    ? `Synthesized Notes (${instrument})`
                    : `Instrument: ${instrument}`}
              </div>
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
                Student
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
                  {assignMode === "class" ? "Select Classroom" : "Select Student"}
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
    </div>
  );
}

