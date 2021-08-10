import { Button, Panel } from '../../../../uikit'
import { TextInputWithLabel } from '../../../shared/components/input/TextInputWithLabel'

const NewPatient = () => {
  return (
    <>
      <Panel title='Basic Information' collapsible color='primary'>
        <div className='row'>
          <div className='col-lg-2'>
            <TextInputWithLabel
              name='prefix'
              label='Prefix'
              placeholder='Prefix'
              type='text'
              value=''
              isEditable
            />
          </div>
          <div className='col-lg-4'>
            <TextInputWithLabel
              name='firstName'
              label='First Name'
              placeholder='First Name'
              type='text'
              value=''
              isEditable
              isRequired
            />
          </div>
          <div className='col-lg-4'>
            <TextInputWithLabel
              name='lastName'
              label='Last Name'
              placeholder='Last Name'
              type='text'
              value=''
              isEditable
              isRequired
            />
          </div>
          <div className='col-lg-2'>
            <TextInputWithLabel
              name='suffix'
              label='Suffix'
              placeholder='Suffix'
              type='text'
              value=''
              isEditable
            />
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <TextInputWithLabel
              name='gender'
              label='Gender'
              placeholder='Gender'
              type='text'
              value=''
              isEditable
              isRequired
            />
          </div>
          <div className='col'>
            <TextInputWithLabel
              name='patientType'
              label='Patient Type'
              placeholder='New/Returning'
              type='text'
              value=''
              isEditable
              isRequired
            />
          </div>
          <div className='col'>
            <TextInputWithLabel
              name='bloodType'
              label='Blood Type'
              placeholder='Blood Type'
              type='text'
              value=''
              isEditable
            />
          </div>
        </div>
      </Panel>
      <br />
      <Panel title='Contact Information' color='primary'></Panel>
      <div className="row float-right">
        <div className="mt-3 mr-3">
          <Button className="btn-save me-2" color="warning" icon="bi bi-caret-right-fill" iconColor="success" iconLocation="right" iconSize="2" >
            Save
          </Button>
          <Button className="btn-cancel me-2" color="danger">
            Cancel
          </Button>
          <Button className="btn-cancel" color="info">
            Edit
          </Button>
        </div>
      </div>
    </>
  )
}

export default NewPatient
