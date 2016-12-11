import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import s from './Tasks.css'
import CSSModules from 'react-css-modules'
import { observer } from 'mobx-react'
import NotificationsIcon from 'material-ui/svg-icons/social/notifications-none'

@CSSModules(s)
@observer
class Tasks extends Component {
  renderTask (sub) {
    console.log(sub)
    const { comment, first_name, last_name, status } = sub
    return (
      <div>{first_name} { last_name }</div>
    )
  }
  render () {
    console.log(this.props.submissions)
    const submissions = this.props.submissions.map(sub => this.renderTask(sub))
    return (
      <Paper styleName='container'>
          {submissions.length > 0 && (
            submissions
          )}
          {submissions.length === 0 && (
            <div styleName='no-tasks'>
              <div styleName='no-tasks__text'>
                <div>Здесь будут показываться решения<br/>и попытки ваших учеников</div>
                <NotificationsIcon styleName='notification-icon'/>
              </div>
            </div>
          )}
      </Paper>
    )
  }
}

export default Tasks
