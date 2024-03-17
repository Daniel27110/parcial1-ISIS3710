import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from 'react-intl';
import App from "./App";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

// // set the language to Spanish
// const locale = "en";
// let messsages = localeEnMessages;

// find the browser language
const locale = navigator.language.split(/[-_]/)[0];
let messsages = locale === 'es' ? localeEsMessages : locale
messsages = locale === 'en' ? localeEnMessages : localeEsMessages


ReactDOM.render(
  <IntlProvider locale={locale} messages={messsages}>
    <App />
  </IntlProvider>, document.getElementById("root")
);
