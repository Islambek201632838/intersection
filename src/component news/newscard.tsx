import React , {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import '../App.css'
import './news.css'
import global from './imgcard/free-icon-world-news-2643121 1.png'
import { Footer, Navigation } from "../App";
import { url } from "inspector";
import block from '../img/sredizemnoe.jpg'
interface newscardinterface {
    url: any
    firstHeaderText : string
    firstText : string
    firstEnHeaderText : string
    firstEnText : string
    urlToPage?: any
    lang:string
    display : string
}

export let Newscard = (props:newscardinterface) => {
    const [shortenedText, setShortenedText] = useState(props.firstText);
    const [shortenedEnText , setEnText] = useState(props.firstEnText);
    useEffect(() => {
        if (props.firstText.length > 150) {
            let shortened = props.firstText.substring(0, 150) + "...";
            setShortenedText(shortened);
        }
    }, [props.firstText]);
    useEffect(() => {
        if (props.firstEnText.length > 150) {
            let shortened = props.firstEnText.substring(0, 150) + "...";
            setEnText(shortened);
        }
    }, [props.firstEnText])
    return (
        <>
            <div className="newscard left" style={{display: props.display}}>
                <div className="newscard-flex">
                    <div>
                        <div style={{backgroundImage:'url('+props.url+')', backgroundSize:'cover'}} className="mainimg"></div>
                        <p style={{fontWeight:500}} className="mobile">
                            <i className="fa-solid fa-eye" style={{marginRight:5}}></i>
                            {0}  {props.lang === 'ru' ? 'Просмотров':'Views'}
                        </p>
                    </div>
                    <div className="newscardtexts">
                        <h3><i className="fa fa-thin fa-earth-americas"></i>    {props.lang === 'ru' ? 'НОВОСТИ':'NEWS'}</h3>
                        <h1 className="mobilecardh1">{props.lang === 'ru' ? props.firstHeaderText : props.firstEnHeaderText}</h1>
                        <p className="newscardP not-mobile">{props.lang === 'ru' ? shortenedText: shortenedEnText}</p>
                        <Link to={props.urlToPage}>
                            {props.lang === 'ru' ? 'Читать':'Read'}
                            <span style={{marginLeft:10}}><i className="fa-solid fa-arrow-right" style={{fontSize:15}}></i></span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

interface newscardinterfacemain {
    url: any
    firstHeaderText : string
    firstText : string
    firstEnHeaderText : string
    firstEnText : string
    urlToPage?: any
    lang:string
}

export let Mainmobilnewscard = (props:newscardinterfacemain) => {
    const [shortenedText, setShortenedText] = useState(props.firstText);
    const [shortenedEnText , setEnText] = useState(props.firstEnText);
    useEffect(() => {
        if (props.firstText.length > 150) {
            let shortened = props.firstText.substring(0, 150) + "...";
            setShortenedText(shortened);
        }
    }, [props.firstText]);
    useEffect(() => {
        if (props.firstEnText.length > 150) {
            let shortened = props.firstEnText.substring(0, 150) + "...";
            setEnText(shortened);
        }
    }, [props.firstEnText])
    return (
        <>
            <div className="main-mobile-card">
                <div className="main-mobile-img" style={{backgroundImage:'url('+props.url+')', backgroundSize:'cover'}}></div>
                <div className="display-flex justify-between align-items-center">
                    <h3><i className="fa fa-thin fa-earth-americas"></i>    {props.lang === 'ru' ? 'НОВОСТИ':'NEWS'}</h3>
                    <p style={{fontWeight:500}} className="mobile">
                        <i className="fa-solid fa-eye" style={{marginRight:5}}></i>
                        {0}  {props.lang === 'ru' ? 'Просмотров':'Views'}
                    </p>
                </div>
                <h1 className="left">{props.lang === 'ru' ? props.firstHeaderText : props.firstEnHeaderText}</h1>
                <p className="newscardP left">{props.lang === 'ru' ? shortenedText: shortenedEnText}</p>
                <div className="left">
                    <Link to={props.urlToPage} style={{color:'black'}}>
                        {props.lang === 'ru' ? 'Читать':'Read'}
                        <span style={{marginLeft:10, color: '#c30909'}}><i className="fa-solid fa-arrow-right" style={{fontSize:15}}></i></span>
                    </Link>
                </div>
            </div>
        </>
    )
}

interface newscomponentinterface {
    url: any

    firstHeaderText : string

    firstText : string

    firstEnHeaderText: string

    firstEnText : string

    secondHeaderText? : string

    secondText? : string

    secondEnHeaderText?: string

    secondEnText? : string

    thirdHeaderText? : string

    thirdText? : string

    thirdEnHeaderText?: string

    thirdEnText? : string

    fourthHeaderText? : string

    fourthText? : string

    fourthEnHeaderText?: string

    fourthEnText? : string

    fifthHeaderText? : string

    fifthText? : string

    fifthEnHeaderText?: string

    fifthEnText? : string

    category : string

    encategory : string

    date : any

    endate : any

    hashtags? : string
    
    enhashtags? : string
}

export let Newscomponent = (props:newscomponentinterface) => {
    const currentPageUrl = window.location.href;
    const shareUrlTelegram = `https://telegram.me/share/url?url=${encodeURIComponent(currentPageUrl)}`;
    const shareUrlLinkedIn = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentPageUrl)}`;
    let hashtags = props.hashtags?.split(/\s+/)

    let enhashtags = props.enhashtags?.split(/\s+/)

    let tomaphashtags = hashtags?.map((item , index) => (
        <p key={index}>{item}</p>
    ))

    let toMapEnHashtags = enhashtags?.map((item , index) => (
        <p key={index}>{item}</p>
    ))

    let location = useLocation()

    useEffect(() => {
        window.scrollTo({ top: 0});
    }, [location]);
    const [lang , setLang] = useState('ru')

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
            display="block"
        />
    ))
    return (
        <>
            <Navigation background="white" lang={lang} rubtn={() => setLang('ru')} enbtn={() => setLang('en')}/>
            <div className="align-items-center padding-top-bottom news-info not-mobile-flex">
                <p style={{fontWeight:700}}>
                    <i className="fa-solid fa-eye fa-beat-fade" style={{marginRight:5}}></i>
                    {0}  {lang === 'ru' ? 'Просмотров':'Views'}
                </p>
                <h2 className="type">{lang === 'ru' ? props.category : props.encategory}</h2>
                <h3><i className="fa fa-thin fa-earth-americas"></i>    {lang === 'ru' ? 'НОВОСТИ':'NEWS'}</h3>
                <p style={{fontWeight:700}}>{lang === 'ru' ? props.date : props.endate}</p>
            </div>
            <section className="not-mobile main-news">
                <h1>{lang === 'ru' ? props.firstHeaderText: props.firstEnHeaderText}</h1>
                <div className="display-flex align-items-center news-social-networks">
                    <a href="https://instagram.com/the_intersection_corporation?igshid=ZGUzMzM3NWJiOQ==" target='_blank' className='news-social-network'><i className="fa fa-brands fa-square-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/the-intersection-corporation-91b870276" target='_blank' className='news-social-network'><i className="fa fa-brands fa-linkedin"></i></a>
                    <a href="https://t.me/TheIntersectioncorporation" className='news-social-network' target='_blank'><i className="fa fa-brands fa-telegram"></i></a>
                    <a href="https://youtube.com/@TheIntersectionCorporation" target='_blank' className='news-social-network'><i className="fa fa-brands fa-square-youtube"></i></a>                    
                </div>
                <div className="main-img-news" style={{backgroundImage:'url('+ props.url +')'}}></div>
                <p>{lang === 'ru' ? props.firstText : props.firstEnText}</p>
                <h1>{lang === 'ru' ? props.secondHeaderText : props.secondEnHeaderText}</h1>
                <p>{lang === 'ru' ? props.secondText : props.secondEnText}</p>
                <h1>{lang === 'ru' ? props.thirdHeaderText : props.thirdEnHeaderText}</h1>
                <p>{lang === 'ru' ? props.thirdText : props.thirdEnText}</p>
                <h1>{lang === 'ru' ? props.fourthHeaderText : props.fourthEnHeaderText}</h1>
                <p>{lang === 'ru' ? props.fourthText : props.fourthEnText}</p>
                <h1>{lang === 'ru' ? props.fifthHeaderText : props.fifthEnHeaderText}</h1>
                <p>{lang === 'ru' ? props.fifthText : props.fifthEnText}</p>
                {window.innerWidth > 650 && <iframe src="https://www.youtube.com/embed/wpTtzX-G7lU" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>}
                <div className="display-flex flex-wrap align-items-center hashtags">
                    {lang === 'ru' ? tomaphashtags : toMapEnHashtags}
                </div>
                <div className="display-flex align-items-center share">
                    <p>{lang === 'ru' ? 'Поделиться:' : 'Share:'}</p>
                    <a href="https://instagram.com/the_intersection_corporation?igshid=ZGUzMzM3NWJiOQ==" target='_blank' className='news-social-network'><i className="fa fa-brands fa-square-instagram"></i></a>
                    <a href={shareUrlLinkedIn} target='_blank' className='news-social-network'><i className="fa fa-brands fa-linkedin"></i></a>
                    <a href={shareUrlTelegram} className='news-social-network' target='_blank'><i className="fa fa-brands fa-telegram"></i></a>
                    <a href="https://youtube.com/@TheIntersectionCorporation" target='_blank' className='news-social-network'><i className="fa fa-brands fa-square-youtube"></i></a>
                </div>
            </section>
            <section className="mobile mobile-main-news">
                <div className="main-img-news" style={{backgroundImage:'url('+ props.url +')'}}></div>
                <div className="display-flex align-items-center">
                    <h2 className="type" style={{marginRight:20}}>{lang === 'ru' ? props.category : props.encategory}</h2>
                    <h3><i className="fa fa-thin fa-earth-americas"></i>    {lang === 'ru' ? 'НОВОСТИ':'NEWS'}</h3>
                </div>
                <h1>{lang === 'ru' ? props.firstHeaderText: props.firstEnHeaderText}</h1>
                <p style={{fontWeight:700}}>
                    <i className="fa-solid fa-eye" style={{marginRight:5}}></i>
                    {0}  {lang === 'ru' ? 'Просмотров':'Views'}
                </p>
                <div className="display-flex align-items-center news-social-networks justify-center">
                    <a href="https://instagram.com/the_intersection_corporation?igshid=ZGUzMzM3NWJiOQ==" target='_blank' className='news-social-network'><i className="fa fa-brands fa-square-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/the-intersection-corporation-91b870276" target='_blank' className='news-social-network'><i className="fa fa-brands fa-linkedin"></i></a>
                    <a href="https://t.me/TheIntersectioncorporation" className='news-social-network' target='_blank'><i className="fa fa-brands fa-telegram"></i></a>
                    <a href="https://youtube.com/@TheIntersectionCorporation" target='_blank' className='news-social-network'><i className="fa fa-brands fa-square-youtube"></i></a>                    
                </div>
                <p>{lang === 'ru' ? props.firstText : props.firstEnText}</p>
                <h1>{lang === 'ru' ? props.secondHeaderText : props.secondEnHeaderText}</h1>
                <p>{lang === 'ru' ? props.secondText : props.secondEnText}</p>
                <h1>{lang === 'ru' ? props.thirdHeaderText : props.thirdEnHeaderText}</h1>
                <p>{lang === 'ru' ? props.thirdText : props.thirdEnText}</p>
                <h1>{lang === 'ru' ? props.fourthHeaderText : props.fourthEnHeaderText}</h1>
                <p>{lang === 'ru' ? props.fourthText : props.fourthEnText}</p>
                <h1>{lang === 'ru' ? props.fifthHeaderText : props.fifthEnHeaderText}</h1>
                <p>{lang === 'ru' ? props.fifthText : props.fifthEnText}</p>
                <div className="display-flex flex-wrap align-items-center hashtags">
                    {lang === 'ru' ? tomaphashtags : toMapEnHashtags}
                </div>
                <div className="display-flex align-items-center share">
                    <p>{lang === 'ru' ? 'Поделиться:' : 'Share:'}</p>
                    <a href="https://instagram.com/the_intersection_corporation?igshid=ZGUzMzM3NWJiOQ==" target='_blank' className='news-social-network'><i className="fa fa-brands fa-square-instagram"></i></a>
                    <a href={shareUrlLinkedIn} target='_blank' className='news-social-network'><i className="fa fa-brands fa-linkedin"></i></a>
                    <a href={shareUrlTelegram} className='news-social-network' target='_blank'><i className="fa fa-brands fa-telegram"></i></a>
                    <a href="https://youtube.com/@TheIntersectionCorporation" target='_blank' className='news-social-network'><i className="fa fa-brands fa-square-youtube"></i></a>
                </div>
            </section>
            <section className="padding-top-bottom last-news">
                <h1 className="last-news-text">{lang === 'ru' ? 'Последние новости': 'Last news'}</h1>
                <div className="display-flex justify-center last-news-flex">
                    {totagdata[cardDB.enHeaderText.length - 1]}
                    {totagdata[cardDB.enHeaderText.length - 2]}
                    {totagdata[cardDB.enHeaderText.length - 3]}
                </div>
            </section>
            <Footer lang={lang}/>
        </>
    )
}