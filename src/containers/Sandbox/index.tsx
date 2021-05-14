import React, { useCallback, useContext, useEffect, useState } from "react"
import { Stage, Layer } from "react-konva"
import { Vector2d } from "konva/types/types"
import { KonvaEventObject } from "konva/types/Node"

import {
  MASK_HEIGHT,
  MASK_WIDTH,
  RENDER_TIME,
  SCALE_FACTOR,
  STAGE_HEIGHT,
  STAGE_WIDTH,
  DEFAULT_IMAGE,
  DEFAULT_COORDS,
  MASK,
} from "../../helpers/const"

import { detectFace, loadModels } from "../../helpers/utils"

import Figure from "../../components/Figure"
import ManagerContext from "../../core/Manager"

import * as S from "./styled"

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

const Sandbox: React.FC<Props> = ({ file, stageRef }: Props) => {
  const { rotation, scale, setRotation } = useContext(ManagerContext)

  const [coordinates, setCoordinates] = useState<Vector2d>(DEFAULT_COORDS)
  const [cursor, setCursor] = useState<Cursor>(Cursor.Default)

  const onDetect = useCallback(async () => {
    try {
      const data = await detectFace(stageRef?.current?.content)
      setRotation(data.rotation)
      setCoordinates(data.coordinates)
    } catch (error) {}
  }, [stageRef, setRotation])

  const onDragMove = ({ target }: KonvaEventObject<DragEvent | TouchEvent>) => {
    setCoordinates({
      x: target.x(),
      y: target.y(),
    })
  }

  useEffect(() => {
    loadModels()
  }, [])

  useEffect(() => {
    if (file) {
      setTimeout(onDetect, RENDER_TIME)
    }
  }, [file, onDetect])

  return (
    <S.Wrapper preview={file} cursor={cursor}>
      <Stage width={STAGE_WIDTH} height={STAGE_HEIGHT} ref={stageRef} className="stage">
        <Layer>
          <Figure fit src={file || DEFAULT_IMAGE} />
          <Figure
            draggable
            scale={scale}
            rotation={rotation}
            src={MASK}
            x={coordinates?.x}
            y={coordinates?.y}
            offsetX={MASK_WIDTH / SCALE_FACTOR}
            offsetY={MASK_HEIGHT / SCALE_FACTOR}
            onMouseEnter={() => setCursor(Cursor.Grab)}
            onMouseLeave={() => setCursor(Cursor.Default)}
            onMouseDown={() => setCursor(Cursor.Grabbing)}
            onMouseUp={() => setCursor(Cursor.Default)}
            onDragMove={onDragMove}
          />
        </Layer>
      </Stage>
    </S.Wrapper>
  )
}

export default Sandbox
