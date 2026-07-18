import { useEffect, useCallback } from 'react';

interface UseKeyboardNavigationProps {
  onNext?: () => void;
  onPrevious?: () => void;
  onPlayPause?: () => void;
  onToggle?: () => void;
  onEscape?: () => void;
}

export const useKeyboardNavigation = ({
  onNext,
  onPrevious,
  onPlayPause,
  onToggle,
  onEscape
}: UseKeyboardNavigationProps) => {
  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    // Don't trigger when user is typing in input fields
    if (
      e.target instanceof HTMLInputElement ||
      e.target instanceof HTMLTextAreaElement ||
      e.target instanceof HTMLSelectElement
    ) {
      return;
    }

    switch(e.key) {
      case ' ':
      case 'Spacebar':
        e.preventDefault();
        onPlayPause?.();
        break;
      case 'ArrowRight':
        onNext?.();
        break;
      case 'ArrowLeft':
        onPrevious?.();
        break;
      case 'Tab':
        e.preventDefault();
        onToggle?.();
        break;
      case 'Escape':
        onEscape?.();
        break;
    }
  }, [onNext, onPrevious, onPlayPause, onToggle, onEscape]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  return handleKeyPress;
};