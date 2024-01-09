import React from 'react'
import dataLimitTableData from './data/dataLimitTableData'
import { Table } from 'antd'

const MyBankLimit = () => {
  let { column, records, isLoading } = dataLimitTableData()
  return <Table columns={column} dataSource={records} loading={isLoading} />
}

export default MyBankLimit
