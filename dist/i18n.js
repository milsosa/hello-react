"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _i18next = _interopRequireDefault(require("i18next"));

var _reactI18next = require("react-i18next");

var _i18nextSyncFsBackend = _interopRequireDefault(require("i18next-sync-fs-backend"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_i18next.default.use(_i18nextSyncFsBackend.default).use(_reactI18next.initReactI18next).init({
  debug: false,
  lng: 'en',
  fallbackLng: 'en',
  whitelist: ['en', 'es', 'de'],
  load: 'all',
  defaultNS: 'texts',
  ns: ['texts'],
  interpolation: {
    escapeValue: false // not needed for react as it escapes by default

  },
  initImmediate: false,
  react: {
    wait: true
  },
  backend: {
    loadPath: __dirname + "/locales/{{lng}}/{{ns}}.json"
  }
});

var _default = _i18next.default;
exports.default = _default;