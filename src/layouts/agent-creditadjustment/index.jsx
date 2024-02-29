import React from 'react'
import dataAgentCreditAdjustmentTableData from './data/dataAgentCreditAdjustmentTableData'
import { DatePicker, Table } from 'antd'

const AgentCreditAdjustment = () => {
  let { column, records, isLoading, defValue, handlerDatePicker } =
    dataAgentCreditAdjustmentTableData()
  const { RangePicker } = DatePicker
  console.log(records)
  return (
    <>
      <RangePicker
        defaultValue={[defValue, defValue]}
        onChange={value => {
          handlerDatePicker(value[0], value[1])
        }}
      />
      <Table
        dataSource={records}
        columns={column}
        loading={isLoading}
        scroll={{ x: 10 }}
      />
    </>
  )
}

export default AgentCreditAdjustment
