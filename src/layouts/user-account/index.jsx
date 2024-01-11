import { Button, Table } from 'antd'
import React from 'react'
import dataAccountTableData from './data/dataaccountTableData'

const Account = () => {
  let { columns, records, isLoading } = dataAccountTableData()
  return (
    <>
      <Button type="primary">Add New</Button>
      <Table
        dataSource={records}
        columns={columns}
        loading={isLoading}
        scroll={{ x: 10 }}
      />
    </>
  )
}

export default Account
