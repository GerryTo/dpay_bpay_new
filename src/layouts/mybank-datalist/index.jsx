import dataListTableData from './data/dataListTableData'
import { Table } from 'antd'

const MyBankDataList = () => {
  let { column, records, isLoading } = dataListTableData()
  return <Table columns={column} dataSource={records} loading={isLoading} />
}

export default MyBankDataList
