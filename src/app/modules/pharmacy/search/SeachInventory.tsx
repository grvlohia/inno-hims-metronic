import React, { useState } from 'react'
// import { Modal } from 'react-bootstrap-v5'
import { Button, Label } from '../../../../uikit'
import { DateTimePicker } from '../../../../uikit/components/DateTimePicker'
import Dropdown from '../../../../uikit/components/Dropdown/Dropdown'
import { Column, Container, Row } from '../../../../uikit/components/Layout'
import Modal from '../../../../uikit/components/Modal/Modal'
import { Toast } from '../../../../uikit/components/Toaster'
import { Typeahead } from '../../../../uikit/components/Typeahead'
import { Dropdown1 } from '../../../../_metronic/partials'
import InventorySearchInput from './InventorySearchInput'
const Ditem = [
    'a',
    "b"
]
const SeachInventory = () => {
    const [show, setShow] = useState(false)
    const onDate = () => {
        console.log('date')
        setShow(true)
        Toast('success', 'This is correct')
    }
    const body=(
        <div>Aditya</div>
    )
    return (
        <div>
            <Container>
                <Row>
                    <Column>
                        <InventorySearchInput />
                        <DateTimePicker
                            onChange={onDate}
                            showMonthYearPicker
                            dateFormat="MM/yyyy"
                        />
                        <Button onClick={onDate} 
                        data-bs-toggle="modal" 
                        data-bs-target="#kt_modal_1"
                         >Check</Button>

                        {/* <div>
                                <Label htmlFor="inventoryTypeahead" isRequired text='name' />
                                <Typeahead
                                    id="inventoryTypeahead"
                                    placeholder='name'
                                    onChange={(p: any[]) => onDate(p[0])}
                                    onSearch={async (query: string) => await MedicineSampleRepository.queryName(query)}
                                    searchAccessor="name"
                                    // value={inventory.name}
                                    renderMenuItemChildren={(p: any) => <div>{`${p.name}`}</div>}
                                   
                                />
                            </div> */}
                        <Dropdown
                            text="name"
                            items={Ditem}
                        />
                        {/* <Modal
                            className='bg-white'
                            id='kt_mega_menu_modal'
                            aria-hidden='true'
                            tabIndex='-1'
                            dialogClassName='modal-fullscreen'
                            contentClassName='shadow-none'
                            show={show}    >
                            <div className="modal fade"  >
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Modal title</h5>

                                            <div className="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                                                <span className="svg-icon svg-icon-2x"></span>
                                            </div>
                                        </div>

                                        <div className="modal-body">
                                            <p>Modal body text goes here.</p>
                                        </div>

                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </Modal> */}
                        <Modal
                         //show= {show}
                         buttonName="Add Item"
                         title='Modal'
                         body={body}
                        />

                    </Column>
                </Row>
            </Container>

        </div>
    )
}

export default SeachInventory
