import { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import SideBarWrapper from "./SideBarWrapper";
import NavList from "./NavList";
import NavItem from "./NavItem";

interface IRoute {
  name: string;
  icon?: ReactNode;
}

interface ISideBarProps {
  routes: IRoute[];
}

const SideBar: FC<ISideBarProps> = ({ routes }) => {
  return (
    <SideBarWrapper>
      <NavList>
        {routes.map(({ name, icon }, index) => (
          <NavItem key={index}>
            <NavLink to={name}>{name}</NavLink>
          </NavItem>
        ))}
      </NavList>
    </SideBarWrapper>
  );
};

export default SideBar;
