import request, { RequestCallback, Response } from 'request'
import { handlerCookie } from './utils'
type RequestMethod = 'GET' | 'HEAD' | 'OPTIONS' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'TRACE';

class Http {
    baseUrl: string
    cookie: { [key: string]: string }
    headers: { [key: string]: string }
    constructor (baseUrl: string) {
        this.baseUrl = baseUrl
        this.cookie = {
            'Content-Type': 'application/json'
        }
        this.headers = {}
    }

    // 拦截器
    interceptor (callback: RequestCallback, err: Error, response: Response, body: any): void {
        const cookies = response.headers['set-cookie']
        if (cookies) {
            this.cookie['cloudreve-session'] = handlerCookie(cookies[0])
        }
        callback(err, response, body)
    }

    request (url: string, method: RequestMethod, body: string = ''): Promise<any> {
        return new Promise((resolve, reject) => {
            if (typeof body !== 'string') reject(new Error('body must be a JSON string'))
            request({
                url: this.baseUrl + url,
                method,
                body
            }, this.interceptor.bind(this, (err: Error, response: Response, body: any) => {
                if (err) reject(err)
                if (response.statusCode === 200) {
                    console.log(this)
                    resolve(body)
                }
            }))
        })
    }
}

export default Http
