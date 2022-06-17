export type RequestMethod = 'GET' | 'HEAD' | 'OPTIONS' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'TRACE';

export interface UrlMaps {
    login: string;
    config: string;
    miniUpload: string;
    upload: string;
}

export interface Config  {
    baseUrl: string;
    userName: string;
    Password: string;
    captchaCode: string;
}
