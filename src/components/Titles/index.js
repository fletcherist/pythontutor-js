import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import s from './Titles.css'

import GradeIcon from 'material-ui/svg-icons/action/grade'
import Timeline from 'material-ui/svg-icons/action/timeline'
import Code from 'material-ui/svg-icons/action/code'

import pronounce from 'util/pronounce'

@CSSModules(s)
export class AchievementsTitle extends Component {
	renderTitle () {
		const { count } = this.props
		if (count && count !== 0) {
			return `${count} ${pronounce(count, ['Ачивка', 'Ачивки', 'Ачивок'])}`
		}
		return 'Ачивки'
	}
	render () {
		return (
			<div styleName='subheader--white'>
			  <GradeIcon color='#ffd600' styleName='icon' />
			  <div styleName='title'>{this.renderTitle()}</div>
			</div>
		)
	}
}

AchievementsTitle.propTypes = {
	count: PropTypes.number.isRequired
}

@CSSModules(s)
export class LessonsTitle extends Component {
	render () {
		return (
			<div styleName='subheader'>
			  <Timeline styleName='icon' color='#4caf50'/>
			  <span styleName='title'>Прогресс</span>
			</div>
		)
	}
}

@CSSModules(s)
export class LastTriesTitle extends Component {
	render () {
		return (
			<div styleName='subheader'>
			  <Code styleName='icon' color='#d81b60'/>
			  <span styleName='title'>Последние решенные задачи</span>
			</div>
		)
	}
}