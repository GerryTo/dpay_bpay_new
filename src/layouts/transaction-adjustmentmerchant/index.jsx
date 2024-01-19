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

const TransactionAdjustmentMerchant = () => {
  const handleChange = value => {
    console.log(`selected ${value}`)
  }
  return (
    <>
      <Space direction="vertical" size={'large'}>
        <Space direction="horizontal" size={'large'}>
          Merchant Code :
          <Select
            style={{
              width: 200
            }}
            defaultValue={'1'}
            onChange={handleChange}
            options={[
              {
                value: '1',
                label: 'Choose Merchant Code'
              },
              {
                value: '2',
                label: 'Merchant 1'
              },
              {
                value: '3',
                label: 'Merchant 2'
              }
            ]}
          />
        </Space>
        <Space direction="horizontal" size={'large'}>
          Account Bank No Admin :
          <Select
            style={{
              width: 200
            }}
            defaultValue={'1'}
            onChange={handleChange}
            options={[
              {
                value: '1',
                label: 'Choose Account No.'
              },
              {
                value: '2',
                label: 'Account 1'
              },
              {
                value: '3',
                label: 'Account 2'
              }
            ]}
          />
        </Space>
        <Space direction="horizontal" size={'large'}>
          Type :
          <Select
            style={{
              width: 200
            }}
            defaultValue={'1'}
            onChange={handleChange}
            options={[
              {
                value: '1',
                label: 'Manual Debit'
              },
              {
                value: '2',
                label: 'Manual Credit'
              }
            ]}
          />
        </Space>
        <Space direction="horizontal" size={'large'}>
          Adjustment Amount :
          <Input placeholder="Input Adjustment Amount" />
        </Space>
        <Space direction="horizontal" size={'large'}>
          Notes :
          <Input placeholder="Notes" />
        </Space>
        <Space direction="horizontal" size={'large'}>
          Actual Transaction Date :
          <DatePicker />
        </Space>
        <Button type="primary">Save</Button>
      </Space>
    </>
  )
}

export default TransactionAdjustmentMerchant
