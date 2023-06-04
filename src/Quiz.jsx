import { useQuiz, answerQuestion } from "../redux/quiz";

export default function Quiz() {
  const { questions, currentQuestion } = useQuiz();
  const currentQuestions = questions[currentQuestion];

  return (
    <div className="flex flex-col border-2 border-black bg-green-300 rounded-xl p-10 h-96 justify-between">
      <div className="font-bold text-lg">{currentQuestions.title}</div>
      <div className="flex flex-col  items-center text-center gap-5">
        <div className="w-full font-bold border-2 border-black rounded-xl p-4 hover:bg-green-400">
          <button
            value={currentQuestion.alt1}
            onClick={() => answerQuestion(1)}
          >
            {currentQuestions.alt1}
          </button>
        </div>
        <div className="w-full font-bold border-2 border-black rounded-xl p-4 hover:bg-green-400">
          <button
            value={currentQuestion.alt2}
            onClick={() => answerQuestion(2)}
          >
            {currentQuestions.alt2}
          </button>
        </div>
        <div className="w-full border-2 font-bold border-black rounded-xl p-4 hover:bg-green-400">
          <button
            value={currentQuestion.alt3}
            onClick={() => answerQuestion(3)}
          >
            {currentQuestions.alt3}
          </button>
        </div>
      </div>
    </div>
  );
}
