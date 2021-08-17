import React, { CSSProperties } from 'react'
import { ColorVariant } from '../../interfaces'

interface Props {
    color: ColorVariant
    children?: React.ReactNode
    
    style?: CSSProperties
  }
const Pill = (props: Props) => {
    const { color, children } = props
    return (
        <div>
            <span className={`badge badge-${color}`}>{children}</span>
        </div>
    )
}

export default Pill
