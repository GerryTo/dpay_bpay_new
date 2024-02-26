import React from 'react'
import dataBalanceTableData from './data/dataBalanceTableData'
import { Table } from 'antd'

const MyBankBalance = () => {
  let { column, records, isLoading } = dataBalanceTableData()
  console.log(records)
  return (
    <Table
      columns={column}
      dataSource={records}
      loading={isLoading}
      scroll={{ x: 10 }}
    />
  )
}

export default MyBankBalance
