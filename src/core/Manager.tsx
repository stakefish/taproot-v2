import React, { useState } from "react"
import { update } from "ramda"
import { Vector2d } from "konva/types/types"
import { KonvaEventObject } from "konva/types/Node"

import { Element, ElementKind } from "../helpers/types"

import {
  ACTIVE_REF_DEFAULT,
  CONTROLLER_ROTATION,
  CONTROLLER_SIZE,
  MASK,
  SQUARE,
  SCALE_DEFAULT,
  DEFAULT_COORDS,
} from "../helpers/const"

interface Props {
  children: JSX.Element | JSX.Element[]
}

interface ContextType {
  kind: ElementKind
  figures: Element[]
  rotation: number[]
  scale: Vector2d[]
  activeRef: number
  coordinates: Vector2d[]
  onRotation: (nextRotation: number) => void
  onScale: (nextScale: Vector2d) => void
  onSelect: (nextActiveRef: number) => void
  onDrag: (event: KonvaEventObject<DragEvent | TouchEvent>) => void
  onAdd: (kind: ElementKind, meta?: any) => void
  onKind: (nextKind: ElementKind) => void
  clear: () => void
}

const MASKS = new Map<ElementKind, string>([
  [ElementKind.Mask, MASK],
  [ElementKind.Square, SQUARE],
])

const ManagerContext: React.Context<ContextType> = React.createContext({} as ContextType)

export const ManagerProvider: React.FC<Props> = ({ children }: Props) => {
  const [activeRef, setActiveRef] = useState<number>(ACTIVE_REF_DEFAULT)
  const [kind, setKind] = useState<ElementKind>(ElementKind.Mask)
  const [figures, setFigures] = useState<Element[]>([])
  const [coordinates, setCoordinates] = useState<Vector2d[]>([])
  const [rotation, setRotation] = useState<number[]>([CONTROLLER_ROTATION])
  const [scale, setScale] = useState<Vector2d[]>([{ x: CONTROLLER_SIZE, y: CONTROLLER_SIZE }])

  const onScale = (nextScale: Vector2d) => {
    setScale((scale) => update(activeRef, nextScale, scale))
  }

  const onRotation = (nextRotation: number) => {
    setRotation((rotation) => update(activeRef, nextRotation, rotation))
  }

  const onDrag = (event: KonvaEventObject<DragEvent | TouchEvent>) => {
    setCoordinates((coordinates) => update(activeRef, { x: event?.target?.x(), y: event?.target?.y() }, coordinates))
  }

  const onSelect = (nextActiveRef: number) => {
    setKind(figures[nextActiveRef].kind)
    setActiveRef(nextActiveRef)
  }

  const onKind = (nextKind: ElementKind) => {
    setKind(nextKind)
  }

  const onAdd = (kind: ElementKind, meta: { rotation: number; coordinates: Vector2d }) => {
    setFigures((figures) => [...figures, { kind, src: MASKS.get(kind) } as Element])
    setRotation((rotation) => [...rotation, meta?.rotation ?? CONTROLLER_ROTATION])
    setCoordinates((coordinates) => [...coordinates, meta?.coordinates ?? DEFAULT_COORDS])
    setScale((scale) => [...scale, { x: SCALE_DEFAULT, y: SCALE_DEFAULT }])
  }

  const clear = () => {
    setFigures([])
    setCoordinates([])
    setKind(ElementKind.Mask)
    setRotation([CONTROLLER_ROTATION])
    setScale([{ x: CONTROLLER_SIZE, y: CONTROLLER_SIZE }])
  }

  return (
    <ManagerContext.Provider
      value={{
        kind,
        scale,
        figures,
        rotation,
        coordinates,
        activeRef,
        onScale,
        onRotation,
        onSelect,
        onAdd,
        onDrag,
        onKind,
        clear,
      }}
    >
      {children}
    </ManagerContext.Provider>
  )
}

export default ManagerContext
