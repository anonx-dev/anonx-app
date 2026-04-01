"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, BookOpen, Search, User } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/explore", label: "Explore", icon: Search },
  { href: "/my-courses", label: "My Courses", icon: BookOpen },
  { href: "/profile", label: "Profile", icon: User },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 flex items-start justify-around bg-white/90 backdrop-blur-lg border-t border-[var(--border-color)] pt-2"
      style={{ paddingBottom: "max(env(safe-area-inset-bottom), 16px)" }}
    >
      {navItems.map(({ href, label, icon: Icon }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className="relative flex flex-col items-center justify-center gap-1.5 px-5 py-2.5 min-w-[60px] active:scale-95 transition-transform"
          >
            <Icon
              size={24}
              className="transition-colors"
              strokeWidth={isActive ? 2.5 : 2}
              style={{ 
                color: isActive ? "var(--primary)" : "var(--muted)",
                fill: isActive ? "var(--primary)" : "none"
              }}
            />
            <span
              className="text-[10px] font-semibold tracking-wide transition-colors"
              style={{ color: isActive ? "var(--primary)" : "var(--muted)" }}
            >
              {label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
