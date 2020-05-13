import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import Text from "./components/Text";
import Html from "./Html";
import mainI18n from "./i18n";

const i18nLanguageInstances = {
    en: mainI18n,
    es: mainI18n.cloneInstance({ lng: 'es' }),
    de: mainI18n.cloneInstance({ lng: 'de' }),
};

const Hello = ({ person, i18n }) => <Text>{i18n.t('greeting', { person })}</Text>;

const Template = (props) => {
    return (
        <Hello {...props} />
    );
}

const person = { name: "Milton" };

const renderTemplate = (language = "en") => {
    const styleSheet = new ServerStyleSheet();

    const i18n = i18nLanguageInstances[language] || i18nLanguageInstances[mainI18n.language];
    try {
        const body = renderToStaticMarkup(
            styleSheet.collectStyles(<Template i18n={i18n} person={person} />)
        );
            
        const title = i18n.t('title');
        const styles = styleSheet.getStyleTags();
    
        console.log(Html({ title, styles, body }));
    } finally {
        styleSheet.seal();
    }
};

renderTemplate("de");