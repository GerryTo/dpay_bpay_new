import { Button, Checkbox, DatePicker, Input, Select, Space, Table } from 'antd'
import React from 'react'
import dataSmsPhoneWhitelistTableData from './data/dataSmsPhoneWhitelistTableData'
const onChange = (date, dateString) => {
  console.log(date, dateString)
}
const handleChange = value => {
  console.log(`selected ${value}`)
}
const { RangePicker } = DatePicker
const SmsPhoneWhitelist = () => {
  let { column, records, isLoading } = dataSmsPhoneWhitelistTableData()
  return (
    <>
      <Space direction="vertical">
        <Space>
          <Button type="primary">Add New</Button>
        </Space>

        <Table
          dataSource={records}
          columns={column}
          loading={isLoading}
          scroll={{ x: 10 }}
        />
      </Space>
    </>
  )
}

export default SmsPhoneWhitelist
