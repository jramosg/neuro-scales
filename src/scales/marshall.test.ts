import { describe, it, expect } from 'vitest'
import { marshallIndex, interpretMarshall, scoreMarshall } from './marshall'

// ── interpretMarshall ─────────────────────────────────────────────────────────

describe('interpretMarshall', () => {
  it('returns 1 for grade I', () => {
    expect(interpretMarshall(1)).toBe(1)
  })

  it('returns 2 for grade II', () => {
    expect(interpretMarshall(2)).toBe(2)
  })

  it('returns 3 for grade III', () => {
    expect(interpretMarshall(3)).toBe(3)
  })

  it('returns 4 for grade IV', () => {
    expect(interpretMarshall(4)).toBe(4)
  })

  it('returns 5 for grade V', () => {
    expect(interpretMarshall(5)).toBe(5)
  })

  it('returns 6 for grade VI', () => {
    expect(interpretMarshall(6)).toBe(6)
  })

  it('clamps out-of-range values to 1', () => {
    expect(interpretMarshall(0)).toBe(1)
    expect(interpretMarshall(7)).toBe(1)
  })
})

// ── scoreMarshall ─────────────────────────────────────────────────────────────

describe('scoreMarshall', () => {
  it('returns grade I — no visible intracranial pathology', () => {
    const result = scoreMarshall({ grade: 1 })
    expect(result.score).toBe(1)
    expect(result.level).toBe('grade_1')
    expect(result.maxScore).toBe(6)
  })

  it('returns grade II — focal <25cc, cisterns preserved, no midline shift', () => {
    const result = scoreMarshall({ grade: 2 })
    expect(result.score).toBe(2)
    expect(result.level).toBe('grade_2')
  })

  it('returns grade III — focal <25cc, compressed cisterns', () => {
    const result = scoreMarshall({ grade: 3 })
    expect(result.score).toBe(3)
    expect(result.level).toBe('grade_3')
  })

  it('returns grade IV — focal <25cc, midline shift >5mm', () => {
    const result = scoreMarshall({ grade: 4 })
    expect(result.score).toBe(4)
    expect(result.level).toBe('grade_4')
  })

  it('returns grade V — surgically evacuated lesion', () => {
    const result = scoreMarshall({ grade: 5 })
    expect(result.score).toBe(5)
    expect(result.level).toBe('grade_5')
  })

  it('returns grade VI — focal >25cc, not evacuated', () => {
    const result = scoreMarshall({ grade: 6 })
    expect(result.score).toBe(6)
    expect(result.level).toBe('grade_6')
  })

  it('defaults to grade 1 when grade is missing', () => {
    const result = scoreMarshall({})
    expect(result.score).toBe(1)
    expect(result.level).toBe('grade_1')
  })

  it('returns correct levelKey for grade I', () => {
    const result = scoreMarshall({ grade: 1 })
    expect(result.levelKey).toBe('marshall.result.grade_1')
    expect(result.levelDescKey).toBe('marshall.result.grade_1.desc')
  })

  it('returns correct levelKey for grade VI', () => {
    const result = scoreMarshall({ grade: 6 })
    expect(result.levelKey).toBe('marshall.result.grade_6')
    expect(result.levelDescKey).toBe('marshall.result.grade_6.desc')
  })
})

// ── marshallIndex definition integrity ───────────────────────────────────────

describe('marshallIndex definition', () => {
  it('has 1 activity', () => {
    expect(marshallIndex.activities.length).toBe(1)
  })

  it('has maxScore of 6', () => {
    expect(marshallIndex.maxScore).toBe(6)
  })

  it('activity id is "grade"', () => {
    expect(marshallIndex.activities[0].id).toBe('grade')
  })

  it('grade activity has 6 options with values 1–6', () => {
    const values = marshallIndex.activities[0].options
      .map((o) => o.value)
      .sort((a, b) => a - b)
    expect(values).toEqual([1, 2, 3, 4, 5, 6])
  })

  it('max option value equals maxScore', () => {
    const max = Math.max(
      ...marshallIndex.activities[0].options.map((o) => o.value)
    )
    expect(max).toBe(marshallIndex.maxScore)
  })

  it('all options have unique values', () => {
    const values = marshallIndex.activities[0].options.map((o) => o.value)
    expect(new Set(values).size).toBe(values.length)
  })
})
