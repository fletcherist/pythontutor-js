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

@CSSModules(s)
class Achievements extends Component {
  renderAchievement (achievement) {
    const { description, img, name } = achievement

    const formattedDescription = avoidWordSolve(description)
    return (
      <GridTile
        styleName='achievement'
        title={'решено:'}
        subtitle={formattedDescription}
        titlePosition='bottom'
        titleBackground='#a5cadb'
        containerElement='div'
        cols={0}>
        <div styleName='achieve__img-container'>
          <img 
            styleName='achieve__img'
            src={__pythontutorUrl + img}
            height='100' width='100' />
        </div>
      </GridTile>
    )
  }

  renderAchievements () {
    const { achievements } = this.props
    if (!achievements || achievements.length === 0) {
      return null
    }
    return (
      <GridList
        padding={6}>
        {achievements.map(achievement => this.renderAchievement(achievement))}
      </GridList>
    )
  }

  renderNoAchievements () {
    const { achievements } = this.props
    if (achievements && achievements.length !== 0) {
      return null
    }

    return (
      <div styleName='no-achievements'>пусто</div>
    )
  }

  render () {
    const { achievements } = this.props

    return (
      <Paper styleName='container'>
        <Subheader styleName='subheader'>Ачивки</Subheader>
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
