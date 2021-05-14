import React, { useContext, useState } from "react"
import { Grid, Row, Col } from "react-styled-flexboxgrid"
import { useMediaQuery } from "react-responsive"

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
  const [file, setFile] = useState<string | undefined>()

  const { rotation, scale, setRotation, setScale } = useContext(ManagerContext)

  const isMobile = useMediaQuery({ maxWidth: 1023 })

  const onDrop = ([file]: File[]) => {
    setFile(URL.createObjectURL(file))
  }

  const SandboxComponent = () => <Sandbox file={file} />

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
                    {isMobile && <SandboxComponent />}
                    <Controller rotation={rotation} scale={scale} onRotation={setRotation} onScale={setScale} />
                    <Buttons />
                  </>
                )}
              </S.InnerCard>
            </Card>
            {!isMobile && (
              <Card as={Col} xs={12} md={5}>
                <SandboxComponent />
              </Card>
            )}
          </S.Wrapper>
        </S.Outer>
      </Grid>
    </Section>
  )
}

export default Playground
