import { SignedIn, UserButton } from "@clerk/clerk-react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const NavBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: green;
  align-items: center;
  padding-top: 10px;
  border-bottom: 1px solid;
`;

const AnchorContainer = styled.div`
  display: flex;
`;

const ActiveAnchor = styled.a`
  background-color: white;
  color: black;
  padding: 20px;
  margin-left: 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-left: black solid 1px;
  border-right: black solid 1px;
  border-top: black solid 1px;
  border-bottom-color: transparent;
  margin-bottom: -1px;
  text-decoration: none;
`;

const InactiveAnchor = styled.a`
  background-color: green;
  color: black;
  padding: 20px;
  margin-left: 10px;
  text-decoration: none;
`;

const ProfileContainer = styled.div``;

const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);
  console.log(location.pathname === "/profile");

  return (
    <NavBarContainer>
      <AnchorContainer>
        {location.pathname === "/profile" ? (
          <ActiveAnchor href="/profile" target="_self">
            Profile
          </ActiveAnchor>
        ) : (
          <InactiveAnchor href="/profile" target="_self">
            Profile
          </InactiveAnchor>
        )}
        {location.pathname === "/profile/currently-reading" ? (
          <ActiveAnchor href="/profile/currently-reading" target="_self">
            Currently Reading
          </ActiveAnchor>
        ) : (
          <InactiveAnchor href="/profile/currently-reading" target="_self">
            Currently Reading
          </InactiveAnchor>
        )}
        {location.pathname === "/profile/read-books" ? (
          <ActiveAnchor href="/profile/read-books" target="_self">
            Read Books
          </ActiveAnchor>
        ) : (
          <InactiveAnchor href="/profile/read-books" target="_self">
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
  );
};

export default Navbar;
