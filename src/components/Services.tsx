const items = [
  {
    title: 'Smart Contracts',
    desc: 'Secure, optimized Solidity smart contracts with clean architecture.'
  },
  {
    title: 'Web3 Frontend',
    desc: 'Modern Web3 UI using React & Next.js with wallet integration.'
  },
  {
    title: 'DApp Integration',
    desc: 'Wallets, RPCs, contracts, and chains into production-ready dApps.'
  }
];

export default function Services() {
  return (
    <section className="relative px-6 md:px-10 py-24">
      <div className="grid md:grid-cols-3 gap-14 relative">

        {items.map((item, i) => (
          <div key={item.title} className="relative group">

            {/* === CARD === */}
            <div
              className="
                relative z-10 p-8 rounded-2xl
                bg-white/70 dark:bg-black/40
                backdrop-blur-xl
                border border-black/10 dark:border-white/10
                transition-all duration-500
                hover:border-purple-500/50
                hover:shadow-[0_0_60px_rgba(168,85,247,0.35)]
              "
            >
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-neutral-600 dark:text-gray-400 leading-relaxed">
                {item.desc}
              </p>

              {/* scan light */}
              <span
                className="
                  pointer-events-none absolute inset-0 rounded-2xl
                  bg-gradient-to-r from-transparent via-purple-500/10 to-transparent
                  opacity-0 group-hover:opacity-100
                  animate-[scan_3s_linear_infinite]
                "
              />
            </div>

            {/* === FLOW (MOBILE + DESKTOP) === */}
            {i !== items.length - 1 && (
              <>
                {/* MOBILE FLOW (vertical) */}
                <div className="flex md:hidden flex-col items-center mt-6">
                  <span className="w-px h-10 bg-gradient-to-b from-purple-500/50 to-transparent animate-pulse" />

                  <svg
                    className="w-4 h-4 text-purple-400 animate-bounce mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>

                  <span
                    className="
                      absolute mt-2 w-2 h-2 rounded-full
                      bg-purple-400
                      shadow-[0_0_14px_rgba(168,85,247,0.9)]
                      animate-[flow_2.2s_linear_infinite]
                    "
                  />
                </div>

                {/* DESKTOP FLOW */}
                <div className="hidden md:flex absolute left-1/2 -bottom-12 -translate-x-1/2 flex-col items-center">
                  <span className="w-px h-12 bg-gradient-to-b from-purple-500/50 to-transparent animate-pulse" />

                  <svg
                    className="w-4 h-4 text-purple-400 animate-bounce"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>

                  <span
                    className="
                      absolute top-0 w-2 h-2 rounded-full
                      bg-purple-400
                      shadow-[0_0_14px_rgba(168,85,247,0.9)]
                      animate-[flow_2.5s_linear_infinite]
                    "
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* background grid */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[linear-gradient(to_right,rgba(168,85,247,0.05)_1px,transparent_1px),
              linear-gradient(to_bottom,rgba(168,85,247,0.05)_1px,transparent_1px)]
          bg-[size:40px_40px]
          opacity-40
        "
      />
    </section>
  );
}
