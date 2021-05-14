import React from "react"
import { Grid, Row, Col } from "react-styled-flexboxgrid"
import { FluidGrid } from "../../core/GlobalStyles"

import { DISCLAIMER } from "../../helpers/const"
import Social from "../Social"

import * as S from "./styled"

const Footer: React.FC = () => {
  return (
    <S.Wrapper>
      <Grid as={FluidGrid} fluid>
        <Row>
          <Col xs={12}>
            <S.Disclaimer>{DISCLAIMER}</S.Disclaimer>
          </Col>
          <Col xs={12}>
            <Social />
          </Col>
        </Row>
      </Grid>
    </S.Wrapper>
  )
}

export default Footer
