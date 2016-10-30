import { autorun, observable, action } from 'mobx'
import { _testTeacher } from 'api/api'

class teacherStore {
  @observable isFetched = false
  @observable isFetched = false
  @observable students = []
  @observable groups = []

  fetchTeacher () {
    fetch(_testTeacher, { credentials: 'include' })
      .then(r => r.json())
      .then(r => {
        console.log(r)
        this.students = r.students
        this.groups = r.groups
        this.isFetched = true
      })
      .catch(e => console.log(e))
  }
}

const store = window.teacher = new teacherStore

autorun(() => {
  console.log(store)
})
export default store
