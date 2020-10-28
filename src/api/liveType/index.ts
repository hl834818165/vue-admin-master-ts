import request from '@/http/request'

const getPage = (param?: any) => {
    return request({
        url: 'liveType/Index/getPage',
        method: 'post',
        data: param
    })
}
const insertPage = (param?: any) => {
    return request({
        url: 'liveType/Index/insertPage',
        method: 'post',
        data: param
    })
}
export {
    getPage,
    insertPage
}