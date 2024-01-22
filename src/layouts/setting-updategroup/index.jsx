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

const SettingUpdateGroup = () => {
  const handleChange = value => {
    console.log(`selected ${value}`)
  }
  return (
    <>
      <Space direction="vertical" size={'large'}>
        <Space direction="horizontal" size={'large'}>
          Select Date
          <DatePicker />
        </Space>
        <Space direction="horizontal" size={'large'}>
          Select Account No
          <Select
            style={{
              width: 200
            }}
            defaultValue={'1'}
            onChange={handleChange}
            options={[
              {
                value: '1',
                label: 'Acc 1'
              },
              {
                value: '2',
                label: 'Acc 2'
              }
            ]}
          />
        </Space>
        <Space direction="horizontal" size={'large'}>
          Update To Group
          <Select
            style={{
              width: 200
            }}
            defaultValue={'1'}
            onChange={handleChange}
            options={[
              {
                value: '1',
                label: '1'
              },
              {
                value: '2',
                label: '2'
              }
            ]}
          />
        </Space>
        <Button onClick="" type='primary'>Submit</Button>
      </Space>
    </>
  )
}

export default SettingUpdateGroup
