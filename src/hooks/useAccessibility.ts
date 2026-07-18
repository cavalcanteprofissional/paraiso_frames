import { useEffect, useRef, useCallback } from 'react';

interface UseAccessibilityProps {
  onEscape?: () => void;
  announceChanges?: boolean;
}

export const useAccessibility = ({ onEscape, announceChanges = true }: UseAccessibilityProps = {}) => {
  const announcementRef = useRef<HTMLDivElement>(null);

  // Announce changes to screen readers
  const announce = useCallback((message: string) => {
    if (!announceChanges || !announcementRef.current) return;

    announcementRef.current.textContent = message;
    announcementRef.current.setAttribute('aria-live', 'polite');
    announcementRef.current.setAttribute('aria-atomic', 'true');
  }, [announceChanges]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onEscape?.();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onEscape]);

  // Announce video changes
  const announceVideoChange = useCallback((title: string, index: number, total: number) => {
    announce(`Now playing: ${title}. Video ${index + 1} of ${total}`);
  }, [announce]);

  // Announce playback status
  const announcePlaybackStatus = useCallback((isPlaying: boolean) => {
    announce(isPlaying ? 'Video playing' : 'Video paused');
  }, [announce]);

  // Focus management for screen readers
  const manageFocus = useCallback((element: HTMLElement | null) => {
    if (element) {
      element.focus();
      announcementRef.current?.setAttribute('aria-expanded', 'true');
    }
  }, []);

  // Trap focus within modal or sidebar
  const trapFocus = useCallback((container: HTMLElement) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    container.addEventListener('keydown', handleTabKey);
    return () => container.removeEventListener('keydown', handleTabKey);
  }, []);

  return {
    announcementRef,
    announce,
    announceVideoChange,
    announcePlaybackStatus,
    manageFocus,
    trapFocus
  };
};