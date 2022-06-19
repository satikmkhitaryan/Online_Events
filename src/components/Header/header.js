import { NavLink } from "react-router-dom";
import classNames from "classnames";
import classes from './header.module.css';
import { useDispatch, useSelector } from "react-redux";
import { removeUser, userSelector } from "../../reduxToolkit/slices/userSlice";
import { useState } from "react";
import { LANGUAGES, useTranslate} from "../../contexts/LanguageProvider"
import { HEADER_LINKS } from "../../helpers/constants";

const Header =() => {
    const [langOption, setLangOption] = useState(LANGUAGES[0])

    const dispatch = useDispatch();
    const user = useSelector(userSelector);

    const logOut = () =>{
        sessionStorage.removeItem("user")
        localStorage.removeItem("user")
        dispatch(removeUser())
    }

    const {t, changeLanguage} = useTranslate();

    const handleChangeLang = event => {
        setLangOption(event.target.value);
        changeLanguage(event.target.value);
    }

    return (
        <header className={classes.header}>
            <div className={classes.divName}>
                {t('travel with us')}
            </div>
            <div className={classes.divPhone}>
            {t('phone')} : 033 333-333
            </div>

            <ul className={classes.ul}>
                {
                    HEADER_LINKS.map(link => {
                        if (  
                        //(link.title === "home" && ( user || (link.title === "log in" && link.title === "register" ))) ||
                        (link.title === "log in"  && user ) ||
                        (link.title === "register" && user )) {
                            return null;
                        }
                        return (
                            <li key={link.id}>
                                <NavLink className={({isActive}) => classNames(classes.link, {
                                        [classes.active]: isActive
                                    })}
                                    to={link.to}
                                >{t(link.title)}</NavLink>
                </li>
                        )
                    })
                }

            </ul>

            <div className={classes.headerInfo}>
                {user && <input className={classes.link} type="button" onClick={logOut} value={t('Log out')}/>}
                {user && <div className={classes.userLogo}>{user}</div>}
            </div>

            {/* <select value={langOption} onChange={handleChangeLang}>
                <option value="AM">{t("Armenian")}</option>
                <option value="RU">{t("Russian")}</option>
                <option value="EN">{t("English")}</option>
            </select> */}

            <div>
                <label>
                    {/* {t("Armenian")} */}
                    <input className={classes.langAM} type="button" onClick={handleChangeLang} value="AM" />
                </label>
                <label>
                   {/* {t("Russian")} */}
                    <input className={classes.langRU} type="button" onClick={handleChangeLang} value="RU" />
                </label>
                <label>
                     {/* {t("English")} */}
                    <input className={classes.langEN} type="button" onClick={handleChangeLang} value="EN" />
                </label>
            </div>
        </header>
    )
}

export default Header;