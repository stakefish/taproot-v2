import React, { useContext, useRef, useState } from "react"
import { Grid, Row, Col } from "react-styled-flexboxgrid"

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

  const { rotation, scale, setRotation, setScale } = useContext(ManagerContext)

  const onDrop = ([file]: File[]) => {
    setFile(URL.createObjectURL(file))
  }

  const onSave = () => {
    if (stageRef?.current) {
      download(stageRef.current.toDataURL())
    }
  }

  return (
    <Section>
      <Grid as={FluidGrid} fluid>
        <S.Outer>
          <S.Wrapper as={Row} middle="md">
            <Card as={Col} xs={12} md={7}>
              <S.InnerCard>
                <Info onDrop={onDrop} showSettings={file} />
                {file && (
                  <>
                    <Controller rotation={rotation} scale={scale} onRotation={setRotation} onScale={setScale} />
                    <Buttons onSave={onSave} />
                  </>
                )}
              </S.InnerCard>
            </Card>
            <Card as={Col} xs={12} md={5}>
              <Sandbox file={file} stageRef={stageRef} />
            </Card>
          </S.Wrapper>
        </S.Outer>
      </Grid>
    </Section>
  )
}

export default Playground
