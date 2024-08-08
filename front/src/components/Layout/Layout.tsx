import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import LayoutWrapper from "./LayoutWrapper";
import styled from "styled-components";
import Icon from "../../UI/IconWrapper/IconWrapper";
import { HiUserCircle } from "react-icons/hi";
import IconWrapper from "../../UI/IconWrapper/IconWrapper";

const OutletWrapper = styled("section")(({ theme }) => ({
  display: "flex",
  flexGrow: 9,
  backgroundColor: theme.colors.primaryContent,
  borderRadius: theme.spacing.small,
  padding: theme.spacing.small,
  maxWidth: "70vw",
}));

const Layout = () => {
  const Icon = () => {
    return (
      <IconWrapper large>
        <HiUserCircle />
      </IconWrapper>
    );
  };

  return (
    <LayoutWrapper>
      <SideBar
        routes={[
          { name: "account", Icon, displayText: false },
          { name: "chat", displayText: true },
        ]}
      />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
