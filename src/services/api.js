import axios from 'axios'

const BASEURL = 'http://localhost/backend-sispay-new-php/services'

export function apiGetMybankList(params) {
  try {
    const response = axios({
      method: 'post',
      url: BASEURL + '/mybank/list',
      data: params
    })
    return response
  } catch (err) {
    throw err
  }
}

export function apiGetUserList(params) {
  try {
    const response = axios({
      method: 'post',
      url: BASEURL + '/user-management/list',
      data: params
    })
    return response
  } catch (err) {
    throw err
  }
}

export function apiGetDashboard(params) {
  try {
    const response = axios({
      method: 'post',
      url: BASEURL + '/dashboard/summary',
      data: params
    })
    return response
  } catch (err) {
    throw err
  }
}

export function apiGetMyBankActive() {
  try {
    const response = axios({
      method: 'post',
      url: BASEURL + '/dashboard/mybank-active',
      data: {}
    })
    return response
  } catch (err) {
    throw err
  }
}

export function apiGetMyBankBalance() {
  try {
    const response = axios({
      method: 'post',
      url: BASEURL + '/mybank/balance',
      data: {}
    })
    return response
  } catch (err) {
    throw err
  }
}

export function apiGetMyBankLimit() {
  try {
    const response = axios({
      method: 'post',
      url: BASEURL + '/mybank/limit',
      data: {}
    })
    return response
  } catch (err) {
    throw err
  }
}

export function apiGetAgentCommission() {
  try {
    const response = axios({
      method: 'post',
      url: BASEURL + '/agent/agent-commission-balance',
      data: {}
    })
    return response
  } catch (err) {
    throw err
  }
}

export function apiGetAgentCommissionSettlement(params) {
  try {
    const response = axios({
      method: 'post',
      url: BASEURL + '/agent/commission-settlement',
      data: params
    })
    return response
  } catch (err) {
    throw err
  }
}

export function apiGetAgentCreditBalance() {
  try {
    const response = axios({
      method: 'post',
      url: BASEURL + '/agent/credit-balance',
      data: {}
    })
    return response
  } catch (err) {
    throw err
  }
}

export function apiGetAgentCreditAdjustment(params) {
  try {
    const response = axios({
      method: 'post',
      url: BASEURL + '/agent/credit-adjustment',
      data: params
    })
    return response
  } catch (err) {
    throw err
  }
}

export function apiGetAgentCreditRequest(params) {
  try {
    const response = axios({
      method: 'post',
      url: BASEURL + '/agent/credit-request-list',
      data: params
    })
    return response
  } catch (err) {
    throw err
  }
}

export function apiGetMyBankUpdateSelected(params) {
  try {
    const response = axios({
      method: 'post',
      url: BASEURL + '/mybank/update-selected',
      data: params
    })
    return response
  } catch (err) {
    throw err
  }
}

export function apiGetMerchantList() {
  try {
    const response = axios({
      method: 'post',
      url: BASEURL + '/merchant/list',
      data: {}
    })
    return response
  } catch (err) {
    throw err
  }
}

export function apiGetMerchantAcc(params) {
  try {
    const response = axios({
      method: 'post',
      url: BASEURL + '/merchant/merchant-bank-account',
      data: params
    })
    return response
  } catch (err) {
    throw err
  }
}
