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
`

export default Card
