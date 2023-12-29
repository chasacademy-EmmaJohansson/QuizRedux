import { createReduxModule } from "hooks-for-redux";

const initialState = {
  quizStarted: false,
  showResults: false,
  currentQuestion: 0,
  score: 0,
  questions: [
    {
      title: "What football team is called the `The Red Devils`?",
      alt1: "Manchester United",
      alt2: "Bayern Munchen",
      alt3: "Manchester City",
      correctAnswer: 1,
      id: 1,
    },
    {
      title: "In what fruit does SpongeBob SquarePant live in?",
      alt1: "Apple",
      alt2: "Orange",
      alt3: "Pineapple",
      correctAnswer: 3,
      id: 2,
    },
  ],
  newQuestion: {
    title: "",
    alt1: "",
    alt2: "",
    alt3: "",
    correctAnswer: "",
  },
};

export const [
  useQuiz,
  {
    addQuestion,
    removeQuestion,
    updateQuestion,
    answerQuestion,
    startQuiz,
    updateNewQuestion,
    clearNewQuestion,
    restartQuiz,
  },
] = createReduxModule("Quiz", initialState, {
  addQuestion: (state, question) => {
    return { ...state, questions: [...state.questions, question] };
  },
  removeQuestion: (state, id) => {
    return {
      ...state,
      questions: state.questions.filter((q) => q.id !== id),
    };
  },
  updateQuestion: (state, question) => {
    const updateList = [...state.questions];
    for (let i = 0; i < updateList.length; i++) {
      if (updateList[i].id === question.id) {
        updateList[i] = question;
      }
    }
    return { ...state, questions: updateList };
  },
  answerQuestion: (state, alt) => {
    const question = state.questions[state.currentQuestion];
    let score = state.score;
    let currentQuestion = state.currentQuestion;
    let quizStarted = state.quizStarted;
    let showResults = state.showResults;

    let correctAnswer = question.correctAnswer == alt;
    if (correctAnswer) {
      score++;
    }

    if (currentQuestion != state.questions.length - 1) {
      currentQuestion++;
    } else {
      showResults = true;
    }
    return {
      ...state,
      score,
      showResults,
      currentQuestion,
    };
  },
  startQuiz: (state) => {
    return {
      ...state,
      quizStarted: true,
    };
  },
  updateNewQuestion: (state, updatedFields) => {
    return {
      ...state,
      newQuestion: { ...state.newQuestion, ...updatedFields },
    };
  },
  clearNewQuestion: (state) => {
    return {
      ...state,
      newQuestion: {
        title: "",
        alt1: "",
        alt2: "",
        alt3: "",
        correctAnswer: "",
      },
    };
  },
  restartQuiz: (state) => {
    return {
      ...state,
      quizStarted: true,
      showResults: false,
      currentQuestion: 0,
      score: 0,
    };
  },
});
restartQuiz.startQuiz = (state) => {
  return {
    ...state,
    quizStarted: true,
  };
};
