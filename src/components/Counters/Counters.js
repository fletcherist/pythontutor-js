import React, { Component } from 'react'
import s from './Counters.css'
import CSSModules from 'react-css-modules'
import Divider from 'material-ui/Divider'

@CSSModules(s)
class Counters extends Component {
  render () {
    const { allSubmissions, solved, progress } = this.props
    return (
      <div styleName='counters__container'>
        <Divider />
        <div styleName='counters'>
          <div styleName='counter--first'>
            <div styleName='counter__title'>посылок</div>
            <div styleName='counter__value'>{allSubmissions}</div>
          </div>
          <div styleName='counter'>
            <div styleName='counter__title'>решено</div>
            <div styleName='counter__value'>{solved}</div>
          </div>
          <div styleName='counter--last'>
            <div styleName='counter__title'>пройдено</div>
            <div styleName='counter__value'>{progress}%</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Counters
