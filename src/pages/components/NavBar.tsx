import { Anchor } from "@mantine/core";

const Navbar = () => {
  return (
    <>
      <Anchor href="/profile" target="_blank">
        Profile
      </Anchor>
      <Anchor href="/profile/currently-reading" target="_blank">
        Currently reading
      </Anchor>
      <Anchor href="/profile/read-books" target="_blank">
        Read books
      </Anchor>
    </>
  );
};

export default Navbar;
