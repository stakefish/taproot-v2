import React, { useCallback, useContext, useEffect, useState } from "react"
import { Stage, Layer } from "react-konva"
import { isEmpty } from "ramda"

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
  MASK,
  CONTROLLER_SIZE,
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
  const [ratio, setRatio] = useState<number>(1)
  const [cursor, setCursor] = useState<Cursor>(Cursor.Default)

  const [stageSize, setStageSize] = useState<{ width: number; height: number }>({
    width: STAGE_WIDTH,
    height: STAGE_HEIGHT,
  })

  const { figures, rotation, scale, coordinates, onAdd, onSelect } = useContext(ManagerContext)

  const onDetect = useCallback(async () => {
    try {
      const data = await detectFace(stageRef?.current?.content, stageSize)
      onAdd(ElementKind.Mask, data)
    } catch (error) {}
    // eslint-disable-next-line
  }, [stageRef, stageSize])

  useEffect(() => {
    loadModels()
  }, [])

  useEffect(() => {
    if (file) {
      setTimeout(onDetect, RENDER_TIME)
    }
  }, [file, onDetect])

  const defaultX = 220
  const defaultY = 230

  useEffect(() => {
    const resize = () => {
      if (stageRef?.current) {
        const containerWidth = stageRef.current.content.offsetWidth
        const scale = containerWidth / STAGE_WIDTH
        const width = STAGE_WIDTH * scale
        const height = STAGE_HEIGHT * scale

        stageRef.current.width(width)
        stageRef.current.height(height)
        setRatio(scale)
        setStageSize({ width, height })
        stageRef.current.draw()
      }
    }

    resize()
  }, [stageRef])

  return (
    <S.Wrapper preview={file} cursor={cursor}>
      <Stage width={STAGE_WIDTH} height={STAGE_HEIGHT} ref={stageRef} className="stage">
        <Layer>
          <Figure fit src={file || DEFAULT_IMAGE} stageSize={stageSize} />

          {isEmpty(figures) ? (
            <Figure
              draggable
              src={MASK}
              x={defaultX * ratio}
              y={defaultY * ratio}
              offsetX={MASK_WIDTH / SCALE_FACTOR}
              offsetY={MASK_HEIGHT / SCALE_FACTOR}
              scale={{ x: CONTROLLER_SIZE, y: CONTROLLER_SIZE }}
              onMouseEnter={() => setCursor(Cursor.Grab)}
              onMouseLeave={() => setCursor(Cursor.Default)}
              onMouseDown={() => setCursor(Cursor.Grabbing)}
              onMouseUp={() => setCursor(Cursor.Default)}
            />
          ) : null}

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
                onMouseEnter={() => setCursor(Cursor.Grab)}
                onMouseLeave={() => setCursor(Cursor.Default)}
                onMouseDown={() => {
                  onSelect(index)
                  setCursor(Cursor.Grabbing)
                }}
                onMouseUp={() => setCursor(Cursor.Default)}
              />
            )
          })}
        </Layer>
      </Stage>
    </S.Wrapper>
  )
}

export default Sandbox
