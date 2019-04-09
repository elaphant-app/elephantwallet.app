import React from 'react'
import styled from 'styled-components'
import { Button, Icon } from 'antd'

// import './style.less'

import I18N from '../../I18N'


export default class extends React.Component {
  render () {
    return (
      <Container>
        <Title>{I18N.get('footer.title')}</Title>
        <div>{I18N.get('footer.store.title')}</div>
        <List>
          <ListItem>
            <a href={I18N.get('footer.store.ios.storeLink')} target="_blank" rel="noopener noreferrer">
              <img src={I18N.get('footer.store.ios.storeImg')} className="spacer" alt="download url" />
            </a>
            <div>{I18N.get('footer.store.ios.help')}</div>
            <StyledButton shape="round" href={I18N.get('footer.store.ios.helpLink')} target="_blank">
              <StyledIcon type="apple" theme="filled" />
              {I18N.get('footer.store.ios.btnText')}
            </StyledButton>
          </ListItem>
          <ListItem>
            <a href={I18N.get('footer.store.android.storeLink')} target="_blank" rel="noopener noreferrer">
              <img src={I18N.get('footer.store.android.storeImg')} className="spacer" alt="download url" />
            </a>
            <div>{I18N.get('footer.store.android.help')}</div>
            <StyledButton shape="round" href={I18N.get('footer.store.android.helpLink')} target="_blank">
              <StyledIcon type="android" theme="filled" />
              {I18N.get('footer.store.android.btnText')}
            </StyledButton>
          </ListItem>
        </List>

        <div>{I18N.get('footer.qrCode.title')}</div>
        <List>
          <ListItem>
            <div className="tag">{I18N.get('footer.qrCode.ios.title')}</div>
            <img src={I18N.get('footer.qrCode.ios.url')} className="spacer" alt="wallet" />
          </ListItem>
          <ListItem>
            <div className="tag">{I18N.get('footer.qrCode.android.title')}</div>
            <img src={I18N.get('footer.qrCode.android.url')} className="spacer" alt="wallet" />
          </ListItem>
        </List>
      </Container>
    )
  }
}

const Container = styled.div`
`
const Title = styled.div`
  font-size: 32px;
`
const StyledButton = styled(Button)`
  color: #d14258;
`
const StyledIcon = styled(Icon)`
`
const List = styled.ul`
`
const ListItem = styled.li`
`
const Link = styled.div`
`
const Text = styled.div`
`