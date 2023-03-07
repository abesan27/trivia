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
    question: "With which country does France share it's longest border?",
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
  {
    question: "What is the smallest planet in our solar system?",
    possibleAnswers: ["Venus", "Mercury", "Earth", "Mars"],
    correctAnswer: "Mercury",
  },
  {
    question: "Who painted the Mona Lisa?",
    possibleAnswers: ["Michelangelo", "Raphael", "Leonardo da Vinci", "Donatello"],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "What is the capital of Japan?",
    possibleAnswers: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
    correctAnswer: "Tokyo",
  },
  {
    question: 'Who wrote the novel "To Kill a Mockingbird"?',
    possibleAnswers: ["Toni Morrison", "Maya Angelou", "Alice Walker", "Harper Lee"],
    correctAnswer: "Harper Lee",
  },
  {
    question: "What is the highest mountain in Africa?",
    possibleAnswers: ["Mount Kenya", "Mount Elgon", "Mount Kilimanjaro", "Mount Meru"],
    correctAnswer: "Mount Kilimanjaro",
  },
  {
    question: "Who is the lead singer of the band Coldplay?",
    possibleAnswers: ["Chris Martin", "Bono", "Adam Levine", "Justin Timberlake"],
    correctAnswer: "Chris Martin",
  },
  {
    question: "What is the largest organ in the human body?",
    possibleAnswers: ["Brain", "Liver", "Skin", "Heart"],
    correctAnswer: "Skin",
  },
  {
    question: "Which country is home to the Great Barrier Reef?",
    possibleAnswers: ["Brazil", "South Africa", "Indonesia", "Australia"],
    correctAnswer: "Australia",
  },
  {
    question: "What is the name of the famous scientist who developed the theory of relativity?",
    possibleAnswers: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Stephen Hawking"],
    correctAnswer: "Albert Einstein",
  },
  {
    question: "Which country won the 2018 FIFA World Cup?",
    possibleAnswers: ["Brazil", "France", "Germany", "Spain"],
    correctAnswer: "France",
  },
  {
    question: "What is the rarest blood type?",
    possibleAnswers: ["B+", "AB-", "A-", "O+"],
    correctAnswer: "AB-",
  },
  {
    question: "What is the smallest country in the world by land area?",
    possibleAnswers: ["Vatican City", "Monaco", "Nauru", "Tuvalu"],
    correctAnswer: "Vatican City",
  },
  {
    question: "Which is the only continent that lies in all four hemispheres?",
    possibleAnswers: ["Antarctica", "Asia", "Europe", "Africa"],
    correctAnswer: "Africa",
  },
  {
    question: "Who discovered radium and polonium?",
    possibleAnswers: ["Marie Curie", "Albert Einstein", "Isaac Newton", "Charles Darwin"],
    correctAnswer: "Marie Curie",
  },
  {
    question: "What is the longest river in Europe?",
    possibleAnswers: ["Danube", "Volga", "Elbe", "Rhine"],
    correctAnswer: "Volga",
  },
  {
    question: "What is the capital of Uzbekistan?",
    possibleAnswers: ["Samarkand", "Tashkent", "Bukhara", "Andijan"],
    correctAnswer: "Tashkent",
  },
  {
    question: "What is the smallest bone in the human body?",
    possibleAnswers: ["Stapes (in the ear)", "Femur", "Humerus", "Radius"],
    correctAnswer: "Stapes (in the ear)",
  },
  {
    question: 'Who wrote the novel "War and Peace"?',
    possibleAnswers: ["Fyodor Dostoevsky", "Leo Tolstoy", "Anton Chekhov", "Mikhail Bulgakov"],
    correctAnswer: "Leo Tolstoy",
  },
  {
    question: "Who is the first woman to win a Nobel Prize?",
    possibleAnswers: ["Rosalind Franklin", "Barbara McClintock", "Dorothy Hodgkin", "Marie Curie"],
    correctAnswer: "Marie Curie",
  },
  {
    question: "What is the most abundant gas in Earth's atmosphere?",
    possibleAnswers: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
    correctAnswer: "Nitrogen",
  },
  {
    question: "What is the currency of Brazil?",
    possibleAnswers: ["Peso", "Dollar", "Euro", "Real"],
    correctAnswer: "Real",
  },
  {
    question: "What is the capital of France?",
    possibleAnswers: ["London", "Paris", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "What is the name of the famous detective created by Sir Arthur Conan Doyle?",
    possibleAnswers: ["Sherlock Holmes", "Hercule Poirot", "Miss Marple", "Nancy Drew"],
    correctAnswer: "Sherlock Holmes",
  },
  {
    question: "What is the largest country in the world by land area?",
    possibleAnswers: ["Canada", "China", "Russia", "United States"],
    correctAnswer: "Russia",
  },
  {
    question: "What is the name of the largest ocean in the world?",
    possibleAnswers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswer: "Pacific Ocean",
  },
  {
    question:
      "What is the name of the iconic structure in Paris that is a popular tourist attraction?",
    possibleAnswers: ["Big Ben", "Statue of Liberty", "Eiffel Tower", "Golden Gate Bridge"],
    correctAnswer: "Eiffel Tower",
  },
  {
    question: "What is the tallest mammal?",
    possibleAnswers: ["Giraffe", "Elephant", "Hippopotamus", "Rhinoceros"],
    correctAnswer: "Giraffe",
  },
  {
    question: "What is the capital of Iceland?",
    possibleAnswers: ["Oslo", "Stockholm", "Reykjavik", "Copenhagen"],
    correctAnswer: "Reykjavik",
  },
];

export default function getQuestions() {
  return data
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}
