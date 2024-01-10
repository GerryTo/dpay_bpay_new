import React from 'react'
import {
  Checkbox,
  DatePicker,
  Select,
  Space,
  Switch,
  Table,
  TimePicker
} from 'antd'
import dataWithdrawFilterDataTable from './data/dataWithdrawFilterTableData'
import dataWithdrawFilterTableData from './data/dataWithdrawFilterTableData'

const WithdrawFilter = () => {
  let { column, records, isLoading } = dataWithdrawFilterTableData()
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
      </Space>
      <Table dataSource={records} columns={column} loading={isLoading} />
    </>
  )
}

export default WithdrawFilter
