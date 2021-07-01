import styled from "styled-components"
import { rem } from "polished"

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  transform: translate3d(0, 0, 0);
  padding: ${rem(48)};
  padding: 3vw;

  @media all and (max-width: 767px) {
    padding: 24px 20px 16px;
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
  -webkit-mask-image: -webkit-radial-gradient(white, black);

  @media all and (max-width: 767px) {
    min-height: ${rem(480)};
  }
`

export const InnerCard = styled.div`
  width: ${rem(685)};
  max-width: 100%;
  margin: 0 auto;
  padding: 0 ${rem(65)};
  padding: 0 3vw;

  @media all and (max-width: 767px) {
    width: 100%;
  }
`

export const Buttons = styled.div`
  margin-top: ${rem(24)};

  @media all and (max-width: 767px) {
    margin-top: 4px;
    margin-bottom: -20px;

    button,
    a {
      margin-bottom: 20px;
    }
  }
`
