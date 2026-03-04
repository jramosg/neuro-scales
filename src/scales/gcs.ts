import type { ScaleDefinition, ScaleResult, GCSSeverity } from './types'

export const gcsIndex: ScaleDefinition = {
  id: 'gcs',
  badge: 'GCS',
  titleKey: 'gcs.title',
  subtitleKey: 'gcs.subtitle',
  descriptionKey: 'gcs.description',
  instructionsKey: 'gcs.instructions',
  maxScore: 15,
  activities: [
    // 1. Apertura ocular / Eye Opening (E)
    {
      id: 'eye_opening',
      labelKey: 'gcs.eye_opening.label',
      options: [
        { value: 4, labelKey: 'gcs.eye_opening.opt-4' },
        { value: 3, labelKey: 'gcs.eye_opening.opt-3' },
        { value: 2, labelKey: 'gcs.eye_opening.opt-2' },
        { value: 1, labelKey: 'gcs.eye_opening.opt-1' },
      ],
    },
    // 2. Respuesta verbal / Verbal Response (V)
    {
      id: 'verbal',
      labelKey: 'gcs.verbal.label',
      options: [
        { value: 5, labelKey: 'gcs.verbal.opt-5' },
        { value: 4, labelKey: 'gcs.verbal.opt-4' },
        { value: 3, labelKey: 'gcs.verbal.opt-3' },
        { value: 2, labelKey: 'gcs.verbal.opt-2' },
        { value: 1, labelKey: 'gcs.verbal.opt-1' },
      ],
    },
    // 3. Mejor respuesta motora / Best Motor Response (M)
    {
      id: 'motor',
      labelKey: 'gcs.motor.label',
      options: [
        { value: 6, labelKey: 'gcs.motor.opt-6' },
        { value: 5, labelKey: 'gcs.motor.opt-5' },
        { value: 4, labelKey: 'gcs.motor.opt-4' },
        { value: 3, labelKey: 'gcs.motor.opt-3' },
        { value: 2, labelKey: 'gcs.motor.opt-2' },
        { value: 1, labelKey: 'gcs.motor.opt-1' },
      ],
    },
  ],
}

const levelKeyMap: Record<
  GCSSeverity,
  { levelKey: string; levelDescKey: string }
> = {
  mild: {
    levelKey: 'gcs.result.mild',
    levelDescKey: 'gcs.result.mild.desc',
  },
  moderate: {
    levelKey: 'gcs.result.moderate',
    levelDescKey: 'gcs.result.moderate.desc',
  },
  severe: {
    levelKey: 'gcs.result.severe',
    levelDescKey: 'gcs.result.severe.desc',
  },
}

export function interpretGCS(score: number): GCSSeverity {
  if (score >= 13) return 'mild'
  if (score >= 9) return 'moderate'
  return 'severe'
}

export function scoreGCS(answers: Record<string, number>): ScaleResult {
  const score = gcsIndex.activities.reduce((sum, activity) => {
    const val = answers[activity.id]
    if (val === undefined) return sum
    return sum + val
  }, 0)

  const level = interpretGCS(score)
  const { levelKey, levelDescKey } = levelKeyMap[level]
  return { score, maxScore: gcsIndex.maxScore, level, levelKey, levelDescKey }
}
