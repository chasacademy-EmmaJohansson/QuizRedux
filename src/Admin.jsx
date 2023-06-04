import { useState } from "react";
import { addQuestion, useQuiz } from "../redux/quiz";
import UpdateQuest from "./UpdateQuest";

export default function Admin() {
  const quizObject = useQuiz();
  const [title, setTitle] = useState();
  const [alt1, setAlt1] = useState();
  const [alt2, setAlt2] = useState();
  const [alt3, setAlt3] = useState();
  const [correctAnswer, setCorrectAnswer] = useState();

  function handleAdd() {
    const quiz = {
      title: title,
      alt1: alt1,
      alt2: alt2,
      alt3: alt3,
      correctAnswer: correctAnswer,
      id: Date.now(),
    };
    addQuestion(quiz);
  }

  return (
    <div className="flex flex-col items-center mt-10 h-screen bg-stone-200 gap-10">
      <div className="flex flex-col gap-4 ">
        <div className="text-center flex flex-col gap-6">
          <p className="font-bold text-lg mt-6">
            Write your own questions here
          </p>
          <input
            className=" w-72 md:w-96 border-2 font-bold border-black pr-4 pl-4 p-2 rounded-xl"
            type="text"
            placeholder="Write your question"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-center gap-4">
          <input
            className="border-2 font-bold border-black pr-4 pl-4 p-2 rounded-xl"
            type="text"
            placeholder="Write alternative 1"
            onChange={(e) => setAlt1(e.target.value)}
          />

          <input
            className="border-2 font-bold border-black pr-4 pl-4 p-2 rounded-xl"
            type="text"
            placeholder="Write alternative 2"
            onChange={(e) => setAlt2(e.target.value)}
          />

          <input
            className="border-2 font-bold border-black pr-4 pl-4 p-2 rounded-xl"
            type="text"
            placeholder="Write alternative 3"
            onChange={(e) => setAlt3(e.target.value)}
          />

          <input
            className="border-2 font-bold border-black pr-4 pl-4 p-2 rounded-xl"
            type="text"
            placeholder="Write the correct answer"
            onChange={(e) => setCorrectAnswer(e.target.value)}
          />
          <button
            className="pr-4 p-1 pl-4 font-bold rounded-xl border-2 border-black bg-green-300 hover:bg-green-400"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>
      {quizObject.questions.map((question) => {
        return <UpdateQuest key={question.id} question={question} />;
      })}
    </div>
  );
}
