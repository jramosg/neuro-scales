import { describe, it, expect } from 'vitest'
import { gcsIndex, interpretGCS, scoreGCS } from './gcs'
import { buildLabelIndex, createByLabel } from './test-utils'

const labelIndex = buildLabelIndex(gcsIndex)
const byLabel = createByLabel(labelIndex)

// ── interpretGCS ─────────────────────────────────────────────────────────────

describe('interpretGCS', () => {
  it('returns mild for score 15 (upper bound)', () => {
    expect(interpretGCS(15)).toBe('mild')
  })

  it('returns mild for score 13', () => {
    expect(interpretGCS(13)).toBe('mild')
  })

  it('returns moderate for score 12', () => {
    expect(interpretGCS(12)).toBe('moderate')
  })

  it('returns moderate for score 9', () => {
    expect(interpretGCS(9)).toBe('moderate')
  })

  it('returns severe for score 8', () => {
    expect(interpretGCS(8)).toBe('severe')
  })

  it('returns severe for score 3 (lower bound)', () => {
    expect(interpretGCS(3)).toBe('severe')
  })
})

// ── scoreGCS ──────────────────────────────────────────────────────────────────

describe('scoreGCS', () => {
  it('returns 15 for maximum responses', () => {
    const answers: Record<string, number> = {
      eye_opening: 4,
      verbal: 5,
      motor: 6,
    }
    const result = scoreGCS(answers)
    expect(result.score).toBe(15)
    expect(result.level).toBe('mild')
    expect(result.maxScore).toBe(15)
  })

  it('returns 3 for minimum responses (deep coma)', () => {
    const answers: Record<string, number> = {
      eye_opening: 1,
      verbal: 1,
      motor: 1,
    }
    const result = scoreGCS(answers)
    expect(result.score).toBe(3)
    expect(result.level).toBe('severe')
  })

  it('returns correct score and moderate level for 9', () => {
    // eye_opening=2, verbal=3, motor=4 → 2+3+4=9
    const answers: Record<string, number> = {
      eye_opening: 2,
      verbal: 3,
      motor: 4,
    }
    const result = scoreGCS(answers)
    expect(result.score).toBe(9)
    expect(result.level).toBe('moderate')
  })

  it('returns correct score and severe level for 8', () => {
    // eye_opening=1, verbal=2, motor=5 → 1+2+5=8
    const answers: Record<string, number> = {
      eye_opening: 1,
      verbal: 2,
      motor: 5,
    }
    const result = scoreGCS(answers)
    expect(result.score).toBe(8)
    expect(result.level).toBe('severe')
  })

  it('skips undefined answers', () => {
    const result = scoreGCS({ eye_opening: 3, verbal: 4 })
    expect(result.score).toBe(7)
  })

  it('returns levelKey and levelDescKey for severe', () => {
    const result = scoreGCS({ eye_opening: 1, verbal: 1, motor: 1 })
    expect(result.levelKey).toBe('gcs.result.severe')
    expect(result.levelDescKey).toBe('gcs.result.severe.desc')
  })

  it('returns levelKey and levelDescKey for moderate', () => {
    const result = scoreGCS({ eye_opening: 3, verbal: 3, motor: 4 })
    expect(result.score).toBe(10)
    expect(result.levelKey).toBe('gcs.result.moderate')
    expect(result.levelDescKey).toBe('gcs.result.moderate.desc')
  })

  it('returns levelKey and levelDescKey for mild', () => {
    const result = scoreGCS({ eye_opening: 4, verbal: 5, motor: 6 })
    expect(result.levelKey).toBe('gcs.result.mild')
    expect(result.levelDescKey).toBe('gcs.result.mild.desc')
  })
})

// ── gcsIndex definition integrity ────────────────────────────────────────────

describe('gcsIndex definition', () => {
  it('has 3 activities', () => {
    expect(gcsIndex.activities.length).toBe(3)
  })

  it('has maxScore of 15', () => {
    expect(gcsIndex.maxScore).toBe(15)
  })

  it('all activities have unique IDs', () => {
    const ids = gcsIndex.activities.map((a) => a.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('eye_opening has 4 options with values 1–4', () => {
    const activity = gcsIndex.activities.find((a) => a.id === 'eye_opening')!
    const values = activity.options.map((o) => o.value).sort((a, b) => a - b)
    expect(values).toEqual([1, 2, 3, 4])
  })

  it('verbal has 5 options with values 1–5', () => {
    const activity = gcsIndex.activities.find((a) => a.id === 'verbal')!
    const values = activity.options.map((o) => o.value).sort((a, b) => a - b)
    expect(values).toEqual([1, 2, 3, 4, 5])
  })

  it('motor has 6 options with values 1–6', () => {
    const activity = gcsIndex.activities.find((a) => a.id === 'motor')!
    const values = activity.options.map((o) => o.value).sort((a, b) => a - b)
    expect(values).toEqual([1, 2, 3, 4, 5, 6])
  })

  it('sum of max option values equals maxScore (15)', () => {
    const maxSum = gcsIndex.activities.reduce((sum, a) => {
      return sum + Math.max(...a.options.map((o) => o.value))
    }, 0)
    expect(maxSum).toBe(gcsIndex.maxScore)
  })
})

// ── Clinical scenarios with Spanish labels ────────────────────────────────────

describe('scoreGCS — Spanish labels (es)', () => {
  it('fully alert patient scores 15 (coma leve / sin coma)', () => {
    const answers: Record<string, number> = {
      eye_opening: byLabel('eye_opening', 'Espontánea'),
      verbal: byLabel('verbal', 'Orientada'),
      motor: byLabel('motor', 'Obedece órdenes'),
    }
    const result = scoreGCS(answers)
    expect(result.score).toBe(15)
    expect(result.level).toBe('mild')
  })

  it('deep coma patient scores 3 (coma grave)', () => {
    const answers: Record<string, number> = {
      eye_opening: byLabel('eye_opening', 'Sin respuesta'),
      verbal: byLabel('verbal', 'Sin respuesta'),
      motor: byLabel('motor', 'Sin movimiento'),
    }
    const result = scoreGCS(answers)
    expect(result.score).toBe(3)
    expect(result.level).toBe('severe')
  })

  it('moderate coma: eye to pain + confused + withdraws = 9', () => {
    // eye_opening=2 + verbal=4 + motor=4 → 10 (moderate)
    const answers: Record<string, number> = {
      eye_opening: byLabel('eye_opening', 'A estímulo doloroso'),
      verbal: byLabel('verbal', 'Confusa'),
      motor: byLabel('motor', 'Retira al dolor'),
    }
    const result = scoreGCS(answers)
    expect(result.score).toBe(10)
    expect(result.level).toBe('moderate')
  })

  it('severe coma: no eye + no verbal + extension = 4', () => {
    // eye_opening=1 + verbal=1 + motor=2 → 4 (severe)
    const answers: Record<string, number> = {
      eye_opening: byLabel('eye_opening', 'Sin respuesta'),
      verbal: byLabel('verbal', 'Sin respuesta'),
      motor: byLabel('motor', 'Respuesta en extensión'),
    }
    const result = scoreGCS(answers)
    expect(result.score).toBe(4)
    expect(result.level).toBe('severe')
  })
})

// ── Clinical scenarios with Basque labels ─────────────────────────────────────

describe('scoreGCS — Basque labels (eu)', () => {
  it('fully alert patient scores 15 (koma arina / komarik ez)', () => {
    const answers: Record<string, number> = {
      eye_opening: byLabel('eye_opening', 'Espontaneoa', 'eu'),
      verbal: byLabel('verbal', 'Orientatua', 'eu'),
      motor: byLabel('motor', 'Aginduak betetzen ditu', 'eu'),
    }
    const result = scoreGCS(answers)
    expect(result.score).toBe(15)
    expect(result.level).toBe('mild')
  })

  it('deep coma patient scores 3 (koma larria)', () => {
    const answers: Record<string, number> = {
      eye_opening: byLabel('eye_opening', 'Erantzunik ez', 'eu'),
      verbal: byLabel('verbal', 'Erantzunik ez', 'eu'),
      motor: byLabel('motor', 'Mugimendurik ez', 'eu'),
    }
    const result = scoreGCS(answers)
    expect(result.score).toBe(3)
    expect(result.level).toBe('severe')
  })
})
