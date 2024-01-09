import React from 'react'
import TransactionByAccountHistory from '../../../tmpdata/account.json'
export const dataAccountTableData = () => {
  let tmpDataColumns = [
    {
      dataIndex: 'login',
      title: 'Login'
    },
    {
      dataIndex: 'active',
      title: 'Active'
    },
    {
      dataIndex: 'type',
      title: 'Type'
    },
    {
      dataIndex: 'merchant',
      title: 'Merchant'
    },
    {
      dataIndex: 'phone_number',
      title: 'Phone Number'
    },
    {
      dataIndex: 'agent',
      title: 'Agent'
    },
    {
      dataIndex: 'alias',
      title: 'Alias'
    },
    {
      dataIndex: 'action',
      title: 'Action'
    }
  ]
  return {
    columns: tmpDataColumns,
    records: TransactionByAccountHistory
  }
}

export default dataAccountTableData
