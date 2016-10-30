import React, { Component, PropTypes } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import { observer } from 'mobx-react'
import CSSModules from 'react-css-modules'
import s from './AchievementsModal.css'


@CSSModules(s)
@observer
class AchievementsModal extends Component {
	render () {
    let {
      isVisible,
      openModal,
      closeModal
    } = this.props.store

    const actions = [
      <FlatButton
        label='OK'
        keyboardFocused={true}
        primary={true}
        onTouchTap={closeModal}
        onClick={closeModal}
      />
    ]

		return (
			<div styleName='wrapper'>
        <button onClick={openModal}>open modal</button>
        {isVisible.toString()}
        <Dialog
          contentClassName={s.container}
          open={isVisible}
          actions={actions}
          title='Оп-па. Ачивочка подъехала!'
          onRequestClose={closeModal}>
          cloneElement(element, props, children))
          renderToStaticMarkup()
        </Dialog>
      </div>
		)
	}
}

AchievementsModal.propTypes = {
  store: PropTypes.object.isRequired
}

export default AchievementsModal