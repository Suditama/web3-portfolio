"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type HealthStatus = {
  apiOnline: boolean;
  latency: number;
  errorRate: number;
  lastSync: string;
};

export default function SystemHealthMonitor() {
  const [status, setStatus] = useState<HealthStatus>({
    apiOnline: true,
    latency: 120,
    errorRate: 0.02,
    lastSync: "just now",
  });

  useEffect(() => {
    const fetchHealth = () => {
      // SIMULASI data real (nanti bisa ganti API)
      const latency = Math.floor(80 + Math.random() * 120);
      const errorRate = +(Math.random() * 0.05).toFixed(2);

      setStatus({
        apiOnline: true,
        latency,
        errorRate,
        lastSync: "just now",
      });
    };

    // initial load
    fetchHealth();

    // auto refresh tiap 10 detik
    const interval = setInterval(fetchHealth, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative z-10 px-6 py-20 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="rounded-3xl bg-gradient-to-br from-purple-700/40 via-purple-900/60 to-purple-800/40
                   border border-purple-500/20 backdrop-blur-xl shadow-2xl p-8"
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            System Health Monitor
          </h2>

          <span className="text-xs text-purple-300">
            Auto refresh 
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card label="API Status">
            <StatusBadge ok={status.apiOnline} />
          </Card>

          <Card label="Server Latency">
            <LatencyValue value={status.latency} />
          </Card>

          <Card label="Error Rate">
            <span className="text-white text-xl font-semibold">
              {status.errorRate}%
            </span>
          </Card>

          <Card label="Last Sync">
            <span className="text-white text-xl font-semibold">
              {status.lastSync}
            </span>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}

/* ================= UI HELPERS ================= */

function Card({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-purple-950/50 p-6 border border-purple-500/10">
      <p className="text-sm text-purple-300 mb-2">{label}</p>
      {children}
    </div>
  );
}

function StatusBadge({ ok }: { ok: boolean }) {
  return (
    <span
      className={`inline-flex px-4 py-1.5 rounded-full text-sm font-medium
        ${
          ok
            ? "bg-emerald-500/20 text-emerald-300"
            : "bg-red-500/20 text-red-300"
        }`}
    >
      {ok ? "Online" : "Offline"}
    </span>
  );
}

function LatencyValue({ value }: { value: number }) {
  let color =
    value < 150
      ? "text-emerald-300"
      : value < 10
      ? "text-yellow-300"
      : "text-red-300";

  return (
    <span className={`text-xl font-semibold ${color}`}>
      {value} ms
    </span>
  );
}
