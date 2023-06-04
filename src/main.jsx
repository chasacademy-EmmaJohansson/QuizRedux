import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "hooks-for-redux";
import QuizPage from "./QuizPage";
import Admin from "./Admin";
import Root from "./Root";
import "./app.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    element: <Root />,
    path: "/",
    children: [
      {
        path: "/",
        element: <QuizPage />,
      },
      {
        path: "/Admin",
        element: <Admin />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <React.StrictMode>
      <RouterProvider router={router} />{" "}
    </React.StrictMode>
  </Provider>
);
