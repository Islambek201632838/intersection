import React , {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import '../App.css'
import './news.css'
import block from '../img/sredizemnoe.jpg'
import { Mainmobilnewscard } from "./newscard";
import { Newscard } from "./newscard";
import { Footer, Navigation } from "../App";
import { Pageinfo } from "../pageinfo/pageinfo";

export let News = () => {
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
        <Newscard 
            key={index}
            url={cardDB.url[index]} 
            firstHeaderText={item} 
            firstText={cardDB.firstText[index]} 
            firstEnHeaderText={cardDB.enHeaderText[index]} 
            firstEnText={cardDB.enText[index]} lang={lang} 
            urlToPage={'/newscard' + index} 
            display={index >= 6 ? display : index > 12 ? 'none' : 'block'}
        />
    ))
    return (
                <>
                    <Navigation background="white" rubtn={() => setLang('ru')} lang={lang} enbtn={() => setLang('en')}/>
                    <section className="min-width center padding-top-bottom mobile-width">
                        <h1 className="newsh1 not-mobile" style={{marginBottom:25, marginTop:0}}>{lang === 'ru' ? 'Новости Intersection':'Intersection news'}</h1>
                        <p className="newsp not-mobile" style={{marginTop:0, fontWeight:400}}>
                            {
                            lang === 'ru' ? 
                            'Взгляд за кулисами: изучение взаимодействия экономики, политики и культуры'
                            :
                            'A look behind the scenes: exploring the interaction of economics, politics and culture'
                            }
                        </p>
                        <div className="mobile">
                                <div className="display-flex left align-items-center">
                                    <p style={{color:'#767676' , margin:0}}>{lang === 'ru' ? 'Главная':'Home'}</p>
                                    <i className="fa-solid fa-arrow-right" style={{fontSize:15 , margin:'0 5px'}}></i>
                                    <p  style={{margin:0}}>{lang === 'ru' ? 'Новости':'News'}</p>
                                </div>
                                <Mainmobilnewscard 
                                    url={block} 
                                    firstEnHeaderText={cardDB.enHeaderText[cardDB.enHeaderText.length - 1]}
                                    firstHeaderText={cardDB.firstHeaderText[cardDB.enHeaderText.length - 1]}
                                    
                                    firstText={cardDB.firstText[cardDB.firstText.length - 1]}

                                    firstEnText={cardDB.enText[cardDB.enText.length - 1]}
                                    lang={lang}
                                    urlToPage={'/newscard' + (totagdata.length - 1)}
                                />
                                <Mainmobilnewscard 
                                    url={block} 
                                    firstEnHeaderText="The Mediterranean Sea is a large body of water separating Europe, 
                                    Africa and Asia."
                                    firstHeaderText="Средиземное море - это большой водоем, разделяющий Европу, Африку и Азию."
                                    firstText="Если присмотреться,
                                                можно заметить, что чаще всего в фильмах камера статична. Да, есть общие планы, 
                                                с помощью которых показывается какое-то действие, есть крупные, обычно с 
                                                эмоциями героев, но, как правило, камера не двигается. 
                                                Двигаются только люди и объекты в кадре.У Ричи всё наоборот."
                                    firstEnText="If you look closely,
                                                you will notice that most often in movies the camera is static. Yes, there 
                                                are general plans
                                                with which some action is shown, there are large ones, usually with the 
                                                emotions of the characters,
                                                but, as a rule, the camera does not move. 
                                                Only people and objects in the frame move. Richie's is the opposite."
                                    lang={lang}
                                    urlToPage={'/newscard' + (totagdata.length - 2)}
                                />
                                <Mainmobilnewscard 
                                    url={block} 
                                    firstEnHeaderText="The Mediterranean Sea is a large body of water separating Europe, 
                                    Africa and Asia."
                                    firstHeaderText="Средиземное море - это большой водоем, разделяющий Европу, Африку и Азию."
                                    firstText="Если присмотреться,
                                                можно заметить, что чаще всего в фильмах камера статична. Да, есть общие планы, 
                                                с помощью которых показывается какое-то действие, есть крупные, обычно с 
                                                эмоциями героев, но, как правило, камера не двигается. 
                                                Двигаются только люди и объекты в кадре.У Ричи всё наоборот."
                                    firstEnText="If you look closely,
                                                you will notice that most often in movies the camera is static. Yes, there 
                                                are general plans
                                                with which some action is shown, there are large ones, usually with the 
                                                emotions of the characters,
                                                but, as a rule, the camera does not move. 
                                                Only people and objects in the frame move. Richie's is the opposite."
                                    lang={lang}
                                    urlToPage={'/newscard' + (totagdata.length - 3)}
                                />
                        </div>
                        <div className="news">                            
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
                        <Pageinfo row="row" 

                            firstText='"Новости" на сайте The Intersection Corporation: 
                            Добро пожаловать на сайт The Intersection Corporation - мощную платформу, которая исследует сложные 
                            взаимодействия между экономикой, политикой и культурой. На вкладке "Новости" мы предлагаем эксклюзивный взгляд 
                            на современный мир, с помощью нашей команды высококвалифицированных экспертов в областях экономики, политики и 
                            культуры.'

                            firstEnText='"News" on the website of 
                            The Intersection Corporation: Welcome to the website of The Intersection Corporation - a 
                            powerful platform that explores the complex interactions between economics, politics and culture. On 
                            the "News" tab, we offer an exclusive look at the modern world, with the help of our team of highly qualified 
                            experts in the fields of economics, politics and culture.'

                            secondText='Здесь вы найдете множество 
                            интересной и полезной информации, связанной с темами, 
                            которые мы освещаем, а также доступ к актуальным исследованиям 
                            и тенденциям в области экономики, политики и культуры. Мы предоставляем 
                            уникальный опыт и глубокое понимание сложных взаимодействий между этими силами, 
                            которые играют важную роль в нашем быстро меняющемся мире.'

                            secondEnText='Here you will find a lot of interesting and useful information related to the topics 
                            that we cover, as well as access to current research and trends in the field of economics, politics 
                            and culture. We provide a unique experience and a deep understanding of the complex interactions 
                            between these forces that play an important role in our rapidly changing world.'

                            thirdText="Наши новости доступны как на нашем веб-сайте, так и на YouTube, чтобы предоставить вам 
                            наилучший опыт взаимодействия с нашими материалами. Мы приглашаем вас присоединиться к нам, чтобы 
                            получить уникальную возможность взглянуть на мир вокруг себя совершенно по-новому и раскрыть тайны 
                            взаимодействий, которые лежат в основе нашего быстро меняющегося мира. The Intersection Corporation - 
                            это не просто платформа, это возвышенный инструмент для исследования сложных взаимодействий между 
                            силами, которые формируют наш мир."

                            thirdEnText="Our news is available both on our website and on YouTube to provide you with the best 
                            experience of interacting with our materials. We invite you to join us to get a unique opportunity 
                            to look at the world around you in a completely new way and uncover the secrets of interactions that 
                            underlie our rapidly changing world. The Intersection Corporation is not just a platform, it is a 
                            sublime tool for exploring the complex interactions between the forces that shape our world."

                            lang={lang}
                        />
                    </section>
                    <Footer lang={lang}/>
                </>
    )
}