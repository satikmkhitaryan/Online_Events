import React from 'react';
import classes from './register.module.css';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {useState} from "react";
import {baseUrl} from "../../api/api";
import axios from "axios";
import { useNavigate } from 'react-router-dom'; 
import { useTranslate} from "../../contexts/LanguageProvider"



const Register = () => {

  const [isRegisterSucceed, setIsRegisterSucceed] = useState(false);
  const navigate = useNavigate()
  const {t} = useTranslate();
    
  const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = data => {
      axios.get(`${baseUrl}/users`)
            .then(res => {
                const user = res.data.find(user => user.name === data.login)
                if (user) {
                 alert(t("Registration has been failed! You have an account"))
                    navigate('../login')
                } 
                else {
                  if(data.password !== data.repeatPassword){
                    alert(t("Registration has been failed. Passwords aren't matched"))
                  }
                  else{
                    axios.post(`${baseUrl}/users`, {
                      name: data.login,
                      password: data.password,
                     repeatPassword: data.repeatPassword
                    })
                    setIsRegisterSucceed(true)
                    setTimeout(() => {
                      navigate('../login')
                  }, 2000)
                }
                } 
          })
    } 

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <h1 className={classes.title}> {t("Create an account")}</h1>
          <label className={classes.label}>
            <h3>{t('log in')}</h3>
            <input className={classes.inputInfo} {...register("login", {
              required: t("formMessageRequired"),
              minLength: {
                value:3,
                message: t("formMessageMinLength")
              },
              maxLength: {
                value:20,
                message: t("formMessageMaxLength")
              }
            }
             )} 
             type="text" 
             
             autoComplete="username"
             placeholder={t("Enter your login")} />
          </label>
            <div className={classes.div} > 
              {errors?.login && <p>{errors?.login?.message || "Error"}</p>}
            </div>


          <label className={classes.label}>
            <h3>{t("password")}</h3>
            <input className={classes.inputInfo} {...register("password", {
              required: t("formMessageRequired"),
              minLength: {
                value:3,
                message: t("formMessageMinLength")
              },
              maxLength: {
                value:20,
                message: t("formMessageMaxLength")
              }
            }
             )} 
             type="password" 
             autoComplete="new-password"
             placeholder={t("Enter your password")}/>
          </label>
          <div className={classes.div}> 
              {errors?.password && <p>{errors?.password?.message || "Error"}</p>}
          </div>
          <label className={classes.label}>
            <h3>{t("Repeat Password")}</h3>
            <input className={classes.inputInfo} {...register("repeatPassword", {
              required: t("formMessageRequired"),
              minLength: {
                value:3,
                message: t("formMessageMinLength")
              },
              maxLength: {
                value:20,
                message: t("formMessageMaxLength")
              }
            }
             )} 
             type="password" 
             autoComplete="new-password"
             placeholder={t("Repeat Password")}/>
          </label>
          <div className={classes.div}> 
              {errors?.password && <p>{errors?.password?.message || "Error"}</p>}
          </div>

          <label>
            <input className={classes.submit} type="submit" value={t("register")} />
          </label>

          <p> <Link to="/login"> {t("If you have an account, go to login page")} </Link> </p>  
          {
            isRegisterSucceed && <p>{t("Registration has been succeessfully completed!")}</p>
          }
          {/* {
              !isRegisterSucceed  && <p>{t("Registration has been failed!")}</p>
          } */}
          
        </form>
        
  )
}

export default Register;