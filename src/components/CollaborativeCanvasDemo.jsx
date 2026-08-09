import React, { useRef, useState, useEffect } from 'react';
import { Palette, Trash2, Download, MousePointer, Sparkles } from 'lucide-react';

export function CollaborativeCanvasDemo() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#6366F1');
  const [lineWidth, setLineWidth] = useState(4);
  const [mockPeerCursor, setMockPeerCursor] = useState({ x: 120, y: 80, name: 'Priya (VIT)' });

  const colors = ['#6366F1', '#10B981', '#F59E0B', '#EC4899', '#3B82F6', '#FFFFFF'];

  // Animate a mock peer co-drawer cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setMockPeerCursor((prev) => ({
        x: Math.max(30, Math.min(260, prev.x + (Math.random() - 0.5) * 40)),
        y: Math.max(30, Math.min(140, prev.y + (Math.random() - 0.5) * 30)),
        name: prev.name
      }));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(
      (e.clientX || e.touches[0].clientX) - rect.left,
      (e.clientY || e.touches[0].clientY) - rect.top
    );
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.lineTo(
      (e.clientX || e.touches[0].clientX) - rect.left,
      (e.clientY || e.touches[0].clientY) - rect.top
    );
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="bg-[#0B0F19] border border-[#1F293D] rounded-2xl p-4 space-y-3 relative overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span className="text-xs font-bold text-white">Live Canvas Playground (Try Drawing Below!)</span>
        </div>
        <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-mono px-2 py-0.5 rounded-full border border-emerald-500/30">
          WebSocket Active
        </span>
      </div>

      {/* Drawing Toolbar */}
      <div className="flex items-center justify-between gap-2 bg-[#131B2E] p-2 rounded-xl border border-[#1F293D]">
        <div className="flex items-center gap-1.5">
          {colors.map((c) => (
            <button
              key={c}
              onClick={() => setColor(c)}
              className={`w-5 h-5 rounded-full transition-transform ${
                color === c ? 'scale-125 ring-2 ring-white' : 'hover:scale-110'
              }`}
              style={{ backgroundColor: c }}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={clearCanvas}
            className="p-1.5 rounded-lg bg-[#0B0F19] text-gray-400 hover:text-rose-400 border border-[#1F293D] text-[10px] flex items-center gap-1"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Clear</span>
          </button>
        </div>
      </div>

      {/* Canvas Element with Mock Peer Cursor Overlay */}
      <div className="relative bg-[#090D16] rounded-xl border border-[#1F293D] overflow-hidden touch-none">
        <canvas
          ref={canvasRef}
          width={400}
          height={180}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="w-full h-[180px] cursor-crosshair block"
        />

        {/* Animated Peer Cursor Overlay */}
        <div
          className="absolute pointer-events-none transition-all duration-700 ease-out flex items-center gap-1 text-[10px] text-emerald-400 font-mono font-bold bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/40 shadow-lg"
          style={{ left: `${mockPeerCursor.x}px`, top: `${mockPeerCursor.y}px` }}
        >
          <MousePointer className="w-3 h-3 text-emerald-400" />
          <span>{mockPeerCursor.name}</span>
        </div>
      </div>
    </div>
  );
}
