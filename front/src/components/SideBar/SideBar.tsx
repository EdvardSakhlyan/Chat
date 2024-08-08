import { ElementType, FC } from "react";
import { NavLink } from "react-router-dom";
import SideBarWrapper from "./SideBarWrapper";
import NavList from "./NavList";
import NavItem from "./NavItem";
import styled from "styled-components";
import toCapitalize from "../../utils/toCapitalize";

interface IRoute {
  name: string;
  Icon?: ElementType;
  displayText?: boolean;
}

interface ISideBarProps {
  routes: IRoute[];
}

const SideBar: FC<ISideBarProps> = ({ routes }) => {
  return (
    <SideBarWrapper>
      <NavList>
        {routes.map(({ name, Icon, displayText }, index) => (
          <NavItem key={index}>
            <NavLink to={name}>
              {Icon && <Icon />}
              {displayText ? toCapitalize(name) : null}
            </NavLink>
          </NavItem>
        ))}
      </NavList>
    </SideBarWrapper>
  );
};

export default SideBar;
