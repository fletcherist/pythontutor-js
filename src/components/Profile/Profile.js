import React, { Component } from 'react'
import { observable, computed, action } from 'mobx'
import CSSModules from 'react-css-modules'
import { observer } from 'mobx-react'
import s from './Profile.css'
import { timeSince } from 'util/timeSince'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'

import Lessons from 'components/Lessons'
import Loading from 'components/Loading'
import Counters from 'components/Counters'
import Achievements from 'components/Achievements'
import LatestTries from 'components/LatestTries'
import Avatar from 'components/Avatar'

@CSSModules(s)
@observer class Profile extends Component {
  constructor (props) {
    super(props)
    this.props.store.fetchData()
  }

  renderOnline () {
    const { lastLogin } = this.props.store.user
    if (!lastLogin) return null
    return (
      <div styleName='lastlogin'>
        был в сети { timeSince(new Date(lastLogin)) } назад
      </div>
    )
  }

  renderUserinfo () {
    if (!this.props.store.fetched) return <Loading />
    const { username, alias, lessons, lastLogin } = this.props.store.user
    return (
      <div styleName='userinfo'>
        <div styleName='username__wrapper'>
          <div styleName='username'>{username}</div>
          {/* <div styleName='online' /> */}
        </div>
        {/* <div styleName='alias'>@{alias}</div> */}
        {this.renderOnline()}
      </div>
    )
  }

  renderLessons () {
    const { lessons } = this.user
    if (!lessons || lessons.length === 0) {
      return null
    }
    return (<Lessons lessons={lessons}/>)
  }

  render () {
    const { allSubmissions, progress } = this.props.store.stats
    const { username, alias, lessons, lastLogin, achievements, lastSolved } = this.props.store.user
    return (
      <div styleName='container'>
        <div styleName='container__left'>
          <Paper styleName='holder'>
            <div styleName='wrapper'>
              <Avatar username={username} />
              {this.renderUserinfo()}
            </div>
            <Counters {...this.props.store.stats} />
          </Paper>
          <Achievements
            achievements={achievements}
          />
        </div>
        <div styleName='container__right'>
          <LatestTries lastSolved={lastSolved} />
          <Lessons lessons={lessons}/>
        </div>
      </div>
    )
  }
}

export default Profile
