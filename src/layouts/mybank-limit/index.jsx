import React from 'react'
import dataLimitTableData from './data/dataLimitTableData'
import { Table } from 'antd'
import Search from 'antd/es/input/Search'

const MyBankLimit = () => {
  let { column, records, isLoading, handleSearch, setIsloading } =
    dataLimitTableData()
  return (
    <>
      <Search placeholder="search" onSearch={handleSearch} />
      <Table
        columns={column}
        dataSource={records}
        loading={isLoading}
        scroll={{ x: 10 }}
      />
    </>
  )
}

export default MyBankLimit
