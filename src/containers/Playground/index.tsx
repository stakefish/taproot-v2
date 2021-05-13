import React, { useContext, useState } from "react"
import { Grid, Row, Col } from "react-styled-flexboxgrid"

import Info from "../Info"
import Sandbox from "../Sandbox"
import Controller from "../Controller"

import Card from "../../components/Card"
import Section from "../../components/Section"
import ManagerContext from "../../core/Manager"
import { FluidGrid } from "../../core/GlobalStyles"

import * as S from "./styled"

const Playground: React.FC = () => {
  const [file, setFile] = useState<string | undefined>()

  const { rotation, scale, setRotation, setScale } = useContext(ManagerContext)

  const onDrop = ([file]: File[]) => {
    setFile(URL.createObjectURL(file))
  }

  return (
    <Section>
      <Grid as={FluidGrid} fluid>
        <S.Outer>
          <S.Wrapper as={Row} middle="md">
            <Card as={Col} xs={12} md={7}>
              <Info onDrop={onDrop} showSettings={file} />
              {file && <Controller rotation={rotation} scale={scale} onRotation={setRotation} onScale={setScale} />}
            </Card>
            <Card as={Col} xs={12} md={5}>
              <Sandbox file={file} />
            </Card>
          </S.Wrapper>
        </S.Outer>
      </Grid>
    </Section>
  )
}

export default Playground
