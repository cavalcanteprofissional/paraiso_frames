import { useState, useEffect, useRef, useCallback } from 'react';

interface UseAutoRotateProps {
  enabled: boolean;
  currentIndex: number;
  totalVideos: number;
  interval?: number;
  onNext?: () => void;
  onProgress?: (progress: number) => void;
}

export const useAutoRotate = ({
  enabled,
  currentIndex,
  totalVideos,
  interval = 8000,
  onNext,
  onProgress
}: UseAutoRotateProps) => {
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const startRotation = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setProgress(0);
    setIsPaused(false);

    intervalRef.current = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (100 / (interval / 100));
        if (newProgress >= 100) {
          if (onNext) {
            onNext();
          }
          return 0;
        }
        onProgress?.(newProgress);
        return newProgress;
      });
    }, 100);
  }, [interval, onNext, onProgress]);

  const pauseRotation = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsPaused(true);
  }, []);

  const toggleRotation = useCallback(() => {
    if (isPaused) {
      startRotation();
    } else {
      pauseRotation();
    }
  }, [isPaused, startRotation, pauseRotation]);

  const resetRotation = useCallback(() => {
    pauseRotation();
    setProgress(0);
  }, [pauseRotation]);

  // Start/stop rotation based on enabled state
  useEffect(() => {
    const startRotation = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      setProgress(0);
      setIsPaused(false);

      intervalRef.current = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + (100 / (interval / 100));
          if (newProgress >= 100) {
            if (onNext) {
              onNext();
            }
            return 0;
          }
          onProgress?.(newProgress);
          return newProgress;
        });
      }, 100);
    };

    const pauseRotation = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setIsPaused(true);
    };

    if (enabled && totalVideos > 1) {
      startRotation();
    } else {
      pauseRotation();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [enabled, totalVideos, interval, onNext, onProgress]);

  // Reset progress when video changes
  useEffect(() => {
    setProgress(0);
  }, [currentIndex]);

  return {
    progress,
    isPaused,
    toggleRotation,
    pauseRotation,
    resetRotation,
    isRotating: enabled && !isPaused && totalVideos > 1
  };
};