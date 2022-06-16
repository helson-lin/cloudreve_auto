
import colors from 'colors'
import http from './lib/request'
http('https://www.fastmock.site/mock/97d02717d70a2f3ab3246924ae4fa603/ssr/dep123', 'GET').then(response => {
    console.log(response)
})
console.log(colors.bgMagenta.blue(' Starting '))
