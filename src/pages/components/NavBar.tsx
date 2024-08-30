import { SignedIn, UserButton } from "@clerk/clerk-react"
import { useLocation } from "react-router-dom"
import styled from "@emotion/styled"
import { theme } from "../../styling/Themeing"

const NavBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${theme.colours.accentColours.Glaucous};
  align-items: center;
  padding-top: 8px;
  border-bottom: ${theme.colours.blacks.smokeyBlack} 1px solid;
`

const AnchorContainer = styled.div`
  display: flex;
`

const ActiveAnchor = styled.a`
  background-color: ${theme.colours.backgroundColours.babyPowder};
  color: black;
  padding: 11px 12px;
  margin-left: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-left: ${theme.colours.blacks.smokeyBlack} solid 1px;
  border-right: ${theme.colours.blacks.smokeyBlack} solid 1px;
  border-top: ${theme.colours.blacks.smokeyBlack} solid 1px;
  border-bottom-color: transparent;
  margin-bottom: -1px;
  text-decoration: none;
  width: 157px;
  text-align: center;
`

const InactiveAnchor = styled.a`
  background-color: ${theme.colours.accentColours.Glaucous};
  color: ${theme.colours.backgroundColours.babyPowder};
  padding: 11px 12px;
  margin-left: 5px;
  text-decoration: none;
  width: 157px;
  text-align: center;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 5px;
    text-decoration-thickness: 2px;
    text-decoration-color: ${theme.colours.backgroundColours.isabelline};
  }
`

const ProfileContainer = styled.div``

const Navbar = () => {
  const location = useLocation()

  return (
    <NavBarContainer>
      <AnchorContainer>
        {location.pathname === "/profile" ? (
          <ActiveAnchor href="/profile" target="_self" className="active">
            Profile
          </ActiveAnchor>
        ) : (
          <InactiveAnchor href="/profile" target="_self" className="inactive">
            Profile
          </InactiveAnchor>
        )}
        {location.pathname === "/profile/currently-reading" ? (
          <ActiveAnchor
            href="/profile/currently-reading"
            target="_self"
            className="active"
          >
            Currently Reading
          </ActiveAnchor>
        ) : (
          <InactiveAnchor
            href="/profile/currently-reading"
            target="_self"
            className="inactive"
          >
            Currently Reading
          </InactiveAnchor>
        )}
        {location.pathname === "/profile/read-books" ? (
          <ActiveAnchor
            href="/profile/read-books"
            target="_self"
            className="active"
          >
            Read Books
          </ActiveAnchor>
        ) : (
          <InactiveAnchor
            href="/profile/read-books"
            target="_self"
            className="inactive"
          >
            Read Books
          </InactiveAnchor>
        )}
      </AnchorContainer>
      <ProfileContainer>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </ProfileContainer>
    </NavBarContainer>
  )
}

export default Navbar
