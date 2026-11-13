import React, { useEffect, useState } from 'react';
import { Award, PartyPopper, RotateCcw, X } from 'lucide-react';
import { ExamLevel } from '../data/regulationData';
import { Language } from '../data/i18n';

interface PassCelebrationModalProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
  level: ExamLevel;
  score: number;
  passingScore: 80 | 90 | 100;
  correctCount: number;
  totalCount: number;
  onRetryLevel: () => void;
}

interface FireworkParticle {
  id: number;
  left: number;
  top: number;
  color: string;
  size: number;
  delay: number;
  duration: number;
  tx: number;
  ty: number;
}

export const PassCelebrationModal: React.FC<PassCelebrationModalProps> = ({
  lang,
  isOpen,
  onClose,
  level,
  score,
  passingScore,
  correctCount,
  totalCount,
  onRetryLevel,
}) => {
  const [particles, setParticles] = useState<FireworkParticle[]>([]);

  useEffect(() => {
    if (!isOpen) return;
    const colors = [
      '#0284C7',
      '#059669',
      '#D97706',
      '#DC2626',
      '#7C3AED',
      '#EAB308',
      '#EC4899',
    ];
    const generated: FireworkParticle[] = Array.from({ length: 64 }).map((_, i) => ({
      id: i,
      left: 15 + Math.random() * 70,
      top: 15 + Math.random() * 55,
      color: colors[i % colors.length],
      size: 6 + Math.random() * 8,
      delay: Math.random() * 0.5,
      duration: 1.1 + Math.random() * 0.9,
      tx: (Math.random() - 0.5) * 260,
      ty: (Math.random() - 0.5) * 260 - 40,
    }));
    setParticles(generated);
  }, [isOpen]);

  if (!isOpen) return null;

  const isEs = lang === 'es';

  const levelNameMap: Record<ExamLevel, string> = isEs
    ? {
        beginner: 'Nivel Básico (20 preguntas · 50% Opción Múltiple · 50% O/X)',
        intermediate:
          'Nivel Intermedio (20 preguntas · 50% Espacios · 25% Opción Múltiple · 25% O/X)',
        advanced: 'Nivel Avanzado (20 preguntas · 100% Espacios en Blanco)',
        all: 'Práctica Completa (49 Preguntas)',
      }
    : {
        beginner: '초급 과정 (20문항 완주 · 4지선다 50% · O/X 50%)',
        intermediate: '중급 과정 (20문항 완주 · 빈칸 50% · 4지선다 25% · O/X 25%)',
        advanced: '고급 과정 (20문항 완주 · 빈칸 주관식 100%)',
        all: '전체 49문항 마스터 과정',
      };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs overflow-hidden">
      {/* Confetti / Fireworks Burst Layer */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <span
            key={p.id}
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              animation: `firework-burst ${p.duration}s cubic-bezier(0.16, 1, 0.3, 1) ${p.delay}s infinite`,
              ['--tx' as string]: `${p.tx}px`,
              ['--ty' as string]: `${p.ty}px`,
            }}
            className="absolute rounded-full opacity-90"
          />
        ))}
      </div>

      <style>{`
        @keyframes firework-burst {
          0% {
            transform: translate(0, 0) scale(0.4);
            opacity: 1;
          }
          80% {
            opacity: 0.9;
          }
          100% {
            transform: translate(var(--tx), var(--ty)) scale(1.1);
            opacity: 0;
          }
        }
        @keyframes clap-bounce {
          0%, 100% { transform: scale(1) rotate(-4deg); }
          50% { transform: scale(1.18) rotate(6deg); }
        }
      `}</style>

      {/* Celebration Modal Box */}
      <div className="relative w-full max-w-md bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 text-center shadow-2xl space-y-5 z-10">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 rounded-lg transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Animated Applause & Fireworks Emblem */}
        <div className="flex items-center justify-center gap-3">
          <div
            style={{ animation: 'clap-bounce 0.6s ease-in-out infinite' }}
            className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-3xl select-none"
          >
            👏
          </div>
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
            <Award className="w-9 h-9" />
          </div>
          <div
            style={{ animation: 'clap-bounce 0.6s ease-in-out 0.3s infinite' }}
            className="w-16 h-16 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700"
          >
            <PartyPopper className="w-8 h-8" />
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="text-xs font-bold text-emerald-700 tracking-wide">
            {isEs
              ? `¡META ALCANZADA (${passingScore} PTS) · APROBADO!`
              : `목표 기준 (${passingScore}점) 돌파 · 최종 합격!`}
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            {isEs
              ? '¡Felicidades! ¡Has aprobado el examen!'
              : '축하합니다! 합격 기준을 달성했습니다!'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            {levelNameMap[level]}
          </p>
        </div>

        {/* Score Summary Box */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl grid grid-cols-3 gap-2">
          <div>
            <div className="text-xs text-slate-500">
              {isEs ? 'Criterio' : '설정 합격선'}
            </div>
            <div className="text-base sm:text-lg font-bold font-mono-num text-slate-800 mt-0.5">
              {passingScore}{isEs ? ' pts' : '점'}
            </div>
          </div>
          <div className="border-x border-slate-200">
            <div className="text-xs text-slate-500">
              {isEs ? 'Puntaje' : '획득 점수'}
            </div>
            <div className="text-lg sm:text-xl font-bold font-mono-num text-emerald-700 mt-0.5">
              {score}{isEs ? ' pts' : '점'}
            </div>
          </div>
          <div>
            <div className="text-xs text-slate-500">
              {isEs ? 'Aciertos' : '정답 문항'}
            </div>
            <div className="text-base sm:text-lg font-bold font-mono-num text-sky-800 mt-0.5">
              {correctCount}/{totalCount}
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-500 leading-relaxed break-keep">
          {isEs
            ? 'Has completado las 20 preguntas de este nivel y dominado con exactitud los «Criterios de apertura, inscripción y finalización del curso del Centro de Misión (en el extranjero)».'
            : '현재 레벨의 20문항을 모두 완주하여 「선교센터 개강, 등록, 종강 기준(해외)」의 핵심 수치와 행정 절차를 정확하게 숙지하셨습니다.'}
        </p>

        {/* Actions: Stay on current level (Reset & retry or Review answers) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-2">
          <button
            type="button"
            onClick={() => {
              onClose();
              onRetryLevel();
            }}
            className="flex-1 px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-700 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center gap-1.5"
          >
            <RotateCcw className="w-4 h-4" />
            {isEs ? 'Reiniciar este nivel' : '이 레벨 처음부터 다시 풀기'}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors"
          >
            {isEs ? 'Cerrar y revisar respuestas' : '닫기 (풀이 결과 확인)'}
          </button>
        </div>
      </div>
    </div>
  );
};
