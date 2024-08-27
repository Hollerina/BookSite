import { fireEvent, render } from "@testing-library/react"
import NavBar from "../NavBar"
import "@testing-library/jest-dom"
import { MemoryRouter } from "react-router-dom"
import { ClerkProvider } from "@clerk/clerk-react"
import { screen } from "@testing-library/react"
import AllTheProviders from "../../../AllTheProviders"

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/profile",
  }),
}))

describe("Navbar", () => {
  //Snapshot doesn't render with CSS
  it("should match the snapshot", () => {
    const { container } = render(<NavBar />, { wrapper: AllTheProviders })

    expect(container).toMatchSnapshot()
  })

  it.each([
    ["/profile", "Profile"],
    ["/profile/currently-reading", "Currently Reading"],
    ["/profile/read-books", "Read Books"],
  ])("should have a href %s when %s is clicked", (hrefLink, navbarTitle) => {
    render(<NavBar />, { wrapper: AllTheProviders })
    const link = screen.getByText(navbarTitle)
    fireEvent.click(link)

    expect(screen.getByRole("link", { name: navbarTitle })).toHaveAttribute(
      "href",
      hrefLink
    )
  })
})
