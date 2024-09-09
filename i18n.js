import i18n from 'i18next';
import * as Localization from 'expo-localization';
import {initReactI18next} from "react-i18next";


const languageDetector = {
    type: 'languageDetector',
    async: true, 
    detect: (callback) => {
        callback(Localization.locale);

    },

    init: () => {
    },

    cacheUserLanguage: () => {
    },
};


i18n
    .use(initReactI18next) 
    .use(languageDetector)
    .init({
        fallbackLng: 'en-US',
        compatibilityJSON: 'v3',

        resources: {
            'en-US': {
                translation: {
                    signIn: 'Sign In',
                    chat: 'Chat',
                    casino: 'Casino',
                    home: 'Home',
                    deposit: 'Deposit',
                    profile: 'Profile',
                    lastWinners: 'Last Winners',
                    topWinners: 'Top Winners'
                }
            },
            ns: ['translation'],
            supportedLngs: [  
                {
                    code: 'en',
                    locale: 'English'
                }
            ],
            defaultNS: 'translation',
            interpolation: {
                escapeValue: false 
            }
        }
    })
export default i18n;