"use strict";

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _styledComponents = require("styled-components");

var _Text = _interopRequireDefault(require("./components/Text"));

var _Html = _interopRequireDefault(require("./Html"));

var _i18n = _interopRequireDefault(require("./i18n"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const i18nLanguageInstances = {
  en: _i18n.default,
  es: _i18n.default.cloneInstance({
    lng: 'es'
  }),
  de: _i18n.default.cloneInstance({
    lng: 'de'
  })
};

const Hello = ({
  person,
  i18n
}) => _react.default.createElement(_Text.default, null, i18n.t('greeting', {
  person
}));

const Template = props => {
  return _react.default.createElement(Hello, props);
};

const person = {
  name: "Milton"
};

const renderTemplate = (language = "en") => {
  const styleSheet = new _styledComponents.ServerStyleSheet();
  const i18n = i18nLanguageInstances[language] || i18nLanguageInstances[_i18n.default.language];

  try {
    const body = (0, _server.renderToStaticMarkup)(styleSheet.collectStyles(_react.default.createElement(Template, {
      i18n: i18n,
      person: person
    })));
    const title = i18n.t('title');
    const styles = styleSheet.getStyleTags();
    console.log((0, _Html.default)({
      title,
      styles,
      body
    }));
  } finally {
    styleSheet.seal();
  }
};

renderTemplate("de");