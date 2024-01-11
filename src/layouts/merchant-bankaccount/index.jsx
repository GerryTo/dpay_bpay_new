import React from 'react'
import { Button, Select, Table } from 'antd'
import dataMerchantBankAccountTableData from './data/dataMerchantBankAccountTableData'

const MerchantBankAccount = () => {
  let { column, records, isLoading } = dataMerchantBankAccountTableData()
  const handleChange = value => {
    console.log(`selected ${value}`)
  }
  return (
    <>
      <Select
        defaultValue="bank1"
        style={{
          width: 120
        }}
        onChange={handleChange}
        options={[
          {
            value: 'bank1',
            label: 'Bank 1'
          },
          {
            value: 'bank2',
            label: 'Bank 2'
          },
          {
            value: 'bank3',
            label: 'Bank 3'
          }
        ]}
      />
      <Table
        dataSource={records}
        columns={column}
        loading={isLoading}
        scroll={{ x: 10 }}
      />
    </>
  )
}

export default MerchantBankAccount
