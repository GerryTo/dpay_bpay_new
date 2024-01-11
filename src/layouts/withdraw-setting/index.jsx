import React from 'react'
import {
  Button,
  Checkbox,
  DatePicker,
  Select,
  Space,
  Switch,
  Table,
  TimePicker
} from 'antd'
import dataWithdrawSettingTableData from './data/dataWithdrawSettingTableData'

const WithdrawSetting = () => {
  let { column, records, isLoading } = dataWithdrawSettingTableData()

  return (
    <>
      <Table
        dataSource={records}
        columns={column}
        loading={isLoading}
        scroll={{ x: 10 }}
      />
    </>
  )
}

export default WithdrawSetting
