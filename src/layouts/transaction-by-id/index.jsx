import { Table, Typography } from 'antd'
import Search from 'antd/es/input/Search'
import React from 'react'
import { Checkbox } from 'antd'
import { Button, Popconfirm, Space, Upload } from 'antd'
import transactionbyidTableData from './data/transactionbyidTableData'

const onChange = e => {
  console.log(`checked = ${e.target.checked}`)
}
const TransactionById = () => {
  const { Title } = Typography
  let {
    columns,
    records,
    isLoading,
    handleSearch,
    handleSimilar,
    handleHistory
  } = transactionbyidTableData()
  return (
    <>
      <Title level={4}>Transaction By Id</Title>

      <Space size="large">
        <Search
          placeholder="input search text"
          onSearch={handleSearch}
          enterButton
        />
        <Checkbox onChange={handleSimilar}>Similar Search</Checkbox>
        <Checkbox onChange={handleHistory}>History</Checkbox>
      </Space>
      <Table dataSource={records} columns={columns} scroll={{ x: 10 }} />
    </>
  )
}

export default TransactionById
