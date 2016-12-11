import React, { Component, PropTypes } from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
import s from './Teacher.css'
import CSSModules from 'react-css-modules'

import Students from 'components/Students'
import Groups from 'components/Groups'
import Tasks from 'components/Tasks'


@CSSModules(s)
@observer
class Teacher extends Component {
  constructor (props) {
    super(props)
    props.store.fetchTeacher()
    props.store.fetchSubmissions()
  }

  renderStudents () {
    const { students, isFetched } = this.props.store
    if (!isFetched) return null
    return (
      <div styleName='students'>
        <Students students={students} />
      </div>
    )
  }

  renderGroups () {
    const { groups, isFetched } = this.props.store
    if (!isFetched) return null
    return (
      <div styleName='groups'>
        <Groups groups={groups} />
      </div>
    )
  }

  renderTasks () {
    const { groups, isFetched } = this.props.store
    if (!isFetched) return null
    return (
      <div styleName='tasks'>
        <Tasks />
      </div>
    )
  }

  render () {
    const { students, groups, submissions, isFetched } = this.props.store
    if (!isFetched) return null
    return (
      <div styleName='container'>
        <div styleName='wrapper'>
          <div styleName='tasks1'>
            <Tasks submissions={submissions}/>
          </div>
          <div styleName='right'>
            <div styleName='groups'>
              <Groups groups={groups} />
            </div>
            <div styleName='students'>
              <Students students={students} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Teacher.propTypes = {
  isFetched: PropTypes.bool.isRequired,
  fetchTeacher: PropTypes.func.isRequired,
  store: PropTypes.object.isRequired
}

export default Teacher
