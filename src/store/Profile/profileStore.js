import { observable, action } from 'mobx'
import { profile, _testProfile } from 'api/api'

class Profile {

	@observable fetched = false
	@observable user = {
	  username: '',
	  lessons: [],
	  lastSolved: []
	}
	@observable stats = {
	  solved: 0,
	  progress: 0,
	  allSubmissions: 0
	}

	@action fetchData () {
	  const alias = window.location.href.split('/')[4]
	  let link = profile
	  if (alias) link += '?username=' + alias
	  console.log(link)
		console.log(_testProfile)
	  fetch(_testProfile, { credentials: 'include' })
	    .then(r => r.json())
	    .then(r => {
	      console.log(r)
	      this.user.alias = r.user_name
	      this.user.lessons = r.lessons
	      this.user.lastLogin = r.last_logged_in
	      this.user.username = r.user_first_name + ' ' + r.user_last_name
	      this.user.achievements = r.achievements
	      this.user.lastSolved = r.last_solved_problems

	      this.stats.allSubmissions = r.all_submissions
	      this.stats.progress = Math.round(r.progress * 100)
	      this.stats.solved = r.problems_solved

	      this.fetched = true
	    })
	    .catch(e => console.log(e))
	}

}

let store = window._profile = new Profile

export default store