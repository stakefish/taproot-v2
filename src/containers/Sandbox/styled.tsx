import styled from "styled-components"
import { rem } from "polished"

import Button from "../../components/Button"

import { slideUp } from "../../core/GlobalStyles"
import { Cursor, CURSORS } from "./index"

interface WrapperProps {
  preview?: string
  cursor: Cursor
}

export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  position: relative;
  border-radius: ${rem(24)};
  background-color: ${(props) => props.theme.colors.black};
  background-image: ${(props) => `url(${props.preview})` || "none"};
  background-size: cover;
  background-position: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  transform: translate3d(0, 0, 0);
  cursor: ${(props) => CURSORS.get(props.cursor)};

  &:before {
    content: "";
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(18px);
    border-radius: ${rem(24)};
  }

  .stage {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    border-radius: ${rem(24)};
  }

  @media all and (min-width: 1600px) {
    margin-left: auto;
  }

  .konvajs-content {
    min-width: 540px;
    min-height: 415px;

    @media all and (min-width: 1025px) {
      width: 100% !important;
      height: 100% !important;
    }

    @media all and (max-width: 580px) {
      width: 280px !important;
      height: 280px !important;
      min-width: 0;
      min-height: 0;
    }

    canvas {
    }
  }
`

export const Actions = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;

  @media all and (max-width: 480px) {
    position: static;
  }
`

export const Relative = styled.div`
  position: relative;
  width: 50%;

  &:first-child {
    flex: 0 0 50%;
  }

  ${Button} {
    width: 100%;
  }

  > ${Button} {
    transform: translate3d(0, 100%, 0);
    border-left: 1px solid #000;
    animation: 0.3s ${slideUp} forwards 1s ease;
  }

  &:nth-child(2) {
    > ${Button} {
      animation-delay: 1.1s;
    }
  }

  &:last-child {
    > ${Button} {
      animation-delay: 1.2s;
    }
  }

  @media all and (max-width: 480px) {
    position: static;
    overflow: hidden;
  }
`
