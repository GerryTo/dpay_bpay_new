import React from 'react'
import { DatePicker, Table } from 'antd'
import dataAgentCreditRequestDataTable from './data/dataAgentCreditRequestDataTable'

const AgentCreditRequest = () => {
  let { column, records, isLoading, defValue, handlerDatePicker } =
    dataAgentCreditRequestDataTable()
  const { RangePicker } = DatePicker
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
        footer={() => `Total Rows : ${records.length}`}
      />
    </>
  )
}

export default AgentCreditRequest
