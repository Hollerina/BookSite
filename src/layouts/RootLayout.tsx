import { Link, Outlet, useNavigate } from "react-router-dom";
import { ClerkProvider, SignedOut } from "@clerk/clerk-react";
import NavBar from "../pages/components/NavBar";
import styled from "styled-components";

const PUBLISHABLE_KEY =
  "pk_test_YmVjb21pbmctYmx1ZWdpbGwtNjEuY2xlcmsuYWNjb3VudHMuZGV2JA";

console.log(PUBLISHABLE_KEY);

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}


const Header = styled.header``;


export default function RootLayout() {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
      publishableKey={PUBLISHABLE_KEY}
    >
      <Header>
        <NavBar />
        <SignedOut>
          <Link to="/sign-in">Sign In</Link>
        </SignedOut>
      </Header>

      <main>
        <Outlet />
      </main>
    </ClerkProvider>
  );
}
