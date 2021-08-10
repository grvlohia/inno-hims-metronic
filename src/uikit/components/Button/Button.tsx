import {CSSProperties} from 'react'
import {ButtonVariant} from '../../interfaces'
import {Button as BootstrapButton} from 'react-bootstrap-v5'
import {Icon} from '../Icon/Icon'
import {iconColor, iconSize} from '../Icon/interfaces'

export interface ButtonProps {
  /**
   *  Defines the button variant. By default is primary
   * @default "primary"
   */
  color?: ButtonVariant

  /**
   * Determines whether or not the button should be a block button or not. By default false
   * @default false
   * */
  block?: boolean

  /**
   * Determines whether or not the button should be disabled or not. By default is false.
   * @default false
   * */
  disabled?: boolean

  /** Determines whether or not the button should be a small or large button. By default is undefined. */
  size?: 'small' | 'large'

  /** The icon to display */
  icon?: string

  /** Defines the icon color */
  iconColor?: iconColor

  /**
   * Determines whether or not the icon should display on the left side or right side of the button. By default is left
   * @default left
   * */
  iconLocation?: 'left' | 'right'

  /** Handles the on click event for a button */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  /** The children to render */
  children?: React.ReactNode
  /**
   * Defines the class of the button
   */
  className?: string
  /**
   * Defines the style of the button
   */
  style?: CSSProperties
  /**
   * Defines the class of the button.
   */
  iconClassName?: string
  /**
   * Defines the style of the button.
   */
  iconStyle?: CSSProperties
  iconSize?: iconSize
}

function getButtonSize(size: string | undefined): 'sm' | 'lg' | undefined {
  if (size === 'small') {
    return 'sm'
  }
  if (size === 'large') {
    return 'lg'
  }
  return undefined
}

const Button = (props: ButtonProps) => {
  const {
    children,
    color,
    block,
    disabled,
    size,
    onClick,
    className,
    style,
    icon,
    iconLocation,
    iconColor,
    iconClassName,
    iconStyle,
    iconSize,
  } = props

  return (
    <BootstrapButton
      variant={color}
      block={block}
      disabled={disabled}
      size={getButtonSize(size)}
      onClick={onClick}
      className={className}
      style={style}
    >
      {icon && iconLocation === 'left' && (
        <Icon
          icon={icon}
          color={iconColor}
          className={iconClassName}
          style={iconStyle}
          size={iconSize}
        />
      )}
      {children}{' '}
      {icon && iconLocation === 'right' && (
        <Icon
          icon={icon}
          color={iconColor}
          className={iconClassName}
          style={iconStyle}
          size={iconSize}
        />
      )}
    </BootstrapButton>
  )
}

Button.defaultProps = {
  color: 'primary',
  iconLocation: 'left',
}

export {Button}
