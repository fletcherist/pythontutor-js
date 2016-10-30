import React, { Component } from 'react'
import AchievementsModal from 'components/AchievementsModal'
import { observer } from 'mobx-react'
import store from 'store/AchievementsModal'

@observer class AchievementsModalContainer extends Component {
	render () {
		return <AchievementsModal store={store} />
	}
}

export default AchievementsModalContainer