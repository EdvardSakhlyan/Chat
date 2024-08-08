import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import { FaUserTie, FaDocker } from "react-icons/fa";

export interface StyledIconProps {
  color?: string;
  small?: boolean;
  med?: boolean;
  large?: boolean;
}

const StyledIcon = styled.span<StyledIconProps>`
  color: ${(props) => props.color};
  display: "inline-block";
  & svg {
    ${(props) =>
      props.small &&
      css`
        width: 14px !important;
        height: 14px !important;
      `}
    ${(props) =>
      props.med &&
      css`
        width: 30px !important;
        height: 30px !important;
      `}
    ${(props) =>
      props.large &&
      css`
        width: 50px !important;
        height: 50px !important;
      `}
  }
`;

export default StyledIcon;
