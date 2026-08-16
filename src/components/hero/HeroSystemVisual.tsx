import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  label: string;
  type: 'client' | 'gateway' | 'service' | 'db' | 'model';
}

interface Packet {
  startNode: number;
  endNode: number;
  progress: number;
  speed: number;
}

export const HeroSystemVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 420);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // System nodes mapped in a clean, balanced architecture
    const nodes: Node[] = [
      { x: 0.15, y: 0.5, label: 'CLIENT', type: 'client' },
      { x: 0.4, y: 0.5, label: 'API GATEWAY', type: 'gateway' },
      { x: 0.65, y: 0.28, label: 'ASYNC WORKER', type: 'service' },
      { x: 0.65, y: 0.72, label: 'DATABASE POOL', type: 'db' },
      { x: 0.88, y: 0.5, label: 'AI MODEL / VISION', type: 'model' },
    ];

    // Node connections
    const links = [
      { from: 0, to: 1 }, // Client -> Gateway
      { from: 1, to: 2 }, // Gateway -> Worker
      { from: 1, to: 3 }, // Gateway -> DB
      { from: 2, to: 4 }, // Worker -> Model
      { from: 4, to: 3 }, // Model -> DB
    ];

    // Active data packets flowing
    const packets: Packet[] = [
      { startNode: 0, endNode: 1, progress: 0.1, speed: 0.007 },
      { startNode: 1, endNode: 2, progress: 0.4, speed: 0.009 },
      { startNode: 1, endNode: 3, progress: 0.7, speed: 0.006 },
      { startNode: 2, endNode: 4, progress: 0.2, speed: 0.008 },
      { startNode: 4, endNode: 3, progress: 0.5, speed: 0.007 },
      { startNode: 3, endNode: 1, progress: 0.8, speed: 0.008 },
    ];

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw connecting traces (subtle circuit lines)
      ctx.lineWidth = 1;
      links.forEach(({ from, to }) => {
        const n1 = nodes[from];
        const n2 = nodes[to];
        const x1 = n1.x * width;
        const y1 = n1.y * height;
        const x2 = n2.x * width;
        const y2 = n2.y * height;

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.beginPath();
        // Draw segmented line
        const midX = (x1 + x2) / 2;
        ctx.moveTo(x1, y1);
        ctx.lineTo(midX, y1);
        ctx.lineTo(midX, y2);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      });

      // 2. Draw packets moving along paths
      packets.forEach((p) => {
        p.progress += p.speed;
        if (p.progress >= 1) {
          p.progress = 0;
        }

        const n1 = nodes[p.startNode];
        const n2 = nodes[p.endNode];
        const x1 = n1.x * width;
        const y1 = n1.y * height;
        const x2 = n2.x * width;
        const y2 = n2.y * height;
        const midX = (x1 + x2) / 2;

        let px: number, py: number;
        if (p.progress < 0.5) {
          const t = p.progress / 0.5;
          px = x1 + (midX - x1) * t;
          py = y1;
        } else {
          const t = (p.progress - 0.5) / 0.5;
          px = midX + (x2 - midX) * t;
          py = y1 + (y2 - y1) * t;
        }

        ctx.fillStyle = '#3B82F6';
        ctx.shadowColor = '#3B82F6';
        ctx.shadowBlur = 4;
        ctx.beginPath();
        ctx.arc(px, py, 2.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // 3. Draw system nodes
      nodes.forEach((n) => {
        const nx = n.x * width;
        const ny = n.y * height;
        const boxW = 100;
        const boxH = 34;

        // Box background & border
        ctx.fillStyle = '#111111';
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.14)';
        ctx.lineWidth = 1;
        ctx.fillRect(nx - boxW / 2, ny - boxH / 2, boxW, boxH);
        ctx.strokeRect(nx - boxW / 2, ny - boxH / 2, boxW, boxH);

        // Status indicator dot
        ctx.fillStyle = '#10B981';
        ctx.beginPath();
        ctx.arc(nx - boxW / 2 + 10, ny, 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Node label
        ctx.fillStyle = '#D4D4D8';
        ctx.font = '9px "JetBrains Mono", monospace';
        ctx.textAlign = 'left';
        ctx.fillText(n.label, nx - boxW / 2 + 18, ny + 3);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[340px] md:min-h-[400px] border border-white/[0.08] bg-[#0E0E0E] rounded-md overflow-hidden flex flex-col justify-between p-4">
      {/* Visual Header */}
      <div className="flex items-center justify-between text-[11px] font-mono text-[#71717A] border-b border-white/[0.06] pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
          <span className="text-[#A1A1AA]">SYSTEM ARCHITECTURE // LIVE DATA TRACE</span>
        </div>
        <div className="text-[10px] text-[#52525B]">TOPOLOGY: DISTRIBUTED</div>
      </div>

      {/* Main Interactive Canvas */}
      <div className="relative flex-1 w-full my-2">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      {/* Visual Footer */}
      <div className="flex items-center justify-between text-[10px] font-mono text-[#52525B] border-t border-white/[0.06] pt-2.5">
        <div>LATENCY: &lt;14ms</div>
        <div>PROTO: HTTP/2 · WS · TCP</div>
      </div>
    </div>
  );
};
