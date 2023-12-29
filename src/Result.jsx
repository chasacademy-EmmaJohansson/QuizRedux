import { useQuiz } from "../redux/quiz";

export default function Result() {
  const { score, questions } = useQuiz();

  return (
    <div>
      <h4 className="font-bold text-4xl text-[#966B4A] ">
        Score: {score} / {questions.length}
      </h4>
    </div>
  );
}
