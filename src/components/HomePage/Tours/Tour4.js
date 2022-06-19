import React from "react";
import { Link  } from 'react-router-dom';
import {tour4, price} from "../helpers/constant";
import classes from './tour.module.css';
import {useUserInfo} from "../../../contexts/UserProvider";
import AddToFavorites from "../addToFavorites/AddToFavorites";
import {useState} from "react";
import './tours.css';
// import axios from "axios";
import { useTranslate} from "../../../contexts/LanguageProvider"
const Tour4=()=>{
    const {user} = useUserInfo();
    const {t} = useTranslate();
    const [success, setSuccess]=useState(false)
    // const {status, setStatus}=useState(true);
    // const deletePost =() => {
    //     axios.delete('http://localhost:3001/homepage/tour4')
    //     .then(()=>setStatus(false))
    // }
    const[isVisible, setisVisible]=useState(true);
    
    const deletePost=()=>{
        setisVisible(prev=>!prev);
    };
    
    return (
        <div className={classes.container}>
            <div className={isVisible? 'divShow': 'divHide'}>
          <div>
          <h1>{t("tour4.title")}</h1>
             <img  className={classes.tour_item} src={tour4.t_img} alt="#" />
             <p>{t("tour1.text")}</p> 
          </div>           
          <h3>{t("price")}{tour4.price} {t("ՀՀ դրամ")}</h3>
               <button className={classes.btn} onClick={()=>
                    setSuccess(true)
            }> 
            {t("ԱՎԵԼԱՑՆԵԼ ԶԱՄԲՅՈՒՂՈՒՄ")}                  
                </button>
                {success && <div className={classes.fav}>
                    <h3>{t("Ձեր զամբյուղը")}</h3>
                        <h4>{tour4.title}</h4>
                        {tour4.text}
                        </div>}
             {user && <AddToFavorites obj={tour4}/>}
             {<div>
                <div> <Link to="/login"> {t("ԵԹԵ ՑԱՆԿԱՆՈՒՄ ԵՔ ՊԱՏՎԻՐԵԼ ՏՈՄՍ,  ՄՈՒՏՔ ԳՈՐԾԵՔ ԱՆՁՆԱԿԱՆ ԷՋ")} </Link> </div>  
            <div> <Link to="/register"> {t("ԵԹԵ ԴԵՌ ՉԵՔ ԳՐԱՆՑՎԵԼ, ՍԵՂՄԵՔ ԱՅՍՏԵՂ")} </Link> </div>
            </div>
            }                                     
               <button  style={{backgroundColor: 'rgb(241, 144, 243)', borderRadius: '45%', height: '50px', width: '70px'}}className={sessionStorage.getItem('user')==='admin'?'show':'hide'} onClick={()=>deletePost()}>{t("Delete")}</button>
              
              
        </div>
        </div>
    )
}

export default Tour4
