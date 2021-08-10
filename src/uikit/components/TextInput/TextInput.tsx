import clsx from 'clsx'
import {CSSProperties} from 'react'

interface Props {
  /** The id value of the input */
  id?: string
  /** The name of the input */
  name?: string
  /** Defines the type of the input. Defaults to 'text' if not specified. */
  type?: 'text' | 'number' | 'email' | 'password' | 'search' | 'tel' | 'url'
  /** The value of the input */
  value?: string
  /** Defines whether the input should be disabled or not. Defaults to false. */
  disabled?: boolean
  /** The placeholder inside of the text input */
  placeholder?: string
  /** Handles the onChange event for the input */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  /** Defines whether the input should display as valid. Defaults to false */
  isValid?: boolean
  /** Defines whether the input should display as invalid. Defaults to false. */
  isInvalid?: boolean
  /** Defines the custom error message of the input. */
  feedback?: string
  /** Defines the size of the input. Defaults to 'lg' */
  size?: 'sm' | 'md' | 'lg'
  /** Defines the class of the input. */
  className?: string
  /** Defines the style of the input. */
  style?: CSSProperties
  /** Defines the custom style of the input. */
  inputDefaultStyle?: Record<string, any>
  /** Defines the background of the input */
  background?: 'solid' | 'white'
}

const TextInput = (props: Props) => {
  const {
    type,
    name,
    id,
    placeholder,
    onChange,
    disabled,
    feedback,
    isValid,
    isInvalid,
    value,
    className,
    style,
    inputDefaultStyle,
    background,
    size,
  } = props
  return (
    <div className='mb-3'>
      <input
        className={clsx(
          'form-control',
          size && `form-control-${size}`,
          background && `form-control-${background}`,
          isValid && 'is-valid',
          isInvalid && 'is-invalid',
          className
        )}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        value={value}
        style={Object.assign({}, style, ...[inputDefaultStyle])}
      />
      {isValid ? (
        <div className='fv-plugins-message-container valid-feedback'>
          <div className='fv-green-block'>
            <span role='alert'>{feedback}</span>
          </div>
        </div>
      ) : null}
      {isInvalid ? (
        <div className='fv-plugins-message-container invalid-feedback'>
          <div className='fv-help-block'>
            <span role='alert'>{feedback}</span>
          </div>
        </div>
      ) : null}
    </div>
  )
}

TextInput.defaultProps = {
  type: 'text',
}

export {TextInput}
