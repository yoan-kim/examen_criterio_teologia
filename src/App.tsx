/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import {
  ChapterId,
  DOCUMENT_HEADER,
} from './data/regulationData';
import { DOCUMENT_HEADER_ES } from './data/regulationDataEs';
import { Language } from './data/i18n';
import { QuizStage } from './components/QuizStage';
import { BlindMemorizer } from './components/BlindMemorizer';
import { WrongAnswerNote } from './components/WrongAnswerNote';
import { FullRegulationView } from './components/FullRegulationView';
import { ReferenceDeck } from './components/ReferenceDeck';

type ActiveTab = 'study' | 'quiz' | 'blind' | 'wrong';

const STORAGE_KEY = 'scj_mission_center_regulation_master_v2';

export default function App() {
  const [lang, setLang] = useState<Language>('ko');
  const [activeTab, setActiveTab] = useState<ActiveTab>('study');
  const [selectedChapter, setSelectedChapter] = useState<ChapterId | 'all'>('all');
  const [customQuestionPool, setCustomQuestionPool] = useState<number[] | null>(null);
  const [activeClauseId, setActiveClauseId] = useState<string | null>('1-1');
  const [hideReferenceDuringQuiz, setHideReferenceDuringQuiz] = useState(false);

  // Persistent learning state
  const [solvedQuestionIds, setSolvedQuestionIds] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return Array.isArray(parsed.solvedQuestionIds) ? parsed.solvedQuestionIds : [];
      }
    } catch {
      // ignore storage error
    }
    return [];
  });

  const [wrongQuestionIds, setWrongQuestionIds] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return Array.isArray(parsed.wrongQuestionIds) ? parsed.wrongQuestionIds : [];
      }
    } catch {
      // ignore storage error
    }
    return [];
  });

  const [bookmarkedQuestionIds, setBookmarkedQuestionIds] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return Array.isArray(parsed.bookmarkedQuestionIds)
          ? parsed.bookmarkedQuestionIds
          : [];
      }
    } catch {
      // ignore storage error
    }
    return [];
  });

  const [masteredClauseIds, setMasteredClauseIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return Array.isArray(parsed.masteredClauseIds) ? parsed.masteredClauseIds : [];
      }
    } catch {
      // ignore storage error
    }
    return [];
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          solvedQuestionIds,
          wrongQuestionIds,
          bookmarkedQuestionIds,
          masteredClauseIds,
        })
      );
    } catch {
      // ignore storage error
    }
  }, [solvedQuestionIds, wrongQuestionIds, bookmarkedQuestionIds, masteredClauseIds]);

  const handleRecordResult = (questionId: number, isCorrect: boolean) => {
    if (isCorrect) {
      setSolvedQuestionIds((prev) =>
        prev.includes(questionId) ? prev : [...prev, questionId]
      );
    } else {
      setWrongQuestionIds((prev) =>
        prev.includes(questionId) ? prev : [...prev, questionId]
      );
    }
  };

  const handleToggleBookmark = (questionId: number) => {
    setBookmarkedQuestionIds((prev) =>
      prev.includes(questionId)
        ? prev.filter((id) => id !== questionId)
        : [...prev, questionId]
    );
  };

  const handleRemoveWrong = (questionId: number) => {
    setWrongQuestionIds((prev) => prev.filter((id) => id !== questionId));
  };

  const handleToggleClauseMastery = (clauseId: string) => {
    setMasteredClauseIds((prev) =>
      prev.includes(clauseId)
        ? prev.filter((id) => id !== clauseId)
        : [...prev, clauseId]
    );
  };

  const isEs = lang === 'es';
  const docHeader = isEs ? DOCUMENT_HEADER_ES : DOCUMENT_HEADER;

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900">
      {/* 3-Zone Top Navigation Bar with Korean / Spanish Language Switcher */}
      <header className="flex items-center justify-between gap-3 sm:gap-8 px-4 sm:px-6 py-3.5 bg-white border-b border-slate-200 sticky top-0 z-20">
        {/* Zone 1: Brand Title */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            setActiveTab('study');
          }}
          className="text-sm sm:text-lg font-bold tracking-tight text-slate-900 truncate"
        >
          {isEs
            ? 'Criterios del Centro de Misión'
            : '선교센터 개강·등록·종강 기준 마스터'}
        </a>

        {/* Zone 2: 4 Single-line Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <button
            type="button"
            onClick={() => setActiveTab('study')}
            className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'study'
                ? 'text-slate-900 font-semibold underline underline-offset-8 decoration-2 decoration-sky-700'
                : ''
            }`}
          >
            {isEs ? '1. Texto Original' : '1. 원문 학습'}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('quiz')}
            className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'quiz'
                ? 'text-slate-900 font-semibold underline underline-offset-8 decoration-2 decoration-sky-700'
                : ''
            }`}
          >
            {isEs ? '2. Examen Práctico' : '2. 실전 문제 풀이'}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('blind')}
            className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'blind'
                ? 'text-slate-900 font-semibold underline underline-offset-8 decoration-2 decoration-sky-700'
                : ''
            }`}
          >
            {isEs ? '3. Memorización' : '3. 블라인드 암기장'}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('wrong')}
            className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'wrong'
                ? 'text-slate-900 font-semibold underline underline-offset-8 decoration-2 decoration-sky-700'
                : ''
            }`}
          >
            {isEs ? '4. Nota de Errores' : '4. 오답 노트'}
          </button>
        </nav>

        {/* Zone 3: Language Switcher (한국어 | Español) */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 border border-slate-200 rounded-lg shrink-0">
          <Globe className="w-3.5 h-3.5 text-slate-500 ml-1.5 hidden sm:block" />
          <button
            type="button"
            onClick={() => setLang('ko')}
            className={`px-2.5 py-1 text-xs font-bold rounded-md transition-colors whitespace-nowrap ${
              lang === 'ko'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            한국어
          </button>
          <button
            type="button"
            onClick={() => setLang('es')}
            className={`px-2.5 py-1 text-xs font-bold rounded-md transition-colors whitespace-nowrap ${
              lang === 'es'
                ? 'bg-sky-700 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Español
          </button>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="flex-1 max-w-[1400px] w-full mx-auto px-3 sm:px-6 py-4 sm:py-6 space-y-4 sm:space-y-6">
        {/* Step Navigation Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-white p-2 border border-slate-200 rounded-xl">
          {(isEs
            ? [
                { id: 'study', step: 'PASO 1', label: 'Estudio del Texto' },
                { id: 'quiz', step: 'PASO 2', label: 'Examen Práctico' },
                { id: 'blind', step: 'PASO 3', label: 'Memorización Ciega' },
                {
                  id: 'wrong',
                  step: 'PASO 4',
                  label: `Nota de Errores (${wrongQuestionIds.length})`,
                },
              ]
            : [
                { id: 'study', step: 'STEP 1', label: '원문 정독 학습' },
                { id: 'quiz', step: 'STEP 2', label: '실전 문제 풀이' },
                { id: 'blind', step: 'STEP 3', label: '블라인드 암기장' },
                {
                  id: 'wrong',
                  step: 'STEP 4',
                  label: `오답 노트 (${wrongQuestionIds.length})`,
                },
              ]
          ).map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as ActiveTab)}
                className={`p-2.5 sm:px-4 sm:py-2.5 rounded-lg text-left transition-all ${
                  isActive
                    ? 'bg-sky-700 text-white shadow-xs'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div
                  className={`text-[10px] font-mono-num font-bold ${
                    isActive ? 'text-sky-200' : 'text-slate-400'
                  }`}
                >
                  {tab.step}
                </div>
                <div className="text-xs sm:text-sm font-bold truncate mt-0.5">
                  {tab.label}
                </div>
              </button>
            );
          })}
        </div>

        {/* 2-Zone Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
          {/* Left Zone: Main Interactive Stage */}
          <div className="lg:col-span-8 min-w-0">
            {activeTab === 'study' && (
              <FullRegulationView
                lang={lang}
                activeClauseId={activeClauseId}
                onSelectClause={(clauseId) => setActiveClauseId(clauseId)}
                masteredClauseIds={masteredClauseIds}
                onToggleClauseMastery={handleToggleClauseMastery}
                onStartChapterQuiz={(ch) => {
                  setCustomQuestionPool(null);
                  setSelectedChapter(ch);
                  setActiveTab('quiz');
                }}
              />
            )}

            {activeTab === 'quiz' && (
              <QuizStage
                lang={lang}
                selectedChapter={selectedChapter}
                onChangeChapter={setSelectedChapter}
                customQuestionPool={customQuestionPool}
                onClearCustomPool={() => setCustomQuestionPool(null)}
                solvedQuestionIds={solvedQuestionIds}
                wrongQuestionIds={wrongQuestionIds}
                bookmarkedQuestionIds={bookmarkedQuestionIds}
                onRecordResult={handleRecordResult}
                onToggleBookmark={handleToggleBookmark}
                onSelectClause={(clauseId) => setActiveClauseId(clauseId)}
              />
            )}

            {activeTab === 'blind' && (
              <BlindMemorizer
                lang={lang}
                activeClauseId={activeClauseId}
                onSelectClause={(clauseId) => setActiveClauseId(clauseId)}
                masteredClauseIds={masteredClauseIds}
                onToggleClauseMastery={handleToggleClauseMastery}
                onStartChapterQuiz={(ch) => {
                  setCustomQuestionPool(null);
                  setSelectedChapter(ch);
                  setActiveTab('quiz');
                }}
              />
            )}

            {activeTab === 'wrong' && (
              <WrongAnswerNote
                lang={lang}
                wrongQuestionIds={wrongQuestionIds}
                bookmarkedQuestionIds={bookmarkedQuestionIds}
                onRemoveWrong={handleRemoveWrong}
                onToggleBookmark={handleToggleBookmark}
                onStartRetryPool={(ids) => {
                  setCustomQuestionPool(ids);
                  setActiveTab('quiz');
                }}
                onSelectClause={(clauseId) => setActiveClauseId(clauseId)}
              />
            )}
          </div>

          {/* Right Zone: Real-Time Verbatim Original Text Reference Viewer */}
          <div className="lg:col-span-4 lg:sticky lg:top-20 min-w-0">
            <ReferenceDeck
              lang={lang}
              activeClauseId={activeClauseId}
              onSelectClause={(clauseId) => setActiveClauseId(clauseId)}
              solvedQuestionIds={solvedQuestionIds}
              wrongQuestionIds={wrongQuestionIds}
              masteredClauseIds={masteredClauseIds}
              onToggleClauseMastery={handleToggleClauseMastery}
              hideDuringQuiz={hideReferenceDuringQuiz}
              onToggleHideDuringQuiz={() =>
                setHideReferenceDuringQuiz((prev) => !prev)
              }
            />
          </div>
        </div>
      </main>

      {/* Quiet Footer */}
      <footer className="mt-10 border-t border-slate-200 bg-white py-5 px-4 sm:px-6 text-xs text-slate-500">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <span>
            {isEs ? 'Documento base: ' : '기준 문서: '}
            {docHeader.title} {docHeader.effectiveDate}
          </span>
          <span>
            {isEs
              ? 'Todas las preguntas y textos han sido extraídos literalmente sin modificaciones.'
              : '모든 문항과 학습 자료는 첨부 원문을 변형하지 않고 그대로 수록되었습니다.'}
          </span>
        </div>
      </footer>
    </div>
  );
}
