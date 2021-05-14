import styled from "styled-components"

/**
 * Types
 */
export interface CardProps {}

const Card = styled.div<CardProps>`
  height: 100%;
  position: relative;

  &:first-child {
    height: auto;
  }

  @media all and (max-width: 480px) {
    min-height: 0;
    height: auto;
  }
`

export default Card
