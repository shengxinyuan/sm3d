import axios from 'axios'
import { stringify } from 'qs'

// const baseUrl = 'http://192.168.147.141:8000/'
const baseUrl = '/'

const getRequest = method => {
  return ({ url, data, options = {}, isForm = true }) => {
    return axios({
      baseUrl,
      url: baseUrl + url,
      method,
      ...(method === 'POST'
        ? { data: isForm ? stringify(data) : data }
        : { }),
      params: method === 'GET' ? data : options.params,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': isForm
          ? 'application/x-www-form-urlencoded; charset=UTF-8'
          : 'application/json',
        ...options.headers
      }
    })
      .then(res => {
        if (typeof res.data !== 'object') {
          return Promise.reject(res)
        }
        if (res.data.errcode) {
          return Promise.reject(res.data)
        }

        return res.data
      })
      .catch(err => {
        return Promise.reject(err)
      })
  }
}

export const get = getRequest('GET')

export const post = getRequest('POST')
