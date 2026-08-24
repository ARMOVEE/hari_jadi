"use client";
import { useState } from "react";
import HeroVideo from "./components/HeroVideo";
import { Skiper19 } from "./components/Skiper19";
import Navbar from "./components/Navbar";

export default function Home() {
  const [isNight, setIsNight] = useState(false);

  return (
    <>
      <Navbar isNight={isNight} onToggle={() => setIsNight((prev) => !prev)} />
      <HeroVideo isNight={isNight} onToggle={() => setIsNight((prev) => !prev)} />

      {/* Section berikutnya — tidak diubah sama sekali */}
      <Skiper19 isNight={isNight} />
    </>
  );
}