import { ProjectData } from '../types';

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: 'medlens',
    index: '01',
    title: 'MedLens',
    category: 'AI / COMPUTER VISION / HEALTHCARE',
    tagline: 'AI-powered health companion designed to make medicine prescriptions accessible across literacy and language barriers.',
    summary: 'By combining computer vision and generative AI, MedLens extracts critical medication information from packaging and prescription scans, transforming complex pharmacological terms into plain-language guidance with regional vernacular translations and synthesized audio playback.',
    repository: 'https://github.com/arshad-2311/Med-len',
    liveUrl: 'https://medlens1.lovable.app',
    verifiedCommits: 9,
    tags: ['React', 'TypeScript', 'Gemini 2.5 Flash', 'Computer Vision', 'OCR', 'Supabase', 'ElevenLabs', 'Tailwind CSS'],
    problem: 'Millions of patients receive medical prescriptions and pharmacological packaging they cannot read or comprehend due to technical terminology, small print, or language barriers. This results in incorrect dosages, missed schedules, and preventable adverse drug events.',
    approach: 'Designed a sequential multimodal pipeline: input image acquisition → high-accuracy OCR / Vision bounding box detection → structured extraction of active pharmaceutical ingredients (APIs), dosages, and schedules → plain-language translation via Gemini 2.5 Flash → regional language synthesis (Hindi, Marathi, Tamil, Telugu, Bengali) → ElevenLabs text-to-speech generation.',
    architectureNotes: [
      'Frontend built with React + TypeScript and TanStack Router for fluid client-side navigation.',
      'Vision layer utilizes Google Gemini 2.5 Flash for simultaneous OCR extraction and pharmacological entity structuring.',
      'Supabase provides secure authentication and user scan history persistence.',
      'Audio pipeline triggers ElevenLabs streaming TTS to generate native-sounding speech for low-literacy users.'
    ],
    keyImplementations: [
      {
        title: 'Multimodal Vision & Extraction Prompt Pipeline',
        description: 'Structured Gemini prompt enforcing deterministic JSON output format containing drug name, dosage, indications, safety warnings, and administration instructions.',
        language: 'typescript',
        codeSnippet: `// Extraction schema for Gemini 2.5 Flash
const extractMedicationData = async (base64Image: string) => {
  const prompt = \`Analyze this prescription/medicine image.
Extract strictly in JSON format:
{
  "drug_name": string,
  "active_molecules": string[],
  "dosage": string,
  "timing": string,
  "plain_language_summary": string,
  "precautions": string[]
}\`;
  const response = await geminiModel.generateContent([prompt, { inlineData: { data: base64Image, mimeType: "image/jpeg" } }]);
  return JSON.parse(response.text());
};`
      },
      {
        title: 'Vernacular Translation & ElevenLabs TTS Streaming',
        description: 'Transfers plain-language summaries into regional Indian dialects and converts text buffers into audio for immediate playback.',
        language: 'typescript',
        codeSnippet: `// Regional Audio Generation Handler
async function generateRegionalAudio(text: string, langCode: string) {
  const response = await fetch("https://api.elevenlabs.io/v1/text-to-speech/voice_id/stream", {
    method: "POST",
    headers: { "xi-api-key": process.env.ELEVENLABS_API_KEY!, "Content-Type": "application/json" },
    body: JSON.stringify({ text, model_id: "eleven_multilingual_v2" })
  });
  return await response.blob();
}`
      }
    ],
    challenges: [
      'Handling low-resolution smartphone photographs of medicine blister packs with reflective foil packaging.',
      'Preventing hallucination in medical explanations by constraining AI output to strictly verified pharmacological data.',
      'Latency management when chaining OCR, translation, and audio synthesis in sequence.'
    ],
    whatWasLearned: [
      'Multimodal LLMs perform significantly better at messy OCR than traditional Tesseract pipelines when given targeted few-shot structural schemas.',
      'Graceful degradation is critical in healthcare UI: text results must display immediately before audio finishes streaming.',
      'Plain-language simplification requires strict temperature control (<= 0.2) to maintain clinical precision without jargon.'
    ],
    systemFlow: [
      { step: '01', label: 'Image Capture', description: 'User submits photo of medicine strip or prescription.' },
      { step: '02', label: 'Vision / OCR', description: 'Gemini 2.5 Flash identifies text boundaries & active molecules.' },
      { step: '03', label: 'Entity Parsing', description: 'Deterministic JSON parsing of drug name, dose, timing & side effects.' },
      { step: '04', label: 'Vernacular Translation', description: 'AI translates summary into selected regional language.' },
      { step: '05', label: 'Audio Synthesis', description: 'ElevenLabs streams synthesized spoken instructions.' }
    ]
  },
  {
    id: 'black-orchid',
    index: '02',
    title: 'Black Orchid',
    category: 'WEB PLATFORM / FULL-STACK',
    tagline: 'Production-oriented web application and real-time dining platform built for Black Orchid in Anna Nagar, Chennai.',
    summary: 'A full-stack web platform built with Next.js, TypeScript, Prisma ORM, and WebSocket integration, featuring dynamic table layouts, synchronized menu configurations, reverse proxy setup with Caddy, and deployment configuration on Vercel.',
    repository: 'https://github.com/arshad-2311/Black-Orchid',
    liveUrl: 'https://black-orchid-lime.vercel.app',
    verifiedCommits: 78,
    tags: ['Next.js', 'TypeScript', 'Prisma ORM', 'WebSockets', 'Tailwind CSS', 'PostgreSQL', 'Caddy'],
    problem: 'Modern hospitality operations require zero-latency synchronization between customer-facing digital menus, table reservation states, and kitchen display updates while maintaining responsive aesthetic performance.',
    approach: 'Constructed a robust Next.js + TypeScript full-stack application using Prisma ORM for relational schema integrity, WebSocket connections for real-time state broadcasts, and Caddy reverse-proxy configuration for production deployment resilience.',
    architectureNotes: [
      'Prisma ORM connects to relational database models for reservations, dishes, categories, and dining rooms.',
      'WebSocket server (located in examples/websocket) provides live event push for table occupancy and order statuses.',
      'Configured Caddyfile for automatic HTTPS termination and reverse-proxy load management in production environments.',
      'Modular component hierarchy structured with Tailwind CSS and Next.js App Router conventions.'
    ],
    keyImplementations: [
      {
        title: 'Prisma Schema & Relational Modeling',
        description: 'Structured schema defining menus, categories, reservations, and table occupancy states.',
        language: 'prisma',
        codeSnippet: `// prisma/schema.prisma extract
model Reservation {
  id          String   @id @default(cuid())
  guestName   String
  guestPhone  String
  partySize   Int
  tableNumber Int?
  reservedAt  DateTime
  status      ReservationStatus @default(PENDING)
  createdAt   DateTime @default(now())
}`
      },
      {
        title: 'WebSocket Real-Time Event Dispatcher',
        description: 'Broadcasts state updates across connected client sessions when reservations or table states change.',
        language: 'typescript',
        codeSnippet: `// WebSocket event broadcast
export function broadcastTableUpdate(wss: WebSocketServer, update: TableStatusPayload) {
  const message = JSON.stringify({ type: "TABLE_UPDATE", data: update, timestamp: Date.now() });
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
}`
      }
    ],
    challenges: [
      'Synchronizing state across multiple concurrent browser sessions without duplicate booking collisions.',
      'Optimizing media delivery for high-resolution menu assets without sacrificing initial page load speed.',
      'Designing deployment configs (Caddyfile, Vercel) for high availability.'
    ],
    whatWasLearned: [
      'Type-safe database queries with Prisma eliminate an entire class of runtime schema errors in full-stack JavaScript.',
      'Separation of concerns between static SSR pages and stateful WebSocket channels yields superior performance.'
    ],
    systemFlow: [
      { step: '01', label: 'Client Request', description: 'Next.js SSR delivers optimized initial markup.' },
      { step: '02', label: 'Data Hydration', description: 'Prisma queries relational menu & dining layout data.' },
      { step: '03', label: 'WebSocket Handshake', description: 'Client opens bidirectional channel for live event updates.' },
      { step: '04', label: 'State Sync', description: 'Booking & table changes broadcast instantly across active clients.' }
    ]
  },
  {
    id: 'attendance',
    index: '03',
    title: 'Smart Attendance System',
    category: 'BACKEND / COMPUTER VISION',
    tagline: 'Role-based automated attendance platform using OpenCV, dlib face encodings, and FastAPI backend services.',
    summary: 'Replaces manual classroom roll-calls with automated facial recognition. Calculates 128-dimensional biometric embeddings from webcam video frames, matches them via Euclidean distance against MySQL records (<0.6 threshold), and provides three distinct role portals (Admin, Professor, Student).',
    repository: 'https://github.com/arshad-2311/Face-Recognition-attendance',
    verifiedCommits: 7,
    tags: ['Python', 'FastAPI', 'SQLAlchemy', 'MySQL', 'OpenCV', 'face_recognition', 'dlib', 'NumPy'],
    problem: 'Manual attendance taking in university lecture halls is time-consuming, prone to proxy attendance, and produces disjointed paper records that are difficult to audit.',
    approach: 'Engineered a full-stack automated platform: Admin portal for batch CSV student enrollment with face image pre-processing; Professor portal with live webcam frame capture and instant present/absent counters; and Student portal with historical attendance analytics.',
    architectureNotes: [
      'FastAPI server structured with clean route separation (/routes/admin.py, /routes/professor.py, /routes/student.py).',
      'Uses dlib / face_recognition to calculate and cache 128-dimensional floating point vectors during student enrollment.',
      'Classroom webcam frame capture processes multiple faces concurrently and applies Euclidean distance matching threshold (< 0.6).',
      'SQLAlchemy ORM persists student profiles, course enrollments, lecture sessions, and binary attendance records in MySQL.'
    ],
    keyImplementations: [
      {
        title: '128-Dimensional Face Encoding & Euclidean Match',
        description: 'Calculates vector embedding and performs vectorized distance checks against enrolled student database.',
        language: 'python',
        codeSnippet: `import face_recognition
import numpy as np

def match_faces_in_frame(frame_image, enrolled_encodings, enrolled_ids):
    # Locate all faces in the captured classroom frame
    face_locations = face_recognition.face_locations(frame_image)
    unknown_encodings = face_recognition.face_encodings(frame_image, face_locations)
    
    present_student_ids = []
    for unknown_encoding in unknown_encodings:
        # Calculate Euclidean distances to all known student encodings
        face_distances = face_recognition.face_distance(enrolled_encodings, unknown_encoding)
        best_match_index = np.argmin(face_distances)
        
        # Distance threshold validation (tolerance < 0.6)
        if face_distances[best_match_index] < 0.6:
            present_student_ids.append(enrolled_ids[best_match_index])
            
    return present_student_ids`
      },
      {
        title: 'FastAPI Attendance Transaction Session',
        description: 'Batch updates attendance records for enrolled students in a single database transaction.',
        language: 'python',
        codeSnippet: `@router.post("/professor/record-attendance")
async def record_attendance(session_id: int, present_ids: list[int], db: Session = Depends(get_db)):
    all_students = db.query(Student).filter(Student.course_id == session.course_id).all()
    records = []
    for student in all_students:
        is_present = student.id in present_ids
        records.append(AttendanceRecord(
            session_id=session_id,
            student_id=student.id,
            status="Present" if is_present else "Absent"
        ))
    db.bulk_save_objects(records)
    db.commit()
    return {"status": "success", "present_count": len(present_ids), "total": len(all_students)}`
      }
    ],
    challenges: [
      'Variable classroom lighting and angle distortion causing false negatives during group photo captures.',
      'Performance optimization when computing Euclidean distances against hundreds of 128-d vectors in real time.',
      'Strict input validation to reject multi-face enrollment photos during initial registration.'
    ],
    whatWasLearned: [
      'Pre-computing and caching 128-d float embeddings in the database drastically reduces frame processing latency compared to on-the-fly image comparison.',
      'Vectorized NumPy distance calculations provide orders of magnitude speedups over iterative loops.'
    ],
    systemFlow: [
      { step: '01', label: 'Enrollment', description: 'Single face photo uploaded & converted to 128-d embedding vector in MySQL.' },
      { step: '02', label: 'Webcam Capture', description: 'Professor initiates group photo frame capture via classroom camera.' },
      { step: '03', label: 'Detection & Encoding', description: 'OpenCV detects face bounding boxes; dlib extracts vectors.' },
      { step: '04', label: 'Distance Matching', description: 'Vector comparison matches faces against enrolled records (< 0.6 threshold).' },
      { step: '05', label: 'DB Transaction', description: 'Presents & absents recorded simultaneously in MySQL attendance_db.' }
    ]
  },
  {
    id: 'companion-ai',
    index: '04',
    title: 'Companion AI',
    category: 'AI / SPEECH ANALYSIS',
    tagline: 'Browser-based AI companion designed to help users improve speech delivery and vocal habits through non-judgmental audio signal reflection.',
    summary: 'Unlike conventional interview tools that assign arbitrary scores and generate anxiety, Companion AI focuses on self-awareness: analyzing speaking pace (WPM), hesitation pauses, filler words, and sentence restarts to reflect delivery habits without evaluation or ranking.',
    repository: 'https://github.com/arshad-2311/Companion-AI',
    verifiedCommits: 4,
    tags: ['Node.js', 'Express', 'Web Audio API', 'Signal Analysis', 'Speech Processing', 'JavaScript'],
    problem: 'Existing speech analysis and mock interview platforms evaluate *what* users say and grade them with gamified scores. This creates performance pressure and fails to address the physical delivery habits (speed surges, hesitations, filler words) that drive speaking confidence.',
    approach: 'Constructed an audio signal processing architecture: captures raw browser audio, computes energy thresholds and silence windows for pause identification, runs speech-to-text alignment to detect filler frequency and restart tokens, and presents a calm, non-judgmental reflection visualizer.',
    architectureNotes: [
      'Client-side Web Audio API handles streaming mic capture and real-time waveform buffer generation.',
      'Node.js backend (server.js, analysis/) orchestrates audio normalization, segmentation, and cadence metrics.',
      'Strict design philosophy: No numerical grading score, no ranking metrics, no evaluative red/green labels.',
      'Visual timeline maps speech density, silence durations, and filler occurrences across the practice timeline.'
    ],
    keyImplementations: [
      {
        title: 'Audio Cadence & Pause Analysis Algorithm',
        description: 'Segments continuous audio stream into speaking bursts and detects hesitation intervals > 800ms.',
        language: 'javascript',
        codeSnippet: `// analysis/pauseDetector.js
function detectPausesAndCadence(audioBuffer, sampleRate = 44100) {
  const windowSize = Math.floor(sampleRate * 0.05); // 50ms windows
  const energyLevels = [];
  
  for (let i = 0; i < audioBuffer.length; i += windowSize) {
    let sum = 0;
    for (let j = 0; j < windowSize && (i + j) < audioBuffer.length; j++) {
      sum += audioBuffer[i + j] * audioBuffer[i + j];
    }
    energyLevels.push(Math.sqrt(sum / windowSize));
  }
  
  const SILENCE_THRESHOLD = 0.015;
  const PAUSE_MIN_WINDOWS = 16; // 800ms threshold
  // Maps silence zones and pace stability without scoring
  return extractSilenceSegments(energyLevels, SILENCE_THRESHOLD, PAUSE_MIN_WINDOWS);
}`
      }
    ],
    challenges: [
      'Distinguishing intentional dramatic pauses from involuntary hesitation pauses.',
      'Handling background noise and varying microphone sensitivity across different client devices.',
      'Maintaining an objective, supportive UI that strictly avoids judgmental vocabulary (e.g. "poor", "bad", "failed").'
    ],
    whatWasLearned: [
      'Product design in AI is as much about what you choose *not* to calculate as what you do calculate. Removing scores transforms user psychology from defensive to reflective.',
      'Time-domain energy windowing provides reliable pause detection with zero GPU overhead.'
    ],
    systemFlow: [
      { step: '01', label: 'Audio Ingestion', description: 'Browser Web Audio API captures response stream.' },
      { step: '02', label: 'Signal Windowing', description: 'RMS energy calculation detects silence vs vocalization segments.' },
      { step: '03', label: 'Cadence Extraction', description: 'Pace (WPM), hesitation pauses, and restart patterns mapped.' },
      { step: '04', label: 'Visual Reflection', description: 'Waveform timeline displays observable patterns without arbitrary scores.' }
    ]
  },
  {
    id: 'appointment-api',
    index: '05',
    title: 'Appointment Booking API',
    category: 'BACKEND / API',
    tagline: 'FastAPI backend service for patient authentication, doctor discovery, and time-slot validated appointment management.',
    summary: 'Engineered as the foundational project during early internship work. Implements relational database models with SQLAlchemy, deterministic schema validation with Pydantic, doctor search by specialization, and conflict-free appointment booking with time slot validation.',
    repository: 'https://github.com/arshad-2311/Appointment-backend',
    verifiedCommits: 6,
    tags: ['Python', 'FastAPI', 'SQLAlchemy', 'Pydantic', 'SQLite', 'Uvicorn', 'REST APIs'],
    problem: 'Healthcare scheduling requires strict time-slot conflict prevention, clear separation between patient and physician views, and structured schema validation to prevent invalid bookings.',
    approach: 'Structured a clean, layered FastAPI backend service: models.py for SQLAlchemy database tables, schema.py for Pydantic request/response validation, database.py for engine session pooling, and main.py for RESTful routing and error handlers.',
    architectureNotes: [
      'FastAPI framework providing automatic OpenAPI / Swagger documentation at /docs.',
      'Pydantic schemas enforce type safety and parameter validation on all incoming request payloads.',
      'SQLAlchemy ORM manages relations between User, Doctor, and Appointment tables.',
      'Time-slot collision checks prevent overlapping bookings for the same doctor at identical timestamps.'
    ],
    keyImplementations: [
      {
        title: 'Pydantic Schema & Time-Slot Validation',
        description: 'Validates appointment booking requests and enforces slot date/time consistency.',
        language: 'python',
        codeSnippet: `# schema.py & main.py extract
from pydantic import BaseModel
from datetime import date

class AppointmentCreate(BaseModel):
    patient_id: int
    doctor_id: int
    date: date
    time_slot: str # e.g. "10:00"

@app.post("/appointments/book", response_model=AppointmentResponse, status_code=201)
def book_appointment(appointment: AppointmentCreate, db: Session = Depends(get_db)):
    # Check for duplicate bookings at the specified slot
    existing = db.query(Appointment).filter(
        Appointment.doctor_id == appointment.doctor_id,
        Appointment.date == appointment.date,
        Appointment.time_slot == appointment.time_slot
    ).first()
    if existing:
        raise HTTPException(status_code=400, detail="Time slot already booked for this doctor.")
    
    new_apt = Appointment(**appointment.dict(), status="scheduled")
    db.add(new_apt)
    db.commit()
    db.refresh(new_apt)
    return new_apt`
      }
    ],
    challenges: [
      'Handling edge cases in appointment re-scheduling and cancellation state transitions.',
      'Structuring clean relational foreign key mappings between Users, Doctors, and Appointment entities.',
      'Ensuring query performance when filtering doctors by multiple specialization criteria.'
    ],
    whatWasLearned: [
      'Pydantic’s declarative schema validation drastically reduces defensive boilerplate code across endpoint handlers.',
      'Explicit database constraint handling and session dependency injection make FastAPI backend services exceptionally testable.'
    ],
    systemFlow: [
      { step: '01', label: 'Client Request', description: 'Incoming HTTP request with JSON payload to FastAPI router.' },
      { step: '02', label: 'Schema Validation', description: 'Pydantic verifies types, required fields, and date formats.' },
      { step: '03', label: 'Business Logic', description: 'Verifies doctor availability & enforces slot non-collision rules.' },
      { step: '04', label: 'DB Persistence', description: 'SQLAlchemy commits transaction to database.' },
      { step: '05', label: 'JSON Response', description: 'FastAPI serializes model response with HTTP status code.' }
    ]
  }
];

export const API_EXPLORER_ENDPOINTS: import('../types').EndpointDefinition[] = [
  {
    method: 'POST',
    path: '/register',
    description: 'Register a new patient user account with credentials.',
    defaultPayload: JSON.stringify({ name: "Alice Sharma", email: "alice@example.com", password: "secure_password_123" }, null, 2),
    mockResponse: {
      status: 201,
      statusText: 'Created',
      data: {
        id: 4,
        name: "Alice Sharma",
        email: "alice@example.com",
        created_at: "2026-08-16T15:24:00Z",
        message: "User registered successfully"
      }
    }
  },
  {
    method: 'GET',
    path: '/doctors',
    description: 'Fetch list of all active doctors and their specializations.',
    mockResponse: {
      status: 200,
      statusText: 'OK',
      data: [
        { id: 1, name: "Dr. A. John", specialization: "Neurology", experience_years: 8, available_slots: ["09:00", "10:30", "14:00"] },
        { id: 2, name: "Dr. Sarah Chen", specialization: "Cardiology", experience_years: 12, available_slots: ["11:00", "15:30", "17:00"] },
        { id: 3, name: "Dr. Rajesh Kumar", specialization: "Orthopedics", experience_years: 6, available_slots: ["10:00", "12:00", "16:00"] }
      ]
    }
  },
  {
    method: 'POST',
    path: '/appointments/book',
    description: 'Book a medical appointment with slot validation.',
    defaultPayload: JSON.stringify({ patient_id: 1, doctor_id: 2, date: "2026-08-20", time_slot: "11:00" }, null, 2),
    mockResponse: {
      status: 201,
      statusText: 'Created',
      data: {
        appointment_id: 108,
        patient_id: 1,
        doctor_id: 2,
        doctor_name: "Dr. Sarah Chen",
        date: "2026-08-20",
        time_slot: "11:00",
        status: "confirmed",
        created_at: "2026-08-16T15:24:12Z"
      }
    }
  },
  {
    method: 'GET',
    path: '/appointments/patient/1',
    description: 'Query all booked appointments for a specific patient ID.',
    mockResponse: {
      status: 200,
      statusText: 'OK',
      data: [
        { appointment_id: 108, doctor_id: 2, doctor_name: "Dr. Sarah Chen", date: "2026-08-20", time_slot: "11:00", status: "confirmed" },
        { appointment_id: 92, doctor_id: 1, doctor_name: "Dr. A. John", date: "2026-07-10", time_slot: "09:00", status: "completed" }
      ]
    }
  },
  {
    method: 'PUT',
    path: '/appointments/108',
    description: 'Update status of an existing appointment.',
    defaultPayload: JSON.stringify({ status: "cancelled" }, null, 2),
    mockResponse: {
      status: 200,
      statusText: 'OK',
      data: {
        appointment_id: 108,
        status: "cancelled",
        updated_at: "2026-08-16T15:24:30Z",
        message: "Appointment status updated"
      }
    }
  }
];
