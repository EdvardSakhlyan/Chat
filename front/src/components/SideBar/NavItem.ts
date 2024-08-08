import styled from "styled-components";

const NavItem = styled("li")(({ theme }) => ({
  fontSize: theme.fontSize.md,
  display: "flex",
  alignItems: "center",
  height: "50px",
  "& a": {
    color: theme.colors.powderWhite,
    height: "100%",
  },
}));

export default NavItem;
