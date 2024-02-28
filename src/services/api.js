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

export function apiGetAgentCreditAdjustment() {
  try {
    const response = axios({
      method: 'post',
      url: BASEURL + '/agent/credit-adjustment',
      data: {}
    })
    return response
  } catch (err) {
    throw err
  }
}
