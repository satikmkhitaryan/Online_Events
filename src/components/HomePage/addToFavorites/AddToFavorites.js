import {useState} from "react";
import { tour1 } from "../helpers/constant";
import classes from './addToFavorites.module.css'
import { useTranslate} from "../../../contexts/LanguageProvider"


const AddToFavorites = () => {
    const [userBalance, setUserBalance] = useState(100000)
    const {t} = useTranslate();
    return (   
           
           <div className={classes.ticketBuy}>
                                   
                    <button className={classes.buyTicket} onClick={()=>{
                      setUserBalance(userBalance-tour1.price)
                   }}>{t("ԳՆԵԼ ՏՈՄՍ")}</button>
               <p>{t("ՁԵՐ ՊԱՏՎԵՐԸ ԳՐԱՆՑՎԵԼ Է , ՁԵՐ ՀԱՇՎԻ ՄՆԱՑՈՐԴԸ ԿԱԶՄՈՒՄ Է")} {userBalance} {t("ՀՀ դրամ")}</p>
            </div>    
       
    )
}

export default AddToFavorites
