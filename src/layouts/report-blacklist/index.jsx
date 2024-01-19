import React from 'react'
import { Select, Space, Table } from 'antd'
import dataBlacklist from './data/dataBlacklist'
import ModalDetail from './components/ModalDetail'

const Blacklist = () => {
  let { column, records, isLoading, isDetailModalOpen, setIsDetailModalOpen} = dataBlacklist()
  return (
    <>
      <Table
        dataSource={records}
        columns={column}
        loading={isLoading}
        scroll={{ x: 10 }}
      />
      <ModalDetail isDetailModalOpen={isDetailModalOpen}
      setIsDetailModalOpen={setIsDetailModalOpen} />
    </>
  )
}

export default Blacklist
