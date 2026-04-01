"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft, Bell } from "lucide-react";
import { motion } from "framer-motion";

interface AppBarProps {
  title?: string;
  showBack?: boolean;
  rightAction?: React.ReactNode;
  transparent?: boolean;
}

export function AppBar({
  title,
  showBack = false,
  rightAction,
  transparent = false,
}: AppBarProps) {
  const router = useRouter();

  return (
    <header
      className="sticky top-0 z-40 flex items-center justify-between px-4 h-14 pt-safe"
      style={{
        background: transparent ? "transparent" : "var(--bg-surface)",
        borderBottom: transparent ? "none" : "1px solid var(--border-color)",
        paddingTop: "max(env(safe-area-inset-top), 0px)",
      }}
    >
      {/* Left */}
      <div className="flex items-center gap-2">
        {showBack ? (
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={() => router.back()}
            className="flex items-center justify-center w-9 h-9 rounded-full"
            style={{ background: "var(--bg-elevated)" }}
            aria-label="Go back"
          >
            <ChevronLeft size={20} style={{ color: "var(--fg-primary)" }} />
          </motion.button>
        ) : (
          <div className="flex items-center gap-1.5">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold"
              style={{ background: "var(--primary)" }}
            >
              A
            </div>
            <span className="text-sm font-bold" style={{ color: "var(--fg-primary)" }}>
              AnonX
            </span>
          </div>
        )}
      </div>

      {/* Title */}
      {title && (
        <span
          className="absolute left-1/2 -translate-x-1/2 text-base font-semibold"
          style={{ color: "var(--fg-primary)" }}
        >
          {title}
        </span>
      )}

      {/* Right */}
      <div className="flex items-center">
        {rightAction ?? (
          <motion.button
            whileTap={{ scale: 0.85 }}
            className="relative flex items-center justify-center w-9 h-9 rounded-full"
            style={{ background: "var(--bg-elevated)" }}
            aria-label="Notifications"
          >
            <Bell size={18} style={{ color: "var(--fg-primary)" }} />
            <span
              className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full border-2"
              style={{
                background: "var(--primary)",
                borderColor: "var(--bg-surface)",
              }}
            />
          </motion.button>
        )}
      </div>
    </header>
  );
}
