import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import '../App.css'
import './article.css'
import block from '../img/sredizemnoe.jpg'
import { Articlemobilnewscard, Articlecard, MainArticlecard } from "./articlecard";
import { Footer, Navigation } from "../App";
import { Pageinfo } from "../pageinfo/pageinfo";

export let Article = () => {
    const [lang, setLang] = useState('ru')
    const [display, setDisplay] = useState('none')
    const [buttonDisplay, setBtnDisplay] = useState('inline-block')
    const [btnMargin, setBtnMargin] = useState(100)
    const [class_, setClass_] = useState('center view-more-btn not-mobile-btn not-mobile-inline')
    const [mobileClass, setMobileClass] = useState('mobile-btn center')
    const cardDB = {
        url: [block, block, block, block, block, block, block, block],
        firstHeaderText: ['Средиземное море - это большой водоем, разделяющий Европу, Африку и Азию.',
            'Средиземное море - это большой водоем, разделяющий Европу, Африку и Азию.',
            'Средиземное море - это большой водоем, разделяющий Европу, Африку и Азию.',
            'Средиземное море - это большой водоем, разделяющий Европу, Африку и Азию.',
            'Средиземное море - это большой водоем, разделяющий Европу, Африку и Азию.',
            'Средиземное море - это большой водоем, разделяющий Европу, Африку и Азию.',
            'Средиземное море - это большой водоем, разделяющий Европу, Африку и Азию.',
            'Средиземное море - это большой водоем, разделяющий Европу, Африку и Азию.'],
        firstText: [`Если присмотреться,
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
        enHeaderText: ['The Mediterranean Sea is a large body of water separating Europe, Africa and Asia.',
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
    const totagdata = cardDB.firstHeaderText.map((item, index) => (
        <Articlecard
            key={index}
            url={cardDB.url[index]}
            firstHeaderText={item}
            firstText={cardDB.firstText[index]}
            firstEnHeaderText={cardDB.enHeaderText[index]}
            firstEnText={cardDB.enText[index]} lang={lang}
            urlToPage={'/articlecard' + index}
            display={index >= 6 ? display : index > 12 ? 'none' : 'block'}
        />
    ))
    return (
        <>
            <Navigation background="white" rubtn={() => setLang('ru')} lang={lang} enbtn={() => setLang('en')} />
            <section className="min-width center padding-top-bottom mobile-width">
                <div className="not-mobile">
                    <MainArticlecard
                        url={block}
                        firstEnHeaderText={cardDB.enHeaderText[cardDB.enHeaderText.length - 1]}
                        firstHeaderText={cardDB.firstHeaderText[cardDB.enHeaderText.length - 1]}

                        firstText={cardDB.firstText[cardDB.firstText.length - 1]}

                        firstEnText={cardDB.enText[cardDB.enText.length - 1]}
                        lang={lang}
                        urlToPage={'/articlecard' + (totagdata.length - 1)}
                    />
                </div>
                <div className="mobile">
                    <div className="display-flex left align-items-center">
                        <p style={{ color: '#767676', margin: 0 }}>{lang === 'ru' ? 'Главная' : 'Home'}</p>
                        <i className="fa-solid fa-arrow-right" style={{ fontSize: 15, margin: '0 5px' }}></i>
                        <p style={{ margin: 0 }}>{lang === 'ru' ? 'Статьи' : 'Articles'}</p>
                    </div>
                    <Articlemobilnewscard
                        url={block}
                        firstEnHeaderText={cardDB.enHeaderText[cardDB.enHeaderText.length - 1]}
                        firstHeaderText={cardDB.firstHeaderText[cardDB.enHeaderText.length - 1]}

                        firstText={cardDB.firstText[cardDB.firstText.length - 1]}

                        firstEnText={cardDB.enText[cardDB.enText.length - 1]}
                        lang={lang}
                        urlToPage={'/articlescard' + (totagdata.length - 1)}
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
                    marginTop: btnMargin,
                    padding: 0
                }}>
                    {lang === 'ru' ? 'Показать больше' : 'View more'}
                </button>
                <button className={mobileClass} onClick={() => {
                    setDisplay('block')
                    setMobileClass('display-none')
                    setBtnMargin(0)
                }}>
                    {lang === 'ru' ? 'Показать больше' : 'View more'}
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

                    firstText='Наши статьи являются уникальным исследованием, которое предлагает новый взгляд на пересечение 
                            экономики, политики и культуры. Они написаны экспертами, имеющими богатый опыт в своих областях, 
                            и предлагают читателям углубленный анализ наших тематических областей.'

                    firstEnText='Our articles are a unique study that offers a new perspective on the intersection
                            economics, politics and culture. They are written by experts with extensive experience in their fields,
                            and offer readers an in-depth analysis of our thematic areas.'

                    secondText='Мы предлагаем популярные статьи и научные исследования, которые позволяют нашим читателям узнать о 
                            последних тенденциях и научных достижениях в области экономики, политики и культуры. Мы также предлагаем 
                            статьи, которые помогают лучше понимать текущие события и вызовы, с которыми сталкиваются общество и системы, 
                            на которых оно строится.'

                    secondEnText='We offer popular articles and scientific studies that allow our readers to learn about the latest trends 
                            and scientific achievements in the field of economics, politics and culture. We also provide articles to help 
                            you better understand current events and the challenges facing society and the systems on which it is built.'

                    thirdText="Мы стремимся к тому, чтобы наши статьи были доступны для всех, и поэтому они публикуются на нашем веб-сайте 
                            и распространяются через наши социальные медиа-каналы. Наши статьи представлены в различных форматах, включая 
                            текст, видео и аудио, чтобы соответствовать различным предпочтениям и потребностям наших читателей."

                    thirdEnText="We strive to make our articles accessible to everyone and therefore they are published on our website and 
                            shared through our social media channels. Our articles are presented in a variety of formats, including text, 
                            video, and audio, to suit the different preferences and needs of our readers."

                    fourthText="Присоединяйтесь к нам, чтобы получить доступ к уникальным лекциям от ведущих 
                            экспертов и расширить свои знания и понимание сложных тем в области экономики, политики и 
                            культуры."

                    fourthEnText="Join us to get access to unique lectures from leading experts and expand your knowledge and 
                            understanding of complex topics in the field of economics, politics and culture."

                    lang={lang}
                />
            </section>
            <Footer lang={lang} />
        </>
    )
}