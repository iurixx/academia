import { findAllLanguageLibrariesRegistered } from "../helpers/languageLibrariesHelper";

export default function useLanguageLibraries() {
  return findAllLanguageLibrariesRegistered();
}
