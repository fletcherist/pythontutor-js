import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Teacher from 'components/Teacher'
import teacherStore from 'store/Teacher'

@observer
class TeacherContainer extends Component {
  render () {
    return <Teacher store={teacherStore} />
  }
}

export default Teacher
