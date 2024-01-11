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
import dataWithdrawAssignmentBulkTableData from './data/dataWithdrawAssignmentBulkTableData'

const WithdrawAssignmentBulk = () => {
  let { column, records, isLoading } = dataWithdrawAssignmentBulkTableData()
  const onChange = (date, dateString) => {
    console.log(date, dateString)
  }
  const { RangePicker } = DatePicker
  const handleChange = value => {
    console.log(`selected ${value}`)
  }

  return (
    <>
      <Space direction="horizontal" size={'large'}>
        <DatePicker onChange={onChange} />
        <TimePicker.RangePicker />
        <Select
          style={{
            width: 120
          }}
          defaultValue={'bank'}
          onChange={handleChange}
          options={[
            {
              value: 'bank',
              label: 'Bank'
            },
            {
              value: 'bkash',
              label: 'Bkash'
            },
            {
              value: 'nagad',
              label: 'Nagad'
            },
            {
              value: 'rocket',
              label: 'Rocket'
            }
          ]}
        />
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

export default WithdrawAssignmentBulk
