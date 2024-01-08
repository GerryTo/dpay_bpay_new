import { Table, Typography } from 'antd'
import Search from 'antd/es/input/Search'
import React from 'react'
import { Checkbox } from 'antd'
import { Button, Popconfirm, Space, Upload } from 'antd'
import transactionbyidTableData from './data/transactionbyidTableData'

const onSearch = (value, _e, info) => console.log(info?.source, value)
const onChange = e => {
  console.log(`checked = ${e.target.checked}`)
}
const TransactionById = () => {
  const { Title } = Typography
  let { columns, records } = transactionbyidTableData()
  console.log(columns, records)
  return (
    <>
      <Title level={4}>Transaction By Id</Title>

      <Space size="large">
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
        />
        <Checkbox onChange={onChange}>Similar Search</Checkbox>
        <Checkbox onChange={onChange}>History</Checkbox>
      </Space>
      <Table dataSource={records} columns={columns} scroll={{ x: 10 }} />
    </>
  )
}

export default TransactionById
