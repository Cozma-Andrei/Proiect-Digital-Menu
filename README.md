# 🍽️ Digital Menu - Expressoft

## Tasks completed:
* All 6 core tasks have been successfully implemented.
* In addition, all 4 proposed bonus tasks were also completed.

## Feature added as extra
* No extra features were implemented besides the bonus tasks, with the exception of the language selection functionality, which was listed as optional in Core Task No. 6.
* This project includes multilingual support for English and Romanian. The implementation uses `React's Context API` along with two custom hooks (`useTranslation` and `useLanguage`).
* The language setting is managed using a `LanguageContext` that stores the current language (`en` or `ro`), a `setLanguage` function to switch  the language and a `t` function to return the translated string based on a translation key. The selected language is also saved in `localStorage` so that it persists across sessions.

## Other remarks
* No external libraries were used in the development of the Digital Menu. Regarding React hooks, only `useState`, `useEffect` and `useContext` were utilized, plus the custom `useTranslation` and `useLanguage` hooks.
