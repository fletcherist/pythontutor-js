import React, { Component }  from 'react'
import s from './Loading.css'
import CSSModules from 'react-css-modules'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

@CSSModules(s)
@observer class Loading extends Component {
  constructor () {
    super()
    this.dots = ['.', '..', '...']
  }
  @observable selectedDot = this.dots[0]
  @observable counter = 1
  componentDidMount () {
    setInterval(() => {
      if (this.counter > 3) this.counter = 0
      this.selectedDot = this.dots[this.counter]
      this.counter++
    }, 200)
  }
  render () {
    return <div styleName='loading'>{this.selectedDot}</div>
  }
}

export default Loading
