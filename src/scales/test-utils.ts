import { ui, type Langs } from '../i18n/ui'
import type { ScaleDefinition } from './types'

/**
 * Build a pre-indexed lookup: activityId → lang → label → value.
 * Avoids repeated linear scans on every byLabel() call.
 */
export function buildLabelIndex(
  scaleIndex: ScaleDefinition
): Record<string, Partial<Record<Langs, Record<string, number>>>> {
  const labelIndex: Record<
    string,
    Partial<Record<Langs, Record<string, number>>>
  > = {}

  for (const activity of scaleIndex.activities) {
    labelIndex[activity.id] = {}
    for (const lang of Object.keys(ui) as Langs[]) {
      const dict = ui[lang]
      labelIndex[activity.id][lang] = Object.fromEntries(
        activity.options.map((o) => [dict[o.labelKey], o.value])
      )
    }
  }

  return labelIndex
}

/**
 * Factory function: create a byLabel resolver for a given scale and pre-built index.
 */
export function createByLabel(
  labelIndex: Record<string, Partial<Record<Langs, Record<string, number>>>>
): (activityId: string, label: string, lang?: Langs) => number {
  return (activityId: string, label: string, lang: Langs = 'es'): number => {
    const value = labelIndex[activityId]?.[lang]?.[label]
    if (value === undefined)
      throw new Error(
        `No option with label "${label}" in activity "${activityId}" (${lang})`
      )
    return value
  }
}
