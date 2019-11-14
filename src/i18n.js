import i18n from "i18next";
import { reactI18nextModule, initReactI18next } from "react-i18next";
import en from "./locales/en.json"
import es from "./locales/es.json"
import zh from "./locales/zh.json"
import ja from "./locales/ja.json"
import vi from "./locales/vi.json"


// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {
        translation: {
            ...en
        }
    },
    zh: {
        translation: {
            ...zh
        }
    },
    vi: {
        translation: {
            ...vi
        }
    },
    ja: {
        translation: {
            ...ja
        }
    },
    es: {
        translation: {
            ...es
        }
    }
};
console.log('ennnn', resources)

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",

        keySeparator: '.', // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;