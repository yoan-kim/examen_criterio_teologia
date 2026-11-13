import React, { useState } from 'react';
import { CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import {
  ChapterId,
  DOCUMENT_HEADER,
  REGULATION_CHAPTERS,
} from '../data/regulationData';
import {
  DOCUMENT_HEADER_ES,
  REGULATION_CHAPTERS_ES,
} from '../data/regulationDataEs';
import { KEY_STANDARDS_MATRIX_ES, Language } from '../data/i18n';

interface FullRegulationViewProps {
  lang: Language;
  activeClauseId: string | null;
  onSelectClause: (clauseId: string) => void;
  masteredClauseIds: string[];
  onToggleClauseMastery: (clauseId: string) => void;
  onStartChapterQuiz: (chapterId: ChapterId | 'all') => void;
}

export const FullRegulationView: React.FC<FullRegulationViewProps> = ({
  lang,
  activeClauseId,
  onSelectClause,
  masteredClauseIds,
  onToggleClauseMastery,
  onStartChapterQuiz,
}) => {
  const [selectedChapter, setSelectedChapter] = useState<ChapterId | 'all'>('all');

  const isEs = lang === 'es';
  const docHeader = isEs ? DOCUMENT_HEADER_ES : DOCUMENT_HEADER;
  const chapters = isEs ? REGULATION_CHAPTERS_ES : REGULATION_CHAPTERS;

  const filteredChapters =
    selectedChapter === 'all'
      ? chapters
      : chapters.filter((ch) => ch.id === selectedChapter);

  const keyStandardsMatrixKo = [
    {
      category: '1. 개강 기준',
      item: '정규반 / 비정규반',
      standard:
        '정규반: 주 3회 이상 대면 필수 / 초·중·고 전 과정 100% 대면 진행 · 비정규반: 정규반 외 모든 과정(주 2회 대면, 비대면반)',
    },
    {
      category: '1. 개강 기준',
      item: '수업 일수 및 단서',
      standard:
        '초등, 중등, 고등 과정을 합산하여 총 96일 이상 수강 필수 (단, 고등 과정의 전 교육 내용을 이수하지 않은 경우, 단순 수강 일수 충족만으로는 종강 처리가 불가함)',
    },
    {
      category: '1. 개강 기준',
      item: '비대면반 및 보강',
      standard:
        '실시간 라이브 수강(녹화본 시청 불가), 화면 활성화 필수(예외: 사전 승인 + 대체 과제 제출, 교회 신학부장 관리 감독) · 보강: 전도사 주관하에 본 수업 내용으로 40분 이상 진행(상시 강의 재생 금지)',
    },
    {
      category: '2. 등록 기준',
      item: '등록 정의 및 연령/절차',
      standard:
        '웹센터 입력 시 등록 취소 불가, 등록 후 결석자는 탈락 처리 · 만 12세 이상, 등록 전날까지 수강신청서 본인 직접 작성 및 면접 합격자(불가피한 경우 개강 후 7일까지 가능)',
    },
    {
      category: '2. 등록 기준',
      item: '학생회(만 12~17세) 3조건',
      standard:
        '① 신천지교회 입교한 자 ② 등록 전까지 ‘법정대리인동의서’ 제출 ③ 최근 3개월간 주일예배 출석률 90% 이상 (3가지 모두 충족)',
    },
    {
      category: '2. 등록 기준',
      item: '재수강자 및 등록 기한/불가',
      standard:
        "입교 후 사고 처리자: 등록 전까지 '선교센터재수강요청서’ 제출 · 재수강 3회 이상자 및 인도자: 등록 전까지 ‘다짐서’ 제출 · 개강일 기준 4개월 입력(말일 마지막 이틀 불가 시 말일 기준 2일 전 앞당김) · 개강 후 9회 이상 결석자 등록 불가(8회 이하만 가능)",
    },
    {
      category: '3. 종강 기준',
      item: '출석 및 종강 시험',
      standard:
        '등록 후 종강까지 총 8회 이하 결석(9회 이상 시 해당 교회 소속 부서 협의 후 교회담임 결정하에 가능) · 초중고 종강 시험 합격 및 새신자 교육 이수(미달 예외: 문맹자, 만 60세 이상, 환자 등 학습능력 부족자, 가족이 전도한 경우)',
    },
    {
      category: '3. 종강 기준',
      item: '예배 출석 및 미달자 절차',
      standard:
        "고등 과정 시작 후 주일예배 8회 이상(월요일 대체 인정, 반드시 '예배 형식', 간판교체 교회는 담당 목회자가 '복음방 교사' 이상 시 인정) · 미달자: 입교 부서 회장 소견서 제출 → 총회 신학부 승인(기수 종강 최소 3일 전 그룹웨어 일반보고서 보고)",
    },
    {
      category: '3. 종강 기준',
      item: '입교 심의 및 재입교자 요건',
      standard:
        "종강 전 입교 심의 필수(1:1 원칙, 다수 시 그룹 허용, 각 회 구역장 이상 사명자) · 공통: 교적부(입교다짐서 포함) · 재입교자: 자필 다짐서 + 본인 직접 섭외 선교센터 1명 이상 등록(종강 3일 전까지 재입교요청서 총회 보고 및 웹센터 열매 입력 완료, 미충족 시 '유급' 또는 '탈락')",
    },
  ];

  const keyStandardsMatrix = isEs ? KEY_STANDARDS_MATRIX_ES : keyStandardsMatrixKo;

  return (
    <div className="space-y-5 sm:space-y-6">
      {/* Study Intro & Action Card */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <FileText className="w-3.5 h-3.5 text-sky-700 shrink-0" />
              <span>
                {isEs
                  ? 'PASO 1: Estudio del Texto Original'
                  : '1단계: 원문 정독 학습 탭'}
              </span>
              <span>·</span>
              <span>{docHeader.effectiveDate}</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 break-keep">
              {docHeader.title}
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed break-keep">
              {isEs
                ? 'Antes de realizar el examen práctico, lee atentamente el texto original sin modificaciones y aprende las cifras y requisitos exactos.'
                : '실전 문제를 풀기 전에 아래 원문 기준을 차근차근 읽으며 수치와 조건들을 익혀보세요. 읽은 조항은 우측의 ‘정독 완료’를 눌러 표시할 수 있습니다.'}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onStartChapterQuiz('all')}
            className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-sky-700 rounded-xl hover:bg-sky-800 transition-colors w-full sm:w-auto shrink-0 flex items-center justify-center gap-1.5"
          >
            {isEs ? 'Iniciar Examen Práctico' : '실전 문제 풀이 시작하기'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Chapter Filter Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5">
            {(isEs
              ? [
                  { id: 'all', label: 'Todo el texto (1~3)' },
                  { id: '1', label: '1. Apertura' },
                  { id: '2', label: '2. Inscripción' },
                  { id: '3', label: '3. Fin de semestre' },
                ]
              : [
                  { id: 'all', label: '전체 원문 보기 (1~3장)' },
                  { id: '1', label: '1. 개강 기준' },
                  { id: '2', label: '2. 등록 기준' },
                  { id: '3', label: '3. 종강 기준' },
                ]
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedChapter(tab.id as ChapterId | 'all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  selectedChapter === tab.id
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <span className="text-xs font-mono-num text-slate-500">
            {isEs
              ? `Lectura completada: ${masteredClauseIds.length} / 13 secciones`
              : `정독 체크: ${masteredClauseIds.length} / 13개 항 완료`}
          </span>
        </div>
      </div>

      {/* Verbatim Chapters List */}
      <div className="space-y-5">
        {filteredChapters.map((chapter) => (
          <div
            key={chapter.id}
            className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                {chapter.numberText} {chapter.title}
              </h3>
              <button
                type="button"
                onClick={() => onStartChapterQuiz(chapter.id)}
                className="px-3 py-1.5 text-xs font-semibold text-sky-800 bg-sky-50 border border-sky-200 rounded-lg hover:bg-sky-100 transition-colors w-fit shrink-0"
              >
                {isEs
                  ? `Ir al examen de ${chapter.title} →`
                  : `${chapter.title} 실전 문제 풀기 →`}
              </button>
            </div>

            <div className="space-y-3">
              {chapter.clauses.map((clause) => {
                const isMastered = masteredClauseIds.includes(clause.id);
                const isSelected = activeClauseId === clause.id;

                return (
                  <div
                    key={clause.id}
                    onClick={() => onSelectClause(clause.id)}
                    className={`p-3.5 sm:p-4 rounded-xl border transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-sky-50/40 border-sky-600'
                        : 'bg-slate-50/40 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 break-keep">
                        {clause.clauseNumber} {clause.title}
                      </h4>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleClauseMastery(clause.id);
                        }}
                        className={`px-2.5 py-1 text-xs font-medium rounded-md border transition-colors shrink-0 flex items-center gap-1 ${
                          isMastered
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {isMastered
                          ? isEs
                            ? 'Lectura completada'
                            : '정독 완료됨'
                          : isEs
                          ? 'Marcar como leído'
                          : '정독 완료 체크'}
                      </button>
                    </div>

                    <div className="space-y-2 text-sm leading-7 text-slate-800">
                      {clause.lines.map((line) => (
                        <div key={line.id} className="flex items-baseline gap-2">
                          {line.prefix && (
                            <span className="font-mono-num text-xs font-semibold text-slate-500 shrink-0">
                              {line.prefix}
                            </span>
                          )}
                          <p className="break-keep">
                            {line.blindSegments.map((seg, idx) =>
                              seg.isBlank ? (
                                <span
                                  key={idx}
                                  className="font-semibold text-sky-900 bg-sky-100/80 px-1 py-0.5 rounded"
                                >
                                  {seg.text}
                                </span>
                              ) : (
                                <span key={idx}>{seg.text}</span>
                              )
                            )}
                          </p>
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

      {/* Verbatim Numerical & Document Summary Table */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 space-y-4">
        <div>
          <h3 className="text-base font-bold text-slate-900">
            {isEs
              ? 'Tabla Resumen de Cifras, Plazos y Documentos Clave'
              : '핵심 수치 · 기한 · 제출 서류 한눈에 보기 요약표'}
          </h3>
          <p className="text-xs text-slate-500 mt-0.5 break-keep">
            {isEs
              ? 'Extracto literal de los números, plazos y formularios obligatorios del reglamento.'
              : '등록 가능 여부 및 종강 심의 시 혼동하기 쉬운 숫자와 필수 서류만 원문 그대로 발췌한 요약표입니다.'}
          </p>
        </div>

        <div className="overflow-x-auto border border-slate-200 rounded-lg">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-700">
                <th className="py-2.5 px-3 font-semibold whitespace-nowrap">
                  {isEs ? 'Categoría' : '구분'}
                </th>
                <th className="py-2.5 px-3 font-semibold whitespace-nowrap">
                  {isEs ? 'Elemento' : '항목'}
                </th>
                <th className="py-2.5 px-3 font-semibold">
                  {isEs ? 'Criterio del Texto Original' : '원문 기준 내용'}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-800">
              {keyStandardsMatrix.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/70">
                  <td className="py-3 px-3 font-mono-num font-semibold text-slate-900 whitespace-nowrap align-top">
                    {row.category}
                  </td>
                  <td className="py-3 px-3 font-semibold text-sky-900 whitespace-nowrap align-top">
                    {row.item}
                  </td>
                  <td className="py-3 px-3 leading-relaxed break-keep align-top">
                    {row.standard}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom CTA to jump to Quiz */}
        <div className="pt-2 flex justify-end">
          <button
            type="button"
            onClick={() => onStartChapterQuiz('all')}
            className="w-full sm:w-auto px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
          >
            {isEs
              ? 'Ir al Examen Práctico (Básico · Intermedio · Avanzado)'
              : '원문 학습을 마쳤다면 실전 문제 풀이(초·중·고급) 도전하기'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
