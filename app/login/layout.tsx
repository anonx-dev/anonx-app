"use client";

import { PageTransition } from "@/components/page-transition";

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col w-full h-full overflow-hidden bg-white">
      <div className="flex-1 overflow-hidden relative flex flex-col w-full">
        <PageTransition>
          <div className="scroll-area flex-1 no-scrollbar w-full h-full">
            {children}
          </div>
        </PageTransition>
      </div>
    </div>
  );
}
