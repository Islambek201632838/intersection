import React , {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import '../App.css'
import './lectures.css'
import block from '../img/sredizemnoe.jpg'
import { Lecturesmobilnewscard, Lecturescard , Mainlecturecard } from "./lecturescard";
import { Footer, Navigation } from "../App";
import { Pageinfo } from "../pageinfo/pageinfo";

export let Lectures = () => {
    const [lang , setLang] = useState('ru')
    const [display , setDisplay] = useState('none')
    const [buttonDisplay , setBtnDisplay] = useState('inline-block')
    const [btnMargin , setBtnMargin] = useState(100)
    const [class_ , setClass_] = useState('center view-more-btn not-mobile-btn not-mobile-inline')
    const [mobileClass , setMobileClass] = useState('mobile-btn center')
    const cardDB = {
        url : [block , block , block , block, block , block , block , block],
        firstHeaderText : ['Средиземное море - это большой водоем, разделяющий Европу, Африку и Азию.' , 
        'Средиземное море - это большой водоем, разделяющий Европу, Африку и Азию.' , 
        'Средиземное море - это большой водоем, разделяющий Европу, Африку и Азию.', 
        'Средиземное море - это большой водоем, разделяющий Европу, Африку и Азию.', 
        'Средиземное море - это большой водоем, разделяющий Европу, Африку и Азию.', 
        'Средиземное море - это большой водоем, разделяющий Европу, Африку и Азию.', 
        'Средиземное море - это большой водоем, разделяющий Европу, Африку и Азию.', 
        'Средиземное море - это большой водоем, разделяющий Европу, Африку и Азию.'],
        firstText : [`Если присмотреться,
         можно заметить, что чаще всего в фильмах камера статична. Да, есть общие планы, 
         с помощью которых показывается какое-то действие, есть крупные, обычно с эмоциями героев, но, как правило, камера не двигается. 
         Двигаются только люди и объекты в кадре.У Ричи всё наоборот.`,

        `Если присмотреться, можно заметить,
         что чаще всего в фильмах камера статична. Да, 
         есть общие планы, с помощью которых показывается какое-то действие, есть крупные, 
         обычно с эмоциями героев, но, как правило, камера не двигается. Двигаются только люди и объекты в кадре.У 
         Ричи всё наоборот.`,

         `Если присмотреться, можно заметить,
         что чаще всего в фильмах камера статична. Да, 
         есть общие планы, с помощью которых показывается какое-то действие, есть крупные, 
         обычно с эмоциями героев, но, как правило, камера не двигается. Двигаются только люди и объекты в кадре.У 
         Ричи всё наоборот.`,
         
         `Если присмотреться, можно заметить,
         что чаще всего в фильмах камера статична. Да, 
         есть общие планы, с помощью которых показывается какое-то действие, есть крупные, 
         обычно с эмоциями героев, но, как правило, камера не двигается. Двигаются только люди и объекты в кадре.У 
         Ричи всё наоборот.`,
         
         `Если присмотреться, можно заметить,
         что чаще всего в фильмах камера статична. Да, 
         есть общие планы, с помощью которых показывается какое-то действие, есть крупные, 
         обычно с эмоциями героев, но, как правило, камера не двигается. Двигаются только люди и объекты в кадре.У 
         Ричи всё наоборот.`,
         
         `Если присмотреться, можно заметить,
         что чаще всего в фильмах камера статична. Да, 
         есть общие планы, с помощью которых показывается какое-то действие, есть крупные, 
         обычно с эмоциями героев, но, как правило, камера не двигается. Двигаются только люди и объекты в кадре.У 
         Ричи всё наоборот.`,
         
         `Если присмотреться, можно заметить,
         что чаще всего в фильмах камера статична. Да, 
         есть общие планы, с помощью которых показывается какое-то действие, есть крупные, 
         обычно с эмоциями героев, но, как правило, камера не двигается. Двигаются только люди и объекты в кадре.У 
         Ричи всё наоборот.`,
         
         `Если присмотреться, можно заметить,
         что чаще всего в фильмах камера статична. Да, 
         есть общие планы, с помощью которых показывается какое-то действие, есть крупные, 
         обычно с эмоциями героев, но, как правило, камера не двигается. Двигаются только люди и объекты в кадре.У 
         Ричи всё наоборот.`
        ],
        enHeaderText : ['The Mediterranean Sea is a large body of water separating Europe, Africa and Asia.',
        'The Mediterranean Sea is a large body of water separating Europe, Africa and Asia.',
        'The Mediterranean Sea is a large body of water separating Europe, Africa and Asia.',
        'The Mediterranean Sea is a large body of water separating Europe, Africa and Asia.',
        'The Mediterranean Sea is a large body of water separating Europe, Africa and Asia.',
        'The Mediterranean Sea is a large body of water separating Europe, Africa and Asia.',
        'The Mediterranean Sea is a large body of water separating Europe, Africa and Asia.',
        'The Mediterranean Sea is a large body of water separating Europe, Africa and Asia.'
        ],
        enText: [`If you look closely,
                you will notice that most often in movies the camera is static. Yes, there are general plans
                with which some action is shown, there are large ones, usually with the emotions of the characters,
                but, as a rule, the camera does not move. 
                Only people and objects in the frame move. Richie's is the opposite.`,

                `If you look closely,
                you will notice that most often in movies the camera is static. Yes, there are general plans
                with which some action is shown, there are large ones, usually with the emotions of the characters,
                but, as a rule, the camera does not move. 
                Only people and objects in the frame move. Richie's is the opposite.`,

                `If you look closely,
                you will notice that most often in movies the camera is static. Yes, there are general plans
                with which some action is shown, there are large ones, usually with the emotions of the characters,
                but, as a rule, the camera does not move. 
                Only people and objects in the frame move.Richie's is the opposite.`,

                `If you look closely,
                you will notice that most often in movies the camera is static. Yes, there are general plans
                with which some action is shown, there are large ones, usually with the emotions of the characters,
                but, as a rule, the camera does not move. 
                Only people and objects in the frame move. Richie's is the opposite.`,

                `If you look closely,
                you will notice that most often in movies the camera is static. Yes, there are general plans
                with which some action is shown, there are large ones, usually with the emotions of the characters,
                but, as a rule, the camera does not move. 
                Only people and objects in the frame move. Richie's is the opposite.`,

                `If you look closely,
                you will notice that most often in movies the camera is static. Yes, there are general plans
                with which some action is shown, there are large ones, usually with the emotions of the characters,
                but, as a rule, the camera does not move. 
                Only people and objects in the frame move. Richie's is the opposite.`,

                `If you look closely,
                you will notice that most often in movies the camera is static. Yes, there are general plans
                with which some action is shown, there are large ones, usually with the emotions of the characters,
                but, as a rule, the camera does not move. 
                Only people and objects in the frame move. Richie's is the opposite.`,

                `If you look closely,
                you will notice that most often in movies the camera is static. Yes, there are general plans
                with which some action is shown, there are large ones, usually with the emotions of the characters,
                but, as a rule, the camera does not move. 
                Only people and objects in the frame move. Richie's is the opposite.`,
                ]
    }
    const totagdata = cardDB.firstHeaderText.map((item , index) => (
        <Lecturescard 
            key={index}
            url={cardDB.url[index]} 
            firstHeaderText={item} 
            firstText={cardDB.firstText[index]} 
            firstEnHeaderText={cardDB.enHeaderText[index]} 
            firstEnText={cardDB.enText[index]} lang={lang} 
            urlToPage={'/lecturescard' + index} 
            display={index >= 6 ? display : index > 12 ? 'none' : 'block'}
        />
    ))
    return (
                <>
                    <Navigation background="white" rubtn={() => setLang('ru')} lang={lang} enbtn={() => setLang('en')}/>
                    <section className="min-width center padding-top-bottom mobile-width">
                        <div className="not-mobile">
                            <Mainlecturecard 
                            url={block} 
                            firstEnHeaderText={cardDB.enHeaderText[cardDB.enHeaderText.length - 1]}
                            firstHeaderText={cardDB.firstHeaderText[cardDB.enHeaderText.length - 1]}
                                    
                            firstText={cardDB.firstText[cardDB.firstText.length - 1]}

                            firstEnText={cardDB.enText[cardDB.enText.length - 1]}
                            lang={lang}
                            urlToPage={'/lecturescard' + (totagdata.length - 1)}
                            />
                        </div>
                        <div className="mobile">
                                <div className="display-flex left align-items-center">
                                    <p style={{color:'#767676' , margin:0}}>{lang === 'ru' ? 'Главная':'Home'}</p>
                                    <i className="fa-solid fa-arrow-right" style={{fontSize:15 , margin:'0 5px'}}></i>
                                    <p style={{margin:0}}>{lang === 'ru' ? 'Лекции':'Lectures'}</p>
                                </div>
                                <Lecturesmobilnewscard 
                                    url={block} 
                                    firstEnHeaderText={cardDB.enHeaderText[cardDB.enHeaderText.length - 1]}
                                    firstHeaderText={cardDB.firstHeaderText[cardDB.enHeaderText.length - 1]}
                                    
                                    firstText={cardDB.firstText[cardDB.firstText.length - 1]}

                                    firstEnText={cardDB.enText[cardDB.enText.length - 1]}
                                    lang={lang}
                                    urlToPage={'/lecturescard' + (totagdata.length - 1)}
                                />
                        </div>
                        <div className="lectures">                            
                            {totagdata}
                        </div>
                        <button className={class_} onClick={() => {
                            setDisplay('block')
                            setClass_('center view-more-btn display-none')
                            setBtnMargin(0)
                        }} style={{ 
                            marginTop:btnMargin, 
                            padding:0
                        }}>
                            {lang === 'ru' ? 'Показать больше':'View more'}
                        </button>
                        <button className={mobileClass} onClick={() => {
                            setDisplay('block')
                            setMobileClass('display-none')
                            setBtnMargin(0)
                        }}>
                            {lang === 'ru' ? 'Показать больше':'View more'}
                        </button>
                        <div className="display-flex justify-center newslinks padding-top-bottom">
                            <Link to=''>1</Link>
                            <Link to=''>2</Link>
                            <Link to=''>3</Link>
                            <Link to=''>4</Link>
                            <Link to=''>5</Link>
                            <Link to=''><i className="fa fa-solid fa-arrow-right"></i></Link>
                        </div>
                        <Pageinfo row="row-reverse" 

                            firstText='"Лекции" - это уникальный раздел нашей платформы, предоставляющий доступ к 
                            вдохновляющим и познавательным выступлениям от ведущих экспертов в области экономики, политики 
                            и культуры. Мы приглашаем самых ярких и опытных лекторов, чтобы поделиться своими знаниями и 
                            опытом с нашей аудиторией.'

                            firstEnText='"Lectures" - is a unique section of our platform that provides access to inspiring and 
                            informative speeches from leading experts in the field of economics, politics and culture. 
                            We invite the brightest and most experienced lecturers to share their knowledge and experience 
                            with our audience.'

                            secondText='Наши лекции предназначены для широкой публики, начиная от студентов и профессионалов,
                             до любознательных людей, которые хотят расширить свой кругозор. Наши лекторы - это опытные и 
                             признанные эксперты в своих областях, которые готовы поделиться своими знаниями и перспективами 
                             на различные темы.'

                            secondEnText='Our lectures are intended for the general public, 
                            ranging from students and professionals to curious people who want to broaden their horizons. 
                            Our lecturers are experienced and recognized experts in their fields who are ready to share their 
                            knowledge and perspectives on various topics.'

                            thirdText="Мы стремимся предоставить широкий спектр тем для наших лекций, чтобы охватить все 
                            аспекты взаимосвязи экономики, политики и культуры. Мы также обеспечиваем возможность задать 
                            вопросы и обсудить выступление с лектором и другими участниками."

                            thirdEnText="We strive to 
                            provide a wide range of topics for our 
                            lectures to cover all aspects of the relationship between economics, politics and culture. 
                            We also provide an opportunity to ask questions and discuss the presentation with the lecturer 
                            and other participants."

                            fourthText="Присоединяйтесь к нам, чтобы получить доступ к уникальным лекциям от ведущих 
                            экспертов и расширить свои знания и понимание сложных тем в области экономики, политики и 
                            культуры."

                            fourthEnText="Join us to get access to unique lectures from leading experts and expand your knowledge and 
                            understanding of complex topics in the field of economics, politics and culture."

                            lang={lang}
                        />
                    </section>
                    <Footer lang={lang}/>
                </>
    )
}