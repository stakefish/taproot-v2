import styled from "styled-components"
import { rem } from "polished"

interface LinkProps {
  href?: string
  target?: string
}

export const Wrapper = styled.div`
  margin-top: ${rem(30)};
  color: ${(props) => props.theme.colors.gray};
  text-align: center;

  a {
    color: inherit;

    &:hover {
      color: ${(props) => props.theme.colors.white};
    }
  }

  @media all and (max-width: 767px) {
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const SocialLink = styled.a<LinkProps>`
  margin: 0 ${rem(1)};

  &:first-child {
    margin-left: 0 !important;
  }

  @media all and (max-width: 767px) {
    margin: 0 8px;
  }
`

export const Copy = styled.div`
  color: ${(props) => props.theme.colors.black};
  margin-bottom: ${rem(16)};
  font-weight: ${(props) => props.theme.fontWeight.semibold};

  @media all and (max-width: 767px) {
    margin-bottom: 0;
    text-align: left;
  }
`

export const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: ${rem(26)};
  }
`
