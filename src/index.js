import React from 'react'
import ReactDOM from 'react-dom'

import Profile from 'containers/Profile'
import Teacher from 'containers/Teacher'
import AchievementsModal from 'containers/AchievementsModal'

import { isElement } from 'lodash'

import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import 'whatwg-fetch'

import DevTools from 'mobx-react-devtools'
import teacherStore from 'store/Teacher'

injectTapEventPlugin()

const MaterialDOM = ({children}) => (
  <MuiThemeProvider>
    {children}
  </MuiThemeProvider>
)

const ProfileContainer = () => (
  <MaterialDOM>
    <Profile />
  </MaterialDOM>
)

const TeacherContainer = () => (
  <MaterialDOM>
    <Teacher store={teacherStore} />
  </MaterialDOM>
)

const AchievementsModalContainer = () => (
  <MaterialDOM>
    <AchievementsModal />
  </MaterialDOM>
)


/*
 * Avaliable React components
 * with it's containers
 */
const components = {
  profile: {
    component: ProfileContainer,
    elementName: 'profile'
  },
  teacher: {
    component: TeacherContainer,
    elementName: 'teacherInterface'
  },
  achievementsModals: {
    component: AchievementsModalContainer,
    elementName: 'achievements-snack'
  }
}

/*
 * Render react elemen
 * to it's DOM container
 */
function render (reactComponent) {
  const { elementName, component } = reactComponent
  const renderContainer = document.getElementById(elementName)
  if (isElement(renderContainer)) {
    ReactDOM.render(React.createElement(component), renderContainer)
  } else {
    console.log(`Element '${elementName}' does not exists, so not rendered.`)
  }
}

/*
 * Iterate over all components
 * And render them all to their divs
 * (If there's such div on the page, do not throw an error)
 * (Only shows a console.log())
 */
function renderThemAll () {
  for (const component in components) {
    render(components[component])
  }

  let devtools = document.querySelector('#devtools')
  if (devtools) {
    ReactDOM.render(React.createElement(DevTools), devtools)
  }
}
renderThemAll()
