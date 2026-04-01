"use client";

import { AppBar } from "@/components/app-bar";
import { PlayCircle, Clock, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Dummy Data
const CONTINUE_WATCHING = {
  id: "c1",
  title: "Advanced Framer Motion",
  lesson: "Part 4: Shared Layout Animations",
  progress: 65,
  thumbnail: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80",
};

const RECOMMENDED_COURSES = [
  {
    id: "r1",
    title: "UI/UX For Mobile Apps",
    author: "Jane Doe",
    rating: 4.8,
    duration: "4h 30m",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
  },
  {
    id: "r2",
    title: "React Native Mastery",
    author: "John Smith",
    rating: 4.9,
    duration: "12h 15m",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
];

export default function Home() {
  return (
    <>
      <AppBar title="Dashboard" />
      
      <main className="flex flex-col gap-6 p-4">
        {/* Welcome Section */}
        <section>
          <h1 className="text-2xl font-bold tracking-tight">Good morning, Student!</h1>
          <p className="text-sm text-[var(--muted)] mt-1">Ready to continue learning?</p>
        </section>

        {/* Continue Watching */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold">Continue Watching</h2>
          </div>
          
          <Link href="/course/c1" className="glass-card overflow-hidden block btn-tap">
            <div className="relative w-full h-40">
              <Image 
                src={CONTINUE_WATCHING.thumbnail} 
                alt={CONTINUE_WATCHING.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <PlayCircle size={28} className="text-white fill-white ml-1" />
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-[var(--bg-elevated)]">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-sm">{CONTINUE_WATCHING.title}</h3>
                  <p className="text-xs text-[var(--muted)] mt-0.5">{CONTINUE_WATCHING.lesson}</p>
                </div>
                <span className="text-xs font-medium text-[var(--primary)]">{CONTINUE_WATCHING.progress}%</span>
              </div>
              <div className="progress-bar mt-3">
                <div 
                  className="progress-bar-fill" 
                  style={{ width: `${CONTINUE_WATCHING.progress}%` }}
                />
              </div>
            </div>
          </Link>
        </section>

        {/* Recommended Courses */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold">Recommended for you</h2>
            <button className="text-xs font-semibold text-[var(--primary)]">See all</button>
          </div>
          
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 snap-x">
            {RECOMMENDED_COURSES.map((course) => (
              <div key={course.id} className="snap-start shrink-0 w-[240px] flex flex-col gap-2 btn-tap">
                <div className="relative w-full h-[135px] rounded-xl overflow-hidden bg-[var(--bg-elevated)]">
                  <Image 
                    src={course.thumbnail} 
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/70 backdrop-blur text-[10px] font-medium flex items-center gap-1">
                    <Clock size={10} /> {course.duration}
                  </div>
                </div>
                <div className="px-1">
                  <h3 className="font-semibold text-sm line-clamp-2 leading-snug">{course.title}</h3>
                  <p className="text-xs text-[var(--muted)] mt-1">{course.author}</p>
                  <div className="flex items-center gap-1 mt-1.5">
                    <Star size={12} className="text-[var(--warning)] fill-[var(--warning)]" />
                    <span className="text-xs font-medium text-[var(--warning)]">{course.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
