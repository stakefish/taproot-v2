import React from "react"
import useImage from "use-image"
import { head } from "ramda"
import { Image } from "react-konva"
import { Vector2d } from "konva/types/types"

import { scaleFigure } from "../helpers/utils"
import { KonvaEventObject } from "konva/types/Node"

/**
 * Types
 */
interface Props {
  x?: number
  y?: number
  offsetX?: number
  offsetY?: number
  rotation?: number
  scale?: Vector2d
  src?: string
  fit?: boolean
  stageSize?: { width: number; height: number }
  draggable?: boolean
  onMouseEnter?: (event: KonvaEventObject<MouseEvent | TouchEvent>) => void
  onMouseLeave?: (event: KonvaEventObject<MouseEvent | TouchEvent>) => void
  onMouseDown?: (event: KonvaEventObject<MouseEvent | TouchEvent>) => void
  onMouseUp?: (event: KonvaEventObject<MouseEvent | TouchEvent>) => void
  onDragMove?: (event: KonvaEventObject<DragEvent | TouchEvent>) => void
}

const Figure: React.FC<Props> = ({
  fit,
  src,
  rotation,
  scale,
  draggable,
  x,
  y,
  offsetX,
  offsetY,
  stageSize,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
  onDragMove,
  ...rest
}: Props) => {
  const meta = useImage(src as string)
  const image = head(meta) as HTMLImageElement
  const config = fit ? scaleFigure(image, stageSize) : rest

  return (
    <Image
      x={x}
      y={y}
      offsetX={offsetX}
      offsetY={offsetY}
      image={image}
      draggable={draggable}
      scale={scale}
      rotation={rotation}
      onTouchStart={onMouseDown}
      onTouchEnd={onMouseLeave}
      onTouchMove={onDragMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onDragEnd={onDragMove}
      {...config}
    />
  )
}

export default Figure
