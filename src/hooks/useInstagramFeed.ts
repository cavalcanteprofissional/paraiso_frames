import { useState, useEffect, useCallback } from 'react';

export interface InstagramMedia {
  id: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  thumbnail_url?: string;
  caption?: string;
  timestamp: string;
  permalink: string;
  username?: string;
}

export interface InstagramFeedState {
  media: InstagramMedia[];
  isLoading: boolean;
  error: string | null;
  hasMore: boolean;
  reload: () => void;
}

const INSTAGRAM_API_BASE = 'https://graph.instagram.com';
const CACHE_KEY = 'instagram_feed_cache';
const CACHE_DURATION = 1000 * 60 * 30;

const getCache = (): { data: InstagramMedia[]; timestamp: number } | null => {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      const isExpired = Date.now() - parsed.timestamp > CACHE_DURATION;
      if (!isExpired) {
        return parsed;
      }
    }
  } catch {
    return null;
  }
  return null;
};

const setCache = (data: InstagramMedia[]) => {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data, timestamp: Date.now() }));
  } catch {
    // Ignore cache errors
  }
};

export const useInstagramFeed = (limit = 12): InstagramFeedState => {
  const [media, setMedia] = useState<InstagramMedia[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(false);

  const fetchMedia = useCallback(async () => {
    const accessToken = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;
    const userId = import.meta.env.VITE_INSTAGRAM_USER_ID;

    if (!accessToken || !userId) {
      setError('API não configurada');
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const cached = getCache();
      if (cached) {
        setMedia(cached.data);
        setHasMore(cached.data.length >= limit);
        setIsLoading(false);
        return;
      }

      const fields = 'id,media_type,media_url,thumbnail_url,caption,timestamp,permalink,username';
      const response = await fetch(
        `${INSTAGRAM_API_BASE}/${userId}/media?fields=${fields}&limit=${limit}&access_token=${accessToken}`
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Erro ao carregar feed');
      }

      const data = await response.json();
      const mediaData: InstagramMedia[] = (data.data || []).filter(
        (item: InstagramMedia) => item.media_type !== 'VIDEO'
      );

      setMedia(mediaData);
      setHasMore(mediaData.length >= limit);
      setCache(mediaData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setIsLoading(false);
    }
  }, [limit]);

  useEffect(() => {
    fetchMedia();
  }, [fetchMedia]);

  const reload = useCallback(() => {
    localStorage.removeItem(CACHE_KEY);
    fetchMedia();
  }, [fetchMedia]);

  return { media, isLoading, error, hasMore, reload };
};