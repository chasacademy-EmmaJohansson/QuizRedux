import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <div className="flex flex-col justify-evenly items-center bg-[#D7BFAD] ">
      <ul className="  mt-5 flex items-center justify-center w-full p-8 rounded gap-5 bg-[#D0B49F]">
        <li className="font-bold   text-[#B58A69]  hover:text-[#966B4A] text-4xl">
          <Link to={"/"}>Quiz</Link>
        </li>
        <span className="font-semibold text-4xl text-[#B58A69] ">|</span>
        <li className="font-bold text-[#B58A69] hover:text-[#966B4A] text-4xl">
          <Link to={"/Admin"}>Admin</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
