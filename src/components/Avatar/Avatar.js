import React, { Component } from 'react'
import AvatarUI from 'material-ui/Avatar'

let s = {
	container: {
		margin: '10px',
		zIndex: '0'
	},
	wrapper: {
		backgroundColor: 'white',
		width: '130px',
		marginLeft: '10px',
		marginBottom: '-150px',
		height: '150px',
		position: 'absolute',
		zIndex: '0'
	},
	secondWrapper: {
		backgroundColor: '#00c853',
		borderRadius: '100px',
		width: '130px',
		zIndex: '2',
		padding: '2px'
	},
	avatar: {
		zIndex: '4',
		margin: '2px'
	}
}

class Avatar extends Component {
	render () {
		const { username } = this.props
		return (
			<div style={s.container}>
			  <AvatarUI
			  	style={s.avatar}
			    size={130}
			    color={'#90a4ae'}
			    backgroundColor={'#fafafa'}>
			    {username.substr(0, 1).toUpperCase()}
			  </AvatarUI>
			</div>
		)
	}
}

export default Avatar