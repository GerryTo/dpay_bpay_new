import { Select, Table, Typography, DatePicker } from 'antd'
import React from 'react'
import { Button, Popconfirm, Space, Upload } from 'antd'
import transactionbyaccountTableData from './data/transactionbyaccountTableData'

const { RangePicker } = DatePicker
const handleChange = value => {
  console.log(`selected ${value}`)
}
const onSearch = (value, _e, info) => console.log(info?.source, value)
const onChange = e => {
  console.log(`checked = ${e.target.checked}`)
}
const TransactionByAccount = () => {
  const { Title } = Typography
  let { columns, records } = transactionbyaccountTableData()
  console.log(columns, records)
  return (
    <>
      <Title level={4}>Transaction By Account</Title>

      <Space size="large">
        <RangePicker />
        <Select
          defaultValue="lucy"
          style={{
            width: 120
          }}
          onChange={handleChange}
          options={[
            {
              value: 'jack',
              label: 'Jack'
            },
            {
              value: 'lucy',
              label: 'Lucy'
            },
            {
              value: 'Yiminghe',
              label: 'yiminghe'
            },
            {
              value: 'disabled',
              label: 'Disabled',
              disabled: true
            }
          ]}
        />
        <Button type="primary">Adjustment</Button>
        <Button type="primary">Adjustment Merchant</Button>
      </Space>
      <Table dataSource={records} columns={columns} scroll={{ x: 10 }} />
      <div>
        <table style={{ width: '100%' }}>
          <tr>
            <td colSpan={'25'}>Opening Balance</td>
            <td colSpan={'25'}>0</td>
            <td colSpan={'25'}>Current Balance</td>
            <td colSpan={'25'}>0</td>
          </tr>
          <tr>
            <td colSpan={'25'}>Total Pending DB</td>
            <td colSpan={'25'}>0</td>
            <td colSpan={'25'}>Total DB</td>
            <td colSpan={'25'}>0</td>
          </tr>
          <tr>
            <td colSpan={'25'}>Total Pending CR</td>
            <td colSpan={'25'}>0</td>
            <td colSpan={'25'}>Total CR</td>
            <td colSpan={'25'}>0</td>
          </tr>
          <tr>
            <td colSpan={'25'}></td>
            <td colSpan={'25'}></td>
            <td colSpan={'25'}>Fee</td>
            <td colSpan={'25'}>0</td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default TransactionByAccount
