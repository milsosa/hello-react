import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import SyncBackend from "i18next-sync-fs-backend";

i18n
  .use(SyncBackend)
  .use(initReactI18next)
  .init({
    debug: false,
    lng: 'en',
    fallbackLng: 'en',
    whitelist: ['en', 'es', 'de'],
    load: 'all',
    defaultNS: 'texts',
    ns: ['texts'],
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    initImmediate: false,
    react: {
        wait: true
    },
    backend: {
        loadPath: __dirname + "/locales/{{lng}}/{{ns}}.json"
    },
  });

export default i18n;