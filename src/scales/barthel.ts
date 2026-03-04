import type { ScaleDefinition, ScaleResult, DependencyLevel } from './types'

export const barthelIndex: ScaleDefinition = {
  id: 'barthel',
  badge: 'ABVD',
  titleKey: 'barthel.title',
  subtitleKey: 'barthel.subtitle',
  descriptionKey: 'barthel.description',
  instructionsKey: 'barthel.instructions',
  maxScore: 100,
  activities: [
    {
      id: 'feeding',
      labelKey: 'barthel.feeding.label',
      options: [
        { value: 10, labelKey: 'barthel.feeding.opt-10' },
        { value: 5, labelKey: 'barthel.feeding.opt-5' },
        { value: 0, labelKey: 'barthel.feeding.opt-0' },
      ],
    },
    {
      id: 'bathing',
      labelKey: 'barthel.bathing.label',
      options: [
        { value: 5, labelKey: 'barthel.bathing.opt-5' },
        { value: 0, labelKey: 'barthel.bathing.opt-0' },
      ],
    },
    {
      id: 'grooming',
      labelKey: 'barthel.grooming.label',
      options: [
        { value: 5, labelKey: 'barthel.grooming.opt-5' },
        { value: 0, labelKey: 'barthel.grooming.opt-0' },
      ],
    },
    {
      id: 'dressing',
      labelKey: 'barthel.dressing.label',
      options: [
        { value: 10, labelKey: 'barthel.dressing.opt-10' },
        { value: 5, labelKey: 'barthel.dressing.opt-5' },
        { value: 0, labelKey: 'barthel.dressing.opt-0' },
      ],
    },
    {
      id: 'bowel',
      labelKey: 'barthel.bowel.label',
      options: [
        { value: 10, labelKey: 'barthel.bowel.opt-10' },
        { value: 5, labelKey: 'barthel.bowel.opt-5' },
        { value: 0, labelKey: 'barthel.bowel.opt-0' },
      ],
    },
    {
      id: 'bladder',
      labelKey: 'barthel.bladder.label',
      options: [
        { value: 10, labelKey: 'barthel.bladder.opt-10' },
        { value: 5, labelKey: 'barthel.bladder.opt-5' },
        { value: 0, labelKey: 'barthel.bladder.opt-0' },
      ],
    },
    {
      id: 'toilet',
      labelKey: 'barthel.toilet.label',
      options: [
        { value: 10, labelKey: 'barthel.toilet.opt-10' },
        { value: 5, labelKey: 'barthel.toilet.opt-5' },
        { value: 0, labelKey: 'barthel.toilet.opt-0' },
      ],
    },
    {
      id: 'transfers',
      labelKey: 'barthel.transfers.label',
      options: [
        { value: 15, labelKey: 'barthel.transfers.opt-15' },
        { value: 10, labelKey: 'barthel.transfers.opt-10' },
        { value: 5, labelKey: 'barthel.transfers.opt-5' },
        { value: 0, labelKey: 'barthel.transfers.opt-0' },
      ],
    },
    {
      id: 'mobility',
      labelKey: 'barthel.mobility.label',
      options: [
        { value: 15, labelKey: 'barthel.mobility.opt-15' },
        { value: 10, labelKey: 'barthel.mobility.opt-10' },
        { value: 5, labelKey: 'barthel.mobility.opt-5' },
        { value: 0, labelKey: 'barthel.mobility.opt-0' },
      ],
    },
    {
      id: 'stairs',
      labelKey: 'barthel.stairs.label',
      options: [
        { value: 10, labelKey: 'barthel.stairs.opt-10' },
        { value: 5, labelKey: 'barthel.stairs.opt-5' },
        { value: 0, labelKey: 'barthel.stairs.opt-0' },
      ],
    },
  ],
}

const levelKeyMap: Record<
  DependencyLevel,
  { levelKey: string; levelDescKey: string }
> = {
  independent: {
    levelKey: 'results.independent',
    levelDescKey: 'results.independent.desc',
  },
  mild: { levelKey: 'results.mild', levelDescKey: 'results.mild.desc' },
  moderate: {
    levelKey: 'results.moderate',
    levelDescKey: 'results.moderate.desc',
  },
  severe: { levelKey: 'results.severe', levelDescKey: 'results.severe.desc' },
  total: { levelKey: 'results.total', levelDescKey: 'results.total.desc' },
}

export function interpretBarthel(score: number): DependencyLevel {
  if (score >= 100) return 'independent'
  if (score >= 60) return 'mild'
  if (score >= 40) return 'moderate'
  if (score >= 20) return 'severe'
  return 'total'
}

export function scoreBarthel(answers: Record<string, number>): ScaleResult {
  const score = Object.values(answers).reduce((sum, v) => sum + v, 0)
  const level = interpretBarthel(score)
  const { levelKey, levelDescKey } = levelKeyMap[level]
  return {
    score,
    maxScore: barthelIndex.maxScore,
    level,
    levelKey,
    levelDescKey,
  }
}
