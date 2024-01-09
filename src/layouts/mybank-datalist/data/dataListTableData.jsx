import { useEffect, useState } from 'react'
import { apiGetMybankList } from '../../../services/api'
import a from '../../../tmpdata/datalist.json'
const dataListTableData = () => {
  // const [records, setRecords] = useState({})
  const [isLoading, setIsloading] = useState(false)

  // useEffect(() => {
  //   getList()
  // }, [])

  // async function getList() {
  //   try {
  //     setIsloading(true)
  //     const { data } = await apiGetMybankList()
  //     if (data.status === 'ok') {
  //       setRecords(data.records)
  //       setIsloading(false)
  //     } else {
  //       alert('error')
  //       setIsloading(false)
  //     }
  //   } catch (e) {
  //     setIsloading(false)
  //     console.log(e)
  //   }
  // }

  let tmpDataColumn = [
    {
      title: 'id',
      dataIndex: 'n_id',
      key: 'n_id'
    },
    {
      title: 'status',
      dataIndex: 'v_status',
      key: 'v_status'
    }
  ]

  return {
    column: tmpDataColumn,
    records: a,
    isLoading
  }
}

export default dataListTableData
