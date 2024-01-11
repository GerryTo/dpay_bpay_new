import React from 'react'
import { DatePicker, Space, Table } from 'antd'
import dataAccountReportDaily from './data/dataAccountReportDaily'

const onChange = (date, dateString) => {
  console.log(date, dateString)
}

const AccountReportDaily = () => {
  let { column, records, isLoading } = dataAccountReportDaily()
  return (
    <>
      <Space>
        <DatePicker onChange={onChange} picker="date" />
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

export default AccountReportDaily
