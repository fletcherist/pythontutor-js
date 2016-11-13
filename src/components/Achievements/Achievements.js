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

import { AchievementsTitle } from 'components/Titles'
console.log(AchievementsTitle)

@CSSModules(s)
class Achievements extends Component {
  renderAchievement (achievement) {
    const { description, img, name } = achievement

    const formattedDescription = avoidWordSolve(description)
    return (
      <img 
        styleName='achieve__img'
        src={__pythontutorUrl + img}
        height='60' width='60' />
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
        <LockOutline color='white' />
        <div styleName='no-achievements__text'>нет достижений</div>
      </div>
    )
  }

  render () {
    const { achievements } = this.props

    return (
      <Paper styleName='container'>
        <div styleName='achievements__title-holder'>
          <AchievementsTitle count={achievements.length}/>
        </div>
        <div styleName='wrapper'>
          {this.renderAchievements()}
          {this.renderNoAchievements()}
        </div>
      </Paper>
    )
  }
}

Achievements.propTypes = {
  achievements: PropTypes.array
}

export default Achievements
