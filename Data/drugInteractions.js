/**
 * Drug Interaction Seed Data
 * Contains known drug interaction pairs covering all severity levels.
 */

const drugInteractions = [
  // ── CRITICAL ──────────────────────────────────────────────────────────────
  {
    drug1: 'ssri',
    drug2: 'maoi',
    severity: 'critical',
    description: 'Combination of SSRIs and MAOIs can cause life-threatening serotonin syndrome.',
    effects: ['serotonin syndrome', 'hyperthermia', 'seizures', 'death'],
    mechanism: 'Excessive serotonergic activity due to dual inhibition of serotonin breakdown and reuptake.',
    recommendation: 'Absolutely contraindicated. Allow 14-day washout period between agents.',
    evidence: 'established'
  },
  {
    drug1: 'fluoxetine',
    drug2: 'phenelzine',
    severity: 'critical',
    description: 'Fluoxetine (SSRI) combined with phenelzine (MAOI) causes fatal serotonin syndrome.',
    effects: ['serotonin syndrome', 'hyperthermia', 'muscle rigidity', 'cardiovascular collapse'],
    mechanism: 'Serotonin accumulation from combined SSRI and MAOI activity.',
    recommendation: 'Contraindicated. Minimum 5-week washout after fluoxetine before starting MAOI.',
    evidence: 'established'
  },
  {
    drug1: 'tramadol',
    drug2: 'maoi',
    severity: 'critical',
    description: 'Tramadol with MAOIs can precipitate serotonin syndrome and seizures.',
    effects: ['serotonin syndrome', 'seizures', 'respiratory depression'],
    mechanism: 'Tramadol inhibits serotonin reuptake; MAOIs prevent serotonin breakdown.',
    recommendation: 'Contraindicated. Do not use together.',
    evidence: 'established'
  },
  {
    drug1: 'linezolid',
    drug2: 'ssri',
    severity: 'critical',
    description: 'Linezolid (weak MAOI) combined with SSRIs risks serotonin syndrome.',
    effects: ['serotonin syndrome', 'agitation', 'hyperthermia'],
    mechanism: 'Linezolid inhibits MAO-A, increasing serotonin when combined with SSRI.',
    recommendation: 'Avoid combination. If necessary, monitor intensively in ICU setting.',
    evidence: 'established'
  },
  {
    drug1: 'warfarin',
    drug2: 'aspirin',
    severity: 'severe',
    description: 'Aspirin inhibits platelet function and displaces warfarin from plasma proteins, greatly increasing bleeding risk.',
    effects: ['major bleeding', 'gastrointestinal hemorrhage', 'intracranial bleeding'],
    mechanism: 'Aspirin irreversibly inhibits COX-1 (antiplatelet) and displaces warfarin from albumin binding sites.',
    recommendation: 'Avoid unless benefit clearly outweighs risk (e.g., mechanical heart valve). Monitor INR closely.',
    evidence: 'established'
  },
  // ── SEVERE ────────────────────────────────────────────────────────────────
  {
    drug1: 'digoxin',
    drug2: 'amiodarone',
    severity: 'severe',
    description: 'Amiodarone significantly increases digoxin plasma levels, risking toxicity.',
    effects: ['digoxin toxicity', 'bradycardia', 'heart block', 'ventricular arrhythmia'],
    mechanism: 'Amiodarone inhibits P-glycoprotein and CYP3A4, reducing digoxin clearance.',
    recommendation: 'Reduce digoxin dose by 30-50% when starting amiodarone. Monitor digoxin levels and ECG.',
    evidence: 'established'
  },
  {
    drug1: 'lisinopril',
    drug2: 'potassium',
    severity: 'severe',
    description: 'ACE inhibitors reduce potassium excretion; supplemental potassium can cause dangerous hyperkalemia.',
    effects: ['hyperkalemia', 'cardiac arrhythmia', 'cardiac arrest'],
    mechanism: 'ACE inhibitors decrease aldosterone, reducing renal potassium excretion.',
    recommendation: 'Avoid potassium supplements unless serum potassium is documented low. Monitor potassium levels.',
    evidence: 'established'
  },
  {
    drug1: 'methotrexate',
    drug2: 'nsaid',
    severity: 'severe',
    description: 'NSAIDs reduce renal clearance of methotrexate, causing toxic accumulation.',
    effects: ['methotrexate toxicity', 'bone marrow suppression', 'mucositis', 'renal failure'],
    mechanism: 'NSAIDs inhibit prostaglandin-mediated renal blood flow, reducing methotrexate excretion.',
    recommendation: 'Avoid combination with high-dose methotrexate. If necessary, monitor CBC and renal function closely.',
    evidence: 'established'
  },
  {
    drug1: 'clopidogrel',
    drug2: 'omeprazole',
    severity: 'severe',
    description: 'Omeprazole inhibits CYP2C19, reducing conversion of clopidogrel to its active form.',
    effects: ['reduced antiplatelet effect', 'increased risk of cardiovascular events'],
    mechanism: 'CYP2C19 inhibition by omeprazole impairs clopidogrel bioactivation.',
    recommendation: 'Use pantoprazole instead of omeprazole when PPI is needed with clopidogrel.',
    evidence: 'established'
  },
  {
    drug1: 'simvastatin',
    drug2: 'amiodarone',
    severity: 'severe',
    description: 'Amiodarone inhibits CYP3A4, raising simvastatin levels and risk of myopathy.',
    effects: ['myopathy', 'rhabdomyolysis', 'renal failure'],
    mechanism: 'CYP3A4 inhibition increases simvastatin AUC up to 6-fold.',
    recommendation: 'Limit simvastatin dose to 20 mg/day or switch to pravastatin/rosuvastatin.',
    evidence: 'established'
  },
  {
    drug1: 'lithium',
    drug2: 'nsaid',
    severity: 'severe',
    description: 'NSAIDs reduce renal lithium clearance, causing lithium toxicity.',
    effects: ['lithium toxicity', 'tremor', 'confusion', 'renal damage'],
    mechanism: 'NSAIDs inhibit prostaglandin synthesis, reducing renal blood flow and lithium excretion.',
    recommendation: 'Avoid NSAIDs with lithium. Use acetaminophen for pain relief. Monitor lithium levels.',
    evidence: 'established'
  },
  {
    drug1: 'warfarin',
    drug2: 'fluconazole',
    severity: 'severe',
    description: 'Fluconazole inhibits CYP2C9, the primary enzyme metabolizing warfarin, causing INR elevation.',
    effects: ['elevated INR', 'major bleeding', 'hemorrhage'],
    mechanism: 'CYP2C9 inhibition reduces warfarin clearance, increasing anticoagulant effect.',
    recommendation: 'Reduce warfarin dose by 25-50% and monitor INR every 2-3 days during fluconazole course.',
    evidence: 'established'
  },
  {
    drug1: 'ssri',
    drug2: 'nsaid',
    severity: 'severe',
    description: 'SSRIs combined with NSAIDs significantly increase risk of gastrointestinal bleeding.',
    effects: ['GI bleeding', 'peptic ulcer', 'hemorrhage'],
    mechanism: 'SSRIs deplete platelet serotonin (antiplatelet effect); NSAIDs inhibit COX-1 and gastric protection.',
    recommendation: 'Add proton pump inhibitor if combination is necessary. Consider alternative analgesics.',
    evidence: 'established'
  },
  {
    drug1: 'tacrolimus',
    drug2: 'fluconazole',
    severity: 'severe',
    description: 'Fluconazole markedly increases tacrolimus levels through CYP3A4 inhibition.',
    effects: ['tacrolimus toxicity', 'nephrotoxicity', 'neurotoxicity'],
    mechanism: 'CYP3A4 and P-gp inhibition by fluconazole reduces tacrolimus metabolism.',
    recommendation: 'Reduce tacrolimus dose and monitor trough levels closely.',
    evidence: 'established'
  },
  // ── MODERATE ──────────────────────────────────────────────────────────────
  {
    drug1: 'metformin',
    drug2: 'alcohol',
    severity: 'moderate',
    description: 'Alcohol increases the risk of lactic acidosis with metformin and causes hypoglycemia.',
    effects: ['lactic acidosis', 'hypoglycemia', 'nausea', 'vomiting'],
    mechanism: 'Alcohol inhibits gluconeogenesis and increases lactate production, compounding metformin effects.',
    recommendation: 'Limit alcohol consumption. Avoid binge drinking. Monitor blood glucose.',
    evidence: 'established'
  },
  {
    drug1: 'ibuprofen',
    drug2: 'aspirin',
    severity: 'moderate',
    description: 'Ibuprofen competitively inhibits aspirin binding to COX-1, reducing aspirin\'s cardioprotective effect.',
    effects: ['reduced aspirin antiplatelet effect', 'increased cardiovascular risk'],
    mechanism: 'Ibuprofen reversibly occupies the COX-1 active site, blocking aspirin acetylation.',
    recommendation: 'Take aspirin at least 30 minutes before ibuprofen, or use acetaminophen instead.',
    evidence: 'established'
  },
  {
    drug1: 'atorvastatin',
    drug2: 'clarithromycin',
    severity: 'moderate',
    description: 'Clarithromycin inhibits CYP3A4, increasing atorvastatin exposure and myopathy risk.',
    effects: ['myopathy', 'elevated CK', 'rhabdomyolysis risk'],
    mechanism: 'CYP3A4 inhibition by clarithromycin increases atorvastatin AUC significantly.',
    recommendation: 'Temporarily suspend atorvastatin during short clarithromycin courses, or use azithromycin.',
    evidence: 'established'
  },
  {
    drug1: 'metoprolol',
    drug2: 'verapamil',
    severity: 'moderate',
    description: 'Both agents slow AV conduction; combination can cause bradycardia or heart block.',
    effects: ['bradycardia', 'AV block', 'hypotension'],
    mechanism: 'Additive negative chronotropic and dromotropic effects on the AV node.',
    recommendation: 'Monitor heart rate and ECG. Avoid IV verapamil in patients on beta-blockers.',
    evidence: 'established'
  },
  {
    drug1: 'ciprofloxacin',
    drug2: 'antacid',
    severity: 'moderate',
    description: 'Antacids containing aluminum/magnesium chelate ciprofloxacin, reducing absorption.',
    effects: ['reduced ciprofloxacin efficacy', 'treatment failure'],
    mechanism: 'Divalent/trivalent cations form insoluble chelates with fluoroquinolones.',
    recommendation: 'Take ciprofloxacin 2 hours before or 6 hours after antacids.',
    evidence: 'established'
  },
  {
    drug1: 'warfarin',
    drug2: 'acetaminophen',
    severity: 'moderate',
    description: 'High-dose acetaminophen can potentiate warfarin anticoagulation.',
    effects: ['elevated INR', 'increased bleeding risk'],
    mechanism: 'Acetaminophen metabolites may inhibit vitamin K-dependent clotting factor synthesis.',
    recommendation: 'Limit acetaminophen to ≤2 g/day. Monitor INR if regular use is needed.',
    evidence: 'established'
  },
  {
    drug1: 'amlodipine',
    drug2: 'simvastatin',
    severity: 'moderate',
    description: 'Amlodipine inhibits CYP3A4, modestly increasing simvastatin levels.',
    effects: ['increased myopathy risk'],
    mechanism: 'Mild CYP3A4 inhibition by amlodipine raises simvastatin exposure.',
    recommendation: 'Limit simvastatin to 20 mg/day when used with amlodipine.',
    evidence: 'established'
  },
  {
    drug1: 'fluoxetine',
    drug2: 'tramadol',
    severity: 'moderate',
    description: 'Fluoxetine inhibits CYP2D6, reducing tramadol conversion to active metabolite and increasing serotonin risk.',
    effects: ['reduced analgesia', 'serotonin syndrome risk', 'seizures'],
    mechanism: 'CYP2D6 inhibition alters tramadol metabolism; both agents increase serotonin.',
    recommendation: 'Use alternative analgesic. If necessary, use lowest effective tramadol dose with monitoring.',
    evidence: 'established'
  },
  {
    drug1: 'metformin',
    drug2: 'contrast_dye',
    severity: 'moderate',
    description: 'Iodinated contrast media can cause acute kidney injury, leading to metformin accumulation and lactic acidosis.',
    effects: ['lactic acidosis', 'acute kidney injury'],
    mechanism: 'Contrast-induced nephropathy reduces metformin renal clearance.',
    recommendation: 'Hold metformin 48 hours before and after contrast procedures. Check renal function before restarting.',
    evidence: 'established'
  },
  {
    drug1: 'levothyroxine',
    drug2: 'calcium',
    severity: 'moderate',
    description: 'Calcium supplements reduce levothyroxine absorption from the GI tract.',
    effects: ['reduced thyroid hormone levels', 'hypothyroidism symptoms'],
    mechanism: 'Calcium forms insoluble complexes with levothyroxine in the gut.',
    recommendation: 'Take levothyroxine at least 4 hours apart from calcium supplements.',
    evidence: 'established'
  },
  {
    drug1: 'spironolactone',
    drug2: 'ace_inhibitor',
    severity: 'moderate',
    description: 'Both agents reduce potassium excretion; combination increases hyperkalemia risk.',
    effects: ['hyperkalemia', 'cardiac arrhythmia'],
    mechanism: 'Additive potassium-sparing effects through aldosterone antagonism and reduced angiotensin II.',
    recommendation: 'Monitor serum potassium and renal function regularly. Avoid potassium supplements.',
    evidence: 'established'
  },
  {
    drug1: 'sildenafil',
    drug2: 'nitrate',
    severity: 'severe',
    description: 'Combination causes profound hypotension that can be fatal.',
    effects: ['severe hypotension', 'syncope', 'myocardial infarction', 'death'],
    mechanism: 'Additive cGMP-mediated vasodilation from PDE5 inhibition and nitric oxide donation.',
    recommendation: 'Absolutely contraindicated. Do not use within 24 hours of sildenafil (48 hours for tadalafil).',
    evidence: 'established'
  },
  // ── MILD ──────────────────────────────────────────────────────────────────
  {
    drug1: 'metformin',
    drug2: 'ibuprofen',
    severity: 'mild',
    description: 'NSAIDs may slightly reduce metformin efficacy and increase GI side effects.',
    effects: ['mild GI upset', 'slight blood glucose elevation'],
    mechanism: 'NSAIDs may reduce renal prostaglandins, mildly affecting metformin clearance.',
    recommendation: 'Use acetaminophen for pain when possible. Monitor blood glucose if NSAIDs are needed.',
    evidence: 'theoretical'
  },
  {
    drug1: 'atorvastatin',
    drug2: 'antacid',
    severity: 'mild',
    description: 'Antacids may slightly reduce atorvastatin absorption.',
    effects: ['marginally reduced statin efficacy'],
    mechanism: 'Possible adsorption of atorvastatin to antacid components.',
    recommendation: 'Separate administration by 2 hours. Clinical significance is generally low.',
    evidence: 'theoretical'
  },
  {
    drug1: 'lisinopril',
    drug2: 'ibuprofen',
    severity: 'moderate',
    description: 'NSAIDs blunt the antihypertensive effect of ACE inhibitors and increase renal risk.',
    effects: ['reduced blood pressure control', 'acute kidney injury', 'hyperkalemia'],
    mechanism: 'NSAIDs inhibit prostaglandin-mediated vasodilation and reduce renal blood flow.',
    recommendation: 'Use acetaminophen for pain. If NSAIDs are necessary, monitor BP and renal function.',
    evidence: 'established'
  },
  {
    drug1: 'amoxicillin',
    drug2: 'warfarin',
    severity: 'moderate',
    description: 'Amoxicillin can alter gut flora, reducing vitamin K production and potentiating warfarin.',
    effects: ['elevated INR', 'increased bleeding risk'],
    mechanism: 'Reduction of vitamin K-producing intestinal bacteria increases warfarin effect.',
    recommendation: 'Monitor INR during and after antibiotic course.',
    evidence: 'probable'
  },
  {
    drug1: 'metronidazole',
    drug2: 'alcohol',
    severity: 'severe',
    description: 'Metronidazole inhibits aldehyde dehydrogenase, causing disulfiram-like reaction with alcohol.',
    effects: ['flushing', 'nausea', 'vomiting', 'tachycardia', 'hypotension'],
    mechanism: 'Acetaldehyde accumulation due to aldehyde dehydrogenase inhibition.',
    recommendation: 'Avoid all alcohol during metronidazole therapy and for 48 hours after completion.',
    evidence: 'established'
  },
  {
    drug1: 'ciprofloxacin',
    drug2: 'warfarin',
    severity: 'moderate',
    description: 'Ciprofloxacin inhibits CYP1A2 and alters gut flora, increasing warfarin effect.',
    effects: ['elevated INR', 'bleeding risk'],
    mechanism: 'CYP1A2 inhibition reduces R-warfarin clearance; gut flora changes reduce vitamin K.',
    recommendation: 'Monitor INR closely during and after ciprofloxacin course.',
    evidence: 'established'
  },
  {
    drug1: 'sertraline',
    drug2: 'tramadol',
    severity: 'moderate',
    description: 'Sertraline and tramadol together increase serotonin syndrome risk.',
    effects: ['serotonin syndrome', 'seizures', 'agitation'],
    mechanism: 'Additive serotonergic effects from SSRI and tramadol serotonin reuptake inhibition.',
    recommendation: 'Use alternative analgesic. If tramadol is necessary, use lowest dose and monitor closely.',
    evidence: 'established'
  },
  {
    drug1: 'carbamazepine',
    drug2: 'oral_contraceptive',
    severity: 'moderate',
    description: 'Carbamazepine induces CYP3A4, reducing oral contraceptive hormone levels.',
    effects: ['contraceptive failure', 'unintended pregnancy'],
    mechanism: 'CYP3A4 induction accelerates estrogen and progestin metabolism.',
    recommendation: 'Use additional non-hormonal contraception. Consider alternative anticonvulsant.',
    evidence: 'established'
  },
  {
    drug1: 'rifampin',
    drug2: 'warfarin',
    severity: 'severe',
    description: 'Rifampin is a potent CYP inducer that dramatically reduces warfarin levels.',
    effects: ['subtherapeutic anticoagulation', 'thromboembolism risk'],
    mechanism: 'CYP2C9 and CYP3A4 induction by rifampin greatly increases warfarin clearance.',
    recommendation: 'Increase warfarin dose significantly and monitor INR every 3-5 days. Reduce dose when rifampin stopped.',
    evidence: 'established'
  },
  {
    drug1: 'phenytoin',
    drug2: 'warfarin',
    severity: 'moderate',
    description: 'Phenytoin initially inhibits then induces warfarin metabolism; INR changes are unpredictable.',
    effects: ['variable INR', 'bleeding or thrombosis risk'],
    mechanism: 'Biphasic effect: initial CYP2C9 inhibition followed by induction.',
    recommendation: 'Monitor INR very closely when starting, adjusting, or stopping phenytoin.',
    evidence: 'established'
  },
  {
    drug1: 'allopurinol',
    drug2: 'azathioprine',
    severity: 'severe',
    description: 'Allopurinol inhibits xanthine oxidase, causing azathioprine accumulation and severe toxicity.',
    effects: ['bone marrow suppression', 'leukopenia', 'infection risk'],
    mechanism: 'Xanthine oxidase inhibition prevents azathioprine inactivation, raising toxic metabolite levels.',
    recommendation: 'Reduce azathioprine dose by 75% if combination is unavoidable. Monitor CBC weekly.',
    evidence: 'established'
  },
  {
    drug1: 'heparin',
    drug2: 'aspirin',
    severity: 'moderate',
    description: 'Aspirin adds antiplatelet effect to heparin anticoagulation, increasing bleeding risk.',
    effects: ['increased bleeding', 'hemorrhage'],
    mechanism: 'Additive hemostatic impairment from anticoagulation and antiplatelet effects.',
    recommendation: 'Use combination only when clinically indicated (e.g., ACS). Monitor for bleeding.',
    evidence: 'established'
  },
  {
    drug1: 'doxycycline',
    drug2: 'antacid',
    severity: 'moderate',
    description: 'Antacids chelate doxycycline, reducing its absorption and efficacy.',
    effects: ['reduced antibiotic efficacy', 'treatment failure'],
    mechanism: 'Divalent cations form chelates with tetracyclines, preventing GI absorption.',
    recommendation: 'Take doxycycline 2 hours before or 6 hours after antacids.',
    evidence: 'established'
  },
  {
    drug1: 'furosemide',
    drug2: 'aminoglycoside',
    severity: 'severe',
    description: 'Both agents are ototoxic and nephrotoxic; combination greatly increases these risks.',
    effects: ['hearing loss', 'tinnitus', 'acute kidney injury'],
    mechanism: 'Additive damage to cochlear hair cells and renal tubular cells.',
    recommendation: 'Avoid combination when possible. If necessary, monitor renal function and audiometry.',
    evidence: 'established'
  },
  {
    drug1: 'ssri',
    drug2: 'triptans',
    severity: 'moderate',
    description: 'SSRIs combined with triptans may increase serotonin syndrome risk.',
    effects: ['serotonin syndrome', 'weakness', 'incoordination'],
    mechanism: 'Additive serotonergic stimulation at 5-HT1 receptors.',
    recommendation: 'Monitor for serotonin syndrome symptoms. Combination is generally used cautiously.',
    evidence: 'probable'
  },
  {
    drug1: 'metformin',
    drug2: 'cimetidine',
    severity: 'mild',
    description: 'Cimetidine reduces renal tubular secretion of metformin, increasing its plasma levels.',
    effects: ['increased metformin levels', 'lactic acidosis risk'],
    mechanism: 'Competition for renal tubular secretion via OCT2 transporter.',
    recommendation: 'Monitor for metformin side effects. Consider dose reduction if needed.',
    evidence: 'probable'
  },
  {
    drug1: 'beta_blocker',
    drug2: 'insulin',
    severity: 'moderate',
    description: 'Beta-blockers mask tachycardia (a key hypoglycemia symptom) and may prolong hypoglycemia.',
    effects: ['masked hypoglycemia symptoms', 'prolonged hypoglycemia'],
    mechanism: 'Beta-adrenergic blockade prevents glycogenolysis and masks sympathetic hypoglycemia signs.',
    recommendation: 'Use cardioselective beta-blocker (e.g., metoprolol). Educate patient on non-adrenergic hypoglycemia signs.',
    evidence: 'established'
  },
  {
    drug1: 'quinolone',
    drug2: 'theophylline',
    severity: 'moderate',
    description: 'Quinolones inhibit CYP1A2, increasing theophylline levels and toxicity risk.',
    effects: ['theophylline toxicity', 'nausea', 'seizures', 'arrhythmia'],
    mechanism: 'CYP1A2 inhibition reduces theophylline clearance.',
    recommendation: 'Monitor theophylline levels. Reduce theophylline dose by 30-50% if quinolone is needed.',
    evidence: 'established'
  },
  {
    drug1: 'valproate',
    drug2: 'lamotrigine',
    severity: 'moderate',
    description: 'Valproate inhibits lamotrigine glucuronidation, doubling lamotrigine levels and toxicity risk.',
    effects: ['lamotrigine toxicity', 'dizziness', 'diplopia', 'ataxia'],
    mechanism: 'Valproate inhibits UGT enzymes responsible for lamotrigine metabolism.',
    recommendation: 'Reduce lamotrigine dose by 50% when adding valproate. Titrate slowly.',
    evidence: 'established'
  },
  {
    drug1: 'carbamazepine',
    drug2: 'valproate',
    severity: 'moderate',
    description: 'Carbamazepine induces valproate metabolism, reducing valproate levels; valproate inhibits carbamazepine epoxide clearance.',
    effects: ['reduced seizure control', 'carbamazepine toxicity', 'nausea', 'diplopia'],
    mechanism: 'Bidirectional pharmacokinetic interaction via CYP induction and epoxide hydrolase inhibition.',
    recommendation: 'Monitor levels of both drugs. Adjust doses based on clinical response and serum levels.',
    evidence: 'established'
  },
  {
    drug1: 'digoxin',
    drug2: 'verapamil',
    severity: 'severe',
    description: 'Verapamil inhibits P-glycoprotein and reduces renal digoxin clearance, causing digoxin toxicity.',
    effects: ['digoxin toxicity', 'bradycardia', 'AV block', 'nausea'],
    mechanism: 'P-gp inhibition by verapamil increases digoxin bioavailability and reduces renal excretion.',
    recommendation: 'Reduce digoxin dose by 30-50% when starting verapamil. Monitor digoxin levels and ECG.',
    evidence: 'established'
  },
  {
    drug1: 'ssri',
    drug2: 'warfarin',
    severity: 'moderate',
    description: 'SSRIs inhibit platelet serotonin uptake and may inhibit CYP2C9, increasing warfarin effect.',
    effects: ['elevated INR', 'increased bleeding risk', 'GI bleeding'],
    mechanism: 'Antiplatelet effect plus possible CYP2C9 inhibition (especially fluoxetine/fluvoxamine).',
    recommendation: 'Monitor INR when starting or stopping SSRI. Fluvoxamine has the strongest interaction.',
    evidence: 'established'
  },
  {
    drug1: 'lithium',
    drug2: 'ace_inhibitor',
    severity: 'severe',
    description: 'ACE inhibitors reduce renal lithium clearance, causing lithium toxicity.',
    effects: ['lithium toxicity', 'tremor', 'confusion', 'renal impairment'],
    mechanism: 'ACE inhibitors reduce glomerular filtration and increase proximal tubular lithium reabsorption.',
    recommendation: 'Avoid combination if possible. If necessary, reduce lithium dose and monitor levels closely.',
    evidence: 'established'
  },
  {
    drug1: 'warfarin',
    drug2: 'vitamin_k',
    severity: 'moderate',
    description: 'Vitamin K is the direct antidote to warfarin; dietary or supplemental vitamin K reduces anticoagulation.',
    effects: ['reduced INR', 'subtherapeutic anticoagulation', 'thromboembolism risk'],
    mechanism: 'Vitamin K restores carboxylation of clotting factors II, VII, IX, X, reversing warfarin effect.',
    recommendation: 'Maintain consistent dietary vitamin K intake. Avoid large changes in green vegetable consumption.',
    evidence: 'established'
  },
];

const drugAlternatives = [
  {
    originalDrug: 'warfarin',
    alternativeDrug: 'apixaban',
    reason: 'Direct oral anticoagulant with fewer drug interactions and no INR monitoring required.',
    effectivenessPercentage: 90,
    sideEffects: ['bleeding', 'bruising']
  },
  {
    originalDrug: 'warfarin',
    alternativeDrug: 'rivaroxaban',
    reason: 'Once-daily DOAC with predictable pharmacokinetics and fewer food/drug interactions.',
    effectivenessPercentage: 88,
    sideEffects: ['bleeding', 'GI upset']
  },
  {
    originalDrug: 'ssri',
    alternativeDrug: 'mirtazapine',
    reason: 'Antidepressant with different mechanism, no serotonin reuptake inhibition, safer with MAOIs.',
    effectivenessPercentage: 75,
    sideEffects: ['sedation', 'weight gain', 'dry mouth']
  },
  {
    originalDrug: 'maoi',
    alternativeDrug: 'snri',
    reason: 'SNRIs provide antidepressant effect without the severe dietary and drug interaction risks of MAOIs.',
    effectivenessPercentage: 80,
    sideEffects: ['nausea', 'insomnia', 'hypertension']
  },
  {
    originalDrug: 'ibuprofen',
    alternativeDrug: 'acetaminophen',
    reason: 'Acetaminophen provides analgesia without COX inhibition, avoiding antiplatelet and GI effects.',
    effectivenessPercentage: 80,
    sideEffects: ['hepatotoxicity at high doses']
  },
  {
    originalDrug: 'ibuprofen',
    alternativeDrug: 'celecoxib',
    reason: 'Selective COX-2 inhibitor with less GI toxicity and no antiplatelet effect.',
    effectivenessPercentage: 85,
    sideEffects: ['cardiovascular risk', 'edema']
  },
  {
    originalDrug: 'simvastatin',
    alternativeDrug: 'pravastatin',
    reason: 'Pravastatin is not metabolized by CYP3A4, avoiding interactions with CYP3A4 inhibitors.',
    effectivenessPercentage: 78,
    sideEffects: ['myalgia', 'elevated liver enzymes']
  },
  {
    originalDrug: 'simvastatin',
    alternativeDrug: 'rosuvastatin',
    reason: 'Rosuvastatin has minimal CYP3A4 metabolism, reducing interaction risk with amiodarone and other inhibitors.',
    effectivenessPercentage: 92,
    sideEffects: ['myalgia', 'proteinuria at high doses']
  },
  {
    originalDrug: 'metformin',
    alternativeDrug: 'sitagliptin',
    reason: 'DPP-4 inhibitor with no lactic acidosis risk, suitable when metformin is contraindicated.',
    effectivenessPercentage: 72,
    sideEffects: ['nasopharyngitis', 'headache', 'pancreatitis risk']
  },
  {
    originalDrug: 'tramadol',
    alternativeDrug: 'acetaminophen',
    reason: 'Acetaminophen avoids serotonergic effects and opioid risks associated with tramadol.',
    effectivenessPercentage: 70,
    sideEffects: ['hepatotoxicity at high doses']
  },
  {
    originalDrug: 'tramadol',
    alternativeDrug: 'codeine',
    reason: 'Codeine has less serotonergic activity than tramadol, reducing serotonin syndrome risk with SSRIs.',
    effectivenessPercentage: 75,
    sideEffects: ['constipation', 'sedation', 'dependence']
  },
  {
    originalDrug: 'omeprazole',
    alternativeDrug: 'pantoprazole',
    reason: 'Pantoprazole has less CYP2C19 inhibition than omeprazole, preserving clopidogrel activation.',
    effectivenessPercentage: 90,
    sideEffects: ['headache', 'diarrhea', 'nausea']
  },
  {
    originalDrug: 'clarithromycin',
    alternativeDrug: 'azithromycin',
    reason: 'Azithromycin has minimal CYP3A4 inhibition, avoiding statin and other drug interactions.',
    effectivenessPercentage: 85,
    sideEffects: ['GI upset', 'QT prolongation at high doses']
  },
  {
    originalDrug: 'nitrate',
    alternativeDrug: 'ranolazine',
    reason: 'Ranolazine provides antianginal effect without the hypotension risk when PDE5 inhibitors are used.',
    effectivenessPercentage: 78,
    sideEffects: ['dizziness', 'constipation', 'QT prolongation']
  },
  {
    originalDrug: 'allopurinol',
    alternativeDrug: 'febuxostat',
    reason: 'Febuxostat does not inhibit xanthine oxidase as broadly, with less interaction with azathioprine.',
    effectivenessPercentage: 88,
    sideEffects: ['liver enzyme elevation', 'cardiovascular events']
  },
  {
    originalDrug: 'digoxin',
    alternativeDrug: 'beta_blocker',
    reason: 'Beta-blockers (e.g., metoprolol, carvedilol) provide rate control in heart failure without the narrow therapeutic index of digoxin.',
    effectivenessPercentage: 82,
    sideEffects: ['bradycardia', 'fatigue', 'hypotension']
  },
  {
    originalDrug: 'digoxin',
    alternativeDrug: 'ivabradine',
    reason: 'Ivabradine reduces heart rate via HCN channel inhibition without the toxicity risk of digoxin.',
    effectivenessPercentage: 78,
    sideEffects: ['visual disturbances', 'bradycardia', 'headache']
  },
  {
    originalDrug: 'amiodarone',
    alternativeDrug: 'dronedarone',
    reason: 'Dronedarone is a non-iodinated amiodarone analogue with fewer drug interactions and less thyroid/pulmonary toxicity.',
    effectivenessPercentage: 75,
    sideEffects: ['GI upset', 'elevated creatinine', 'liver enzyme elevation']
  },
  {
    originalDrug: 'amiodarone',
    alternativeDrug: 'sotalol',
    reason: 'Sotalol provides antiarrhythmic effect with a better interaction profile than amiodarone for patients on digoxin or statins.',
    effectivenessPercentage: 72,
    sideEffects: ['QT prolongation', 'bradycardia', 'fatigue']
  },
];

module.exports = { drugInteractions, drugAlternatives };
