import { Table } from 'antd'
import React from 'react'
import dataAgentCommissionTableData from './data/dataAgentCommissionTableData'
import Search from 'antd/es/input/Search'
const AgentCommission = () => {
  const formatCurrency = value => {
    return new Intl.NumberFormat('en-MY', {
      style: 'currency',
      currency: 'MYR'
    }).format(value)
  }
  let { column, records, isLoading, totalBalance, handleSearch } =
    dataAgentCommissionTableData()
  return (
    <>
      <Search placeholder="search" onSearch={handleSearch} />
      <Table
        dataSource={records}
        columns={column}
        loading={isLoading}
        scroll={{ x: 10 }}
        summary={() => (
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={4} align="right">
              <b>Total</b>
            </Table.Summary.Cell>
            <Table.Summary.Cell index={4}>
              <b>{formatCurrency(totalBalance)}</b>
            </Table.Summary.Cell>
          </Table.Summary.Row>
        )}
      />
    </>
  )
}

export default AgentCommission
