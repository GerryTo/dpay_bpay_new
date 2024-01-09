import React from 'react'
import { Select, Space, Table } from 'antd'
import dataBlacklist from './data/dataBlacklist'

const Blacklist = () => {
  let { column, records, isLoading } = dataBlacklist()
  return (
    <>
      <Table dataSource={records} columns={column} loading={isLoading} />
    </>
  )
}

export default Blacklist
