"use client";

import { AppBar } from "@/components/app-bar";
import { Settings, Shield, Bell, CircleHelp, LogOut, ChevronRight, Moon } from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/components/theme-provider";

const SettingItem = ({ icon: Icon, title, value }: any) => (
  <button className="w-full flex items-center justify-between p-4 bg-[var(--bg-elevated)] border-b border-[var(--border-color)] last:border-0 btn-tap">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-[var(--border-color)] flex items-center justify-center">
        <Icon size={16} className="text-[var(--fg-secondary)]" />
      </div>
      <span className="text-sm font-medium">{title}</span>
    </div>
    <div className="flex items-center gap-2">
      {value && <span className="text-sm text-[var(--muted)]">{value}</span>}
      <ChevronRight size={18} className="text-[var(--muted)]" />
    </div>
  </button>
);

export default function ProfilePage() {
  const { config, setConfig } = useTheme();

  return (
    <>
      <AppBar title="Profile" />
      <main className="flex flex-col gap-6 p-4">
        
        {/* Profile Card */}
        <section className="glass-card p-5 flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2" style={{ borderColor: "var(--primary)" }}>
            <Image 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop" 
              alt="Avatar"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-lg font-bold">Student Name</h2>
            <p className="text-sm text-[var(--muted)]">student@anonx.dev</p>
            <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[var(--primary-muted)] text-[10px] font-semibold" style={{ color: "var(--primary)" }}>
              PRO Member
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="flex gap-4">
          <div className="glass-card flex-1 p-4 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold">12</span>
            <span className="text-xs text-[var(--muted)] mt-1">Courses</span>
          </div>
          <div className="glass-card flex-1 p-4 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold">48</span>
            <span className="text-xs text-[var(--muted)] mt-1">Hours Watched</span>
          </div>
        </section>



        {/* Settings List */}
        <section>
          <h3 className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-2 ml-2">General Settings</h3>
          <div className="glass-card overflow-hidden">
            <SettingItem icon={Settings} title="Account Settings" />
            <SettingItem icon={Shield} title="Privacy & Security" />
            <SettingItem icon={Bell} title="Notifications" value="On" />
            <SettingItem icon={Moon} title="Appearance" value="Dark" />
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-2 ml-2">Support & About</h3>
          <div className="glass-card overflow-hidden">
            <SettingItem icon={CircleHelp} title="Help Center" />
            <button className="w-full flex items-center gap-3 p-4 bg-[var(--bg-elevated)] btn-tap">
              <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                <LogOut size={16} className="text-red-500" />
              </div>
              <span className="text-sm font-medium text-red-500">Log Out</span>
            </button>
          </div>
        </section>

      </main>
    </>
  );
}
