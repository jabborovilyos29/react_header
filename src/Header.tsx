import Styles from "./Header.module.css"
import logo from "./img/logo_svg.svg"
import locationIcon from "./img/location__icon.png"
import shevron from "./img/Vector.svg"
import { useState } from "react"


export default function Header() {
    const [checked, setChecked] = useState<boolean>(false)

    const handleCheck = () =>{
        setChecked(prev => !prev)
    }

  return (
    <header className={Styles.header}>
        <div className={Styles.header__inner}>
            <nav className={Styles.nav}>     
            <img src={logo} alt="logo" className={Styles.logo__img} /> 
            <div className={`${checked ? Styles.burger__container__active : Styles.burger__container }`}>
            <input id="burger" checked={checked} onChange={() => handleCheck()} className={Styles.burger__input} type="checkbox" />
              <label htmlFor="burger" className={Styles.burger__label}>
                   <span></span>
                   <span></span>
                   <span></span>
              </label>
            </div>
                <ul className={Styles.ul__list}>
                    <li>О нас</li>
                    <li>Офисы и банкоматы</li>
                    <li>Академия</li>
                    <li>Вакансии</li>
                </ul>     
            </nav>
            <select id="lang" className={Styles.lang__select}>
                <option value="RU">RU</option>
                <option value="ENG">ENG</option>
            </select>
        </div>
        <div className={Styles.header__inner}>
            <div className={Styles.responsive__container}>
                <div className={Styles.banner}>
                    <div className={Styles.banner__info}>
                        <p className={Styles.banner__title}>Офисы и банкоматы</p>
                        <p className={Styles.banner__description}>Найдите ближайшее отделение</p>
                    </div>
                   
                    <img src={locationIcon} alt="location" className={Styles.location__icon} />
                    
                </div>
              {checked && 
                 <ul className={Styles.responsive__ul__list}>
                    <li><p>Кредиты</p> <img src={shevron} alt="" /> </li>
                    <li><p>Хумо Онлайн</p> <img src={shevron} alt="" />  </li>
                    <li><p>Карты VISA</p> <img src={shevron} alt="" /> </li>
                    <li><p>Депозиты</p> <img src={shevron} alt="" /> </li>
                    <li><p>Денежные переводы</p> <img src={shevron} alt="" /> </li>
                    <li><p>Валюта</p> <img src={shevron} alt="" /> </li>
                    <li><p>Исламское окно</p> <img src={shevron} alt="" /> </li>                  
                </ul>
             }
             <hr className={`${Styles.header__line} ${Styles.header__line__responsive}`} />
             <ul className={Styles.responsive__ul__list}>
                    <li>О Хумо</li>
                    <li>Академия</li>
                    <li>Вакансии</li>
                </ul>   
             <hr className={`${Styles.header__line} ${Styles.header__line__responsive}`} />
             <div className={Styles.select__lang__container}>
                <p> Сменить язык</p> 
                <div className={Styles.select__lang__inner}>
                    <div className={Styles.radio__items}>
                  <input name="lang" defaultChecked  type="radio" id="RU" />
                  <label htmlFor="RU">RU</label>
                    </div>
                    <div className={Styles.radio__items}>
                         <input name="lang" type="radio" id="ENG" />
                         <label htmlFor="ENG">ENG</label>
                    </div>
                </div>
             </div>
            </div>
            </div>
        <hr className={Styles.header__line} />
        <div className={Styles.header__inner}>
            <nav className={Styles.nav}>
                <ul className={Styles.ul__list}>
                    <li>Кредиты</li>
                    <li>Хумо Онлайн</li>
                    <li>Карты VISA</li>
                    <li>Депозиты</li>
                    <li>Денежные переводы</li>
                    <li>Валюта</li>
                    <li>Исламское окно</li>
                </ul>
            </nav>
        </div>
    </header>
  )
}
