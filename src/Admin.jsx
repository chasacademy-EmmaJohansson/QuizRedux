import { useState } from "react";
import {
  addQuestion,
  useQuiz,
  updateNewQuestion,
  clearNewQuestion,
} from "../redux/quiz";
import UpdateQuest from "./UpdateQuest";

export default function Admin() {
  const [added, setAdded] = useState(false);
  const quizObject = useQuiz();
  const {
    newQuestion: { title, alt1, alt2, alt3, correctAnswer },
  } = quizObject;

  function handleAdd() {
    const quiz = {
      title,
      alt1,
      alt2,
      alt3,
      correctAnswer,
      id: Date.now(),
    };
    addQuestion(quiz);
    setAdded(true);
    clearNewQuestion();
  }

  return (
    <div className="flex flex-col items-center mt-10 min-h-screen bg-[D7BFAD] gap-10">
      <div className="flex flex-col gap-4 ">
        <div className="text-center flex flex-col gap-6">
          <p className="font-bold text-lg mt-6">
            Write your own questions here
          </p>
          <input
            className="w-72 md:w-96 border-2 font-bold border-black pr-4 pl-4 p-2 rounded-xl"
            type="text"
            placeholder="Write your question"
            value={title}
            onChange={(e) => updateNewQuestion({ title: e.target.value })}
          />
        </div>
        <div className="flex flex-col justify-center gap-4">
          <input
            className="border-2 font-bold border-black pr-4 pl-4 p-2 rounded-xl"
            type="text"
            placeholder="Write alternative 1"
            value={alt1}
            onChange={(e) => updateNewQuestion({ alt1: e.target.value })}
          />

          <input
            className="border-2 font-bold border-black pr-4 pl-4 p-2 rounded-xl"
            type="text"
            placeholder="Write alternative 2"
            value={alt2}
            onChange={(e) => updateNewQuestion({ alt2: e.target.value })}
          />

          <input
            className="border-2 font-bold border-black pr-4 pl-4 p-2 rounded-xl"
            type="text"
            placeholder="Write alternative 3"
            value={alt3}
            onChange={(e) => updateNewQuestion({ alt3: e.target.value })}
          />

          <input
            className="border-2 font-bold border-black pr-4 pl-4 p-2 rounded-xl"
            type="text"
            placeholder="Write the number of the correct answer"
            value={correctAnswer}
            onChange={(e) =>
              updateNewQuestion({ correctAnswer: e.target.value })
            }
          />
          <button
            className="pr-4 p-1 pl-4 font-bold rounded-xl border-2 border-black bg-[#d0b49f] hover:bg-[#B58A69]"
            onClick={handleAdd}
          >
            Add
          </button>
          {added && <p className="text-center font-semibold ">Added!</p>}
        </div>
      </div>
      {quizObject.questions.map((question) => {
        return <UpdateQuest key={question.id} question={question} />;
      })}
    </div>
  );
}
