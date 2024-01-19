import { Card, Col, DatePicker, Row, Space, Typography } from 'antd';
const Dashboard = () => {
  const { Title } = Typography;
  const { RangePicker } = DatePicker

  return(
    <>
      <Title level={4}>Dashboard</Title>
      <div style={{paddingBottom: "1%"}}>
        <Space>
          <RangePicker onChange=""/>
        </Space>
      </div>
      <Row gutter={16}>
        <Col span={6}>
          <Card title="Total Deposit" bordered={false}>
            RM
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Total Withdraw" bordered={false}>
            RM
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Total Deposit Fee" bordered={false}>
            RM
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Total Deposit Fee" bordered={false}>
            RM
          </Card>
        </Col>
      </Row>
    </>
  )
};

export default Dashboard;
