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

const SimulationAvailableAccount = () => {
  const handleChange = value => {
    console.log(`selected ${value}`)
  }
  return (
    <>
      <Space direction="vertical" size={'large'}>
        <Space direction="horizontal" size={'large'}>
          Total Request
          <Input defaultValue={'0'} />
        </Space>
        <Space direction="horizontal" size={'large'}>
          Bank
          <Select
            style={{
              width: 200
            }}
            defaultValue={'1'}
            onChange={handleChange}
            options={[
              {
                value: '1',
                label: 'Nagad'
              },
              {
                value: '2',
                label: 'Bkash'
              }
            ]}
          />
        </Space>
        <Space direction="horizontal" size={'large'}>
          Amount
          <Input defaultValue={'0'} />
        </Space>
        <Space direction="horizontal" size={'large'}>
          Merchant
          <Select
            style={{
              width: 200
            }}
            defaultValue={'1'}
            onChange={handleChange}
            options={[
              {
                value: '1',
                label: 'Merchant 1'
              },
              {
                value: '2',
                label: 'Merchant 2'
              }
            ]}
          />
        </Space>
        <Button type="primary">Save</Button>
      </Space>
    </>
  )
}

export default SimulationAvailableAccount
