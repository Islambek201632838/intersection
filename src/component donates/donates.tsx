import React, { useState, useEffect } from "react";
import './donates.css';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import line from './img/Line 10.png';
import HomePage from '../App';
import App from "../App";
import logo from './img/Group 50.png';
import google from './img/google.png';
import paypal from './img/PayPal.png';
import visa from './img/visa.png';
import visa2 from './img/visa2.png';
import masterCard from './img/MasterCard.png';
import arrow from './img/arrow.png';
import right_arrow from './img/right-arrow 1.png';
import line13 from './img/Line 13.png';
import line14 from './img/Line 14.png';


export let Donates = () => {

    const [lang, setLang] = useState('ru');
    const [buttonClick, setButtonClick] = useState(false);
    const [buttonClick2, setButtonClick2] = useState(true);
    const [payment, setPayment] = useState('');
    const [donationAmount, setDonationAmount] = useState('2000');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [adress, setAdress] = useState('');
    const [postcode, setPostcode] = useState('');
    const [city, setCity] = useState('');
    const [government, setGovernment] = useState('');
    const [state, setState] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [rightPage, setRightPage] = useState(1);


    const donatesDB = {
        
        heading: 'Пожертвуйте, чтобы помочь развитию и популяризации науки и интеллектуализма.',
        text1: 'Ваши пожертвования позволят нам продолжать нашу работу по исследованию взаимосвязей между экономикой, политикой и культурой. Каждое пожертвование позволит нам углубиться в темы и проводить более подробные исследования, обеспечивая лучший доступ к актуальным исследованиям и тенденциям.',
        text2: 'Вы можете сделать пожертвование, посетив наш веб-сайт. Мы ценим любую поддержку и благодарны за ваш вклад в нашу работу по пониманию сложных взаимосвязей в нашем мире. Присоединяйтесь к нам, чтобы получить уникальный взгляд на современный мир, и помогите нам продолжить делать разнообразные исследования в области экономики, политики и культуры доступными для всех ',
        text3: 'Благодарим вас за интерес к поддержке нашей работы через пожертвования. Чтобы сделать платеж, пожалуйста, выполните следующие шаги:',
        text4: '1) Перейдите на наш веб-сайт и найдите вкладку "Пожертвования"',
        text5: '2) Нажмите кнопку "Сделать пожертвование".',       
        text6: '3) Выберите сумму, которую хотели бы пожертвовать, или введите свою сумму в поле "Другое".',
        text7: '4) Выберите метод оплаты: банковскую карту или электронный кошелек, если это доступно в вашем регионе. ',        
        text8: '5) Заполните необходимые поля, включая информацию о своей банковской карте или кошельке.',        
        text9: '6) Подтвердите свое пожертвование и нажмите кнопку "Оплатить".',        
        text10: '7) Дождитесь подтверждения об успешном платеже.',           
        text11: 'После завершения платежа, вы получите электронное письмо с подтверждением вашего пожертвования и квитанцией об оплате. Ваше пожертвование будет использовано для поддержки нашей работы по исследованию взаимосвязей между экономикой, политикой и культурой. ',       
        text12: 'Если у вас возникли какие-либо вопросы, не стесняйтесь связаться с нашей командой поддержки. Спасибо еще раз за вашу поддержку!'      
               
    } 

    const donatesDBeng = {
        heading: 'Donate to help develop and popularize science and intellectualism.',
        text1: 'Your donations will allow us to continue our work on the study of the interrelationships between economics, politics and culture. Each donation will allow us to delve deeper into the topics and conduct more detailed research, providing better access to current research and trends.',
        text2: 'You can donate by visiting our website. We appreciate any support and are grateful for your contribution to our work on understanding the complex relationships in our world. Join us to get a unique look at the modern world, and help us continue to make a variety of studies in the field of economics, politics and culture accessible to everyone ',
        text3: 'Thank you for your interest in supporting our work through donations. To make a payment, please follow these steps:',
        text4: '1) Go to our website and find the Donations tab',
        text5: '2) Click the "Donate" button.',       
        text6: '3) Select the amount you would like to donate, or enter your amount in the "Other" field.',
        text7: '4) Choose a payment method: bank card or e-wallet, if it is available in your region. ',        
        text8: '5) Fill in the required fields, including information about your bank card or wallet.',        
        text9: '6) Confirm your donation and click the "Pay" button.',        
        text10: '7) Wait for confirmation of successful payment.',           
        text11: 'After the payment is completed, you will receive an email confirming your donation and a payment receipt. Your donation will be used to support our work on the study of the interrelationships between economics, politics and culture. ',       
        text12: 'If you have any questions, feel free to contact our support team. Thank you again for your support!'
    }
    


return (
    
    <>
    <div className="center">
            
      <Link to = '/'><img src={logo} className="logoDonates" alt="" /></Link> 
       
    </div>

       <div className="mainDivs">

            <div className="leftside">

                <h1 className="donatesHeading">  {lang === 'ru' ? donatesDB.heading : donatesDBeng.heading } </h1>
                <p className="donatesText">  {lang === 'ru' ? donatesDB.text1 : donatesDBeng.text1 }  </p>
                <p className="donatesText">  {lang === 'ru' ? donatesDB.text2 : donatesDBeng.text2 }  </p>
                    
            </div>
            
        {rightPage==1 ? <RightSide/> : null}

        {rightPage==2 ? <RightSide2 payment={payment} donationAmount={donationAmount}/> : null}
                    
        
        {rightPage== 3  ? <RightSide3 name = {name}
                                      surname = {surname}
                                      email = {email}
                                      adress = {adress}
                                      postcode = {postcode}
                                      city = {city}
                                      government = {government}
                                      state = {state}
                                      phoneNumber = {phoneNumber}
                                      
                            /> : null}




       </div>

    <div style={{display:'grid', placeItems: 'center'}}> <img className = "lineBr" src={line} alt="" /> </div>
      


            <div className="footerCenter">
                <div className="footerWrapper">

                    <p className="donatesFooter">  {lang === 'ru' ? donatesDB.text3 : donatesDBeng.text3 }  </p>
                    <p className="donatesFooter">  {lang === 'ru' ? donatesDB.text4 : donatesDBeng.text4 }  </p>
                    <p className="donatesFooter">  {lang === 'ru' ? donatesDB.text5 : donatesDBeng.text5 }  </p>
                    <p className="donatesFooter">  {lang === 'ru' ? donatesDB.text6 : donatesDBeng.text6 }  </p>
                    <p className="donatesFooter">  {lang === 'ru' ? donatesDB.text7 : donatesDBeng.text7 }  </p>
                    <p className="donatesFooter">  {lang === 'ru' ? donatesDB.text8 : donatesDBeng.text8 }  </p>
                    <p className="donatesFooter">  {lang === 'ru' ? donatesDB.text9 : donatesDBeng.text9 }  </p>
                    <p className="donatesFooter">  {lang === 'ru' ? donatesDB.text10 : donatesDBeng.text10 }  </p>
                    <p className="donatesFooter">  {lang === 'ru' ? donatesDB.text11 : donatesDBeng.text11 }  </p>
                    <p className="donatesFooter">  {lang === 'ru' ? donatesDB.text12 : donatesDBeng.text12 }  </p>
                
                </div>
            </div>
    
    </>) 
    
    
    function RightSide() {
        return (

        <div className="rightside">
                
        <p className="rightText1">Выберите сумму</p>
        <p className="rightText2">Tne Intersection Corporation (TIC) Ваш вклад пойдет на пользу.</p>
        
        <div className="priceboxes">

            <div onClick={() => setDonationAmount('2000')} 
                className={donationAmount=='2000' ?"pricebox1Active":"pricebox1"}>2000₸  </div>

            <div onClick={() => setDonationAmount('10,000')} 
                className={donationAmount=='10,000' ?"pricebox2Active":"pricebox2"}>10,000₸ </div>

            <div onClick={() => setDonationAmount('25,000')} 
                className={donationAmount=='25,000' ?"pricebox2Active":"pricebox2"}>25,000₸ </div>

            <div onClick={() => setDonationAmount('100,000')} 
                className={donationAmount=='100,000' ?"pricebox3Active":"pricebox3"}>100,000₸ <br /> </div>
            
            <div className="pricebox5"> 
                    <div className="inputbox">
                        <input type="text"
                            onChange={e => setDonationAmount(e.target.value)} 
                            value={donationAmount}
                            
                            className="inputbox2"/>₸</div> </div>
                            
            
            </div>

        <p className="rightText3">Делайте это ежемесячно !</p>
        
        <button onClick={() => [setButtonClick(true), setButtonClick2(false)]}
                className={buttonClick ?"button1Active" :"button1"} >
                
                <p>✓</p>

                <img src={arrow} 
                     className="arrow"      
                     alt="" />

            Да, рассчитывайте на меня !</button>

        <button onClick={() => [setButtonClick(false), setButtonClick2(true)]} 
                className={buttonClick2 ? "button2Active" :"button2"}> 
                <p>✓</p>
            Нет, пожертвовать один раз
        </button>
        
        
        
        <div className="rightText4"> <p>Начните ежемесячное пожертвование сегодня, чтобы инвестировать в развитие и популяризацию науки и интеллектуализма.</p>  </div>
    
       
        
        <button onClick={() => [setPayment('googlePay'), setRightPage(2)]} className="cardbox1">

            <img src={google} className="google" alt="" />
            <p className="pay">Pay</p>

        </button>

        <button onClick={() => [setPayment('PayPal'), setRightPage(2)]} className="cardbox2">

            <img src={paypal} className="paypal" alt="" /> 

        </button>
    
        <button onClick={() => [setPayment('картой'), setRightPage(2)]} className="cardbox3">

            <img src={visa} className="visa" alt="" />
            <img src={masterCard} className="masterCard" alt="" />
            <p>Оплата картой</p>

        </button>

        </div> )
        
    }

    function RightSide2(props:any) {

        return (


            <div className="rightside2">
                <div className="rightside2_text">
    
                    <p  onClick={() => [setRightPage(1)]} 
                        className="rightside2_text2">
                            <p className="rightside2_text1">✓</p>
                                Сумма {props.donationAmount}₸</p>

                    <p className="rightside2_text3">2)Подробности</p>

                    <p className="rightside2_text4">3)Оплата</p>

                    <img src={line13} alt="" className="line13" />

                    <img src={line14} alt="" className="line14"/>

                    <p className="rightside2_text5">Завершите свой взнос в размере 250 долларов:</p>
                   
                    <p className="rightside2_text6">* Все поля обязательны, если не указано иное.</p>
                   
                    <input 
                            className="inputBox1" 
                            placeholder='Эл.адрес'
                            value={email} 
                            onChange={e =>setEmail(e.target.value)}
                            type="text" />

                          <p>{email}</p>

                    <input className="inputBox2" 
                           placeholder='Имя' 
                           value={name}
                           onChange={e => setName(e.target.value)}
                           type="text" 
                           />

                    <input className="inputBox3" 
                           placeholder='Фамилия'
                           value={surname} 
                           onChange={e => setSurname(e.target.value)}
                           type="text" />

                    <input className="inputBox4" 
                           placeholder='Номер, улица, квартира'
                           value={adress}
                           onChange={e => setAdress(e.target.value)}
                           type="text" />

                    <input className="inputBox5" 
                           placeholder='Почтовый индекс'
                           value={postcode}
                           onChange={e => setPostcode(e.target.value)}
                           type="text" />

                    <input className="inputBox6" 
                           placeholder='Город' 
                           value={city}
                           onChange={e => setCity(e.target.value)}
                           type="text" />

                    <input className="inputBox7" 
                           placeholder='Штат' 
                           value={state}
                           onChange={e => setState(e.target.value)}
                           type="text" />

                    <input className="inputBox8" 
                           placeholder='Государство'
                           value={government}
                           onChange={e => setGovernment(e.target.value)} 
                           type="text" />

                    <input className="inputBox9" 
                           placeholder='Мобильный телефон'
                           value = {phoneNumber} 
                           onChange={e => setPhoneNumber(e.target.value)} 
                           type="text" />

                    <div onClick={() => setRightPage(3)}
                        className="paymentBox">Оплата {props.payment}</div>
            
            </div>  
            
    
        </div>

        )

    }

    function RightSide3(props:any) {

        return ( 
        
        <div className="rightside3">

            <p className="rightside3_text1">TIC пожертвование</p>
            <p className="rightside3_text2">Информация о вас</p>
            
            <div className="rightside3_text3">
                <p>{props.name} {props.surname}</p>
                <p>{props.email}</p>
                <p>{props.phoneNumber}</p>
                <p>{props.adress} {props.postcode}</p>
            </div>

            <p  onClick={() => [setRightPage(2), setName(''), setSurname(''),
                                setCity(''), setPhoneNumber(''), setGovernment(''),
                                setState(''), setEmail(''), setPostcode(''),
                                setAdress('')]
                                }
                className="rightside3_text4" >Исправить <img src = {right_arrow} alt="" /></p>

        
        <p className = "rightside3_text5">Способ оплаты</p>
        
        <div style={{display:'flex', alignItems: 'center'}}>
            <input className="rightside3_radio"  type="radio"/> 
                <img className= "rightside3_visa" src={visa2} alt="" /> <img className= "rightside3_masterCard" src={masterCard} alt="" /> 
        </div>
        <br/>

        <div style={{display:'flex', alignItems: 'center'}}>
                <input className="rightside3_radio" type="radio"/> 
                    <img className="rightside3_PayPal" src={paypal} alt=""/>
                
                <input className="rightside3_radio" type="radio"/> 
                        <img className="rightside3_google" src={google} alt="" /> 
                    <p className="rightside3_googlePay">Pay</p> 
            </div>
       
        <input className="rightside3_cardInput" 
               type="text"
               placeholder="Номер карты" />
               
            <select className="rightside3_select1" name="" id="">
                <option value="">01</option>
                <option value="">02</option>
                <option value="">03</option>
            </select>

             <select className="rightside3_select2" name="" id="">
                <option value="">Январь</option>
                <option value="">Февраль</option>
                <option value="">Март</option>
            </select>  

            <select className="rightside3_select3" name="" id="">
                <option value="">2023</option>
                <option value="">2024</option>
                <option value="">2025</option>
            </select>  

        <p className="rightText3">Делайте это ежемесячно !</p>
        
        <button onClick={() => [setButtonClick(true), setButtonClick2(false)]}
                className={buttonClick ?"button1Active" :"button1"} >
                <p>✓</p>
                <img src={arrow} 
                     className="arrow"      
                     alt="" />
            Да, рассчитывайте на меня !</button>

        <button onClick={() => [setButtonClick(false), setButtonClick2(true)]} 
                className={buttonClick2 ? "button2Active" :"button2"}> 
                <p>✓</p>
            Нет, пожертвовать один раз
        </button>
        
    
        
        <div className="rightText4"> <p>Начните ежемесячное пожертвование сегодня, чтобы инвестировать в развитие и популяризацию науки и интеллектуализма.</p>  </div>
    
        <div className="dropform"
             onClick={() => [setRightPage(1), setName(''), setSurname(''),
                             setCity(''), setPhoneNumber(''), setGovernment(''),
                             setState(''), setEmail(''), setPostcode(''),
                             setAdress('')]
                      }
        
        > Не {name}? Сбросьте форму</div>
                                
            </div>
        )
    }


}
