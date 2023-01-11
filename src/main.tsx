import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import ImperativeVsDeclarative from "./lessons/ImperativeVsDeclarative";
import QueuingState from "./lessons/QueuingState";
import UseEffect from "./lessons/UseEffect";
import UseRef from "./lessons/useRef";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/queuing",
    element: <QueuingState />,
  },
  {
    path: "/imperative-vs-declarative",
    element: <ImperativeVsDeclarative />,
  },
  {
    path: "/use-ref",
    element: <UseRef />,
  },
  {
    path: "/use-effect",
    element: <UseEffect />,
  },
]);

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
