import { ClerkProvider } from "@clerk/clerk-react"
import { MantineProvider } from "@mantine/core"
import { MemoryRouter } from "react-router-dom"

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <MantineProvider>
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
    </MantineProvider>
  )
}

export default AllTheProviders
