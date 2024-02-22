import Search from 'antd/es/input/Search'
import ModalEdit from './components/ModalEdit'
import ModalLastTrx from './components/ModalLastTrx'
import dataListTableData from './data/dataListTableData'
import { Table } from 'antd'

const MyBankDataList = () => {
  let {
    column,
    records,
    isLoading,
    isEditModalOpen,
    setIsEditModalOpen,
    isRecord,
    setIsRecord,
    isLastTrxModalOpen,
    setIsLastTrxModalOpen,
    handleSearch
  } = dataListTableData()
  console.log(records)
  return (
    <>
      <Search placeholder='search' onSearch={handleSearch}/>
      <Table
        columns={column}
        dataSource={records}
        loading={isLoading}
        scroll={{ x: 10 }}
      />
      {isEditModalOpen && (
        <ModalEdit
          setIsEditModalOpen={setIsEditModalOpen}
          isEditModalOpen={isEditModalOpen}
          setIsRecord={setIsRecord}
          isRecord={isRecord}
        />
      )}
      {isLastTrxModalOpen && (
        <ModalLastTrx 
          setIsLastTrxModalOpen={setIsLastTrxModalOpen}
          isLastTrxModalOpen={isLastTrxModalOpen}
        />
      )}
    </>
  )
}

export default MyBankDataList
