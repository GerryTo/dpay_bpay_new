import React from 'react'
import { Space, Tabs } from 'antd'
import TurnOffAllAgent from './components/turnoffallagent'
import InactiveMerchantWallet from './components/inactivemerchantwallet'
import ChangeAgentStatus from './components/changeagentstatus'
const onChange = key => {
  console.log(key)
}
const nav = [
  {
    key: '1',
    label: 'Turn Off All Agent',
    children: <TurnOffAllAgent />
  },
  {
    key: '2',
    label: 'Inactive Merchant Wallet',
    children: <InactiveMerchantWallet />
  },
  {
    key: '3',
    label: 'Change Agent Status',
    children: <ChangeAgentStatus />
  }
]
const MyBankUpdate = () => {
  return (
    <>
      <Tabs
        defaultActiveKey="1"
        items={nav}
        onChange={onChange}
        scroll={{ x: 10 }}
      />
    </>
  )
}

export default MyBankUpdate
