import { join } from 'path'
import fs from 'fs'
import { Config } from '../@types'
export const handlerCookie = (cookie: string): string => {
    const val = cookie.split(';')[0].split('=')[1]
    return val
}

export const getConfig = (): Config => {
    const path = join(process.cwd(), 'config.json')
    let config: Config
    try {
        const data = fs.readFileSync(path, 'utf8')
        config = JSON.parse(data)
    } catch (e) {
        config = {
            baseUrl: '',
            userName: '',
            Password: '',
            captchaCode: ''
        }
        fs.writeFileSync(path, JSON.stringify(config), 'utf8')
    }
    return config
}

export const getUrlMap = () => {}
