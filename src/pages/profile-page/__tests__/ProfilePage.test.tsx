import { render } from "@testing-library/react"
import ProfilePage from "../ProfilePage"
import AllTheProviders from "../../../AllTheProviders"
import { axe, toHaveNoViolations } from "jest-axe"

expect.extend(toHaveNoViolations)

describe("ProfilePage", () => {
  it("should render with no accesability violations and render correctly on desktop", async () => {
    const { container } = render(<ProfilePage />, { wrapper: AllTheProviders })
    const results = await axe(container)

    expect(results).toHaveNoViolations()
    expect(container).toMatchSnapshot()
  })
})
