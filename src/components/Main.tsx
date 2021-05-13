import styled from "styled-components"
import { rem } from "polished"

const Main = styled.main`
  min-height: 100vh;
  padding-top: ${rem(48)};

  @media all and (max-width: 580px) {
    position: relative;
  }

  @media all and (min-width: 581px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
  }
`

export default Main
