export interface HeroVideoProject {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  duration: number;
  category: string;
  tags: string[];
  client?: string;
  year: number;
  aspectRatio: '16:9' | '4:3' | '21:9' | '1:1';
}

export interface VideoSidebarPanelProps {
  currentVideo: HeroVideoProject;
  allVideos: HeroVideoProject[];
  currentIndex: number;
  onVideoSelect: (index: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  onPlayPause: () => void;
  isPlaying: boolean;
  isOpen: boolean;
  onToggle: () => void;
}

export interface HeroSectionState {
  currentVideoIndex: number;
  autoplayEnabled: boolean;
  isSidebarOpen: boolean;
}

export type VideoNavigationAction = 
  | 'next'
  | 'previous' 
  | 'play-pause'
  | 'toggle-sidebar'
  | 'escape';

export interface VideoAnimationVariants {
  enter: {
    opacity: number;
    scale: number;
    transition: { duration: number };
  };
  center: {
    opacity: number;
    scale: number;
    transition: { duration: number };
  };
  exit: {
    opacity: number;
    scale: number;
    transition: { duration: number };
  };
}