"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft, Bell } from "lucide-react";
import { motion } from "framer-motion";

import { APP_CONFIG } from "@/app.config";

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
      {/* Left / Title area */}
      <div className="flex items-center gap-3">
        {showBack && (
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={() => router.back()}
            className="flex items-center justify-center w-9 h-9 rounded-full -ml-1.5"
            style={{ background: "var(--bg-elevated)" }}
            aria-label="Go back"
          >
            <ChevronLeft size={22} style={{ color: "var(--fg-primary)" }} />
          </motion.button>
        )}
        <h1 className="text-[22px] font-bold tracking-tight leading-none" style={{ color: "var(--fg-primary)" }}>
          {title || APP_CONFIG.appName}
        </h1>
      </div>

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
