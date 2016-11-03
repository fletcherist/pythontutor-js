import { observable, action, autorun } from 'mobx'

class AchievementsModal {

	@observable isVisible = false
	@observable achievements = [
		{
      "description": "решено 2 задачи",
      "name": "solved2",
      "img": "/static/images/achievements/new_solved2.png"
    },
    {
      "description": "ещё ачивка",
      "name": "solved2",
      "img": "/static/images/achievements/new_solved2.png"
    }
	]

	@action openModal = () => {
		this.isVisible = true
	}

	@action closeModal = () => {
		this.isVisible = false
		this.achievements.splice(0, 1)
		if (this.achievements.length > 0) {
			setTimeout(() => {
				this.openModal()
			}, 500)
		}
		console.log(this.achievements)
	}
}

const store = window._achievementsController = new AchievementsModal()

autorun(() => {
	console.log(store)
})

export default store