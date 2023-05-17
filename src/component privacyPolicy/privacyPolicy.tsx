import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import './privacyPolicy.css'
import { Footer, Navigation } from "../App";
import { text } from "stream/consumers";



export let PrivacyPolicy = () => {

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);


    let policyDB = { 

    firstHeaderText: 'Политика конфиденциальности и защиты персональных данных',
    text1: 'Благодарим вас за интерес к нашей платформе. Мы полностью придерживаемся законов Республики Казахстан и всемирного права в отношении конфиденциальности и безопасности данных наших пользователей.',
    text2: 'Ниже приведены правила конфиденциальности, которые мы соблюдаем:',
    text3: '1. Сбор и использование информации',
    text4: 'Мы собираем только ту информацию, которая необходима для предоставления наших услуг. Мы не продаем, не арендуем и не обмениваем информацию о наших пользователей с третьими лицами без их явного согласия.',
    text5:  '2. Хранение информации',
    text6: 'Мы принимаем все необходимые меры для защиты информации наших пользователей от несанкционированного доступа, использования или раскрытия. Мы храним информацию на защищенных серверах и принимаем все необходимые меры для обеспечения безопасности этих серверов',
    text7: '3. Использование файлов cookie',
    text8: 'Мы используем файлы cookie, чтобы улучшить работу нашей платформы и предоставить нашим пользователям более персонализированный опыт. Мы не используем файлы cookie для отслеживания пользователей или сбора личной информации.',
    text9: '4. Ссылки на сторонние сайты',
    text10: 'На нашей платформе могут быть ссылки на сторонние сайты, которые не контролируются нами. Мы не несем ответственности за конфиденциальность и безопасность данных на этих сайтах.',
    text11: '5. Ограничение ответственности',
    text12: 'Мы не несем ответственности за любой ущерб, причиненный пользователям вследствие нарушения их конфиденциальности или безопасности данных на нашей платформе, если это произошло не по нашей вине.',
    text13: 'Мы стремимся обеспечить нашим пользователям максимальную конфиденциальность и безопасность данных на нашей платформе. Если у вас возникнут какие-либо вопросы или замечания, пожалуйста, свяжитесь с нашей командой поддержки.',
    text14: 'Наши серверы находятся в защищенных и контролируемых средах, где доступ к данным строго ограничен и требует авторизации. Вся информация наших пользователей передается с использованием безопасных протоколов связи, которые обеспечивают шифрование и защиту данных во время их передачи.',
    text15: 'Мы также регулярно обновляем наши системы и процедуры безопасности, чтобы гарантировать, что данные наших пользователей всегда остаются защищенными и конфиденциальными. Мы используем самые современные технологии и инструменты для защиты данных, а также следим за новыми уязвимостями и угрозами безопасности, чтобы быстро реагировать и минимизировать риски.',
    text16: 'Наша команда постоянно работает над обеспечением безопасности и конфиденциальности данных нашей платформы. Мы уделяем особое внимание обучению нашего персонала правилам безопасности и конфиденциальности, чтобы каждый сотрудник Intersection Corporation был готов обеспечить безопасность и конфиденциальность данных пользователей.',
    text17: 'Наша платформа также предоставляет пользователям возможность управлять своими данными, включая возможность изменять и удалять их. Мы собираем только те данные, которые необходимы для предоставления наших услуг, и обрабатываем их только в соответствии с нашими правилами и процедурами обработки данных.',
    text18: 'Мы гордимся тем, что предоставляем высокий уровень безопасности и конфиденциальности данных нашим пользователям. Если у вас есть какие-либо вопросы или проблемы, связанные с безопасностью и конфиденциальностью данных, пожалуйста, обратитесь к нашей команде поддержки, и мы с удовольствием поможем вам.'
}

let policyDBeng = { 

    firstHeaderText: "Privacy and Personal Data Protection Policy",
    text1: "Thank you for your interest in our platform. We fully adhere to the laws of the Republic of Kazakhstan and world law regarding the confidentiality and security of our users' data.",
    text2: "Below are the privacy rules that we follow:",
    text3:"1. Collection and use of information",
    text4: "We collect only the information that is necessary to provide our services. We do not sell, rent or exchange information about our users with third parties without their explicit consent.",
    text5: "2. Information storage",
    text6: "We take all necessary measures to protect our users' information from unauthorized access, use or disclosure. We store information on secure servers and take all necessary measures to ensure the security of these servers",
    text7: "3. Use of cookies",
    text8: "We use cookies to improve the performance of our platform and provide our users with a more personalized experience. We do not use cookies to track users or collect personal information.",
    text9:"4. Links to third-party sites",
    text10:  "Our platform may contain links to third-party sites that are not controlled by us. We are not responsible for the privacy and security of data on these sites.",
    text11:"5. Limitation of Liability",
    text12: "We are not responsible for any damage caused to users as a result of a violation of their privacy or data security on our platform, if it was not our fault.",
    text13: "We strive to provide our users with maximum privacy and data security on our platform. If you have any questions or comments, please contact our support team.",
    text14: "Our servers are located in secure and controlled environments where access to data is strictly limited and requires authorization. All information of our users is transmitted using secure communication protocols that provide encryption and data protection during their transmission.",
    text15:  "We also regularly update our security systems and procedures to ensure that our users' data remains protected and confidential at all times. We use the most up-to-date technologies and tools to protect data, as well as monitor for new vulnerabilities and security threats in order to respond quickly and minimize risks.",
    text16:"Our team is constantly working to ensure the security and confidentiality of our platform's data. We pay special attention to training our staff in security and privacy rules so that every employee of Intersection Corporation is ready to ensure the security and confidentiality of user data.",
    text17: "Our platform also provides users with the ability to manage their data, including the ability to change and delete it. We collect only the data that is necessary to provide our services and process them only in accordance with our data processing rules and procedures",
    text18:"We are proud to provide a high level of data security and privacy to our users. If you have any questions or concerns related to data security and privacy, please contact our support team and we will be happy to help you."
}


    const [lang, setLang] = useState('ru')
    
    
    return (
        <>
            <Navigation background="white" rubtn={() => setLang('ru')} lang={lang} enbtn={() => setLang('en')} />
            
            
            <h1 className="firstHeaderText">{lang === 'ru' ?policyDB.firstHeaderText :policyDBeng.firstHeaderText }</h1>
            <p className="textParag">{lang === 'ru' ?policyDB.text1:policyDBeng.text1}</p>
            <p className="textParag"> {lang === 'ru' ?policyDB.text2:policyDBeng.text2} </p>
            
            <div className="padding">
            <p className="textParag"> <b>{lang === 'ru' ?policyDB.text3:policyDBeng.text3}</b> </p>
            <p className="textParag"> {lang === 'ru' ?policyDB.text4:policyDBeng.text4}</p>
            <p className="textParag"> <b>{lang === 'ru' ?policyDB.text5:policyDBeng.text5}</b> </p>
            <p className="textParag"> {lang === 'ru' ?policyDB.text6:policyDBeng.text6}</p>
            <p className="textParag"> <b>{lang === 'ru' ?policyDB.text7:policyDBeng.text7}</b> </p>
            <p className="textParag"> {lang === 'ru' ?policyDB.text8:policyDBeng.text8}</p>
            <p className="textParag"> <b>{lang === 'ru' ?policyDB.text9:policyDBeng.text9}</b> </p>
            <p className="textParag"> {lang === 'ru' ?policyDB.text10:policyDBeng.text10}</p>
            <p className="textParag"> <b>{lang === 'ru' ?policyDB.text11:policyDBeng.text11}</b> </p>
            <p className="textParag"> {lang === 'ru' ?policyDB.text12:policyDBeng.text12}</p>
            <p className="textParag"> {lang === 'ru' ?policyDB.text13:policyDBeng.text13}</p>
            <div className="space"></div>
            
            </div>
            <p className="textParag"> {lang === 'ru' ?policyDB.text14:policyDBeng.text14}</p>
            <p className="textParag"> {lang === 'ru' ?policyDB.text15:policyDBeng.text15}</p>
            <p className="textParag"> {lang === 'ru' ?policyDB.text16:policyDBeng.text16}</p>
            <p className="textParag"> {lang === 'ru' ?policyDB.text17:policyDBeng.text17}</p>
            <p className="textParag"> {lang === 'ru' ?policyDB.text18:policyDBeng.text18}</p>
            <div className="space2"></div>
            <Footer lang={lang} />
        </>
    )
}