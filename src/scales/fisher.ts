import type { ScaleDefinition, ScaleResult, FisherGrade } from './types'

export const fisherIndex: ScaleDefinition = {
  id: 'fisher',
  badge: 'Fisher Mod.',
  titleKey: 'fisher.title',
  subtitleKey: 'fisher.subtitle',
  descriptionKey: 'fisher.description',
  instructionsKey: 'fisher.instructions',
  maxScore: 4,
  activities: [
    {
      id: 'grade',
      labelKey: 'fisher.grade.label',
      noteKey: 'fisher.grade.note',
      options: [
        { value: 0, labelKey: 'fisher.grade.opt-0' },
        { value: 1, labelKey: 'fisher.grade.opt-1' },
        { value: 2, labelKey: 'fisher.grade.opt-2' },
        { value: 3, labelKey: 'fisher.grade.opt-3' },
        { value: 4, labelKey: 'fisher.grade.opt-4' },
      ],
    },
  ],
}

const levelKeyMap: Record<
  FisherGrade,
  { levelKey: string; levelDescKey: string }
> = {
  0: {
    levelKey: 'fisher.result.grade_0',
    levelDescKey: 'fisher.result.grade_0.desc',
  },
  1: {
    levelKey: 'fisher.result.grade_1',
    levelDescKey: 'fisher.result.grade_1.desc',
  },
  2: {
    levelKey: 'fisher.result.grade_2',
    levelDescKey: 'fisher.result.grade_2.desc',
  },
  3: {
    levelKey: 'fisher.result.grade_3',
    levelDescKey: 'fisher.result.grade_3.desc',
  },
  4: {
    levelKey: 'fisher.result.grade_4',
    levelDescKey: 'fisher.result.grade_4.desc',
  },
}

export function interpretFisher(score: number): FisherGrade {
  return score <= 3 ? (score as FisherGrade) : 4
}

export function scoreFisher(answers: Record<string, number>): ScaleResult {
  const grade = interpretFisher(answers['grade'] ?? 0)
  const { levelKey, levelDescKey } = levelKeyMap[grade]
  return {
    score: grade,
    maxScore: fisherIndex.maxScore,
    level: `grade_${grade}`,
    levelKey,
    levelDescKey,
  }
}
