import { ClerkProvider } from "@clerk/clerk-react"
import { MemoryRouter } from "react-router-dom"

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <MemoryRouter>
      <ClerkProvider
        routerPush={() => {}}
        routerReplace={() => {}}
        publishableKey={
          "pk_test_YmVjb21pbmctYmx1ZWdpbGwtNjEuY2xlcmsuYWNjb3VudHMuZGV2JA"
        }
      >
        {children}
      </ClerkProvider>
    </MemoryRouter>
  )
}

export default AllTheProviders
