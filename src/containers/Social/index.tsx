import React from "react"

import Dropdown from "../../components/Dropdown"
import { IconTwitter, IconTelegram, IconInstagram, IconGithub } from "../../icons"

import * as S from "./styled"

const Social: React.FC = () => {
  return (
    <S.Wrapper>
      <S.List>
        <S.SocialLink href="https://t.me/stakefish" target="_blank" rel="noreferrer">
          <IconTelegram />
        </S.SocialLink>
        <S.SocialLink href="https://instagram.com/stakedotfish" target="_blank" rel="noreferrer">
          <IconInstagram />
        </S.SocialLink>
        <Dropdown
          title={<IconTwitter />}
          data={[
            { name: "f2pool", url: "https://twitter.com/f2pool_official" },
            { name: "stakefish", url: "https://twitter.com/stakefish" },
          ]}
        />
        <S.SocialLink href="https://github.com/stakefish/taproot-v2" target="_blank" rel="noreferrer">
          <IconGithub />
        </S.SocialLink>
      </S.List>
    </S.Wrapper>
  )
}

export default Social
