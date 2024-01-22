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
  let { column, records, isLoading, buttonText, setButtonText, buttonColor, setButtonColor } = dataWithdrawSettingTableData()

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
