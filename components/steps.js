export const steps = [
  {
    id: "1",
    message: "Hello! what you want to know?",
    trigger: "2"
  },
  {
    id: "2",
    options: [
      { value: 1, label: "medicine", trigger: "3" },
      { value: 2, label: "symptoms", trigger: "3" },
      { value: 3, label: "Research", trigger: "3" }
    ]
  },
  {
    id: "3",
    options: [
      { value: 1, label: "medicine", trigger: "3" },
      { value: 2, label: "symptoms", trigger: "3" },
      { value: 3, label: "Research", trigger: "3" }
    ]
  },
  {
    id: "4",
    message: "Awesome! You are a telepath!",
    end: true
  }
];