import React, { CSSProperties } from 'react'

interface Props {
    /**
   * A custom element to be used for the component
   * @default <div>
   */
    as?: React.ElementType
    /**
     * Allow the Container to fill all of its available horizontal space
     * @default false
     */
    fluid?: boolean
    /**
     * A custom class to be used for the component
     */
    className?: string
    /**
     * `ReactNode` elements to be wrapped in the component
     */
    children?: React.ReactNode
    /**
     * Defines the style of the container.
     */
    style?: CSSProperties
}

const Container = (props: Props) => {
    const { children, style } = props
    return (
        <div className="container" style={style}>
            {children}
        </div>
    )
}

export {Container}
