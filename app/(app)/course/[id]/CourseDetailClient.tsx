"use client";

import { useState } from "react";
import { AppBar } from "@/components/app-bar";
import { PlayCircle, CheckCircle2, ChevronDown, Clock, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Dummy Data
const COURSE = {
  title: "Advanced Framer Motion",
  author: "Sarah Drasner",
  progress: 65,
  thumbnail: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80",
  modules: [
    {
      id: "m1",
      title: "Module 1: Getting Started",
      duration: "45m",
      lessons: [
        { id: "l1", title: "Introduction to Animation", duration: "5m", completed: true },
        { id: "l2", title: "The motion component", duration: "12m", completed: true },
        { id: "l3", title: "AnimatePresence", duration: "28m", completed: true },
      ],
    },
    {
      id: "m2",
      title: "Module 2: Layout Animations",
      duration: "1h 15m",
      lessons: [
        { id: "l4", title: "The layout prop", duration: "18m", completed: false },
        { id: "l5", title: "Shared Layout Animations", duration: "25m", completed: false },
        { id: "l6", title: "LayoutGroup", duration: "32m", completed: false },
      ],
    },
    {
      id: "m3",
      title: "Module 3: Advanced Gestures",
      duration: "2h",
      lessons: [
        { id: "l7", title: "Drag & drop", duration: "45m", completed: false },
        { id: "l8", title: "Pan & swipe", duration: "30m", completed: false },
        { id: "l9", title: "Hover & Tap", duration: "45m", completed: false },
      ],
    },
  ],
};

const ModuleAccordion = ({ module, index }: { module: any; index: number }) => {
  const [isOpen, setIsOpen] = useState(index === 1); // Default second open for demo

  return (
    <div className="mb-3 glass-card overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-[var(--bg-elevated)] btn-tap"
      >
        <div className="text-left">
          <h3 className="font-semibold text-sm">{module.title}</h3>
          <p className="text-xs text-[var(--muted)] mt-1 flex items-center gap-1">
            <Clock size={12} /> {module.duration} • {module.lessons.length} lessons
          </p>
        </div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={20} className="text-[var(--muted)]" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="bg-[var(--bg-card)] border-t border-[var(--border-color)]">
              {module.lessons.map((lesson: any, i: number) => (
                <div
                  key={lesson.id}
                  className={`flex items-center justify-between p-4 btn-tap ${
                    i !== module.lessons.length - 1 ? "border-b border-[var(--border-color)]/50" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {lesson.completed ? (
                      <CheckCircle2 size={20} className="text-[var(--success)]" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border border-[var(--muted)] flex items-center justify-center">
                        <PlayCircle size={10} className="text-[var(--muted)]" />
                      </div>
                    )}
                    <div>
                      <h4 className={`text-sm ${lesson.completed ? "text-[var(--muted)]" : "font-medium"}`}>
                        {lesson.title}
                      </h4>
                      <p className="text-[10px] text-[var(--muted)] mt-0.5">{lesson.duration}</p>
                    </div>
                  </div>
                  
                  {/* Download icon for offline support (future) */}
                  <button className="p-2 rounded-full hover:bg-[var(--bg-elevated)] transition-colors">
                    <Download size={16} className="text-[var(--muted)]" />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function CourseDetailClient() {
  return (
    <>
      <AppBar showBack transparent rightAction={<div />} />

      {/* Sticky Video Player */}
      <div className="sticky top-0 z-30 w-full bg-black aspect-video -mt-14 relative group">
        <Image
          src={COURSE.thumbnail}
          alt="Video Thumbnail"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center btn-tap">
            <PlayCircle size={36} className="text-white fill-white ml-1" />
          </div>
        </div>
        {/* Fake Progress */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30">
          <div className="h-full bg-[var(--primary)] w-1/3" />
        </div>
      </div>

      <main className="p-4 flex flex-col gap-6">
        {/* Course Info */}
        <section>
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-xl font-bold tracking-tight">{COURSE.title}</h1>
          </div>
          <p className="text-sm text-[var(--muted)]">By {COURSE.author}</p>
          
          <div className="mt-4 flex items-center justify-between text-sm bg-[var(--bg-elevated)] p-3 rounded-lg border border-[var(--border-color)]">
            <span className="font-medium">Your Progress</span>
            <div className="flex items-center gap-3">
              <div className="w-32 progress-bar">
                <div className="progress-bar-fill" style={{ width: `${COURSE.progress}%` }} />
              </div>
              <span className="font-semibold text-[var(--primary)]">{COURSE.progress}%</span>
            </div>
          </div>
        </section>

        {/* Syllabus */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Syllabus</h2>
          <div className="flex flex-col">
            {COURSE.modules.map((mod, i) => (
              <ModuleAccordion key={mod.id} module={mod} index={i} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
