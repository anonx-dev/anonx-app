"use client";

import { AppBar } from "@/components/app-bar";
import { Search, Compass, TrendingUp, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const CATEGORIES = ["Web Dev", "Mobile", "Business", "Design", "Marketing"];

const TRENDING = [
  {
    id: "t1",
    title: "Mastering Next.js 15",
    author: "Alice Johnson",
    rating: 4.9,
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  },
  {
    id: "t2",
    title: "The Complete UX/UI Bootcamp",
    author: "Bob Smith",
    rating: 4.7,
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
  },
];

export default function ExplorePage() {
  return (
    <>
      <AppBar title="Explore" />
      <main className="flex flex-col gap-6 p-4">
        
        {/* Search */}
        <section>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]" size={20} />
            <input 
              type="text" 
              placeholder="Search for courses, authors..." 
              className="w-full h-12 bg-[var(--bg-elevated)] border border-[var(--border-color)] rounded-2xl pl-12 pr-4 text-sm focus:outline-none focus:border-[var(--primary)] transition-colors"
            />
          </div>
        </section>

        {/* Categories */}
        <section>
          <h2 className="text-lg font-semibold mb-3">Categories</h2>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 snap-x">
            {CATEGORIES.map((cat, i) => (
              <motion.button 
                whileTap={{ scale: 0.95 }}
                key={i} 
                className="snap-start shrink-0 px-5 py-2.5 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-color)] text-sm font-medium whitespace-nowrap"
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </section>

        {/* Trending */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="text-[var(--primary)]" size={20} />
            <h2 className="text-lg font-semibold">Trending Now</h2>
          </div>
          
          <div className="flex flex-col gap-4">
            {TRENDING.map((course) => (
              <Link href={`/course/${course.id}`} key={course.id} className="glass-card flex gap-4 p-3 btn-tap">
                <div className="relative w-28 h-20 rounded-lg overflow-hidden shrink-0">
                  <Image 
                    src={course.thumbnail} 
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center flex-1 py-1">
                  <h3 className="font-semibold text-sm line-clamp-2">{course.title}</h3>
                  <p className="text-xs text-[var(--muted)] mt-1">{course.author}</p>
                  <div className="flex items-center gap-1 mt-auto">
                    <Star size={12} className="text-[var(--warning)] fill-[var(--warning)]" />
                    <span className="text-xs font-medium text-[var(--warning)]">{course.rating}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
