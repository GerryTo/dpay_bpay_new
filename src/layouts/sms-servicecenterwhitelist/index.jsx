import { Button, Checkbox, DatePicker, Input, Select, Space, Table } from 'antd'
import React, { useState } from 'react'
import dataSmsServiceCenterWhitelistTableData from './data/dataSmsServiceCenterWhitelistTableData'
import ModalEdit from './components/ModalEdit'
import ModalAddNew from './components/ModalAddNew'
const onChange = (date, dateString) => {
  console.log(date, dateString)
}
const handleChange = value => {
  console.log(`selected ${value}`)
}
const { RangePicker } = DatePicker
const SmsServiceCenterWhitelist = () => {
  const [isAddNewModalOpen, setIsAddNewModalOpen] = useState(false)
  const addnewModal = record => {
    setIsAddNewModalOpen(true)
  }
  let { column, records, isLoading, isEditModalOpen, setIsEditModalOpen } = dataSmsServiceCenterWhitelistTableData()
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

export default SmsServiceCenterWhitelist
