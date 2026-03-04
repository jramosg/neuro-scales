import { describe, it, expect } from 'vitest'
import { fisherIndex, interpretFisher, scoreFisher } from './fisher'

// ── interpretFisher ───────────────────────────────────────────────────────────

describe('interpretFisher', () => {
  it('returns 0 for grade 0', () => {
    expect(interpretFisher(0)).toBe(0)
  })

  it('returns 1 for grade 1', () => {
    expect(interpretFisher(1)).toBe(1)
  })

  it('returns 2 for grade 2', () => {
    expect(interpretFisher(2)).toBe(2)
  })

  it('returns 3 for grade 3', () => {
    expect(interpretFisher(3)).toBe(3)
  })

  it('returns 4 for grade 4', () => {
    expect(interpretFisher(4)).toBe(4)
  })
})

// ── scoreFisher ───────────────────────────────────────────────────────────────

describe('scoreFisher', () => {
  it('returns grade 0 for no SAH/IVH', () => {
    const result = scoreFisher({ grade: 0 })
    expect(result.score).toBe(0)
    expect(result.level).toBe('grade_0')
    expect(result.maxScore).toBe(4)
  })

  it('returns grade 1 for SAH focal/diffuse, no clots, no IVH', () => {
    const result = scoreFisher({ grade: 1 })
    expect(result.score).toBe(1)
    expect(result.level).toBe('grade_1')
  })

  it('returns grade 2 for SAH without clots, with IVH', () => {
    const result = scoreFisher({ grade: 2 })
    expect(result.score).toBe(2)
    expect(result.level).toBe('grade_2')
  })

  it('returns grade 3 for SAH with clots, without IVH', () => {
    const result = scoreFisher({ grade: 3 })
    expect(result.score).toBe(3)
    expect(result.level).toBe('grade_3')
  })

  it('returns grade 4 for SAH with clots and IVH', () => {
    const result = scoreFisher({ grade: 4 })
    expect(result.score).toBe(4)
    expect(result.level).toBe('grade_4')
  })

  it('defaults to grade 0 when grade is missing', () => {
    const result = scoreFisher({})
    expect(result.score).toBe(0)
    expect(result.level).toBe('grade_0')
  })

  it('returns correct levelKey for grade 0', () => {
    const result = scoreFisher({ grade: 0 })
    expect(result.levelKey).toBe('fisher.result.grade_0')
    expect(result.levelDescKey).toBe('fisher.result.grade_0.desc')
  })

  it('returns correct levelKey for grade 4', () => {
    const result = scoreFisher({ grade: 4 })
    expect(result.levelKey).toBe('fisher.result.grade_4')
    expect(result.levelDescKey).toBe('fisher.result.grade_4.desc')
  })
})

// ── fisherIndex definition integrity ─────────────────────────────────────────

describe('fisherIndex definition', () => {
  it('has 1 activity', () => {
    expect(fisherIndex.activities.length).toBe(1)
  })

  it('has maxScore of 4', () => {
    expect(fisherIndex.maxScore).toBe(4)
  })

  it('activity id is "grade"', () => {
    expect(fisherIndex.activities[0].id).toBe('grade')
  })

  it('grade activity has 5 options with values 0–4', () => {
    const values = fisherIndex.activities[0].options
      .map((o) => o.value)
      .sort((a, b) => a - b)
    expect(values).toEqual([0, 1, 2, 3, 4])
  })

  it('max option value equals maxScore', () => {
    const max = Math.max(
      ...fisherIndex.activities[0].options.map((o) => o.value)
    )
    expect(max).toBe(fisherIndex.maxScore)
  })
})
