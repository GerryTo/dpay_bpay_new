import React from 'react'
import {
  Button,
  Checkbox,
  DatePicker,
  Select,
  Space,
  Switch,
  Table,
  TimePicker
} from 'antd'
import dataTransactionResubmitTableData from './data/dataTransactionResubmitTableData'

const TransactionResubmit = () => {
  const handleChange = value => {
    console.log(`selected ${value}`)
  }
  let { column, records, isLoading } = dataTransactionResubmitTableData()
  return (
    <>
      <Space direction="horizontal" size={'large'}>
        <Select
          style={{
            width: 250
          }}
          defaultValue={'1'}
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
        <Button type="primary">Submit</Button>
      </Space>
      <Table dataSource={records} columns={column} loading={isLoading} />
    </>
  )
}

export default TransactionResubmit
