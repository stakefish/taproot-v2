import React, { useContext, useState } from "react"
import { Grid } from "react-styled-flexboxgrid"

import Info from "../Info"
import Sandbox from "../Sandbox"
import Controller from "../Controller"

import Card from "../../components/Card"
import Section from "../../components/Section"
import ManagerContext from "../../core/Manager"

import * as S from "./styled"

const Playground: React.FC = () => {
  const [file, setFile] = useState<string | undefined>()

  const { rotation, scale, setRotation, setScale } = useContext(ManagerContext)

  const onDrop = ([file]: File[]) => {
    setFile(URL.createObjectURL(file))
  }

  return (
    <Section>
      <Grid>
        <S.Wrapper>
          <Card>
            <Info onDrop={onDrop} />
            <Controller rotation={rotation} scale={scale} onRotation={setRotation} onScale={setScale} />
          </Card>
          <Card>
            <Sandbox file={file} />
          </Card>
        </S.Wrapper>
      </Grid>
    </Section>
  )
}

export default Playground
