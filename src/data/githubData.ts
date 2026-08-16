export interface GitHubRepoItem {
  name: string;
  repoUrl: string;
  description: string;
  language: string;
  languageColor: string;
  commits: number;
  tags: string[];
  updatedAt: string;
}

export const GITHUB_PROFILE = {
  username: 'arshad-2311',
  profileUrl: 'https://github.com/arshad-2311',
  totalPublicProjects: 5,
  languages: [
    { name: 'TypeScript', percentage: '45%' },
    { name: 'Python', percentage: '35%' },
    { name: 'JavaScript', percentage: '12%' },
    { name: 'Prisma / SQL', percentage: '8%' }
  ],
  repositories: [
    {
      name: 'Med-len',
      repoUrl: 'https://github.com/arshad-2311/Med-len',
      description: 'AI-powered health companion extracting medicine data with computer vision and vernacular TTS.',
      language: 'TypeScript',
      languageColor: '#3178C6',
      commits: 9,
      tags: ['gemini-2.5', 'computer-vision', 'ocr', 'elevenlabs', 'supabase'],
      updatedAt: '2026'
    },
    {
      name: 'Black-Orchid',
      repoUrl: 'https://github.com/arshad-2311/Black-Orchid',
      description: 'Full-stack restaurant platform with Next.js, Prisma ORM, WebSocket events, and Caddy reverse proxy.',
      language: 'TypeScript',
      languageColor: '#3178C6',
      commits: 78,
      tags: ['nextjs', 'prisma', 'websockets', 'tailwind', 'vercel'],
      updatedAt: '2026'
    },
    {
      name: 'Face-Recognition-attendance',
      repoUrl: 'https://github.com/arshad-2311/Face-Recognition-attendance',
      description: 'Role-based automated attendance platform with OpenCV, dlib 128-d face encodings, and FastAPI.',
      language: 'Python',
      languageColor: '#3572A5',
      commits: 7,
      tags: ['fastapi', 'dlib', 'opencv', 'sqlalchemy', 'mysql'],
      updatedAt: '2026'
    },
    {
      name: 'Companion-AI',
      repoUrl: 'https://github.com/arshad-2311/Companion-AI',
      description: 'Audio signal and cadence analysis companion for non-judgmental speech delivery reflection.',
      language: 'JavaScript',
      languageColor: '#F7DF1E',
      commits: 4,
      tags: ['web-audio-api', 'signal-processing', 'speech-cadence', 'express'],
      updatedAt: '2026'
    },
    {
      name: 'Appointment-backend',
      repoUrl: 'https://github.com/arshad-2311/Appointment-backend',
      description: 'FastAPI REST backend with SQLAlchemy models and Pydantic validation for clinic scheduling.',
      language: 'Python',
      languageColor: '#3572A5',
      commits: 6,
      tags: ['fastapi', 'sqlalchemy', 'pydantic', 'rest-api', 'sqlite'],
      updatedAt: '2025'
    }
  ] as GitHubRepoItem[]
};
