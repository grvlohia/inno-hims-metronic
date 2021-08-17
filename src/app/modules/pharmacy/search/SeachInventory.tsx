import React, { useState } from 'react'
// import { Modal } from 'react-bootstrap-v5'
import { Button, Table} from '../../../../uikit'
import { DateTimePicker } from '../../../../uikit/components/DateTimePicker'
import Dropdown from '../../../../uikit/components/Dropdown/Dropdown'
import { Column, Container, Row } from '../../../../uikit/components/Layout'
import Modal from '../../../../uikit/components/Modal/Modal'
import { Toast } from '../../../../uikit/components/Toaster'
import { TablesWidget1, TablesWidget10, TablesWidget11, TablesWidget12, TablesWidget13, TablesWidget2, TablesWidget3, TablesWidget4, TablesWidget5, TablesWidget6, TablesWidget7, TablesWidget8, TablesWidget9 } from '../../../../_metronic/partials/widgets'
import InventorySearchInput from './InventorySearchInput'
const Ditem = [
    'a',
    "b"
]
const SeachInventory = () => {
    const [table, setTable] = useState([
        {name:'adita',code:'213'},
        {name:'aditya',code:'39910'}
    ])
    const onDate = () => {
        console.log('date')
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
                        <Table
                            data={table}
                            getID={row=>row.name}
                            columns={[
                                { label:"name", key: 'name' },
                                { label: 'code', key: 'code' }
                            ]}
                            tableClassName='table align-middle gs-0 gy-4'
                            headerClassName='fw-bolder text-muted bg-light'
                        />
                        <TablesWidget11 className='card-xxl-stretch mb-5 mb-xl-8'/>
                        {/* <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-8' /> */}
                        {/* <DateTimePicker
                            onChange={onDate}
                            showMonthYearPicker
                            dateFormat="MM/yyyy"
                        />
                        <Button onClick={onDate} 
                         >Check</Button>

                        <div>
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
                            </div>
                        <Dropdown
                            text="name"
                            items={Ditem}
                        />
                        <Modal
                         buttonName="Add Item"
                         title='Modal'
                         body={body}
                         successButton={{
                             children:'Submit'
                         }}
                        /> */}
                        
                    </Column>
                </Row>
            </Container>

        </div>
    )
}

export default SeachInventory
