import React, { ReactNode } from 'react'

interface Props {
    title?: string
    body?: ReactNode
    buttonName?: string
}

const Modal = (props: Props) => {
    const { title, body, buttonName } = props
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
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
