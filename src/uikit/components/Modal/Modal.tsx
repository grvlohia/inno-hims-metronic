import React, { ReactNode } from 'react'
import { Button, ButtonProps } from '../Button'

interface Props {
    /** Defines the body of the modal. */
    title?: string
    /** Defines the body of the modal. */
    body?: ReactNode
    /** Define the name of button in which click modal open */
    buttonName?: string
    /**
      * Optional success button properties.
      * */
    successButton?: ButtonProps
}

const Modal = (props: Props) => {
    const { title, body, buttonName, successButton } = props
    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_1">
                {buttonName}
            </button>
            <div className="modal fade" id="kt_modal_1" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{title}</h5>

                            <div className="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                                <span className="svg-icon svg-icon-2x"></span>
                            </div>
                        </div>

                        <div className="modal-body">
                            {body}
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                            {successButton && (
                                <Button {...successButton} color={successButton.color || 'primary'}>
                                    {successButton.children || 'Confirm'}
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
