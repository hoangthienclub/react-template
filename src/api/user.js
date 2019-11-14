import api from "./base"
import { getURL, getHeaders } from "../scripts/helpers"

const url = getURL('user');

const signIn = (authState, { email, password }, deviceId, deviceToken, refreshToken) => {
    return api.post({
        url: `${url}/user/login`,
        headers: getHeaders(authState),
        body: {
            email,
            password,
            device: {
                id: deviceId,
                token: deviceToken
            }
        }
    }, refreshToken)
}

const signOut = (authState, deviceId, refreshToken) => {
    return api.post({
        url: `${url}/user/logout`,
        headers: getHeaders(authState),
        body: {
            deviceId,
        }
    }, refreshToken)
}

const refreshToken = (token, deviceId) => {
    return api.post({
        url: `${url}/user/refresh-token`,
        headers: getHeaders(),
        body: {
            deviceId,
            token
        }
    })
}

export default {
    signIn,
    signOut,
    refreshToken
}