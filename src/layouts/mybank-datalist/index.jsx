import Search from 'antd/es/input/Search'
import ModalEdit from './components/ModalEdit'
import ModalLastTrx from './components/ModalLastTrx'
import dataListTableData from './data/dataListTableData'
import { Button, Input, Select, Space, Table } from 'antd'

const { option } = Select

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
    handleSearch,
    handleRefresh,
    handleColumnChange,
    searchQuery,
    searchColumn
  } = dataListTableData()
  return (
    <>
      <Space direction="horizontal">
        <Button type="primary" onClick={handleRefresh}>
          Refresh
        </Button>
        <Select
          value={searchColumn}
          onChange={handleColumnChange}
          style={{ width: 200 }}
        >
          <Option value="all">All Columns</Option>
          <Option value="v_groupname">Group</Option>
          <Option value="v_alias">Alias</Option>
          <Option value="v_bankaccountno">Account No.</Option>
          <Option value="v_bankaccountname">Account Name</Option>
          <Option value="v_bankcode">Bank</Option>
          <Option value="v_type">Type</Option>
          <Option value="v_isactive">Is Active</Option>
          <Option value="n_islocked">Is Locked</Option>
          <Option value="d_lastused">Last Used</Option>
          <Option value="n_agentCommission">Agent Commission</Option>
          <Option value="d_insert">Date Insert</Option>
        </Select>
        <Input
          placeholder="search..."
          value={searchQuery}
          onChange={e => handleSearch(e.target.value)}
        />
      </Space>
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
