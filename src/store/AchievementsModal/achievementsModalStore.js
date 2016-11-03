import { observable, action, autorun } from 'mobx'

class AchievementsModal {

	@observable isVisible = false
	@observable achievements = [
		// {
  //     "description": "решено 2 задачи",
  //     "name": "solved2",
  //     "img": "/static/images/achievements/new_solved2.png"
  //   },
  //   {
  //     "description": "ещё ачивка",
  //     "name": "solved2",
  //     "img": "/static/images/achievements/new_solved2.png"
  //   }
	]

	@action pushAchievement = achievement => {
		if (!achievement) {
			throw new Error('Please provide an achievement object to the controller')
		}
		const { description, img } = achievement
		if (!description || !img) 
			throw new Error('Achievement object passed to the controller is invalid')
		this.achievements.push(achievement)
	}

	@action openModal = () => {
		if (this.achievements.length === 0) {
			throw new Error(`You can't open the modal window with empty achievements array`)
		}
		this.isVisible = true
	}

	@action closeModal = () => {
		this.isVisible = false
		this.achievements.splice(0, 1)
		console.log(this.achievements.length)
		if (this.achievements.length > 0) {
			setTimeout(() => {
				this.openModal()
			}, 1000)
		}
		console.log(this.achievements)
	}
}

const store = window._achievementsController = new AchievementsModal()

autorun(() => {
	console.log(store)
})

export default store