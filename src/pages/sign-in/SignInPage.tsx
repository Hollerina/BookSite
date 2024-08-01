import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return <SignIn path="/sign-in" forceRedirectUrl="/profile" />;
};

export default SignInPage;
