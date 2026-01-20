"use client";

export default function SketchfabNFT() {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden px-4">
      {/* BACK GLOW */}
      <div
        className="absolute w-[520px] h-[520px] max-w-[90vw] max-h-[90vw]
        rounded-full bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-purple-600
        blur-[120px] opacity-30"
      />

      {/* CARD */}
      <div
        className="
          relative
          w-[90vw] max-w-[380px]
          aspect-[9/16]
          perspective-[1200px]
        "
      >
        {/* FRAME */}
        <div
          className="
            absolute inset-0 rounded-3xl
            bg-gradient-to-br from-zinc-700 via-zinc-900 to-black
            shadow-[0_40px_120px_rgba(0,0,0,0.9)]
            transform-gpu transition-transform duration-500
            hover:rotateY-[-8deg] hover:rotateX-[4deg]
          "
        />

        {/* INNER */}
        <div className="absolute inset-[10px] rounded-2xl bg-black overflow-hidden">
          <iframe
            title="MinimaLand 3D NFT Mint Pass"
            src="https://sketchfab.com/models/67b561e6eefd497bb583682334e16682/embed?autostart=1&ui_theme=dark&ui_controls=0&ui_infos=0&ui_help=0&ui_settings=0&ui_watermark=0"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        {/* GLOW BORDER */}
        <div
          className="
            pointer-events-none absolute -inset-1 rounded-3xl
            bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-600
            opacity-40 blur-xl
          "
        />
      </div>

      {/* TEXT */}
      <div className="absolute bottom-16 sm:bottom-24 text-center px-6">
        <h2 className="text-white text-2xl tracking-widest font-semibold">
          MINIMALAND
        </h2>
        <p className="text-zinc-400 text-sm mt-2 max-w-md mx-auto">
          Augmented 3D NFT Mint Pass powered by WebGL
        </p>
      </div>
    </section>
  );
}
