import React from 'react'
import { Button, DatePicker, Select, Space, Table } from 'antd'
import dataMerchantMasterTableData from './data/dataMerchantMasterTableData'

const MerchantMaster = () => {
  let { column, records, isLoading } = dataMerchantMasterTableData()
  return (
    <>
      <Button type="primary">Add New</Button>
      <Table dataSource={records} columns={column} loading={isLoading} />
    </>
  )
}

export default MerchantMaster
