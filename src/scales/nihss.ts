import type { ScaleDefinition, ScaleResult, StrokeSeverity } from './types';

export const nihssIndex: ScaleDefinition = {
  id: 'nihss',
  badge: 'NIHSS',
  titleKey: 'nihss.title',
  subtitleKey: 'nihss.subtitle',
  descriptionKey: 'nihss.description',
  instructionsKey: 'nihss.instructions',
  maxScore: 42,
  activities: [
    // 1a. Nivel de conciencia
    {
      id: 'loc',
      labelKey: 'nihss.loc.label',
      options: [
        { value: 0, labelKey: 'nihss.loc.opt-0' },
        { value: 1, labelKey: 'nihss.loc.opt-1' },
        { value: 2, labelKey: 'nihss.loc.opt-2' },
        { value: 3, labelKey: 'nihss.loc.opt-3' },
      ],
    },
    // 1b. Nivel de conciencia — Preguntas verbales
    {
      id: 'loc_questions',
      labelKey: 'nihss.loc_questions.label',
      noteKey: 'nihss.loc_questions.note',
      options: [
        { value: 0, labelKey: 'nihss.loc_questions.opt-0' },
        { value: 1, labelKey: 'nihss.loc_questions.opt-1' },
        { value: 2, labelKey: 'nihss.loc_questions.opt-2' },
      ],
    },
    // 1c. Nivel de conciencia — Órdenes motoras
    {
      id: 'loc_commands',
      labelKey: 'nihss.loc_commands.label',
      noteKey: 'nihss.loc_commands.note',
      options: [
        { value: 0, labelKey: 'nihss.loc_commands.opt-0' },
        { value: 1, labelKey: 'nihss.loc_commands.opt-1' },
        { value: 2, labelKey: 'nihss.loc_commands.opt-2' },
      ],
    },
    // 2. Mirada conjugada
    {
      id: 'gaze',
      labelKey: 'nihss.gaze.label',
      noteKey: 'nihss.gaze.note',
      options: [
        { value: 0, labelKey: 'nihss.gaze.opt-0' },
        { value: 1, labelKey: 'nihss.gaze.opt-1' },
        { value: 2, labelKey: 'nihss.gaze.opt-2' },
      ],
    },
    // 3. Campos visuales
    {
      id: 'visual',
      labelKey: 'nihss.visual.label',
      noteKey: 'nihss.visual.note',
      options: [
        { value: 0, labelKey: 'nihss.visual.opt-0' },
        { value: 1, labelKey: 'nihss.visual.opt-1' },
        { value: 2, labelKey: 'nihss.visual.opt-2' },
        { value: 3, labelKey: 'nihss.visual.opt-3' },
      ],
    },
    // 4. Paresia facial
    {
      id: 'facial_palsy',
      labelKey: 'nihss.facial_palsy.label',
      options: [
        { value: 0, labelKey: 'nihss.facial_palsy.opt-0' },
        { value: 1, labelKey: 'nihss.facial_palsy.opt-1' },
        { value: 2, labelKey: 'nihss.facial_palsy.opt-2' },
        { value: 3, labelKey: 'nihss.facial_palsy.opt-3' },
      ],
    },
    // 5a. Paresia extremidad superior derecha
    {
      id: 'arm_right',
      labelKey: 'nihss.arm_right.label',
      noteKey: 'nihss.upper_limbs.note',
      options: [
        { value: 0, labelKey: 'nihss.arm.opt-0' },
        { value: 1, labelKey: 'nihss.arm.opt-1' },
        { value: 2, labelKey: 'nihss.arm.opt-2' },
        { value: 3, labelKey: 'nihss.arm.opt-3' },
        { value: 4, labelKey: 'nihss.arm.opt-4' },
        { value: 9, labelKey: 'nihss.limb.opt-9', excluded: true },
      ],
    },
    // 5b. Paresia extremidad superior izquierda
    {
      id: 'arm_left',
      labelKey: 'nihss.arm_left.label',
      options: [
        { value: 0, labelKey: 'nihss.arm.opt-0' },
        { value: 1, labelKey: 'nihss.arm.opt-1' },
        { value: 2, labelKey: 'nihss.arm.opt-2' },
        { value: 3, labelKey: 'nihss.arm.opt-3' },
        { value: 4, labelKey: 'nihss.arm.opt-4' },
        { value: 9, labelKey: 'nihss.limb.opt-9', excluded: true },
      ],
    },
    // 6a. Paresia extremidad inferior derecha
    {
      id: 'leg_right',
      labelKey: 'nihss.leg_right.label',
      noteKey: 'nihss.lower_limbs.note',
      options: [
        { value: 0, labelKey: 'nihss.leg.opt-0' },
        { value: 1, labelKey: 'nihss.leg.opt-1' },
        { value: 2, labelKey: 'nihss.leg.opt-2' },
        { value: 3, labelKey: 'nihss.leg.opt-3' },
        { value: 4, labelKey: 'nihss.leg.opt-4' },
        { value: 9, labelKey: 'nihss.limb.opt-9', excluded: true },
      ],
    },
    // 6b. Paresia extremidad inferior izquierda
    {
      id: 'leg_left',
      labelKey: 'nihss.leg_left.label',
      options: [
        { value: 0, labelKey: 'nihss.leg.opt-0' },
        { value: 1, labelKey: 'nihss.leg.opt-1' },
        { value: 2, labelKey: 'nihss.leg.opt-2' },
        { value: 3, labelKey: 'nihss.leg.opt-3' },
        { value: 4, labelKey: 'nihss.leg.opt-4' },
        { value: 9, labelKey: 'nihss.limb.opt-9', excluded: true },
      ],
    },
    // 7. Ataxia de las extremidades
    {
      id: 'ataxia',
      labelKey: 'nihss.ataxia.label',
      noteKey: 'nihss.ataxia.note',
      options: [
        { value: 0, labelKey: 'nihss.ataxia.opt-0' },
        { value: 1, labelKey: 'nihss.ataxia.opt-1' },
        { value: 2, labelKey: 'nihss.ataxia.opt-2' },
      ],
    },
    // 8. Sensibilidad
    {
      id: 'sensory',
      labelKey: 'nihss.sensory.label',
      noteKey: 'nihss.sensory.note',
      options: [
        { value: 0, labelKey: 'nihss.sensory.opt-0' },
        { value: 1, labelKey: 'nihss.sensory.opt-1' },
        { value: 2, labelKey: 'nihss.sensory.opt-2' },
      ],
    },
    // 9. Lenguaje
    {
      id: 'language',
      labelKey: 'nihss.language.label',
      noteKey: 'nihss.language.note',
      options: [
        { value: 0, labelKey: 'nihss.language.opt-0' },
        { value: 1, labelKey: 'nihss.language.opt-1' },
        { value: 2, labelKey: 'nihss.language.opt-2' },
        { value: 3, labelKey: 'nihss.language.opt-3' },
      ],
    },
    // 10. Disartria
    {
      id: 'dysarthria',
      labelKey: 'nihss.dysarthria.label',
      noteKey: 'nihss.dysarthria.note',
      options: [
        { value: 0, labelKey: 'nihss.dysarthria.opt-0' },
        { value: 1, labelKey: 'nihss.dysarthria.opt-1' },
        { value: 2, labelKey: 'nihss.dysarthria.opt-2' },
        { value: 9, labelKey: 'nihss.dysarthria.opt-9', excluded: true },
      ],
    },
    // 11. Extinción / Negligencia / Inatención
    {
      id: 'neglect',
      labelKey: 'nihss.neglect.label',
      noteKey: 'nihss.neglect.note',
      options: [
        { value: 0, labelKey: 'nihss.neglect.opt-0' },
        { value: 1, labelKey: 'nihss.neglect.opt-1' },
        { value: 2, labelKey: 'nihss.neglect.opt-2' },
      ],
    },
  ],
};

const levelKeyMap: Record<StrokeSeverity, { levelKey: string; levelDescKey: string }> = {
  normal:           { levelKey: 'nihss.result.normal',           levelDescKey: 'nihss.result.normal.desc' },
  mild:             { levelKey: 'nihss.result.mild',             levelDescKey: 'nihss.result.mild.desc' },
  moderate:         { levelKey: 'nihss.result.moderate',         levelDescKey: 'nihss.result.moderate.desc' },
  moderate_severe:  { levelKey: 'nihss.result.moderate_severe',  levelDescKey: 'nihss.result.moderate_severe.desc' },
  severe:           { levelKey: 'nihss.result.severe',           levelDescKey: 'nihss.result.severe.desc' },
};

export function interpretNIHSS(score: number): StrokeSeverity {
  if (score === 0) return 'normal';
  if (score <= 4)  return 'mild';
  if (score <= 15) return 'moderate';
  if (score <= 20) return 'moderate_severe';
  return 'severe';
}

export function scoreNIHSS(answers: Record<string, number>): ScaleResult {
  const score = nihssIndex.activities.reduce((sum, activity) => {
    const val = answers[activity.id];
    if (val === undefined) return sum;
    const opt = activity.options.find((o) => o.value === val);
    if (opt?.excluded) return sum;
    return sum + val;
  }, 0);

  const level = interpretNIHSS(score);
  const { levelKey, levelDescKey } = levelKeyMap[level];
  return { score, maxScore: nihssIndex.maxScore, level, levelKey, levelDescKey };
}
