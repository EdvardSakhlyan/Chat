import styled from "styled-components";

const SideBarWrapper = styled("nav")(({ theme }) => ({
  flexGrow: "1",
  background: theme.colors.secondaryContent,
  borderRadius: theme.spacing.small,
  color: theme.colors.powderWhite,
  padding: theme.spacing.small,
  maxWidth: "20vw",
}));

export default SideBarWrapper;
