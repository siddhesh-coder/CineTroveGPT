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
import { ThemeProvider } from "@material-tailwind/react";
import { Spinner } from "@material-tailwind/react";
import { ConfigProvider } from "react-avatar";
import Explore from "./components/Explore/Explore";

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
      },
      {
        path: "/explore",
        element: (
          <Suspense fallback={<Spinner />}>
            <Explore />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <ThemeProvider>
    <Provider store={appStore}>
      <ConfigProvider>
        <RouterProvider router={router} />
      </ConfigProvider>
    </Provider>
    <Toaster position="top-right" reverseOrder={false} />
  </ThemeProvider>
  </React.StrictMode>
);
reportWebVitals();
