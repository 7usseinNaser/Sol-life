'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type MotionMode = 'ultra' | 'lite';

interface MotionContextType {
  mode: MotionMode;
  isLite: boolean;
  toggleMode: () => void;
  setMode: (mode: MotionMode) => void;
  networkNotification: string | null;
  dismissNotification: () => void;
}

const MotionContext = createContext<MotionContextType | undefined>(undefined);

export function MotionProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<MotionMode>('ultra');
  const [networkNotification, setNetworkNotification] = useState<string | null>(null);

  useEffect(() => {
    // 1. Check user preference stored in localStorage
    const saved = localStorage.getItem('soul_life_motion_mode') as MotionMode | null;
    if (saved === 'ultra' || saved === 'lite') {
      setModeState(saved);
      return;
    }

    // 2. Check system reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setModeState('lite');
      return;
    }

    // 3. Check Network Connection Information (saveData or slow 2G/3G)
    const nav = navigator as unknown as {
      connection?: {
        saveData?: boolean;
        effectiveType?: string;
      };
    };

    if (nav.connection?.saveData || nav.connection?.effectiveType === '2g' || nav.connection?.effectiveType === 'slow-2g') {
      setModeState('lite');
      setNetworkNotification('تم تفعيل وضع السرعة وتوفير البيانات تلقائياً نظراً لسرعة الاتصال.');
      return;
    }

    // 4. Smart Watchdog Timeout (3.5s)
    // If the window load event or heavy assets take > 3.5s, offer/switch to lite mode
    const timer = setTimeout(() => {
      if (document.readyState !== 'complete') {
        setModeState('lite');
        setNetworkNotification('تم تحويل العرض إلى الوضع السريع (Lite Mode) لضمان التصفح السلس.');
      }
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const setMode = (newMode: MotionMode) => {
    setModeState(newMode);
    localStorage.setItem('soul_life_motion_mode', newMode);
  };

  const toggleMode = () => {
    const next = mode === 'ultra' ? 'lite' : 'ultra';
    setMode(next);
  };

  const dismissNotification = () => setNetworkNotification(null);

  return (
    <MotionContext.Provider
      value={{
        mode,
        isLite: mode === 'lite',
        toggleMode,
        setMode,
        networkNotification,
        dismissNotification,
      }}
    >
      {children}
    </MotionContext.Provider>
  );
}

export function useMotion() {
  const context = useContext(MotionContext);
  if (!context) {
    return {
      mode: 'ultra' as MotionMode,
      isLite: false,
      toggleMode: () => {},
      setMode: () => {},
      networkNotification: null,
      dismissNotification: () => {},
    };
  }
  return context;
}
