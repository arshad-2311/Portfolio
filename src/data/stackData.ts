import { TechCategory } from '../types';

export const TECH_MATRIX: TechCategory[] = [
  {
    category: 'Backend Architecture',
    label: '01 / CORE SYSTEMS',
    items: [
      { name: 'Python', description: 'Primary backend language for services, data logic & computer vision workflows.', verifiedIn: 'Smart Attendance, Appointment API' },
      { name: 'FastAPI', description: 'High-performance async REST framework with dependency injection and OpenAPI docs.', verifiedIn: 'Smart Attendance, Appointment API' },
      { name: 'REST APIs', description: 'Resource-oriented design, HTTP semantics, route separation, and structured error boundaries.', verifiedIn: 'All backend projects' },
      { name: 'SQLAlchemy', description: 'Relational ORM mapping, engine pooling, and declarative database models.', verifiedIn: 'Smart Attendance, Appointment API' },
      { name: 'Pydantic', description: 'Type enforcement, request schema validation, and response serialization.', verifiedIn: 'Appointment API' },
      { name: 'Node.js / Express', description: 'Lightweight runtime for server event dispatching and routing.', verifiedIn: 'Companion AI, Black Orchid' }
    ]
  },
  {
    category: 'Data & Persistence',
    label: '02 / RELATIONAL STORAGE',
    items: [
      { name: 'MySQL', description: 'Relational database for structured student profiles & facial vector logs.', verifiedIn: 'Smart Attendance (attendance_db)' },
      { name: 'PostgreSQL / Supabase', description: 'Managed relational storage with row-level security and auth.', verifiedIn: 'MedLens' },
      { name: 'SQLite', description: 'Embedded relational database for rapid prototyping and local testing.', verifiedIn: 'Appointment API' },
      { name: 'Prisma ORM', description: 'Type-safe schema generation and relational data client.', verifiedIn: 'Black Orchid' },
      { name: 'SQL / Relational Modeling', description: 'Foreign key constraints, indexing, transactions, and entity relationships.', verifiedIn: 'All projects' }
    ]
  },
  {
    category: 'Computer Vision & AI',
    label: '03 / APPLIED SYSTEMS',
    items: [
      { name: 'Computer Vision & OCR', description: 'Visual text localization, entity detection, and packaging analysis.', verifiedIn: 'MedLens' },
      { name: 'OpenCV & dlib', description: 'Face bounding-box detection and 128-d biometric Euclidean distance calculation.', verifiedIn: 'Smart Attendance' },
      { name: 'LLM APIs & Prompt Engineering', description: 'Structured JSON entity extraction and plain-language medical summarization.', verifiedIn: 'MedLens' },
      { name: 'AI Audio & Voice Chaining', description: 'Vernacular translation pipelines and ElevenLabs voice streaming.', verifiedIn: 'MedLens' }
    ]
  },
  {
    category: 'Frontend & Interfaces',
    label: '04 / INTERFACES',
    items: [
      { name: 'React', description: 'Component-driven UI architecture, hooks, and reactive state management.', verifiedIn: 'MedLens, Portfolio' },
      { name: 'TypeScript', description: 'Static typing for domain models, API payloads, and component props.', verifiedIn: 'MedLens, Black Orchid' },
      { name: 'Next.js', description: 'Full-stack React framework with SSR and App Router.', verifiedIn: 'Black Orchid' },
      { name: 'Vite', description: 'High-speed frontend development and modern ES module bundling.', verifiedIn: 'MedLens, Portfolio' },
      { name: 'Tailwind CSS', description: 'Utility-first styling with custom design tokens.', verifiedIn: 'All web projects' }
    ]
  },
  {
    category: 'Infrastructure & Tools',
    label: '05 / DEPLOYMENT & DEV',
    items: [
      { name: 'Git & GitHub', description: 'Version control, atomic commits, repository documentation.', verifiedIn: 'All repositories' },
      { name: 'WebSockets', description: 'Bidirectional real-time event streaming for live platform states.', verifiedIn: 'Black Orchid' },
      { name: 'Caddy & Reverse Proxy', description: 'Automatic TLS termination and proxy routing.', verifiedIn: 'Black Orchid' },
      { name: 'Postman & Swagger UI', description: 'Interactive API testing, contract inspection, and documentation.', verifiedIn: 'Appointment API' },
      { name: 'Linux / Shell', description: 'Server administration, deployment scripting, and service execution.', verifiedIn: 'FastAPI / Uvicorn deployments' }
    ]
  }
];
