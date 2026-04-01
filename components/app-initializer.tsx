"use client";

import { useEffect, useState } from "react";
import { StatusBar, Style } from "@capacitor/status-bar";
import { SplashScreen } from "@capacitor/splash-screen";
import { Capacitor } from "@capacitor/core";
import { APP_CONFIG } from "@/app.config";
import { useRouter, usePathname } from "next/navigation";

export function AppInitializer() {
  const router = useRouter();
  const pathname = usePathname();
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initAppNative = async () => {
      if (Capacitor.isNativePlatform()) {
        try {
          await StatusBar.setStyle({ 
            style: APP_CONFIG.theme.statusBarStyle === "DARK" ? Style.Dark : Style.Light 
          });
          await StatusBar.setBackgroundColor({ 
            color: APP_CONFIG.theme.statusBarBackground 
          });
        } catch (e) {
          console.warn("StatusBar not available", e);
        }

        // Hide splash screen after a small delay to allow initial route paint
        setTimeout(async () => {
          try {
            await SplashScreen.hide();
          } catch (e) {
            console.warn("SplashScreen not available", e);
          }
        }, 100);
      }
      setInit(true);
    };

    initAppNative();
  }, []);

  useEffect(() => {
    // Simple client-side Auth Guard
    if (init) {
      const isLoggedIn = localStorage.getItem("anonx_auth_token") === "true";
      
      // If not logged in and not on login page, redirect to login
      if (!isLoggedIn && pathname !== "/login") {
        router.replace("/login");
      } 
      // If logged in and on login page, redirect to app home
      else if (isLoggedIn && pathname === "/login") {
        router.replace("/");
      }
    }
  }, [init, pathname, router]);

  return null;
}
