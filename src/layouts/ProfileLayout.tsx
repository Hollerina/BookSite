import * as React from "react";
import { useAuth, SignedOut } from "@clerk/clerk-react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../pages/components/NavBar";
import { Link } from "react-router-dom";

export default function ProfileLayout() {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  console.log("test", userId);

  React.useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded]);

  if (!isLoaded) return "Loading...";

  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet />
    </>
  );
}
