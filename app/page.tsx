"use client";
import { useState, useRef, useEffect } from "react";
import HeroVideo from "./components/HeroVideo";
import { Skiper19 } from "./components/Skiper19";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";

export default function Home() {
  const [isNight, setIsNight] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (musicOn && audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch(() => { });
    }
  }, [musicOn]);

  const handleIntroFinish = (withMusic: boolean) => {
    setMusicOn(withMusic);
    setShowIntro(false);
  };

  return (
    <>
      <audio ref={audioRef} src="/music/backsound.mp3" loop />

      {showIntro && <Intro onFinish={handleIntroFinish} />}

      {!showIntro && (
        <>
          <Navbar isNight={isNight} onToggle={() => setIsNight((prev) => !prev)} />
          <HeroVideo isNight={isNight} onToggle={() => setIsNight((prev) => !prev)} />
          <Skiper19 isNight={isNight} />
        </>
      )}
    </>
  );
}