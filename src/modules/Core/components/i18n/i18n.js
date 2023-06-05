import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { findAllLanguageLibrariesRegistered } from "../../helpers/languageLibrariesHelper";

const availableLanguages = findAllLanguageLibrariesRegistered();
i18n.use(initReactI18next).init({
  compatibilityJson: "v3",
  lng: "en_US",
  resources: availableLanguages,
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
