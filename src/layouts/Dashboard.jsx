import { Card, Col, DatePicker, Row, Space, Typography } from 'antd'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { apiGetDashboard } from '../services/api'
import Meta from 'antd/es/card/Meta'

const Dashboard = () => {
  const { Title } = Typography
  const { RangePicker } = DatePicker
  const [records, setRecords] = useState([])
  const defValue = dayjs()
  const formatCurrency = value => {
    return new Intl.NumberFormat('en-MY', {
      style: 'currency',
      currency: 'MYR'
    }).format(value)
  }
  useEffect(() => {
    getData([defValue, defValue])
  }, [])

  async function getData(date) {
    try {
      const dateFrom = dayjs(date[0]).format('YYYY-MM-DD')
      const dateTo = dayjs(date[1]).format('YYYY-MM-DD')
      const params = {
        dateto: dateTo,
        datefrom: dateFrom
      }
      const { data } = await apiGetDashboard(JSON.stringify(params))
      const { status } = data
      if (status === 'success') {
        setRecords(data.data)
      } else {
        console.log(status)
      }
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <>
      <Title level={4}>Dashboard</Title>
      <div style={{ paddingBottom: '1%' }}>
        <Space>
          <RangePicker
            defaultValue={[defValue, defValue]}
            onChange={value => getData([value[0], value[1]])}
          />
        </Space>
      </div>
      <Row gutter={16}>
        {records.length > 0 && (
          <>
            <Col span={6}>
              <Card title="Total Deposit" bordered={false}>
                <Meta
                  style={{ fontWeight: 'bold', fontSize: '1.5rem' }}
                  description={formatCurrency(records[0].TotalDeposit || 0)}
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card title="Total Withdraw" bordered={false}>
                <Meta
                  style={{ fontWeight: 'bold', fontSize: '1.5rem' }}
                  description={formatCurrency(records[0].TotalWithdraw || 0)}
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card title="Total Deposit Fee" bordered={false}>
                <Meta
                  style={{ fontWeight: 'bold', fontSize: '1.5rem' }}
                  description={formatCurrency(records[0].TotalDepositFee || 0)}
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card title="Total Withdraw Fee" bordered={false}>
                <Meta
                  style={{ fontWeight: 'bold', fontSize: '1.5rem' }}
                  description={formatCurrency(records[0].TotalWithdrawFee || 0)}
                />
              </Card>
            </Col>
          </>
        )}
      </Row>
    </>
  )
}

export default Dashboard
