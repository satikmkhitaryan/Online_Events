import {createContext, useCallback, useContext, useState} from "react";
import { getLanguage } from "../helpers/translation";

export const LANGUAGES = ["AM", "RU", "EN"];

const LanguageContext = createContext(null);
const LanguageProvider = ({children}) => {
    const [activeLanguage, setActiveLanguage] = useState(getLanguage(localStorage.getItem("language") || LANGUAGES[0]))

const changeLanguage = useCallback( lang => {
    setActiveLanguage(getLanguage(lang))
    localStorage.setItem("language", lang.toString())
},[]);

const t = useCallback(word => activeLanguage[word] || word, [activeLanguage])

    return <LanguageContext.Provider value={{changeLanguage, t}}>
        {children}
    </LanguageContext.Provider>

}

export const useTranslate = () => useContext(LanguageContext)
export default LanguageProvider;