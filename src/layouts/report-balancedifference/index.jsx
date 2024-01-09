import React from 'react'
import dataBalanceDifferenceTableData from './data/dataBalanceDifferenceTableData'
import { DatePicker, Select, Space, Table } from 'antd'

const onChange = (date, dateString) => {
  console.log(date, dateString)
}
const handleChange = value => {
  console.log(`selected ${value}`)
}
const { RangePicker } = DatePicker
const BalanceDifference = () => {
  let { column, records, isLoading } = dataBalanceDifferenceTableData()
  return (
    <>
      <Space direction="vertical">
        <Space>
          <RangePicker />
          <Select
            defaultValue="bank1"
            style={{
              width: 120
            }}
            onChange={handleChange}
            options={[
              {
                value: 'bank1',
                label: 'Bank 1'
              },
              {
                value: 'bank2',
                label: 'Bank 2'
              },
              {
                value: 'bank3',
                label: 'Bank 3'
              }
            ]}
          />
        </Space>

        <Table dataSource={records} columns={column} loading={isLoading} />
      </Space>
    </>
  )
}

export default BalanceDifference
