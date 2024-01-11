import { Checkbox, DatePicker, Input, Select, Space, Table } from 'antd'
import React from 'react'
import dataSmsLogHistoryTableData from './data/dataSmsLogHistoryTableData'
const onChange = (date, dateString) => {
  console.log(date, dateString)
}
const handleChange = value => {
  console.log(`selected ${value}`)
}
const SmsLogHistory = () => {
  let { column, records, isLoading } = dataSmsLogHistoryTableData()
  const { RangePicker } = DatePicker
  return (
    <>
      <Space direction="vertical">
        <Space>
          <RangePicker />
          <Select
            defaultValue="2"
            style={{
              width: 200
            }}
            onChange={handleChange}
            options={[
              {
                value: '1',
                label: 'All'
              },
              {
                value: '2',
                label: 'SMS Need To Check'
              },
              {
                value: '3',
                label: 'Succesfully Match'
              },
              {
                value: '4',
                label: 'Unwanted SMS'
              },
              {
                value: '5',
                label: 'SMS Balance'
              },
              {
                value: '6',
                label: 'SMS Filtered'
              }
            ]}
          />
          <Select
            defaultValue="1"
            style={{
              width: 120
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
              },
              {
                value: '4',
                label: 'Agent 4'
              },
              {
                value: '5',
                label: 'Agent 5'
              },
              {
                value: '6',
                label: 'Agent 6'
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

export default SmsLogHistory
