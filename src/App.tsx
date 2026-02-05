import { useState, useRef } from 'react'

// Downloads served via GitHub Releases (public repo)
const DOWNLOADS = {
  web: 'https://transcribe-flax.vercel.app/',

  windows:
    'https://github.com/shmawilton/Transcribe-pro-landing-page/releases/download/v1.0.1/TranscribePro-Setup.exe',

  macosArm:
    'https://github.com/shmawilton/Transcribe-pro-landing-page/releases/download/v1.0.1/TranscribePro-arm64.dmg',

  macosIntel:
    'https://github.com/shmawilton/Transcribe-pro-landing-page/releases/download/v1.0.1/TranscribePro.dmg',
}

// Video demos - place your videos in public/videos/
const VIDEOS = {
  desktop: '/videos/demo-desktop.mp4',
  mobile: '/videos/demo-mobile.mp4',
}

function App() {
  const [activeVideo, setActiveVideo] = useState<'desktop' | 'mobile'>('desktop')
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div className="page">
      {/* Left: Branding + Downloads */}
      <div className="left-panel">
        <div className="brand">
          <div className="logo-ring">
            <img src="/logo.png" alt="TranscribePro" className="logo" />
          </div>
          <div className="brand-text">
            <h1>TranscribePro</h1>
            <p>Audio transcription made effortless</p>
          </div>
        </div>

        <div className="downloads">
          {/* Web */}
          <a
            href={DOWNLOADS.web}
            target="_blank"
            rel="noopener noreferrer"
            className={`dl-btn ${hoveredBtn === 'web' ? 'pressed' : ''}`}
            onMouseEnter={() => setHoveredBtn('web')}
            onMouseLeave={() => setHoveredBtn(null)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <div className="dl-info">
              <span className="dl-name">Open Web App</span>
              <span className="dl-hint">Works in any browser</span>
            </div>
          </a>

          {/* Windows */}
          <a
            href={DOWNLOADS.windows}
            download
            target="_blank"
            rel="noopener noreferrer"
            className={`dl-btn ${hoveredBtn === 'win' ? 'pressed' : ''}`}
            onMouseEnter={() => setHoveredBtn('win')}
            onMouseLeave={() => setHoveredBtn(null)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
            </svg>
            <div className="dl-info">
              <span className="dl-name">Windows</span>
              <span className="dl-hint">Download .exe</span>
            </div>
          </a>

          {/* macOS Apple Silicon */}
          <a
            href={DOWNLOADS.macosArm}
            download
            target="_blank"
            rel="noopener noreferrer"
            className={`dl-btn ${hoveredBtn === 'macArm' ? 'pressed' : ''}`}
            onMouseEnter={() => setHoveredBtn('macArm')}
            onMouseLeave={() => setHoveredBtn(null)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="dl-info">
              <span className="dl-name">macOS Apple Silicon</span>
              <span className="dl-hint">M1 / M2 / M3</span>
            </div>
          </a>

          {/* macOS Intel */}
          <a
            href={DOWNLOADS.macosIntel}
            download
            target="_blank"
            rel="noopener noreferrer"
            className={`dl-btn ${hoveredBtn === 'macIntel' ? 'pressed' : ''}`}
            onMouseEnter={() => setHoveredBtn('macIntel')}
            onMouseLeave={() => setHoveredBtn(null)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="dl-info">
              <span className="dl-name">macOS Intel</span>
              <span className="dl-hint">Older Macs</span>
            </div>
          </a>
        </div>

        <div className="footer-note">
          <span className="tag">Auto-updates</span>
          <span className="tag">Offline ready</span>
          <span className="tag accent">Private</span>
        </div>
      </div>

      {/* Right: Video Demo */}
      <div className="right-panel">
        <div className="video-header">
          <span className="video-label">See it in action</span>
          <div className="video-tabs">
            <button
              className={`video-tab ${activeVideo === 'desktop' ? 'active' : ''}`}
              onClick={() => setActiveVideo('desktop')}
            >
              Desktop
            </button>
            <button
              className={`video-tab ${activeVideo === 'mobile' ? 'active' : ''}`}
              onClick={() => setActiveVideo('mobile')}
            >
              Mobile
            </button>
          </div>
        </div>

        <div className="video-frame">
          <video
            ref={videoRef}
            key={activeVideo}
            src={VIDEOS[activeVideo]}
            autoPlay
            loop
            muted
            playsInline
            className="video"
          />
          <div className="video-placeholder">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#006b3f" strokeWidth="1.5">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            <span>Demo video</span>
          </div>
        </div>

        <p className="video-caption">
          Load audio, add timestamped markers, adjust playback speed, and export your notes.
        </p>
      </div>

      <div className="accent-line" />
    </div>
  )
}

export default App
