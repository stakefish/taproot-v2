import React from "react"
import { Vector2d } from "konva/types/types"
import { SliderInput, SliderTrack, SliderRange, SliderHandle, SliderMarker } from "@reach/slider"
import { Row, Col } from "react-styled-flexboxgrid"

import { ElementKind } from "../../helpers/types"

import { IconSize, IconAngle, IconMaskA, IconMaskB } from "../../icons"

import {
  CONTROLLER_SIZE_MIN,
  CONTROLLER_SIZE_MAX,
  CONTROLLER_SIZE_STEP,
  CONTROLLER_ROTATION_MAX,
  CONTROLLER_ROTATION_MIN,
} from "../../helpers/const"

import * as S from "./styled"

interface Props {
  kind: ElementKind
  rotation: number
  scale: Vector2d
  onScale: (size: Vector2d) => void
  onRotation: (angle: number) => void
  onKind: (nextKind: ElementKind) => void
}

const Controller: React.FC<Props> = ({ kind, rotation, scale, onKind, onRotation, onScale }: Props) => {
  return (
    <S.Wrapper>
      <S.Switcher>
        <S.SwitcherButton $active={kind === ElementKind.Mask} onClick={() => onKind(ElementKind.Mask)}>
          <IconMaskA />
          Mask
        </S.SwitcherButton>
        <S.SwitcherButton $active={kind === ElementKind.Square} onClick={() => onKind(ElementKind.Square)}>
          <IconMaskB />
          Block
        </S.SwitcherButton>
      </S.Switcher>
      <S.Inner>
        <Row>
          <Col xs={12} sm={6}>
            <S.Group as={Col}>
              <S.SliderInfo>
                <h4>
                  <IconSize /> Size
                </h4>
                {scale ? <span>{(scale.x * 100).toFixed(0)}%</span> : null}
              </S.SliderInfo>

              <SliderInput
                value={scale?.x}
                min={CONTROLLER_SIZE_MIN}
                max={CONTROLLER_SIZE_MAX}
                step={CONTROLLER_SIZE_STEP}
                onChange={(nextScale) => onScale({ x: nextScale, y: nextScale })}
              >
                <SliderTrack>
                  <SliderRange />
                  <SliderHandle />
                  <SliderMarker value={scale?.x} />
                </SliderTrack>
              </SliderInput>
            </S.Group>
          </Col>
          <Col xs={12} sm={6}>
            <S.Group>
              <S.SliderInfo>
                <h4>
                  <IconAngle /> Angle
                </h4>
                {rotation ? <span>{rotation.toFixed(0)}??</span> : null}
              </S.SliderInfo>

              <SliderInput
                value={rotation}
                min={CONTROLLER_ROTATION_MIN}
                max={CONTROLLER_ROTATION_MAX}
                onChange={onRotation}
              >
                <SliderTrack>
                  <SliderRange />
                  <SliderHandle />
                  <SliderMarker value={rotation} />
                </SliderTrack>
              </SliderInput>
            </S.Group>
          </Col>
        </Row>
      </S.Inner>
    </S.Wrapper>
  )
}

export default Controller
