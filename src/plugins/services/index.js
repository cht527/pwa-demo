/**
 * Created by lunachi on 2018/4/19.
 */

//import Http from './http'
import HttpFetch from './httpFetch'
import Api from './api'

export default {
  install: (Vue) => {
    /* 全局api */
    Object.defineProperty(Vue.prototype, '$api', {value: Api})

    /* 数据请求 */
    Object.defineProperty(Vue.prototype, '$http', {value: HttpFetch})
  }
}
