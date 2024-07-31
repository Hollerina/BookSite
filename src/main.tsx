import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Import the layouts
import RootLayout from "./layouts/RootLayout.tsx";
import ProfileLayout from "./layouts/ProfileLayout.tsx";

// Import the components
import SignInPage from "./pages/sign-in/SignInPage.tsx";
import SignUpPage from "./pages/sign-up/SignUpPage.tsx";
import ProfilePage from "./pages/profile-page/ProfilePage.tsx";
import CurrentlyReadingPage from "./pages/currently-reading-page/CurrentlyReadingPage.tsx";
import ReadBooksPage from "./pages/read-books-page/ReadBooksPage.tsx";
import IndexPage from "./pages/index.tsx";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <IndexPage /> },
      { path: "/sign-in/*", element: <SignInPage /> },
      { path: "/sign-up/*", element: <SignUpPage /> },
      {
        element: <ProfileLayout />,
        path: "profile",
        children: [
          { path: "/profile", element: <ProfilePage /> },
          {
            path: "/profile/currently-reading",
            element: <CurrentlyReadingPage />,
          },
          { path: "/profile/read-books", element: <ReadBooksPage /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
