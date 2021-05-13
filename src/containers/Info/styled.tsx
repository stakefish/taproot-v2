import styled from "styled-components"
import { rem } from "polished"
import { Row } from "react-styled-flexboxgrid"

import Button from "../../components/Button"

export const Wrapper = styled.div`
  width: ${rem(645)};
  max-width: 100%;
  margin: 0 auto;
  padding: 0 ${rem(40)};
  text-align: center;

  ${Row} {
    height: 100%;
  }

  p {
    font-size: ${(props) => rem(props.theme.fontSize.lead)};
    margin-bottom: ${rem(28)};
  }

  @media all and (max-width: 480px) {
    p {
      margin-bottom: 20px;
    }
  }

  @media all and (max-width: 280px) {
    br {
      display: none;
    }
  }
`

export const Links = styled.div`
  padding-bottom: ${rem(10)};
  font-size: ${rem(16)};
  font-weight: 500;

  svg path {
    fill: ${(props) => props.theme.colors.primary};
    transition: fill ${(props) => props.theme.transition.base};
  }

  a {
    color: ${(props) => props.theme.colors.white};
    padding: ${rem(10)};
    white-space: nowrap;

    & + a {
      margin-left: ${rem(12)};
    }

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  @media all and (max-width: 767px) {
    margin-bottom: 24px;
    padding-bottom: 0;
  }
`

export const Divider = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.dark};
  width: ${rem(90)};
  margin: ${rem(30)} auto;
  margin: 3vh auto;

  @media all and (max-width: 767px) {
    display: none;
  }
`

export const Hint = styled.div`
  margin: ${rem(14)} 0 0;
  opacity: 0.4;
  font-size: ${rem(14)};
  color: ${(props) => props.theme.colors.dark};
  letter-spacing: 0;
  text-align: center;
  pointer-events: none;

  @media all and (max-width: 767px) {
    display: none;
  }
`

export const UploadWrapper = styled.div`
  padding: ${rem(20)};
  height: ${rem(148)};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${Button} {
    max-width: 100%;
    min-width: ${rem(205)};
  }

  @media all and (min-width: 768px) {
    input {
      display: block !important;
      opacity: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      appearance: none;
      cursor: pointer;
    }
  }

  @media all and (max-width: 767px) {
    height: auto;
    padding: 0;
  }

  @media all and (max-width: 480px) {
    display: block;

    ${Button} {
      width: 100%;
    }
  }
`

export const Logo = styled.div`
  width: ${rem(64)};
  height: ${rem(64)};
  margin: ${rem(20)} auto;
  border-radius: 4px;
  background-color: #31be37;
  border-radius: 2px;
  position: relative;

  &:after {
    content: "";
    top: ${rem(5)};
    left: ${rem(5)};
    right: ${rem(5)};
    bottom: ${rem(18)};
    position: absolute;
    border-radius: 2px;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1%, rgba(255, 255, 255, 0.01));
  }
`
