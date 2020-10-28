

import * as axios from 'axios'
declare module 'axios' {
  interface AxiosInstance {
    (config: axios.AxiosRequestConfig): Promise<any>
  }
}
export interface vuexState {
  allLimit: Array<String>,
  nowLimit: Array<String>,
  listLimit: Array<String>,
  firstPath: String,
  nowRouter: {},
  clickRouter: String,
  xToken: String
}
export interface form {
  pageNo: Number,
  pageSize: Number,
  query: {
    role: Number
  }
}
export interface tableDataType {
  expandList: Array<any>,
  dataList: Array<any>,
  total: Number,
  form: form
}