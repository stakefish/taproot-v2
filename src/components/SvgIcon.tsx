import styled from "styled-components"
import { rem } from "polished"

export enum SvgIconSize {
  Xs,
  Md,
  Lg,
}

export interface SvgIconProps {
  $size?: SvgIconSize
  children: JSX.Element | JSX.Element[]
}

const SvgIcon = styled.svg<SvgIconProps>`
  width: auto;
  height: ${rem(20)};
  display: inline-block;
  vertical-align: middle;
  margin-right: ${rem(10)};
  line-height: normal;
  transition: opacity ${(props) => props.theme.transition.base};

  ~ span {
    display: inline-block;
    vertical-align: middle;
  }

  path {
    fill: currentColor;
  }
`

export default SvgIcon
