import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "@mantine/core/styles.css";

// Import the layouts
import RootLayout from "./layouts/RootLayout.tsx";
import ProfileLayout from "./layouts/ProfileLayout.tsx";

// Import the components
import SignInPage from "./pages/sign-in/SignInPage.tsx";
import SignUpPage from "./pages/sign-up/SignUpPage.tsx";
import ProfilePage from "./pages/profile-page";
import CurrentlyReadingPage from "./pages/currently-reading-page";
import ReadBooksPage from "./pages/read-books-page";
import IndexPage from "./pages/index.tsx";
import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({});

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
  <MantineProvider theme={theme}>
    <RouterProvider router={router} />
  </MantineProvider>
);
