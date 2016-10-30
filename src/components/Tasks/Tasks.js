import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import s from './Tasks.css'
import CSSModules from 'react-css-modules'
import { observer } from 'mobx-react'
import NotificationsIcon from 'material-ui/svg-icons/social/notifications-none'

@CSSModules(s)
@observer
class Tasks extends Component {
  render () {
    return (
      <Paper styleName='container'>
        <div styleName='no-tasks'>
          <div styleName='no-tasks__text'>
            <div>Здесь будут показываться решения<br/>и попытки ваших учеников</div>
            <NotificationsIcon styleName='notification-icon'/>
          </div>
        </div>
      </Paper>
    )
  }
}

export default Tasks
