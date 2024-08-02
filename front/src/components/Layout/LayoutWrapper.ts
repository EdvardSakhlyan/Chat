import styled from "styled-components";

const LayoutWrapper = styled("div")(({ theme }) => ({
  backgroundColor: theme.colors.mainbackground,
  width: "100%",
  height: "100vh",
  padding: theme.spacing.large,
  display: "flex",
  gap: theme.spacing.small,
}));

export default LayoutWrapper;
