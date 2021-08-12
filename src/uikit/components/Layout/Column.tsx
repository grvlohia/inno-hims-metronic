import React, { CSSProperties } from 'react'

interface Props {
    children?: React.ReactNode
  
  /**
   * Defines the style of the column.
   */
  style?: CSSProperties
}

const Column = (props: Props) => {
    const { children, style } = props
    return (
        <div className='col' style={style}>
            {children}
        </div>
    )
}

export {Column}
