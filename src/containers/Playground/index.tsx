import React, { useContext, useRef, useState } from "react"
import { Grid, Row, Col } from "react-styled-flexboxgrid"
import { useMediaQuery } from "react-responsive"

import { download } from "../../helpers/utils"

import Info from "../Info"
import Sandbox from "../Sandbox"
import Controller from "../Controller"
import Buttons from "./buttons"

import Card from "../../components/Card"
import Section from "../../components/Section"
import ManagerContext from "../../core/Manager"
import { FluidGrid } from "../../core/GlobalStyles"

import * as S from "./styled"

const Playground: React.FC = () => {
  const stageRef = useRef<any>(null)

  const [file, setFile] = useState<string | undefined>()

  const { kind, rotation, scale, activeRef, onRotation, onScale, onKind } = useContext(ManagerContext)

  const isMobile = useMediaQuery({ maxWidth: 1023 })

  const onDrop = ([file]: File[]) => {
    setFile(URL.createObjectURL(file))
  }

  const onSave = () => {
    if (stageRef?.current) {
      download(stageRef.current.toDataURL())
    }
  }

  const ControlsComponent = () => (
    <>
      <Controller
        kind={kind}
        rotation={rotation[activeRef]}
        scale={scale[activeRef]}
        onRotation={onRotation}
        onScale={onScale}
        onKind={onKind}
      />
      <Buttons onSave={onSave} />
    </>
  )

  return (
    <Section>
      <Grid as={FluidGrid} fluid>
        <S.Outer>
          <S.Wrapper as={Row} middle="md">
            <Card as={Col} xs={12} md={7}>
              <S.InnerCard>
                <Info onDrop={onDrop} showSettings={file} />
                {!isMobile && file ? <ControlsComponent /> : null}
              </S.InnerCard>
            </Card>
            <Card as={Col} xs={12} md={5}>
              <Sandbox file={file} stageRef={stageRef} />
            </Card>
            {isMobile && file ? <ControlsComponent /> : null}
          </S.Wrapper>
        </S.Outer>
      </Grid>
    </Section>
  )
}

export default Playground
