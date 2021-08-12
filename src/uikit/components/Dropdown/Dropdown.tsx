import React from 'react'
import { ButtonVariant } from '../../interfaces'
import { Item } from './interfaces'

interface Props {
    text: string
    items: string[]
    id?: string
    variant?: ButtonVariant
    alignRight?: boolean
    size?: 'sm' | 'md' | 'lg'
    direction?: 'down' | 'up' | 'left' | 'right'
    style?: Record<string, any>
}

const Dropdown = (props: Props) => {
    const { text, items } = props
    return (
        <div>
            <button type="button" className="btn btn-primary btn-active-light-primary"
                data-kt-menu-trigger="click"
                data-kt-menu-placement="bottom-start"
                data-kt-menu-flip="top-start">
                {text}
                <span className="svg-icon svg-icon-5 rotate-180 ms-3 me-0">...</span>
            </button>
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-200px py-4"
                data-kt-menu="true">
                {items.map((item, i) => {
                    return (
                        <div key={i} className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                                {item}
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Dropdown
