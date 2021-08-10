import clsx from 'clsx'
import React, {CSSProperties} from 'react'
import {iconColor, iconSize} from './interfaces'

interface Props {
  /** The type of icon to display */
  icon: string
  /** sets the size of the icon */
  size?: iconSize
  /** sets the color of an svg icon using text-color property */
  color?: iconColor
  /** Defines the class of the icon */
  className?: string
  /** Defines the style of the icon */
  style?: CSSProperties
  /** Function to execute when user clicks on icon */
  onClick?: (event: React.MouseEvent<any>) => void
}

const Icon = (props: Props) => {
  var {icon, size, color, style, className} = props

  return (
    <i
      className={clsx(
        icon,
        size && `fs-${size}`,
        color && `text-${color}`,
        className ? className : ''
      )}
      style={style}
    ></i>
  )
}

export {Icon}
