import i18n from 'i18next';
import XHR from 'i18next-xhr-backend'; // eslint-disable-line import/no-unresolved,import/no-extraneous-dependencies
// import Cache from 'i18next-localstorage-cache';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(XHR)
  // .use(Cache)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',

    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',

    debug: true,

    // cache: {
    //   enabled: true
    // },

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ',',
      format: function func(value, format) {
        if (format === 'uppercase') return value.toUpperCase();
        return value;
      }
    }
  });


export default i18n;
