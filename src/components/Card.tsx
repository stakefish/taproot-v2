import styled from "styled-components"

/**
 * Types
 */
export interface CardProps {}

const Card = styled.div<CardProps>`
  height: 100%;
  position: relative;

  @media all and (max-width: 480px) {
    min-height: 0;
    height: auto;

    &:first-child {
      margin-bottom: 30px;

      @media all and (min-width: 481px) {
        height: 400px;
      }
    }
  }
`

export default Card
