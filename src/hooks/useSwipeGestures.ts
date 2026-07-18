import { useState, useEffect, useRef, useCallback } from 'react';

interface UseSwipeGesturesProps {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  threshold?: number;
  restrictToVertical?: boolean;
  restrictToHorizontal?: boolean;
}

interface TouchPoint {
  x: number;
  y: number;
  time: number;
}

export const useSwipeGestures = ({
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  threshold = 50,
  restrictToVertical = false,
  restrictToHorizontal = false
}: UseSwipeGesturesProps) => {
  const [isTracking, setIsTracking] = useState(false);
  const touchStart = useRef<TouchPoint | null>(null);
  const touchEnd = useRef<TouchPoint | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    const touch = e.touches[0];
    touchStart.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now()
    };
    setIsTracking(true);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isTracking) return;
    
    const touch = e.touches[0];
    touchEnd.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now()
    };
  }, [isTracking]);

  const handleTouchEnd = useCallback(() => {
    if (!isTracking || !touchStart.current || !touchEnd.current) return;

    const deltaX = touchEnd.current.x - touchStart.current.x;
    const deltaY = touchEnd.current.y - touchStart.current.y;
    const deltaTime = touchEnd.current.time - touchStart.current.time;

    // Require quick swipe (under 300ms) and minimum distance
    if (deltaTime > 300) {
      setIsTracking(false);
      return;
    }

    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);

    // Horizontal swipe
    if (!restrictToVertical && absDeltaX > absDeltaY && absDeltaX > threshold) {
      if (deltaX > 0) {
        onSwipeRight?.();
      } else {
        onSwipeLeft?.();
      }
    }
    
    // Vertical swipe
    else if (!restrictToHorizontal && absDeltaY > absDeltaX && absDeltaY > threshold) {
      if (deltaY > 0) {
        onSwipeDown?.();
      } else {
        onSwipeUp?.();
      }
    }

    // Reset
    touchStart.current = null;
    touchEnd.current = null;
    setIsTracking(false);
  }, [isTracking, onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, threshold, restrictToVertical, restrictToHorizontal]);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    // Add touch event listeners
    element.addEventListener('touchstart', handleTouchStart, { passive: true });
    element.addEventListener('touchmove', handleTouchMove, { passive: true });
    element.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd]);



  return {
    containerRef,
    isTracking
  };
};