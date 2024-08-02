import styled from "styled-components";

const NavItem = styled("li")(({ theme }) => ({
  fontSize: theme.fontSize.md,
  "& a": {
    color: theme.colors.powderWhite,
  },
}));

export default NavItem;
