const handlerCookie = (cookie: string): string => {
    const val = cookie.split(';')[0].split('=')[1]
    return val
}
export default { handlerCookie }
