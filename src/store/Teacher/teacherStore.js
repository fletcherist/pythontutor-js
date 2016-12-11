import { autorun, observable, action } from 'mobx'
import {
  TEST_TEACHER,
  TEST_SUBMISSIONS
} from 'api/api'

class teacherStore {
  @observable isFetched = false
  @observable isFetched = false
  @observable students = []
  @observable groups = []
  @observable submissions = []

  fetchTeacher () {
    fetch(TEST_TEACHER, { credentials: 'include' })
      .then(r => r.json())
      .then(r => {
        this.students = r.students
        this.groups = r.groups
        this.isFetched = true
      })
      .catch(e => console.log(e))
  }

  fetchSubmissions () {
    fetch(TEST_SUBMISSIONS, { credentials: 'include' })
      .then(r => r.json())
      .then(r => {
        this.submissions = r.submissions
      })
  }
}

const store = window.teacher = new teacherStore

autorun(() => {
  console.log(store)
})
export default store
