import {
    DEV_BASE_URL,
    DEV_VERSION,
    STAGE_BASE_URL,
    STAGE_VERSION,
    PROD_BASE_URL,
    PROD_VERSION,
    USER_SERVICE_URL,
    RESTAURANT_SERVICE_URL,
    ORDER_SERVICE_URL
} from "../utils/constants"

const guid = () => {
    const nav = window.navigator;
    let guid = nav.mimeTypes.length;
    guid += nav.userAgent.replace(/\D+/g, '');
    return guid;
};

const getHeaders = (authState) => {
    if (!authState) {
        return {
            isTabletUser: false,
            "Content-Type": "application/json",
        }
    }
    const { user, anonymousUser, settings: { language } } = authState;
    let profile = anonymousUser;
    if (user && user.profile && user.profile.id) {
        profile = user
    }
    let languageCode = 'en-US'
    switch (language) {
        case 'es':
            languageCode = 'es-ES'
            break;
        case 'vi':
            languageCode = 'vi-VN'
            break;
        case 'ja':
            languageCode = 'ja-JP'
            break;
        case 'zh':
            languageCode = 'zh-CN'
            break;
    }
    const headers = {
        Authorization: profile.IdToken,
        AccessToken: profile.AccessToken,
        isTabletUser: false,
        language: languageCode,
        "Content-Type": "application/json",
    }
    return headers;
}

const generateSvg = (paths) => {
    let svg = '';
    svg += '<svg width="198px" height="55px" version="1.1" xmlns="http://www.w3.org/2000/svg">\n';

    for (let i in paths) {
        let path = '';
        path += 'M' + paths[i].mx + ' ' + paths[i].my;   // moveTo
        path += ' L ' + paths[i].lx + ' ' + paths[i].ly; // lineTo
        path += ' Z';                                    // closePath
        svg += '<path d="' + path + '"stroke="blue" stroke-width="2"/>\n';
    }
    svg += '</svg>\n';
    return svg;
}

const getURL = (service) => {
    let baseUrl
    let serviceURL
    let version
    const environment = process.env.ENVIRONMENT || 'dev'
    switch (environment) {
        case 'dev':
            baseUrl = DEV_BASE_URL
            version = DEV_VERSION
            break;
        case 'stage':
            baseUrl = STAGE_BASE_URL
            version = STAGE_VERSION
            break;
        case 'prod':
            baseUrl = PROD_BASE_URL
            version = PROD_VERSION
            break;
    }
    switch (service) {
        case 'user':
            serviceURL = USER_SERVICE_URL
            break;
        case 'restaurant':
            serviceURL = RESTAURANT_SERVICE_URL
            break;

        case 'order':
            serviceURL = ORDER_SERVICE_URL
            break;
    }
    return `${baseUrl}${serviceURL}${version}`;
}

export {
    guid,
    getHeaders,
    getURL,
    generateSvg
}