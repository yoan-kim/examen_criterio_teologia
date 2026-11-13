import React, { useState } from 'react';
import { Eye, EyeOff, CheckCircle2 } from 'lucide-react';
import {
  ChapterId,
  DOCUMENT_HEADER,
  REGULATION_CHAPTERS,
} from '../data/regulationData';
import {
  DOCUMENT_HEADER_ES,
  REGULATION_CHAPTERS_ES,
} from '../data/regulationDataEs';
import { Language } from '../data/i18n';

interface BlindMemorizerProps {
  lang: Language;
  activeClauseId: string | null;
  onSelectClause: (clauseId: string) => void;
  masteredClauseIds: string[];
  onToggleClauseMastery: (clauseId: string) => void;
  onStartChapterQuiz: (chapterId: ChapterId | 'all') => void;
}

export const BlindMemorizer: React.FC<BlindMemorizerProps> = ({
  lang,
  activeClauseId,
  onSelectClause,
  masteredClauseIds,
  onToggleClauseMastery,
  onStartChapterQuiz,
}) => {
  const [selectedChapter, setSelectedChapter] = useState<ChapterId | 'all'>('all');
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});
  const [blindMode, setBlindMode] = useState<'blind' | 'revealAll'>('blind');

  const isEs = lang === 'es';
  const docHeader = isEs ? DOCUMENT_HEADER_ES : DOCUMENT_HEADER;
  const chapters = isEs ? REGULATION_CHAPTERS_ES : REGULATION_CHAPTERS;

  const allBlankIds = chapters.flatMap((ch) =>
    ch.clauses.flatMap((cl) =>
      cl.lines.flatMap((ln) =>
        ln.blindSegments.filter((seg) => seg.isBlank && seg.id).map((seg) => seg.id!)
      )
    )
  );

  const toggleBlank = (id: string) => {
    if (blindMode === 'revealAll') {
      setBlindMode('blind');
    }
    setRevealedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleRevealAll = () => {
    setBlindMode('revealAll');
    const next: Record<string, boolean> = {};
    allBlankIds.forEach((id) => {
      next[id] = true;
    });
    setRevealedIds(next);
  };

  const handleHideAll = () => {
    setBlindMode('blind');
    setRevealedIds({});
  };

  const filteredChapters =
    selectedChapter === 'all'
      ? chapters
      : chapters.filter((ch) => ch.id === selectedChapter);

  const revealedCount = Object.values(revealedIds).filter(Boolean).length;

  return (
    <div className="space-y-5 sm:space-y-6">
      {/* Control Header Card */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span>
                {isEs
                  ? 'Memorización Ciega del Texto Original'
                  : '원문 무변형 블라인드 암기장'}
              </span>
              <span>·</span>
              <span>{docHeader.effectiveDate}</span>
              <span>·</span>
              <span className="font-mono-num">
                {isEs
                  ? `Espacios revelados: ${revealedCount}/${allBlankIds.length}`
                  : `핵심 빈칸 ${revealedCount}/${allBlankIds.length}개 확인됨`}
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mt-1 break-keep">
              {docHeader.title}
            </h2>
            <p className="text-xs text-slate-600 mt-1 break-keep">
              {isEs
                ? 'Haz clic en los recuadros oscuros para revelar u ocultar las palabras clave y cifras exactas del reglamento.'
                : '원문 문장을 한 글자도 바꾸지 않고 핵심 수치·서류·조건만 가렸습니다. 가려진 박스를 클릭하여 정확히 암기했는지 스스로 점검하세요.'}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleHideAll}
              className="px-3.5 py-2 text-xs font-medium text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <EyeOff className="w-3.5 h-3.5" />
              {isEs ? 'Ocultar todo' : '빈칸 모두 가리기'}
            </button>
            <button
              type="button"
              onClick={handleRevealAll}
              className="px-3.5 py-2 text-xs font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5" />
              {isEs ? 'Mostrar todo' : '정답 모두 보이기'}
            </button>
          </div>
        </div>

        {/* Chapter Filter & Quick Quiz Trigger */}
        <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg">
            {(isEs
              ? [
                  { id: 'all', label: 'Todo (1~3)' },
                  { id: '1', label: '1. Apertura' },
                  { id: '2', label: '2. Inscripción' },
                  { id: '3', label: '3. Fin de semestre' },
                ]
              : [
                  { id: 'all', label: '전체 조항 (1~3장)' },
                  { id: '1', label: '1. 개강 기준' },
                  { id: '2', label: '2. 등록 기준' },
                  { id: '3', label: '3. 종강 기준' },
                ]
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedChapter(tab.id as ChapterId | 'all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  selectedChapter === tab.id
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => onStartChapterQuiz(selectedChapter)}
            className="px-3.5 py-2 text-xs font-semibold text-sky-800 bg-sky-50 border border-sky-200 rounded-lg hover:bg-sky-100 transition-colors w-fit shrink-0"
          >
            {isEs
              ? 'Ir al examen práctico de esta sección →'
              : '현재 파트 문제 풀이로 바로 검증하기 →'}
          </button>
        </div>
      </div>

      {/* Chapters & Clauses */}
      <div className="space-y-6">
        {filteredChapters.map((chapter) => (
          <section
            key={chapter.id}
            className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 space-y-5"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h3 className="text-base font-bold text-slate-900">
                {chapter.numberText} {chapter.title}
              </h3>
              <button
                type="button"
                onClick={() => onStartChapterQuiz(chapter.id)}
                className="text-xs font-medium text-sky-700 hover:underline whitespace-nowrap shrink-0"
              >
                {isEs ? 'Resolver preguntas' : `${chapter.title} 문제 풀기`}
              </button>
            </div>

            <div className="space-y-4">
              {chapter.clauses.map((clause) => {
                const isMastered = masteredClauseIds.includes(clause.id);
                const isSelected = activeClauseId === clause.id;

                const clauseBlankIds = clause.lines.flatMap((ln) =>
                  ln.blindSegments
                    .filter((s) => s.isBlank && s.id)
                    .map((s) => s.id!)
                );
                const allClauseRevealed =
                  clauseBlankIds.length > 0 &&
                  clauseBlankIds.every((id) => revealedIds[id]);

                const toggleClauseBlanks = () => {
                  const next = { ...revealedIds };
                  clauseBlankIds.forEach((id) => {
                    next[id] = !allClauseRevealed;
                  });
                  setRevealedIds(next);
                };

                return (
                  <div
                    key={clause.id}
                    onClick={() => onSelectClause(clause.id)}
                    className={`p-3.5 sm:p-4 rounded-xl border transition-colors ${
                      isSelected
                        ? 'border-sky-600 bg-sky-50/30'
                        : 'border-slate-200 bg-slate-50/40 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-mono-num text-xs font-semibold text-slate-500">
                          [{clause.id}]
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 break-keep">
                          {clause.clauseNumber} {clause.title}
                        </h4>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleClauseBlanks();
                          }}
                          className="px-2.5 py-1 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-md hover:bg-slate-100 transition-colors whitespace-nowrap shrink-0"
                        >
                          {allClauseRevealed
                            ? isEs
                              ? 'Ocultar sección'
                              : '이 조항 가리기'
                            : isEs
                            ? 'Mostrar sección'
                            : '이 조항 정답 보기'}
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleClauseMastery(clause.id);
                          }}
                          className={`px-2.5 py-1 text-xs font-medium rounded-md border transition-colors whitespace-nowrap shrink-0 flex items-center gap-1 ${
                            isMastered
                              ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {isMastered
                            ? isEs
                              ? 'Memorizado'
                              : '암기 완료됨'
                            : isEs
                            ? 'Marcar'
                            : '암기 완료 체크'}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2.5 text-sm leading-7 text-slate-800">
                      {clause.lines.map((line) => (
                        <div key={line.id} className="flex items-baseline gap-2">
                          {line.prefix && (
                            <span className="font-mono-num text-xs font-semibold text-slate-500 shrink-0 select-none">
                              {line.prefix}
                            </span>
                          )}
                          <p className="break-keep">
                            {line.blindSegments.map((seg, idx) => {
                              if (!seg.isBlank || !seg.id) {
                                return <span key={idx}>{seg.text}</span>;
                              }
                              const isShown =
                                blindMode === 'revealAll' || !!revealedIds[seg.id];

                              return (
                                <button
                                  key={seg.id}
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleBlank(seg.id!);
                                  }}
                                  className={`mx-1 my-0.5 px-2 py-0.5 rounded-md font-semibold text-xs sm:text-sm transition-all inline-flex items-center align-baseline border text-left ${
                                    isShown
                                      ? 'bg-sky-50 text-sky-900 border-sky-300'
                                      : 'bg-slate-800 text-transparent border-slate-800 hover:bg-slate-700 select-none'
                                  }`}
                                  title={
                                    isShown
                                      ? isEs
                                        ? 'Clic para ocultar'
                                        : '클릭하여 다시 가리기'
                                      : isEs
                                      ? 'Clic para revelar'
                                      : '클릭하여 원문 확인'
                                  }
                                >
                                  {seg.text}
                                </button>
                              );
                            })}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
