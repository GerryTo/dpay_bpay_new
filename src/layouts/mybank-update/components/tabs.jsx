import React, { useState } from 'react'
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined
} from '@ant-design/icons'
import { Menu } from 'antd'
const nav = [
  {
    label: 'Turn Off All Agents',
    key: 'nav1',
    icon: <MailOutlined />,
    children: 'asd'
  },
  {
    label: 'Inactive Merchant Wallet',
    key: 'nav2',
    icon: <AppstoreOutlined />
  },
  {
    label: 'Change Agent Status',
    key: 'nav3',
    icon: <AppstoreOutlined />
  }
]
const dataNav = () => {
  const [current, setCurrent] = useState('nav1')
  const onClick = e => {
    console.log('click', e)
    setCurrent(e.key)
  }
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={nav}
    />
  )
}
export default dataNav
