import React, { useEffect, useRef } from 'react';
import { BookOpen, CheckCircle2, Eye } from 'lucide-react';
import {
  DOCUMENT_HEADER,
  REGULATION_CHAPTERS,
  QUIZ_QUESTIONS,
} from '../data/regulationData';
import {
  DOCUMENT_HEADER_ES,
  REGULATION_CHAPTERS_ES,
  QUIZ_QUESTIONS_ES,
} from '../data/regulationDataEs';
import { Language } from '../data/i18n';

interface ReferenceDeckProps {
  lang: Language;
  activeClauseId: string | null;
  onSelectClause: (clauseId: string) => void;
  solvedQuestionIds: number[];
  wrongQuestionIds: number[];
  masteredClauseIds: string[];
  onToggleClauseMastery: (clauseId: string) => void;
  hideDuringQuiz: boolean;
  onToggleHideDuringQuiz: () => void;
}

export const ReferenceDeck: React.FC<ReferenceDeckProps> = ({
  lang,
  activeClauseId,
  onSelectClause,
  solvedQuestionIds,
  wrongQuestionIds,
  masteredClauseIds,
  onToggleClauseMastery,
  hideDuringQuiz,
  onToggleHideDuringQuiz,
}) => {
  const clauseRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const isEs = lang === 'es';
  const docHeader = isEs ? DOCUMENT_HEADER_ES : DOCUMENT_HEADER;
  const chapters = isEs ? REGULATION_CHAPTERS_ES : REGULATION_CHAPTERS;
  const questions = isEs ? QUIZ_QUESTIONS_ES : QUIZ_QUESTIONS;

  useEffect(() => {
    if (activeClauseId && clauseRefs.current[activeClauseId] && !hideDuringQuiz) {
      clauseRefs.current[activeClauseId]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [activeClauseId, hideDuringQuiz]);

  const getClauseStats = (clauseId: string) => {
    const related = questions.filter((q) => q.clauseId === clauseId);
    const solved = related.filter((q) => solvedQuestionIds.includes(q.id)).length;
    const wrong = related.filter((q) => wrongQuestionIds.includes(q.id)).length;
    return { total: related.length, solved, wrong };
  };

  return (
    <aside className="flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-slate-200 flex items-center justify-between gap-3 bg-slate-50/70">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-sky-700 shrink-0" />
            <h2 className="text-sm font-semibold text-slate-900 truncate">
              {isEs
                ? 'Visor de Texto Original en Tiempo Real'
                : '실시간 원문 조항 대조 뷰어'}
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-0.5 truncate">
            {docHeader.title} · {docHeader.effectiveDate}
          </p>
        </div>
        <button
          type="button"
          onClick={onToggleHideDuringQuiz}
          className="px-2.5 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
        >
          <Eye className="w-3.5 h-3.5 text-slate-500" />
          {hideDuringQuiz
            ? isEs
              ? 'Mostrar texto'
              : '원문 펼치기'
            : isEs
            ? 'Ocultar en examen'
            : '시험 중 가리기'}
        </button>
      </div>

      {/* Clause Minimap Bar */}
      <div className="px-4 py-3 border-b border-slate-200 bg-white">
        <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
          <span>
            {isEs
              ? 'Acceso directo por cláusula'
              : '조항별 바로가기 (클릭 시 원문 위치 이동)'}
          </span>
          <span className="font-mono-num">
            {isEs
              ? `Dominado ${masteredClauseIds.length}/13`
              : `숙지 완료 ${masteredClauseIds.length}/13개 항`}
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {chapters.flatMap((ch) =>
            ch.clauses.map((clause) => {
              const isSelected = activeClauseId === clause.id;
              const stats = getClauseStats(clause.id);
              const isAllSolved = stats.total > 0 && stats.solved === stats.total;
              const hasWrong = stats.wrong > 0;

              return (
                <button
                  key={clause.id}
                  type="button"
                  onClick={() => onSelectClause(clause.id)}
                  className={`px-2 py-1 text-xs font-mono-num rounded-md border transition-colors whitespace-nowrap shrink-0 ${
                    isSelected
                      ? 'bg-sky-700 text-white border-sky-700 font-semibold'
                      : hasWrong
                      ? 'bg-red-50 text-red-700 border-red-200 hover:bg-red-100'
                      : isAllSolved
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                  title={`${ch.numberText} ${ch.title} > ${clause.clauseNumber} ${clause.title}`}
                >
                  {isEs ? `${ch.id}.${clause.clauseNumber.replace('.', '')}` : `${clause.id}항`}
                </button>
              );
            })
          )}
        </div>
      </div>

      {/* Verbatim Content Body */}
      {hideDuringQuiz ? (
        <div className="p-8 text-center">
          <p className="text-sm font-medium text-slate-700">
            {isEs
              ? 'El visor del texto original está oculto durante la evaluación.'
              : '실전 암기 점검을 위해 원문 뷰어를 잠시 가렸습니다.'}
          </p>
          <p className="text-xs text-slate-500 mt-1">
            {isEs
              ? 'Haz clic en «Mostrar texto» arriba para comparar con el documento original.'
              : '문제를 푼 뒤 상단의 ‘원문 펼치기’를 누르면 출제 조항 원문을 즉시 대조할 수 있습니다.'}
          </p>
          <button
            type="button"
            onClick={onToggleHideDuringQuiz}
            className="mt-4 px-4 py-2 text-xs font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
          >
            {isEs ? 'Volver a mostrar el texto original' : '원문 대조 다시 켜기'}
          </button>
        </div>
      ) : (
        <div className="p-4 space-y-6 max-h-[calc(100vh-250px)] overflow-y-auto">
          {chapters.map((chapter) => (
            <div key={chapter.id} className="space-y-3">
              <div className="pb-1.5 border-b border-slate-200 flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900">
                  {chapter.numberText} {chapter.title}
                </h3>
                <span className="text-xs text-slate-500 font-mono-num">
                  {chapter.clauses.length} {isEs ? 'secciones' : '개 조항'}
                </span>
              </div>

              <div className="space-y-3">
                {chapter.clauses.map((clause) => {
                  const isHighlighted = activeClauseId === clause.id;
                  const isMastered = masteredClauseIds.includes(clause.id);
                  const stats = getClauseStats(clause.id);

                  return (
                    <div
                      key={clause.id}
                      ref={(el) => {
                        clauseRefs.current[clause.id] = el;
                      }}
                      onClick={() => onSelectClause(clause.id)}
                      className={`p-3.5 rounded-lg border transition-all cursor-pointer ${
                        isHighlighted
                          ? 'bg-sky-50/70 border-sky-600 shadow-xs'
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
                            <span className="font-mono-num font-semibold text-slate-700">
                              [{clause.id}]
                            </span>
                            <span>·</span>
                            <span className="font-mono-num">
                              {isEs
                                ? `Preguntas ${stats.solved}/${stats.total}`
                                : `연관 문항 ${stats.solved}/${stats.total} 완료`}
                            </span>
                            {isHighlighted && (
                              <>
                                <span>·</span>
                                <span className="text-sky-700 font-semibold">
                                  {isEs ? 'Sección actual' : '현재 대조 조항'}
                                </span>
                              </>
                            )}
                          </div>
                          <h4 className="text-sm font-semibold text-slate-900 mt-0.5 break-keep">
                            {clause.clauseNumber} {clause.title}
                          </h4>
                        </div>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleClauseMastery(clause.id);
                          }}
                          className={`px-2 py-1 text-xs font-medium rounded border transition-colors whitespace-nowrap shrink-0 flex items-center gap-1 ${
                            isMastered
                              ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                              : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          <CheckCircle2 className="w-3 h-3" />
                          {isMastered
                            ? isEs
                              ? 'Leído'
                              : '암기됨'
                            : isEs
                            ? 'Marcar'
                            : '암기 체크'}
                        </button>
                      </div>

                      <div className="space-y-1.5 text-xs leading-relaxed text-slate-700">
                        {clause.lines.map((line) => (
                          <div key={line.id} className="flex items-start gap-1.5">
                            {line.prefix && (
                              <span className="font-mono-num text-slate-500 shrink-0 select-none">
                                {line.prefix}
                              </span>
                            )}
                            <span className="break-keep">{line.verbatimText}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
};
