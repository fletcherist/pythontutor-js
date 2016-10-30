import React, { Component, PropTypes } from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
import { _profileLink } from 'api/api'
import CSSModules from 'react-css-modules'
import s from './Students.css'
import AutoComplete from 'material-ui/AutoComplete'
import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader'
import FlatButton from 'material-ui/FlatButton'
import { List, ListItem } from 'material-ui/List'
import pronounce from 'util/pronounce'
import turnUsernameIntoColor from 'util/turnUsernameIntoColor'
import Avatar from 'material-ui/Avatar'

@CSSModules(s)
@observer class Students extends Component {
  constructor () {
    super()
    this.showMoreStudents = this.showMoreStudents.bind(this)
  }
  @observable studentsShowCount = 5
  @observable studentsSuggestLoadAll = false
  @action showMoreStudents () {
    setTimeout(() => {
      if (this.studentsSuggestLoadAll) {
        this.studentsShowCount += 200
      }
      this.studentsShowCount += 10
      if (this.studentsShowCount > 30) {
        this.studentsSuggestLoadAll = true
      }
    }, 300)
  }
  renderStudent (student, i) {
    if (i > this.studentsShowCount) return false
    const { first_name, last_name, username } = student
    return (
      <ListItem
        styleName='student'
        leftAvatar={
          <Avatar
            backgroundColor={turnUsernameIntoColor(username)}>
            {first_name.substr(0, 1).toUpperCase()}
          </Avatar>
        }
        primaryText={<a href={_profileLink + username}>{first_name} {last_name}</a>}>
      </ListItem>
    )
  }

  renderShowMoreButton () {
    const labelText = this.studentsSuggestLoadAll
      ? 'развернуть'
      : 'показать ещё'
    return (
      <div styleName='show-more'>
        <div styleName='show-more__button'>
          <FlatButton
            onClick={this.showMoreStudents}
            label={labelText}/>
        </div>
      </div>
    )
  }
  render () {
    const dataSourceConfig = {
      text: 'fullName',
      value: 'username'
    }
    this.props.students.forEach(student => {
      const { first_name, last_name } = student
      student.fullName = first_name + ' ' + last_name
    })
    const { students } = this.props
    return (
      <Paper styleName='container'>
        <div styleName='wrapper'>
          <Subheader>
            {students.length}
            {' '}
            {pronounce(students.length, ['ученик', 'ученика', 'учеников'])}
          </Subheader>
          <div styleName='search-box'>
            <AutoComplete
              fullWidth
              hintText='Найти ученика'
              textFieldStyle={{textAlign: 'center !important'}}
              onNewRequest={() => console.log('pupil selected')}
              filter={AutoComplete.fuzzyFilter}
              dataSource={students}
              dataSourceConfig={dataSourceConfig}
              openOnFocus={true}
              maxSearchResults={5}/>
            </div>
          <List>
            {students.map(
              (student, i) => this.renderStudent(student, i))
            }
          </List>
          {this.renderShowMoreButton()}
        </div>
      </Paper>
    )
  }
}

Students.propTypes = {
  students: PropTypes.array.isRequired
}

export default Students
