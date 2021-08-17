import React, { ReactNode } from 'react'

interface Props {
    label?: string | ReactNode,
    id?: string,
    name?: string
    value?: string
    disabled?: boolean
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Radio = (props: Props) => {
    const { label, id, name, value, disabled, onChange } = props
    return (
        <div  id={id} className="form-check form-check-custom form-check-solid">
            <input
                name={name}
                className="form-check-input"
                type="radio"
                value={value}
                disabled={disabled}
                id="flexRadioChecked"
                onChange={onChange}
            />
            <label className="form-check-label" htmlFor="flexRadioChecked">
                {label}
            </label>
        </div>

    )
}

export default Radio
