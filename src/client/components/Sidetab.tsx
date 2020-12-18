import React, { PureComponent } from 'react'

// @ts-ignore
import logo from '../images/logo.png'

interface SidetabProps {
  appId?: string
  serverName: string
}

const logoStyle = {
  marginTop: '26px',
  marginLeft: '26px',
  marginBottom: '10px',
  height: '28px',
  width: '28px'
}

const titleText = {
  marginLeft: '26px',
  color: 'white',
  fontSize: '24px'
}

const sidebar = {
  display: 'table-cell' as 'table-cell',
  background: 'linear-gradient(90deg, #0C446A 0%, #0D2145 100%)',
  width: '200px'
}

class Sidetab extends PureComponent<SidetabProps> {
  render(): JSX.Element {
    return (
      <div style={sidebar}>
        <img style={logoStyle} src={logo} alt="Edge Logo" />
        <div style={titleText}>Edge</div>
        <div style={titleText}>{this.props.serverName}</div>'
        {this.props.children}
      </div>
    )
  }
}
export default Sidetab
