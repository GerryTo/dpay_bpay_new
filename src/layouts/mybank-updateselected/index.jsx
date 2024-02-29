import React from 'react'
import dataMybankUpdateSelectedTableData from './data/dataMybankUpdateSelectedTableData'
import { Button, Input, Select, Space, Table } from 'antd'

const MyBankUpdateSelected = () => {
  let {
    column,
    recordsToShow,
    isLoading,
    state,
    handleChange,
    handleRefresh,
    searchColumn,
    handleColumnChange,
    handleSearch,
    hasSelected,
    rowSelection,
    selectedRowKeys
  } = dataMybankUpdateSelectedTableData()
  return (
    <>
      <Space direction="vertical">
        <Space direction="horizontal">
          <Select
            value={state}
            style={{ width: 200 }}
            onChange={value => {
              handleChange(value)
            }}
          >
            <Option value="setActive">Set Active</Option>
            <Option value="setInactive">Set Inactive</Option>
            <Option value="setDeposit">Set Deposit Only</Option>
            <Option value="setWithdraw">Set Withdraw Only</Option>
            <Option value="setDepositWithdraw">Set Deposit & Withdraw</Option>
          </Select>
          <Button onClick="" disabled={!hasSelected}>
            Set
          </Button>
          <Button type="primary" onClick={handleRefresh}>
            Refresh
          </Button>
          <span
            style={{
              marginLeft: 8
            }}
          >
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </Space>
        <Space direction="horizontal">
          <Select
            value={searchColumn}
            onChange={handleColumnChange}
            style={{ width: 200 }}
          >
            <Option value="all">All</Option>
            <Option value="v_groupname">Group</Option>
            <Option value="v_alias">Alias</Option>
            <Option value="v_bankaccountno">Account No.</Option>
            <Option value="v_bankaccountname">Account Name</Option>
            <Option value="v_bankcode">Bank</Option>
            <Option value="v_userlogin">Login</Option>
            <Option value="v_type">Type</Option>
            <Option value="n_islocked">Locked</Option>
            <Option value="d_lastused">Last Used</Option>
            <Option value="n_agentCommission">Agent Commission</Option>
            <Option value="d_insert">Date Insert</Option>
          </Select>
          <Input
            placeholder="search..."
            onChange={e => {
              handleSearch(e.target.value)
            }}
          />
        </Space>
        <Table
          rowSelection={{
            ...rowSelection
          }}
          columns={column}
          dataSource={recordsToShow}
          loading={isLoading}
          scroll={{ x: 10 }}
        />
      </Space>
    </>
  )
}

export default MyBankUpdateSelected
