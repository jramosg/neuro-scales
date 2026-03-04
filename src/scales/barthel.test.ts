import { describe, it, expect } from 'vitest'
import { scoreBarthel, interpretBarthel, barthelIndex } from './barthel'
import { buildLabelIndex, createByLabel } from './test-utils'

const labelIndex = buildLabelIndex(barthelIndex)
const byLabel = createByLabel(labelIndex)

describe('interpretBarthel', () => {
  it('returns independent for 100', () => {
    expect(interpretBarthel(100)).toBe('independent')
  })

  it('returns mild for scores 60–99', () => {
    expect(interpretBarthel(60)).toBe('mild')
    expect(interpretBarthel(80)).toBe('mild')
    expect(interpretBarthel(99)).toBe('mild')
  })

  it('returns moderate for scores 40–59', () => {
    expect(interpretBarthel(40)).toBe('moderate')
    expect(interpretBarthel(50)).toBe('moderate')
    expect(interpretBarthel(59)).toBe('moderate')
  })

  it('returns severe for scores 20–39', () => {
    expect(interpretBarthel(20)).toBe('severe')
    expect(interpretBarthel(30)).toBe('severe')
    expect(interpretBarthel(39)).toBe('severe')
  })

  it('returns total for scores 0–19', () => {
    expect(interpretBarthel(0)).toBe('total')
    expect(interpretBarthel(10)).toBe('total')
    expect(interpretBarthel(19)).toBe('total')
  })
})

describe('scoreBarthel', () => {
  it('returns 100 and independent when all activities are at max', () => {
    const allMax: Record<string, number> = {}
    barthelIndex.activities.forEach((a) => {
      allMax[a.id] = Math.max(...a.options.map((o) => o.value))
    })
    const result = scoreBarthel(allMax)
    expect(result.score).toBe(100)
    expect(result.level).toBe('independent')
    expect(result.maxScore).toBe(100)
    expect(result.levelKey).toBe('results.independent')
    expect(result.levelDescKey).toBe('results.independent.desc')
  })

  it('returns 0 and total when all activities are at 0', () => {
    const allZero: Record<string, number> = {}
    barthelIndex.activities.forEach((a) => {
      allZero[a.id] = 0
    })
    const result = scoreBarthel(allZero)
    expect(result.score).toBe(0)
    expect(result.level).toBe('total')
    expect(result.levelKey).toBe('results.total')
  })

  it('correctly sums partial scores', () => {
    // feeding=10, bathing=5, grooming=5, dressing=5, bowel=5, bladder=5, toilet=5, transfers=5, mobility=5, stairs=5 = 55
    const partial: Record<string, number> = {
      feeding: 10,
      bathing: 5,
      grooming: 5,
      dressing: 5,
      bowel: 5,
      bladder: 5,
      toilet: 5,
      transfers: 5,
      mobility: 5,
      stairs: 5,
    }
    const result = scoreBarthel(partial)
    expect(result.score).toBe(55)
    expect(result.level).toBe('moderate')
  })

  it('returns severe for score in 20–39 range', () => {
    const answers: Record<string, number> = {
      feeding: 5,
      bathing: 0,
      grooming: 5,
      dressing: 0,
      bowel: 5,
      bladder: 5,
      toilet: 0,
      transfers: 5,
      mobility: 5,
      stairs: 0,
    }
    const result = scoreBarthel(answers)
    expect(result.score).toBe(30)
    expect(result.level).toBe('severe')
  })

  it('completely dependent patient with full incontinence + unable to move + needs feeding scores 0 (dependencia total)', () => {
    const answers: Record<string, number> = {
      feeding: byLabel('feeding', 'Dependiente — necesita ser alimentado'),
      bathing: byLabel('bathing', 'Dependiente — necesita ayuda'),
      grooming: byLabel('grooming', 'Dependiente — necesita ayuda'),
      dressing: byLabel('dressing', 'Dependiente — necesita ayuda total'),
      bowel: byLabel('bowel', 'Incontinente — o necesita enema'),
      bladder: byLabel('bladder', 'Incontinente — o cateterizado'),
      toilet: byLabel('toilet', 'Dependiente'),
      transfers: byLabel('transfers', 'Dependiente — no puede sentarse'),
      mobility: byLabel('mobility', 'Dependiente — no puede deambular'),
      stairs: byLabel('stairs', 'Dependiente — incapaz de subir escaleras'),
    }
    const result = scoreBarthel(answers)
    expect(result.score).toBe(0)
    expect(result.level).toBe('total')
    expect(result.levelKey).toBe('results.total')
  })

  const answers: Record<string, number> = {
    feeding: byLabel(
      'feeding',
      'Necesita ayuda — cortar alimentos, untar pan, etc.'
    ), // 5
    bathing: byLabel('bathing', 'Dependiente — necesita ayuda'), // 0
    grooming: byLabel(
      'grooming',
      'Independiente — lavarse cara, peinarse, afeitarse'
    ), // 5
    dressing: byLabel('dressing', 'Dependiente — necesita ayuda total'), // 0
    bowel: byLabel(
      'bowel',
      'Accidente ocasional — menos de una vez por semana'
    ), // 5
    bladder: byLabel('bladder', 'Incontinente — o cateterizado'), // 0
    toilet: byLabel(
      'toilet',
      'Necesita ayuda — mantiene equilibrio, limpia solo'
    ), // 5
    transfers: byLabel(
      'transfers',
      'Gran ayuda — puede sentarse, necesita ayuda para transferirse'
    ), // 5
    mobility: byLabel(
      'mobility',
      'Necesita ayuda — supervisión física o verbal'
    ), // 10
    stairs: byLabel('stairs', 'Dependiente — incapaz de subir escaleras'), // 0
  }

  it('severe dependence: partial continence + needs help with grooming + assisted walking scores 35 (dependencia grave)', () => {
    const result = scoreBarthel(answers)
    expect(result.score).toBe(35)
    expect(result.level).toBe('severe')
    expect(result.levelKey).toBe('results.severe')
  })

  it('change in one activity updates score and level accordingly', () => {
    answers.stairs = byLabel(
      'stairs',
      'Necesita ayuda — supervisión verbal o física'
    ) // +5
    const result2 = scoreBarthel(answers)
    expect(result2.score).toBe(40)
    expect(result2.level).toBe('moderate')
  })
})

describe('barthelIndex definition', () => {
  it('has exactly 10 activities', () => {
    expect(barthelIndex.activities).toHaveLength(10)
  })

  it('max possible score across all activities equals 100', () => {
    const maxTotal = barthelIndex.activities.reduce(
      (sum, a) => sum + Math.max(...a.options.map((o) => o.value)),
      0
    )
    expect(maxTotal).toBe(100)
  })

  it('all activities have at least 2 options', () => {
    barthelIndex.activities.forEach((a) => {
      expect(a.options.length).toBeGreaterThanOrEqual(2)
    })
  })

  it('all activities include a 0-value option', () => {
    barthelIndex.activities.forEach((a) => {
      const hasZero = a.options.some((o) => o.value === 0)
      expect(hasZero).toBe(true)
    })
  })

  it('transfers and mobility have max score of 15', () => {
    const transfers = barthelIndex.activities.find((a) => a.id === 'transfers')!
    const mobility = barthelIndex.activities.find((a) => a.id === 'mobility')!
    expect(Math.max(...transfers.options.map((o) => o.value))).toBe(15)
    expect(Math.max(...mobility.options.map((o) => o.value))).toBe(15)
  })

  it('each activity has unique id', () => {
    const ids = barthelIndex.activities.map((a) => a.id)
    const unique = new Set(ids)
    expect(unique.size).toBe(ids.length)
  })
})
