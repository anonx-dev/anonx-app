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
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around bg-[var(--bg-surface)] border-t border-[var(--border-color)] pb-safe"
      style={{ paddingBottom: "max(env(safe-area-inset-bottom), 8px)" }}
    >
      {navItems.map(({ href, label, icon: Icon }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className="relative flex flex-col items-center gap-1 px-5 py-2 min-w-[60px]"
          >
            {isActive && (
              <motion.div
                layoutId="bottom-nav-indicator"
                className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-[var(--primary)]"
                transition={{ type: "spring", stiffness: 500, damping: 40 }}
              />
            )}
            <Icon
              size={22}
              className="transition-colors"
              style={{ color: isActive ? "var(--primary)" : "var(--muted)" }}
            />
            <span
              className="text-[10px] font-medium tracking-wide transition-colors"
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
