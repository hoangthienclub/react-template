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
        user: {},
        settings: {
            language: 'en',
        },
    },
    firebaseState: {}
};

export default defaultStates;
