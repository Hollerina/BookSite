import { SignedIn, UserButton } from "@clerk/clerk-react"
import styled from "@emotion/styled"
import { theme } from "../../../styling/Themeing"
import { maxLg } from "../../../styling/Responsive"

import MobileNavLinks from "./components/MobileNavLinks"
import DesktopNavLinks from "./components/DesktopNavLinks"

const HeaderTitle = styled.h1`
  color: ${theme.colours.backgroundColours.babyPowder};
  margin-bottom: -1px;
  margin-top: 0;
  padding: 0 20px;
`

const DesktopContainer = styled.div`
  display: flex;
`

const NavBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${theme.colours.accentColours.Glaucous};
  align-items: center;
  padding-top: 8px;
  border-bottom: ${theme.colours.blacks.smokeyBlack} 1px solid;

  ${maxLg("padding-top: 0px")}
`

const ProfileContainer = styled.div`
  padding: 10px;
  display: flex;

  justify-content: center;
  align-items: center;
`

const NavBar = () => {
  return (
    <NavBarContainer>
      <MobileNavLinks />
      <DesktopContainer>
        <HeaderTitle>BookSite</HeaderTitle>
        <DesktopNavLinks />
      </DesktopContainer>
      <ProfileContainer>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </ProfileContainer>
    </NavBarContainer>
  )
}

export default NavBar
