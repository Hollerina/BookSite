import { SignedIn, UserButton } from "@clerk/clerk-react";
import { Anchor } from "@mantine/core";
import styled from "styled-components";

const NavBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: green;
  align-items: center;
  padding-top: 10px;
`;

const AnchorContainer = styled.div`
  display: flex;
`;

const ProfileContainer = styled.div``;

const Navbar = () => {
  return (
    <NavBarContainer>
      <AnchorContainer>
        <Anchor href="/profile" target="_self" underline="never">
          Profile
        </Anchor>
        <Anchor
          href="/profile/currently-reading"
          target="_self"
          underline="never"
        >
          Currently reading
        </Anchor>
        <Anchor href="/profile/read-books" target="_self" underline="never">
          Read books
        </Anchor>
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
