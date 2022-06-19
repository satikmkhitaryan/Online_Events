import React from "react";
import { Link  } from 'react-router-dom';
import {tour6} from "../helpers/constant";
import classes from './tour.module.css';
import {useUserInfo} from "../../../contexts/UserProvider";
import AddToFavorites from "../addToFavorites/AddToFavorites";
import {useState} from "react";
import './tours.css';
// import axios from "axios";
import { useTranslate} from "../../../contexts/LanguageProvider"
const Tour6=()=>{
    const {user} = useUserInfo();
    const {t} = useTranslate();
    const [success, setSuccess]=useState(false)
    // const {status, setStatus}=useState(true);
    // const deletePost =() => {
    //     axios.delete('http://localhost:3001/homepage/tour6')
    //     .then(()=>setStatus(false))
    // }
    const[isVisible, setisVisible]=useState(true);
    
    const deletePost=()=>{
        setisVisible(prev=>!prev);
    };
    return (
        <div className={classes.container}>
            <div className={isVisible? 'divShow': 'divHide'}>
            <div className={isVisible? 'divShow': 'divHide'}>
          <div>
          <h1>{t("tour6.title")}</h1>
             <img  className={classes.tour_item} src={tour6.t_img} alt="#" />
             <p>{t("tour6.text")}</p> 
          </div>           
          <h3>{t("price")}{tour6.price} {t("ՀՀ դրամ")}</h3>
               <button className={classes.btn} onClick={()=>
                    setSuccess(true)
            }> 
            {t("ԱՎԵԼԱՑՆԵԼ ԶԱՄԲՅՈՒՂՈՒՄ")}                  
                </button>
                {success && <div className={classes.fav}>
                    <h3>{t("Ձեր զամբյուղը")}</h3>
                        <h4>{tour6.title}</h4>
                        {tour6.text}
                        </div>}
             {user && <AddToFavorites obj={tour6}/>}
             {<div>
                <div> <Link to="/login"> {t("ԵԹԵ ՑԱՆԿԱՆՈՒՄ ԵՔ ՊԱՏՎԻՐԵԼ ՏՈՄՍ,  ՄՈՒՏՔ ԳՈՐԾԵՔ ԱՆՁՆԱԿԱՆ ԷՋ")} </Link> </div>  
            <div> <Link to="/register"> {t("ԵԹԵ ԴԵՌ ՉԵՔ ԳՐԱՆՑՎԵԼ, ՍԵՂՄԵՔ ԱՅՍՏԵՂ")} </Link> </div>
            </div>
            }                                     
               <button  style={{backgroundColor: 'rgb(241, 144, 243)', borderRadius: '45%', height: '50px', width: '70px'}} className={sessionStorage.getItem('user')==='admin'?'show':'hide'} onClick={()=>deletePost()}>{t("Delete")}</button>
               
               
          </div>  
          </div>
        </div>
    )
}

export default Tour6

 