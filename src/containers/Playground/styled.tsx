import styled from "styled-components"
import { rem } from "polished"

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  transform: translate3d(0, 0, 0);
  padding: ${rem(54)} ${rem(40)};
  padding: 3vw 2vw;

  @media all and (max-width: 767px) {
    padding: 24px 20px 16px;
  }

  @media all and (max-width: 767px) {
  }
`

export const Outer = styled.div`
  border-radius: ${rem(40)};
  border-style: solid;
  border-width: 3px;
  border-image-source: linear-gradient(142deg, #31be37 2%, #252628 29%);
  border-image-slice: 1;
  background-image: linear-gradient(to bottom, #252628, #252628), linear-gradient(142deg, #31be37 2%, #252628 29%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  overflow: hidden;
  height: 100%;
  width: 100%;
  min-height: ${rem(500)};

  @media all and (max-width: 767px) {
    min-height: ${rem(480)};
  }

  @media all and (max-width: 767px) {
    height: auto;
    min-height: 0;
  }
`
