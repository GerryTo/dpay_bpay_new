import { DatePicker, Select, Space, Table } from 'antd'
import React from 'react'
import dataSettingControlPanelTableData from './data/dataSettingControlPanelTableData'
const onChange = (date, dateString) => {
  console.log(date, dateString)
}
const handleChange = value => {
  console.log(`selected ${value}`)
}
const SettingControlPanel = () => {
  let { column, records, isLoading } = dataSettingControlPanelTableData()
  return (
    <>
      <Space>
        <DatePicker onChange={onChange} />
      </Space>

      <Table
        dataSource={records}
        columns={column}
        loading={isLoading}
        scroll={{ x: 10 }}
      />
    </>
  )
}

export default SettingControlPanel
