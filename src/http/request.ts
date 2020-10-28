import axios from 'axios'
import store from '../store'
import { Message } from 'element-ui'
import { router } from '../router'
const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 5000
})

instance.interceptors.request.use((config: any) => {
    let _state: any = store.state
    if (_state.base.xToken) {
        config.headers['token'] = _state.base.xToken
    }
    return Promise.resolve(config)
}, (error: any) => {
    return Promise.reject(error)
})

instance.interceptors.response.use((response: any) => {
    let _code = response.data.code
    let _data: any = response.data
    if (_code == 200) {
        return response.data.data
    } else {
        Message({
            message: _data.data.message,
            type: _data.result
        })
        if (_code != 403 && _code != 404) {
            router.push({
                path: '/'
            })
            store.dispatch('ACT_STATE_INT')
        }
        return false
    }
}, (error: any) => {
    return Promise.reject(error)
})


export default instance