"use client";

import { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min";

import * as THREE from "three";
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import ContactFab from '@/components/ContactFab'
import NFTTransactionCard from '@/components/NFTTransactionCard'
import NFTCardSlider from '@/components/NFTCardSlider'
import CapabilitiesSection from "@/components/CapabilitiesSection";
import SmartContractOverview from "@/components/SmartContractOverview";
import About from "@/components/About";
export default function HomePage() {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      const isMobile = window.innerWidth < 768;

      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          mouseControls: !isMobile,
          touchControls: true,
          gyroControls: false,
          minHeight: 400,
          minWidth: 400,
          scale: 1.0,
          scaleMobile: 0.8,
          color: 0xa855f7,         // vibrant purple
          backgroundColor: 0x1e1b2c // dark purple/black base
        })
      );
    }

    const handleResize = () => {
      if (vantaEffect) vantaEffect.resize();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (vantaEffect) vantaEffect.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, [vantaEffect]);

  return (
    <>
      <Navbar />

      <main className="pt-[90px] relative min-h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10 w-full h-screen max-h-screen overflow-hidden" ref={vantaRef} />

        {/* Web3 gradient overlay */}
        <div className="absolute inset-0 -z-5 bg-gradient-to-br from-purple-700/20 via-purple-900/95 to-cyan-500/30" />

        {/* Dropdown */}
        <Hero />
        <About />
        <Services />
        <NFTCardSlider />
        <Projects />
        <NFTTransactionCard txHash="0x8c1d2a9f7e4b1c3d8f9a2b7e5f1d4c6a8b9e2f4a7c1d9b0e3a5f6c8d7e1" />
        <ContactFab />
        <CapabilitiesSection />
      </main>
    </>
  );
}