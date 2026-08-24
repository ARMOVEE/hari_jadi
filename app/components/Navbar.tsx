"use client";
import Switch from "./Switch";

interface NavbarProps {
  isNight: boolean;
  onToggle: () => void;
}

export default function Navbar({ isNight, onToggle }: NavbarProps) {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 clamp(10px, 4vw, 40px)",
        height: "clamp(48px, 7vh, 68px)",
        background: "rgba(255,255,255,0.06)",
        backdropFilter: "blur(18px) saturate(1.4)",
        WebkitBackdropFilter: "blur(18px) saturate(1.4)",
        borderBottom: "1px solid rgba(255,255,255,0.10)",
        boxShadow: "0 2px 24px rgba(0,0,0,0.18)",
      }}
    >
      {/* ── Left: Branding ── */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {/* Blossom icon */}
        <span
          style={{
            fontSize: "clamp(20px, 2.5vw, 26px)",
            lineHeight: 1,
            filter: "drop-shadow(0 0 6px rgba(255,100,150,0.7))",
            animation: "heartbeat 1.8s ease-in-out infinite",
          }}
        >
          🌸
        </span>

        {/* Brand text */}
        <span
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontWeight: 700,
            fontSize: "clamp(15px, 2.2vw, 22px)",
            letterSpacing: "0.06em",
            background: isNight
              ? "linear-gradient(135deg, #c9b8ff 0%, #f0c0ff 60%, #ffe4f0 100%)"
              : "linear-gradient(135deg, #fff 0%, #ffe0ec 60%, #ffd6f0 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            transition: "all 0.6s ease",
            userSelect: "none",
          }}
        >
          Anniversary
        </span>

        {/* Decorative mini hearts — hidden on very small screens */}
        <span style={{ display: "flex", gap: "4px", opacity: 0.5 }} className="hidden sm:flex">
          {["♡", "♡"].map((h, i) => (
            <span
              key={i}
              style={{
                fontSize: "10px",
                color: isNight ? "#d8b4fe" : "#f9a8d4",
                animation: `heartbeat 1.8s ease-in-out ${i * 0.3}s infinite`,
              }}
            >
              {h}
            </span>
          ))}
        </span>
      </div>

      {/* ── Right: Theme toggle ── */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span
          style={{
            fontSize: "clamp(10px, 1.2vw, 13px)",
            color: "rgba(255,255,255,0.55)",
            letterSpacing: "0.08em",
            fontWeight: 500,
            textTransform: "uppercase",
            userSelect: "none",
          }}
        >
          {isNight ? "Malam" : "Siang"}
        </span>

        <div
          style={{
            transform: "scale(0.52)",
            transformOrigin: "center right",
            flexShrink: 0,
          }}
        >
          <Switch checked={isNight} onChange={onToggle} />
        </div>
      </div>

      <style>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          14%       { transform: scale(1.18); }
          28%       { transform: scale(1); }
          42%       { transform: scale(1.12); }
          70%       { transform: scale(1); }
        }
      `}</style>
    </nav>
  );
}
