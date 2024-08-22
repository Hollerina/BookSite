import { render } from "@testing-library/react";
import NavBar from "../NavBar";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserRouter>
      <ClerkProvider
        routerPush={(to) => {}}
        routerReplace={(to) => {}}
        publishableKey={
          "pk_test_YmVjb21pbmctYmx1ZWdpbGwtNjEuY2xlcmsuYWNjb3VudHMuZGV2JA"
        }
      >
        {children}
      </ClerkProvider>
    </BrowserRouter>
  );
};

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/profile",
  }),
}));

describe("Navbar", () => {
  it("should match the snapshot", () => {
    const { container } = render(<NavBar />, { wrapper: AllTheProviders });

    expect(container).toMatchSnapshot();
  });
});
