import React from 'react'
import styles from './Header.styl'
import CSSModules from 'react-css-modules'

function HeaderComponent(props) {
  return(
    <div styleName='header'>
      <h1>vamboo</h1>
      <p>A visual programming language to create GUI application in functional and reactive way</p>
      <a href='/app.html'>DEMO</a>
    </div>
  )
}

export default CSSModules(HeaderComponent, styles)
