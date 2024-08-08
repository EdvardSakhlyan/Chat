import { ReactNode } from "react";
import StyledIcon, { StyledIconProps } from "./StyledIcon";

interface IconProps extends StyledIconProps {
  children: ReactNode;
}

const IconWrapper: React.FC<IconProps> = ({ children, ...props }) => {
  return <StyledIcon {...props}>{children}</StyledIcon>;
};

export default IconWrapper;
