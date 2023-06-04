import { useQuiz } from "../redux/quiz";

export default function Result() {
  const { score, questions } = useQuiz();

  return (
    <div>
      <h4 className="font-bold text-4xl text-green-400">
        Score: {score} / {questions.length}
      </h4>
    </div>
  );
}
