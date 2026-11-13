import React, { useState, useEffect, useMemo } from 'react';
import {
  Bookmark,
  CheckCircle2,
  XCircle,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  BookOpen,
  Keyboard,
  MousePointerClick,
  Volume2,
  VolumeX,
  PartyPopper,
  Trophy,
} from 'lucide-react';
import {
  ChapterId,
  ExamLevel,
  LEVEL_QUESTION_IDS,
  QuizQuestion,
  QUIZ_QUESTIONS,
} from '../data/regulationData';
import { QUIZ_QUESTIONS_ES } from '../data/regulationDataEs';
import { Language } from '../data/i18n';
import { soundEffects } from '../utils/soundEffects';
import { PassCelebrationModal } from './PassCelebrationModal';

interface QuizStageProps {
  lang: Language;
  selectedChapter: ChapterId | 'all';
  onChangeChapter: (ch: ChapterId | 'all') => void;
  customQuestionPool: number[] | null;
  onClearCustomPool: () => void;
  solvedQuestionIds: number[];
  wrongQuestionIds: number[];
  bookmarkedQuestionIds: number[];
  onRecordResult: (questionId: number, isCorrect: boolean) => void;
  onToggleBookmark: (questionId: number) => void;
  onSelectClause: (clauseId: string) => void;
}

export const QuizStage: React.FC<QuizStageProps> = ({
  lang,
  selectedChapter,
  onChangeChapter,
  customQuestionPool,
  onClearCustomPool,
  bookmarkedQuestionIds,
  onRecordResult,
  onToggleBookmark,
  onSelectClause,
}) => {
  const [examLevel, setExamLevel] = useState<ExamLevel>('beginner');
  const [passingScore, setPassingScore] = useState<80 | 90 | 100>(80);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [blankInputMode, setBlankInputMode] = useState<'hybrid' | 'typingOnly'>('hybrid');
  const [activeBlankSlot, setActiveBlankSlot] = useState<number>(0);
  const [isMuted, setIsMuted] = useState(false);

  // Per-language, per-question user state
  const [blankValues, setBlankValues] = useState<Record<string, string[]>>({});
  const [oxSelection, setOxSelection] = useState<Record<string, boolean | null>>({});
  const [multiSelection, setMultiSelection] = useState<Record<string, number[]>>({});
  const [submittedMap, setSubmittedMap] = useState<Record<number, boolean>>({});
  const [correctnessMap, setCorrectnessMap] = useState<Record<number, boolean>>({});

  const [celebrationOpen, setCelebrationOpen] = useState(false);
  const [celebratedKeys, setCelebratedKeys] = useState<Record<string, boolean>>({});

  const isEs = lang === 'es';
  const questionsSource = isEs ? QUIZ_QUESTIONS_ES : QUIZ_QUESTIONS;

  const toggleMute = () => {
    const next = !isMuted;
    setIsMuted(next);
    soundEffects.muted = next;
  };

  const filteredQuestions = useMemo(() => {
    if (customQuestionPool && customQuestionPool.length > 0) {
      return questionsSource.filter((q) => customQuestionPool.includes(q.id));
    }
    if (examLevel !== 'all') {
      const targetIds = LEVEL_QUESTION_IDS[examLevel];
      const ordered = targetIds
        .map((id) => questionsSource.find((q) => q.id === id))
        .filter((q): q is QuizQuestion => !!q);
      if (selectedChapter !== 'all') {
        return ordered.filter((q) => q.chapterId === selectedChapter);
      }
      return ordered;
    }
    if (selectedChapter !== 'all') {
      return questionsSource.filter((q) => q.chapterId === selectedChapter);
    }
    return questionsSource;
  }, [questionsSource, examLevel, selectedChapter, customQuestionPool]);

  useEffect(() => {
    setCurrentIndex(0);
    setActiveBlankSlot(0);
  }, [examLevel, selectedChapter, customQuestionPool]);

  const currentQuestion: QuizQuestion | undefined = filteredQuestions[currentIndex];

  useEffect(() => {
    if (currentQuestion) {
      onSelectClause(currentQuestion.clauseId);
      setActiveBlankSlot(0);
    }
  }, [currentQuestion?.id, lang]);

  // Calculate current exam session score (100 points full score)
  const totalInPool = filteredQuestions.length;
  const correctInPool = filteredQuestions.filter((q) => correctnessMap[q.id]).length;
  const currentScore =
    totalInPool > 0 ? Math.round((correctInPool / totalInPool) * 100) : 0;
  const isPassed = totalInPool > 0 && currentScore >= passingScore;

  const triggerCelebrationNow = () => {
    soundEffects.playPassCelebration();
    setCelebrationOpen(true);
  };

  const handlePassingScoreClick = (target: 80 | 90 | 100) => {
    setPassingScore(target);
    if (totalInPool > 0 && currentScore >= target) {
      soundEffects.playPassCelebration();
      setCelebrationOpen(true);
    }
  };

  const handleResetLevelExam = () => {
    const nextSubmitted = { ...submittedMap };
    const nextCorrect = { ...correctnessMap };
    const nextBlanks = { ...blankValues };
    const nextOx = { ...oxSelection };
    const nextMulti = { ...multiSelection };

    filteredQuestions.forEach((q) => {
      delete nextSubmitted[q.id];
      delete nextCorrect[q.id];
      delete nextBlanks[`ko-${q.id}`];
      delete nextBlanks[`es-${q.id}`];
      delete nextOx[`ko-${q.id}`];
      delete nextOx[`es-${q.id}`];
      delete nextMulti[`ko-${q.id}`];
      delete nextMulti[`es-${q.id}`];
    });

    setSubmittedMap(nextSubmitted);
    setCorrectnessMap(nextCorrect);
    setBlankValues(nextBlanks);
    setOxSelection(nextOx);
    setMultiSelection(nextMulti);
    setCelebratedKeys((prev) => ({
      ...prev,
      [`${examLevel}-${passingScore}`]: false,
    }));
    setCurrentIndex(0);
    setActiveBlankSlot(0);
  };

  if (!currentQuestion) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
        <p className="text-base font-semibold text-slate-900">
          {isEs
            ? 'No hay preguntas disponibles con este filtro.'
            : '해당 조건에 맞는 문항이 없습니다.'}
        </p>
        <button
          type="button"
          onClick={() => {
            onClearCustomPool();
            onChangeChapter('all');
          }}
          className="mt-4 px-4 py-2 text-xs font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
        >
          {isEs ? 'Volver a todas las secciones' : '전체 파트로 복귀'}
        </button>
      </div>
    );
  }

  const qId = currentQuestion.id;
  const stateKey = `${lang}-${qId}`;
  const isSubmitted = !!submittedMap[qId];
  const isCorrect = !!correctnessMap[qId];
  const isBookmarked = bookmarkedQuestionIds.includes(qId);

  const currentBlanks =
    blankValues[stateKey] ||
    (currentQuestion.blankAnswers ? currentQuestion.blankAnswers.map(() => '') : []);
  const currentOx = oxSelection[stateKey] ?? null;
  const currentMulti = multiSelection[stateKey] || [];

  const normalizeAnswer = (str: string) =>
    str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '')
      .replace(/['"‘’“”«»]/g, '')
      .trim();

  const handleBlankChange = (slotIdx: number, val: string) => {
    if (isSubmitted) return;
    const next = [...currentBlanks];
    next[slotIdx] = val;
    setBlankValues((prev) => ({ ...prev, [stateKey]: next }));
  };

  const handleWordChipClick = (word: string) => {
    if (isSubmitted || !currentQuestion.blankAnswers) return;
    const totalSlots = currentQuestion.blankAnswers.length;
    let targetSlot = activeBlankSlot;
    if (targetSlot >= totalSlots) targetSlot = 0;

    const next = [...currentBlanks];
    next[targetSlot] = word;
    setBlankValues((prev) => ({ ...prev, [stateKey]: next }));

    const nextEmpty = next.findIndex((v, i) => i > targetSlot && !v.trim());
    if (nextEmpty !== -1) {
      setActiveBlankSlot(nextEmpty);
    } else if (targetSlot + 1 < totalSlots) {
      setActiveBlankSlot(targetSlot + 1);
    }
  };

  const handleToggleMultiOption = (optIdx: number) => {
    if (isSubmitted) return;
    if (currentQuestion.isMultiSelect) {
      const exists = currentMulti.includes(optIdx);
      const next = exists
        ? currentMulti.filter((i) => i !== optIdx)
        : [...currentMulti, optIdx];
      setMultiSelection((prev) => ({ ...prev, [stateKey]: next }));
    } else {
      setMultiSelection((prev) => ({ ...prev, [stateKey]: [optIdx] }));
    }
  };

  const evaluateQuestion = () => {
    let pass = false;
    if (currentQuestion.type === 'blank' && currentQuestion.blankAnswers) {
      pass = currentQuestion.blankAnswers.every((acceptedList, idx) => {
        const userVal = normalizeAnswer(currentBlanks[idx] || '');
        return acceptedList.some((ans) => normalizeAnswer(ans) === userVal);
      });
    } else if (currentQuestion.type === 'ox') {
      pass = currentOx !== null && currentOx === currentQuestion.oxAnswer;
    } else if (currentQuestion.type === 'multiple' && currentQuestion.correctOptionIndices) {
      const expected = [...currentQuestion.correctOptionIndices].sort();
      const actual = [...currentMulti].sort();
      pass =
        expected.length === actual.length &&
        expected.every((val, i) => val === actual[i]);
    }

    const nextCorrectMap = { ...correctnessMap, [qId]: pass };
    setSubmittedMap((prev) => ({ ...prev, [qId]: true }));
    setCorrectnessMap(nextCorrectMap);
    onRecordResult(qId, pass);
    onSelectClause(currentQuestion.clauseId);

    const newCorrectCount = filteredQuestions.filter(
      (q) => nextCorrectMap[q.id]
    ).length;
    const newScore =
      totalInPool > 0 ? Math.round((newCorrectCount / totalInPool) * 100) : 0;

    if (pass) {
      soundEffects.playCorrectChime();

      const celebKey = `${examLevel}-${passingScore}`;
      if (newScore >= passingScore && !celebratedKeys[celebKey]) {
        setCelebratedKeys((prev) => ({ ...prev, [celebKey]: true }));
        setTimeout(() => {
          soundEffects.playPassCelebration();
          setCelebrationOpen(true);
        }, 380);
      }
    } else {
      soundEffects.playWrongTone();
    }
  };

  const handleRetryCurrent = () => {
    setSubmittedMap((prev) => ({ ...prev, [qId]: false }));
    setCorrectnessMap((prev) => ({ ...prev, [qId]: false }));
    setBlankValues((prev) => ({
      ...prev,
      [stateKey]: currentQuestion.blankAnswers
        ? currentQuestion.blankAnswers.map(() => '')
        : [],
    }));
    setOxSelection((prev) => ({ ...prev, [stateKey]: null }));
    setMultiSelection((prev) => ({ ...prev, [stateKey]: [] }));
    setActiveBlankSlot(0);
  };

  const canSubmit = () => {
    if (currentQuestion.type === 'blank') {
      return currentBlanks.some((b) => b.trim().length > 0);
    }
    if (currentQuestion.type === 'ox') {
      return currentOx !== null;
    }
    if (currentQuestion.type === 'multiple') {
      return currentMulti.length > 0;
    }
    return false;
  };

  const typeLabelMap = isEs
    ? {
        blank: 'Completar Espacios en Blanco',
        ox: 'Verdadero / Falso (O/X)',
        multiple: 'Opción Múltiple (4 opciones)',
      }
    : {
        blank: '빈칸 채우기 (주관식/단어선택)',
        ox: 'O/X 퀴즈',
        multiple: '4지선다형 객관식',
      };

  const chapterLabelMap: Record<ChapterId, string> = isEs
    ? {
        '1': '1. Criterios de apertura',
        '2': '2. Criterios de inscripción',
        '3': '3. Criterios de fin de semestre',
      }
    : {
        '1': '1. 선교센터 개강 기준',
        '2': '2. 선교센터 등록 기준',
        '3': '3. 선교센터 종강 기준',
      };

  const levelDescriptions: Record<ExamLevel, string> = isEs
    ? {
        beginner:
          'Nivel Básico (20 preguntas · 5 pts c/u): 50% Opción Múltiple (10) + 50% O/X (10)',
        intermediate:
          'Nivel Intermedio (20 preguntas · 5 pts c/u): 50% Espacios en blanco (10) + 25% Opción Múltiple (5) + 25% O/X (5)',
        advanced:
          'Nivel Avanzado (20 preguntas · 5 pts c/u): 100% Espacios en blanco del texto original (20)',
        all: 'Banco Completo (49 preguntas): Practica todas las cláusulas del reglamento.',
      }
    : {
        beginner:
          '초급 과정 (총 20문항 · 문항당 5점): 4지선다형 50%(10문항) + O/X 퀴즈 50%(10문항)',
        intermediate:
          '중급 과정 (총 20문항 · 문항당 5점): 빈칸 주관식 50%(10문항) + 4지선다형 25%(5문항) + O/X 퀴즈 25%(5문항)',
        advanced:
          '고급 과정 (총 20문항 · 문항당 5점): 원문 빈칸 주관식 100%(20문항)',
        all: '전체 문제 은행 (49문항): 모든 조항 문제를 빠짐없이 연습합니다.',
      };

  return (
    <div className="space-y-4 sm:space-y-5">
      {/* Pass Celebration Modal (Fireworks + Applause) */}
      <PassCelebrationModal
        lang={lang}
        isOpen={celebrationOpen}
        onClose={() => setCelebrationOpen(false)}
        level={examLevel}
        score={currentScore}
        passingScore={passingScore}
        correctCount={correctInPool}
        totalCount={totalInPool}
        onRetryLevel={handleResetLevelExam}
        onNextLevel={() => {
          if (examLevel === 'beginner') setExamLevel('intermediate');
          else if (examLevel === 'intermediate') setExamLevel('advanced');
        }}
      />

      {/* Level & Passing Score Control Card */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 space-y-4">
        {customQuestionPool && customQuestionPool.length > 0 && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
            <span className="text-xs font-semibold text-amber-800">
              {isEs
                ? `Modo de Repaso Intensivo (${filteredQuestions.length} preguntas)`
                : `오답·취약 문항 집중 재풀이 모드 (${filteredQuestions.length}문항)`}
            </span>
            <button
              type="button"
              onClick={onClearCustomPool}
              className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors w-fit"
            >
              {isEs ? 'Volver al examen por niveles' : '레벨별 시험 모드로 복귀'}
            </button>
          </div>
        )}

        {/* Row 1: Exam Level Selection (초급 / 중급 / 고급) */}
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-bold text-slate-700">
              {isEs
                ? '1. Seleccionar Nivel de Examen (Básico · Intermedio · Avanzado)'
                : '1. 시험 레벨 선택 (초급 · 중급 · 고급)'}
            </span>
            <button
              type="button"
              onClick={toggleMute}
              className={`px-2.5 py-1 text-xs font-medium rounded-md border transition-colors flex items-center gap-1 ${
                isMuted
                  ? 'bg-slate-100 text-slate-500 border-slate-200'
                  : 'bg-sky-50 text-sky-800 border-sky-200'
              }`}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  {isEs ? 'Sonido OFF' : '효과음 꺼짐'}
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5" />
                  {isEs ? 'Sonido ON' : '정답 효과음 켜짐'}
                </>
              )}
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {(isEs
              ? [
                  { id: 'beginner', title: 'Básico (20)', sub: '50% 4 Opc · 50% OX' },
                  {
                    id: 'intermediate',
                    title: 'Intermedio (20)',
                    sub: '50% Blanco · 25% 4 Opc · 25% OX',
                  },
                  { id: 'advanced', title: 'Avanzado (20)', sub: '100% Espacios en blanco' },
                  { id: 'all', title: 'Todo (49)', sub: 'Práctica completa' },
                ]
              : [
                  { id: 'beginner', title: '초급 (20문항)', sub: '4지선다 50% · OX 50%' },
                  {
                    id: 'intermediate',
                    title: '중급 (20문항)',
                    sub: '빈칸 50% · 4지 25% · OX 25%',
                  },
                  { id: 'advanced', title: '고급 (20문항)', sub: '빈칸 주관식 100%' },
                  { id: 'all', title: '전체 연습 (49)', sub: '전 문항 자유 풀이' },
                ]
            ).map((lvl) => {
              const active = !customQuestionPool && examLevel === lvl.id;
              return (
                <button
                  key={lvl.id}
                  type="button"
                  onClick={() => {
                    onClearCustomPool();
                    onChangeChapter('all');
                    setExamLevel(lvl.id as ExamLevel);
                  }}
                  className={`p-2.5 rounded-xl border text-left transition-all ${
                    active
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="text-xs sm:text-sm font-bold">{lvl.title}</div>
                  <div
                    className={`text-[11px] mt-0.5 leading-tight ${
                      active ? 'text-slate-300' : 'text-slate-500'
                    }`}
                  >
                    {lvl.sub}
                  </div>
                </button>
              );
            })}
          </div>
          <p className="text-xs text-slate-500 break-keep">
            {levelDescriptions[examLevel]}
          </p>
        </div>

        {/* Row 2: Passing Score Selector (80점 / 90점 / 100점) & Live Score Bar */}
        <div className="pt-3 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
          <div className="sm:col-span-6 space-y-1.5">
            <div className="text-xs font-bold text-slate-700">
              {isEs
                ? '2. Meta de Aprobación (80 / 90 / 100 pts — Celebración al aprobar)'
                : '2. 합격 기준 점수 설정 (달성 시 폭죽·박수 축하 모션)'}
            </div>
            <div className="grid grid-cols-3 gap-2">
              {([80, 90, 100] as const).map((pt) => {
                const isSelected = passingScore === pt;
                return (
                  <button
                    key={pt}
                    type="button"
                    onClick={() => handlePassingScoreClick(pt)}
                    className={`py-2 px-3 rounded-lg border text-xs sm:text-sm font-bold font-mono-num transition-all flex items-center justify-center gap-1 ${
                      isSelected
                        ? 'bg-sky-700 text-white border-sky-700 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <Trophy className="w-3.5 h-3.5 shrink-0" />
                    {pt}
                    {isEs
                      ? pt === 80
                        ? ' pts (Base)'
                        : ' pts'
                      : pt === 80
                      ? '점 (기본)'
                      : '점'}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Live Score & Celebration Trigger */}
          <div className="sm:col-span-6 p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <div className="flex items-center justify-between gap-2">
              <div className="text-xs text-slate-600">
                {isEs ? 'Puntaje actual: ' : '현재 점수: '}
                <span className="text-base font-bold font-mono-num text-slate-900">
                  {currentScore}
                  {isEs ? ' pts' : '점'}
                </span>{' '}
                <span className="text-slate-500 font-mono-num">
                  ({correctInPool}/{totalInPool}{' '}
                  {isEs ? `aciertos · Meta ${passingScore}` : `정답 · 목표 ${passingScore}점`})
                </span>
              </div>

              {isPassed ? (
                <button
                  type="button"
                  onClick={triggerCelebrationNow}
                  className="px-2.5 py-1 text-xs font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 rounded-lg hover:bg-emerald-200 transition-colors flex items-center gap-1 shrink-0"
                >
                  <PartyPopper className="w-3.5 h-3.5" />
                  {isEs ? 'Ver celebración' : '합격 축하 모션 보기'}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleResetLevelExam}
                  className="px-2 py-1 text-xs text-slate-600 hover:text-slate-900 underline shrink-0"
                >
                  {isEs ? 'Reiniciar' : '점수 초기화'}
                </button>
              )}
            </div>

            {/* Progress Bar */}
            <div className="relative h-2.5 w-full bg-slate-200 rounded-full overflow-hidden">
              <div
                style={{ width: `${Math.min(100, currentScore)}%` }}
                className={`h-full transition-all duration-300 ${
                  isPassed ? 'bg-emerald-600' : 'bg-sky-600'
                }`}
              />
            </div>
          </div>
        </div>

        {/* Row 3: Optional Chapter Filter & Question Number Strip */}
        <div className="pt-3 border-t border-slate-100 space-y-2.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-1">
              {(isEs
                ? [
                    { id: 'all', label: 'Todo' },
                    { id: '1', label: '1. Apertura' },
                    { id: '2', label: '2. Inscripción' },
                    { id: '3', label: '3. Fin de semestre' },
                  ]
                : [
                    { id: 'all', label: '전체 장' },
                    { id: '1', label: '1. 개강 기준' },
                    { id: '2', label: '2. 등록 기준' },
                    { id: '3', label: '3. 종강 기준' },
                  ]
              ).map((ch) => (
                <button
                  key={ch.id}
                  type="button"
                  onClick={() => {
                    onClearCustomPool();
                    onChangeChapter(ch.id as ChapterId | 'all');
                  }}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                    !customQuestionPool && selectedChapter === ch.id
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {ch.label}
                </button>
              ))}
            </div>

            <span className="text-xs font-mono-num text-slate-500">
              {isEs
                ? `Pregunta ${currentIndex + 1} de ${filteredQuestions.length}`
                : `${currentIndex + 1} / ${filteredQuestions.length}번째 문제`}
            </span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {filteredQuestions.map((q, idx) => {
              const isCurr = idx === currentIndex;
              const isSub = submittedMap[q.id];
              const isRight = correctnessMap[q.id];
              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-7 h-7 text-xs font-mono-num rounded-md border transition-colors shrink-0 flex items-center justify-center ${
                    isCurr
                      ? 'bg-slate-900 text-white border-slate-900 font-bold'
                      : isSub
                      ? isRight
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-300 font-semibold'
                        : 'bg-red-50 text-red-700 border-red-300 font-semibold'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                  }`}
                  title={`${idx + 1}: ${q.clauseTitle}`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Question Stage Card */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 space-y-5">
        {/* Question Metadata Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-slate-200">
          <div className="space-y-1.5 min-w-0">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500">
              <span className="font-mono-num font-bold text-slate-900">
                {isEs
                  ? `Pregunta ${currentIndex + 1} / ${filteredQuestions.length}`
                  : `문제 ${currentIndex + 1} / ${filteredQuestions.length}`}
              </span>
              <span aria-hidden="true">·</span>
              <span>{chapterLabelMap[currentQuestion.chapterId]}</span>
              <span aria-hidden="true">·</span>
              <span>{currentQuestion.clauseTitle}</span>
            </div>
            <div className="text-xs font-semibold text-sky-700">
              {typeLabelMap[currentQuestion.type]}
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug break-keep pt-0.5">
              {currentQuestion.prompt}
            </h3>
          </div>

          <button
            type="button"
            onClick={() => onToggleBookmark(qId)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors w-fit shrink-0 flex items-center gap-1.5 ${
              isBookmarked
                ? 'bg-amber-50 text-amber-800 border-amber-300'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            {isBookmarked
              ? isEs
                ? 'Guardado'
                : '북마크됨'
              : isEs
              ? 'Guardar'
              : '북마크'}
          </button>
        </div>

        {/* Question Body: Fill-in-the-Blank */}
        {currentQuestion.type === 'blank' && currentQuestion.blankSegments && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 bg-slate-50/70 p-3 rounded-lg border border-slate-200/80">
              <p className="text-xs text-slate-600 leading-relaxed break-keep">
                {isEs
                  ? 'Toca el espacio en blanco para escribir o selecciona de las palabras clave de abajo.'
                  : '빈칸을 눌러 직접 입력하거나 아래 단어 보기를 눌러 채우세요.'}
              </p>
              <div className="flex items-center gap-1 p-1 bg-slate-200/70 rounded-lg w-fit shrink-0">
                <button
                  type="button"
                  onClick={() => setBlankInputMode('hybrid')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap flex items-center gap-1 ${
                    blankInputMode === 'hybrid'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <MousePointerClick className="w-3 h-3" />
                  {isEs ? 'Palabras + Teclado' : '단어 보기 + 타이핑'}
                </button>
                <button
                  type="button"
                  onClick={() => setBlankInputMode('typingOnly')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap flex items-center gap-1 ${
                    blankInputMode === 'typingOnly'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Keyboard className="w-3 h-3" />
                  {isEs ? 'Solo Teclado' : '직접 타이핑'}
                </button>
              </div>
            </div>

            {/* Verbatim Sentence with Responsive Blank Inputs */}
            <div className="p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded-xl text-sm sm:text-base leading-9 text-slate-900 break-keep">
              {currentQuestion.blankSegments.map((seg, idx) => {
                if (!seg.isAnswer || seg.answerIndex === undefined) {
                  return <span key={idx}>{seg.text}</span>;
                }
                const slotIdx = seg.answerIndex;
                const val = currentBlanks[slotIdx] || '';
                const isFocused = activeBlankSlot === slotIdx;
                const slotCorrect =
                  isSubmitted &&
                  currentQuestion.blankAnswers?.[slotIdx]?.some(
                    (ans) => normalizeAnswer(ans) === normalizeAnswer(val)
                  );

                return (
                  <span
                    key={idx}
                    className="inline-flex items-center mx-1 my-0.5 align-baseline max-w-full"
                  >
                    <input
                      type="text"
                      value={val}
                      disabled={isSubmitted}
                      onFocus={() => setActiveBlankSlot(slotIdx)}
                      onChange={(e) => handleBlankChange(slotIdx, e.target.value)}
                      placeholder={
                        isEs ? `Espacio ${slotIdx + 1}` : `빈칸 ${slotIdx + 1}`
                      }
                      style={{
                        width: `${Math.min(
                          Math.max(seg.text.length * 10 + 48, 108),
                          280
                        )}px`,
                      }}
                      className={`max-w-full px-2 py-1 text-xs sm:text-sm font-semibold rounded-md border text-center transition-all focus:outline-none ${
                        isSubmitted
                          ? slotCorrect
                            ? 'bg-emerald-50 text-emerald-900 border-emerald-500'
                            : 'bg-red-50 text-red-900 border-red-500'
                          : isFocused
                          ? 'bg-white text-slate-900 border-sky-600 ring-2 ring-sky-100'
                          : 'bg-white text-slate-900 border-slate-300 hover:border-slate-400'
                      }`}
                    />
                  </span>
                );
              })}
            </div>

            {/* Word Bank Chips */}
            {blankInputMode === 'hybrid' && currentQuestion.wordBank && !isSubmitted && (
              <div className="p-3.5 sm:p-4 bg-white border border-slate-200 rounded-xl space-y-2.5">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                  <span className="break-keep">
                    {isEs
                      ? `Opciones de palabras (toca para completar [Espacio ${
                          activeBlankSlot + 1
                        }])`
                      : `원문 단어 보기 (터치 시 [빈칸 ${
                          activeBlankSlot + 1
                        }]에 자동 입력)`}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setBlankValues((prev) => ({
                        ...prev,
                        [stateKey]: currentQuestion.blankAnswers
                          ? currentQuestion.blankAnswers.map(() => '')
                          : [],
                      }))
                    }
                    className="text-slate-600 hover:text-slate-900 underline shrink-0"
                  >
                    {isEs ? 'Limpiar' : '입력 초기화'}
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentQuestion.wordBank.map((word, wIdx) => {
                    const isUsed = currentBlanks.includes(word);
                    return (
                      <button
                        key={wIdx}
                        type="button"
                        onClick={() => handleWordChipClick(word)}
                        className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg border transition-colors text-left break-keep ${
                          isUsed
                            ? 'bg-sky-50 text-sky-800 border-sky-300'
                            : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {word}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Question Body: O/X */}
        {currentQuestion.type === 'ox' && (
          <div className="space-y-4">
            <div className="p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded-xl text-sm sm:text-base leading-relaxed font-medium text-slate-900 break-keep">
              “{currentQuestion.statement}”
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                {
                  val: true,
                  label: isEs
                    ? 'O (Verdadero · Coincide con el original)'
                    : 'O (원문 기준과 정확히 일치함)',
                },
                {
                  val: false,
                  label: isEs
                    ? 'X (Falso · Diferente al original)'
                    : 'X (원문 기준과 다름 / 불가함)',
                },
              ].map((item) => {
                const selected = currentOx === item.val;
                return (
                  <button
                    key={String(item.val)}
                    type="button"
                    disabled={isSubmitted}
                    onClick={() =>
                      setOxSelection((prev) => ({ ...prev, [stateKey]: item.val }))
                    }
                    className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between gap-2 ${
                      isSubmitted
                        ? item.val === currentQuestion.oxAnswer
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold'
                          : selected
                          ? 'bg-red-50 border-red-500 text-red-950'
                          : 'bg-white border-slate-200 text-slate-400'
                        : selected
                        ? 'bg-sky-50 border-sky-600 text-sky-950 font-semibold shadow-xs'
                        : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <span className="text-sm sm:text-base break-keep">{item.label}</span>
                    {isSubmitted && item.val === currentQuestion.oxAnswer && (
                      <span className="text-xs font-semibold text-emerald-700 whitespace-nowrap shrink-0">
                        {isEs ? 'Correcta' : '정답'}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Question Body: Multiple Choice (4지선다) */}
        {currentQuestion.type === 'multiple' && currentQuestion.options && (
          <div className="space-y-2.5">
            {currentQuestion.isMultiSelect && (
              <p className="text-xs font-medium text-sky-800">
                {isEs
                  ? '* Selecciona todas las opciones que correspondan según el texto original.'
                  : '* 원문에 명시된 해당 조건을 빠짐없이 모두 선택하세요.'}
              </p>
            )}
            {currentQuestion.options.map((opt, idx) => {
              const selected = currentMulti.includes(idx);
              const isAnswerOpt =
                currentQuestion.correctOptionIndices?.includes(idx) ?? false;

              return (
                <button
                  key={idx}
                  type="button"
                  disabled={isSubmitted}
                  onClick={() => handleToggleMultiOption(idx)}
                  className={`w-full p-3.5 sm:p-4 rounded-xl border text-left transition-all flex items-start justify-between gap-3 ${
                    isSubmitted
                      ? isAnswerOpt
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold'
                        : selected
                        ? 'bg-red-50 border-red-500 text-red-950'
                        : 'bg-white border-slate-200 text-slate-500'
                      : selected
                      ? 'bg-sky-50 border-sky-600 text-sky-950 font-semibold'
                      : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-start gap-2.5 min-w-0">
                    <span className="font-mono-num text-xs font-semibold mt-0.5 px-2 py-0.5 rounded border border-current shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-sm sm:text-base leading-relaxed break-keep">
                      {opt}
                    </span>
                  </div>
                  {isSubmitted && (
                    <span className="text-xs font-semibold whitespace-nowrap shrink-0 mt-0.5">
                      {isAnswerOpt
                        ? isEs
                          ? '✓ Correcta'
                          : '✓ 정답'
                        : selected
                        ? isEs
                          ? '✕ Incorrecta'
                          : '✕ 오답'
                        : ''}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Verification Feedback Box */}
        {isSubmitted && (
          <div
            className={`p-4 sm:p-5 rounded-xl border space-y-3 ${
              isCorrect
                ? 'bg-emerald-50/70 border-emerald-300'
                : 'bg-red-50/70 border-red-300'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                {isCorrect ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-700 shrink-0" />
                )}
                <span
                  className={`text-sm font-bold break-keep ${
                    isCorrect ? 'text-emerald-900' : 'text-red-900'
                  }`}
                >
                  {isCorrect
                    ? isEs
                      ? '✓ ¡Respuesta Correcta (+5 pts)! Coincide exactamente con el reglamento.'
                      : '✓ 정답 (+5점) · 원문 기준을 정확히 인지하셨습니다!'
                    : isEs
                    ? '✕ Respuesta Incorrecta · Compara con el texto original abajo.'
                    : '✕ 오답 · 아래 원문 기준과 수치·토씨를 다시 대조해보세요'}
                </span>
              </div>

              <button
                type="button"
                onClick={() => onSelectClause(currentQuestion.clauseId)}
                className="px-2.5 py-1.5 text-xs font-medium text-slate-800 bg-white border border-slate-300 rounded-md hover:bg-slate-100 transition-colors w-fit shrink-0 flex items-center gap-1"
              >
                <BookOpen className="w-3.5 h-3.5 text-sky-700" />
                {isEs
                  ? `Ver sección [${currentQuestion.clauseId}]`
                  : `[${currentQuestion.clauseId}]항 원문 보기`}
              </button>
            </div>

            {currentQuestion.type === 'blank' && currentQuestion.blankAnswers && (
              <div className="text-xs sm:text-sm text-slate-900 bg-white/90 p-3 rounded-lg border border-slate-200 flex flex-wrap gap-2">
                <span className="font-semibold text-slate-600">
                  {isEs ? 'Respuestas exactas:' : '정답 원문 키워드:'}
                </span>
                {currentQuestion.blankAnswers.map((ansArr, i) => (
                  <span key={i} className="font-bold text-sky-900">
                    [{isEs ? `Espacio ${i + 1}` : `빈칸 ${i + 1}`}] {ansArr[0]}
                  </span>
                ))}
              </div>
            )}

            <div className="bg-white p-3.5 rounded-lg border border-slate-200 space-y-1.5">
              <div className="text-xs font-semibold text-slate-500">
                {isEs
                  ? `Cita Literal del Texto Original (${currentQuestion.clauseTitle})`
                  : `원문 그대로 대조 (${currentQuestion.clauseTitle})`}
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-900 whitespace-pre-line leading-relaxed break-keep">
                {currentQuestion.verbatimQuote}
              </p>
              <p className="text-xs text-slate-600 pt-1 border-t border-slate-100 break-keep">
                {isEs ? 'Nota de verificación: ' : '확인 포인트: '}
                {currentQuestion.verificationNote}
              </p>
            </div>
          </div>
        )}

        {/* Bottom Action Controls */}
        <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
              className="flex-1 sm:flex-initial justify-center px-3.5 py-2.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-40 transition-colors flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              {isEs ? 'Anterior' : '이전 문제'}
            </button>
            <button
              type="button"
              disabled={currentIndex >= filteredQuestions.length - 1}
              onClick={() =>
                setCurrentIndex((i) => Math.min(filteredQuestions.length - 1, i + 1))
              }
              className="flex-1 sm:flex-initial justify-center px-3.5 py-2.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-40 transition-colors flex items-center gap-1"
            >
              {isEs ? 'Siguiente' : '다음 문제'}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            {isSubmitted ? (
              <>
                <button
                  type="button"
                  onClick={handleRetryCurrent}
                  className="flex-1 sm:flex-initial justify-center px-4 py-2.5 text-xs font-medium text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  {isEs ? 'Reintentar' : '다시 풀기'}
                </button>
                {currentIndex < filteredQuestions.length - 1 && (
                  <button
                    type="button"
                    onClick={() => setCurrentIndex((i) => i + 1)}
                    className="flex-1 sm:flex-initial justify-center px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    {isEs ? 'Siguiente pregunta →' : '다음 문제로 이동 →'}
                  </button>
                )}
              </>
            ) : (
              <button
                type="button"
                disabled={!canSubmit()}
                onClick={evaluateQuestion}
                className="w-full sm:w-auto justify-center px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-sky-700 rounded-lg hover:bg-sky-800 disabled:opacity-40 transition-colors"
              >
                {isEs ? 'Verificar Respuesta' : '정답 확인 (채점하기)'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
