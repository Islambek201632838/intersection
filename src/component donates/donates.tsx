import React, { useState, useEffect } from "react";
import './donates.css';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import {Navigation } from '../App';
import line from './img/Line 10.png';
import HomePage from '../App';
import logo from './img/Group 50.png';

export let Donates = () => {
    const [lang, setLang] = useState('ru');

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
    return (<>
    
   
    <div className="center">
            
       <img src={logo} className="logoDonates" alt="" />
       
       </div>
       <div className="mainDivs">

            <div className="leftside">

            <h1 className="donatesHeading">  {lang === 'ru' ? donatesDB.heading : donatesDBeng.heading } </h1>
            <p className="donatesText">  {lang === 'ru' ? donatesDB.text1 : donatesDBeng.text1 }  </p>
            <p className="donatesText">  {lang === 'ru' ? donatesDB.text2 : donatesDBeng.text2 }  </p>
                
                </div>
            
            <div className="rightside">
            <p className="rightText1">Выберите сумму</p>

            </div>

       </div>

            <img className = "lineBr" src={line} alt="" />
            <div className="marginTopFooter"></div>
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
            <div className="marginBottomFooter"></div>
        
     
        
    

    
    </>) 

}
