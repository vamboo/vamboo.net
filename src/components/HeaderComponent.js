import React from 'react'
import styles from './Header.styl'
import CSSModules from 'react-css-modules'

function HeaderComponent(props) {
  return(
    <div styleName='header'>
      <h1>vamboo</h1>
      <p>learn functional reactive programming</p>
    </div>
  )
}

export default CSSModules(HeaderComponent, styles)
