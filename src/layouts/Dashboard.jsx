import { Card, Col, DatePicker, Row, Space, Typography } from 'antd'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import {
  apiGetCrawler,
  apiGetDashboard,
  apiGetDeposit,
  apiGetMyBankActive,
  apiGetWithdraw
} from '../services/api'
import Meta from 'antd/es/card/Meta'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'
import CountUp from 'react-countup'
import { Link } from 'react-router-dom'
import { ArrowRightOutlined } from '@ant-design/icons'

const Dashboard = () => {
  const { Title } = Typography
  const { RangePicker } = DatePicker
  const [records, setRecords] = useState([])
  const [chartData, setChartData] = useState([])
  const [myBank, setMyBank] = useState([])
  const [deposit, setDeposit] = useState([])
  const [withdraw, setWithdraw] = useState([])
  const [crawler, setCrawler] = useState([])
  const defValue = dayjs()
  const formatCurrency = value => {
    return new Intl.NumberFormat('en-MY', {
      style: 'currency',
      currency: 'MYR'
    }).format(value)
  }
  useEffect(() => {
    fetchDataByDay()
  }, [])
  useEffect(() => {
    getMyBankActive()
  }, [])
  useEffect(() => {
    getDeposit()
  }, [])
  useEffect(() => {
    getData([defValue, defValue])
  }, [])
  useEffect(() => {
    getWithdraw()
  }, [])
  useEffect(() => {
    getCrawler()
  }, [])

  async function getData(date) {
    try {
      const dateFrom = dayjs(date[0])
        .startOf('day')
        .format('YYYY-MM-DD HH:mm:ss')
      const dateTo = dayjs(date[1]).format('YYYY-MM-DD HH:mm:ss')
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
  async function fetchDataByDay() {
    const currentDate = dayjs()
    const currentYear = currentDate.year()
    const currentMonth = currentDate.month()

    const promises = []

    for (let day = 1; day <= currentDate.date(); day++) {
      const startDate = dayjs()
        .year(currentYear)
        .month(currentMonth)
        .date(day)
        .startOf('day')
      const endDate = dayjs()
        .year(currentYear)
        .month(currentMonth)
        .date(day)
        .endOf('day')

      const params = {
        datefrom: startDate.format('YYYY-MM-DD HH:mm:ss'),
        dateto: endDate.format('YYYY-MM-DD HH:mm:ss')
      }

      promises.push(apiGetDashboard(JSON.stringify(params)))
    }

    try {
      const responses = await Promise.all(promises)

      const aggregatedData = responses.reduce((acc, response) => {
        const { data } = response
        if (data.status === 'success') {
          data.data.forEach(item => {
            acc.push({
              date: dayjs(item.date).format('MMM DD, YYYY'),
              ...item
            })
          })
        }
        return acc
      }, [])

      setRecords(aggregatedData)
      const chartData = aggregatedData.map(item => {
        return {
          date: dayjs(item.date).format('MMM DD, YYYY'),
          totalDeposit: item.TotalDeposit || 0,
          totalWithdraw: item.TotalWithdraw || 0,
          totalDepositFee: item.TotalDepositFee || 0,
          totalWithdrawFee: item.TotalWithdrawFee || 0
        }
      })

      setChartData(chartData)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  async function getMyBankActive() {
    try {
      const { data } = await apiGetMyBankActive()
      const { status } = data
      if (status === 'success') {
        setMyBank(data.data)
      } else {
        console.log(status)
      }
    } catch (e) {
      console.log(e)
    }
  }

  async function getDeposit() {
    try {
      const { data } = await apiGetDeposit()
      const { status } = data
      if (status === 'success') {
        setDeposit(data.data)
      } else {
        console.log(status)
      }
    } catch (e) {
      console.log(e)
    }
  }

  async function getWithdraw() {
    try {
      const { data } = await apiGetWithdraw()
      const { status } = data
      if (status === 'success') {
        setWithdraw(data.data)
      } else {
        console.log(status)
      }
    } catch (e) {
      console.log(e)
    }
  }

  async function getCrawler() {
    try {
      const { data } = await apiGetCrawler()
      const { status } = data
      if (status === 'success') {
        setCrawler(data.data)
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
                  style={{
                    fontWeight: 'bold',
                    fontSize: '1.5rem'
                  }}
                  description={
                    <span
                      style={{
                        color: '#8884d8'
                      }}
                    >
                      <CountUp
                        start={0}
                        end={records[0]?.TotalDeposit || 0}
                        duration={2}
                        separator=","
                        decimals={2}
                        prefix="RM "
                      />
                    </span>
                  }
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card title="Total Withdraw" bordered={false}>
                <Meta
                  style={{ fontWeight: 'bold', fontSize: '1.5rem' }}
                  description={
                    <span
                      style={{
                        color: '#ff0000'
                      }}
                    >
                      <CountUp
                        start={0}
                        end={records[0]?.TotalWithdraw || 0}
                        duration={2}
                        separator=","
                        decimals={2}
                        prefix="RM "
                      />
                    </span>
                  }
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card title="Total Deposit Fee" bordered={false}>
                <Meta
                  style={{ fontWeight: 'bold', fontSize: '1.5rem' }}
                  description={
                    <span
                      style={{
                        color: '#8a2be2'
                      }}
                    >
                      <CountUp
                        start={0}
                        end={records[0]?.TotalDepositFee || 0}
                        duration={2}
                        separator=","
                        decimals={2}
                        prefix="RM "
                      />
                    </span>
                  }
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card title="Total Withdraw Fee" bordered={false}>
                <Meta
                  style={{ fontWeight: 'bold', fontSize: '1.5rem' }}
                  description={
                    <span
                      style={{
                        color: '#82ca9d'
                      }}
                    >
                      <CountUp
                        start={0}
                        end={records[0]?.TotalWithdrawFee || 0}
                        duration={2}
                        separator=","
                        decimals={2}
                        prefix="RM "
                      />
                    </span>
                  }
                />
              </Card>
            </Col>
          </>
        )}
      </Row>
      {records.length > 0 && (
        <Row>
          <Col span={24}>
            <LineChart width={1000} height={400} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis
                tick={{ fontSize: 10 }}
                width={120}
                tickFormatter={value =>
                  `RM ${value.toLocaleString('en-MY', {})}`
                }
                domain={[
                  0,
                  Math.max(...chartData.map(entry => entry.totalDeposit))
                ]}
              />

              <Tooltip formatter={value => formatCurrency(value)} />
              <Legend />
              <Line
                type="monotone"
                dataKey="totalDeposit"
                name="Total Deposit"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="totalWithdraw"
                name="Total Withdraw"
                stroke="#ff0000"
              />
              <Line
                type="monotone"
                dataKey="totalDepositFee"
                name="Total Deposit Fee"
                stroke="#8a2be2"
              />
              <Line
                type="monotone"
                dataKey="totalWithdrawFee"
                name="Total Withdraw Fee"
                stroke="#82ca9d"
              />
            </LineChart>
          </Col>
        </Row>
      )}
      <Row gutter={16}>
        <Col span={6}>
          <Link to="/mybank-datalist">
            <Card
              title="Mybank Acc Status"
              bordered={false}
              hoverable={true}
              className="card-hover"
              style={{ textAlign: 'center' }}
              onMouseEnter={() => {
                this.style.transform = 'scale(100)'
              }}
              onMouseLeave={() => {
                this.style.transform = 'scale(1)'
              }}
            >
              <Meta
                style={{
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                  textAlign: 'center'
                }}
                description={
                  <>
                    <span
                      style={{
                        color: 'green'
                      }}
                    >
                      {myBank[0]?.v_active}
                    </span>
                    <ArrowRightOutlined
                      style={{
                        position: 'absolute',
                        right: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: 'blue'
                      }}
                    />
                    <Meta
                      style={{
                        fontWeight: 'bold',
                        fontSize: '1.5rem',
                        textAlign: 'center'
                      }}
                      description={
                        <>
                          <span
                            style={{
                              color: 'red'
                            }}
                          >
                            {myBank[0]?.v_inactive}
                          </span>
                          <ArrowRightOutlined
                            style={{
                              position: 'absolute',
                              right: 0,
                              top: '50%',
                              transform: 'translateY(-50%)',
                              color: 'blue'
                            }}
                          />
                        </>
                      }
                    />
                  </>
                }
              />
            </Card>
          </Link>
        </Col>
        <Col span={6}>
          <Link to="/deposit-pending">
            <Card
              title="Deposit"
              bordered={false}
              hoverable={true}
              className="card-hover"
              style={{ textAlign: 'center' }}
              onMouseEnter={() => {
                this.style.transform = 'scale(100)'
              }}
              onMouseLeave={() => {
                this.style.transform = 'scale(1)'
              }}
            >
              <Meta
                style={{
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                  textAlign: 'center'
                }}
                description={
                  <>
                    <span
                      style={{
                        color: 'green'
                      }}
                    >
                      {deposit[0]?.v_success}
                    </span>
                    <ArrowRightOutlined
                      style={{
                        position: 'absolute',
                        right: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: 'blue'
                      }}
                    />
                    <Meta
                      style={{
                        fontWeight: 'bold',
                        fontSize: '1.5rem',
                        textAlign: 'center'
                      }}
                      description={
                        <>
                          <span
                            style={{
                              color: 'orange'
                            }}
                          >
                            {deposit[0]?.v_pending}
                          </span>
                          <ArrowRightOutlined
                            style={{
                              position: 'absolute',
                              right: 0,
                              top: '50%',
                              transform: 'translateY(-50%)',
                              color: 'blue'
                            }}
                          />
                        </>
                      }
                    />
                    <Meta
                      style={{
                        fontWeight: 'bold',
                        fontSize: '1.5rem',
                        textAlign: 'center'
                      }}
                      description={
                        <>
                          <span
                            style={{
                              color: 'red'
                            }}
                          >
                            {deposit[0]?.v_failed}
                          </span>
                          <ArrowRightOutlined
                            style={{
                              position: 'absolute',
                              right: 0,
                              top: '50%',
                              transform: 'translateY(-50%)',
                              color: 'blue'
                            }}
                          />
                        </>
                      }
                    />
                  </>
                }
              />
            </Card>
          </Link>
        </Col>
        <Col span={6}>
          <Link to="/withdraw-list">
            <Card
              title="Withdraw"
              bordered={false}
              hoverable={true}
              className="card-hover"
              style={{ textAlign: 'center' }}
              onMouseEnter={() => {
                this.style.transform = 'scale(100)'
              }}
              onMouseLeave={() => {
                this.style.transform = 'scale(1)'
              }}
            >
              <Meta
                style={{
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                  textAlign: 'center'
                }}
                description={
                  <>
                    <span
                      style={{
                        color: 'green'
                      }}
                    >
                      {withdraw[0]?.v_success}
                    </span>
                    <ArrowRightOutlined
                      style={{
                        position: 'absolute',
                        right: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: 'blue'
                      }}
                    />
                    <Meta
                      style={{
                        fontWeight: 'bold',
                        fontSize: '1.5rem',
                        textAlign: 'center'
                      }}
                      description={
                        <>
                          <span
                            style={{
                              color: 'orange'
                            }}
                          >
                            {withdraw[0]?.v_pending}
                          </span>
                          <ArrowRightOutlined
                            style={{
                              position: 'absolute',
                              right: 0,
                              top: '50%',
                              transform: 'translateY(-50%)',
                              color: 'blue'
                            }}
                          />
                        </>
                      }
                    />
                    <Meta
                      style={{
                        fontWeight: 'bold',
                        fontSize: '1.5rem',
                        textAlign: 'center'
                      }}
                      description={
                        <>
                          <span
                            style={{
                              color: 'red'
                            }}
                          >
                            {withdraw[0]?.v_failed}
                          </span>
                          <ArrowRightOutlined
                            style={{
                              position: 'absolute',
                              right: 0,
                              top: '50%',
                              transform: 'translateY(-50%)',
                              color: 'blue'
                            }}
                          />
                        </>
                      }
                    />
                  </>
                }
              />
            </Card>
          </Link>
        </Col>
        <Col span={6}>
          <Link to="/crawler-status">
            <Card
              title="Crawler"
              bordered={false}
              hoverable={true}
              className="card-hover"
              style={{ textAlign: 'center' }}
              onMouseEnter={() => {
                this.style.transform = 'scale(100)'
              }}
              onMouseLeave={() => {
                this.style.transform = 'scale(1)'
              }}
            >
              <Meta
                style={{
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                  textAlign: 'center'
                }}
                description={
                  <>
                    <span
                      style={{
                        color: 'green'
                      }}
                    >
                      {crawler?.n_ready}
                    </span>
                    <ArrowRightOutlined
                      style={{
                        position: 'absolute',
                        right: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: 'blue'
                      }}
                    />
                    <Meta
                      style={{
                        fontWeight: 'bold',
                        fontSize: '1.5rem',
                        textAlign: 'center'
                      }}
                      description={
                        <>
                          <span
                            style={{
                              color: 'blue'
                            }}
                          >
                            {crawler?.n_process}
                          </span>
                          <ArrowRightOutlined
                            style={{
                              position: 'absolute',
                              right: 0,
                              top: '50%',
                              transform: 'translateY(-50%)',
                              color: 'blue'
                            }}
                          />
                        </>
                      }
                    />
                    <Meta
                      style={{
                        fontWeight: 'bold',
                        fontSize: '1.5rem',
                        textAlign: 'center'
                      }}
                      description={
                        <>
                          <span
                            style={{
                              color: 'red'
                            }}
                          >
                            {crawler?.n_offline}
                          </span>
                          <ArrowRightOutlined
                            style={{
                              position: 'absolute',
                              right: 0,
                              top: '50%',
                              transform: 'translateY(-50%)',
                              color: 'blue'
                            }}
                          />
                        </>
                      }
                    />
                  </>
                }
              />
            </Card>
          </Link>
        </Col>
      </Row>
    </>
  )
}

export default Dashboard
