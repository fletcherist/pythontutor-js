import React, { Component, PropTypes } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import { observer } from 'mobx-react'
import CSSModules from 'react-css-modules'
import s from './AchievementsModal.css'

import { __pythontutorUrl } from 'api/api'

import FacebookIcon from './facebook.svg'
import TwitterIcon from './twitter.svg'
import VkIcon from './vk.svg'

import StarsIcon from 'material-ui/svg-icons/action/stars'

import {
  shareFacebookTitle,
  shareVkTitle,
  shareTwitterTitle,

  shareFacebookDescription,
  shareVkDescription,
  shareTwitterDescription
} from 'util/texts'

@CSSModules(s)
@observer
class AchievementsModal extends Component {
  renderContent () {
    const { achievements, isVisible } = this.props.store
    const currentAchievement = achievements[0]

    if (!isVisible) {
      return null
    }

    const { description, img, name } = currentAchievement

    return (
      <div styleName='modal'>
        <img styleName='image' src={__pythontutorUrl + img} height='150'/>
        <div styleName='share'>
          <div styleName='share__holder'>
            <a href={`http://www.facebook.com/sharer.php?u=${__pythontutorUrl}/?t=${shareFacebookTitle()}`}>
              <FacebookIcon styleName='icon'/>
            </a>
           <a href={`http://twitter.com/share?url=${__pythontutorUrl}/?text=${shareTwitterTitle()}?via=asd`}>
              <TwitterIcon styleName='icon'/>
            </a>
            <a href={`http://vk.com/share.php?url=${__pythontutorUrl}&title=${shareVkTitle()}&description=${shareVkDescription()}`}>
              <VkIcon styleName='icon'/>
            </a>
          </div>
        </div>
      </div>
    )
  }

  renderTitle () {
    const { achievements, isVisible } = this.props.store
    const currentAchievement = achievements[0]
    if (!currentAchievement) return null

    const { description, img, name } = currentAchievement
    return (
        <div>
          <div className={s.title__holder}>
            <span>Ачивка подъехала</span>
            <span className={s.title__holder_icon}><StarsIcon className={s.title__holder_icon} color='#ffd600' /></span>
          </div>
          <div className={s.subtitles}>{description}</div>
        </div>
    )
  }

	render () {
    let {
      isVisible,
      openModal,
      closeModal,
      achievements
    } = this.props.store

    const actions = [
      <FlatButton
        label='Еееее'
        keyboardFocused={true}
        primary={true}
        onTouchTap={closeModal}
        onClick={closeModal}
      />
    ]

    const currentAchievement = achievements[0]

		return (
			<div styleName='wrapper'>
        <button onClick={openModal}>open modal</button>
        {isVisible.toString()}
        <Dialog
          contentClassName={s.container}
          bodyClassName={s.container}
          contentClassName={s.container}
          titleClassName={s.title}
          open={isVisible}
          actions={actions}
          title={this.renderTitle()}
          onRequestClose={closeModal}>
          {this.renderContent()}
        </Dialog>
      </div>
		)
	}
}

AchievementsModal.propTypes = {
  store: PropTypes.object.isRequired
}

export default AchievementsModal