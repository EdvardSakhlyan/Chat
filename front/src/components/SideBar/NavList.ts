import styled from "styled-components";

const NavList = styled("ul")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.small,
}));

export default NavList;
