import { useTranslation as reactTranslations } from "react-i18next";
import "../components/i18n/i18n";
import { getLocales } from "expo-localization";
import { isArray } from "lodash";
import useLanguageLibraries from "./useLanguageLibraries";
import { useCallback } from "react";

export default function useTranslation() {
  const { t, i18n } = reactTranslations();
  const availableLanguages = useLanguageLibraries();
  const locales = getLocales();

  const changeLanguage = useCallback(
    languageCode => {
      i18n.changeLanguage(languageCode);
    },
    [i18n]
  );

  const translate = useCallback(
    (str, args, options) => {
      return t(str, args, options);
    },
    [t]
  );

  const setDefaultLanguage = useCallback(() => {
    if (isArray(locales)) {
      const localLanguage = locales[0].languageTag.replace("-", "_");

      if (availableLanguages.hasOwnProperty(localLanguage)) {
        changeLanguage(localLanguage);
      }
    }
  }, [locales, availableLanguages, changeLanguage]);

  setDefaultLanguage();

  return { t: translate, changeLanguage, setDefaultLanguage };
}
