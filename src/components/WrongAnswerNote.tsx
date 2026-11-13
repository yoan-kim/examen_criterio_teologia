import React, { useState } from 'react';
import {
  AlertTriangle,
  Bookmark,
  CheckCircle2,
  Play,
  Trash2,
  BookOpen,
} from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/regulationData';
import { QUIZ_QUESTIONS_ES } from '../data/regulationDataEs';
import { Language } from '../data/i18n';

interface WrongAnswerNoteProps {
  lang: Language;
  wrongQuestionIds: number[];
  bookmarkedQuestionIds: number[];
  onRemoveWrong: (questionId: number) => void;
  onToggleBookmark: (questionId: number) => void;
  onStartRetryPool: (questionIds: number[]) => void;
  onSelectClause: (clauseId: string) => void;
}

export const WrongAnswerNote: React.FC<WrongAnswerNoteProps> = ({
  lang,
  wrongQuestionIds,
  bookmarkedQuestionIds,
  onRemoveWrong,
  onToggleBookmark,
  onStartRetryPool,
  onSelectClause,
}) => {
  const [tab, setTab] = useState<'wrong' | 'bookmarked' | 'combined'>('combined');

  const isEs = lang === 'es';
  const questions = isEs ? QUIZ_QUESTIONS_ES : QUIZ_QUESTIONS;

  const targetIds =
    tab === 'wrong'
      ? wrongQuestionIds
      : tab === 'bookmarked'
      ? bookmarkedQuestionIds
      : Array.from(new Set([...wrongQuestionIds, ...bookmarkedQuestionIds]));

  const items = questions.filter((q) => targetIds.includes(q.id));

  return (
    <div className="space-y-5 sm:space-y-6">
      {/* Header Control Card */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span>
                {isEs ? 'Repaso Intensivo de Errores' : '취약 기준 집중 복습'}
              </span>
              <span>·</span>
              <span className="font-mono-num">
                {isEs
                  ? `Errores: ${wrongQuestionIds.length}`
                  : `오답 ${wrongQuestionIds.length}문항`}
              </span>
              <span>·</span>
              <span className="font-mono-num">
                {isEs
                  ? `Guardados: ${bookmarkedQuestionIds.length}`
                  : `북마크 ${bookmarkedQuestionIds.length}문항`}
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
              {isEs
                ? 'Nota de Errores y Repaso de Cláusulas Clave'
                : '오답 노트 및 취약 조항 집중 재풀이'}
            </h2>
            <p className="text-xs text-slate-600 mt-1 break-keep">
              {isEs
                ? 'Revisa el texto original exacto de las preguntas en las que te equivocaste y vuelve a practicarlas hasta dominar el 100%.'
                : '한 번이라도 헷갈렸던 수치·기한·서류 기준을 원문 그대로 대조하고, 해당 문항들만 모아 100% 맞힐 때까지 재시험을 진행하세요.'}
            </p>
          </div>

          {items.length > 0 && (
            <button
              type="button"
              onClick={() => onStartRetryPool(items.map((i) => i.id))}
              className="px-4 py-2.5 text-xs font-semibold text-white bg-sky-700 rounded-lg hover:bg-sky-800 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 w-fit"
            >
              <Play className="w-3.5 h-3.5" />
              {isEs
                ? `Practicar esta lista (${items.length} preguntas)`
                : `현재 목록 (${items.length}문항) 집중 재풀이 시작`}
            </button>
          )}
        </div>

        <div className="pt-4 flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg w-fit">
          {[
            {
              id: 'combined',
              label: isEs
                ? `Todo (${
                    Array.from(new Set([...wrongQuestionIds, ...bookmarkedQuestionIds]))
                      .length
                  })`
                : `오답 + 북마크 전체 (${
                    Array.from(new Set([...wrongQuestionIds, ...bookmarkedQuestionIds]))
                      .length
                  })`,
            },
            {
              id: 'wrong',
              label: isEs
                ? `Errores (${wrongQuestionIds.length})`
                : `오답 문항 (${wrongQuestionIds.length})`,
            },
            {
              id: 'bookmarked',
              label: isEs
                ? `Guardados (${bookmarkedQuestionIds.length})`
                : `북마크 문항 (${bookmarkedQuestionIds.length})`,
            },
          ].map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id as 'wrong' | 'bookmarked' | 'combined')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                tab === t.id
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Empty State */}
      {items.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-xl p-10 text-center space-y-2">
          <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
          <h3 className="text-base font-bold text-slate-900">
            {isEs
              ? 'No hay preguntas equivocadas ni guardadas en este momento.'
              : '현재 등록된 오답 또는 북마크 문항이 없습니다.'}
          </h3>
          <p className="text-xs text-slate-500">
            {isEs
              ? 'Las preguntas incorrectas durante el examen se guardarán automáticamente aquí.'
              : '문제 풀이 중 틀린 문항은 자동으로 이곳에 기록되며, 중요한 조항은 ‘북마크’를 눌러 추가할 수 있습니다.'}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {items.map((q) => {
            const isWrong = wrongQuestionIds.includes(q.id);
            const isBookmarked = bookmarkedQuestionIds.includes(q.id);

            return (
              <div
                key={q.id}
                onClick={() => onSelectClause(q.clauseId)}
                className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 space-y-3 hover:border-slate-300 transition-colors cursor-pointer"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                      <span className="font-mono-num font-bold text-slate-900">
                        {isEs ? `Pregunta ${q.id}` : `문항 ${q.id}`}
                      </span>
                      <span>·</span>
                      <span>
                        [{q.clauseId}] {q.clauseTitle}
                      </span>
                      {isWrong && (
                        <>
                          <span>·</span>
                          <span className="text-red-700 font-semibold flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3" />
                            {isEs ? 'Incorrecta' : '오답 기록됨'}
                          </span>
                        </>
                      )}
                      {isBookmarked && (
                        <>
                          <span>·</span>
                          <span className="text-amber-700 font-semibold flex items-center gap-1">
                            <Bookmark className="w-3 h-3" />
                            {isEs ? 'Guardada' : '북마크됨'}
                          </span>
                        </>
                      )}
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 mt-1 break-keep">
                      {q.prompt}
                    </h4>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onStartRetryPool([q.id]);
                      }}
                      className="px-2.5 py-1 text-xs font-medium text-sky-800 bg-sky-50 border border-sky-200 rounded-md hover:bg-sky-100 transition-colors whitespace-nowrap shrink-0"
                    >
                      {isEs ? 'Practicar ahora' : '이 문제 다시 풀기'}
                    </button>
                    {isWrong && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onRemoveWrong(q.id);
                        }}
                        className="px-2.5 py-1 text-xs font-medium text-slate-600 bg-slate-100 rounded-md hover:bg-slate-200 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1"
                      >
                        <Trash2 className="w-3 h-3" />
                        {isEs ? 'Quitar de errores' : '숙지 완료 제외'}
                      </button>
                    )}
                    {isBookmarked && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleBookmark(q.id);
                        }}
                        className="px-2.5 py-1 text-xs font-medium text-amber-800 bg-amber-50 border border-amber-200 rounded-md hover:bg-amber-100 transition-colors whitespace-nowrap shrink-0"
                      >
                        {isEs ? 'Quitar marcador' : '북마크 해제'}
                      </button>
                    )}
                  </div>
                </div>

                {/* Verbatim Standard Box */}
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-slate-700">
                      {isEs
                        ? 'Texto Original Exacto'
                        : '원문 기준 조항 (무변형 원문)'}
                    </span>
                    <span className="text-sky-700 flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      {isEs ? 'Ver en visor' : '우측 원문 뷰어 연동'}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-900 whitespace-pre-line leading-relaxed break-keep">
                    {q.verbatimQuote}
                  </p>
                  <p className="text-xs text-slate-600 pt-1 border-t border-slate-200/70 break-keep">
                    {isEs ? 'Punto clave: ' : '핵심 포인트: '}
                    {q.verificationNote}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
