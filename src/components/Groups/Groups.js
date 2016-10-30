import React, { Component, PropTypes } from 'react'
import Paper from 'material-ui/Paper'
import s from './Groups.css'
import CSSModules from 'react-css-modules'
import Subheader from 'material-ui/Subheader'
import { List, ListItem } from 'material-ui/List'

@CSSModules(s)
class Groups extends Component {
  renderGroup (group) {
    const { title, id } = group
    return (
      <ListItem primaryText={title} />
    )
  }
  render () {
    const { groups } = this.props
    const _groups = groups.map(group => this.renderGroup(group))
    return (
      <Paper styleName='container'>
        <Subheader>Учебные группы</Subheader>
        <List>
          {_groups}
        </List>
      </Paper>
    )
  }
}

Groups.propTypes = {
  groups: PropTypes.array.isRequired
}

export default Groups
