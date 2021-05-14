import React, { useContext, useState } from "react"
import { Grid, Row, Col } from "react-styled-flexboxgrid"

import Info from "../Info"
import Sandbox from "../Sandbox"
import Controller from "../Controller"

import { TWITTER_SHARING_URL } from "../../helpers/const"

import Card from "../../components/Card"
import Button, { ButtonColor } from "../../components/Button"
import Section from "../../components/Section"
import ManagerContext from "../../core/Manager"
import { FluidGrid } from "../../core/GlobalStyles"
import { IconShare, IconSave } from "../../icons"

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
              <S.InnerCard>
                <Info onDrop={onDrop} showSettings={file} />
                {file && (
                  <>
                    <Controller rotation={rotation} scale={scale} onRotation={setRotation} onScale={setScale} />
                    <S.Buttons>
                      <Row middle="sm" between="sm">
                        <Col xs={12} sm={4}>
                          <Button $color={ButtonColor.Bordered} $block>
                            Add mask
                          </Button>
                        </Col>
                        <Col xs={12} sm={8}>
                          <Row>
                            <Col xs={12} sm={7}>
                              <Button $color={ButtonColor.Primary} $block>
                                <IconSave />
                                Download
                              </Button>
                            </Col>
                            <Col xs={12} sm={5}>
                              <Button
                                $block
                                $color={ButtonColor.Primary}
                                as="a"
                                target="_blank"
                                rel="noreferrer"
                                href={TWITTER_SHARING_URL}
                              >
                                <IconShare />
                                Share
                              </Button>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </S.Buttons>
                  </>
                )}
              </S.InnerCard>
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
