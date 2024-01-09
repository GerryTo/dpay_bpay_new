import React from 'react'
import dataBalanceTableData from './data/dataBalanceTableData'
import { Table } from 'antd'

const MyBankBalance = () => {
  let { column, records, isLoading } = dataBalanceTableData()
  return <Table columns={column} dataSource={records} loading={isLoading} />
}

export default MyBankBalance
