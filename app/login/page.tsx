"use client";

import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { APP_CONFIG } from "@/app.config";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // Toggle between login/signup

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Dummy logic: Delay to show loading animation
    setTimeout(() => {
      localStorage.setItem("anonx_auth_token", "true");
      router.replace("/");
    }, 1200);
  };

  return (
    <div className="flex flex-col min-h-full bg-white relative">
      {/* Decorative Blob */}
      <div 
        className="absolute top-0 right-0 w-64 h-64 bg-opacity-20 rounded-bl-[100px] -z-10"
        style={{ backgroundColor: "var(--primary)" }}
      />
      <div 
        className="absolute top-20 -left-10 w-40 h-40 bg-opacity-10 rounded-full blur-3xl -z-10"
        style={{ backgroundColor: "var(--primary)" }}
      />

      <div className="flex-1 px-8 pt-safe pb-8 flex flex-col justify-center">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 mt-12"
        >
          <div className="w-12 h-12 rounded-2xl mb-6 flex items-center justify-center text-white"
               style={{ background: "linear-gradient(135deg, var(--primary), #a78bfa)" }}>
            <Lock size={24} />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-2">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            {isLogin 
              ? `Sign in to continue to ${APP_CONFIG.appName}` 
              : `Join ${APP_CONFIG.appName} to start learning`}
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {!isLogin && (
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <User size={20} />
                </div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:border-transparent transition-all outline-none"
                  style={{ "--tw-ring-color": "var(--primary-muted)" } as React.CSSProperties}
                  required
                />
              </div>
            )}
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <Mail size={20} />
              </div>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:border-transparent transition-all outline-none"
                style={{ "--tw-ring-color": "var(--primary-muted)" } as React.CSSProperties}
                required
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <Lock size={20} />
              </div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:border-transparent transition-all outline-none"
                style={{ "--tw-ring-color": "var(--primary-muted)" } as React.CSSProperties}
                required
              />
            </div>

            {isLogin && (
              <div className="flex justify-end">
                <button type="button" className="text-xs font-semibold" style={{ color: "var(--primary)" }}>
                  Forgot password?
                </button>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="mt-4 flex items-center justify-center gap-2 w-full text-white rounded-2xl py-4 text-sm font-semibold transition-all shadow-lg active:scale-[0.98] disabled:opacity-70"
              style={{
                background: "linear-gradient(135deg, var(--primary), #a78bfa)",
                boxShadow: "0 10px 25px -5px var(--primary-muted)"
              }}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  {isLogin ? "Sign In" : "Sign Up"}
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-auto pt-10 text-center"
        >
          <p className="text-sm font-medium text-gray-500 pb-safe">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button 
              type="button" 
              onClick={() => setIsLogin(!isLogin)}
              className="font-bold underline underline-offset-2"
              style={{ color: "var(--primary)" }}
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
