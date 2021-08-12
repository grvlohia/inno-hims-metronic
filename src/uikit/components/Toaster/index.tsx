import * as React from 'react'


import { titleWithMessage, titleWithoutMessage } from './components'
import { ToastProps } from './interfaces'
import toastr from "toastr";
// import '../../../_metronic/assets/sass//core/vendors/plugins/_toastr.scss'

export const Toast: any = (
  type: ToastProps['type'],
  title: ToastProps['title'],
  message?: ToastProps['message'],
  position?: ToastProps['position'],
) => {
  const messageToShow:any = message 
  //? titleWithMessage(title, message) : titleWithoutMessage(title)
  let toastToShow
  const actualPosition = position 

  switch (type) {
    case 'error':
      toastr.error(messageToShow)
      break
    case 'info':
      toastr.info(messageToShow)
      break
    case 'success':
      toastr.success(messageToShow)
      break
    case 'warning':
      toastr.warning(messageToShow)
      break
    default:
      toastr.error(messageToShow)
  }

  return toastToShow
}

// export const Toaster = (props: ToasterProps) => {
//   const { autoClose, hideProgressBar, draggable } = props

//   return (
//     <ToastContainer
//       autoClose={autoClose || 5000}
//       hideProgressBar={hideProgressBar !== false}
//       draggable={draggable !== false}
//       transition={Slide}
//       draggablePercent={35}
//     />
//   )
// }