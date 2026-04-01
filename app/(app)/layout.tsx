"use client";

import { BottomNav } from "@/components/bottom-nav";
import { PageTransition } from "@/components/page-transition";

export default function AppShellLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col w-full h-full overflow-hidden" style={{ background: "var(--bg-base)" }}>
      {/* Scrollable page content */}
      <div className="flex-1 overflow-hidden relative flex flex-col w-full">
        <PageTransition>
          <div className="scroll-area flex-1 no-scrollbar w-full">
            <div className="flex flex-col min-h-full">
              {children}
            </div>
            {/* Global Bottom Spacer for Tab Bar Clearance */}
            <div className="h-28 shrink-0 w-full" />
          </div>
        </PageTransition>
      </div>

      {/* Fixed Bottom Nav */}
      <BottomNav />
    </div>
  );
}
