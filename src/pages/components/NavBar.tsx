import { SignedIn, UserButton } from "@clerk/clerk-react"
import { useLocation } from "react-router-dom"
import styled from "@emotion/styled"
import { theme } from "../../styling/Themeing"
import { maxLg } from "../../styling/Responsive"
import { Burger, Drawer } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import Icon from "./Icons"

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

const BurgerDrawer = styled(Drawer)`
  & .mantine-Drawer-header,
  .mantine-Drawer-content {
    background-color: ${theme.colours.accentColours.Glaucous};
  }

  & .mantine-Drawer-header {
    color: white;
    border-bottom: 1px solid ${theme.colours.backgroundColours.babyPowder};
  }
  & .mantine-Drawer-body {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
`
const BurgerAnchorActive = styled.a`
  background-color: ${theme.colours.backgroundColours.babyPowder};
  width: 100%;
  padding: 16px;
  text-decoration: none;
  color: ${theme.colours.blacks.night};
  display: flex;
  justify-content: space-between;
`

const BurgerAnchorInactive = styled.a`
  width: 100%;
  padding: 16px;
  color: ${theme.colours.backgroundColours.babyPowder};
  text-decoration: none;
  display: flex;
  justify-content: space-between;
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
      <BurgerContainer>
        <BurgerDrawer
          opened={opened}
          onClose={close}
          withCloseButton={false}
          position="left"
          overlayProps={{
            backgroundOpacity: 0.5,
            blur: 4,
          }}
          size="xs"
        >
          {location.pathname === "/profile" ? (
            <BurgerAnchorActive
              href="/profile"
              target="_self"
              className="active"
            >
              Profile <Icon />
            </BurgerAnchorActive>
          ) : (
            <BurgerAnchorInactive
              href="/profile"
              target="_self"
              className="active"
            >
              Profile <Icon />
            </BurgerAnchorInactive>
          )}
          {location.pathname === "/profile/currently-reading" ? (
            <BurgerAnchorActive
              href="/profile/currently-reading"
              target="_self"
              className="active"
            >
              Currently Reading <Icon />
            </BurgerAnchorActive>
          ) : (
            <BurgerAnchorInactive
              href="/profile/currently-reading"
              target="_self"
              className="active"
            >
              Currently Reading <Icon />
            </BurgerAnchorInactive>
          )}
          {location.pathname === "/profile/read-books" ? (
            <BurgerAnchorActive
              href="/profile/read-books"
              target="_self"
              className="active"
            >
              Read Books <Icon />
            </BurgerAnchorActive>
          ) : (
            <BurgerAnchorInactive
              href="/profile/read-books"
              target="_self"
              className="active"
            >
              Read Books <Icon />
            </BurgerAnchorInactive>
          )}
        </BurgerDrawer>
        <Burger
          opened={opened}
          onClick={open}
          aria-label="Toggle navigation"
          color="#FAF9F6"
          lineSize={2}
        ></Burger>
      </BurgerContainer>
      <DesktopContainer>
        <HeaderTitle>BookSite</HeaderTitle>
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
      </DesktopContainer>
      <ProfileContainer>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </ProfileContainer>
    </NavBarContainer>
  )
}

export default Navbar
