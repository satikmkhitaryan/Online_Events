import React from "react";
import { Link  } from 'react-router-dom';
import classes from './tour.module.css';
import {useUserInfo} from "../../../contexts/UserProvider";
import AddToFavorites from "../addToFavorites/AddToFavorites";
import {useState} from "react";
import './tours.css';
// import axios from "axios";
import {tour1} from "../helpers/constant";
import { useTranslate} from "../../../contexts/LanguageProvider"
const Tour1=()=>{
    const {user} = useUserInfo();
    const {t} = useTranslate();
    const [success, setSuccess]=useState(false)
    //const [tour, setTour]=useState(tour1);
    const[isVisible, setisVisible]=useState(true);
    
    const deletePost=()=>{
        setisVisible(prev=>!prev);
    };
   
    // const {status, setStatus}=useState(true);
    // const deletePost =() => {
    //     axios.delete('http://localhost:3001/homepage/tour1')
    //     .then(()=>setStatus(false))
    // }


    
    
    return (
        <div className={classes.container}>
        <div className={isVisible? 'divShow': 'divHide'}>
          <div>
          <h1>{t("tour1.title")}</h1>
             <img  className={classes.tour_item} src={tour1.t_img} alt="#" />
             
             <p>{t("tour1.text")}</p> 
          </div>           
          <h3>{t("price")}{tour1.price} {t("ՀՀ դրամ")}</h3>
               <button className={classes.btn} onClick={()=>
                    setSuccess(true)
            }> 
            {t("ԱՎԵԼԱՑՆԵԼ ԶԱՄԲՅՈՒՂՈՒՄ")}                  
                </button>
                {success && <div className={classes.fav}>
                    <h3>{t("Ձեր զամբյուղը")}</h3>
                        <h4>{t("tour1.title")}</h4>
                        <p>{t("tour1.text")}</p>
                        </div>}
             {user && <AddToFavorites price={tour1.price}/>}
             
            {<div>
                <div> <Link to="/login"> {t("ԵԹԵ ՑԱՆԿԱՆՈՒՄ ԵՔ ՊԱՏՎԻՐԵԼ ՏՈՄՍ,  ՄՈՒՏՔ ԳՈՐԾԵՔ ԱՆՁՆԱԿԱՆ ԷՋ")} </Link> </div>  
            <div> <Link to="/register"> {t("ԵԹԵ ԴԵՌ ՉԵՔ ԳՐԱՆՑՎԵԼ, ՍԵՂՄԵՔ ԱՅՍՏԵՂ")} </Link> </div>
            </div>
            }                                     
               <button  style={{backgroundColor: 'rgb(241, 144, 243)', borderRadius: '45%', height: '50px', width: '70px'}} 

            className={localStorage.getItem('user')==='admin'?'show':'hide'} onClick={()=>deletePost()}>{t("Delete")}</button>
             <h4>TEST{localStorage.getItem('user')}</h4>
        </div>
    </div>
    )
}

export default Tour1

