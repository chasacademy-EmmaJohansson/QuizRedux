import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <div className="flex flex-col justify-evenly items-center bg-stone-400">
      <ul className=" border-b-2 border-green-400 mt-5 flex items-center justify-center gap-5">
        <li className="font-bold text-black hover:text-green-500 text-4xl">
          <Link to={"/"}>Quiz</Link>
        </li>
        <li className="font-bold text-black hover:text-green-500 text-4xl">
          <Link to={"/Admin"}>Admin</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
