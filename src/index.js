import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EntryPage from "./components/Home/EntryPage";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import appStore from "./utils/Store/appStore";
import Details from "./components/Browse/Details";
import { ThemeProvider } from "@material-tailwind/react";
import { Spinner } from "@material-tailwind/react";

const Auth = lazy(() => import("./components/Auth/Auth"));
const Browse = lazy(() => import("./components/Browse/Browse"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <EntryPage />,
      },
      {
        path: "/auth",
        element: (
          <Suspense fallback={<Spinner />}>
            <Auth />
          </Suspense>
        ),
      },
      {
        path: "/browse",
        element: (
          <Suspense fallback={<Spinner />}>
            <Browse />
          </Suspense>
        ),
        children: [
          {
            path: ":movieId",
            element: <Details />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={appStore}>
        <RouterProvider router={router} />
      </Provider>
      <Toaster position="top-right" reverseOrder={false} />
    </ThemeProvider>
  </React.StrictMode>
);
reportWebVitals();