import React, { Component, PropTypes } from 'react'
import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader'
import s from './Achievements.css'
import CSSModules from 'react-css-modules'
import {GridList, GridTile} from 'material-ui/GridList'
import { __pythontutorUrl } from '../../api/api'
import avoidWordSolve from '../../util/avoidWordSolve'
import ShareIcon from 'material-ui/svg-icons/social/share'
import IconButton from 'material-ui/IconButton'
import LockOutline from 'material-ui/svg-icons/action/lock-outline'

import cx from 'classnames'

import { action } from 'mobx'
import { observer } from 'mobx-react'

import { AchievementsTitle } from 'components/Titles'

@CSSModules(s)
@observer
class Achievements extends Component {
  renderAchievement (achievement) {
    const { description, img, name, achieved } = achievement

    const formattedDescription = avoidWordSolve(description)

    const opacity = {
      opacity: !achieved ? 0.3 : 1
    }
    return (
      <div style={opacity} styleName='achieve'>
        <img 
          styleName='achieve__img'
          src={__pythontutorUrl + img}
          height='60' width='60' />
        <span styleName='achieve__text'>{description}</span>
      </div>
    )
  }

  renderAchievements () {
    const { achievements } = this.props
    if (!achievements || achievements.length === 0) {
      return null
    }
    return (
      <div styleName='achieve__img-container'>
        {achievements.map(achievement => this.renderAchievement(achievement))}
      </div>
    )
  }

  renderNoAchievements () {
    const { achievements } = this.props
    if (achievements && achievements.length !== 0) {
      return null
    }

    return (
      <div styleName='no-achievements'>
        <LockOutline color='black' />
        <div styleName='no-achievements__text'>нет достижений</div>
      </div>
    )
  }

  @action laodLockedAchievements () {
    
  }
  loadMore () {
    return (
      <div styleName='load-more'>Показать ещё</div>
    )
  }

  render () {
    const { achievements } = this.props
    console.log(achievements)

    // Todo: move into mobx state manager
    let realAchievements = 0
    achievements.forEach(achievement => {
      if (achievement.achieved) realAchievements++
    })

    return (
      <Paper styleName='container'>
        <div styleName='achievements__title-holder'>
          <AchievementsTitle count={realAchievements.toString()}/>
        </div>
        <div styleName='wrapper'>
          {this.renderAchievements()}
          {this.renderNoAchievements()}
          {
            //this.loadMore()
          }
        </div>
      </Paper>
    )
  }
}

Achievements.propTypes = {
  achievements: PropTypes.array
}

export default Achievements
