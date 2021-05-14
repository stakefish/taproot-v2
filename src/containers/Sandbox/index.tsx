import React, { useCallback, useContext, useEffect } from "react"
import { Stage, Layer } from "react-konva"

import {
  MASK_HEIGHT,
  MASK_WIDTH,
  RENDER_TIME,
  SCALE_FACTOR,
  STAGE_HEIGHT,
  STAGE_WIDTH,
  DEFAULT_IMAGE,
  SQUARE_WIDTH,
  SQUARE_HEIGHT,
} from "../../helpers/const"

import { detectFace, loadModels } from "../../helpers/utils"

import Figure from "../../components/Figure"
import ManagerContext from "../../core/Manager"

import * as S from "./styled"
import { ElementKind } from "../../helpers/types"

interface Props {
  file?: string
  stageRef: any
}

export enum Cursor {
  Default,
  Grab,
  Grabbing,
}

export const CURSORS = new Map<Cursor, "initial" | "grab" | "grabbing">([
  [Cursor.Default, "initial"],
  [Cursor.Grab, "grab"],
  [Cursor.Grabbing, "grabbing"],
])

const SIZES = new Map<ElementKind, { width: number; height: number }>([
  [ElementKind.Mask, { width: MASK_WIDTH, height: MASK_HEIGHT }],
  [ElementKind.Square, { width: SQUARE_WIDTH, height: SQUARE_HEIGHT }],
])

const Sandbox: React.FC<Props> = ({ file, stageRef }: Props) => {
  const { figures, rotation, scale, coordinates, onAdd, onDrag, onSelect } = useContext(ManagerContext)

  const onDetect = useCallback(async () => {
    try {
      const data = await detectFace(stageRef?.current?.content)
      onAdd(ElementKind.Mask, data)
    } catch (error) {}
  }, [stageRef])

  useEffect(() => {
    loadModels()
  }, [])

  useEffect(() => {
    if (file) {
      setTimeout(onDetect, RENDER_TIME)
    }
  }, [file, onDetect])

  return (
    <S.Wrapper preview={file} cursor={Cursor.Default}>
      <Stage width={STAGE_WIDTH} height={STAGE_HEIGHT} ref={stageRef} className="stage">
        <Layer>
          <Figure fit src={file || DEFAULT_IMAGE} />
          {figures?.map((figure, index) => {
            // @ts-expect-error
            const { width, height } = SIZES?.get(figure.kind)

            return (
              <Figure
                draggable
                key={index}
                src={figure.src}
                scale={scale[index]}
                rotation={rotation[index]}
                x={coordinates[index]?.x}
                y={coordinates[index]?.y}
                offsetX={width / SCALE_FACTOR}
                offsetY={height / SCALE_FACTOR}
                onDragMove={onDrag}
                onMouseDown={() => onSelect(index)}
              />
            )
          })}
        </Layer>
      </Stage>
    </S.Wrapper>
  )
}

export default Sandbox
