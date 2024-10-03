import { useEffect } from "react"
import { useAuth } from "@clerk/clerk-react"
import { Outlet, useNavigate } from "react-router-dom"
import NavBar from "../pages/components/navBar/NavBar"
import styled from "@emotion/styled"
import { theme } from "../styling/Themeing"

const BodyContainer = styled.div`
  background-color: ${theme.colours.backgroundColours.babyPowder};
`

export default function ProfileLayout() {
  const { userId, isLoaded } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in")
    }
  }, [isLoaded])

  if (!isLoaded) {
    return (
      <BodyContainer>
        <NavBar />
        Loading...
      </BodyContainer>
    )
  }

  return (
    <BodyContainer>
      <header>
        <NavBar />
      </header>
      <Outlet />
    </BodyContainer>
  )
}
