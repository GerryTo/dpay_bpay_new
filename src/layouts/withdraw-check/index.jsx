import React, { useState } from 'react'
import { Checkbox, DatePicker, Select, Space, Switch, Table } from 'antd'
import dataWithdrawCheckDataTable from './data/dataWithdrawCheckDataTable'
import ModalReassign from './components/ModalReassign'
import ModalSuccess from './components/ModalSuccess'

const WithdrawCheck = () => {
  const { RangePicker } = DatePicker
  let { column, records, isLoading, isReassignModalOpen, setIsReassignModalOpen, isSuccessModalOpen, setIsSuccessModalOpen } = dataWithdrawCheckDataTable()
  
  return (
    <>
      <Space direction="horizontal" size={'large'}>
        <RangePicker />
        <Checkbox>History</Checkbox>
      </Space>
      <Table
        dataSource={records}
        columns={column}
        loading={isLoading}
        scroll={{ x: 10 }}
      />
      {isReassignModalOpen && (<ModalReassign 
      isReassignModalOpen={isReassignModalOpen}
      setIsReassignModalOpen={setIsReassignModalOpen}/>)}
      {isSuccessModalOpen &&(<ModalSuccess 
      isSuccessModalOpen={isSuccessModalOpen} 
      setIsSuccessModalOpen={setIsSuccessModalOpen}
      />)}
    </>
  )
}

export default WithdrawCheck
