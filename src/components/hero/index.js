import React from 'react'
import { Row, Col, Button, Icon } from 'antd'
import styled from 'styled-components'
import I18N from '../../I18N'

import topBG from '../../../images/top_background.png'
import { breakPoint } from '../../constants/variable'
import images from '../../constants/images'
import * as colors from '../../constants/color'

// import './style.less'

export default class extends React.Component {
  state = {
  }
  render () {
    return (
      <Container><ContainerInner className="container-inner">
        <Row>
          <Col xs={24} sm={14}>
            <SubTitle>{I18N.get('hero.welcome')}</SubTitle>
            <Title>{I18N.get('hero.title')}</Title>
            <StyledButton shape="round" href="#footer">
              <ButtonInner>
                <StyledIcon src={images.logo_img} alt="icon" />
                {I18N.get('hero.btnText')}
              </ButtonInner>
            </StyledButton>
            <Help>{I18N.get('hero.help')}</Help>
          </Col>
          <Col xs={24} sm={10}>
            <WalletImg src={images.hero_phone_image_img} alt="wallet image" />
          </Col>
        </Row>
        <BottomRow>
          <LearnMore href="#intro">
            <div>{I18N.get('hero.learnMore')}</div>
            <div><DownArrow src={images.down_arrow_img} alt="down arrow" /></div>
          </LearnMore>
        </BottomRow>
      </ContainerInner></Container>
    )
  }
}

const Container = styled.div`
  position: relative;
  padding-top: 100px;
  text-align: left;
  background: url(${topBG}) no-repeat;
  background-size: cover;
  background-position-x: right;
  background-position-y: 100%;
  color: white;
  @media only screen and (max-width: ${breakPoint.mobile}) {
    overflow: hidden;
  }
  `
const ContainerInner = styled.div`
  padding-bottom: 70px;
  @media only screen and (max-width: ${breakPoint.mobile}) {
  }
`
const BottomRow = styled(Row)`
  height: 35px;
  position: initial;
`
const SubTitle = styled.div`
  font-size: 13px;
  font-weight: bold;
  margin-top: 60px;
`
const Title = styled.h1`
  font-size: 42px;
  font-weight: bolder;
  color: white;
  margin-top: 15px;
  @media only screen and (max-width: ${breakPoint.mobile}) {
    font-size: 40px;
  }
`
const StyledButton = styled(Button)`
  color: ${colors.text.theme};
  padding: 0 30px;
  font-size: 14px;
  :hover {
    color: ${colors.text.theme};
  }
`
const ButtonInner = styled.div`
  display: flex;
  align-items: center;
`
const StyledIcon = styled.img`
  height: 14px;
  margin-right: 15px;
`

const Help = styled.div`
  margin-top: 25px;
  font-weight: lighter;
  font-size: 13px;
`
const WalletImg = styled.img`

`
const DownArrow = styled.img`
  height: 20px;
`
const LearnMore = styled.a`
  text-align: center;
  font-size: 12px;
  position: absolute;
  font-size: 12px;
  right: 26%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  :hover {
    color: inherit;
  }
`
