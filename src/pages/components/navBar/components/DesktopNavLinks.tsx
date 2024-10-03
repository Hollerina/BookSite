import styled from "@emotion/styled"
import { theme } from "../../../../styling/Themeing"
import { maxLg } from "../../../../styling/Responsive"
import { useLocation } from "react-router-dom"

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

const DesktopNavLinks = () => {
  const location = useLocation()

  return (
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
  )
}

export default DesktopNavLinks
