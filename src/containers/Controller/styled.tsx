import styled from "styled-components"
import { rem, rgba } from "polished"
import Button from "../../components/Button"

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.white};

  [data-reach-slider-input][data-orientation="horizontal"] {
    height: 2px;
  }

  [data-reach-slider-marker][data-orientation="horizontal"] {
    width: ${rem(20)};
    height: ${rem(20)};
    background-color: transparent;
    cursor: pointer;
    margin: 0;

    &:before {
      content: "";
      position: absolute;
      height: 2px;
      width: ${rem(60)};
      left: 50%;
      top: 50%;
      z-index: -1;
      margin: 0;
      transform: translate3d(-50%, -50%, 0);
      backface-visibility: hidden;
      background: linear-gradient(90deg, rgba(2, 0, 36, 0) 0%, rgba(0, 0, 0, 1) 50%, rgba(0, 212, 255, 0) 100%);
      transition: all ${(props) => props.theme.transition.base};
    }
  }

  [data-reach-slider-track] {
    background-color: ${(props) => rgba(props.theme.colors.dark, 0.16)};

    &[data-orientation="horizontal"] {
      &::after,
      &::before {
        content: "";
        width: ${rem(15)};
        height: ${rem(20)};
        top: ${rem(-10)};
        z-index: 1;
        position: absolute;
        background-color: ${(props) => props.theme.colors.white};
      }

      &::before {
        left: auto;
        right: 100%;
      }

      &::after {
        content: "";
        left: 100%;
        right: auto;
      }
    }
  }

  [data-reach-slider-handle] {
    width: 14px;
    height: 14px;
    outline: none;
    border: 0;
    box-shadow: 0 0 0 ${rem(2)} ${(props) => props.theme.colors.dark};
    background-color: ${(props) => props.theme.colors.white};
    transition: box-shadow ${(props) => props.theme.transition.base};
    cursor: pointer;
    z-index: 10;

    &:hover,
    &:active {
      box-shadow: 0 0 0 ${rem(2)} ${(props) => props.theme.colors.primary};

      ~ [data-reach-slider-marker][data-orientation="horizontal"] {
        &:before {
          width: ${rem(80)};
          background: linear-gradient(90deg, rgba(2, 0, 36, 0) 0%, rgba(255, 0, 0, 1) 50%, rgba(0, 212, 255, 0) 100%);
        }
      }
    }
  }

  [data-reach-slider-range] {
    background-color: ${(props) => rgba(props.theme.colors.dark, 0.16)};
  }

  @media all and (max-width: 767px) {
    width: 90%;
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
  margin-bottom: ${rem(14)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${rem(10)};

  h4 {
    margin-bottom: 0;
    font-size: inherit;
    font-weight: ${(props) => props.theme.fontWeight.bold};
    letter-spacing: ${rem(2.5)};
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.primary};
  }

  span {
    font-weight: ${(props) => props.theme.fontWeight.semibold};
    color: ${(props) => props.theme.colors.dark};
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
  padding: ${rem(14)} ${rem(14)};
  width: 100%;
  height: 100%;
`
