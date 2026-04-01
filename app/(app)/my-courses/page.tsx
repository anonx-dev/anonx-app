"use client";

import { AppBar } from "@/components/app-bar";
import { PlayCircle, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const MY_COURSES = [
  {
    id: "c1",
    title: "Advanced Framer Motion",
    author: "Sarah Drasner",
    progress: 65,
    thumbnail: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80",
    status: "in-progress"
  },
  {
    id: "c2",
    title: "React Native Mastery",
    author: "John Smith",
    progress: 20,
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    status: "in-progress"
  },
  {
    id: "c3",
    title: "UI/UX For Mobile Apps",
    author: "Jane Doe",
    progress: 100,
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    status: "completed"
  }
];

export default function MyCoursesPage() {
  const inProgress = MY_COURSES.filter(c => c.status === "in-progress");
  const completed = MY_COURSES.filter(c => c.status === "completed");

  return (
    <>
      <AppBar title="My Courses" />
      <main className="flex flex-col gap-8 p-4">
        
        {/* In Progress */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <PlayCircle className="text-[var(--primary)]" size={20} />
            <h2 className="text-lg font-semibold">In Progress</h2>
          </div>
          
          <div className="flex flex-col gap-4">
            {inProgress.map((course) => (
              <Link href={`/course/${course.id}`} key={course.id} className="glass-card overflow-hidden btn-tap">
                <div className="flex gap-4 p-3">
                  <div className="relative w-28 h-20 rounded-lg overflow-hidden shrink-0">
                    <Image 
                      src={course.thumbnail} 
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col flex-1 py-1">
                    <h3 className="font-semibold text-sm line-clamp-2">{course.title}</h3>
                    <p className="text-xs text-[var(--muted)] mt-1">{course.author}</p>
                    <div className="mt-auto">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] text-[var(--muted)]">Progress</span>
                        <span className="text-[10px] font-medium text-[var(--primary)]">{course.progress}%</span>
                      </div>
                      <div className="progress-bar w-full h-1.5">
                        <div className="progress-bar-fill" style={{ width: `${course.progress}%` }} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Completed */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Award className="text-[var(--success)]" size={20} />
            <h2 className="text-lg font-semibold">Completed</h2>
          </div>
          
          <div className="flex flex-col gap-4">
            {completed.map((course) => (
              <div key={course.id} className="glass-card flex gap-4 p-3 opacity-75">
                <div className="relative w-28 h-20 rounded-lg overflow-hidden shrink-0">
                  <Image 
                    src={course.thumbnail} 
                    alt={course.title}
                    fill
                    className="object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Award size={24} className="text-white fill-[var(--success)]" />
                  </div>
                </div>
                <div className="flex flex-col justify-center flex-1 py-1">
                  <h3 className="font-semibold text-sm line-clamp-2">{course.title}</h3>
                  <p className="text-xs text-[var(--muted)] mt-1">{course.author}</p>
                  <button className="text-xs font-semibold text-[var(--primary)] mt-auto self-start">
                    View Certificate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </>
  );
}
