import React from 'react'
import {
  Button,
  Checkbox,
  DatePicker,
  Input,
  Select,
  Space,
  Switch,
  Table,
  TimePicker
} from 'antd'

const SettingSystem = () => {
  const handleChange = value => {
    console.log(`selected ${value}`)
  }
  return (
    <>
      <Space direction="vertical" size={'large'}>
        <Space direction="horizontal" size={'large'}>
          Deposit Account Selection
          <Select
            style={{
              width: 200
            }}
            defaultValue={'1'}
            onChange={handleChange}
            options={[
              {
                value: '1',
                label: 'Pre-available list New'
              },
              {
                value: '2',
                label: 'Pre-available list'
              },
              {
                value: '3',
                label: 'Round Robin'
              },
              {
                value: '4',
                label: 'Random'
              }
            ]}
          />
        </Space>
        <Space direction="horizontal" size={'large'}>
          Deposit Account Selection Max (%)
          <Input></Input>
        </Space>
        <Space direction="horizontal" size={'large'}>
          Deposit Account Selection Min (Qty)
          <Input></Input>
        </Space>
        <Space direction="horizontal" size={'large'}>
          Deposit Customer Lock (Minutes)
          <Input></Input>
        </Space>
        <Space direction="horizontal" size={'large'}>
          Enable Agent Assignment
          <Input></Input>
        </Space>
        <Space direction="horizontal" size={'large'}>
          Minimum Allowed Agent Credit
          <Input></Input>
        </Space>
        <Space direction="horizontal" size={'large'}>
          Withdraw Account Selection Max Percent
          <Input></Input>
        </Space>
        <Space direction="horizontal" size={'large'}>
          Withdraw Account Selection Min Count
          <Input></Input>
        </Space>
        <Space direction="horizontal" size={'large'}>
          Set All Apium Account
          <Switch checkedChildren="On" unCheckedChildren="Off" />
        </Space>
        <Button type="primary">Save</Button>
      </Space>
    </>
  )
}

export default SettingSystem
