import { Button, DatePicker, Select, Space, Table } from 'antd'
import React, { useState } from 'react'
import dataSettlementTableData from './data/dataSettlementTableData'
import ModalAddNew from './components/ModalAddNew'
const onChange = (date, dateString) => {
  console.log(date, dateString)
}
const handleChange = value => {
  console.log(`selected ${value}`)
}
const { RangePicker } = DatePicker
const Settlement = () => {
  const [isAddNewModalOpen, setIsAddNewModalOpen] = useState(false)
  const addnewModal = record => {
    setIsAddNewModalOpen(true)
  }
  let { column, records, isLoading } = dataSettlementTableData()
  return (
    <>
      <Space>
        <RangePicker />
        <Button type="primary" onClick={addnewModal}>Add New</Button>
      </Space>

      <Table
        dataSource={records}
        columns={column}
        loading={isLoading}
        scroll={{ x: 10 }}
      />
      <ModalAddNew setIsAddNewModalOpen={setIsAddNewModalOpen} isAddNewModalOpen={isAddNewModalOpen}/>
    </>
  )
}

export default Settlement
