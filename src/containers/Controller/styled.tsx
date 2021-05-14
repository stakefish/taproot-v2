import styled, { css } from "styled-components"
import { rem, rgba } from "polished"
import Button from "../../components/Button"

export const Wrapper = styled.div`
  position: relative;
  border-radius: ${rem(32)};
  padding: ${rem(52)} ${rem(32)} ${rem(32)};
  border: solid ${rem(2)} ${(props) => rgba(props.theme.colors.gray, 0.28)};

  [data-reach-slider-input][data-orientation="horizontal"] {
    height: 4px;
  }

  [data-reach-slider-marker][data-orientation="horizontal"] {
    width: ${rem(20)};
    height: ${rem(20)};
    background-color: transparent;
    cursor: pointer;
    margin: 0;
  }

  [data-reach-slider-track] {
    background-color: ${(props) => rgba(props.theme.colors.gray, 0.28)};
  }

  [data-reach-slider-handle] {
    width: 14px;
    height: 14px;
    outline: none;
    border: 0;
    box-shadow: 0 0 0 ${rem(4)} ${(props) => props.theme.colors.dark};
    background-color: ${(props) => props.theme.colors.primary};
    transition: box-shadow ${(props) => props.theme.transition.base};
    cursor: pointer;
    z-index: 10;

    &:hover,
    &:active {
      box-shadow: 0 0 0 ${rem(5)} ${(props) => props.theme.colors.dark};
    }
  }

  [data-reach-slider-range] {
    background-color: ${(props) => rgba(props.theme.colors.primary, 1)};
  }

  @media all and (max-width: 991px) {
    margin-top: 32px;
  }

  @media all and (max-width: 480px) {
    [data-reach-slider-input] {
      position: absolute;
      left: 60px;
      right: 40px;
      top: 8px;
    }

    ${Button} {
      margin-top: 0;
    }

    [data-reach-slider-track] {
      background-color: ${(props) => rgba(props.theme.colors.dark, 0.16)};

      &[data-orientation="horizontal"] {
        &::after,
        &::before {
          width: 30px;
        }
      }
    }
  }
`

export const SliderInfo = styled.div`
  margin-bottom: ${rem(22)};
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    margin-bottom: 0;
    font-size: inherit;
    font-weight: ${(props) => props.theme.fontWeight.medium};
    color: ${(props) => props.theme.colors.white};
    display: flex;
    align-items: center;
  }

  svg {
    height: ${rem(16)};
  }

  span {
    font-weight: ${(props) => props.theme.fontWeight.medium};
  }

  @media all and (max-width: 767px) {
    font-size: 10px;
    position: relative;
    z-index: 10;

    span {
      width: 30px;
    }
  }
`

export const Group = styled.div`
  padding-bottom: ${rem(14)};
  position: relative;
`

export const Inner = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`

export const Switcher = styled.div`
  padding: 4px;
  border-radius: ${rem(20)};
  background-color: #000000;
  width: ${rem(286)};
  height: ${rem(56)};
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
  display: flex;
`

export const SwitcherButton = styled.button<{ $active?: boolean }>`
  appearance: none;
  border: 0;
  background-color: transparent;
  border-radius: ${rem(16)};
  flex: 0 0 50%;
  color: ${(props) => props.theme.colors.gray};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;

  svg {
    height: ${rem(36)};
    position: relative;
    top: -1px;
    margin-left: ${rem(-10)};
    color: ${(props) => props.theme.colors.primary};
  }

  ${(props) =>
    props.$active &&
    css`
      background-color: ${rgba(props.theme.colors.gray, 0.4)};
      color: ${props.theme.colors.white};
    `};
`
