import React, { useEffect, useState } from 'react'
import dataBalanceTableData from './data/dataBalanceTableData'
import { Table, Typography } from 'antd'

const MyBankBalance = () => {
  let { column, records, isLoading, totalBalance } = dataBalanceTableData()
  const formatCurrency = value => {
    return new Intl.NumberFormat('en-MY', {
      style: 'currency',
      currency: 'MYR' // Change the currency code as needed
    }).format(value)
  }
  return (
    <>
      <Table
        columns={column}
        dataSource={records}
        loading={isLoading}
        scroll={{ x: 10 }}
        summary={() => (
          <Table.Summary.Row>
            <Table.Summary.Cell index={0}>Total</Table.Summary.Cell>
            <Table.Summary.Cell index={1} colSpan={2}></Table.Summary.Cell>
            <Table.Summary.Cell index={3}>
              <Typography>{formatCurrency(totalBalance)}</Typography>
            </Table.Summary.Cell>
            {/* Adjust colSpan based on the number of other columns */}
            <Table.Summary.Cell index={5} colSpan={2}></Table.Summary.Cell>
          </Table.Summary.Row>
        )}
      />
    </>
  )
}

export default MyBankBalance
