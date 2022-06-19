import { useForm } from "react-hook-form";
import classes from './login.module.css';
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import {baseUrl} from "../../api/api";
import axios from "axios";
import {setUser} from "../../reduxToolkit/slices/userSlice";
import {useState} from "react";
import Register from "../Register/register";
import { useTranslate} from "../../contexts/LanguageProvider"

const Login = () => {
    const [isLoginSucceed, setIsLoginSucceed] = useState(true)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {t} = useTranslate();

    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => {
        axios.get(`${baseUrl}/users`)
            .then(res => {
                const user = res.data.find(user => user.name === data.login && user.password === data.password)
                if (user) {
                    if(data.save) {
                        localStorage.setItem('user', user.name)
                    } else {
                        sessionStorage.setItem('user', user.name)
                    }
                    dispatch(setUser(data.login))
                     navigate('../homePage')
                } 
                else {
                    setIsLoginSucceed(false);
                      setTimeout(() => {
                        navigate('../register')
                        
                      }, 1000)
                    
                }
        })

        console.log('TEST1   ', localStorage.getItem('user'));
        console.log('TEST2   ', sessionStorage.getItem('user'))
  }

    return (
      <div>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>

          <h1 className={classes.title}> {t("log in")}</h1>
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
             placeholder={t("Enter your password")} />
          </label>
          <div className={classes.div}> 
              {errors?.password && <p>{errors?.password?.message || "Error"}</p>}
          </div>
          <label>
              <input type="checkbox" {...register('save')}/>
              {t("Remember me")}
          </label>
          <label>
            <input className={classes.submit} type="submit" value={t("log in")} /> 
          </label>
        </form>

        {
          isLoginSucceed || <button onClick={() => {<Register/>}}>{t("go to register")}</button>
         }
        
      </div>
    )
  }
  
  export default Login;