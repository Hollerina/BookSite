import { fireEvent, render } from "@testing-library/react"
import NavBar from "../NavBar"
import "@testing-library/jest-dom"
import { screen } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import AllTheProviders from "../../../../AllTheProviders"

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/profile",
  }),
}))

expect.extend(toHaveNoViolations)

describe("Navbar", () => {
  //Work around for mocking problems - might be able to have in seperate file
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    })
  })
  it("should render with no accessability issues", async () => {
    const { container } = render(<NavBar />, { wrapper: AllTheProviders })
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
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
