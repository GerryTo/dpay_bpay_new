import React, { useState } from 'react'
import a from '../../../tmpdata/merchantbankaccount.json'
const dataMerchantBankAccountTableData = () => {
  const [isLoading, setIsloading] = useState(false)
  let tmpDataColumn = [
    {
      title: 'Alias',
      dataIndex: 'alias',
      key: 'alias'
    },
    {
      title: 'Account No.',
      dataIndex: 'account_no',
      key: 'account_no'
    },
    {
      title: 'Account Name',
      dataIndex: 'account_name',
      key: 'account_name'
    },
    {
      title: 'Bank',
      dataIndex: 'bank',
      key: 'bank'
    },
    {
      title: 'Login',
      dataIndex: 'login',
      key: 'login'
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type'
    },
    {
      title: 'Active',
      dataIndex: 'active',
      key: 'active'
    },
    {
      title: 'Locked',
      dataIndex: 'locked',
      key: 'locked'
    },
    {
      title: 'Last Used',
      dataIndex: 'last_used',
      key: 'last_used'
    },
    {
      title: 'Agent Commission',
      dataIndex: 'agent_commission',
      key: 'agent_commission'
    },
    {
      title: 'Group ID',
      dataIndex: 'group_id',
      key: 'group_id'
    }
  ]
  return {
    column: tmpDataColumn,
    records: a
  }
}

export default dataMerchantBankAccountTableData
