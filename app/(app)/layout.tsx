"use client";

import { BottomNav } from "@/components/bottom-nav";
import { PageTransition } from "@/components/page-transition";

export default function AppShellLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col w-full h-full overflow-hidden" style={{ background: "var(--bg-base)" }}>
      {/* Scrollable page content */}
      <div className="flex-1 overflow-hidden relative">
        <PageTransition>
          <div className="scroll-area no-scrollbar pb-24">
            {children}
          </div>
        </PageTransition>
      </div>

      {/* Fixed Bottom Nav */}
      <BottomNav />
    </div>
  );
}
