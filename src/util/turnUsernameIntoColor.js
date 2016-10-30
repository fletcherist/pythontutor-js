import {
  red500,
  pink500,
  purple500,
  deepPurple500,
  indigo500,
  blue500,
  lightBlue500,
  cyan500,
  teal500,
  green500,
  lightGreen500,
  lime500,
  yellow500,
  amber500,
  orange500
} from 'material-ui/styles/colors'

const possibleColors = [
  red500,
  pink500,
  purple500,
  deepPurple500,
  indigo500,
  blue500,
  lightBlue500,
  cyan500,
  teal500,
  green500,
  lightGreen500,
  lime500,
  yellow500,
  amber500,
  orange500
]

export default function turnUsernameIntoColor (username) {
  let color
  if (username.length > possibleColors.length) {
    color = possibleColors[Math.abs(possibleColors.length - username.length)]
  } else {
    color = possibleColors[username.length]
  }
  return color
}
