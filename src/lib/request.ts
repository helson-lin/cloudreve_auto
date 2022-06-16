import request from 'request'
type RequestMethod = 'GET' | 'HEAD' | 'OPTIONS' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'TRACE';
/**
 * @description: 请求
 * @param {string} url 请求地址
 * @param {RequestMethod} method 请求方式
 * @param {string} body 请求体
 * @return {*}
 */
const http = (url: string, method: RequestMethod, body: string = ''): Promise<any> => {
    return new Promise((resolve, reject) => {
        if (typeof body !== 'string') reject(new Error('body must be a JSON string'))
        request({
            url,
            method,
            body
        }, (err, res, rep) => {
            if (err) {
                reject(err)
            }
            if (!res) reject(err)
            if (res.statusCode) {
                resolve(rep)
            }
        })
    })
}

export default http
