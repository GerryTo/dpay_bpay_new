import { Checkbox, DatePicker, Input, Select, Space, Table } from 'antd'
import React from 'react'
import dataSmsSuspectedTableData from './data/dataSmsSuspectedTableData'
const onChange = (date, dateString) => {
  console.log(date, dateString)
}
const handleChange = value => {
  console.log(`selected ${value}`)
}
const SmsSuspected = () => {
  let { column, records, isLoading } = dataSmsSuspectedTableData()
  const { RangePicker } = DatePicker
  return (
    <>
      <Space direction="vertical">
        <Space>
          <RangePicker />
          <Select
            defaultValue="1"
            style={{
              width: 200
            }}
            onChange={handleChange}
            options={[
              {
                value: '1',
                label: 'Agent 1'
              },
              {
                value: '2',
                label: 'Agent 2'
              },
              {
                value: '3',
                label: 'Agent 3'
              }
            ]}
          />
          <Checkbox>History</Checkbox>
        </Space>

        <Table dataSource={records} columns={column} loading={isLoading} />
      </Space>
    </>
  )
}

export default SmsSuspected
