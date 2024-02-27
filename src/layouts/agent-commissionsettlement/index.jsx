import React from 'react'
import dataAgentCommissionSettlementTableData from './data/dataAgentCommissionSettlementTableData'
import { DatePicker, Table } from 'antd'

const AgentCommissionSettlement = () => {
  let {
    column,
    records,
    isLoading,
    handlerDatePicker,
    valueDateRange,
    defValue
  } = dataAgentCommissionSettlementTableData()
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

export default AgentCommissionSettlement
