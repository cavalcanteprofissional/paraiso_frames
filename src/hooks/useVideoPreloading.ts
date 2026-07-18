import { useState, useEffect } from 'react';

interface UseVideoPreloadingProps {
  currentIndex: number;
  totalVideos: number;
  preloadCount?: number;
}

export const useVideoPreloading = ({ 
  currentIndex, 
  totalVideos, 
  preloadCount = 2 
}: UseVideoPreloadingProps) => {
  const [preloadedVideos, setPreloadedVideos] = useState<Set<number>>(new Set());
  const [isLoading, setIsLoading] = useState(false);





  // Preload videos when index changes
  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      const videosToPreload: number[] = [];
      
      // Preload next videos
      for (let i = 1; i <= preloadCount; i++) {
        const nextIndex = (currentIndex + i) % totalVideos;
        if (!preloadedVideos.has(nextIndex)) {
          videosToPreload.push(nextIndex);
        }
      }
      
      // Preload previous videos
      for (let i = 1; i <= preloadCount; i++) {
        const prevIndex = (currentIndex - i + totalVideos) % totalVideos;
        if (!preloadedVideos.has(prevIndex)) {
          videosToPreload.push(prevIndex);
        }
      }
      
      try {
        // In a real implementation, you would preload actual video URLs
        // For now, we'll simulate preloading with a delay
        await new Promise(resolve => setTimeout(resolve, 500));
        setPreloadedVideos(prev => new Set([...prev, ...videosToPreload]));
      } catch (error) {
        console.warn('Preloading failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    load();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, totalVideos, preloadCount]);

  // Cleanup old preloaded videos
  useEffect(() => {
    const maxPreloaded = preloadCount * 2 + 1;
    if (preloadedVideos.size > maxPreloaded) {
      const entries = Array.from(preloadedVideos);
      const toRemove = entries.slice(0, entries.length - maxPreloaded);
      setPreloadedVideos(prev => {
        const newSet = new Set(prev);
        toRemove.forEach(index => newSet.delete(index));
        return newSet;
      });
    }
  }, [preloadedVideos.size, preloadCount]);

  return {
    preloadedVideos,
    isLoading,
    isVideoPreloaded: (index: number) => preloadedVideos.has(index)
  };
};