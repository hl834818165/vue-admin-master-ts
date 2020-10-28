import request from '@/http/request'

const login = (param: {username: String; password: String}) => {
    return request({
        url: `user/Index/login`,
        method: 'post',
        data: param
    })
}
const getPage = (param: {pageNo: Number, pageSize: Number}) => {
    return request({
        url: `user/Index/getPage`,
        method: 'post',
        data: param
    })
}
export {
    login,
    getPage
}