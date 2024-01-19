import { Checkbox, DatePicker, Input, Select, Space, Table } from 'antd'
import React from 'react'
import dataSmsLogBalanceDifferentTableData from './data/dataSmsLogBalanceDifferentTableData'
const onChange = (date, dateString) => {
  console.log(date, dateString)
}
const handleChange = value => {
  console.log(`selected ${value}`)
}
const SmsLogBalanceDifferent = () => {
  let { column, records, isLoading } = dataSmsLogBalanceDifferentTableData()
  const { RangePicker } = DatePicker
  return (
    <>
      <Space>
        <Select
          defaultValue="1"
          style={{
            width: 200
          }}
          onChange={handleChange}
          options={[
            {
              value: '1',
              label: '<= 5.000>'
            },
            {
              value: '2',
              label: '5.001 - 10.000'
            },
            {
              value: '3',
              label: '> 10.000'
            }
          ]}
        />
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

export default SmsLogBalanceDifferent
