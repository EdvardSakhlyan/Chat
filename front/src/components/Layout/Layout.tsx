import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import LayoutWrapper from "./LayoutWrapper";
import styled from "styled-components";

const OutletWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexGrow: 9,
  backgroundColor: theme.colors.primaryContent,
  borderRadius: theme.spacing.small,
}));

const Layout = () => {
  return (
    <LayoutWrapper>
      <SideBar routes={[{ name: "chat" }, { name: "account" }]} />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
