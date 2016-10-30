import { observable, action, autorun } from 'mobx'

class AchievementsModal {

	@observable isVisible = false
	@observable achievementID = 1

	@action openModal = () => {
		this.isVisible = true
	}

	@action closeModal = () => {
		this.isVisible = false
	}
}

const store = window._achievementsController = new AchievementsModal()

autorun(() => {
	console.log(store)
})

export default store