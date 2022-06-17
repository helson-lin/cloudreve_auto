import { Config } from '../@types'
import { getConfig } from './utils'
import Http from './request'

class Cloudreve {
    config: Config
    http: Http
    constructor () {
        this.config = getConfig()
        this.http = new Http(this.config.baseUrl)
        console.log('初始化', this)
    }
}

export default Cloudreve
