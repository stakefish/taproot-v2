import styled from "styled-components"
import { FluidGrid } from "../core/GlobalStyles"

/**
 * Types
 */
export interface SectionProps {}

const Section = styled.section<SectionProps>`
  position: relative;
  width: 100%;
  flex: 1 1 0%;

  @media all and (min-width: 1025px) {
    ${FluidGrid} {
      height: 100%;
    }
  }
`

export default Section
