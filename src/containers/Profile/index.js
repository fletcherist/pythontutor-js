import Profile from 'components/Profile'
import React, { Component } from 'react'
import store from 'store/Profile'
import { observer } from 'mobx-react'

@observer
class ProfileContainer extends Component {
	render () {
		return <Profile store={store} />
	}
}

export default ProfileContainer
