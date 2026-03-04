import { barthelIndex } from './barthel'
import { nihssIndex } from './nihss'
import { gcsIndex } from './gcs'
import type { ScaleDefinition } from './types'

type IndexedScales = Record<string, ScaleDefinition>

export const scales: ScaleDefinition[] = [barthelIndex, nihssIndex, gcsIndex]

const indexedScales: IndexedScales = scales.reduce((acc, scale) => {
  acc[scale.id] = scale
  return acc
}, {} as IndexedScales)

export function getScaleById(id: string): ScaleDefinition | undefined {
  return indexedScales[id]
}
