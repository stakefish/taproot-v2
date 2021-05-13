import React, { useState } from "react"
import { Vector2d } from "konva/types/types"

import { CONTROLLER_ROTATION, CONTROLLER_SIZE } from "../helpers/const"

interface Props {
  children: JSX.Element | JSX.Element[]
}

interface ContextType {
  rotation: number
  scale: Vector2d
  setRotation: (rotation: number) => void
  setScale: (scale: Vector2d) => void
}

const ManagerContext: React.Context<ContextType> = React.createContext({} as ContextType)

export const ManagerProvider: React.FC<Props> = ({ children }: Props) => {
  const [rotation, setRotation] = useState<number>(CONTROLLER_ROTATION)
  const [scale, setScale] = useState<Vector2d>({ x: CONTROLLER_SIZE, y: CONTROLLER_SIZE })

  return (
    <ManagerContext.Provider
      value={{
        scale,
        rotation,
        setScale,
        setRotation,
      }}
    >
      {children}
    </ManagerContext.Provider>
  )
}

export default ManagerContext
