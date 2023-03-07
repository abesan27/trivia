interface Question {
  question: string;
  possibleAnswers: string[];
  correctAnswer: string;
}

let data: Question[] = [
  {
    question: "Emiliano Zapata was a revolutionary for which country?",
    possibleAnswers: ["Mexico", "Peru", "Cuba", "Argentina"],
    correctAnswer: "Mexico",
  },
  {
    question: "Which of these is the oldest programming language?",
    possibleAnswers: ["JavaScript", "Perl", "C#", "Python"],
    correctAnswer: "Perl",
  },
  {
    question: "Which is the only national flag without blue, white, red?",
    possibleAnswers: ["Romania", "Jamaica", "Grenada", "Belgium"],
    correctAnswer: "Jamaica",
  },
  {
    question: "With which country does Frace share it's longest border?",
    possibleAnswers: ["Netherlands", "Italy", "Spain", "Brazil"],
    correctAnswer: "Brazil",
  },
  {
    question: "Which is the least visited country in Europe?",
    possibleAnswers: ["Liechtenstein", "Moldova", "Latvia", "Albania"],
    correctAnswer: "Moldova",
  },
  {
    question: "What is the largest lake in Africa?",
    possibleAnswers: ["Lake Victoria", "Lake Albert", "Cahora Bassa", "Lake Kivu"],
    correctAnswer: "Lake Victoria",
  },
  {
    question: "In terms of area, which was the largest empire in history?",
    possibleAnswers: ["Ottoman", "French", "Mongol", "British"],
    correctAnswer: "Mongol",
  },
  {
    question: "Which of these flags DOESN'T contain the UK flag?",
    possibleAnswers: ["Australia", "Hawaii", "Grenada", "Fiji"],
    correctAnswer: "Grenada",
  },
  {
    question: "Which of these is the only island shared between three countries?",
    possibleAnswers: ["Borneo", "Madagascar", "Hispaniola", "Ireland"],
    correctAnswer: "Borneo",
  },
  {
    question: "In which sport is the Stanley Cup awarded?",
    possibleAnswers: ["Cricket", "Rugby", "Football", "Hockey"],
    correctAnswer: "Hockey",
  },
  {
    question: "What is the name of the legendary one-eyed giant in Greek mythology?",
    possibleAnswers: ["Dionysus", "Demeter", "Cyclops", "Athena"],
    correctAnswer: "Cyclops",
  },
  {
    question: "What is the unit of an amount of substance?",
    possibleAnswers: ["Decibel", "Mole", "Gram", "Atom"],
    correctAnswer: "Mole",
  },
  {
    question: "How many pieces does a standard set of Chess have?",
    possibleAnswers: ["32", "16", "42", "30"],
    correctAnswer: "32",
  },
  {
    question: "Which of these is NOT a region of India?",
    possibleAnswers: ["Telangana", "Goa", "Chumphon", "Odisha"],
    correctAnswer: "Chumphon",
  },
  {
    question: "What is the name of the author who wrote 'The Trial'?",
    possibleAnswers: ["Ernest Hemingway", "Franz Kafka", "James Joyce", "F. Scott Fitzgerald"],
    correctAnswer: "Franz Kafka",
  },
  {
    question: "How many time zones are there in Russia?",
    possibleAnswers: ["11", "5", "7", "15"],
    correctAnswer: "11",
  },
  {
    question: "What is the joule a unit for?",
    possibleAnswers: ["Volume", "Mass", "Energy", "Acceleration"],
    correctAnswer: "Energy",
  },
];

export default function getQuestions() {
  return data
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}
