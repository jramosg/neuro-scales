import { describe, it, expect } from 'vitest';
import { nihssIndex, interpretNIHSS, scoreNIHSS } from './nihss';

// ── interpretNIHSS ────────────────────────────────────────────────────────────

describe('interpretNIHSS', () => {
  it('returns normal for score 0', () => {
    expect(interpretNIHSS(0)).toBe('normal');
  });

  it('returns mild for score 1', () => {
    expect(interpretNIHSS(1)).toBe('mild');
  });

  it('returns mild for score 4', () => {
    expect(interpretNIHSS(4)).toBe('mild');
  });

  it('returns moderate for score 5', () => {
    expect(interpretNIHSS(5)).toBe('moderate');
  });

  it('returns moderate for score 15', () => {
    expect(interpretNIHSS(15)).toBe('moderate');
  });

  it('returns moderate_severe for score 16', () => {
    expect(interpretNIHSS(16)).toBe('moderate_severe');
  });

  it('returns moderate_severe for score 20', () => {
    expect(interpretNIHSS(20)).toBe('moderate_severe');
  });

  it('returns severe for score 21', () => {
    expect(interpretNIHSS(21)).toBe('severe');
  });

  it('returns severe for maximum score 42', () => {
    expect(interpretNIHSS(42)).toBe('severe');
  });
});

// ── scoreNIHSS ────────────────────────────────────────────────────────────────

describe('scoreNIHSS', () => {
  it('returns 0 for all-zero answers', () => {
    const answers: Record<string, number> = {};
    nihssIndex.activities.forEach((a) => { answers[a.id] = 0; });
    const result = scoreNIHSS(answers);
    expect(result.score).toBe(0);
    expect(result.level).toBe('normal');
  });

  it('excludes value-9 (N/A) from score', () => {
    const answers: Record<string, number> = {};
    nihssIndex.activities.forEach((a) => { answers[a.id] = 0; });
    // Set arm_right and leg_left to 9 (N/A, excluded)
    answers['arm_right'] = 9;
    answers['leg_left'] = 9;
    const result = scoreNIHSS(answers);
    expect(result.score).toBe(0);
  });

  it('counts non-excluded values normally', () => {
    const answers: Record<string, number> = {};
    nihssIndex.activities.forEach((a) => { answers[a.id] = 0; });
    answers['loc'] = 2;
    answers['gaze'] = 1;
    answers['language'] = 3;
    const result = scoreNIHSS(answers);
    expect(result.score).toBe(6);
    expect(result.level).toBe('moderate');
  });

  it('handles mixed N/A and scored items', () => {
    const answers: Record<string, number> = {};
    nihssIndex.activities.forEach((a) => { answers[a.id] = 0; });
    answers['arm_right'] = 9; // excluded
    answers['arm_left'] = 9;  // excluded
    answers['leg_right'] = 9; // excluded
    answers['leg_left'] = 9;  // excluded
    answers['loc'] = 3;
    answers['language'] = 3;
    const result = scoreNIHSS(answers);
    expect(result.score).toBe(6); // only loc + language counted
  });

  it('computes maxScore as 42', () => {
    const answers: Record<string, number> = {};
    nihssIndex.activities.forEach((a) => { answers[a.id] = 0; });
    const result = scoreNIHSS(answers);
    expect(result.maxScore).toBe(42);
  });

  it('returns levelKey and levelDescKey for normal', () => {
    const answers: Record<string, number> = {};
    nihssIndex.activities.forEach((a) => { answers[a.id] = 0; });
    const result = scoreNIHSS(answers);
    expect(result.levelKey).toBe('nihss.result.normal');
    expect(result.levelDescKey).toBe('nihss.result.normal.desc');
  });

  it('returns levelKey for severe', () => {
    const answers: Record<string, number> = {};
    nihssIndex.activities.forEach((a) => { answers[a.id] = 0; });
    answers['loc'] = 3;
    answers['loc_questions'] = 2;
    answers['loc_commands'] = 2;
    answers['gaze'] = 2;
    answers['visual'] = 3;
    answers['facial_palsy'] = 3;
    answers['arm_right'] = 4;
    answers['arm_left'] = 4;
    answers['leg_right'] = 4;
    answers['leg_left'] = 4;
    answers['language'] = 3;
    const result = scoreNIHSS(answers);
    expect(result.score).toBeGreaterThanOrEqual(21);
    expect(result.level).toBe('severe');
    expect(result.levelKey).toBe('nihss.result.severe');
  });

  it('skips undefined answers', () => {
    // Only answer a subset of activities
    const result = scoreNIHSS({ loc: 1, gaze: 1 });
    expect(result.score).toBe(2);
  });
});

// ── nihssIndex definition integrity ──────────────────────────────────────────

describe('nihssIndex definition', () => {
  it('has 15 activities', () => {
    expect(nihssIndex.activities.length).toBe(15);
  });

  it('has maxScore of 42', () => {
    expect(nihssIndex.maxScore).toBe(42);
  });

  it('all activities have unique IDs', () => {
    const ids = nihssIndex.activities.map((a) => a.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('all activities have at least one option with value 0', () => {
    for (const activity of nihssIndex.activities) {
      const hasZero = activity.options.some((o) => o.value === 0 || o.excluded);
      expect(hasZero, `Activity ${activity.id} should have a 0-value or excluded option`).toBe(true);
    }
  });

  it('limb activities have value-9 excluded option', () => {
    const limbIds = ['arm_right', 'arm_left', 'leg_right', 'leg_left'];
    for (const id of limbIds) {
      const activity = nihssIndex.activities.find((a) => a.id === id)!;
      const excludedOpt = activity.options.find((o) => o.value === 9 && o.excluded);
      expect(excludedOpt, `${id} should have excluded value-9 option`).toBeDefined();
    }
  });

  it('dysarthria has value-9 excluded option', () => {
    const activity = nihssIndex.activities.find((a) => a.id === 'dysarthria')!;
    const excludedOpt = activity.options.find((o) => o.value === 9 && o.excluded);
    expect(excludedOpt).toBeDefined();
  });
});
