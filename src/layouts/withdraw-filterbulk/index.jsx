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
import dataWithdrawFilterBulkTableData from './data/dataWithdrawFilterBulkTableData'

const WithdrawFilterBulk = () => {
  let { column, records, isLoading } = dataWithdrawFilterBulkTableData()
  const onChange = (date, dateString) => {
    console.log(date, dateString)
  }
  const { RangePicker } = DatePicker
  const handleChange = value => {
    console.log(`selected ${value}`)
  }
  const options = []
  for (let i = 0; i < 26; i++) {
    options.push({
      label: 'a' + i,
      value: 'a' + i
    })
  }
  return (
    <>
      <Space direction="horizontal" size={'large'}>
        <DatePicker onChange={onChange} />
        <TimePicker.RangePicker />
        <Select
          style={{
            width: 300
          }}
          mode="multiple"
          allowClear
          placeholder="Please select"
          defaultValue={[]}
          onChange={handleChange}
          options={options}
        />
        <Checkbox>History</Checkbox>
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

export default WithdrawFilterBulk
