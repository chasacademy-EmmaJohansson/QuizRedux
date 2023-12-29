import { useQuiz, startQuiz, restartQuiz } from "../redux/quiz";
import Quiz from "./Quiz";
import Result from "./Result";

export default function QuizPage() {
  const { showResults, quizStarted } = useQuiz();

  function renderPart() {
    if (showResults) {
      return (
        <>
          <Result />
          <button
            className="pr-6 p-4 pl-6 text-2xl rounded-xl border-2 border-black bg-[#d0b49f] hover:bg-[#B58A69]"
            onClick={() => restartQuiz()}
          >
            Restart Quiz
          </button>
        </>
      );
    } else if (quizStarted) {
      return <Quiz />;
    } else {
      return (
        <button
          className="pr-6 p-4 pl-6 text-2xl rounded-xl border-2 border-black bg-[#d0b49f] hover:bg-[#B58A69]"
          onClick={() => startQuiz()}
        >
          Start Quiz
        </button>
      );
    }
  }
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center w-96">
      {renderPart()}
    </div>
  );
}
