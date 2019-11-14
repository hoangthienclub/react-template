const defaultStates = {
    appState: {
        notification: {
            open: false,
            title: '',
            message: '',
            okAction: null,
        },
        stack: 0,
        showCountryCodePicker: false,
    },
    commonState: {
        phoneCodeList: [],
        phoneCode: {},
    },

    authState: {
        anonymousUser: {},
        user: {},
        settings: {
            language: 'en',
        },
    },
    firebaseState: {},
    orderState: {
        cart: {
            items: [],
        },
        activeOrder: {},
        orderDetails: {},
        newOrder: {},
        history: {
            orders: [],
        },
        currentOrders: [],
    },
    restaurantState: {},
    menuState: {},
};

export default defaultStates;
