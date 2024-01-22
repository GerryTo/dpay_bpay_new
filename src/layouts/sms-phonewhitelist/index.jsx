import { Button, Checkbox, DatePicker, Input, Select, Space, Table } from 'antd'
import React, { useState } from 'react'
import dataSmsPhoneWhitelistTableData from './data/dataSmsPhoneWhitelistTableData'
import ModalEdit from '../sms-phonewhitelist/components/ModalEdit'
import ModalAddNew from './components/ModalAddNew'


const SmsPhoneWhitelist = () => {
  const [isAddNewModalOpen, setIsAddNewModalOpen] = useState(false)
  const addnewModal = record => {
    setIsAddNewModalOpen(true)
  }
  const handleChange = () => {
    console.log(value)
  }
  let { column, records, isLoading, isEditModalOpen, setIsEditModalOpen } = dataSmsPhoneWhitelistTableData()
  return (
    <>
      <Space>
        <Button type="primary" onClick={addnewModal}>Add New</Button>
      </Space>

      <Table
        dataSource={records}
        columns={column}
        loading={isLoading}
        scroll={{ x: 10 }}
      />
      <ModalEdit setIsEditModalOpen={setIsEditModalOpen} isEditModalOpen={isEditModalOpen}/>
      <ModalAddNew setIsAddNewModalOpen={setIsAddNewModalOpen} isAddNewModalOpen={isAddNewModalOpen}/>
    </>
  )
}

export default SmsPhoneWhitelist
