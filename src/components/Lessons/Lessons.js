import React, { Component, PropTypes } from 'react'

import { observable, computed, action } from 'mobx'
import { observer } from 'mobx-react'
import s from './Lessons.css'
import CSSModules from 'react-css-modules'
import Paper from 'material-ui/Paper'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Label from 'material-ui/svg-icons/action/label'
import LabelOutline from 'material-ui/svg-icons/action/label-outline'
import Done from 'material-ui/svg-icons/action/done'
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper'
import { __pythontutorUrl } from 'api/api'
import _pronounce from 'util/pronounce'
import _countSolvedProblems from '../../util/countSolvedProblems'
import FlatButton from 'material-ui/FlatButton'

@CSSModules(s)
@observer class Lessons extends Component {
  @observable isListExpanded = false
  @action expandList () {
    this.isListExpanded = true
    console.log('list was expanded')
  }

  renderLessons () {
    let { lessons } = this.props
    if (!lessons || lessons.length === 0) {
      return false
    }
    return (
      this.props.lessons.map((lesson, i) => {
        const { title, url, problems, open } = lesson
        console.log(this.isListExpanded)

        // 0 - is the first
        const ITEMS_TO_SHOW = 3 - 1
        if (i > ITEMS_TO_SHOW && !this.isListExpanded) {
          return false
        }
        const problemsCount = problems.length
        const solved = _countSolvedProblems(problems)
        const secondaryText = `${solved} ${_pronounce(solved, ['задача', 'задачи', 'задач'])} из ${problemsCount}`
        const itemIcon = problemsCount === solved
          ? <Done color='#4caf50' />
          : <LabelOutline/>

        return (
          <ListItem
            key={title}
            styleName='list-item'
            primaryText={<a href={__pythontutorUrl + url}>{title}</a>}
            secondaryText={secondaryText}
            leftIcon={itemIcon}
            initiallyOpen={false}/>
        )
      })
    )
  }

  renderTasks (lesson) {
    let { problems, open } = lesson
    if (!open) return null
    return [
      <Stepper
          orientation='vertical'
          innerDivStyle={{height: 150}}
          style={{marginLeft: 50}}>
        {problems.map((problem, i) => {
          const { title, url } = problem
          let stepLabel
          if (problem.status === 'ok') {
            stepLabel =
              <StepLabel
                style={{color: '#4caf50'}}
                icon={<Done color='#4caf50'/>}>
                  {title}
              </StepLabel>
          } else {
            stepLabel =
              <StepLabel>
                <a href={__pythontutorUrl + url}>{title}</a>
              </StepLabel>
          }
          return (
            <Step>
              {stepLabel}
            </Step>
          )
        })}
      </Stepper>
    ]
  }

  renderShowMore () {
    if (this.isListExpanded) {
      return null
    }
    return (
      <div styleName='showMore'>
        <FlatButton
          label='Показать ещё'
          styleName='showMore__button'
          onClick={this.expandList.bind(this)}
        />
      </div>
    )
  }

  render () {
    if (!this.props.lessons || this.props.lessons.length === 0) {
      return null
    }
    this.props.lessons.forEach(lesson => {
      lesson.open = true
    })
    return (
      <div styleName='container'>
        <Paper zDepth={1}>
          <Subheader>Прогресс</Subheader>
          <List>
            {this.renderLessons()}
          </List>
          {this.renderShowMore()}
        </Paper>
      </div>
    )
  }
}

Lessons.propTypes = {
  lessons: PropTypes.array.isRequired
}

export default Lessons
