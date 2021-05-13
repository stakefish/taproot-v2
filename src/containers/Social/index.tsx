import React from "react"

import { POWERED_BY, SOCIAL_LINKS } from "../../helpers/const"
import Dropdown from "../../components/Dropdown"

import * as S from "./styled"

const Social: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Copy>
        {"Powered by "}
        {POWERED_BY.map((item, index) => (
          <span key={index}>
            {index ? " & " : null}
            <a key={index} href={item.href} target="_blank" rel="noreferrer">
              {item.title}
            </a>
          </span>
        ))}
      </S.Copy>
      <S.List>
        {SOCIAL_LINKS.map((item, index) => {
          if (item.type === "dropdown") {
            return <Dropdown key={index} title={item.icon} data={item.data} />
          }
          return (
            <S.SocialLink key={index} href={item.href} target="_blank" rel="noreferrer" title={item.title}>
              {item.icon}
            </S.SocialLink>
          )
        })}
      </S.List>
    </S.Wrapper>
  )
}

export default Social
