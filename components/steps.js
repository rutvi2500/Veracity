export const steps = [
  {
    id: "1",
    message: "Hello! what you want to know about?",
    trigger: "2"
  },
  {
    id: "2",
    options: [
      { value: 1, label: "medicine", trigger: "3" },
      { value: 2, label: "symptoms", trigger: "5" },
      { value: 3, label: "Research", trigger: "7" }
    ]
  },
  {
    id: "3",
    message: "Please select the disease",
    trigger: "4"
  },
  {
    id: "4",
    options: [
      { value: 1, label: "fever", trigger: "9" },
      { value: 2, label: "cold", trigger: "10" },
      { value: 3, label: "cough", trigger: "11" }
    ]
  },
  {
    id: "5",
    message: "Please select varient to know about symptoms",
    trigger: "6"
  },
  {
    id: "6",
    options: [
      { value: 1, label: "Delta", trigger: "12" },
      { value: 2, label: "Omicron", trigger: "13" },
      { value: 3, label: "Beta", trigger: "14" }
    ]
  },
  {
    id: "7",
    message: "Please select the domain to know about the research",
    trigger: "8"
  },
  {
    id: "8",
    options: [
      { value: 1, label: "Vaccine", trigger: "17" },
      { value: 2, label: "New varient", trigger: "18" },
    ]
  },
  {
    id: "9",
    message: "Here are some medicines for fever: Paracetamol, Metacine, ibuprofen(not advisable for children)",
    trigger: "19"
  },
  {
    id: "10",
    message: "Here are some medicines for cold: acetaminophen, ibuprofen, antihistamines",
    trigger: "19"
  },
  {
    id: "11",
    message: "Here are some medicines for cough: Delsym, Mucinex",
    trigger: "19"
  },
  {
    id: "12",
    message: "Symptoms of Delta varient: Fever or chills, cough, shortness of breath, fatigue, sour throat, nausea",
    trigger: "19"
  },
  {
    id: "13",
    message: "Symptoms of Omicron varient: dizziness, cough, skin rashes, fatigue, tiredness, discolouration of fingers or toes",
    trigger: "19"
  },
  {
    id: "14",
    message: "Symptoms of covid-19 XE varient: dry cough, running nose, fever, sour throat",
    trigger: "19"
  },
  {
    id: "15",
    message: "Here are some medicines for fever: Paracetamol, Metacine, ibuprofen(not advisable for children)",
    trigger: "19"
  },
  {
    id: "16",
    message: "Here are some medicines for cold: acetaminophen, ibuprofen, antihistamines",
    trigger: "19"
  },
  {
    id: "17",
    message: "COVAXIN® demonstrated 77.8% vaccine efficacy against symptomatic COVID-19 disease, through evaluation of 130 confirmed cases, with 24 observed in the vaccine group versus 106 in the placebo group. The efficacy against severe symptomatic COVID-19 disease is shown to be 93.4%.",
    trigger: "19"
  },
  {
    id: "18",
    message: "Here are some medicines for cold: acetaminophen, ibuprofen, antihistamines",
    trigger: "19"
  },
  {
    id: "19",
    message: "Want to ask more questions?",
    trigger: "20"
  },
  {
    id: "20",
    options: [
      { value: 1, label: "yes", trigger: "1" },
      { value: 2, label: "No", trigger: "21" },
    ]
  },
  {
    id: "21",
    message: "See you!",
    end: true
  },
];