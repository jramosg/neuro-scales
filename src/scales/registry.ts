import { barthelIndex } from './barthel'
import { nihssIndex } from './nihss'
import type { ScaleDefinition } from './types'

type IndexedScales = Record<string, ScaleDefinition>

export const scales: ScaleDefinition[] = [barthelIndex, nihssIndex]

const indexedScales: IndexedScales = scales.reduce((acc, scale) => {
  acc[scale.id] = scale
  return acc
}, {} as IndexedScales)

export function getScaleById(id: string): ScaleDefinition | undefined {
  return indexedScales[id]
}
