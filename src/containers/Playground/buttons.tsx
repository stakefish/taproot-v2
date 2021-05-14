import React from "react"
import { Row, Col } from "react-styled-flexboxgrid"

import { TWITTER_SHARING_URL } from "../../helpers/const"

import Button, { ButtonColor } from "../../components/Button"
import { IconShare, IconSave } from "../../icons"

import * as S from "./styled"

const Buttons: React.FC = () => {
  return (
    <S.Buttons>
      <Row middle="sm" between="sm">
        <Col xs={12} sm={4}>
          <Button $color={ButtonColor.Bordered} $block>
            Add mask
          </Button>
        </Col>
        <Col xs={12} sm={8}>
          <Row>
            <Col xs={12} sm={7}>
              <Button $color={ButtonColor.Primary} $block>
                <IconSave />
                Download
              </Button>
            </Col>
            <Col xs={12} sm={5}>
              <Button
                $block
                $color={ButtonColor.Primary}
                as="a"
                target="_blank"
                rel="noreferrer"
                href={TWITTER_SHARING_URL}
              >
                <IconShare />
                Share
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </S.Buttons>
  )
}

export default Buttons
