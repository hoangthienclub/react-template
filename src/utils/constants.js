const DEV_BASE_URL = 'https://dev-api.qathena.com';
const STAGE_BASE_URL = 'https://stage-api.qathena.com';
const PROD_BASE_URL = 'https://api.qathena.com';

const USER_SERVICE_URL = '/user';
const RESTAURANT_SERVICE_URL = '/restaurant';
const ORDER_SERVICE_URL = '/order';

const DEV_VERSION = '';
const STAGE_VERSION = '_1.1.3';
const PROD_VERSION = '_1.1.3';

const screens = {
    SIGN_IN: 'SIGN_IN',
    MENU_LIST: 'MENU_LIST',
    MENU_ITEM_DETAILS: 'MENU_ITEM_DETAILS',
    SCAN_QR_CODE: 'SCAN_QR_CODE',
    HOME: 'HOME',
    PAYMENT_REVIEW: 'PAYMENT_REVIEW',
    INPUT_CARD: 'INPUT_CARD',
    ADD_TIP: 'ADD_TIP',
    ORDER_STATUS: 'ORDER_STATUS',
    POST_REVIEW: 'POST_REVIEW',
    ORDER_DETAILS: 'ORDER_DETAILS',
    ORDER_HISTORY: 'ORDER_HISTORY',
    CURRENT_ORDERS: 'CURRENT_ORDERS',
    PROFILE: `PROFILE`,
};

const dateTimeFormat = 'MM/DD/YYYY hh:mm A';

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 100)
    },
    signout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 100)
    }
}

export {
    DEV_BASE_URL,
    DEV_VERSION,
    STAGE_BASE_URL,
    STAGE_VERSION,
    PROD_BASE_URL,
    PROD_VERSION,
    USER_SERVICE_URL,
    RESTAURANT_SERVICE_URL,
    ORDER_SERVICE_URL,
    screens,
    dateTimeFormat,
    fakeAuth
};
