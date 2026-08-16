export type ProjectId = 'medlens' | 'black-orchid' | 'attendance' | 'companion-ai' | 'appointment-api';

export interface ProjectData {
  id: ProjectId;
  index: string; // '01', '02', etc.
  title: string;
  category: string;
  tagline: string;
  summary: string;
  repository: string;
  liveUrl?: string;
  verifiedCommits?: number;
  tags: string[];
  problem: string;
  approach: string;
  architectureNotes: string[];
  keyImplementations: {
    title: string;
    description: string;
    codeSnippet?: string;
    language?: string;
  }[];
  challenges: string[];
  whatWasLearned: string[];
  systemFlow: {
    step: string;
    label: string;
    description: string;
  }[];
}

export interface TechItem {
  name: string;
  description: string;
  level?: string;
  verifiedIn?: string;
}

export interface TechCategory {
  category: string;
  label: string;
  items: TechItem[];
}

export interface EndpointDefinition {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  description: string;
  defaultPayload?: string;
  mockResponse: {
    status: number;
    statusText: string;
    data: any;
  };
}
