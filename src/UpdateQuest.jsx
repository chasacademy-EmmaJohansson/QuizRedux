import { updateQuestion, removeQuestion } from "../redux/quiz";
import { useState } from "react";

export default function UpdateQuest({ question }) {
  const [title, setTitle] = useState(question.title);
  const [alt1, setAlt1] = useState(question.alt1);
  const [alt2, setAlt2] = useState(question.alt2);
  const [alt3, setAlt3] = useState(question.alt3);
  const [correctAnswer, setCorrectAnswer] = useState(question.correctAnswer);

  function handleUpdate() {
    const updateList = {
      title,
      alt1,
      alt2,
      alt3,
      correctAnswer,
      id: question.id,
    };
    updateQuestion(updateList);
  }

  function handleDelete(id) {
    removeQuestion(id);
  }
  return (
    <div className="flex flex-col items-center justify-between w-screen ">
      <div className="flex flex-col gap-4 justify-center items-center ">
        <div>
          <input
            className=" bg-green-300 font-bold w-96 border-2 border-black text-center p-2 rounded-xl"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-center gap-4">
          <input
            className="border-2 w-72 md:w-96 font-bold border-black pr-4 pl-4 p-2 rounded-xl text-center"
            type="text"
            value={alt1}
            onChange={(e) => setAlt1(e.target.value)}
          />
          <input
            className="border-2 font-bold border-black pr-4 pl-4 p-2 rounded-xl text-center"
            type="text"
            value={alt2}
            onChange={(e) => setAlt2(e.target.value)}
          />
          <input
            className="border-2 font-bold border-black pr-4 pl-4 p-2 rounded-xl text-center"
            type="text"
            value={alt3}
            onChange={(e) => setAlt3(e.target.value)}
          />
          <input
            className="border-2 font-bold border-black pr-4 pl-4 p-2 rounded-xl text-center"
            type="text"
            placeholder="Questionnumber for right answer"
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
          />
          <button
            className="pr-4 p-1 pl-4 font-bold rounded-xl border-2 border-black bg-green-300 hover:bg-green-400"
            onClick={handleUpdate}
          >
            Update
          </button>
          <button
            className="  pr-4 p-1 pl-4 font-bold rounded-xl border-2 border-black bg-green-300 hover:bg-green-400"
            onClick={() => handleDelete(question.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
