import clsx from 'clsx'
import { TextInput } from '../../../../uikit'

interface Props {
  name: string
  type: 'text' | 'email' | 'number' | 'tel' | 'password'
  value: string
  label?: string
  isEditable?: boolean
  placeholder?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  isRequired?: boolean
  isValid?: boolean
  isInvalid?: boolean
  feedback?: string
  size?: 'sm' | 'md' | 'lg'
  background?: 'solid' | 'white'
}

const TextInputWithLabel = (props: Props) => {
  const {
    name,
    type,
    value,
    label,
    isEditable,
    placeholder,
    onChange,
    isRequired,
    feedback,
    isInvalid,
    isValid,
    size,
    background
  } = props
  return (
    <div className='form-group'>
      {label && (
        <label
          className={clsx('form-label fw-bolder text-dark fs-6 mb-0', isRequired && 'required')}
        >
          {label}
        </label>
      )}
      <TextInput
        name={name}
        type={type}
        value={value}
        disabled={!isEditable}
        placeholder={placeholder}
        onChange={onChange}
        isValid={isValid}
        isInvalid={isInvalid}
        feedback={feedback}
        size={size}
        background={background}
      />
    </div>
  )
}

export {TextInputWithLabel}
