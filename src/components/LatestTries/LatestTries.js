import React, { Component, PropTypes } from 'react'

import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader'
import FlatButton from 'material-ui/FlatButton'
import { List, ListItem } from 'material-ui/List'
import { __pythontutorUrl } from 'api/api'

import CSSModules from 'react-css-modules'
import s from './LatestTries.css'

import { observer } from 'mobx-react'
import { observable, action } from 'mobx'

import { timeSince } from 'util/timeSince'
import Divider from 'material-ui/Divider'

import { LastTriesTitle } from 'components/Titles'


@observer
@CSSModules(s)
class LatestTries extends Component {
	@observable isCollapsed = true
	@action toggle () {
		setTimeout(() => {
			this.isCollapsed = !this.isCollapsed
		}, 200)
	}

	renderOneTry (obj, i) {
		if (i >= 3 && this.isCollapsed) return null
		const { problem_title, time, url } = obj
		const label = 
			(<div key={i}>
				<span className={s.time}>{timeSince(new Date(time))}</span>
				<span className={s.title}><a href={__pythontutorUrl + url}>{problem_title}</a></span>
			</div>)
		return (
			<div>
				{i !== 0 && (<Divider />)}
				<ListItem
					styleName='item'
					primaryText={label}
				/>

			</div>
		)
	}

	renderExpandButton () {
		if (this.props.lastSolved.length < 4) return null
		let buttonLabel = this.isCollapsed 
			? 'развернуть'
			: 'свернуть'
		return (
			<div styleName='button__wrapper'>
				<FlatButton
					styleName='button'
					onClick={this.toggle.bind(this)}
					label={buttonLabel}/>
			</div>
		)
	}

	render () {
		if (this.props.lastSolved.length === 0) return null
		const solved = this.props.lastSolved.map((problem, i) => this.renderOneTry(problem, i))


		return (
			<Paper styleName='container'>
				<LastTriesTitle />
				<List>
					{solved}
				</List>
				{this.renderExpandButton()}
			</Paper>
		)
	}
}

LatestTries.propTypes = {
	lastSolved: PropTypes.array.isRequired
}

export default LatestTries