import React from 'react'
import a from '../../../tmpdata/db.json'
export const dataSmsLastAckActiveTableData = () => {
  let tmpDataColumn = [
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username'
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone_number',
      key: 'phone_number'
    },
    {
      title: 'Alias',
      dataIndex: 'alias',
      key: 'alias'
    },

    {
      title: 'Agent Name',
      dataIndex: 'agent_name',
      key: 'agent_name'
    },
    {
      title: 'Last Ack (BDT Time)',
      dataIndex: 'last_ack_bdt',
      key: 'last_ack_bdt'
    },
    {
      title: 'Last Ack',
      dataIndex: 'last_ack',
      key: 'last_ack'
    },
    {
      title: 'Last SMS',
      dataIndex: 'last_sms',
      key: 'last_sms'
    },
    {
      title: 'Last SMS Date',
      dataIndex: 'last_sms_date',
      key: 'last_sms_date'
    },
    {
      title: 'Last SN',
      dataIndex: 'last_sn',
      key: 'last_sn'
    },
    {
      title: 'Bank Account No.',
      dataIndex: 'bank_account_no',
      key: 'bank_account_no'
    },
    {
      title: 'Bank Name',
      dataIndex: 'bank_name',
      key: 'bank_name'
    },
    {
      title: 'Bank Active',
      dataIndex: 'bank_active',
      key: 'bank_active'
    }
  ]
  return {
    column: tmpDataColumn,
    records: a
  }
}

export default dataSmsLastAckActiveTableData
