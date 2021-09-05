import axios from 'axios'
import { stringify } from 'qs'

const env = 'development'

const config = {
  // 环境变量
  env: {
    development: {
      cdn: './',
      apiBaseUrl: 'http://jcd.bavlo.com/manage'
      // apiBaseUrl: 'http://localhost:8080'
    },
    release: {
      cdn: './',
      apiBaseUrl: 'http://localhost:8080'
    }
  }
}

const getRequest = method => {
  return ({ baseUrl = config.env[env].apiBaseUrl, url, data, options = {} }) => {
    // eslint-disable-next-line no-debugger
    debugger
    console.log(url)
    return axios({
      baseUrl: baseUrl, // 请求域名地址
      method,
      url,
      ...(method === 'POST'
        ? {
          data: options.string ? stringify(data) : data
        }
        : {}),
      params: method === 'GET' ? data : options.params,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': options.string
          ? 'application/x-www-form-urlencoded'
          : 'application/json',
        ...options.headers
      },
      withCredentials: true
    })
      .then(res => {
        console.log(res)
        if (typeof res.data !== 'object') {
          return Promise.reject(res)
        }

        if (res.data.errcode) {
          if (res.data.errcode === 401) {
            window.location.href = 'login' // 登录失效跳转登录页
            return
          }
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
