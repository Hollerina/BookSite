import { SignedIn, UserButton } from "@clerk/clerk-react"
import { useLocation } from "react-router-dom"
import styled from "@emotion/styled"
import { theme } from "../../styling/Themeing"
import { maxLg } from "../../styling/Responsive"
import { Burger, Drawer } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"

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

const AnchorContainer = styled.div`
  display: flex;
  font-size: ${theme.fontSize.md};

  ${maxLg("display: none;")};
`

const ActiveAnchor = styled.a`
  background-color: ${theme.colours.backgroundColours.babyPowder};
  color: black;
  padding: 12px;
  margin-left: 5px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-left: ${theme.colours.blacks.smokeyBlack} solid 1px;
  border-right: ${theme.colours.blacks.smokeyBlack} solid 1px;
  border-top: ${theme.colours.blacks.smokeyBlack} solid 1px;
  border-bottom-color: transparent;
  margin-bottom: -1px;
  text-decoration: none;
  width: 157px;
  text-align: center;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 5px;
    text-decoration-thickness: 2px;
    text-decoration-color: ${theme.colours.blacks.night};
  }
`

const InactiveAnchor = styled.a`
  background-color: ${theme.colours.accentColours.Glaucous};
  color: ${theme.colours.backgroundColours.babyPowder};
  padding: 12px;
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

const BurgerContainer = styled.div`
  display: none;
  padding: 12px;

  ${maxLg("display: flex;")};
`

const BurgerAnchorActive = styled.a``

const Bsub = styled(Drawer)`
  padding: 300px;
`

const ProfileContainer = styled.div`
  padding: 10px;
  display: flex;

  justify-content: center;
  align-items: center;
`

const Navbar = () => {
  const location = useLocation()

  //Toggle will change the boolean value of opened to be the opposite of what it currently is
  const [opened, { open, close }] = useDisclosure()

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
      <BurgerContainer>
        <Drawer opened={opened} onClose={close} title="NavBar" position="left">
          <BurgerAnchorActive href="/profile" target="_self" className="active">
            Profile
          </BurgerAnchorActive>
        </Drawer>
        <Burger
          opened={opened}
          onClick={open}
          aria-label="Toggle navigation"
          color="#FAF9F6"
          lineSize={2}
        ></Burger>
      </BurgerContainer>
      <ProfileContainer>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </ProfileContainer>
    </NavBarContainer>
  )
}

export default Navbar
