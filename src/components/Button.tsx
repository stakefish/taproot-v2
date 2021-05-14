import styled, { css } from "styled-components"
import { rem, rgba } from "polished"

export enum ButtonSize {
  Xs,
  Sm,
  Md,
  Lg,
}

export enum ButtonColor {
  White,
  Gray,
  Primary,
  Black,
  Bordered,
}

export interface ButtonProps {
  $size?: ButtonSize
  $color?: ButtonColor
  $block?: string | boolean | undefined
}

const Button = styled.button<ButtonProps>`
  display: inline-flex;
  padding: ${rem(19)} ${rem(32)};
  border-radius: ${rem(16)};
  position: relative;
  letter-spacing: 0;
  line-height: 1;
  border: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: ${(props) => rem(props.theme.fontSize.lead)};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  transition: background-color ${(props) => props.theme.transition.base};
  appearance: none;
  cursor: pointer;
  outline: none !important;

  svg {
    height: ${rem(24)};
    margin: ${rem(-7)} ${rem(12)} ${rem(-7)} ${rem(-10)};
  }

  @media all and (max-width: 480px) {
    font-size: 12px;
    padding: 9px 12px;
  }

  ${(props) =>
    props.$color === ButtonColor.White &&
    css`
      background-color: ${(props) => props.theme.colors.white};
      color: ${(props) => props.theme.colors.dark};

      &:hover {
        background-color: #e5e5e5;
      }
    `}

  ${(props) =>
    props.$color === ButtonColor.Primary &&
    css`
      background-color: ${props.theme.colors.primary};
      color: ${props.theme.colors.white};

      &:hover {
        background-color: #0e690f;
      }
    `}

  ${(props) =>
    props.$color === ButtonColor.Black &&
    css`
      background-color: ${props.theme.colors.dark};
      color: ${props.theme.colors.white};

      &:hover {
        background-color: #353535;
      }
    `}

  ${(props) =>
    props.$color === ButtonColor.Gray &&
    css`
      background-color: #f3f3f3;
      color: ${props.theme.colors.dark};

      &:hover {
        background-color: #e5e5e5;
      }
    `}
    
  ${(props) =>
    props.$color === ButtonColor.Bordered &&
    css`
      background-color: transparent;
      color: ${props.theme.colors.white};
      box-shadow: inset 0 0 0 ${rem(2)} ${(props) => rgba(props.theme.colors.gray, 0.28)};

      &:hover {
        background-color: transparent;
      }
    `}

  ${(props) =>
    props.$size === ButtonSize.Lg &&
    css`
      font-size: ${rem(20)};
      padding: ${rem(20)} ${rem(32)};

      svg {
        height: ${rem(30)};
        margin: ${rem(-7)} ${rem(8)} ${rem(-7)} ${rem(-15)};
      }

      @media all and (max-width: 480px) {
        font-size: 14px;
        padding: 10px 20px;

        svg {
          position: absolute;
          left: 2px;
          top: 1px;
          height: 32px;
          margin: 0;
        }
      }
    `}

  ${(props) =>
    props.$size === ButtonSize.Xs &&
    css`
      padding: ${rem(8)} ${rem(16)};
      font-size: ${rem(10)};
      font-weight: ${(props) => props.theme.fontWeight.bold};

      @media all and (max-width: 767px) {
        font-size: 10px;
        padding: 9px 12px;
      }
    `}

  ${(props) =>
    props.$block &&
    css`
      width: 100%;
    `}
`

export default Button
