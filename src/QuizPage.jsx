import { useQuiz, startQuiz } from "../redux/quiz";
import Quiz from "./Quiz";
import Result from "./Result";

export default function QuizPage() {
  const { showResults, quizStarted } = useQuiz();

  function renderPart() {
    if (showResults) {
      return <Result />;
    } else if (quizStarted) {
      return <Quiz />;
    } else {
      return (
        <button
          className="pr-6 p-4 pl-6 text-2xl rounded-xl border-2 border-black bg-green-300 hover:bg-green-400"
          onClick={() => startQuiz()}
        >
          Start Quiz
        </button>
      );
    }
  }
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      {renderPart()}
    </div>
  );
}
