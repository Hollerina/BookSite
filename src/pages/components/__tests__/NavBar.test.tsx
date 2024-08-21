import { render } from "@testing-library/react";
import NavBar from "../NavBar";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";

describe("Navbar", () => {
  it("should match the snapshot", () => {
    const { container } = render(
      <ClerkProvider
        routerPush={(to) => {}}
        routerReplace={(to) => {}}
        publishableKey={
          "pk_test_YmVjb21pbmctYmx1ZWdpbGwtNjEuY2xlcmsuYWNjb3VudHMuZGV2JA"
        }
      >
        <NavBar />
      </ClerkProvider>,
      { wrapper: BrowserRouter }
    );

    expect(container).toMatchSnapshot();
  });
});
