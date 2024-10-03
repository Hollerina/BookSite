import styled from "@emotion/styled"
import { maxLg } from "../../../../styling/Responsive"
import { Burger, Drawer } from "@mantine/core"
import { theme } from "../../../../styling/Themeing"
import { useDisclosure } from "@mantine/hooks"
import Icon from "../../Icons"
import { useLocation } from "react-router-dom"

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

const MobileNavLinks = () => {
  const [opened, { open, close }] = useDisclosure()
  const location = useLocation()

  return (
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
          <BurgerAnchorActive href="/profile" target="_self" className="active">
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
  )
}

export default MobileNavLinks
