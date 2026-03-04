export interface ScaleOption {
  value: number
  labelKey: string
  /** If true, this option is not counted toward the total (e.g. value 9 = amputated limb) */
  excluded?: boolean
}

export interface ScaleActivity {
  id: string
  labelKey: string
  /** Clinical instruction shown as a note under the item label */
  noteKey?: string
  options: ScaleOption[]
}

export interface ScaleDefinition {
  id: string
  badge: string
  titleKey: string
  subtitleKey: string
  descriptionKey: string
  instructionsKey: string
  activities: ScaleActivity[]
  maxScore: number
}

export type DependencyLevel =
  | 'independent'
  | 'mild'
  | 'moderate'
  | 'severe'
  | 'total'

export type StrokeSeverity =
  | 'normal'
  | 'mild'
  | 'moderate'
  | 'moderate_severe'
  | 'severe'

export type GCSSeverity = 'mild' | 'moderate' | 'severe'

export type FisherGrade = 0 | 1 | 2 | 3 | 4

export type MarshallGrade = 1 | 2 | 3 | 4 | 5 | 6

export interface ScaleResult {
  score: number
  maxScore: number
  level: string
  levelKey: string
  levelDescKey: string
}
