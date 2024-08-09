import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

export default function IndexPage() {
  return (
    <>
      <SignedOut>
        <div>
          <h1>This is the index page</h1>
          <div>hello</div>
        </div>
      </SignedOut>
      <SignedIn>
        <Navigate to="/profile" replace />
      </SignedIn>
    </>
  );
}
