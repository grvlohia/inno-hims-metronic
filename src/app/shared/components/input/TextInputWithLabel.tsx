import { TextInput } from '../../../../uikit'
import { Label } from '../../../../uikit/components/Label/Label'

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

  const id = `${name}TextInput`
  return (
    <div className='form-group'>
      {label && <Label text={label} htmlFor={id} isRequired={isRequired} />}
      <TextInput
        id={id}
        type={type}
        value={value}
        disabled={!isEditable}
        placeholder={placeholder}
        onChange={onChange}
        size={size}
        background={background}
        isValid={isValid}
        isInvalid={isInvalid}
        feedback={feedback}
      />
    </div>
  )
}

export {TextInputWithLabel}
