import React, { CSSProperties } from 'react'

interface Props {
    children?: React.ReactNode
    /**
     * Defines the style of the row.
     */
    style?: CSSProperties
}

const Row = (props: Props) => {
    const { children, style } = props
    return (
        <div className="row" style={style}>
            {children}
        </div>
    )
}

export  { Row }
