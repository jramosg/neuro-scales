export type Langs = 'es' | 'eu'
export const defaultLang: Langs = 'es'

export const ui: Record<Langs, Record<string, string>> = {
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.scales': 'Escalas',

    // Index page
    'index.title': 'Escalas de Valoración Neurológica',
    'index.subtitle':
      'Herramientas de evaluación clínica estandarizadas para profesionales de la salud',
    'index.select-scale': 'Selecciona una escala de valoración',
    'index.more-scales': 'Próximamente más escalas',

    // Barthel scale meta
    'barthel.title': 'Índice de Barthel',
    'barthel.subtitle': 'Actividades básicas de la vida diaria',
    'barthel.description':
      'Evalúa el nivel de independencia funcional en 10 actividades básicas de la vida diaria. Ampliamente utilizado en geriatría, neurología y rehabilitación.',
    'barthel.instructions':
      'Seleccione la opción que mejor describa la capacidad actual del paciente en cada actividad. Basearse en el comportamiento observado en las últimas 24-48 horas.',
    'barthel.progress': 'de 10 actividades valoradas',
    'barthel.calculate': 'Calcular puntuación',
    'barthel.calculate-hint': 'Complete todas las actividades para calcular',

    // Barthel activities
    'barthel.feeding.label': 'Alimentación',
    'barthel.feeding.opt-10':
      'Independiente — come sin ayuda en tiempo razonable',
    'barthel.feeding.opt-5':
      'Necesita ayuda — cortar alimentos, untar pan, etc.',
    'barthel.feeding.opt-0': 'Dependiente — necesita ser alimentado',

    'barthel.bathing.label': 'Baño / Ducha',
    'barthel.bathing.opt-5': 'Independiente — se baña sin ayuda',
    'barthel.bathing.opt-0': 'Dependiente — necesita ayuda',

    'barthel.grooming.label': 'Aseo personal',
    'barthel.grooming.opt-5':
      'Independiente — lavarse cara, peinarse, afeitarse',
    'barthel.grooming.opt-0': 'Dependiente — necesita ayuda',

    'barthel.dressing.label': 'Vestido',
    'barthel.dressing.opt-10': 'Independiente — se viste y desviste sin ayuda',
    'barthel.dressing.opt-5':
      'Necesita ayuda — realiza al menos la mitad sin ayuda',
    'barthel.dressing.opt-0': 'Dependiente — necesita ayuda total',

    'barthel.bowel.label': 'Control intestinal',
    'barthel.bowel.opt-10': 'Continente — sin accidentes',
    'barthel.bowel.opt-5': 'Accidente ocasional — menos de una vez por semana',
    'barthel.bowel.opt-0': 'Incontinente — o necesita enema',

    'barthel.bladder.label': 'Control vesical',
    'barthel.bladder.opt-10': 'Continente — sin accidentes, seco día y noche',
    'barthel.bladder.opt-5': 'Accidente ocasional — menos de una vez al día',
    'barthel.bladder.opt-0': 'Incontinente — o cateterizado',

    'barthel.toilet.label': 'Uso del inodoro',
    'barthel.toilet.opt-10': 'Independiente — uso del retrete sin ayuda',
    'barthel.toilet.opt-5': 'Necesita ayuda — mantiene equilibrio, limpia solo',
    'barthel.toilet.opt-0': 'Dependiente',

    'barthel.transfers.label': 'Traslado cama-silla',
    'barthel.transfers.opt-15': 'Independiente — sin supervisión',
    'barthel.transfers.opt-10': 'Mínima ayuda — supervisión verbal o física',
    'barthel.transfers.opt-5':
      'Gran ayuda — puede sentarse, necesita ayuda para transferirse',
    'barthel.transfers.opt-0': 'Dependiente — no puede sentarse',

    'barthel.mobility.label': 'Deambulación',
    'barthel.mobility.opt-15': 'Independiente — camina 50m sin ayuda',
    'barthel.mobility.opt-10': 'Necesita ayuda — supervisión física o verbal',
    'barthel.mobility.opt-5': 'Independiente en silla de ruedas — 50m',
    'barthel.mobility.opt-0': 'Dependiente — no puede deambular',

    'barthel.stairs.label': 'Escaleras',
    'barthel.stairs.opt-10': 'Independiente — sube y baja sin ayuda',
    'barthel.stairs.opt-5': 'Necesita ayuda — supervisión verbal o física',
    'barthel.stairs.opt-0': 'Dependiente — incapaz de subir escaleras',

    // Results
    'results.title': 'Resultado',
    'results.subtitle': 'Índice de Barthel',
    'results.score': 'Puntuación total',
    'results.max': 'de 100 puntos',
    'results.interpretation': 'Interpretación clínica',
    'results.independent': 'Independiente',
    'results.independent.desc':
      'La persona es completamente independiente en las actividades básicas de la vida diaria.',
    'results.mild': 'Dependencia leve',
    'results.mild.desc':
      'Necesita mínima asistencia para algunas actividades cotidianas.',
    'results.moderate': 'Dependencia moderada',
    'results.moderate.desc':
      'Requiere ayuda para varias actividades básicas diarias.',
    'results.severe': 'Dependencia grave',
    'results.severe.desc':
      'Necesita asistencia considerable para la mayoría de las actividades.',
    'results.total': 'Dependencia total',
    'results.total.desc':
      'Requiere ayuda para todas las actividades básicas de la vida diaria.',
    'results.back': 'Volver al inicio',
    'results.retake': 'Repetir valoración',
    'results.scale-ranges': 'Rangos de la escala',
    'results.range.100': '100 — Independiente',
    'results.range.60': '60–99 — Dependencia leve',
    'results.range.40': '40–59 — Dependencia moderada',
    'results.range.20': '20–39 — Dependencia grave',
    'results.range.0': '0–19 — Dependencia total',

    // Footer
    'footer.credits': 'Escalas de Valoración Neurológica',
    'footer.disclaimer':
      'Herramienta de uso profesional. No sustituye el criterio clínico.',

    // Language toggle
    'lang.switch': 'Euskaraz',
    'lang.current': 'Castellano',

    // NIHSS scale meta
    'nihss.title': 'Escala NIHSS',
    'nihss.subtitle': 'Severidad del ictus isquémico agudo',
    'nihss.description':
      'Cuantifica el déficit neurológico en el ictus isquémico agudo mediante 15 ítems. Guía la selección de tratamiento y predice el pronóstico funcional.',
    'nihss.instructions':
      'Puntuar según la respuesta observada. No instruir al paciente. Si hay dudas, elegir la puntuación más alta. Anotar 9 (N/A) en ítems no evaluables por amputación o inaccesibilidad.',
    'nihss.progress': 'de 15 ítems valorados',
    'nihss.calculate': 'Calcular puntuación NIHSS',
    'nihss.calculate-hint': 'Complete todos los ítems para calcular',

    // 1a. Nivel de conciencia
    'nihss.loc.label': '1a. Nivel de conciencia',
    'nihss.loc.opt-0': 'Alerta — responde adecuadamente',
    'nihss.loc.opt-1': 'Somnoliento — se despierta con mínima estimulación',
    'nihss.loc.opt-2': 'Estuporoso — requiere estimulación repetida o dolorosa',
    'nihss.loc.opt-3': 'Coma — respuestas reflejas o sin respuesta',

    // 1b. Preguntas verbales
    'nihss.loc_questions.label': '1b. Preguntas verbales',
    'nihss.loc_questions.note':
      'Preguntar el mes y la edad del paciente. No ayudar con gestos.',
    'nihss.loc_questions.opt-0': 'Responde correctamente ambas preguntas',
    'nihss.loc_questions.opt-1': 'Responde correctamente una pregunta',
    'nihss.loc_questions.opt-2': 'No responde correctamente ninguna',

    // 1c. Órdenes motoras
    'nihss.loc_commands.label': '1c. Órdenes motoras',
    'nihss.loc_commands.note':
      'Ordenar abrir/cerrar los ojos y empuñar/abrir la mano no parética.',
    'nihss.loc_commands.opt-0': 'Realiza correctamente ambas órdenes',
    'nihss.loc_commands.opt-1': 'Realiza correctamente una orden',
    'nihss.loc_commands.opt-2': 'No realiza ninguna orden',

    // 2. Mirada conjugada
    'nihss.gaze.label': '2. Mirada conjugada',
    'nihss.gaze.note':
      'Solo movimientos oculares horizontales voluntarios o reflejos (oculocefálico).',
    'nihss.gaze.opt-0': 'Normal',
    'nihss.gaze.opt-1':
      'Paresia parcial — desviación o paresia pero no forzada',
    'nihss.gaze.opt-2': 'Desviación forzada — paresia total no superable',

    // 3. Campos visuales
    'nihss.visual.label': '3. Campos visuales',
    'nihss.visual.note':
      'Confrontación visual en cada cuadrante. Si ceguera unilateral, puntuar campo del ojo sano.',
    'nihss.visual.opt-0': 'Sin pérdida visual',
    'nihss.visual.opt-1': 'Hemianopsia parcial',
    'nihss.visual.opt-2': 'Hemianopsia completa',
    'nihss.visual.opt-3': 'Hemianopsia bilateral / ceguera cortical',

    // 4. Paresia facial
    'nihss.facial_palsy.label': '4. Paresia facial',
    'nihss.facial_palsy.opt-0': 'Normal — movimientos simétricos',
    'nihss.facial_palsy.opt-1':
      'Paresia menor — asimetría en la sonrisa, pliegue nasolabial aplanado',
    'nihss.facial_palsy.opt-2':
      'Paresia parcial — parálisis total de hemicara inferior',
    'nihss.facial_palsy.opt-3': 'Parálisis completa — superior e inferior',

    // 5a/5b. Extremidades superiores
    'nihss.arm_right.label': '5a. Extremidad superior derecha',
    'nihss.arm_left.label': '5b. Extremidad superior izquierda',
    'nihss.upper_limbs.note':
      'Mantener brazo extendido a 90° (sentado) o 45° (decúbito) durante 10 s. Anotar N/A si amputación u otra causa.',
    'nihss.arm.opt-0': 'Sin caída — mantiene posición 10 s',
    'nihss.arm.opt-1': 'Caída — cede antes de 10 s, no llega a la cama',
    'nihss.arm.opt-2': 'Esfuerzo contra gravedad — cede a la cama',
    'nihss.arm.opt-3': 'Sin esfuerzo contra gravedad — cae, se puede mover',
    'nihss.arm.opt-4': 'Sin movimiento',

    // 6a/6b. Extremidades inferiores
    'nihss.leg_right.label': '6a. Extremidad inferior derecha',
    'nihss.leg_left.label': '6b. Extremidad inferior izquierda',
    'nihss.lower_limbs.note':
      'Mantener pierna extendida a 30° en decúbito durante 5 s. Anotar N/A si amputación u otra causa.',
    'nihss.leg.opt-0': 'Sin caída — mantiene posición 5 s',
    'nihss.leg.opt-1': 'Caída — cede antes de 5 s, no llega a la cama',
    'nihss.leg.opt-2': 'Esfuerzo contra gravedad — cede a la cama',
    'nihss.leg.opt-3': 'Sin esfuerzo contra gravedad — cae, se puede mover',
    'nihss.leg.opt-4': 'Sin movimiento',

    // N/A compartido (extremidades)
    'nihss.limb.opt-9': 'N/A — amputación o artrodesis',

    // 7. Ataxia
    'nihss.ataxia.label': '7. Ataxia de las extremidades',
    'nihss.ataxia.note':
      'Prueba dedo-nariz y talón-rodilla. Solo puntuar si desproporcionada respecto a la paresia.',
    'nihss.ataxia.opt-0': 'Ausente',
    'nihss.ataxia.opt-1': 'Presente en una extremidad',
    'nihss.ataxia.opt-2': 'Presente en dos extremidades',

    // 8. Sensibilidad
    'nihss.sensory.label': '8. Sensibilidad',
    'nihss.sensory.note':
      'Evaluar con aguja. Solo defecto severo o hemihipoestesia puntuable si alteración de conciencia.',
    'nihss.sensory.opt-0': 'Normal — sin pérdida sensitiva',
    'nihss.sensory.opt-1':
      'Leve-moderada — hipoestesia, pero consciente del tacto',
    'nihss.sensory.opt-2':
      'Severa o total — no reconoce el tacto en la cara, brazo y pierna',

    // 9. Lenguaje
    'nihss.language.label': '9. Lenguaje / Afasia',
    'nihss.language.note':
      'Descripción de lámina, denominación de objetos y lectura de frases estándar.',
    'nihss.language.opt-0': 'Normal — sin afasia',
    'nihss.language.opt-1':
      'Afasia leve-moderada — posible comunicación con dificultad',
    'nihss.language.opt-2': 'Afasia severa — comunicación fragmentada',
    'nihss.language.opt-3': 'Mutismo / afasia global',

    // 10. Disartria
    'nihss.dysarthria.label': '10. Disartria',
    'nihss.dysarthria.note':
      'Leer o repetir palabras de la lista estándar. Anotar N/A si intubado u otra causa.',
    'nihss.dysarthria.opt-0': 'Normal',
    'nihss.dysarthria.opt-1':
      'Leve-moderada — habla con dificultad pero se comprende',
    'nihss.dysarthria.opt-2': 'Severa — habla ininteligible o anartria',
    'nihss.dysarthria.opt-9': 'N/A — intubado u otra causa',

    // 11. Extinción / Negligencia
    'nihss.neglect.label': '11. Extinción / Negligencia',
    'nihss.neglect.note':
      'Estimulación simultánea bilateral. Evaluar también negligencia visual y espacial.',
    'nihss.neglect.opt-0': 'Sin anormalidad',
    'nihss.neglect.opt-1': 'Inatención o extinción en una modalidad',
    'nihss.neglect.opt-2': 'Hemi-inatención profunda en más de una modalidad',

    // NIHSS result levels
    'nihss.result.normal': 'Sin déficit',
    'nihss.result.normal.desc':
      'Exploración neurológica sin déficit evidente. Monitorizar estrechamente ante posible fluctuación.',
    'nihss.result.mild': 'Ictus leve',
    'nihss.result.mild.desc':
      'Déficit neurológico mínimo. Candidato potencial a tratamiento trombolítico si criterios cumplidos.',
    'nihss.result.moderate': 'Ictus moderado',
    'nihss.result.moderate.desc':
      'Déficit neurológico significativo. Evaluar elegibilidad para trombólisis i.v. o trombectomía mecánica.',
    'nihss.result.moderate_severe': 'Ictus moderado-grave',
    'nihss.result.moderate_severe.desc':
      'Déficit grave con compromiso funcional importante. Considerar trombectomía mecánica si oclusión de gran vaso.',
    'nihss.result.severe': 'Ictus grave',
    'nihss.result.severe.desc':
      'Déficit neurológico severo. Priorizar intervención urgente y monitorización intensiva.',

    // NIHSS results display
    'nihss.results.max': 'de 42 puntos',
    'nihss.results.score': 'Puntuación NIHSS',
    'nihss.results.ranges': 'Rangos de severidad',
    'nihss.results.range.normal': '0 — Sin déficit',
    'nihss.results.range.mild': '1–4 — Ictus leve',
    'nihss.results.range.moderate': '5–15 — Ictus moderado',
    'nihss.results.range.moderate_severe': '16–20 — Ictus moderado-grave',
    'nihss.results.range.severe': '21–42 — Ictus grave',
    'form.privacy': 'Los datos se procesan localmente y no se almacenan.',

    // Theme
    'theme.toggle': 'Cambiar tema',
    'footer.privacy': 'Los datos se procesan localmente y no se almacenan.',
  },

  eu: {
    // Navigation
    'nav.home': 'Hasiera',
    'nav.scales': 'Eskalak',

    // Index page
    'index.title': 'Balorazio Eskala Neurologikoak',
    'index.subtitle':
      'Osasun profesionalentzako ebaluazio kliniko estandarizatutako tresnak',
    'index.select-scale': 'Aukeratu balorazio eskala bat',
    'index.more-scales': 'Laster eskala gehiago',

    // Barthel scale meta
    'barthel.title': 'Barthel Indizea',
    'barthel.subtitle': 'Eguneroko bizitzako oinarrizko jarduerak',
    'barthel.description':
      'Eguneroko bizitzako 10 oinarrizko jardueratan autonomia funtzionala ebaluatzen du. Geriatrian, neurologian eta errehabilitazioan asko erabiltzen da.',
    'barthel.instructions':
      'Aukeratu pazientearen uneko gaitasuna hobekien deskribatzen duen aukera jarduera bakoitzean. Azken 24-48 orduetan behatutako portaeran oinarritu.',
    'barthel.progress': '10 jardueretatik baloratuta',
    'barthel.calculate': 'Puntuazioa kalkulatu',
    'barthel.calculate-hint': 'Bete jarduera guztiak kalkulatzeko',

    // Barthel activities
    'barthel.feeding.label': 'Elikadura',
    'barthel.feeding.opt-10':
      'Independentea — laguntzarik gabe jaten du denbora arrazoizkoan',
    'barthel.feeding.opt-5':
      'Laguntza behar du — elikagaiak mozteko, ogia zabaltzeko...',
    'barthel.feeding.opt-0': 'Dependentea — elikatu egin behar da',

    'barthel.bathing.label': 'Bainua / Dutxa',
    'barthel.bathing.opt-5': 'Independentea — laguntzarik gabe bainatzen da',
    'barthel.bathing.opt-0': 'Dependentea — laguntza behar du',

    'barthel.grooming.label': 'Gorputzaren garbitasuna',
    'barthel.grooming.opt-5':
      'Independentea — aurpegia garbitu, orraztea, bizarra kendu',
    'barthel.grooming.opt-0': 'Dependentea — laguntza behar du',

    'barthel.dressing.label': 'Janztea',
    'barthel.dressing.opt-10':
      'Independentea — laguntzarik gabe janzten eta eraizten da',
    'barthel.dressing.opt-5':
      'Laguntza behar du — gutxienez erdia laguntzarik gabe egiten du',
    'barthel.dressing.opt-0': 'Dependentea — laguntza osoa behar du',

    'barthel.bowel.label': 'Heste kontrola',
    'barthel.bowel.opt-10': 'Kontinentea — istripu gabe',
    'barthel.bowel.opt-5': 'Noizbehineko istripua — astean bein baino gutxiago',
    'barthel.bowel.opt-0': 'Inkontinentea — edo enema behar du',

    'barthel.bladder.label': 'Maskuri kontrola',
    'barthel.bladder.opt-10':
      'Kontinentea — istripu gabe, egunez eta gauez lehorra',
    'barthel.bladder.opt-5':
      'Noizbehineko istripua — egunean bein baino gutxiago',
    'barthel.bladder.opt-0': 'Inkontinentea — edo kateterra du',

    'barthel.toilet.label': 'Komunaren erabilera',
    'barthel.toilet.opt-10': 'Independentea — laguntzarik gabe erabiltzen du',
    'barthel.toilet.opt-5':
      'Laguntza behar du — orekan eusten du, bakarrik garbitzen da',
    'barthel.toilet.opt-0': 'Dependentea',

    'barthel.transfers.label': 'Ohe-aulki lekualdaketa',
    'barthel.transfers.opt-15': 'Independentea — gainbegiratzerik gabe',
    'barthel.transfers.opt-10': 'Laguntza minimoa — hitzezko edo fisikoa',
    'barthel.transfers.opt-5':
      'Laguntza handia — eseri daiteke, laguntza behar du transferitzeko',
    'barthel.transfers.opt-0': 'Dependentea — ezin da eseri',

    'barthel.mobility.label': 'Deambulazio',
    'barthel.mobility.opt-15':
      'Independentea — laguntzarik gabe 50m ibiltzen da',
    'barthel.mobility.opt-10':
      'Laguntza behar du — gainbegiratze fisikoa edo hitzezko',
    'barthel.mobility.opt-5': 'Gurpil-aulkian independentea — 50m',
    'barthel.mobility.opt-0': 'Dependentea — ezin da ibili',

    'barthel.stairs.label': 'Eskailerak',
    'barthel.stairs.opt-10': 'Independentea — laguntzarik gabe igo eta jaitsi',
    'barthel.stairs.opt-5': 'Laguntza behar du — hitzezko edo fisikoa',
    'barthel.stairs.opt-0': 'Dependentea — ezin da eskaileretatik igo',

    // Results
    'results.title': 'Emaitza',
    'results.subtitle': 'Barthel Indizea',
    'results.score': 'Puntuazio osoa',
    'results.max': '100 puntutik',
    'results.interpretation': 'Interpretazio klinikoa',
    'results.independent': 'Independentea',
    'results.independent.desc':
      'Pertsona eguneroko bizitzako oinarrizko jardueretan guztiz independentea da.',
    'results.mild': 'Menpekotasun arina',
    'results.mild.desc':
      'Zenbait jarduera arrunterako laguntza minimoa behar du.',
    'results.moderate': 'Menpekotasun moderatua',
    'results.moderate.desc':
      'Oinarrizko hainbat eguneroko jarduerarako laguntza behar du.',
    'results.severe': 'Menpekotasun larria',
    'results.severe.desc': 'Jarduera gehienerako laguntza nabarmena behar du.',
    'results.total': 'Menpekotasun osoa',
    'results.total.desc':
      'Eguneroko bizitzako oinarrizko jarduera guztietarako laguntza behar du.',
    'results.back': 'Hasierara itzuli',
    'results.retake': 'Balorazio errepikatu',
    'results.scale-ranges': 'Eskala tarteak',
    'results.range.100': '100 — Independentea',
    'results.range.60': '60–99 — Menpekotasun arina',
    'results.range.40': '40–59 — Menpekotasun moderatua',
    'results.range.20': '20–39 — Menpekotasun larria',
    'results.range.0': '0–19 — Menpekotasun osoa',

    // Footer
    'footer.credits': 'Balorazio Eskala Neurologikoak',
    'footer.disclaimer':
      'Profesionalen erabilerarako tresna. Ez du irizpide klinikoa ordezkatzen.',

    // Language toggle
    'lang.switch': 'Gaztelaniaz',
    'lang.current': 'Euskara',

    // NIHSS scale meta
    'nihss.title': 'NIHSS Eskala',
    'nihss.subtitle': 'Iktus iskemiko akutuaren larritasuna',
    'nihss.description':
      'Iktus iskemiko akutuan 15 itemaren bidez defizit neurologikoa kuantifikatzen du. Tratamendua aukeratzeko eta pronostiko funtzionala aurresateko erabiltzen da.',
    'nihss.instructions':
      'Behatutako erantzunaren arabera puntuatu. Ez argibiderik eman. Zalantzarik badago, puntuazio altuena aukeratu. Amputazio edo irisgarritasun eza dela eta ezin bada ebaluatu, 9 (N/A) jarri.',
    'nihss.progress': '15 itemetatik baloratuta',
    'nihss.calculate': 'NIHSS puntuazioa kalkulatu',
    'nihss.calculate-hint': 'Bete item guztiak kalkulatzeko',

    // 1a. Kontzientzia maila
    'nihss.loc.label': '1a. Kontzientzia maila',
    'nihss.loc.opt-0': 'Alerta — egoki erantzuten du',
    'nihss.loc.opt-1': 'Logaletsu — estimulazio minimoarekin esnatu',
    'nihss.loc.opt-2':
      'Estupor — estimulazio errepikatu edo mingarria behar du',
    'nihss.loc.opt-3': 'Koma — erreflexuzko erantzunak edo erantzunik ez',

    // 1b. Ahozko galderak
    'nihss.loc_questions.label': '1b. Ahozko galderak',
    'nihss.loc_questions.note':
      'Hilabetea eta adina galdetu. Ez lagundu keinuekin.',
    'nihss.loc_questions.opt-0': 'Bi galderak zuzen erantzun',
    'nihss.loc_questions.opt-1': 'Galdera bat zuzen erantzun',
    'nihss.loc_questions.opt-2': 'Ez du bat ere zuzen erantzun',

    // 1c. Aginte motoreak
    'nihss.loc_commands.label': '1c. Aginte motoreak',
    'nihss.loc_commands.note':
      'Begiak ireki/itxi eta eskua itxi/ireki (ez-paretikoa) agindu.',
    'nihss.loc_commands.opt-0': 'Bi aginduak zuzen bete',
    'nihss.loc_commands.opt-1': 'Aginte bat zuzen bete',
    'nihss.loc_commands.opt-2': 'Ez du bat ere bete',

    // 2. Begirada konjugatua
    'nihss.gaze.label': '2. Begirada konjugatua',
    'nihss.gaze.note':
      'Borondatezko edo erreflexuzko (okulozefalikoaren) begien mugimendu horizontalak soilik.',
    'nihss.gaze.opt-0': 'Normala',
    'nihss.gaze.opt-1':
      'Paresia partziala — desbideraketa edo paresia baina ez behartua',
    'nihss.gaze.opt-2': 'Desbideraketa behartua — gaindiezina',

    // 3. Ikusmen-eremuak
    'nihss.visual.label': '3. Ikusmen-eremuak',
    'nihss.visual.note':
      'Lau koadrantetan begi bakoitzeko ikusmen-eremua ebaluatu.',
    'nihss.visual.opt-0': 'Ikusmen-galeraren barik',
    'nihss.visual.opt-1': 'Hemianopsia partziala',
    'nihss.visual.opt-2': 'Hemianopsia osoa',
    'nihss.visual.opt-3': 'Hemianopsia bilaterala / itsutasun kortikala',

    // 4. Aurpegi-paresia
    'nihss.facial_palsy.label': '4. Aurpegi-paresia',
    'nihss.facial_palsy.opt-0': 'Normala — mugimendu simetrikoak',
    'nihss.facial_palsy.opt-1':
      'Paresia txikia — asimetria irribarrean, naso-labio zimurra laua',
    'nihss.facial_palsy.opt-2':
      'Paresia partziala — aurpegi beheko erdiko paralisi osoa',
    'nihss.facial_palsy.opt-3': 'Paralisi osoa — gorago eta behera',

    // 5a/5b. Goiko gorputzadarrak
    'nihss.arm_right.label': '5a. Goiko gorputzadar eskuina',
    'nihss.arm_left.label': '5b. Goiko gorputzadar ezkerra',
    'nihss.upper_limbs.note':
      'Besoa 90° (eserita) edo 45° (etzanda) luzatuta mantendu 10 s. N/A amputazioa edo beste arrazoiren bat bada.',
    'nihss.arm.opt-0': 'Erorketarik ez — 10 s mantentzen du',
    'nihss.arm.opt-1': 'Erorketa — 10 s baino lehen, ez da oheraino iristen',
    'nihss.arm.opt-2': 'Grabitatearen aurkako ahalegina — ohera erortzen da',
    'nihss.arm.opt-3':
      'Grabitatearen aurkako ahaleginik ez — erori, mugitu daiteke',
    'nihss.arm.opt-4': 'Mugimendurik ez',

    // 6a/6b. Beheko gorputzadarrak
    'nihss.leg_right.label': '6a. Beheko gorputzadar eskuina',
    'nihss.leg_left.label': '6b. Beheko gorputzadar ezkerra',
    'nihss.lower_limbs.note':
      'Hanka 30° etzanda luzatuta mantendu 5 s. N/A amputazioa edo beste arrazoiren bat bada.',
    'nihss.leg.opt-0': 'Erorketarik ez — 5 s mantentzen du',
    'nihss.leg.opt-1': 'Erorketa — 5 s baino lehen, ez da oheraino iristen',
    'nihss.leg.opt-2': 'Grabitatearen aurkako ahalegina — ohera erortzen da',
    'nihss.leg.opt-3':
      'Grabitatearen aurkako ahaleginik ez — erori, mugitu daiteke',
    'nihss.leg.opt-4': 'Mugimendurik ez',

    // N/A partekatua (gorputzadarrak)
    'nihss.limb.opt-9': 'N/A — amputazioa edo artrodesia',

    // 7. Ataxia
    'nihss.ataxia.label': '7. Gorputzadarren ataxia',
    'nihss.ataxia.note':
      'Hatz-sudur eta orpo-belaunik proba. Paresiarekiko desproportzionala bada soilik puntuatu.',
    'nihss.ataxia.opt-0': 'Eza',
    'nihss.ataxia.opt-1': 'Gorputzadar batean presente',
    'nihss.ataxia.opt-2': 'Bi gorputzadarretan presente',

    // 8. Sentikortasuna
    'nihss.sensory.label': '8. Sentikortasuna',
    'nihss.sensory.note':
      'Orratz bidez ebaluatu. Kontzientzia-aldaketetan defekto larria soilik puntuatzen da.',
    'nihss.sensory.opt-0': 'Normala — sentikortasun-galeraren barik',
    'nihss.sensory.opt-1':
      'Arin-moderatua — hipoestesia baina ukimena nabaitzen du',
    'nihss.sensory.opt-2':
      'Larria edo osoa — ukimena ez du ezagutzen aurpegian, besoan eta hankean',

    // 9. Hizkuntza
    'nihss.language.label': '9. Hizkuntza / Afasia',
    'nihss.language.note':
      'Laminaren deskribapena, objektuen izendapena eta esaldien irakurketa estandarrak.',
    'nihss.language.opt-0': 'Normala — afasiarik ez',
    'nihss.language.opt-1':
      'Afasia arin-moderatua — komunikazioa posible zailtasunarekin',
    'nihss.language.opt-2': 'Afasia larria — komunikazio zatikakoa',
    'nihss.language.opt-3': 'Mutismo / afasia globala',

    // 10. Disartria
    'nihss.dysarthria.label': '10. Disartria',
    'nihss.dysarthria.note':
      'Zerrenda estandarreko hitzak irakurri edo errepikatu. N/A intubatuta badago edo beste arrazoi bat.',
    'nihss.dysarthria.opt-0': 'Normala',
    'nihss.dysarthria.opt-1':
      'Arin-moderatua — zailtasunez hitz egiten du baina ulertzen da',
    'nihss.dysarthria.opt-2': 'Larria — hizketa ulerteziña edo anartria',
    'nihss.dysarthria.opt-9': 'N/A — intubatuta edo beste arrazoi bat',

    // 11. Extinzioa / Arretarik eza
    'nihss.neglect.label': '11. Extinzioa / Arretarik eza',
    'nihss.neglect.note':
      'Estimulazio aldebikoa aldi berean. Arreta-eza bisual eta espaziala ere ebaluatu.',
    'nihss.neglect.opt-0': 'Normalitate barik',
    'nihss.neglect.opt-1': 'Modalitate batean arreta-eza edo extinzioa',
    'nihss.neglect.opt-2':
      'Hemi-arreta-eza sakona modalitate batean baino gehiagotan',

    // NIHSS emaitza mailak
    'nihss.result.normal': 'Defizitrik ez',
    'nihss.result.normal.desc':
      'Azterketa neurologikoan defizit nabarmen eza. Jarraipena egin behar da fluktuazio posiblearen aurrean.',
    'nihss.result.mild': 'Iktus arina',
    'nihss.result.mild.desc':
      'Defizit neurologiko minimoa. Irizpideak betetzen badira, tratamendu tronbolítikorako hautagai posiblea.',
    'nihss.result.moderate': 'Iktus moderatua',
    'nihss.result.moderate.desc':
      'Defizit neurologiko esanguratsua. Trombólisi i.b. edo trombektomia mekanikorako hautagarritasuna ebaluatu.',
    'nihss.result.moderate_severe': 'Iktus moderatu-larria',
    'nihss.result.moderate_severe.desc':
      'Konpromiso funtzional garrantzitsuarekin defizit larria. Hodi handiko oklusioaren kasuan trombektomia mekanikoa kontuan hartu.',
    'nihss.result.severe': 'Iktus larria',
    'nihss.result.severe.desc':
      'Defizit neurologiko larria. Presako esku-hartzea eta jarraipen intentsiboa lehenetsi.',

    // NIHSS emaitzen erakustea
    'nihss.results.max': '42 puntutik',
    'nihss.results.score': 'NIHSS Puntuazioa',
    'nihss.results.ranges': 'Larritasun tarteak',
    'nihss.results.range.normal': '0 — Defizitrik ez',
    'nihss.results.range.mild': '1–4 — Iktus arina',
    'nihss.results.range.moderate': '5–15 — Iktus moderatua',
    'nihss.results.range.moderate_severe': '16–20 — Iktus moderatu-larria',
    'nihss.results.range.severe': '21–42 — Iktus larria',
    'form.privacy': 'Datuak lokalean prozesatzen dira eta ez dira gordetzen.',

    // Theme
    'theme.toggle': 'Itxura aldatu',
    'footer.privacy': 'Datuak lokalean prozesatzen dira eta ez dira gordetzen.',
  },
}
