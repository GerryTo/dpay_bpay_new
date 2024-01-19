import React from 'react'
import a from '../../../tmpdata/db.json'
export const dataSmsLastAckTableData = () => {
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
      title: 'Last SMS (BDT Time)',
      dataIndex: 'last_sms_bdt',
      key: 'last_sms_bdt'
    },
    {
      title: 'Last SMS',
      dataIndex: 'last_sms',
      key: 'last_sms'
    },
    {
      title: 'Last SMS Content',
      dataIndex: 'last_sms_content',
      key: 'last_sms_content'
    },
    {
      title: 'Last SN',
      dataIndex: 'last_sn',
      key: 'last_sn'
    }
  ]
  return {
    column: tmpDataColumn,
    records: a
  }
}

export default dataSmsLastAckTableData
