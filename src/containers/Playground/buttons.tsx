import React, { useContext } from "react"
import { Row, Col } from "react-styled-flexboxgrid"

import { TWITTER_SHARING_URL } from "../../helpers/const"

import Button, { ButtonColor } from "../../components/Button"
import { IconShare, IconSave } from "../../icons"

import * as S from "./styled"
import ManagerContext from "../../core/Manager"

interface Props {
  onSave: () => void
}

const Buttons: React.FC<Props> = ({ onSave }: Props) => {
  const { kind, onAdd, onRemove } = useContext(ManagerContext)

  const onClick = () => {
    onAdd(kind)
  }

  return (
    <S.Buttons>
      <Row middle="sm" between="sm">
        <Col xs={12} sm={3}>
          <Row>
            <Col xs={6}>
              <Button $color={ButtonColor.Bordered} $block onClick={onClick}>
                +
              </Button>
            </Col>
            <Col xs={6}>
              <Button $color={ButtonColor.Bordered} $block onClick={onRemove}>
                -
              </Button>
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={8}>
          <Row>
            <Col xs={6} sm={7}>
              <Button $color={ButtonColor.Primary} $block onClick={onSave}>
                <IconSave />
                Download
              </Button>
            </Col>
            <Col xs={6} sm={5}>
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
