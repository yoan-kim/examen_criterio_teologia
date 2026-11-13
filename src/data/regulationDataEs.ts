import { RegulationChapter, QuizQuestion } from './regulationData';

export const DOCUMENT_HEADER_ES = {
  title: 'Criterios de apertura, inscripción y finalización del curso del Centro de Misión (en el extranjero)',
  effectiveDate: '(A fecha de 7 de mayo de S43(2026))',
};

export const REGULATION_CHAPTERS_ES: RegulationChapter[] = [
  {
    id: '1',
    numberText: '1.',
    title: 'Criterios de apertura',
    clauses: [
      {
        id: '1-1',
        chapterId: '1',
        clauseNumber: 'A.',
        title: 'Clasificación de los cursos',
        lines: [
          {
            id: '1-1-1',
            prefix: '1)',
            verbatimText:
              'Clase regular: Asistencia presencial obligatoria al menos 3 veces por semana (días asignados según las circunstancias) / Instrucción 100% presencial para todo el plan de estudios del nivel básico, intermedio y avanzado',
            blindSegments: [
              { text: 'Clase regular: Asistencia presencial obligatoria ' },
              { text: 'al menos 3 veces por semana', isBlank: true, id: 'b-1-1-1a' },
              { text: ' (días asignados según las circunstancias) / Instrucción ' },
              { text: '100% presencial', isBlank: true, id: 'b-1-1-1b' },
              { text: ' para todo el plan de estudios del nivel básico, intermedio y avanzado' },
            ],
          },
          {
            id: '1-1-2',
            prefix: '2)',
            verbatimText:
              'Clases no regulares: Todos los cursos que no sean clases regulares (presenciales dos veces por semana, clases en línea)',
            blindSegments: [
              { text: 'Clases no regulares: ' },
              { text: 'Todos los cursos que no sean clases regulares', isBlank: true, id: 'b-1-1-2a' },
              { text: ' (' },
              { text: 'presenciales dos veces por semana, clases en línea', isBlank: true, id: 'b-1-1-2b' },
              { text: ')' },
            ],
          },
        ],
      },
      {
        id: '1-2',
        chapterId: '1',
        clauseNumber: 'B.',
        title: 'Días de clase',
        lines: [
          {
            id: '1-2-1',
            verbatimText:
              'La asistencia a un total de al menos 96 días es obligatoria para todos los cursos de primaria, secundaria y bachillerato.',
            blindSegments: [
              { text: 'La asistencia a un total de ' },
              { text: 'al menos 96 días', isBlank: true, id: 'b-1-2-1a' },
              { text: ' es obligatoria para todos los cursos de primaria, secundaria y bachillerato.' },
            ],
          },
          {
            id: '1-2-2',
            verbatimText:
              '(Sin embargo, si no se ha completado el programa completo del nivel avanzado, el simple hecho de cumplir con el requisito de asistencia no lo considerará finalizado).',
            blindSegments: [
              { text: '(Sin embargo, si no se ha completado el ' },
              { text: 'programa completo del nivel avanzado', isBlank: true, id: 'b-1-2-2a' },
              { text: ', el simple hecho de cumplir con el requisito de asistencia ' },
              { text: 'no lo considerará finalizado', isBlank: true, id: 'b-1-2-2b' },
              { text: ').' },
            ],
          },
        ],
      },
      {
        id: '1-3',
        chapterId: '1',
        clauseNumber: 'C.',
        title: 'Criterios para la apertura de clases no regulares',
        lines: [
          {
            id: '1-3-1',
            prefix: '1)',
            verbatimText: 'Funcionamiento del curso: Separado de las clases regulares.',
            blindSegments: [
              { text: 'Funcionamiento del curso: ' },
              { text: 'Separado de las clases regulares', isBlank: true, id: 'b-1-3-1a' },
              { text: '.' },
            ],
          },
          {
            id: '1-3-2',
            prefix: '2)',
            verbatimText: 'Número de clases: Se gestiona a discreción de la tribu.',
            blindSegments: [
              { text: 'Número de clases: Se gestiona ' },
              { text: 'a discreción de la tribu', isBlank: true, id: 'b-1-3-2a' },
              { text: '.' },
            ],
          },
        ],
      },
      {
        id: '1-4',
        chapterId: '1',
        clauseNumber: 'D.',
        title: 'Criterios para la apertura de clases no presenciales',
        lines: [
          {
            id: '1-4-1',
            prefix: '1)',
            verbatimText:
              'Metodología del curso: Instrucción en vivo en tiempo real (No se pueden ver los videos grabados / No es obligatorio asistir a clases presenciales).',
            blindSegments: [
              { text: 'Metodología del curso: ' },
              { text: 'Instrucción en vivo en tiempo real', isBlank: true, id: 'b-1-4-1a' },
              { text: ' (' },
              { text: 'No se pueden ver los videos grabados', isBlank: true, id: 'b-1-4-1b' },
              { text: ' / ' },
              { text: 'No es obligatorio asistir a clases presenciales', isBlank: true, id: 'b-1-4-1c' },
              { text: ').' },
            ],
          },
          {
            id: '1-4-2',
            prefix: '2)',
            verbatimText: 'Criterios de pantalla y asistencia',
            blindSegments: [{ text: 'Criterios de pantalla y asistencia' }],
          },
          {
            id: '1-4-3',
            prefix: '-',
            verbatimText: 'La activación de la pantalla es obligatoria.',
            blindSegments: [
              { text: 'La activación de la pantalla es obligatoria', isBlank: true, id: 'b-1-4-3a' },
              { text: '.' },
            ],
          },
          {
            id: '1-4-4',
            prefix: '-',
            verbatimText:
              'Excepción: En caso de desactivación inevitable, se requiere autorización previa. La asistencia se registrará al entregar una tarea alternativa (apuntes de clase, etc.)',
            blindSegments: [
              { text: 'Excepción: En caso de desactivación inevitable, se requiere ' },
              { text: 'autorización previa', isBlank: true, id: 'b-1-4-4a' },
              { text: '. La asistencia se registrará al entregar una ' },
              { text: 'tarea alternativa (apuntes de clase, etc.)', isBlank: true, id: 'b-1-4-4b' },
            ],
          },
        ],
      },
      {
        id: '1-5',
        chapterId: '1',
        clauseNumber: 'E.',
        title: 'Clases de recuperación para los alumnos ausentes',
        lines: [
          {
            id: '1-5-1',
            prefix: '1)',
            verbatimText:
              'Normas de procedimiento: Impartir la clase durante al menos 40 minutos utilizando el material proporcionado, bajo la dirección de un evangelista. (Independientemente del día, la hora o el lugar; está prohibida la reproducción continua de la clase para comodidad de los estudiantes).',
            blindSegments: [
              { text: 'Normas de procedimiento: Impartir la clase durante ' },
              { text: 'al menos 40 minutos', isBlank: true, id: 'b-1-5-1a' },
              { text: ' utilizando el material proporcionado, bajo la dirección de un ' },
              { text: 'evangelista', isBlank: true, id: 'b-1-5-1b' },
              { text: '. (Independientemente del día, la hora o el lugar; ' },
              { text: 'está prohibida la reproducción continua de la clase', isBlank: true, id: 'b-1-5-1c' },
              { text: ' para comodidad de los estudiantes).' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '2',
    numberText: '2.',
    title: 'Criterios de inscripción del Centro de Misión',
    clauses: [
      {
        id: '2-1',
        chapterId: '2',
        clauseNumber: 'A.',
        title: '¿Qué es la "inscripción" de estudiantes? (Definición de términos)',
        lines: [
          {
            id: '2-1-1',
            prefix: '1)',
            verbatimText: 'Una vez ingresado al Centro Web, el registro no se puede cancelar.',
            blindSegments: [
              { text: 'Una vez ingresado al ' },
              { text: 'Centro Web', isBlank: true, id: 'b-2-1-1a' },
              { text: ', ' },
              { text: 'el registro no se puede cancelar', isBlank: true, id: 'b-2-1-1b' },
              { text: '.' },
            ],
          },
          {
            id: '2-1-2',
            prefix: '2)',
            verbatimText: 'Los estudiantes que falten después de la inscripción serán caídos.',
            blindSegments: [
              { text: 'Los estudiantes que falten después de la inscripción serán ' },
              { text: 'caídos', isBlank: true, id: 'b-2-1-2a' },
              { text: '.' },
            ],
          },
        ],
      },
      {
        id: '2-2',
        chapterId: '2',
        clauseNumber: 'B.',
        title: 'Criterios de inscripción de estudiantes',
        lines: [
          {
            id: '2-2-1',
            prefix: '1)',
            verbatimText:
              'Edad y procedimiento: Los solicitantes deben tener 12 años o más y haber completado el formulario de inscripción y aprobado la entrevista antes del día de la inscripción. (En circunstancias excepcionales, el formulario de inscripción podrá completarse hasta 7 días después del inicio del semestre).',
            blindSegments: [
              { text: 'Edad y procedimiento: Los solicitantes deben tener ' },
              { text: '12 años o más', isBlank: true, id: 'b-2-2-1a' },
              { text: ' y haber completado el formulario de inscripción y aprobado la entrevista ' },
              { text: 'antes del día de la inscripción', isBlank: true, id: 'b-2-2-1b' },
              { text: '. (En circunstancias excepcionales, el formulario de inscripción podrá completarse ' },
              { text: 'hasta 7 días después del inicio del semestre', isBlank: true, id: 'b-2-2-1c' },
              { text: ').' },
            ],
          },
          {
            id: '2-2-2',
            prefix: '2)',
            verbatimText:
              'Cumplimentación del formulario de inscripción al curso: El estudiante deberá cumplimentarlo en persona durante la entrevista.',
            blindSegments: [
              { text: 'Cumplimentación del formulario de inscripción al curso: ' },
              { text: 'El estudiante deberá cumplimentarlo en persona durante la entrevista', isBlank: true, id: 'b-2-2-2a' },
              { text: '.' },
            ],
          },
          {
            id: '2-2-3',
            prefix: '3)',
            verbatimText:
              'Requisitos de inscripción en el departamento adolescente: Edades de 12 a 17 años (Menor de edad según las leyes del país correspondiente, cumpliendo los tres criterios siguientes)',
            blindSegments: [
              { text: 'Requisitos de inscripción en el departamento adolescente: ' },
              { text: 'Edades de 12 a 17 años', isBlank: true, id: 'b-2-2-3a' },
              { text: ' (Menor de edad según las leyes del país correspondiente, ' },
              { text: 'cumpliendo los tres criterios siguientes', isBlank: true, id: 'b-2-2-3b' },
              { text: ')' },
            ],
          },
          {
            id: '2-2-3-1',
            prefix: '-',
            verbatimText: 'Quienes se han unido a la Iglesia Shincheonji',
            blindSegments: [
              { text: 'Quienes se han unido a la Iglesia Shincheonji', isBlank: true, id: 'b-2-2-3-1a' },
            ],
          },
          {
            id: '2-2-3-2',
            prefix: '-',
            verbatimText:
              'Personas que presentaron un «Formulario de consentimiento del representante legal» antes de registrarse.',
            blindSegments: [
              { text: 'Personas que presentaron un «' },
              { text: 'Formulario de consentimiento del representante legal', isBlank: true, id: 'b-2-2-3-2a' },
              { text: '» antes de registrarse.' },
            ],
          },
          {
            id: '2-2-3-3',
            prefix: '-',
            verbatimText:
              'Asistencia a los servicios religiosos dominicales del 90% o más durante los últimos 3 meses.',
            blindSegments: [
              { text: 'Asistencia a los servicios religiosos dominicales del ' },
              { text: '90% o más', isBlank: true, id: 'b-2-2-3-3a' },
              { text: ' durante los ' },
              { text: 'últimos 3 meses', isBlank: true, id: 'b-2-2-3-3b' },
              { text: '.' },
            ],
          },
          {
            id: '2-2-4',
            prefix: '4)',
            verbatimText: 'Criterios de la entrevista',
            blindSegments: [{ text: 'Criterios de la entrevista' }],
          },
          {
            id: '2-2-4-1',
            prefix: '-',
            verbatimText:
              'Aprobado: Aquellos que puedan inscribirse en el plan de estudios de primaria, secundaria y bachillerato y asistir a la iglesia afiliada al centro misionero una vez finalizado el curso.',
            blindSegments: [
              { text: 'Aprobado: Aquellos que puedan inscribirse en el ' },
              { text: 'plan de estudios de primaria, secundaria y bachillerato', isBlank: true, id: 'b-2-2-4-1a' },
              { text: ' y asistir a la ' },
              { text: 'iglesia afiliada al centro misionero', isBlank: true, id: 'b-2-2-4-1b' },
              { text: ' una vez finalizado el curso.' },
            ],
          },
          {
            id: '2-2-4-2',
            prefix: '-',
            verbatimText:
              'Criterios de descalificación: Serán descalificados los individuos con enfermedades mentales, los pacientes gravemente enfermos, los reclutas militares (o aquellos programados para alistarse), los individuos con graves problemas financieros o de pareja (delincuentes graves, ludópatas, homosexuales, bisexuales, especuladores inmobiliarios, estafas piramidales ilegales, etc.) y los estudiantes de otras regiones.',
            blindSegments: [
              { text: 'Criterios de descalificación: Serán descalificados los individuos con ' },
              { text: 'enfermedades mentales, los pacientes gravemente enfermos, los reclutas militares', isBlank: true, id: 'b-2-2-4-2a' },
              { text: ' (o aquellos programados para alistarse), los individuos con graves problemas financieros o de pareja (delincuentes graves, ludópatas, homosexuales, bisexuales, especuladores inmobiliarios, estafas piramidales ilegales, etc.) y los ' },
              { text: 'estudiantes de otras regiones', isBlank: true, id: 'b-2-2-4-2b' },
              { text: '.' },
            ],
          },
          {
            id: '2-2-5',
            prefix: '5)',
            verbatimText: 'Quienes repiten: Aquellos que cumplen con los criterios de inscripción de estudiantes.',
            blindSegments: [
              { text: 'Quienes repiten: ' },
              { text: 'Aquellos que cumplen con los criterios de inscripción de estudiantes', isBlank: true, id: 'b-2-2-5a' },
              { text: '.' },
            ],
          },
          {
            id: '2-2-5-1',
            prefix: '-',
            verbatimText:
              'Aquellos que hayan sido expulsados por un incidente después de unirse a Shincheonji deben presentar una "Solicitud de reinscripción en el Centro de la Misión" antes de registrarse.',
            blindSegments: [
              { text: 'Aquellos que hayan sido expulsados por un incidente después de unirse a Shincheonji deben presentar una "' },
              { text: 'Solicitud de reinscripción en el Centro de la Misión', isBlank: true, id: 'b-2-2-5-1a' },
              { text: '" antes de registrarse.' },
            ],
          },
          {
            id: '2-2-5-2',
            prefix: '-',
            verbatimText:
              'Los estudiantes que hayan repetido el curso tres o más veces y sus supervisores deberán presentar un "Compromiso" antes de la inscripción.',
            blindSegments: [
              { text: 'Los estudiantes que hayan repetido el curso ' },
              { text: 'tres o más veces y sus supervisores', isBlank: true, id: 'b-2-2-5-2a' },
              { text: ' deberán presentar un "' },
              { text: 'Compromiso', isBlank: true, id: 'b-2-2-5-2b' },
              { text: '" antes de la inscripción.' },
            ],
          },
        ],
      },
      {
        id: '2-3',
        chapterId: '2',
        clauseNumber: 'C.',
        title: 'Fecha límite de inscripción de estudiantes',
        lines: [
          {
            id: '2-3-1',
            verbatimText: 'Inscríbase a través del Centro Web 4 meses después de la fecha de inicio.',
            blindSegments: [
              { text: 'Inscríbase a través del Centro Web ' },
              { text: '4 meses después de la fecha de inicio', isBlank: true, id: 'b-2-3-1a' },
              { text: '.' },
            ],
          },
          {
            id: '2-3-2',
            verbatimText:
              '(Sin embargo, dado que no es posible realizar la inscripción administrativa los dos últimos días del mes, si su fecha de inscripción prevista cae dentro de este período, inscríbase dos días antes del último día).',
            blindSegments: [
              { text: '(Sin embargo, dado que no es posible realizar la inscripción administrativa ' },
              { text: 'los dos últimos días del mes', isBlank: true, id: 'b-2-3-2a' },
              { text: ', si su fecha de inscripción prevista cae dentro de este período, ' },
              { text: 'inscríbase dos días antes del último día', isBlank: true, id: 'b-2-3-2b' },
              { text: ').' },
            ],
          },
        ],
      },
      {
        id: '2-4',
        chapterId: '2',
        clauseNumber: 'D.',
        title: 'Estudiantes que no pueden registrarse',
        lines: [
          {
            id: '2-4-1',
            prefix: '-',
            verbatimText:
              'Estudiantes con 9 o más ausencias después del inicio del semestre (solo aquellos con 8 o menos ausencias son elegibles para la inscripción).',
            blindSegments: [
              { text: 'Estudiantes con ' },
              { text: '9 o más ausencias', isBlank: true, id: 'b-2-4-1a' },
              { text: ' después del inicio del semestre (solo aquellos con ' },
              { text: '8 o menos ausencias', isBlank: true, id: 'b-2-4-1b' },
              { text: ' son elegibles para la inscripción).' },
            ],
          },
          {
            id: '2-4-2',
            prefix: '-',
            verbatimText: 'Aquellos que cumplen los criterios para suspender la entrevista',
            blindSegments: [
              { text: 'Aquellos que cumplen los criterios para suspender la entrevista', isBlank: true, id: 'b-2-4-2a' },
            ],
          },
          {
            id: '2-4-3',
            prefix: '-',
            verbatimText:
              'Aquellos que toman el curso con propósitos distintos al estudio de la Palabra (como ganancias materiales o relaciones románticas).',
            blindSegments: [
              { text: 'Aquellos que toman el curso con ' },
              { text: 'propósitos distintos al estudio de la Palabra', isBlank: true, id: 'b-2-4-3a' },
              { text: ' (como ganancias materiales o relaciones románticas).' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '3',
    numberText: '3.',
    title: 'Criterios de fin de semestre del Centro de Misión',
    clauses: [
      {
        id: '3-1',
        chapterId: '3',
        clauseNumber: 'A.',
        title: 'Criterios de la asistencia y el examen final',
        lines: [
          {
            id: '3-1-1',
            prefix: '1)',
            verbatimText:
              'Número de ausencias: Aquellos con un total de 8 o menos ausencias desde la inscripción hasta el final del semestre. (Las clases de recuperación impartidas por un evangelista durante 40 minutos o más, que abarquen el contenido del curso, se consideran asistencia al centro).',
            blindSegments: [
              { text: 'Número de ausencias: Aquellos con un total de ' },
              { text: '8 o menos ausencias', isBlank: true, id: 'b-3-1-1a' },
              { text: ' desde la inscripción hasta el final del semestre. (Las clases de recuperación impartidas por un evangelista durante ' },
              { text: '40 minutos o más', isBlank: true, id: 'b-3-1-1b' },
              { text: ', que abarquen el contenido del curso, se consideran asistencia al centro).' },
            ],
          },
          {
            id: '3-1-2',
            verbatimText:
              'Sin embargo, para los estudiantes que hayan faltado 9 o más veces por circunstancias inevitables y deseen finalizar el curso, la baja es posible a discreción del pastor de la iglesia, previa consulta con el departamento eclesiástico correspondiente.',
            blindSegments: [
              { text: 'Sin embargo, para los estudiantes que hayan faltado 9 o más veces por circunstancias inevitables y deseen finalizar el curso, la baja es posible ' },
              { text: 'a discreción del pastor de la iglesia', isBlank: true, id: 'b-3-1-2a' },
              { text: ', previa consulta con el ' },
              { text: 'departamento eclesiástico correspondiente', isBlank: true, id: 'b-3-1-2b' },
              { text: '.' },
            ],
          },
          {
            id: '3-1-3',
            prefix: '2)',
            verbatimText:
              'Exámenes y Educación: Aquellos que hayan aprobado los exámenes finales de primaria, secundaria y preparatoria y hayan completado la educación para nuevos creyentes.',
            blindSegments: [
              { text: 'Exámenes y Educación: Aquellos que hayan aprobado los ' },
              { text: 'exámenes finales de primaria, secundaria y preparatoria', isBlank: true, id: 'b-3-1-3a' },
              { text: ' y hayan completado la ' },
              { text: 'educación para nuevos creyentes', isBlank: true, id: 'b-3-1-3b' },
              { text: '.' },
            ],
          },
          {
            id: '3-1-4',
            verbatimText:
              'Sin embargo, entre quienes reprobaron el examen final, aquellos que han alcanzado la iluminación y no tienen problemas con su vida religiosa pueden completar el curso. (Personas analfabetas, personas mayores de 60 años, personas con dificultades de aprendizaje como pacientes y personas evangelizadas por un familiar).',
            blindSegments: [
              { text: 'Sin embargo, entre quienes reprobaron el examen final, aquellos que ' },
              { text: 'han alcanzado la iluminación y no tienen problemas con su vida religiosa', isBlank: true, id: 'b-3-1-4a' },
              { text: ' pueden completar el curso. (' },
              { text: 'Personas analfabetas, personas mayores de 60 años, personas con dificultades de aprendizaje como pacientes y personas evangelizadas por un familiar', isBlank: true, id: 'b-3-1-4b' },
              { text: ').' },
            ],
          },
        ],
      },
      {
        id: '3-2',
        chapterId: '3',
        clauseNumber: 'B.',
        title: 'Criterios de asistencia al servicio',
        lines: [
          {
            id: '3-2-1',
            prefix: '1)',
            verbatimText:
              'Requisito de asistencia: Al menos 8 servicios dominicales después del inicio del curso de secundaria (se reconocen los servicios sustitutos de los lunes).',
            blindSegments: [
              { text: 'Requisito de asistencia: ' },
              { text: 'Al menos 8 servicios dominicales', isBlank: true, id: 'b-3-2-1a' },
              { text: ' después del inicio del curso de secundaria (se reconocen los ' },
              { text: 'servicios sustitutos de los lunes', isBlank: true, id: 'b-3-2-1b' },
              { text: ').' },
            ],
          },
          {
            id: '3-2-2',
            prefix: '2)',
            verbatimText:
              'Método de participación: Culto presencial o a distancia (se requiere activación de pantalla).',
            blindSegments: [
              { text: 'Método de participación: Culto presencial o a distancia (' },
              { text: 'se requiere activación de pantalla', isBlank: true, id: 'b-3-2-2a' },
              { text: ').' },
            ],
          },
          {
            id: '3-2-3',
            prefix: '3)',
            verbatimText:
              'Formato Operativo: Aunque el sermón forme parte del curso de teología, debe realizarse en un "formato de culto" (lo mismo se aplica al culto sustituto).',
            blindSegments: [
              { text: 'Formato Operativo: Aunque el sermón forme parte del curso de teología, debe realizarse en un "' },
              { text: 'formato de culto', isBlank: true, id: 'b-3-2-3a' },
              { text: '" (lo mismo se aplica al culto sustituto).' },
            ],
          },
          {
            id: '3-2-4',
            prefix: '4)',
            verbatimText:
              'Si el pastor a cargo de la iglesia de reemplazo es un "Maestro de Sala del Evangelio(BB)" o de mayor rango, asistir al servicio de adoración en esa iglesia también se reconoce como asistencia al culto.',
            blindSegments: [
              { text: 'Si el pastor a cargo de la iglesia de reemplazo es un "' },
              { text: 'Maestro de Sala del Evangelio(BB)', isBlank: true, id: 'b-3-2-4a' },
              { text: '" o de mayor rango, asistir al servicio de adoración en esa iglesia también se reconoce como asistencia al culto.' },
            ],
          },
          {
            id: '3-2-5',
            prefix: '5)',
            verbatimText: 'Aquellos con asistencia insuficiente a los servicios religiosos',
            blindSegments: [{ text: 'Aquellos con asistencia insuficiente a los servicios religiosos' }],
          },
          {
            id: '3-2-5-1',
            prefix: '-',
            verbatimText:
              'Procedimiento: Presentación de una declaración del JY del Departamento a que va a unirse → Admisión tras la aprobación del Ministerio de Teología de la Asamblea General',
            blindSegments: [
              { text: 'Procedimiento: Presentación de una ' },
              { text: 'declaración del JY del Departamento', isBlank: true, id: 'b-3-2-5-1a' },
              { text: ' a que va a unirse → Admisión tras la aprobación del ' },
              { text: 'Ministerio de Teología de la Asamblea General', isBlank: true, id: 'b-3-2-5-1b' },
            ],
          },
          {
            id: '3-2-5-2',
            prefix: '-',
            verbatimText:
              'Fecha límite administrativa: Presentar el informe al grupo del Departamento de Teología de la Asamblea General al menos 3 días antes del final del semestre (Formato: Informe general).',
            blindSegments: [
              { text: 'Fecha límite administrativa: Presentar el informe al grupo del Departamento de Teología de la Asamblea General ' },
              { text: 'al menos 3 días antes del final del semestre', isBlank: true, id: 'b-3-2-5-2a' },
              { text: ' (Formato: ' },
              { text: 'Informe general', isBlank: true, id: 'b-3-2-5-2b' },
              { text: ').' },
            ],
          },
        ],
      },
      {
        id: '3-3',
        chapterId: '3',
        clauseNumber: 'C.',
        title: 'Criterios para inscripción a la iglesia',
        lines: [
          {
            id: '3-3-1',
            prefix: '1)',
            verbatimText:
              'Plazo y condiciones: Revisión de admisión obligatoria (entrevista) antes del final del semestre (la activación de la pantalla es obligatoria para las sesiones no presenciales).',
            blindSegments: [
              { text: 'Plazo y condiciones: ' },
              { text: 'Revisión de admisión obligatoria (entrevista) antes del final del semestre', isBlank: true, id: 'b-3-3-1a' },
              { text: ' (la activación de la pantalla es obligatoria para las sesiones no presenciales).' },
            ],
          },
          {
            id: '3-3-2',
            prefix: '2)',
            verbatimText:
              'Procedimiento: Principio de entrevistas individuales (sin embargo, se permiten entrevistas grupales para múltiples participantes).',
            blindSegments: [
              { text: 'Procedimiento: ' },
              { text: 'Principio de entrevistas individuales', isBlank: true, id: 'b-3-3-2a' },
              { text: ' (sin embargo, se permiten ' },
              { text: 'entrevistas grupales', isBlank: true, id: 'b-3-3-2b' },
              { text: ' para múltiples participantes).' },
            ],
          },
          {
            id: '3-3-3',
            prefix: '3)',
            verbatimText:
              'Requisitos del entrevistador: Misioneros con el rango de Líder de célula o superior en cada departamento.',
            blindSegments: [
              { text: 'Requisitos del entrevistador: Misioneros con el rango de ' },
              { text: 'Líder de célula o superior', isBlank: true, id: 'b-3-3-3a' },
              { text: ' en cada departamento.' },
            ],
          },
        ],
      },
      {
        id: '3-4',
        chapterId: '3',
        clauseNumber: 'D.',
        title: 'Documentos administrativos y requisitos para la reinscripción',
        lines: [
          {
            id: '3-4-1',
            prefix: '1)',
            verbatimText:
              'Documentos comunes: Complete el Registro de miembros (incluido el Compromiso de admisión).',
            blindSegments: [
              { text: 'Documentos comunes: Complete el ' },
              { text: 'Registro de miembros (incluido el Compromiso de admisión)', isBlank: true, id: 'b-3-4-1a' },
              { text: '.' },
            ],
          },
          {
            id: '3-4-2',
            prefix: '2)',
            verbatimText:
              'Requisitos obligatorios para reincorporarse: Quienes hayan escrito una promesa manuscrita y hayan reclutado personalmente al menos a una persona para que se registre en el centro de la misión.',
            blindSegments: [
              { text: 'Requisitos obligatorios para reincorporarse: Quienes hayan escrito una ' },
              { text: 'promesa manuscrita', isBlank: true, id: 'b-3-4-2a' },
              { text: ' y hayan ' },
              { text: 'reclutado personalmente al menos a una persona', isBlank: true, id: 'b-3-4-2b' },
              { text: ' para que se registre en el centro de la misión.' },
            ],
          },
          {
            id: '3-4-2-1',
            prefix: '-',
            verbatimText:
              'Plazo de tramitación: Presente la solicitud de reinscripción ante la Asamblea General y complete el registro de los resultados en el Centro Web tres días antes del final del semestre.',
            blindSegments: [
              { text: 'Plazo de tramitación: Presente la ' },
              { text: 'solicitud de reinscripción', isBlank: true, id: 'b-3-4-2-1a' },
              { text: ' ante la Asamblea General y complete el ' },
              { text: 'registro de los resultados en el Centro Web', isBlank: true, id: 'b-3-4-2-1b' },
              { text: ' ' },
              { text: 'tres días antes del final del semestre', isBlank: true, id: 'b-3-4-2-1c' },
              { text: '.' },
            ],
          },
          {
            id: '3-4-2-2',
            prefix: '-',
            verbatimText:
              'Frutos: Puedes volver a solicitar la reinscripción incluso si posteriormente te descalifican del programa en el que te inscribiste al momento de la solicitud. (Sin embargo, si no cumples con los requisitos de frutos al final del semestre, se te considerará "repetido" o "descalificado").',
            blindSegments: [
              { text: 'Frutos: Puedes volver a solicitar la reinscripción incluso si ' },
              { text: 'posteriormente te descalifican', isBlank: true, id: 'b-3-4-2-2a' },
              { text: ' del programa en el que te inscribiste al momento de la solicitud. (Sin embargo, si no cumples con los requisitos de frutos al final del semestre, se te considerará "' },
              { text: 'repetido', isBlank: true, id: 'b-3-4-2-2b' },
              { text: '" o "' },
              { text: 'descalificado', isBlank: true, id: 'b-3-4-2-2c' },
              { text: '").' },
            ],
          },
        ],
      },
    ],
  },
];

export const QUIZ_QUESTIONS_ES: QuizQuestion[] = [
  // ==========================================
  // 1. Criterios de apertura
  // ==========================================
  {
    id: 1,
    chapterId: '1',
    clauseId: '1-1',
    clauseTitle: 'A. Clasificación de los cursos (Clase regular)',
    type: 'blank',
    prompt: 'Complete exactamente los espacios en blanco según el texto original de «1. Criterios de apertura - A. Clasificación de los cursos (Clase regular)».',
    blankSegments: [
      { text: 'Clase regular: Asistencia presencial obligatoria al menos ' },
      { text: '3 veces', isAnswer: true, answerIndex: 0 },
      { text: ' por semana (días asignados según las circunstancias) / Instrucción ' },
      { text: '100%', isAnswer: true, answerIndex: 1 },
      { text: ' presencial para todo el plan de estudios del nivel básico, intermedio y avanzado' },
    ],
    blankAnswers: [
      ['3 veces', '3'],
      ['100%', '100'],
    ],
    wordBank: ['3 veces', '2 veces', '100%', '90%', '80%'],
    verbatimQuote:
      '1) Clase regular: Asistencia presencial obligatoria al menos 3 veces por semana (días asignados según las circunstancias) / Instrucción 100% presencial para todo el plan de estudios del nivel básico, intermedio y avanzado',
    verificationNote:
      'La clase regular exige asistencia presencial al menos 3 veces por semana e instrucción 100% presencial para el nivel básico, intermedio y avanzado.',
  },
  {
    id: 2,
    chapterId: '1',
    clauseId: '1-1',
    clauseTitle: 'A. Clasificación de los cursos (Clases no regulares)',
    type: 'multiple',
    prompt: 'Según el texto original, ¿cuál es la definición exacta de «Clases no regulares»?',
    options: [
      'Todos los cursos que no sean clases regulares (presenciales dos veces por semana, clases en línea)',
      'Todos los cursos que se imparten una vez por semana o mediante videos grabados',
      'Cursos intensivos de fin de semana y clases nocturnas',
      'Cursos mixtos con primaria presencial y nivel avanzado en línea',
    ],
    correctOptionIndices: [0],
    isMultiSelect: false,
    verbatimQuote:
      '2) Clases no regulares: Todos los cursos que no sean clases regulares (presenciales dos veces por semana, clases en línea)',
    verificationNote:
      'El texto original define las clases no regulares como: Todos los cursos que no sean clases regulares (presenciales dos veces por semana, clases en línea).',
  },
  {
    id: 3,
    chapterId: '1',
    clauseId: '1-2',
    clauseTitle: 'B. Días de clase (Total de días obligatorios)',
    type: 'blank',
    prompt: 'Complete el criterio de «B. Días de clase» exactamente según el texto original.',
    blankSegments: [
      { text: 'La asistencia a un total de al menos ' },
      { text: '96 días', isAnswer: true, answerIndex: 0 },
      { text: ' es obligatoria para todos los cursos de primaria, secundaria y bachillerato.' },
    ],
    blankAnswers: [['96 días', '96 dias', '96']],
    wordBank: ['96 días', '90 días', '100 días', '120 días'],
    verbatimQuote:
      'B. Días de clase: La asistencia a un total de al menos 96 días es obligatoria para todos los cursos de primaria, secundaria y bachillerato.',
    verificationNote:
      'La asistencia a un total de al menos 96 días es obligatoria para todos los cursos de primaria, secundaria y bachillerato.',
  },
  {
    id: 4,
    chapterId: '1',
    clauseId: '1-2',
    clauseTitle: 'B. Días de clase (Cláusula condicional)',
    type: 'ox',
    prompt: 'Seleccione O (Verdadero) si el enunciado coincide exactamente con el texto original, o X (Falso) si es incorrecto.',
    statement:
      'Si se cumple con el requisito de asistencia de al menos 96 días en total, el curso se considerará finalizado aunque no se haya completado el programa completo del nivel avanzado.',
    oxAnswer: false,
    verbatimQuote:
      '(Sin embargo, si no se ha completado el programa completo del nivel avanzado, el simple hecho de cumplir con el requisito de asistencia no lo considerará finalizado).',
    verificationNote:
      'Si no se ha completado el programa completo del nivel avanzado, el simple hecho de cumplir con el requisito de asistencia NO lo considerará finalizado.',
  },
  {
    id: 5,
    chapterId: '1',
    clauseId: '1-3',
    clauseTitle: 'C. Criterios para la apertura de clases no regulares',
    type: 'blank',
    prompt: 'Complete los criterios de «C. Criterios para la apertura de clases no regulares».',
    blankSegments: [
      { text: '1) Funcionamiento del curso: ' },
      { text: 'Separado de las clases regulares', isAnswer: true, answerIndex: 0 },
      { text: '. / 2) Número de clases: Se gestiona a ' },
      { text: 'discreción de la tribu', isAnswer: true, answerIndex: 1 },
      { text: '.' },
    ],
    blankAnswers: [
      ['Separado de las clases regulares', 'Separado'],
      ['discreción de la tribu', 'discrecion de la tribu'],
    ],
    wordBank: [
      'Separado de las clases regulares',
      'Integrado con las clases regulares',
      'discreción de la tribu',
      'orden de la Asamblea General',
    ],
    verbatimQuote:
      '1) Funcionamiento del curso: Separado de las clases regulares.\n2) Número de clases: Se gestiona a discreción de la tribu.',
    verificationNote:
      'El funcionamiento es separado de las clases regulares y el número de clases se gestiona a discreción de la tribu.',
  },
  {
    id: 6,
    chapterId: '1',
    clauseId: '1-4',
    clauseTitle: 'D. Criterios para la apertura de clases no presenciales (Metodología)',
    type: 'ox',
    prompt: 'Seleccione O (Verdadero) si el enunciado coincide con el texto original, o X (Falso) si es incorrecto.',
    statement:
      'La metodología de las clases no presenciales es instrucción en vivo en tiempo real; no se pueden ver los videos grabados y no es obligatorio asistir a clases presenciales.',
    oxAnswer: true,
    verbatimQuote:
      '1) Metodología del curso: Instrucción en vivo en tiempo real (No se pueden ver los videos grabados / No es obligatorio asistir a clases presenciales).',
    verificationNote:
      'Coincide exactamente con el texto original: Instrucción en vivo en tiempo real (No se pueden ver los videos grabados / No es obligatorio asistir a clases presenciales).',
  },
  {
    id: 7,
    chapterId: '1',
    clauseId: '1-4',
    clauseTitle: 'D. Criterios para la apertura de clases no presenciales (Excepción de pantalla)',
    type: 'blank',
    prompt: 'Complete la cláusula de excepción de pantalla en las clases no presenciales.',
    blankSegments: [
      { text: 'Excepción: En caso de desactivación inevitable, se requiere ' },
      { text: 'autorización previa', isAnswer: true, answerIndex: 0 },
      { text: '. La asistencia se registrará al entregar una ' },
      { text: 'tarea alternativa', isAnswer: true, answerIndex: 1 },
      { text: ' (' },
      { text: 'apuntes de clase', isAnswer: true, answerIndex: 2 },
      { text: ', etc.)' },
    ],
    blankAnswers: [
      ['autorización previa', 'autorizacion previa'],
      ['tarea alternativa'],
      ['apuntes de clase'],
    ],
    wordBank: [
      'autorización previa',
      'aviso posterior',
      'tarea alternativa',
      'apuntes de clase',
      'examen escrito',
    ],
    verbatimQuote:
      '- Excepción: En caso de desactivación inevitable, se requiere autorización previa. La asistencia se registrará al entregar una tarea alternativa (apuntes de clase, etc.)',
    verificationNote:
      'En caso de desactivación inevitable se requiere autorización previa y entregar una tarea alternativa (apuntes de clase, etc.).',
  },
  {
    id: 8,
    chapterId: '1',
    clauseId: '1-4',
    clauseTitle: 'D. Criterios para la apertura de clases no presenciales (Metodología 4 opciones)',
    type: 'multiple',
    prompt: 'Según «D. Criterios para la apertura de clases no presenciales - 1) Metodología del curso», ¿cuál es la opción correcta?',
    options: [
      'Instrucción en vivo en tiempo real (No se pueden ver los videos grabados / No es obligatorio asistir a clases presenciales).',
      'Instrucción en vivo en tiempo real, permitiendo ver videos grabados con permiso.',
      'Asistencia presencial obligatoria una vez al mes junto con clases en línea.',
      'Visualización libre de clases grabadas durante la semana.',
    ],
    correctOptionIndices: [0],
    isMultiSelect: false,
    verbatimQuote:
      '1) Metodología del curso: Instrucción en vivo en tiempo real (No se pueden ver los videos grabados / No es obligatorio asistir a clases presenciales).',
    verificationNote:
      'La metodología es instrucción en vivo en tiempo real (No se pueden ver los videos grabados / No es obligatorio asistir a clases presenciales).',
  },
  {
    id: 9,
    chapterId: '1',
    clauseId: '1-5',
    clauseTitle: 'E. Clases de recuperación para los alumnos ausentes',
    type: 'blank',
    prompt: 'Complete las «Normas de procedimiento» de las clases de recuperación según el texto original.',
    blankSegments: [
      { text: 'Normas de procedimiento: Impartir la clase durante al menos ' },
      { text: '40 minutos', isAnswer: true, answerIndex: 0 },
      { text: ' utilizando el material proporcionado, bajo la dirección de un ' },
      { text: 'evangelista', isAnswer: true, answerIndex: 1 },
      { text: '. (Independientemente del día, la hora o el lugar; está prohibida la ' },
      { text: 'reproducción continua de la clase', isAnswer: true, answerIndex: 2 },
      { text: ' para comodidad de los estudiantes).' },
    ],
    blankAnswers: [
      ['40 minutos', '40'],
      ['evangelista'],
      ['reproducción continua de la clase', 'reproduccion continua de la clase'],
    ],
    wordBank: [
      '40 minutos',
      '30 minutos',
      'evangelista',
      'líder de célula',
      'reproducción continua de la clase',
    ],
    verbatimQuote:
      '1) Normas de procedimiento: Impartir la clase durante al menos 40 minutos utilizando el material proporcionado, bajo la dirección de un evangelista.\n(Independientemente del día, la hora o el lugar; está prohibida la reproducción continua de la clase para comodidad de los estudiantes).',
    verificationNote:
      'La recuperación debe impartirse durante al menos 40 minutos bajo la dirección de un evangelista, y está prohibida la reproducción continua de la clase.',
  },
  {
    id: 10,
    chapterId: '1',
    clauseId: '1-5',
    clauseTitle: 'E. Clases de recuperación (Día/hora/lugar y prohibición)',
    type: 'ox',
    prompt: 'Seleccione O (Verdadero) si el enunciado coincide con el texto original, o X (Falso) si es incorrecto.',
    statement:
      'Las clases de recuperación se imparten independientemente del día, la hora o el lugar, pero está prohibida la reproducción continua de la clase para comodidad de los estudiantes.',
    oxAnswer: true,
    verbatimQuote:
      '(Independientemente del día, la hora o el lugar; está prohibida la reproducción continua de la clase para comodidad de los estudiantes).',
    verificationNote:
      'Coincide 100% con la nota entre paréntesis del apartado E.',
  },
  {
    id: 11,
    chapterId: '1',
    clauseId: '1-1',
    clauseTitle: 'A. Clasificación de los cursos (Proporción presencial en clase regular)',
    type: 'ox',
    prompt: 'Seleccione O (Verdadero) si el enunciado coincide con el texto original, o X (Falso) si es incorrecto.',
    statement:
      'En la clase regular, la asistencia presencial es obligatoria al menos 3 veces por semana, pero el nivel avanzado puede cursarse en línea.',
    oxAnswer: false,
    verbatimQuote:
      '1) Clase regular: Asistencia presencial obligatoria al menos 3 veces por semana (días asignados según las circunstancias) / Instrucción 100% presencial para todo el plan de estudios del nivel básico, intermedio y avanzado',
    verificationNote:
      'Para la clase regular, la instrucción es 100% presencial para todo el plan de estudios del nivel básico, intermedio y avanzado.',
  },
  {
    id: 12,
    chapterId: '1',
    clauseId: '1-5',
    clauseTitle: 'E. Clases de recuperación (Responsable de dirigir la recuperación)',
    type: 'multiple',
    prompt: 'Según «E. Clases de recuperación para los alumnos ausentes», ¿bajo la dirección de quién debe impartirse la clase de recuperación durante al menos 40 minutos?',
    options: [
      'Un evangelista',
      'Un líder de célula',
      'El representante legal',
      'El presidente del departamento',
    ],
    correctOptionIndices: [0],
    isMultiSelect: false,
    verbatimQuote:
      '1) Normas de procedimiento: Impartir la clase durante al menos 40 minutos utilizando el material proporcionado, bajo la dirección de un evangelista.',
    verificationNote:
      'El texto original especifica «bajo la dirección de un evangelista».',
  },

  // ==========================================
  // 2. Criterios de inscripción del Centro de Misión
  // ==========================================
  {
    id: 13,
    chapterId: '2',
    clauseId: '2-1',
    clauseTitle: 'A. ¿Qué es la "inscripción" de estudiantes? (Definición)',
    type: 'blank',
    prompt: 'Complete la definición de «inscripción» de estudiantes exactamente según el texto original.',
    blankSegments: [
      { text: '1) Una vez ingresado al ' },
      { text: 'Centro Web', isAnswer: true, answerIndex: 0 },
      { text: ', el registro ' },
      { text: 'no se puede cancelar', isAnswer: true, answerIndex: 1 },
      { text: '. / 2) Los estudiantes que falten después de la inscripción serán ' },
      { text: 'caídos', isAnswer: true, answerIndex: 2 },
      { text: '.' },
    ],
    blankAnswers: [
      ['Centro Web'],
      ['no se puede cancelar'],
      ['caídos', 'caidos'],
    ],
    wordBank: [
      'Centro Web',
      'Registro de miembros',
      'no se puede cancelar',
      'se puede modificar',
      'caídos',
      'transferidos',
    ],
    verbatimQuote:
      '1) Una vez ingresado al Centro Web, el registro no se puede cancelar.\n2) Los estudiantes que falten después de la inscripción serán caídos.',
    verificationNote:
      'Una vez ingresado al Centro Web el registro no se puede cancelar, y los estudiantes que falten después de la inscripción serán caídos.',
  },
  {
    id: 14,
    chapterId: '2',
    clauseId: '2-1',
    clauseTitle: 'A. ¿Qué es la "inscripción"? (Cancelación de registro)',
    type: 'ox',
    prompt: 'Seleccione O (Verdadero) si el enunciado coincide con el texto original, o X (Falso) si es incorrecto.',
    statement:
      'Incluso después de haber ingresado al estudiante en el Centro Web, el registro se puede cancelar dentro de los primeros 7 días.',
    oxAnswer: false,
    verbatimQuote: '1) Una vez ingresado al Centro Web, el registro no se puede cancelar.',
    verificationNote:
      'Una vez ingresado al Centro Web, el registro NO se puede cancelar.',
  },
  {
    id: 15,
    chapterId: '2',
    clauseId: '2-2',
    clauseTitle: 'B. Criterios de inscripción (Edad y procedimiento)',
    type: 'blank',
    prompt: 'Complete «B. Criterios de inscripción de estudiantes - 1) Edad y procedimiento».',
    blankSegments: [
      { text: 'Edad y procedimiento: Los solicitantes deben tener ' },
      { text: '12 años o más', isAnswer: true, answerIndex: 0 },
      { text: ' y haber completado el formulario de inscripción y aprobado la entrevista ' },
      { text: 'antes del día de la inscripción', isAnswer: true, answerIndex: 1 },
      { text: '. (En circunstancias excepcionales, el formulario de inscripción podrá completarse hasta ' },
      { text: '7 días después', isAnswer: true, answerIndex: 2 },
      { text: ' del inicio del semestre).' },
    ],
    blankAnswers: [
      ['12 años o más', '12 años', '12'],
      ['antes del día de la inscripción', 'antes del dia de la inscripcion'],
      ['7 días después', '7 dias despues', '7 días'],
    ],
    wordBank: [
      '12 años o más',
      '14 años o más',
      'antes del día de la inscripción',
      '7 días después',
      '14 días después',
    ],
    verbatimQuote:
      '1) Edad y procedimiento: Los solicitantes deben tener 12 años o más y haber completado el formulario de inscripción y aprobado la entrevista antes del día de la inscripción.\n(En circunstancias excepcionales, el formulario de inscripción podrá completarse hasta 7 días después del inicio del semestre).',
    verificationNote:
      'Deben tener 12 años o más, completar el formulario y aprobar la entrevista antes del día de la inscripción (excepcionalmente hasta 7 días después del inicio del semestre).',
  },
  {
    id: 16,
    chapterId: '2',
    clauseId: '2-2',
    clauseTitle: 'B. Criterios de inscripción (Cumplimentación del formulario)',
    type: 'ox',
    prompt: 'Seleccione O (Verdadero) si el enunciado coincide con el texto original, o X (Falso) si es incorrecto.',
    statement:
      'El formulario de inscripción al curso puede ser cumplimentado por el supervisor o evangelista en nombre del estudiante durante la entrevista.',
    oxAnswer: false,
    verbatimQuote:
      '2) Cumplimentación del formulario de inscripción al curso: El estudiante deberá cumplimentarlo en persona durante la entrevista.',
    verificationNote:
      'El estudiante deberá cumplimentarlo en persona durante la entrevista.',
  },
  {
    id: 17,
    chapterId: '2',
    clauseId: '2-2',
    clauseTitle: 'B. Criterios de inscripción (Departamento adolescente)',
    type: 'blank',
    prompt: 'Complete los «3) Requisitos de inscripción en el departamento adolescente» exactamente según el texto original.',
    blankSegments: [
      { text: 'Requisitos de inscripción en el departamento adolescente: Edades de ' },
      { text: '12 a 17 años', isAnswer: true, answerIndex: 0 },
      { text: ' (Menor de edad según las leyes del país correspondiente, cumpliendo los tres criterios siguientes) - Quienes se han unido a la Iglesia Shincheonji / - Personas que presentaron un «' },
      { text: 'Formulario de consentimiento del representante legal', isAnswer: true, answerIndex: 1 },
      { text: '» antes de registrarse. / - Asistencia a los servicios religiosos dominicales del ' },
      { text: '90% o más', isAnswer: true, answerIndex: 2 },
      { text: ' durante los últimos ' },
      { text: '3 meses', isAnswer: true, answerIndex: 3 },
      { text: '.' },
    ],
    blankAnswers: [
      ['12 a 17 años', '12 a 17'],
      ['Formulario de consentimiento del representante legal'],
      ['90% o más', '90% o mas', '90%'],
      ['3 meses', '3'],
    ],
    wordBank: [
      '12 a 17 años',
      '13 a 18 años',
      'Formulario de consentimiento del representante legal',
      '90% o más',
      '80% o más',
      '3 meses',
      '6 meses',
    ],
    verbatimQuote:
      '3) Requisitos de inscripción en el departamento adolescente: Edades de 12 a 17 años (Menor de edad según las leyes del país correspondiente, cumpliendo los tres criterios siguientes)\n- Quienes se han unido a la Iglesia Shincheonji\n- Personas que presentaron un «Formulario de consentimiento del representante legal» antes de registrarse.\n- Asistencia a los servicios religiosos dominicales del 90% o más durante los últimos 3 meses.',
    verificationNote:
      'Para edades de 12 a 17 años se deben cumplir los 3 criterios: unido a la Iglesia Shincheonji, «Formulario de consentimiento del representante legal» antes de registrarse, y asistencia dominical del 90% o más durante los últimos 3 meses.',
  },
  {
    id: 18,
    chapterId: '2',
    clauseId: '2-2',
    clauseTitle: 'B. Criterios de inscripción (Departamento adolescente 4 opciones)',
    type: 'multiple',
    prompt: '¿Cuál de los siguientes NO forma parte de los tres criterios para la inscripción en el departamento adolescente (edades de 12 a 17 años)?',
    options: [
      'Presentar una carta de recomendación del director de la escuela',
      'Quienes se han unido a la Iglesia Shincheonji',
      'Personas que presentaron un «Formulario de consentimiento del representante legal» antes de registrarse.',
      'Asistencia a los servicios religiosos dominicales del 90% o más durante los últimos 3 meses.',
    ],
    correctOptionIndices: [0],
    isMultiSelect: false,
    verbatimQuote:
      '- Quienes se han unido a la Iglesia Shincheonji\n- Personas que presentaron un «Formulario de consentimiento del representante legal» antes de registrarse.\n- Asistencia a los servicios religiosos dominicales del 90% o más durante los últimos 3 meses.',
    verificationNote:
      'La carta del director de la escuela no existe en el reglamento; los otros tres son exactamente los requisitos obligatorios.',
  },
  {
    id: 19,
    chapterId: '2',
    clauseId: '2-2',
    clauseTitle: 'B. Criterios de inscripción (Criterios de la entrevista - Aprobado)',
    type: 'blank',
    prompt: 'Complete el criterio de «Aprobado» en la entrevista según el texto original.',
    blankSegments: [
      { text: 'Aprobado: Aquellos que puedan inscribirse en el ' },
      { text: 'plan de estudios de primaria, secundaria y bachillerato', isAnswer: true, answerIndex: 0 },
      { text: ' y asistir a la ' },
      { text: 'iglesia afiliada al centro misionero', isAnswer: true, answerIndex: 1 },
      { text: ' una vez finalizado el curso.' },
    ],
    blankAnswers: [
      ['plan de estudios de primaria, secundaria y bachillerato', 'primaria, secundaria y bachillerato'],
      ['iglesia afiliada al centro misionero'],
    ],
    wordBank: [
      'plan de estudios de primaria, secundaria y bachillerato',
      'curso avanzado únicamente',
      'iglesia afiliada al centro misionero',
      'iglesia de otra región',
    ],
    verbatimQuote:
      '- Aprobado: Aquellos que puedan inscribirse en el plan de estudios de primaria, secundaria y bachillerato y asistir a la iglesia afiliada al centro misionero una vez finalizado el curso.',
    verificationNote:
      'Para aprobar la entrevista deben poder inscribirse en primaria, secundaria y bachillerato y asistir a la iglesia afiliada al centro misionero al finalizar.',
  },
  {
    id: 20,
    chapterId: '2',
    clauseId: '2-2',
    clauseTitle: 'B. Criterios de inscripción (Criterios de descalificación)',
    type: 'multiple',
    prompt: 'Según «4) Criterios de la entrevista - Criterios de descalificación», ¿quién NO está incluido entre los descalificados en la entrevista?',
    options: [
      'Personas mayores de 60 años',
      'Individuos con enfermedades mentales, los pacientes gravemente enfermos, los reclutas militares (o aquellos programados para alistarse)',
      'Individuos con graves problemas financieros o de pareja (delincuentes graves, ludópatas, homosexuales, bisexuales, especuladores inmobiliarios, estafas piramidales ilegales, etc.)',
      'Estudiantes de otras regiones',
    ],
    correctOptionIndices: [0],
    isMultiSelect: false,
    verbatimQuote:
      '- Criterios de descalificación: Serán descalificados los individuos con enfermedades mentales, los pacientes gravemente enfermos, los reclutas militares (o aquellos programados para alistarse), los individuos con graves problemas financieros o de pareja (delincuentes graves, ludópatas, homosexuales, bisexuales, especuladores inmobiliarios, estafas piramidales ilegales, etc.) y los estudiantes de otras regiones.',
    verificationNote:
      'Las personas mayores de 60 años no son descalificadas en la entrevista; están contempladas en la excepción del examen final.',
  },
  {
    id: 21,
    chapterId: '2',
    clauseId: '2-2',
    clauseTitle: 'B. Criterios de inscripción (Quienes repiten - Documento 1)',
    type: 'blank',
    prompt: 'Complete el requisito para quienes hayan sido expulsados por un incidente después de unirse a Shincheonji.',
    blankSegments: [
      { text: 'Aquellos que hayan sido expulsados por un incidente después de unirse a Shincheonji deben presentar una "' },
      { text: 'Solicitud de reinscripción en el Centro de la Misión', isAnswer: true, answerIndex: 0 },
      { text: '" ' },
      { text: 'antes de registrarse', isAnswer: true, answerIndex: 1 },
      { text: '.' },
    ],
    blankAnswers: [
      ['Solicitud de reinscripción en el Centro de la Misión', 'Solicitud de reinscripcion en el Centro de la Mision'],
      ['antes de registrarse'],
    ],
    wordBank: [
      'Solicitud de reinscripción en el Centro de la Misión',
      'Informe general',
      'antes de registrarse',
      'tres días antes del final del semestre',
    ],
    verbatimQuote:
      '- Aquellos que hayan sido expulsados por un incidente después de unirse a Shincheonji deben presentar una "Solicitud de reinscripción en el Centro de la Misión" antes de registrarse.',
    verificationNote:
      'Deben presentar una "Solicitud de reinscripción en el Centro de la Misión" antes de registrarse.',
  },
  {
    id: 22,
    chapterId: '2',
    clauseId: '2-2',
    clauseTitle: 'B. Criterios de inscripción (Quienes repiten - Documento 2)',
    type: 'blank',
    prompt: 'Complete el requisito para los estudiantes que hayan repetido el curso múltiples veces.',
    blankSegments: [
      { text: 'Los estudiantes que hayan repetido el curso ' },
      { text: 'tres o más veces y sus supervisores', isAnswer: true, answerIndex: 0 },
      { text: ' deberán presentar un "' },
      { text: 'Compromiso', isAnswer: true, answerIndex: 1 },
      { text: '" antes de la inscripción.' },
    ],
    blankAnswers: [
      ['tres o más veces y sus supervisores', 'tres o mas veces y sus supervisores'],
      ['Compromiso'],
    ],
    wordBank: [
      'tres o más veces y sus supervisores',
      'dos o más veces únicamente',
      'Compromiso',
      'Informe general',
    ],
    verbatimQuote:
      '- Los estudiantes que hayan repetido el curso tres o más veces y sus supervisores deberán presentar un "Compromiso" antes de la inscripción.',
    verificationNote:
      'Los estudiantes que hayan repetido el curso tres o más veces y sus supervisores deberán presentar un "Compromiso" antes de la inscripción.',
  },
  {
    id: 23,
    chapterId: '2',
    clauseId: '2-3',
    clauseTitle: 'C. Fecha límite de inscripción de estudiantes',
    type: 'blank',
    prompt: 'Complete «C. Fecha límite de inscripción de estudiantes» y su excepción de fin de mes.',
    blankSegments: [
      { text: 'Inscríbase a través del Centro Web ' },
      { text: '4 meses', isAnswer: true, answerIndex: 0 },
      { text: ' después de la fecha de inicio. (Sin embargo, dado que no es posible realizar la inscripción administrativa los ' },
      { text: 'dos últimos días del mes', isAnswer: true, answerIndex: 1 },
      { text: ', si su fecha de inscripción prevista cae dentro de este período, inscríbase ' },
      { text: 'dos días antes del último día', isAnswer: true, answerIndex: 2 },
      { text: ').' },
    ],
    blankAnswers: [
      ['4 meses', '4'],
      ['dos últimos días del mes', 'dos ultimos dias del mes'],
      ['dos días antes del último día', 'dos dias antes del ultimo dia'],
    ],
    wordBank: [
      '4 meses',
      '3 meses',
      'dos últimos días del mes',
      'dos días antes del último día',
      'el primer día del mes siguiente',
    ],
    verbatimQuote:
      'C. Fecha límite de inscripción de estudiantes: Inscríbase a través del Centro Web 4 meses después de la fecha de inicio.\n(Sin embargo, dado que no es posible realizar la inscripción administrativa los dos últimos días del mes, si su fecha de inscripción prevista cae dentro de este período, inscríbase dos días antes del último día).',
    verificationNote:
      'Se inscribe 4 meses después de la fecha de inicio; si cae en los dos últimos días del mes, se inscribe dos días antes del último día.',
  },
  {
    id: 24,
    chapterId: '2',
    clauseId: '2-3',
    clauseTitle: 'C. Fecha límite de inscripción (Dos últimos días del mes)',
    type: 'ox',
    prompt: 'Seleccione O (Verdadero) si el enunciado coincide con el texto original, o X (Falso) si es incorrecto.',
    statement:
      'Dado que no es posible realizar la inscripción administrativa los dos últimos días del mes, si la fecha prevista cae en ese período, debe posponerse al primer día del mes siguiente.',
    oxAnswer: false,
    verbatimQuote:
      '(Sin embargo, dado que no es posible realizar la inscripción administrativa los dos últimos días del mes, si su fecha de inscripción prevista cae dentro de este período, inscríbase dos días antes del último día).',
    verificationNote:
      'No se pospone al mes siguiente; debe inscribirse dos días antes del último día.',
  },
  {
    id: 25,
    chapterId: '2',
    clauseId: '2-4',
    clauseTitle: 'D. Estudiantes que no pueden registrarse (Número de ausencias)',
    type: 'blank',
    prompt: 'Complete el criterio de ausencias en «D. Estudiantes que no pueden registrarse».',
    blankSegments: [
      { text: 'Estudiantes con ' },
      { text: '9 o más ausencias', isAnswer: true, answerIndex: 0 },
      { text: ' después del inicio del semestre (solo aquellos con ' },
      { text: '8 o menos ausencias', isAnswer: true, answerIndex: 1 },
      { text: ' son elegibles para la inscripción).' },
    ],
    blankAnswers: [
      ['9 o más ausencias', '9 o mas ausencias', '9'],
      ['8 o menos ausencias', '8'],
    ],
    wordBank: [
      '9 o más ausencias',
      '8 o más ausencias',
      '8 o menos ausencias',
      '7 o menos ausencias',
    ],
    verbatimQuote:
      '- Estudiantes con 9 o más ausencias después del inicio del semestre (solo aquellos con 8 o menos ausencias son elegibles para la inscripción).',
    verificationNote:
      'Los estudiantes con 9 o más ausencias no pueden registrarse; solo aquellos con 8 o menos ausencias son elegibles.',
  },
  {
    id: 26,
    chapterId: '2',
    clauseId: '2-4',
    clauseTitle: 'D. Estudiantes que no pueden registrarse (4 opciones)',
    type: 'multiple',
    prompt: 'Según «D. Estudiantes que no pueden registrarse», ¿cuál es el criterio correcto respecto a las ausencias después del inicio del semestre?',
    options: [
      'Estudiantes con 9 o más ausencias después del inicio del semestre (solo aquellos con 8 o menos ausencias son elegibles para la inscripción).',
      'Estudiantes con 8 o más ausencias después del inicio del semestre (solo aquellos con 7 o menos ausencias son elegibles).',
      'Estudiantes con 10 o más ausencias después del inicio del semestre (solo aquellos con 9 o menos ausencias son elegibles).',
      'Estudiantes con 12 o más ausencias después del inicio del semestre.',
    ],
    correctOptionIndices: [0],
    isMultiSelect: false,
    verbatimQuote:
      '- Estudiantes con 9 o más ausencias después del inicio del semestre (solo aquellos con 8 o menos ausencias son elegibles para la inscripción).',
    verificationNote:
      'Estudiantes con 9 o más ausencias no pueden registrarse (solo 8 o menos ausencias son elegibles).',
  },
  {
    id: 27,
    chapterId: '2',
    clauseId: '2-2',
    clauseTitle: 'B. Criterios de inscripción (Reclutas militares y otras regiones)',
    type: 'ox',
    prompt: 'Seleccione O (Verdadero) si el enunciado coincide con el texto original, o X (Falso) si es incorrecto.',
    statement:
      'Los reclutas militares (o aquellos programados para alistarse) y los estudiantes de otras regiones serán descalificados en la entrevista.',
    oxAnswer: true,
    verbatimQuote:
      '- Criterios de descalificación: Serán descalificados los individuos con enfermedades mentales, los pacientes gravemente enfermos, los reclutas militares (o aquellos programados para alistarse)... y los estudiantes de otras regiones.',
    verificationNote:
      'Tanto los reclutas militares (o programados para alistarse) como los estudiantes de otras regiones figuran en los criterios de descalificación.',
  },
  {
    id: 28,
    chapterId: '2',
    clauseId: '2-2',
    clauseTitle: 'B. Criterios de inscripción (Responsabilidad del supervisor al repetir 3 veces)',
    type: 'ox',
    prompt: 'Seleccione O (Verdadero) si el enunciado coincide con el texto original, o X (Falso) si es incorrecto.',
    statement:
      'En el caso de estudiantes que hayan repetido el curso tres o más veces, solo el estudiante debe presentar el "Compromiso", sin que su supervisor tenga obligación de presentarlo.',
    oxAnswer: false,
    verbatimQuote:
      '- Los estudiantes que hayan repetido el curso tres o más veces y sus supervisores deberán presentar un "Compromiso" antes de la inscripción.',
    verificationNote:
      'El texto original exige que tanto los estudiantes que hayan repetido tres o más veces COMO sus supervisores presenten un "Compromiso".',
  },

  // ==========================================
  // 3. Criterios de fin de semestre del Centro de Misión
  // ==========================================
  {
    id: 29,
    chapterId: '3',
    clauseId: '3-1',
    clauseTitle: 'A. Criterios de la asistencia y el examen final (Número de ausencias)',
    type: 'blank',
    prompt: 'Complete «3. Criterios de fin de semestre - A. 1) Número de ausencias» exactamente según el texto original.',
    blankSegments: [
      { text: 'Número de ausencias: Aquellos con un total de ' },
      { text: '8 o menos ausencias', isAnswer: true, answerIndex: 0 },
      { text: ' desde la inscripción hasta el final del semestre. (Las clases de recuperación impartidas por un evangelista durante ' },
      { text: '40 minutos o más', isAnswer: true, answerIndex: 1 },
      { text: ', que abarquen el contenido del curso, se consideran ' },
      { text: 'asistencia al centro', isAnswer: true, answerIndex: 2 },
      { text: ').' },
    ],
    blankAnswers: [
      ['8 o menos ausencias', '8'],
      ['40 minutos o más', '40 minutos o mas', '40 minutos'],
      ['asistencia al centro'],
    ],
    wordBank: [
      '8 o menos ausencias',
      '9 o menos ausencias',
      '40 minutos o más',
      '30 minutos o más',
      'asistencia al centro',
      'asistencia al culto',
    ],
    verbatimQuote:
      '1) Número de ausencias: Aquellos con un total de 8 o menos ausencias desde la inscripción hasta el final del semestre.\n(Las clases de recuperación impartidas por un evangelista durante 40 minutos o más, que abarquen el contenido del curso, se consideran asistencia al centro).',
    verificationNote:
      'Deben tener un total de 8 o menos ausencias desde la inscripción hasta el final del semestre, y las recuperaciones de 40 minutos o más se consideran asistencia al centro.',
  },
  {
    id: 30,
    chapterId: '3',
    clauseId: '3-1',
    clauseTitle: 'A. Criterios de la asistencia (Excepción para 9 o más ausencias)',
    type: 'blank',
    prompt: 'Complete el procedimiento excepcional para los estudiantes que hayan faltado 9 o más veces por circunstancias inevitables.',
    blankSegments: [
      { text: 'Sin embargo, para los estudiantes que hayan faltado 9 o más veces por circunstancias inevitables y deseen finalizar el curso, la baja es posible a discreción del ' },
      { text: 'pastor de la iglesia', isAnswer: true, answerIndex: 0 },
      { text: ', previa consulta con el ' },
      { text: 'departamento eclesiástico correspondiente', isAnswer: true, answerIndex: 1 },
      { text: '.' },
    ],
    blankAnswers: [
      ['pastor de la iglesia'],
      ['departamento eclesiástico correspondiente', 'departamento eclesiastico correspondiente'],
    ],
    wordBank: [
      'pastor de la iglesia',
      'director del centro',
      'departamento eclesiástico correspondiente',
      'Ministerio de Teología',
    ],
    verbatimQuote:
      'Sin embargo, para los estudiantes que hayan faltado 9 o más veces por circunstancias inevitables y deseen finalizar el curso, la baja es posible a discreción del pastor de la iglesia, previa consulta con el departamento eclesiástico correspondiente.',
    verificationNote:
      'Es posible a discreción del pastor de la iglesia, previa consulta con el departamento eclesiástico correspondiente.',
  },
  {
    id: 31,
    chapterId: '3',
    clauseId: '3-1',
    clauseTitle: 'A. Criterios de la asistencia y el examen final (Exámenes y Educación)',
    type: 'blank',
    prompt: 'Complete «2) Exámenes y Educación» exactamente según el texto original.',
    blankSegments: [
      { text: 'Exámenes y Educación: Aquellos que hayan aprobado los ' },
      { text: 'exámenes finales de primaria, secundaria y preparatoria', isAnswer: true, answerIndex: 0 },
      { text: ' y hayan completado la ' },
      { text: 'educación para nuevos creyentes', isAnswer: true, answerIndex: 1 },
      { text: '. Sin embargo, entre quienes reprobaron el examen final, aquellos que ' },
      { text: 'han alcanzado la iluminación y no tienen problemas con su vida religiosa', isAnswer: true, answerIndex: 2 },
      { text: ' pueden completar el curso.' },
    ],
    blankAnswers: [
      ['exámenes finales de primaria, secundaria y preparatoria', 'examenes finales de primaria, secundaria y preparatoria'],
      ['educación para nuevos creyentes', 'educacion para nuevos creyentes'],
      ['han alcanzado la iluminación y no tienen problemas con su vida religiosa', 'han alcanzado la iluminacion y no tienen problemas con su vida religiosa'],
    ],
    wordBank: [
      'exámenes finales de primaria, secundaria y preparatoria',
      'educación para nuevos creyentes',
      'han alcanzado la iluminación y no tienen problemas con su vida religiosa',
      'educación de líderes de célula',
    ],
    verbatimQuote:
      '2) Exámenes y Educación: Aquellos que hayan aprobado los exámenes finales de primaria, secundaria y preparatoria y hayan completado la educación para nuevos creyentes.\nSin embargo, entre quienes reprobaron el examen final, aquellos que han alcanzado la iluminación y no tienen problemas con su vida religiosa pueden completar el curso.',
    verificationNote:
      'Deben aprobar los exámenes finales de primaria, secundaria y preparatoria y completar la educación para nuevos creyentes.',
  },
  {
    id: 32,
    chapterId: '3',
    clauseId: '3-1',
    clauseTitle: 'A. Exámenes y Educación (Excepción para quienes reprobaron)',
    type: 'multiple',
    prompt: 'Según «2) Exámenes y Educación», ¿quiénes figuran entre paréntesis como casos que pueden completar el curso si han alcanzado la iluminación y no tienen problemas con su vida religiosa?',
    options: [
      'Personas analfabetas, personas mayores de 60 años, personas con dificultades de aprendizaje como pacientes y personas evangelizadas por un familiar',
      'Personas mayores de 50 años, trabajadores de turno nocturno y estudiantes de otras regiones',
      'Miembros del departamento adolescente de 12 a 17 años y estudiantes en línea',
      'Personas que hayan reclutado al menos a dos estudiantes',
    ],
    correctOptionIndices: [0],
    isMultiSelect: false,
    verbatimQuote:
      '(Personas analfabetas, personas mayores de 60 años, personas con dificultades de aprendizaje como pacientes y personas evangelizadas por un familiar).',
    verificationNote:
      'El texto entre paréntesis indica exactamente: Personas analfabetas, personas mayores de 60 años, personas con dificultades de aprendizaje como pacientes y personas evangelizadas por un familiar.',
  },
  {
    id: 33,
    chapterId: '3',
    clauseId: '3-2',
    clauseTitle: 'B. Criterios de asistencia al servicio (Requisito de asistencia)',
    type: 'blank',
    prompt: 'Complete «B. Criterios de asistencia al servicio - 1) Requisito de asistencia».',
    blankSegments: [
      { text: 'Requisito de asistencia: Al menos ' },
      { text: '8 servicios dominicales', isAnswer: true, answerIndex: 0 },
      { text: ' después del inicio del ' },
      { text: 'curso de secundaria', isAnswer: true, answerIndex: 1 },
      { text: ' (se reconocen los ' },
      { text: 'servicios sustitutos de los lunes', isAnswer: true, answerIndex: 2 },
      { text: ').' },
    ],
    blankAnswers: [
      ['8 servicios dominicales', '8'],
      ['curso de secundaria'],
      ['servicios sustitutos de los lunes'],
    ],
    wordBank: [
      '8 servicios dominicales',
      '12 servicios dominicales',
      'curso de secundaria',
      'curso de primaria',
      'servicios sustitutos de los lunes',
    ],
    verbatimQuote:
      '1) Requisito de asistencia: Al menos 8 servicios dominicales después del inicio del curso de secundaria (se reconocen los servicios sustitutos de los lunes).',
    verificationNote:
      'Se requieren al menos 8 servicios dominicales después del inicio del curso de secundaria, reconociéndose los servicios sustitutos de los lunes.',
  },
  {
    id: 34,
    chapterId: '3',
    clauseId: '3-2',
    clauseTitle: 'B. Criterios de asistencia al servicio (Método y Formato Operativo)',
    type: 'ox',
    prompt: 'Seleccione O (Verdadero) si el enunciado coincide con el texto original, o X (Falso) si es incorrecto.',
    statement:
      'La participación es mediante culto presencial o a distancia (se requiere activación de pantalla), y aunque el sermón forme parte del curso de teología, debe realizarse en un "formato de culto" (lo mismo se aplica al culto sustituto).',
    oxAnswer: true,
    verbatimQuote:
      '2) Método de participación: Culto presencial o a distancia (se requiere activación de pantalla).\n3) Formato Operativo: Aunque el sermón forme parte del curso de teología, debe realizarse en un "formato de culto" (lo mismo se aplica al culto sustituto).',
    verificationNote:
      'Coincide exactamente con los incisos 2) y 3) del apartado B.',
  },
  {
    id: 35,
    chapterId: '3',
    clauseId: '3-2',
    clauseTitle: 'B. Criterios de asistencia al servicio (Iglesia de reemplazo)',
    type: 'blank',
    prompt: 'Complete el rango requerido del pastor a cargo de la iglesia de reemplazo para que se reconozca como asistencia al culto.',
    blankSegments: [
      { text: 'Si el pastor a cargo de la iglesia de reemplazo es un "' },
      { text: 'Maestro de Sala del Evangelio(BB)', isAnswer: true, answerIndex: 0 },
      { text: '" o de mayor rango, asistir al servicio de adoración en esa iglesia también se reconoce como asistencia al culto.' },
    ],
    blankAnswers: [
      ['Maestro de Sala del Evangelio(BB)', 'Maestro de Sala del Evangelio'],
    ],
    wordBank: [
      'Maestro de Sala del Evangelio(BB)',
      'Líder de célula',
      'JY del Departamento',
      'Representante legal',
    ],
    verbatimQuote:
      '4) Si el pastor a cargo de la iglesia de reemplazo es un "Maestro de Sala del Evangelio(BB)" o de mayor rango, asistir al servicio de adoración en esa iglesia también se reconoce como asistencia al culto.',
    verificationNote:
      'El pastor a cargo de la iglesia de reemplazo debe ser un "Maestro de Sala del Evangelio(BB)" o de mayor rango.',
  },
  {
    id: 36,
    chapterId: '3',
    clauseId: '3-2',
    clauseTitle: 'B. Criterios de asistencia al servicio (Asistencia insuficiente)',
    type: 'blank',
    prompt: 'Complete el procedimiento y fecha límite para «5) Aquellos con asistencia insuficiente a los servicios religiosos».',
    blankSegments: [
      { text: 'Procedimiento: Presentación de una ' },
      { text: 'declaración del JY del Departamento', isAnswer: true, answerIndex: 0 },
      { text: ' a que va a unirse → Admisión tras la aprobación del ' },
      { text: 'Ministerio de Teología de la Asamblea General', isAnswer: true, answerIndex: 1 },
      { text: ' / Fecha límite administrativa: Presentar el informe al grupo del Departamento de Teología de la Asamblea General ' },
      { text: 'al menos 3 días antes del final del semestre', isAnswer: true, answerIndex: 2 },
      { text: ' (Formato: ' },
      { text: 'Informe general', isAnswer: true, answerIndex: 3 },
      { text: ').' },
    ],
    blankAnswers: [
      ['declaración del JY del Departamento', 'declaracion del JY del Departamento'],
      ['Ministerio de Teología de la Asamblea General', 'Ministerio de Teologia de la Asamblea General'],
      ['al menos 3 días antes del final del semestre', 'al menos 3 dias antes del final del semestre'],
      ['Informe general'],
    ],
    wordBank: [
      'declaración del JY del Departamento',
      'Ministerio de Teología de la Asamblea General',
      'al menos 3 días antes del final del semestre',
      'Informe general',
      'Compromiso',
    ],
    verbatimQuote:
      '5) Aquellos con asistencia insuficiente a los servicios religiosos\n- Procedimiento: Presentación de una declaración del JY del Departamento a que va a unirse → Admisión tras la aprobación del Ministerio de Teología de la Asamblea General\n- Fecha límite administrativa: Presentar el informe al grupo del Departamento de Teología de la Asamblea General al menos 3 días antes del final del semestre (Formato: Informe general).',
    verificationNote:
      'Se presenta declaración del JY del Departamento, aprueba el Ministerio de Teología de la Asamblea General, y se informa al menos 3 días antes del final del semestre en formato Informe general.',
  },
  {
    id: 37,
    chapterId: '3',
    clauseId: '3-3',
    clauseTitle: 'C. Criterios para inscripción a la iglesia (Plazo, procedimiento, entrevistador)',
    type: 'blank',
    prompt: 'Complete los incisos 1), 2) y 3) de «C. Criterios para inscripción a la iglesia».',
    blankSegments: [
      { text: '1) Plazo y condiciones: ' },
      { text: 'Revisión de admisión obligatoria (entrevista) antes del final del semestre', isAnswer: true, answerIndex: 0 },
      { text: ' / 2) Procedimiento: ' },
      { text: 'Principio de entrevistas individuales', isAnswer: true, answerIndex: 1 },
      { text: ' (sin embargo, se permiten entrevistas grupales para múltiples participantes). / 3) Requisitos del entrevistador: Misioneros con el rango de ' },
      { text: 'Líder de célula o superior', isAnswer: true, answerIndex: 2 },
      { text: ' en cada departamento.' },
    ],
    blankAnswers: [
      ['Revisión de admisión obligatoria (entrevista) antes del final del semestre', 'Revision de admision obligatoria (entrevista) antes del final del semestre'],
      ['Principio de entrevistas individuales'],
      ['Líder de célula o superior', 'Lider de celula o superior'],
    ],
    wordBank: [
      'Revisión de admisión obligatoria (entrevista) antes del final del semestre',
      'Principio de entrevistas individuales',
      'Líder de célula o superior',
      'Evangelista exclusivamente',
    ],
    verbatimQuote:
      '1) Plazo y condiciones: Revisión de admisión obligatoria (entrevista) antes del final del semestre (la activación de la pantalla es obligatoria para las sesiones no presenciales).\n2) Procedimiento: Principio de entrevistas individuales (sin embargo, se permiten entrevistas grupales para múltiples participantes).\n3) Requisitos del entrevistador: Misioneros con el rango de Líder de célula o superior en cada departamento.',
    verificationNote:
      'Revisión obligatoria antes del final del semestre, principio de entrevistas individuales (grupales permitidas para múltiples participantes) y rango de Líder de célula o superior.',
  },
  {
    id: 38,
    chapterId: '3',
    clauseId: '3-3',
    clauseTitle: 'C. Criterios para inscripción a la iglesia (Entrevistas grupales)',
    type: 'ox',
    prompt: 'Seleccione O (Verdadero) si el enunciado coincide con el texto original, o X (Falso) si es incorrecto.',
    statement:
      'En la revisión de admisión (entrevista), rige el principio de entrevistas individuales y bajo ninguna circunstancia se permiten entrevistas grupales.',
    oxAnswer: false,
    verbatimQuote:
      '2) Procedimiento: Principio de entrevistas individuales (sin embargo, se permiten entrevistas grupales para múltiples participantes).',
    verificationNote:
      'El texto original aclara entre paréntesis: (sin embargo, se permiten entrevistas grupales para múltiples participantes).',
  },
  {
    id: 39,
    chapterId: '3',
    clauseId: '3-4',
    clauseTitle: 'D. Documentos administrativos (Documentos comunes)',
    type: 'multiple',
    prompt: 'Según «D. Documentos administrativos y requisitos para la reinscripción - 1) Documentos comunes», ¿cuál es el documento común obligatorio?',
    options: [
      'Complete el Registro de miembros (incluido el Compromiso de admisión).',
      'Complete el Formulario de consentimiento del representante legal.',
      'Presente el Informe general ante la Asamblea General.',
      'Presente la Solicitud de reinscripción en el Centro de la Misión.',
    ],
    correctOptionIndices: [0],
    isMultiSelect: false,
    verbatimQuote: '1) Documentos comunes: Complete el Registro de miembros (incluido el Compromiso de admisión).',
    verificationNote:
      'El documento común es completar el Registro de miembros (incluido el Compromiso de admisión).',
  },
  {
    id: 40,
    chapterId: '3',
    clauseId: '3-4',
    clauseTitle: 'D. Documentos administrativos (Requisitos obligatorios para reincorporarse)',
    type: 'blank',
    prompt: 'Complete «2) Requisitos obligatorios para reincorporarse» exactamente según el texto original.',
    blankSegments: [
      { text: 'Requisitos obligatorios para reincorporarse: Quienes hayan escrito una ' },
      { text: 'promesa manuscrita', isAnswer: true, answerIndex: 0 },
      { text: ' y hayan ' },
      { text: 'reclutado personalmente', isAnswer: true, answerIndex: 1 },
      { text: ' al menos a ' },
      { text: 'una persona', isAnswer: true, answerIndex: 2 },
      { text: ' para que se registre en el centro de la misión.' },
    ],
    blankAnswers: [
      ['promesa manuscrita'],
      ['reclutado personalmente'],
      ['una persona', '1 persona'],
    ],
    wordBank: [
      'promesa manuscrita',
      'declaración del JY',
      'reclutado personalmente',
      'una persona',
      'dos personas',
    ],
    verbatimQuote:
      '2) Requisitos obligatorios para reincorporarse: Quienes hayan escrito una promesa manuscrita y hayan reclutado personalmente al menos a una persona para que se registre en el centro de la misión.',
    verificationNote:
      'Deben haber escrito una promesa manuscrita y haber reclutado personalmente al menos a una persona para que se registre en el centro de la misión.',
  },
  {
    id: 41,
    chapterId: '3',
    clauseId: '3-4',
    clauseTitle: 'D. Documentos administrativos (Plazo de tramitación de reinscripción)',
    type: 'blank',
    prompt: 'Complete el «Plazo de tramitación» para quienes se reincorporan.',
    blankSegments: [
      { text: 'Plazo de tramitación: Presente la ' },
      { text: 'solicitud de reinscripción', isAnswer: true, answerIndex: 0 },
      { text: ' ante la Asamblea General y complete el ' },
      { text: 'registro de los resultados en el Centro Web', isAnswer: true, answerIndex: 1 },
      { text: ' ' },
      { text: 'tres días antes del final del semestre', isAnswer: true, answerIndex: 2 },
      { text: '.' },
    ],
    blankAnswers: [
      ['solicitud de reinscripción', 'solicitud de reinscripcion'],
      ['registro de los resultados en el Centro Web', 'registro de los resultados'],
      ['tres días antes del final del semestre', 'tres dias antes del final del semestre'],
    ],
    wordBank: [
      'solicitud de reinscripción',
      'registro de los resultados en el Centro Web',
      'tres días antes del final del semestre',
      'siete días después del inicio',
    ],
    verbatimQuote:
      '- Plazo de tramitación: Presente la solicitud de reinscripción ante la Asamblea General y complete el registro de los resultados en el Centro Web tres días antes del final del semestre.',
    verificationNote:
      'Se presenta la solicitud de reinscripción ante la Asamblea General y se completa el registro de los resultados en el Centro Web tres días antes del final del semestre.',
  },
  {
    id: 42,
    chapterId: '3',
    clauseId: '3-4',
    clauseTitle: 'D. Documentos administrativos (Frutos descalificados posteriormente)',
    type: 'ox',
    prompt: 'Seleccione O (Verdadero) si el enunciado coincide con el texto original, o X (Falso) si es incorrecto.',
    statement:
      'Puedes volver a solicitar la reinscripción incluso si posteriormente descalifican al fruto inscrito al momento de la solicitud.',
    oxAnswer: true,
    verbatimQuote:
      '- Frutos: Puedes volver a solicitar la reinscripción incluso si posteriormente te descalifican del programa en el que te inscribiste al momento de la solicitud.',
    verificationNote:
      'Coincide con la cláusula de Frutos del apartado D.2).',
  },
  {
    id: 43,
    chapterId: '3',
    clauseId: '3-4',
    clauseTitle: 'D. Documentos administrativos (Incumplimiento de frutos al final del semestre)',
    type: 'blank',
    prompt: 'Complete qué sucede si no se cumplen los requisitos de frutos al final del semestre.',
    blankSegments: [
      { text: '(Sin embargo, si no cumples con los requisitos de frutos al final del semestre, se te considerará "' },
      { text: 'repetido', isAnswer: true, answerIndex: 0 },
      { text: '" o "' },
      { text: 'descalificado', isAnswer: true, answerIndex: 1 },
      { text: '").' },
    ],
    blankAnswers: [
      ['repetido'],
      ['descalificado'],
    ],
    wordBank: ['repetido', 'descalificado', 'aprobado condicional', 'pendiente'],
    verbatimQuote:
      '(Sin embargo, si no cumples con los requisitos de frutos al final del semestre, se te considerará "repetido" o "descalificado").',
    verificationNote:
      'Si no cumples con los requisitos de frutos al final del semestre, se te considerará "repetido" o "descalificado".',
  },
  {
    id: 44,
    chapterId: '3',
    clauseId: '3-3',
    clauseTitle: 'C. Criterios para inscripción a la iglesia (Requisitos del entrevistador)',
    type: 'multiple',
    prompt: 'Según «C. Criterios para inscripción a la iglesia - 3) Requisitos del entrevistador», ¿quiénes pueden realizar la entrevista de admisión?',
    options: [
      'Misioneros con el rango de Líder de célula o superior en cada departamento.',
      'Únicamente el pastor titular de la iglesia.',
      'Cualquier miembro que haya completado la educación para nuevos creyentes.',
      'Exclusivamente el Ministerio de Teología de la Asamblea General.',
    ],
    correctOptionIndices: [0],
    isMultiSelect: false,
    verbatimQuote:
      '3) Requisitos del entrevistador: Misioneros con el rango de Líder de célula o superior en cada departamento.',
    verificationNote:
      'Los entrevistadores deben ser misioneros con el rango de Líder de célula o superior en cada departamento.',
  },
  {
    id: 45,
    chapterId: '1',
    clauseId: '1-2',
    clauseTitle: 'B. Días de clase (Programa completo del nivel avanzado)',
    type: 'blank',
    prompt: 'Complete la nota condicional de «B. Días de clase» según el texto original.',
    blankSegments: [
      { text: '(Sin embargo, si no se ha completado el ' },
      { text: 'programa completo del nivel avanzado', isAnswer: true, answerIndex: 0 },
      { text: ', el simple hecho de cumplir con el requisito de asistencia ' },
      { text: 'no lo considerará finalizado', isAnswer: true, answerIndex: 1 },
      { text: ').' },
    ],
    blankAnswers: [
      ['programa completo del nivel avanzado'],
      ['no lo considerará finalizado', 'no lo considerara finalizado'],
    ],
    wordBank: [
      'programa completo del nivel avanzado',
      'nivel básico',
      'no lo considerará finalizado',
      'se aprobará automáticamente',
    ],
    verbatimQuote:
      '(Sin embargo, si no se ha completado el programa completo del nivel avanzado, el simple hecho de cumplir con el requisito de asistencia no lo considerará finalizado).',
    verificationNote:
      'Si no se ha completado el programa completo del nivel avanzado, cumplir solo los días de asistencia no lo considerará finalizado.',
  },
  {
    id: 46,
    chapterId: '2',
    clauseId: '2-2',
    clauseTitle: 'B. Criterios de inscripción (Cumplimentación en persona)',
    type: 'blank',
    prompt: 'Complete «2) Cumplimentación del formulario de inscripción al curso».',
    blankSegments: [
      { text: 'Cumplimentación del formulario de inscripción al curso: El estudiante deberá cumplimentarlo ' },
      { text: 'en persona', isAnswer: true, answerIndex: 0 },
      { text: ' durante la ' },
      { text: 'entrevista', isAnswer: true, answerIndex: 1 },
      { text: '.' },
    ],
    blankAnswers: [
      ['en persona'],
      ['entrevista'],
    ],
    wordBank: ['en persona', 'por internet', 'entrevista', 'ceremonia de graduación'],
    verbatimQuote:
      '2) Cumplimentación del formulario de inscripción al curso: El estudiante deberá cumplimentarlo en persona durante la entrevista.',
    verificationNote:
      'El estudiante deberá cumplimentarlo en persona durante la entrevista.',
  },
  {
    id: 47,
    chapterId: '3',
    clauseId: '3-4',
    clauseTitle: 'D. Documentos administrativos (Documentos comunes en blanco)',
    type: 'blank',
    prompt: 'Complete «1) Documentos comunes» del apartado D.',
    blankSegments: [
      { text: 'Documentos comunes: Complete el ' },
      { text: 'Registro de miembros', isAnswer: true, answerIndex: 0 },
      { text: ' (incluido el ' },
      { text: 'Compromiso de admisión', isAnswer: true, answerIndex: 1 },
      { text: ').' },
    ],
    blankAnswers: [
      ['Registro de miembros'],
      ['Compromiso de admisión', 'Compromiso de admision'],
    ],
    wordBank: [
      'Registro de miembros',
      'Informe general',
      'Compromiso de admisión',
      'Consentimiento legal',
    ],
    verbatimQuote:
      '1) Documentos comunes: Complete el Registro de miembros (incluido el Compromiso de admisión).',
    verificationNote:
      'Se debe completar el Registro de miembros (incluido el Compromiso de admisión).',
  },
  {
    id: 48,
    chapterId: '2',
    clauseId: '2-3',
    clauseTitle: 'C. Fecha límite de inscripción de estudiantes (4 opciones)',
    type: 'multiple',
    prompt: 'Según «C. Fecha límite de inscripción de estudiantes», ¿cuál es la norma exacta para la inscripción en el Centro Web?',
    options: [
      'Inscríbase a través del Centro Web 4 meses después de la fecha de inicio (si cae en los dos últimos días del mes, inscríbase dos días antes del último día).',
      'Inscríbase a través del Centro Web 3 meses después de la fecha de inicio (o el primer día del mes siguiente).',
      'Inscríbase a través del Centro Web 6 meses después de la fecha de inicio sin restricción de días.',
      'Inscríbase únicamente el último día del mes en que finaliza el nivel básico.',
    ],
    correctOptionIndices: [0],
    isMultiSelect: false,
    verbatimQuote:
      'C. Fecha límite de inscripción de estudiantes: Inscríbase a través del Centro Web 4 meses después de la fecha de inicio.\n(Sin embargo, dado que no es posible realizar la inscripción administrativa los dos últimos días del mes, si su fecha de inscripción prevista cae dentro de este período, inscríbase dos días antes del último día).',
    verificationNote:
      'Se realiza 4 meses después de la fecha de inicio y, si cae en los dos últimos días del mes, dos días antes del último día.',
  },
  {
    id: 49,
    chapterId: '3',
    clauseId: '3-2',
    clauseTitle: 'B. Criterios de asistencia al servicio (Fecha límite administrativa 4 opciones)',
    type: 'multiple',
    prompt: 'Para aquellos con asistencia insuficiente a los servicios religiosos, ¿cuál es la fecha límite administrativa y el formato correcto?',
    options: [
      'Presentar el informe al grupo del Departamento de Teología de la Asamblea General al menos 3 días antes del final del semestre (Formato: Informe general).',
      'Presentar el informe el mismo día de la graduación (Formato: Solicitud de reinscripción).',
      'Presentar el informe 7 días después del final del semestre al pastor local.',
      'Ingresar los datos en el Centro Web 4 meses después del inicio.',
    ],
    correctOptionIndices: [0],
    isMultiSelect: false,
    verbatimQuote:
      '- Fecha límite administrativa: Presentar el informe al grupo del Departamento de Teología de la Asamblea General al menos 3 días antes del final del semestre (Formato: Informe general).',
    verificationNote:
      'Se debe presentar al menos 3 días antes del final del semestre en el Formato: Informe general.',
  },
];
