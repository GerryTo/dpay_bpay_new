import React from 'react'
import { DatePicker, Space, Table } from 'antd'
import dataAccountReportSMS from './data/dataAccountReportSMS'

const onChange = (date, dateString) => {
  console.log(date, dateString)
}

const AccountReportSMS = () => {
  let { column, records, isLoading } = dataAccountReportSMS()
  return (
    <>
      <Space direction="vertical">
        <Space>
          <DatePicker onChange={onChange} picker="date" />
        </Space>

        <Table dataSource={records} columns={column} loading={isLoading} />
      </Space>
    </>
  )
}

export default AccountReportSMS
