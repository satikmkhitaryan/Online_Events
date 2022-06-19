import QA from "./consts";
import React, { useState } from "react";
import './questions.css'
import { useTranslate} from "../../contexts/LanguageProvider"

const Questions = () => {
    const {t} = useTranslate();
    const [list, setList] = useState(QA);
    //const[displayAnswer, setDisplayAnswer]=useState(true);

    const but=(elem)=>{
      const {name} = elem.target;

      let ind = list.findIndex( elem => {
          return elem.id === Number(name);
          });
     
      let obj = list[ind];

      obj.visible = !obj.visible;
      setList((prev)=>{
        console.log('prev  ', prev.length)
              const newList=[...prev]
              console.log('newlist  ', newList.length)
              return newList
              })
    }

    return ( 
   
       
    list.map(e => {
                    return (
                        
                        <React.Fragment key={e.id}>
                            
                            <div className='questions'>
                                <p>{t("Questions:")} {t(e.question)}</p>
                                <br></br>
                                <p className={e.visible? 'answerShow': 'answerHide'}>{t("Answer:")} {t(e.answer)}</p>
                                <br></br>
                                <button onClick={but} name={e.id}>V</button>
                            </div>
                             </React.Fragment>
                            
                    )})
      
   
)}
export default Questions;