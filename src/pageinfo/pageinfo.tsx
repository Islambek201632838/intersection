import React , {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import '../App.css'
import './pageinfo.css'
import global from './imgcard/free-icon-world-news-2643121 1.png'
import { Footer, Navigation } from "../App";
import museum from './img/museum 1.png'
import government from './img/goverment 1.png'
import economic from './img/free-icon-economic-crisis-8194037 1.png'
import brain from './img/free-icon-brain-109827 1.png'

interface pageinfoprops {
    row : any
    firstText : string
    firstEnText : string
    secondText : string
    secondEnText : string
    thirdText : string
    thirdEnText: string
    fourthText? : string
    fourthEnText? : string
    lang : string
}

export let Pageinfo = (props:pageinfoprops) => {
    return (
        <>
        <div className={props.row === 'row' ? "display-flex justify-center align-items-center row":'display-flex justify-center align-items-center row-reverse'}>
            <div className="circle-with-icons center">
                <img src={museum} alt="" className="museum"/>
                <div className="display-flex justify-between min-width">
                    <img src={government} alt="" className="government"/>
                    <img src={economic} alt="" className="economic"/>
                </div>
                <img src={brain} alt="" className="brain"/>
            </div>
            <div className="left texts-page-info">
                <p className="mobile center" style={{marginTop:0, fontWeight:800}}>
                            {
                            props.lang === 'ru' ? 
                            'Взгляд за кулисами: изучение взаимодействия экономики, политики и культуры'
                            :
                            'A look behind the scenes: exploring the interaction of economics, politics and culture'
                            }
                </p>
                <p>{props.lang === 'ru' ? props.firstText: props.firstEnText}</p>
                <p>{props.lang === 'ru' ? props.secondText: props.secondEnText}</p>
                <p>{props.lang === 'ru' ? props.thirdText: props.thirdEnText}</p>
                <p>{props.lang === 'ru' ? props.fourthText: props.fourthEnText}</p>
            </div>
        </div>
        </>
    )
}