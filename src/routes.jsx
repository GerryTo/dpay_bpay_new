//NOTE: USING ROUTE
//
//example to use route
// this for route without children
// {
//   label: "Example",
//   key: "A",
//   icon: <PieChartOutlined />,
//   element: <Dashboard />,
//   link: "/",
// }
// this for route with child/children
// {
//   label: "Example Page",
//   key: "B",
//   icon: <DesktopOutlined />,
//   children: [
//     {
//       label: "Child Example",
//       key: "B1",
//       element: <ExamplePage />,
//       link: "/example",
//     },
//     {
//       label: "Child Example 2",
//       key: "B2",
//       element: <ExamplePage />,
//       link: "/example2",
//     },
//   ],
// },

import Dashboard from './layouts/dashboard'
import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons'
import MyBankDataList from './layouts/mybank-datalist'
import MyBankUpdate from './layouts/mybank-update'
import TransactionById from './layouts/transaction-by-id'
import TransactionByAccount from './layouts/transaction-by-account'
import TransactionByAccountHistory from './layouts/transaction-by-account-history'
import MyBankBalance from './layouts/mybank-balance'
import MyBankLimit from './layouts/mybank-limit'
import ReportMonthly from './layouts/report-monthly'
import ReportDaily from './layouts/report-daily'
import BalanceDifference from './layouts/report-balancedifference'
import AccountReportDaily from './layouts/report-accountreportdaily'
import AccountReportSMS from './layouts/report-accountreportsms'
import Download from './layouts/report-download'
import Blacklist from './layouts/report-blacklist'
import Account from './layouts/user-account'
import AgentGroup from './layouts/agent-group'
import AgentCommission from './layouts/agent-commission'
import AgentCommissionSettlement from './layouts/agent-commissionsettlement'
import AgentCreditBalance from './layouts/agent-creditbalance'
import AgentCreditRequest from './layouts/agent-creditrequest'
import AgentReportTransaction from './layouts/agent-reporttransaction'
import MerchantMaster from './layouts/merchant-master'
import MerchantBankAccount from './layouts/merchant-bankaccount'
import MerchantTransaction from './layouts/merchant-transaction'
import MerchantReport from './layouts/merchant-report'
import DepositPending from './layouts/deposit-pending'
import DepositQueue from './layouts/deposit-queue'
import DepositQueueUnmatched from './layouts/deposit-queueumatched'
import DepositQueueAlert from './layouts/deposit-queuealert'
import WithdrawList from './layouts/withdraw-list'
import WithdrawCheck from './layouts/withdraw-check'
import WithdrawFilter from './layouts/withdraw-filter'
import WithdrawFilterBulk from './layouts/withdraw-filterbulk'
import WithdrawSetting from './layouts/withdraw-setting'
import WithdrawTransaction from './layouts/withdraw-transaction'
import WithdrawAssignment from './layouts/withdraw-assignment'
import WithdrawAssignmentPending from './layouts/withdraw-assignmentpending'
import WithdrawAssignmentBulk from './layouts/withdraw-assignmentbulk'
import WithdrawQueue from './layouts/withdraw-queue'

export const mockdataRoutes = [
  {
    label: 'Dashboard',
    key: 'A',
    icon: <PieChartOutlined />,
    element: <Dashboard />,
    link: '/'
  },
  {
    label: 'Quick Menu',
    key: 'B',
    icon: <DesktopOutlined />,
    children: [
      {
        label: 'MyBank ACC',
        key: 'B1',
        element: '',
        link: '/'
      },
      {
        label: 'SMS Log by Id',
        key: 'B2',
        element: '',
        link: '/'
      },
      {
        label: 'SMS Log',
        key: 'B3',
        element: '',
        link: '/'
      },
      {
        label: 'SMS Last ACK',
        key: 'B4',
        element: '',
        link: '/'
      },
      {
        label: 'Transaction By Id',
        key: 'B5',
        element: <TransactionById />,
        link: '/transaction-by-id'
      },
      {
        label: 'Withdraw Check',
        key: 'B6',
        element: '',
        link: '/'
      },
      {
        label: 'Withdraw Check Filter',
        key: 'B7',
        element: '',
        link: '/'
      },
      {
        label: 'Withdraw Check Filter Bulk',
        key: 'B8',
        element: '',
        link: '/'
      },
      {
        label: 'Withdraw Check Filter New',
        key: 'B9',
        element: '',
        link: '/'
      },
      {
        label: 'Assignment Bulk',
        key: 'B10',
        element: '',
        link: '/'
      },
      {
        label: 'Resubmit Transaction',
        key: 'B11',
        element: '',
        link: '/'
      },
      {
        label: 'Update MyBank',
        key: 'B12',
        element: '',
        link: '/'
      }
    ]
  },
  {
    label: 'MyBank ACC',
    key: 'C',
    icon: <DesktopOutlined />,
    children: [
      {
        label: 'Data List',
        key: 'C1',
        element: <MyBankDataList />,
        link: '/data-list'
      },
      {
        label: 'Data List New',
        key: 'C2',
        element: '',
        link: '/'
      },
      {
        label: 'Update MyBank',
        key: 'C3',
        element: <MyBankUpdate />,
        link: '/bank-update'
      },
      {
        label: 'MyBank Balance',
        key: 'C4',
        element: <MyBankBalance />,
        link: '/mybank-balance'
      },
      {
        label: 'MyBank Limit',
        key: 'C5',
        element: <MyBankLimit />,
        link: '/mybank-limit'
      }
    ]
  },
  {
    label: 'Report',
    key: 'D',
    icon: <DesktopOutlined />,
    children: [
      {
        label: 'Report Monthly',
        key: 'D1',
        element: <ReportMonthly />,
        link: '/report-monthly'
      },
      {
        label: 'Report Daily',
        key: 'D2',
        element: <ReportDaily />,
        link: '/report-daily'
      },
      {
        label: 'Report Daily New',
        key: 'D3',
        element: '',
        link: '/'
      },
      {
        label: 'Balance Difference',
        key: 'D4',
        element: <BalanceDifference />,
        link: '/report-balancedifference'
      },
      {
        label: 'Account Report By Transaction Daily',
        key: 'D5',
        element: <AccountReportDaily />,
        link: '/report-accountreportdaily'
      },
      {
        label: 'Account Report By Transaction Daily New',
        key: 'D6',
        element: '',
        link: '/'
      },
      {
        label: 'Account Report By Transaction Daily Realtime',
        key: 'D7',
        element: '',
        link: '/'
      },
      {
        label: 'Account Report By SMS Daily',
        key: 'D8',
        element: <AccountReportSMS />,
        link: '/report-accountreportsms'
      },
      {
        label: 'Download Report',
        key: 'D9',
        element: <Download />,
        link: '/report-download'
      },
      {
        label: 'Blacklist Report',
        key: 'D10',
        element: <Blacklist />,
        link: '/report-blacklist'
      }
    ]
  },
  {
    label: 'User Management',
    key: 'E',
    icon: <DesktopOutlined />,
    children: [
      {
        label: 'Accounts',
        key: 'E1',
        element: <Account />,
        link: '/user-account'
      }
    ]
  },
  {
    label: 'Agents',
    key: 'F',
    icon: <DesktopOutlined />,
    children: [
      {
        label: 'Agent Group',
        key: 'F1',
        element: <AgentGroup />,
        link: '/agent-group'
      },
      {
        label: 'Agent Commission',
        key: 'F2',
        element: <AgentCommission />,
        link: '/agent-commission'
      },
      {
        label: 'Agent Comm. Settlement',
        key: 'F3',
        element: <AgentCommissionSettlement />,
        link: '/agent-commissionsettlement'
      },
      {
        label: 'Agent Credit',
        key: 'F4',
        element: <AgentCreditBalance />,
        link: '/agent-creditbalance'
      },
      {
        label: 'Agent Credit Request',
        key: 'F5',
        element: <AgentCreditRequest />,
        link: '/agent-creditrequest'
      },
      {
        label: 'Agent Report Transaction',
        key: 'F6',
        element: <AgentReportTransaction />,
        link: '/agent-reporttransaction'
      }
    ]
  },
  {
    label: 'Merchant',
    key: 'G',
    icon: <DesktopOutlined />,
    children: [
      {
        label: 'Merchant Master',
        key: 'G1',
        element: <MerchantMaster />,
        link: '/merchant-master'
      },
      {
        label: 'Merchant Bank ACC',
        key: 'G2',
        element: <MerchantBankAccount />,
        link: '/merchant-bankaccount'
      },
      {
        label: 'Merchant Transaction',
        key: 'G3',
        element: <MerchantTransaction />,
        link: '/merchant-transaction'
      },
      {
        label: 'Merchant Transaction History',
        key: 'G4',
        element: <MerchantTransaction />,
        link: '/merchant-transaction'
      },
      {
        label: 'Report Merchant',
        key: 'G5',
        element: <MerchantReport />,
        link: '/merchant-report'
      }
    ]
  },
  {
    label: 'Deposits',
    key: 'H',
    icon: <DesktopOutlined />,
    children: [
      {
        label: 'Merchant Transaction Deposit',
        key: 'H1',
        element: <MerchantTransaction />,
        link: '/merchant-transaction'
      },
      {
        label: 'Deposit Pending',
        key: 'H2',
        element: <DepositPending />,
        link: '/deposit-pending'
      },
      {
        label: 'Deposit Queue Today',
        key: 'H3',
        element: <DepositQueue />,
        link: '/deposit-queue'
      },
      {
        label: 'Deposit Queue Unmatched By Date',
        key: 'H4',
        element: <DepositQueueUnmatched />,
        link: '/deposit-queueunmatched'
      },
      {
        label: 'Deposit Queue Alert',
        key: 'H5',
        element: <DepositQueueAlert />,
        link: '/deposit-queuealert'
      }
    ]
  },
  {
    label: 'Withdrawal',
    key: 'I',
    icon: <DesktopOutlined />,
    children: [
      {
        label: 'Withdraw List',
        key: 'I1',
        element: <WithdrawList />,
        link: '/withdraw-list'
      },
      {
        label: 'Withdraw Check',
        key: 'I2',
        element: <WithdrawCheck />,
        link: '/withdraw-check'
      },
      {
        label: 'Withdraw Check Filter',
        key: 'I3',
        element: <WithdrawFilter />,
        link: '/withdraw-filter'
      },
      {
        label: 'Withdraw Check Filter Bulk',
        key: 'I4',
        element: <WithdrawFilterBulk />,
        link: '/withdraw-filterbulk'
      },
      {
        label: 'Setting',
        key: 'I5',
        element: <WithdrawSetting />,
        link: '/withdraw-setting'
      },
      {
        label: 'Merchant Transaction Withdrawal',
        key: 'I6',
        element: <WithdrawTransaction />,
        link: '/withdraw-transaction'
      },
      {
        label: 'Assignment',
        key: 'I7',
        element: <WithdrawAssignment />,
        link: '/withdraw-assignment'
      },
      {
        label: 'Assignment Bulk',
        key: 'I8',
        element: <WithdrawAssignmentBulk />,
        link: '/withdraw-assignmentbulk'
      },
      {
        label: 'Assignment Pending',
        key: 'I9',
        element: <WithdrawAssignmentPending />,
        link: '/withdraw-assignmentpending'
      },
      {
        label: 'Withdraw Queue',
        key: 'I10',
        element: <WithdrawQueue />,
        link: '/withdraw-queue'
      }
    ]
  },
  {
    label: 'Transaction',
    key: 'J',
    icon: <DesktopOutlined />,
    children: [
      {
        label: 'Transaction By Id',
        key: 'J1',
        element: <TransactionById />,
        link: '/transaction-by-id'
      },
      {
        label: 'Transaction By Id Backup',
        key: 'J2',
        element: '',
        link: '/'
      },
      {
        label: 'Transaction By Id Backup (Equals)',
        key: 'J3',
        element: '',
        link: '/'
      },
      {
        label: 'Rejected Transaction Log',
        key: 'J4',
        element: '',
        link: '/'
      },
      {
        label: 'Transaction By Account',
        key: 'J5',
        element: <TransactionByAccount />,
        link: '/transaction-by-account'
      },
      {
        label: 'Transaction By Account History',
        key: 'J6',
        element: <TransactionByAccountHistory />,
        link: '/transaction-by-account-history'
      },
      {
        label: 'Transaction Resend Callback',
        key: 'J7',
        element: '',
        link: '/'
      },
      {
        label: 'Transaction Resend Callback 502',
        key: 'J8',
        element: '',
        link: '/'
      },
      {
        label: 'Transaction Completed Today',
        key: 'J9',
        element: '',
        link: '/'
      },
      {
        label: 'Transaction By Id NA',
        key: 'J10',
        element: '',
        link: '/'
      },
      {
        label: 'Transaction By Id Backup NA',
        key: 'J11',
        element: '',
        link: '/'
      },
      {
        label: 'Suspected Transaction',
        key: 'J12',
        element: '',
        link: '/'
      },
      {
        label: 'Submitted Transaction',
        key: 'J13',
        element: '',
        link: '/'
      },
      {
        label: 'Transaction Pending',
        key: 'J14',
        element: '',
        link: '/'
      },
      {
        label: 'Transaction Flag By M',
        key: 'J15',
        element: '',
        link: '/'
      },
      {
        label: 'Transaction By Not Match Sameday',
        key: 'J16',
        element: '',
        link: '/'
      },
      {
        label: 'Resubmit Transaction',
        key: 'J17',
        element: '',
        link: '/'
      },
      {
        label: 'Resubmit Transaction Log',
        key: 'J18',
        element: '',
        link: '/'
      },
      {
        label: 'Resubmit Auto Matching',
        key: 'J19',
        element: '',
        link: '/'
      },
      {
        label: 'Update Transaction',
        key: 'J20',
        element: '',
        link: '/'
      },
      {
        label: 'Update Transaction New',
        key: 'J21',
        element: '',
        link: '/'
      },
      {
        label: 'Update Transaction Log',
        key: 'J22',
        element: '',
        link: '/'
      },
      {
        label: 'Adjustment',
        key: 'J23',
        element: '',
        link: '/'
      },
      {
        label: 'Adjustment Merchant',
        key: 'J24',
        element: '',
        link: '/'
      }
    ]
  },
  {
    label: 'SMS',
    key: 'K',
    icon: <DesktopOutlined />,
    children: [
      {
        label: 'SMS Log By Id',
        key: 'K1',
        element: '',
        link: '/'
      },
      {
        label: 'SMS Criteria not Matching By Id ',
        key: 'K2',
        element: '',
        link: '/'
      },
      {
        label: 'SMS Log',
        key: 'K3',
        element: '',
        link: '/'
      },
      {
        label: 'SMS Log Backup',
        key: 'K4',
        element: '',
        link: '/'
      },
      {
        label: 'SMS Log By Balance Diff',
        key: 'K5',
        element: '',
        link: '/'
      },
      {
        label: 'SMS Log By Customer Phone',
        key: 'K6',
        element: '',
        link: '/'
      },
      {
        label: 'Suspected SMS',
        key: 'K7',
        element: '',
        link: '/'
      },
      {
        label: 'Suspected Customer',
        key: 'K8',
        element: '',
        link: '/'
      },
      {
        label: 'SMS Failed Match',
        key: 'K9',
        element: '',
        link: '/'
      },
      {
        label: 'SMS Failed Match by Not Match Sameday',
        key: 'K10',
        element: '',
        link: '/'
      },
      {
        label: 'Duplicate SMS',
        key: 'K11',
        element: '',
        link: '/'
      },
      {
        label: 'SMS Log History',
        key: 'K12',
        element: '',
        link: '/'
      },
      {
        label: 'SMS Last ACK',
        key: 'K13',
        element: '',
        link: '/'
      },
      {
        label: 'SMS Last ACK Active',
        key: 'K14',
        element: '',
        link: '/'
      },
      {
        label: 'Report SMS',
        key: 'K15',
        element: '',
        link: '/'
      },
      {
        label: 'Phone Whitelist',
        key: 'K16',
        element: '',
        link: '/'
      },
      {
        label: 'Service Center Whitelist',
        key: 'K17',
        element: '',
        link: '/'
      }
    ]
  },
  {
    label: 'Crawler',
    key: 'L',
    icon: <DesktopOutlined />,
    children: [
      {
        label: 'Crawler List',
        key: 'L1',
        element: '',
        link: '/'
      },
      {
        label: 'Account Status',
        key: 'L2',
        element: '',
        link: '/'
      },
      {
        label: 'Error Log',
        key: 'L3',
        element: '',
        link: '/'
      },
      {
        label: 'Withdraw Queue',
        key: 'L4',
        element: '',
        link: '/'
      },
      {
        label: 'Automation Failed Suspected',
        key: 'L5',
        element: '',
        link: '/'
      },
      {
        label: 'Automation Withdraw History',
        key: 'L6',
        element: '',
        link: '/'
      }
    ]
  },
  {
    label: 'Settlement',
    key: 'M',
    icon: <DesktopOutlined />,
    children: [
      {
        label: 'Settlement',
        key: 'M1',
        element: '',
        link: '/'
      },
      {
        label: 'Settlement & Topup List',
        key: 'M2',
        element: '',
        link: '/'
      }
    ]
  },
  {
    label: 'Setting',
    key: 'N',
    icon: <DesktopOutlined />,
    children: [
      {
        label: 'Update Group',
        key: 'N1',
        element: '',
        link: '/'
      },
      {
        label: 'System Setting',
        key: 'N2',
        element: '',
        link: '/'
      },
      {
        label: 'CP Journal',
        key: 'N3',
        element: '',
        link: '/'
      }
    ]
  },
  {
    label: 'Logout',
    key: 'O',
    icon: <PieChartOutlined />,
    element: '',
    link: '/'
  }
]
