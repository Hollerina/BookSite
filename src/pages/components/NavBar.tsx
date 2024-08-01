import { Anchor } from "@mantine/core";

const Navbar = () => {
  return (
    <>
      <Anchor href="/profile" target="_self">
        Profile
      </Anchor>
      <Anchor href="/profile/currently-reading" target="_self">
        Currently reading
      </Anchor>
      <Anchor href="/profile/read-books" target="_self">
        Read books
      </Anchor>
    </>
  );
};

export default Navbar;
