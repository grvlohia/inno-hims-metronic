import * as React from 'react'

import { ToastProps } from './interfaces'

export const titleWithMessage = (title: ToastProps['title'], message: ToastProps['message']) => (
    <>
        <div className="toast align-items-center text-white bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="d-flex">
                <div className="toast-body">
                    {message}
                </div>
                <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    </>
)


export const titleWithoutMessage = (title: ToastProps['title']) => <div>{title}</div>