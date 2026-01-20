export interface VideoProject {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  duration: number; // em segundos
  category: string;
  tags: string[];
  client?: string;
  year: number;
  aspectRatio: '16:9' | '4:3' | '21:9' | '1:1';
}

export const videoProjects: VideoProject[] = [
  {
    id: '1',
    title: 'Documentário Urbano',
    description: 'Explorando a paisagem sonora das metrópoles contemporâneas',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80',
    duration: 634,
    category: 'Documentário',
    tags: ['documentário', 'urbano', 'som'],
    client: 'Festival Internacional de Cinema',
    year: 2023,
    aspectRatio: '16:9'
  },
  {
    id: '2',
    title: 'Videoclipe: Aurora',
    description: 'Direção criativa para banda de rock alternativo',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
    duration: 245,
    category: 'Videoclipe',
    tags: ['música', 'arte', 'color grading'],
    year: 2024,
    aspectRatio: '21:9'
  },
  {
    id: '3',
    title: 'Campanha Publicitária',
    description: 'Campanha global para marca de automóveis',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80',
    duration: 189,
    category: 'Publicidade',
    tags: ['comercial', 'automotivo', 'cinematográfico'],
    client: 'Marca de Automóveis',
    year: 2023,
    aspectRatio: '16:9'
  },
  {
    id: '4',
    title: 'Experimental: Reflexos',
    description: 'Videoarte explorando movimento e reflexão',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=800&q=80',
    duration: 321,
    category: 'Experimental',
    tags: ['arte', 'abstrato', 'movimento'],
    year: 2024,
    aspectRatio: '1:1'
  },
  {
    id: '5',
    title: 'Curta-metragem: O Último Trem',
    description: 'Drama contemplativo sobre conexões perdidas',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1489599809516-9827b6d1cf13?w=800&q=80',
    duration: 854,
    category: 'Curta-metragem',
    tags: ['drama', 'cinema', 'narrativa'],
    client: 'Produtora Independente',
    year: 2022,
    aspectRatio: '21:9'
  },
  {
    id: '6',
    title: 'Série Web: Cozinha Nomade',
    description: 'Série sobre gastronomia e viagens',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    duration: 456,
    category: 'Série Web',
    tags: ['gastronomia', 'viagem', 'documentário'],
    client: 'Plataforma de Streaming',
    year: 2023,
    aspectRatio: '16:9'
  }
];

export const categories = [
  'Todos',
  'Documentário',
  'Videoclipe',
  'Publicidade',
  'Experimental',
  'Curta-metragem',
  'Série Web'
];