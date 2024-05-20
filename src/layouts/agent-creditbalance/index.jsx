import React from 'react'
import dataAgentCreditBalanceTableData from './data/dataAgentCreditBalanceTableData'
import { Table } from 'antd'
import ModalAdjustIn from './components/ModalAdjustIn'
import ModalAdjustOut from './components/ModalAdjustOut'

const AgentCreditBalance = () => {
  let {
    column,
    records,
    isLoading,
    isAdjustInModalOpen,
    setIsAdjustInModalOpen,
    isAdjustOutModalOpen,
    setIsAdjustOutModalOpen
  } = dataAgentCreditBalanceTableData()
  console.log(records)
  return (
    <>
      <Table
        dataSource={records}
        columns={column}
        loading={isLoading}
        scroll={{ x: 10 }}
        footer={() => `Total Rows : ${records.length}`}
      />
      <ModalAdjustIn
        setIsAdjustInModalOpen={setIsAdjustInModalOpen}
        isAdjustInModalOpen={isAdjustInModalOpen}
      />
      <ModalAdjustOut
        setIsAdjustOutModalOpen={setIsAdjustOutModalOpen}
        isAdjustOutModalOpen={isAdjustOutModalOpen}
      />
    </>
  )
}

export default AgentCreditBalance
