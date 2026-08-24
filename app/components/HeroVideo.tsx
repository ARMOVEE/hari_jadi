"use client";
import { useRef, useEffect } from "react";

export default function HeroVideo({
  isNight,
  onToggle,
}: {
  isNight: boolean;
  onToggle: () => void;
}) {
  const dayVideoRef = useRef<HTMLVideoElement>(null);
  const nightVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const dayVideo = dayVideoRef.current;
    const nightVideo = nightVideoRef.current;
    if (!dayVideo || !nightVideo) return;

    const playSafe = (video: HTMLVideoElement) => {
      const p = video.play();
      if (p !== undefined) {
        p.catch((err) => {
          if (err.name !== "AbortError") console.error(err);
        });
      }
    };

    playSafe(dayVideo);
    playSafe(nightVideo);
  }, []);

  return (
    <div className="relative w-full overflow-hidden" style={{ height: "100dvh" }}>
      {/* ── Background videos ── */}
      <video
        ref={dayVideoRef}
        autoPlay loop muted playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isNight ? "opacity-0" : "opacity-100"
          }`}
      >
        <source src="/videos/kucing-siang.mp4.mp4" type="video/mp4" />
      </video>

      <video
        ref={nightVideoRef}
        autoPlay loop muted playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isNight ? "opacity-100" : "opacity-0"
          }`}
      >
        <source src="/videos/kucing-malam.mp4.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent pointer-events-none" />

      {/* ══════════════════════════════════════
          MAIN CONTENT — vertikal tengah-bawah
      ══════════════════════════════════════ */}
      <div
        className="
          absolute inset-x-0 z-10
          flex flex-col items-center justify-end
          text-center
          bottom-0
          px-5 pt-20
          pb-8
          sm:pb-10 sm:px-10
          md:items-start md:text-left md:px-14 md:pb-12
          lg:px-20 lg:pb-16
          md:max-w-2xl
          gap-2 sm:gap-3
        "
        style={{ maxHeight: "100dvh", boxSizing: "border-box" }}
      >
        {/* Pill tag */}
        <span className="
          inline-flex items-center gap-1.5
          px-3 py-1 rounded-full
          text-[11px] sm:text-xs font-semibold tracking-widest uppercase
          border border-white/30 bg-white/10 backdrop-blur-sm text-white/90
          mb-1
        ">
          <span>{isNight ? "🌙" : "☀️"}</span>
          {isNight ? "Malam Penuh Bintang" : "Hari yang Indah"}
        </span>

        {/* Headline */}
        <h1 className="
          font-extrabold leading-tight tracking-tight text-white
          text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl
          mb-0
        ">
          Hari Jadi Kita
        </h1>

        {/* Sub text */}
        <p className="
          text-white/80 font-light leading-snug
          text-sm sm:text-base
          max-w-[280px] sm:max-w-sm md:max-w-none
          mb-1
        ">
          Setiap detik bersamamu adalah halaman baru yang tak ingin kuakhiri.
        </p>

        {/* Stat pills */}
        <div className="flex flex-row flex-wrap justify-center md:justify-start gap-2 w-full md:w-auto">
          <StatPill icon="❤️" label="Bersama Sejak" value="2024" />
          <StatPill icon="📅" label="Hari Ini" value={todayString()} />
        </div>
      </div>
    </div>
  );
}

/* ── Stat Pill ── */
function StatPill({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="
      flex items-center gap-2
      px-3 py-2 rounded-2xl
      bg-white/15 backdrop-blur-md border border-white/20
      text-white
      shrink-0
    ">
      <span className="text-base leading-none">{icon}</span>
      <div className="flex flex-col leading-tight">
        <span className="text-[9px] font-semibold uppercase tracking-wider text-white/60">
          {label}
        </span>
        <span className="text-xs sm:text-sm font-bold whitespace-nowrap">{value}</span>
      </div>
    </div>
  );
}

function todayString() {
  return new Date().toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}