"use client";

type Props = {
  txHash: string;
};

export default function NFTTransactionCard({ txHash }: Props) {
  return (
    <div className="relative max-w-xl mx-auto rounded-2xl p-[1px] bg-gradient-to-br from-purple-500 via-fuchsia-500 to-indigo-500">
      <div className="rounded-2xl bg-[#0b0b14] backdrop-blur-xl p-6">
        <h3 className="text-lg font-semibold text-white">
          Transaction Confirmed
        </h3>

        <p className="text-sm text-zinc-400 mt-1">
          Your NFT mint transaction has been successfully processed.
        </p>

        {/* TX HASH */}
        <div className="mt-5">
          <span className="text-xs uppercase tracking-widest text-zinc-500">
            Transaction Hash
          </span>

          <div className="mt-2 px-4 py-3 rounded-xl bg-black/40 border border-purple-500/30">
            <p className="text-sm font-mono break-all text-purple-400 drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]">
              {txHash}
            </p>
          </div>
        </div>

        {/* ACTION */}
        <div className="mt-6 flex gap-3">
          <a
            href={`https://etherscan.io/tx/${txHash}`}
            target="_blank"
            className="flex-1 text-center rounded-xl px-4 py-2 text-sm font-medium
              bg-gradient-to-r from-purple-500 to-fuchsia-500
              text-white hover:opacity-90 transition"
          >
            View on Explorer
          </a>

          <button
            className="flex-1 rounded-xl px-4 py-2 text-sm font-medium
              border border-purple-500/40 text-purple-400
              hover:bg-purple-500/10 transition"
          >
            Mint Another
          </button>
        </div>
      </div>
    </div>
  );
}
