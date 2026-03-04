import type { ScaleDefinition, ScaleResult, MarshallGrade } from './types'

export const marshallIndex: ScaleDefinition = {
  id: 'marshall',
  badge: 'Marshall',
  titleKey: 'marshall.title',
  subtitleKey: 'marshall.subtitle',
  descriptionKey: 'marshall.description',
  instructionsKey: 'marshall.instructions',
  maxScore: 6,
  activities: [
    {
      id: 'grade',
      labelKey: 'marshall.grade.label',
      noteKey: 'marshall.grade.note',
      options: [
        { value: 1, labelKey: 'marshall.grade.opt-1' },
        { value: 2, labelKey: 'marshall.grade.opt-2' },
        { value: 3, labelKey: 'marshall.grade.opt-3' },
        { value: 4, labelKey: 'marshall.grade.opt-4' },
        { value: 5, labelKey: 'marshall.grade.opt-5' },
        { value: 6, labelKey: 'marshall.grade.opt-6' },
      ],
    },
  ],
}

const levelKeyMap: Record<
  MarshallGrade,
  { levelKey: string; levelDescKey: string }
> = {
  1: {
    levelKey: 'marshall.result.grade_1',
    levelDescKey: 'marshall.result.grade_1.desc',
  },
  2: {
    levelKey: 'marshall.result.grade_2',
    levelDescKey: 'marshall.result.grade_2.desc',
  },
  3: {
    levelKey: 'marshall.result.grade_3',
    levelDescKey: 'marshall.result.grade_3.desc',
  },
  4: {
    levelKey: 'marshall.result.grade_4',
    levelDescKey: 'marshall.result.grade_4.desc',
  },
  5: {
    levelKey: 'marshall.result.grade_5',
    levelDescKey: 'marshall.result.grade_5.desc',
  },
  6: {
    levelKey: 'marshall.result.grade_6',
    levelDescKey: 'marshall.result.grade_6.desc',
  },
}

export function interpretMarshall(score: number): MarshallGrade {
  if (score >= 1 && score <= 6) return score as MarshallGrade
  return 1
}

export function scoreMarshall(answers: Record<string, number>): ScaleResult {
  const grade = interpretMarshall(answers['grade'] ?? 1)
  const { levelKey, levelDescKey } = levelKeyMap[grade]
  return {
    score: grade,
    maxScore: marshallIndex.maxScore,
    level: `grade_${grade}`,
    levelKey,
    levelDescKey,
  }
}
