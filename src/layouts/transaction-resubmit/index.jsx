import React, { useState } from 'react'
import {
  Button,
  Checkbox,
  DatePicker,
  Input,
  Select,
  Space,
  Switch,
  Table,
  TimePicker
} from 'antd'
import dataTransactionResubmitTableData from './data/dataTransactionResubmitTableData'

const TransactionResubmit = () => {
  const [selectedValue, setSelectedValue] = useState("1")
  const handleChange = value => {
    setSelectedValue(value)
  }
  let { column, records, isLoading } = dataTransactionResubmitTableData()
  return (
    <>
      <Space direction="horizontal" size={'large'}>
        <Select
          style={{
            width: 250
          }}
          defaultValue={selectedValue}
          onChange={handleChange}
          options={[
            {
              value: '1',
              label: 'Amount Less Than'
            },
            {
              value: '2',
              label: 'Phone Number Do Not Match'
            },
            {
              value: '3',
              label: 'SMS Need To Check'
            },
            {
              value: '4',
              label: 'Amount Different'
            }
          ]}
        />
        {selectedValue==="1" && <Input defaultValue={"1000"} type='number'/>}
        <Button type="primary">Submit</Button>
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

export default TransactionResubmit
