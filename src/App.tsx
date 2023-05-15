import React , {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { News } from './component news/news';
import { Lectures } from './component lectures/lectures';
import { Newscomponent } from './component news/newscard';
import { Lecturescomponent } from './component lectures/lecturescard';
import zapyatie from './img/“.png'
import mobileGrayLogo from './img/mobile-menu.png'
import newslogo from './img/news.png'
import lecture from './img/lecture.png'
import states from './img/copywriting 5.png'
import book from './img/book.png'
import donation from './img/donation.png'
import footerlogo from './img/footerlogo.png'
import block from './img/sredizemnoe.jpg'

function App() {

    const cardDB = {
        url : [block , block , block , block, block , block , block , block],
        firstHeaderText : ['Средиземное море - это большой водоем, разделяющий Европу, Африку и Азию.' , 
        'Средиземное море - это большой водоем, разделяющий Европу, Африку и Азию.' , 
        'Средиземное море - это большой водоем, разделяющий Европу, Африку и Азию.', 
        'Средиземное море - это большой водоем, разделяющий Европу, Африку и Азию.',
        'Средиземное море - это большой водоем, разделяющий Европу, Африку и Азию.' , 
        'Средиземное море - это большой водоем, разделяющий Европу, Африку и Азию.' , 
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

         `Если присмотреться,
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
                Only people and objects in the frame move.Richie's is the opposite.`,

                `If you look closely,
                you will notice that most often in movies the camera is static. Yes, there are general plans
                with which some action is shown, there are large ones, usually with the emotions of the characters,
                but, as a rule, the camera does not move. 
                Only people and objects in the frame move.Richie's is the opposite.`,

                `If you look closely,
                you will notice that most often in movies the camera is static. Yes, there are general plans
                with which some action is shown, there are large ones, usually with the emotions of the characters,
                but, as a rule, the camera does not move. 
                Only people and objects in the frame move.Richie's is the opposite.`,

                `If you look closely,
                you will notice that most often in movies the camera is static. Yes, there are general plans
                with which some action is shown, there are large ones, usually with the emotions of the characters,
                but, as a rule, the camera does not move. 
                Only people and objects in the frame move.Richie's is the opposite.`,

                `If you look closely,
                you will notice that most often in movies the camera is static. Yes, there are general plans
                with which some action is shown, there are large ones, usually with the emotions of the characters,
                but, as a rule, the camera does not move. 
                Only people and objects in the frame move.Richie's is the opposite.`,

                `If you look closely,
                you will notice that most often in movies the camera is static. Yes, there are general plans
                with which some action is shown, there are large ones, usually with the emotions of the characters,
                but, as a rule, the camera does not move. 
                Only people and objects in the frame move.Richie's is the opposite.`,

                `If you look closely,
                you will notice that most often in movies the camera is static. Yes, there are general plans
                with which some action is shown, there are large ones, usually with the emotions of the characters,
                but, as a rule, the camera does not move. 
                Only people and objects in the frame move.Richie's is the opposite.`,

                `If you look closely,
                you will notice that most often in movies the camera is static. Yes, there are general plans
                with which some action is shown, there are large ones, usually with the emotions of the characters,
                but, as a rule, the camera does not move. 
                Only people and objects in the frame move.Richie's is the opposite.`,
                ],
        type: ['Экология' , 'Экология' , 'Экология' , 'Экология', 'Экология' , 'Экология' , 'Экология' , 'Экология'],
        entype: ['Ecology' , 'Ecology', 'Ecology' , 'Ecology', 'Ecology' , 'Ecology', 'Ecology' , 'Ecology'],
        date: [
            '1 апреля, 2023' , 
            '1 апреля, 2023' ,
            '1 апреля, 2023' ,
            '1 апреля, 2023' ,
            '1 апреля, 2023' ,
            '1 апреля, 2023' ,
            '1 апреля, 2023' , 
            '1 апреля, 2023'
        ],
        endate : [
            '1 april, 2023',
            '1 april, 2023',
            '1 april, 2023',
            '1 april, 2023',
            '1 april, 2023',
            '1 april, 2023',
            '1 april, 2023',
            '1 april, 2023',
        ],
        secondHeaderText : [
            'Кого уволили и что говорят CEO глобальных tech-компаний',
            '',
            'Кого уволили и что говорят CEO глобальных tech-компаний',
            'Кого уволили и что говорят CEO глобальных tech-компаний',
            'Кого уволили и что говорят CEO глобальных tech-компаний',
            'Кого уволили и что говорят CEO глобальных tech-компаний',
            'Кого уволили и что говорят CEO глобальных tech-компаний',
            'Кого уволили и что говорят CEO глобальных tech-компаний'
        ],
        secondEnHeaderText : [
            'Who was fired and what the CEOs of global tech companies say',
            '',
            'Who was fired and what the CEOs of global tech companies say',
            'Who was fired and what the CEOs of global tech companies say',
            'Who was fired and what the CEOs of global tech companies say',
            'Who was fired and what the CEOs of global tech companies say',
            'Who was fired and what the CEOs of global tech companies say',
            'Who was fired and what the CEOs of global tech companies say'
        ],
        secondText: [
            `Волна увольнений в 2022 году вызывает флешбэки из прошлого. 
            Во время «пузыря доткомов» (1995–2001 гг.) индекс технологических компаний NASDAQ упал 
            более чем в 1,5 раза при закрытии торгов. А в результате глобального финансового кризиса 2008-го 
            интернет-компании резко сократили рабочие места, чтобы избежать убытков. Ситуация повторяется сегодня, 
            и глобальные лидеры не хотят впускать кризис в свой бизнес. Пандемия ковида спровоцировала замедление роста 
            мировых экономик, а война в Украине, которую развязала россия, вызвала рост инфляции на 2,9% по всему миру. Вот что говорят 
            гендиректора крупнейших tech-компаний:`,

            ``,
            
            `Волна увольнений в 2022 году вызывает флешбэки из прошлого. 
            Во время «пузыря доткомов» (1995–2001 гг.) индекс технологических компаний NASDAQ упал 
            более чем в 1,5 раза при закрытии торгов. А в результате глобального финансового кризиса 2008-го 
            интернет-компании резко сократили рабочие места, чтобы избежать убытков. Ситуация повторяется сегодня, 
            и глобальные лидеры не хотят впускать кризис в свой бизнес. Пандемия ковида спровоцировала замедление роста 
            мировых экономик, а война в Украине, которую развязала россия, вызвала рост инфляции на 2,9% по всему миру. Вот что говорят 
            гендиректора крупнейших tech-компаний:`,
            
            `Волна увольнений в 2022 году вызывает флешбэки из прошлого. 
            Во время «пузыря доткомов» (1995–2001 гг.) индекс технологических компаний NASDAQ упал 
            более чем в 1,5 раза при закрытии торгов. А в результате глобального финансового кризиса 2008-го 
            интернет-компании резко сократили рабочие места, чтобы избежать убытков. Ситуация повторяется сегодня, 
            и глобальные лидеры не хотят впускать кризис в свой бизнес. Пандемия ковида спровоцировала замедление роста 
            мировых экономик, а война в Украине, которую развязала россия, вызвала рост инфляции на 2,9% по всему миру. Вот что говорят 
            гендиректора крупнейших tech-компаний:`,
            
            `Волна увольнений в 2022 году вызывает флешбэки из прошлого. 
            Во время «пузыря доткомов» (1995–2001 гг.) индекс технологических компаний NASDAQ упал 
            более чем в 1,5 раза при закрытии торгов. А в результате глобального финансового кризиса 2008-го 
            интернет-компании резко сократили рабочие места, чтобы избежать убытков. Ситуация повторяется сегодня, 
            и глобальные лидеры не хотят впускать кризис в свой бизнес. Пандемия ковида спровоцировала замедление роста 
            мировых экономик, а война в Украине, которую развязала россия, вызвала рост инфляции на 2,9% по всему миру. Вот что говорят 
            гендиректора крупнейших tech-компаний:`,
            
            `Волна увольнений в 2022 году вызывает флешбэки из прошлого. 
            Во время «пузыря доткомов» (1995–2001 гг.) индекс технологических компаний NASDAQ упал 
            более чем в 1,5 раза при закрытии торгов. А в результате глобального финансового кризиса 2008-го 
            интернет-компании резко сократили рабочие места, чтобы избежать убытков. Ситуация повторяется сегодня, 
            и глобальные лидеры не хотят впускать кризис в свой бизнес. Пандемия ковида спровоцировала замедление роста 
            мировых экономик, а война в Украине, которую развязала россия, вызвала рост инфляции на 2,9% по всему миру. Вот что говорят 
            гендиректора крупнейших tech-компаний:`,
            
            `Волна увольнений в 2022 году вызывает флешбэки из прошлого. 
            Во время «пузыря доткомов» (1995–2001 гг.) индекс технологических компаний NASDAQ упал 
            более чем в 1,5 раза при закрытии торгов. А в результате глобального финансового кризиса 2008-го 
            интернет-компании резко сократили рабочие места, чтобы избежать убытков. Ситуация повторяется сегодня, 
            и глобальные лидеры не хотят впускать кризис в свой бизнес. Пандемия ковида спровоцировала замедление роста 
            мировых экономик, а война в Украине, которую развязала россия, вызвала рост инфляции на 2,9% по всему миру. Вот что говорят 
            гендиректора крупнейших tech-компаний:`,
            
            `Волна увольнений в 2022 году вызывает флешбэки из прошлого. 
            Во время «пузыря доткомов» (1995–2001 гг.) индекс технологических компаний NASDAQ упал 
            более чем в 1,5 раза при закрытии торгов. А в результате глобального финансового кризиса 2008-го 
            интернет-компании резко сократили рабочие места, чтобы избежать убытков. Ситуация повторяется сегодня, 
            и глобальные лидеры не хотят впускать кризис в свой бизнес. Пандемия ковида спровоцировала замедление роста 
            мировых экономик, а война в Украине, которую развязала россия, вызвала рост инфляции на 2,9% по всему миру. Вот что говорят 
            гендиректора крупнейших tech-компаний:`
        ],
        secondEnText : [
            `The wave of layoffs 
            in 2022 causes flashbacks from the past. 
            During the dotcom bubble (1995-2001), the NASDAQ 
            index of technology companies fell by more than 1.5 times at the close of trading. And as a 
            result of the global financial crisis of 2008, Internet companies dramatically cut jobs to avoid losses. The 
            situation is repeating itself today, and global leaders do not want to let the crisis into their business. 
            The Covid pandemic provoked a slowdown in the growth of world economies, and the war in Ukraine, which Russia 
            unleashed, caused inflation to rise by 2.9% worldwide.

            Here's what the CEOs of the largest tech companies say:`,

            ``,

            `The wave of layoffs 
            in 2022 causes flashbacks from the past. 
            During the dotcom bubble (1995-2001), the NASDAQ 
            index of technology companies fell by more than 1.5 times at the close of trading. And as a 
            result of the global financial crisis of 2008, Internet companies dramatically cut jobs to avoid losses. The 
            situation is repeating itself today, and global leaders do not want to let the crisis into their business. 
            The Covid pandemic provoked a slowdown in the growth of world economies, and the war in Ukraine, which Russia 
            unleashed, caused inflation to rise by 2.9% worldwide.

            Here's what the CEOs of the largest tech companies say:`,

            `The wave of layoffs 
            in 2022 causes flashbacks from the past. 
            During the dotcom bubble (1995-2001), the NASDAQ 
            index of technology companies fell by more than 1.5 times at the close of trading. And as a 
            result of the global financial crisis of 2008, Internet companies dramatically cut jobs to avoid losses. The 
            situation is repeating itself today, and global leaders do not want to let the crisis into their business. 
            The Covid pandemic provoked a slowdown in the growth of world economies, and the war in Ukraine, which Russia 
            unleashed, caused inflation to rise by 2.9% worldwide. Here's what the CEOs of the largest tech companies say:`,

            `The wave of layoffs 
            in 2022 causes flashbacks from the past. 
            During the dotcom bubble (1995-2001), the NASDAQ 
            index of technology companies fell by more than 1.5 times at the close of trading. And as a 
            result of the global financial crisis of 2008, Internet companies dramatically cut jobs to avoid losses. The 
            situation is repeating itself today, and global leaders do not want to let the crisis into their business. 
            The Covid pandemic provoked a slowdown in the growth of world economies, and the war in Ukraine, which Russia 
            unleashed, caused inflation to rise by 2.9% worldwide. Here's what the CEOs of the largest tech companies say:`,

            `The wave of layoffs 
            in 2022 causes flashbacks from the past. 
            During the dotcom bubble (1995-2001), the NASDAQ 
            index of technology companies fell by more than 1.5 times at the close of trading. And as a 
            result of the global financial crisis of 2008, Internet companies dramatically cut jobs to avoid losses. The 
            situation is repeating itself today, and global leaders do not want to let the crisis into their business. 
            The Covid pandemic provoked a slowdown in the growth of world economies, and the war in Ukraine, which Russia 
            unleashed, caused inflation to rise by 2.9% worldwide. Here's what the CEOs of the largest tech companies say:`,

            `The wave of layoffs 
            in 2022 causes flashbacks from the past. 
            During the dotcom bubble (1995-2001), the NASDAQ 
            index of technology companies fell by more than 1.5 times at the close of trading. And as a 
            result of the global financial crisis of 2008, Internet companies dramatically cut jobs to avoid losses. The 
            situation is repeating itself today, and global leaders do not want to let the crisis into their business. 
            The Covid pandemic provoked a slowdown in the growth of world economies, and the war in Ukraine, which Russia 
            unleashed, caused inflation to rise by 2.9% worldwide. Here's what the CEOs of the largest tech companies say:`,

            `The wave of layoffs 
            in 2022 causes flashbacks from the past. 
            During the dotcom bubble (1995-2001), the NASDAQ 
            index of technology companies fell by more than 1.5 times at the close of trading. And as a 
            result of the global financial crisis of 2008, Internet companies dramatically cut jobs to avoid losses. The 
            situation is repeating itself today, and global leaders do not want to let the crisis into their business. 
            The Covid pandemic provoked a slowdown in the growth of world economies, and the war in Ukraine, which Russia 
            unleashed, caused inflation to rise by 2.9% worldwide. Here's what the CEOs of the largest tech companies say:`,
        ],
        thirdHeaderText : [
            '#1. Twitter',
            '#1. Twitter',
            '#1. Twitter',
            '#1. Twitter',
            '#1. Twitter',
            '#1. Twitter',
            '#1. Twitter',
            '#1. Twitter',
        ],
        thirdEnHeaderText : [
            '#1. Twitter',
            '#1. Twitter',
            '#1. Twitter',
            '#1. Twitter',
            '#1. Twitter',
            '#1. Twitter',
            '#1. Twitter',
            '#1. Twitter',
        ],
        thirdText : [
            `Количество уволенных сотрудников: около 7,5 тыс.

            Кого затронули увольнения: топ-менеджмент Twitter, контрактников, которые отвечали за модерацию контента, 
            инженеров дата-центров. А также сотрудников продуктового отдела, маркетинга, продаж, разработки и legal.

            Что сказал Илон Маск, CEO Twitter: «Говоря о сокращениях в Twitter, у компании, к сожалению, нет выбора, 
            когда она теряет более $4 млн в день. Все сотрудники, которые были уволены, получили 3-месячное выходное пособие.
            Это на 50% больше, чем положено законом».`,

            `Количество уволенных сотрудников: около 7,5 тыс.

            Кого затронули увольнения: топ-менеджмент Twitter, контрактников, которые отвечали за модерацию контента, 
            инженеров дата-центров. А также сотрудников продуктового отдела, маркетинга, продаж, разработки и legal.

            Что сказал Илон Маск, CEO Twitter: «Говоря о сокращениях в Twitter, у компании, к сожалению, нет выбора, 
            когда она теряет более $4 млн в день. Все сотрудники, которые были уволены, получили 3-месячное выходное пособие.
            Это на 50% больше, чем положено законом».`,

            `Количество уволенных сотрудников: около 7,5 тыс.

            Кого затронули увольнения: топ-менеджмент Twitter, контрактников, которые отвечали за модерацию контента, 
            инженеров дата-центров. А также сотрудников продуктового отдела, маркетинга, продаж, разработки и legal.

            Что сказал Илон Маск, CEO Twitter: «Говоря о сокращениях в Twitter, у компании, к сожалению, нет выбора, 
            когда она теряет более $4 млн в день. Все сотрудники, которые были уволены, получили 3-месячное выходное пособие.
            Это на 50% больше, чем положено законом».`,

            `Количество уволенных сотрудников: около 7,5 тыс.

            Кого затронули увольнения: топ-менеджмент Twitter, контрактников, которые отвечали за модерацию контента, 
            инженеров дата-центров. А также сотрудников продуктового отдела, маркетинга, продаж, разработки и legal.

            Что сказал Илон Маск, CEO Twitter: «Говоря о сокращениях в Twitter, у компании, к сожалению, нет выбора, 
            когда она теряет более $4 млн в день. Все сотрудники, которые были уволены, получили 3-месячное выходное пособие.
            Это на 50% больше, чем положено законом».`,

            `Количество уволенных сотрудников: около 7,5 тыс.

            Кого затронули увольнения: топ-менеджмент Twitter, контрактников, которые отвечали за модерацию контента, 
            инженеров дата-центров. А также сотрудников продуктового отдела, маркетинга, продаж, разработки и legal.

            Что сказал Илон Маск, CEO Twitter: «Говоря о сокращениях в Twitter, у компании, к сожалению, нет выбора, 
            когда она теряет более $4 млн в день. Все сотрудники, которые были уволены, получили 3-месячное выходное пособие.
            Это на 50% больше, чем положено законом».`,

            `Количество уволенных сотрудников: около 7,5 тыс.

            Кого затронули увольнения: топ-менеджмент Twitter, контрактников, которые отвечали за модерацию контента, 
            инженеров дата-центров. А также сотрудников продуктового отдела, маркетинга, продаж, разработки и legal.

            Что сказал Илон Маск, CEO Twitter: «Говоря о сокращениях в Twitter, у компании, к сожалению, нет выбора, 
            когда она теряет более $4 млн в день. Все сотрудники, которые были уволены, получили 3-месячное выходное пособие.
            Это на 50% больше, чем положено законом».`,
                        
            `Количество уволенных сотрудников: около 7,5 тыс.

            Кого затронули увольнения: топ-менеджмент Twitter, контрактников, которые отвечали за модерацию контента, 
            инженеров дата-центров. А также сотрудников продуктового отдела, маркетинга, продаж, разработки и legal.

            Что сказал Илон Маск, CEO Twitter: «Говоря о сокращениях в Twitter, у компании, к сожалению, нет выбора, 
            когда она теряет более $4 млн в день. Все сотрудники, которые были уволены, получили 3-месячное выходное пособие.
            Это на 50% больше, чем положено законом».`,
                        
            `Количество уволенных сотрудников: около 7,5 тыс.

            Кого затронули увольнения: топ-менеджмент Twitter, контрактников, которые отвечали за модерацию контента, 
            инженеров дата-центров. А также сотрудников продуктового отдела, маркетинга, продаж, разработки и legal.

            Что сказал Илон Маск, CEO Twitter: «Говоря о сокращениях в Twitter, у компании, к сожалению, нет выбора, 
            когда она теряет более $4 млн в день. Все сотрудники, которые были уволены, получили 3-месячное выходное пособие.
            Это на 50% больше, чем положено законом».`,
            
        ],
        thirdEnText : [
            `Number of dismissed employees: about 7.5 thousand.

            Who was affected by the layoffs: Twitter's top management, contractors who were responsible for content moderation,
             data center engineers. As well as employees of the product department, marketing, sales, development and legal.

            What Elon Musk, CEO of Twitter, said: "Speaking of cuts at Twitter, unfortunately, the company has no choice when 
            it loses more than $4 million a day. All employees who were laid off received a 3-month severance package. This is
            50% more than the legal limit."`,

            `Number of dismissed employees: about 7.5 thousand.

            Who was affected by the layoffs: Twitter's top management, contractors who were responsible for content moderation,
             data center engineers. As well as employees of the product department, marketing, sales, development and legal.

            What Elon Musk, CEO of Twitter, said: "Speaking of cuts at Twitter, unfortunately, the company has no choice when 
            it loses more than $4 million a day. All employees who were laid off received a 3-month severance package. This is
            50% more than the legal limit."`,

            `Number of dismissed employees: about 7.5 thousand.

            Who was affected by the layoffs: Twitter's top management, contractors who were responsible for content moderation,
             data center engineers. As well as employees of the product department, marketing, sales, development and legal.

            What Elon Musk, CEO of Twitter, said: "Speaking of cuts at Twitter, unfortunately, the company has no choice when 
            it loses more than $4 million a day. All employees who were laid off received a 3-month severance package. This is
            50% more than the legal limit."`,

            `Number of dismissed employees: about 7.5 thousand.

            Who was affected by the layoffs: Twitter's top management, contractors who were responsible for content moderation,
             data center engineers. As well as employees of the product department, marketing, sales, development and legal.

            What Elon Musk, CEO of Twitter, said: "Speaking of cuts at Twitter, unfortunately, the company has no choice when 
            it loses more than $4 million a day. All employees who were laid off received a 3-month severance package. This is
            50% more than the legal limit."`,

            `Number of dismissed employees: about 7.5 thousand.

            Who was affected by the layoffs: Twitter's top management, contractors who were responsible for content moderation,
             data center engineers. As well as employees of the product department, marketing, sales, development and legal.

            What Elon Musk, CEO of Twitter, said: "Speaking of cuts at Twitter, unfortunately, the company has no choice when 
            it loses more than $4 million a day. All employees who were laid off received a 3-month severance package. This is
            50% more than the legal limit."`,

            `Number of dismissed employees: about 7.5 thousand.

            Who was affected by the layoffs: Twitter's top management, contractors who were responsible for content moderation,
             data center engineers. As well as employees of the product department, marketing, sales, development and legal.

            What Elon Musk, CEO of Twitter, said: "Speaking of cuts at Twitter, unfortunately, the company has no choice when 
            it loses more than $4 million a day. All employees who were laid off received a 3-month severance package. This is
            50% more than the legal limit."`,

            `Number of dismissed employees: about 7.5 thousand.

            Who was affected by the layoffs: Twitter's top management, contractors who were responsible for content moderation,
             data center engineers. As well as employees of the product department, marketing, sales, development and legal.

            What Elon Musk, CEO of Twitter, said: "Speaking of cuts at Twitter, unfortunately, the company has no choice when 
            it loses more than $4 million a day. All employees who were laid off received a 3-month severance package. This is
            50% more than the legal limit."`,

            `Number of dismissed employees: about 7.5 thousand.

            Who was affected by the layoffs: Twitter's top management, contractors who were responsible for content moderation,
             data center engineers. As well as employees of the product department, marketing, sales, development and legal.

            What Elon Musk, CEO of Twitter, said: "Speaking of cuts at Twitter, unfortunately, the company has no choice when 
            it loses more than $4 million a day. All employees who were laid off received a 3-month severance package. This is
            50% more than the legal limit."`
        ],

        hashtags : [
            '#Экология #Природа #Nature-проекты #Гидросфера',
            '#Экология #Природа #Nature-проекты #Гидросфера',
            '#Экология #Природа #Nature-проекты #Гидросфера',
            '#Экология #Природа #Nature-проекты #Гидросфера',
            '#Экология #Природа #Nature-проекты #Гидросфера',
            '#Экология #Природа #Nature-проекты #Гидросфера',
            '#Экология #Природа #Nature-проекты #Гидросфера',
            '#Экология #Природа #Nature-проекты #Гидросфера',
        ],
        enhashtags : [
            '#Ecology #Nature #Nature-projects #Hydrosphere',
            '#Ecology #Nature #Nature-projects #Hydrosphere',
            '#Ecology #Nature #Nature-projects #Hydrosphere',
            '#Ecology #Nature #Nature-projects #Hydrosphere',
            '#Ecology #Nature #Nature-projects #Hydrosphere',
            '#Ecology #Nature #Nature-projects #Hydrosphere',
            '#Ecology #Nature #Nature-projects #Hydrosphere',
            '#Ecology #Nature #Nature-projects #Hydrosphere',
        ]
    }
    const totagdata = cardDB.firstHeaderText.map((item , index) => (
        <Route 
            key={index}
            path={'/newscard' + index} 
            element={
                <Newscomponent 
                    key={index}

                    firstHeaderText={item} 

                    firstText={cardDB.firstText[index]} 

                    url={cardDB.url[index]} 

                    firstEnHeaderText={cardDB.enHeaderText[index]} 

                    firstEnText={cardDB.enText[index]}

                    secondHeaderText={cardDB.secondHeaderText[index]}

                    secondEnHeaderText={cardDB.secondEnHeaderText[index]}

                    secondText={cardDB.secondText[index]}

                    secondEnText={cardDB.secondEnText[index]}

                    thirdHeaderText={cardDB.thirdHeaderText[index]}

                    thirdEnHeaderText={cardDB.thirdEnHeaderText[index]}

                    thirdText={cardDB.thirdText[index]}

                    thirdEnText={cardDB.thirdEnText[index]}

                    category={cardDB.type[index]} 

                    encategory={cardDB.entype[index]}

                    hashtags={cardDB.hashtags[index]}

                    enhashtags={cardDB.enhashtags[index]}

                    endate={cardDB.endate[index]}

                    date={cardDB.date[index]}
                />
            }
        />
    ))

    const totagdata2 = cardDB.firstHeaderText.map((item , index) => (
        <Route path={'/lecturescard' + index} element={
                <Lecturescomponent 
                firstHeaderText={item} 
                firstEnHeaderText={cardDB.enHeaderText[index]} 
                firstText={cardDB.firstText[index]} 
                firstEnText={cardDB.enText[index]} 
                hashtags={cardDB.hashtags[index]} 
                enhashtags={cardDB.enhashtags[index]} 
                category={cardDB.type[index]}
                encategory={cardDB.entype[index]}
                url={cardDB.url[index]}
                date={cardDB.date[index]}
                endate={cardDB.endate[index]}
                />
            }
        />
        
    ))
    return (
        <>
            <Router>
                <Routes>
                    {totagdata}
                    {totagdata2}
                    <Route path='/lectures' element={<Lectures/>}/>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/news' element={<News/>}/>
                </Routes>
            </Router>
        </>
    );
}

function HomePage() {
    const [lang , setLang] = useState('ru')

    let location = useLocation()

    useEffect(() => {
        window.scrollTo({ top: 0});
    }, [location]);

    return (
      <>
                    <header>
                        <Navigation background='black' rubtn={() => setLang('ru')} lang={lang} enbtn={() => setLang('en')}/>
                        <video src={require('./video/planet.mov')} loop autoPlay muted style={{position : 'absolute' , top: 0, zIndex:3}}/>
                    </header>
                    <main className={location.pathname === '/' ? 'main-animation min-width ' : 'min-width '}>
                          <section className='center'>
                              <h1 className='maintext'><span>The</span> Intersection</h1>
                              <div className='main-text-border'></div>
                                    <p className='padding-top-bottom main-paragraph not-mobile'>{lang === 'ru' ? `The 
                                    Intersection 
                                    Corporation - не просто платформа, а возвышенный инструмент для исследования 
                                    сложных взаимодействий между экономикой, политикой и культурой. Наша грандиозная 
                                    миссия заключается в предоставлении истинного понимания тесной связи между этими 
                                    силами, которые играют важную роль в нашем быстро меняющемся мире. Мы с особым 
                                    рвением и усердием стремимся раскрыть тайны взаимодействий этих областей, чтобы 
                                    обеспечить глубокое и многогранное понимание современной реальности.` : 

                                              `The Intersection Corporation is not just a platform, but a 
                                              sublime tool for exploring 
                                              the complex interactions between economics, politics and culture.
                                               Our grand mission is to 
                                              provide a true understanding of the close connection between 
                                              these forces that play an 
                                              important role in our rapidly changing world. We strive with 
                                              special zeal and diligence 
                                              to uncover the secrets of the interactions of these areas in 
                                              order to provide a deep and
                                               multifaceted understanding of modern reality.`
                                          
                                          }
                                      </p>
                                      <p className='padding-top-bottom main-paragraph not-mobile' style={{paddingTop:0, marginTop:0}}>
                                          {lang === 'ru' ? `The Intersection Corporation - 
                                                        это мощная платформа, которая не просто облегчает 
                                                        дискуссии о силах, формирующих наш мир, но и углубляет 
                                                        понимание их взаимосвязей. Мы являемся настоящими популяризаторами 
                                                        науки, обеспечивая доступ к актуальным исследованиям и тенденциям, 
                                                        которые помогают лучше понять сложные взаимодействия в нашем мире.` :
                                                         `The Intersection Corporation is a powerful platform 
                                                         that not only facilitates discussions about the forces 
                                                         shaping our world, 
                                                         but also deepens the understanding of their interrelationships. We 
                                                         are real 
                                                         popularizers of science, providing access to current research 
                                                         and trends that help 
                                                         to better understand complex interactions in our world.`}
                                      </p>
                                      <p className='padding-top-bottom main-paragraph not-mobile' style={{paddingTop:0, marginTop:0}}>
                                          {lang === 'ru' ? `В нашей команде собраны опытные ведущие и эксперты, каждый из которых обладает высоким уровнем 
                                          знаний и опыта в своей области - экономике, политике и культуре. Мы предоставляем максимально детальный анализ 
                                          и увлекательные дискуссии на эту тему, используя нашу платформу, доступную как на YouTube, так и на нашем
                                           веб-сайте, где вы найдете множество интересной и полезной информации о темах, которые мы освещаем.` :
                                                         `Our team consists of experienced presenters and experts, each of whom has a high level 
                                                         of knowledge and experience in 
                                                         their field - economics, politics and culture. We provide the most detailed analysis 
                                                         and fascinating discussions on this 
                                                         topic using our platform, available both on YouTube and on our website, where you will 
                                                         find a lot of interesting and 
                                                         useful information about the topics that we cover.
                                                         `}
                                      </p>
                                      <p className='padding-top-bottom main-paragraph not-mobile' style={{paddingTop:0, marginTop:0}}>
                                          {lang === 'ru' ? `Присоединяйтесь к нам, чтобы получить 
                                          эксклюзивный взгляд на сложные взаимодействия между экономикой, политикой 
                                          и культурой и обрести глубокое понимание современного мира. Всем 
                                          искателям знаний предоставляется уникальная возможность 
                                          взглянуть на мир вокруг себя совершенно по-новому.` :
                                                         `Join us to get an exclusive look at the 
                                                         complex interactions between economics, politics and 
                                                         culture and gain a deep understanding of the 
                                                         modern world. All knowledge seekers are given a 
                                                         unique opportunity to look at the world around them 
                                                         in a completely new way.
                                                         `}
                                      </p>
                                    <p className='padding-top-bottom main-paragraph mobile' style={{paddingBottom:10}}>{lang === 'ru' ? `The Intersection 
                                    Corporation - не просто платформа, 
                                    а возвышенный инструмент для исследования 
                                    сложных взаимодействий между экономикой, 
                                    политикой и культурой. Наша грандиозная 
                                    миссия заключается в предоставлении 
                                    истинного понимания тесной связи 
                                    между этими силами, которые играют важную роль
                                    в нашем быстро меняющемся мире. Мы с особым рвением 
                                    и усердием стремимся раскрыть тайны взаимодействий этих областей, чтобы обеспечить 
                                    глубокое и многогранное понимание современной реальности.` : 

                                              `The Intersection Corporation is not just a platform, 
                                              but a sublime tool for exploring 
                                              the complex interactions between economics, politics and culture. Our grand 
                                              mission is to 
                                              provide a true understanding of the close connection between 
                                              these forces that play an 
                                              important role in our rapidly changing world. We strive 
                                              with special zeal and diligence 
                                              to uncover the secrets of the interactions of these areas in order to 
                                              provide a deep and
                                               multifaceted understanding of modern reality.`
                                          
                                          }
                                      </p>
                                      <p className='main-paragraph mobile' style={{margin:0, paddingBottom:20}}>
                                          {lang === 'ru' ? `The Intersection Corporation - это мощная платформа, которая 
                                    не просто облегчает дискуссии о силах, формирующих наш мир, 
                                    но и углубляет понимание их взаимосвязей. Мы являемся настоящими 
                                    популяризаторами науки, обеспечивая доступ к актуальным исследованиям 
                                    и тенденциям, которые помогают лучше понять сложные взаимодействия в нашем мире.` 
                                    :
                                    `The Intersection Corporation is a powerful platform that 
                                    It not only facilitates discussions about the forces shaping our world,
                                    but also deepens the understanding of their interrelationships. We are real 
                                    popularizers of science, providing access to relevant research 
                                    and trends that help to better understand complex interactions in our world.`}
                                      </p>                                      
                                  <div className='left citata min-width'>
                                        <img src={zapyatie} alt="" style={{position:'relative' , right:60}}/>
                                        <h1>{lang === 'ru' ? '"ИССЛЕДУЙТЕ ПЕРЕСЕЧЕНИЕ ИДЕЙ И ПРОБЛЕМ"':'"EXPLORE THE INTERSECTION OF IDEAS AND PROBLEMS"'}</h1>
                                        <h2>-Abylkhassan Ansar</h2>
                                  </div>
                          </section>
                    </main>
                    <Footer lang={lang}/>
      </>
    )
}

interface navprops {
    background : string;
    rubtn : () => void;
    enbtn : () => void;
    lang : string;
}

export function Navigation(props : navprops) {
    let location = useLocation()
    let [burgerMenu, setBurgerMenu] = useState<number>(0)
    let [secondBurgerMenu , setSecondBurgerMenu] = useState<number>(80)
    let links = {
        urls : ['/news' , '/lectures' , '' , '' , '', ''],
        textsRU : ['Новости', 'Лекции' , 'Статьи' , 'Книги' , 'Пожертвование', 'О нас'],
        textsEN : ['News' , 'Lectures', 'Articles', 'Books' , 'Donation', 'About us']
    }

    let mobileLinks = {
        urls : ['/','/news' , '/lectures' , '' , '' , ''],
        textsRU : ['Главная','Новости', 'Лекции' , 'Статьи' , 'Книги' , 'Пожертвование'],
        textsEN : ['Home', 'News' , 'Lectures', 'Articles', 'Books' , 'Donation'],
        imgurls : [mobileGrayLogo, newslogo, lecture, states, book, donation]
    }

    const [displays, setDisplays] = useState({
        xmark : '-100px',
        bars : '-2px'
    })

    let realMobileLinks = mobileLinks.textsRU.map((item , index) => (   
            <Link key={index} to={mobileLinks.urls[index]} className='display-flex align-items-center' style={{color: props.background.toLowerCase() === 'black' ? 'white':'black', marginTop:30, fontSize:22}} onClick={
              () => {
                  if(location.pathname !== mobileLinks.urls[index]){
                      removeoraddscroll('add')
                  }
              }}>
                <img src={mobileLinks.imgurls[index]} alt="" style={{marginRight:15}}/>
                {props.lang === 'ru' ? item : mobileLinks.textsEN[index]}
            </Link>
    ))

    let reallinks = links.urls.map((item , index) => (
        <Link key={index} to={item} style={props.background.toLowerCase() === 'black' ? {color:'white'} : {color:'black'}}>{props.lang === 'ru' ? links.textsRU[index] : links.textsEN[index]}</Link>
    ))

    let removeoraddscroll = (type: string) => {
        const body = document.getElementById('body');
        if (type === 'remove' && body) {
            body.style.overflowY = 'hidden';
        } else if (body) {
            body.style.overflowY = 'scroll';
        }
    };

    useEffect(() => {
      if(location.pathname === '/'){
          document.getElementById('body')?.classList.add('body')
      }else {
          document.getElementById('body')?.classList.remove('body')
      }
    }, [])
    return (
        <nav className={location.pathname === '/' ? 'border-hide' : ''} style={window.innerWidth >= 650 ? {maxHeight:88}: {maxHeight : secondBurgerMenu}}>
          <div className={location.pathname === '/' ? props.background.toLowerCase() === 'black' ? 'white real-border-hide':'black real-border-hide': props.background.toLowerCase() === 'black' ? 'white':'black'}>
            <div className='display-flex justify-between padding-top-bottom align-items-center mobilenav'>
                  <Link to='/' style={{color: props.background.toLowerCase() === 'black' ? 'white' : 'black'}}>
                      <div className={location.pathname === '/' ? 'display-flex align-items-center to-animate-logo logo' : 'display-flex align-items-center logo'}>
                        <div className={location.pathname === '/' ? 'display-flex align-items-center bigger-size-animation' : 'display-flex align-items-center'}>
                            <div id='firstcircle' className={location.pathname === '/' ? 'circle-animation' : ''}
                              style={props.background.toLowerCase() === 'black' ?
                              {border: '2px solid white'}: 
                              {border: '2px solid black'}
                            }>
                            </div>
                            <div id='white-ellipse' className={location.pathname === '/' ? 'center-ellipse-animation' : ''} 
                                style={props.background.toLowerCase() === 'black' ? 
                                {backgroundColor: 'white'}: 
                                {backgroundColor: 'black'}
                              }>
                            </div>
                            <div id='secondcircle' className={location.pathname === '/' ? 'circle-animation' : ''} 
                            style={
                                props.background.toLowerCase() === 'black' ? 
                                {border: '2px solid white'}: 
                                {border: '2px solid black'}
                              }>
                            </div>
                        </div>
                          <h1 className={location.pathname === '/' ? 'text-animation' : ''}>Intersection</h1>
                      </div>
                  </Link>
                  <div className={location.pathname === '/' ? 'display-flex align-items-center menu menu-animation ' : 'display-flex align-items-center menu'}>
                      {reallinks}
                      <button onClick={props.rubtn} style={props.background.toLowerCase() === 'black' ? {color : 'white'}:{color : 'black'}}>RU</button>
                      <button onClick={props.enbtn} style={props.background.toLowerCase() === 'black' ? {color : 'white'}:{color : 'black'}}>EN</button>
                  </div>
                    <div className='mobile'>
                        <i className={location.pathname === '/'  ? "fa fa-solid fa-bars bars-animation":'fa fa-solid fa-bars'} style={{color : props.background.toLowerCase() === 'black' ? 'white' : 'black', fontSize:30, top: displays.bars, transition:'0.4s' , position:'relative'}} onClick={() => {
                            setBurgerMenu(1)
                            setSecondBurgerMenu(1000)
                            setDisplays({
                                xmark : '8px',
                                bars:'-50px'
                            })
                            removeoraddscroll('remove')
                        }}></i>
                        <i className="fa fa-solid fa-x" style={{color : props.background.toLowerCase() === 'black' ? 'white' : 'black', fontSize:30, top: displays.xmark, transition:'0.4s', position:'absolute', right:'20px'}} onClick={() => {
                            setBurgerMenu(0)
                            setSecondBurgerMenu(80)
                            setDisplays({
                                xmark : '-50px',
                                bars:'-2px'
                            })
                            removeoraddscroll('add')
                        }}></i>
                    </div>
            </div>
              <div className='mobile'>
                  <div className='mobile-menu' style={{opacity:burgerMenu}}>
                      <div className='min-width padding-top-bottom to-scroll-y'>
                            <button onClick={props.rubtn} style={props.background.toLowerCase() === 'black' ? {color : 'white'}:{color : 'black'}}>RU</button>
                            <button onClick={props.enbtn} style={props.background.toLowerCase() === 'black' ? {color : 'white'}:{color : 'black'}}>EN</button>
                            {realMobileLinks}
                            <div style={{borderTop:'1px solid #C7C7C7', borderBottom:'1px solid #C7C7C7' , margin: '15px 0'}} className='padding-top-bottom'>
                                <h2 style={props.background.toLowerCase() === 'black' ? {color : 'white' , fontSize:30, marginTop:0}:{color : 'black', fontSize:30, marginTop:0}}>{props.lang === 'ru' ? 'О нас':'About us'}</h2>
                                <Link to='' style={{color: props.background.toLowerCase() === 'black' ? 'white':'black', marginTop:30, fontSize:22}} onClick={() => removeoraddscroll('add')}>{props.lang === 'ru' ? 'Контакты':'Contacts'}</Link><br /><br />
                                <Link to='' style={{color: props.background.toLowerCase() === 'black' ? 'white':'black', marginTop:30, fontSize:22}} onClick={() => removeoraddscroll('add')}>{props.lang === 'ru' ? 'Политика конфиденциальности':'Privacy policy'}</Link><br /><br />
                                <Link to='' style={{color: props.background.toLowerCase() === 'black' ? 'white':'black', marginTop:30, fontSize:22}} onClick={() => removeoraddscroll('add')}>{props.lang === 'ru' ? 'Публичная оферта':'Public offer'}</Link><br /><br />
                                <Link to='' style={{color: props.background.toLowerCase() === 'black' ? 'white':'black', marginTop:30, fontSize:22}} onClick={() => removeoraddscroll('add')}>{props.lang === 'ru' ? 'Карта сайта':'Site map'}</Link>
                            </div>
                            <div style={{margin: '15px 0'}}>
                                <h2 style={props.background.toLowerCase() === 'black' ? {color : 'white' , fontSize:30, marginTop:0}:{color : 'black', fontSize:30, marginTop:0}}>{props.lang === 'ru' ? 'Мы принимаем к оплате':'We accept payment'}</h2>
                                <div className='display-flex align-items-center'>
                                    <i className="fa fa-brands fa-cc-visa" style={{fontSize:50, marginRight:30, color: props.background.toLowerCase() === 'black' ? 'white':'black'}}></i>
                                    <i className="fa fa-brands fa-cc-mastercard" style={{fontSize:50, color: props.background.toLowerCase() === 'black' ? 'white':'black'}}></i>
                                </div>
                            </div>
                            <div className='display-flex align-items-center social-networks justify-between' style={{margin: '45px 0 0'}}>
                                <a href="https://instagram.com/the_intersection_corporation?igshid=ZGUzMzM3NWJiOQ==" target='_blank' className='social-network' style={{color: props.background.toLowerCase() === 'black' ? 'black':'white', backgroundColor: props.background.toLowerCase() === 'black' ? 'white':'black'}}><i className="fa fa-brands fa-square-instagram"></i></a>
                                <a href="https://www.linkedin.com/in/the-intersection-corporation-91b870276" target='_blank' className='social-network' style={{color: props.background.toLowerCase() === 'black' ? 'black':'white', backgroundColor: props.background.toLowerCase() === 'black' ? 'white':'black'}}><i className="fa fa-brands fa-linkedin"></i></a>
                                <a href="https://t.me/TheIntersectioncorporation" className='social-network' target='_blank' style={{color: props.background.toLowerCase() === 'black' ? 'black':'white', backgroundColor: props.background.toLowerCase() === 'black' ? 'white':'black'}}><i className="fa fa-brands fa-telegram"></i></a>
                                <a href="https://youtube.com/@TheIntersectionCorporation" target='_blank' className='social-network' style={{color: props.background.toLowerCase() === 'black' ? 'black':'white', backgroundColor: props.background.toLowerCase() === 'black' ? 'white':'black'}}><i className="fa fa-brands fa-square-youtube"></i></a>
                            </div>
                      </div>
                  </div>
              </div>
            </div>
        </nav>
    )
}

interface footerprops {
    lang: string
}

export function Footer(props:footerprops) {
    return (
      <>
        <footer className='padding-top-bottom'>
              <div className='min-width'>
                    <div className='display-flex align-items-center contacts justify-between'>
                        <Link to='/'><img src={footerlogo} alt="" /></Link>
                        <div className='display-flex align-items-center social-networks'>
                              <a href="https://instagram.com/the_intersection_corporation?igshid=ZGUzMzM3NWJiOQ==" target='_blank' className='social-network'><i className="fa fa-brands fa-square-instagram"></i></a>
                              <a href="https://www.linkedin.com/in/the-intersection-corporation-91b870276" target='_blank' className='social-network'><i className="fa fa-brands fa-linkedin"></i></a>
                              <a href="https://t.me/TheIntersectioncorporation" className='social-network' target='_blank'><i className="fa fa-brands fa-telegram"></i></a>
                              <a href="https://youtube.com/@TheIntersectionCorporation" target='_blank' className='social-network'><i className="fa fa-brands fa-square-youtube"></i></a>
                        </div>
                    </div>
                    <div className='justify-between footer not-mobile-flex flex-wrap'>
                        <div className='color-white footer-navigation'>
                            <h3>{props.lang === 'ru' ? 'НАВИГАЦИЯ':'NAVIGATION'}</h3>
                            <Link to='/news'>{props.lang === 'ru' ? 'Новости':'News'}</Link><br /><br />
                            <Link to='/lectures'>{props.lang === 'ru' ? 'Лекции':'Lectures'}</Link><br /><br />
                            <Link to=''>{props.lang === 'ru' ? 'Статьи':'Articles'}</Link><br /><br />
                            <Link to=''>{props.lang === 'ru' ? 'Книги':'Books'}</Link><br /><br />
                            <Link to=''>{props.lang === 'ru' ? 'Пожертвование':'Donate'}</Link><br /><br />
                        </div>
                        <div className='color-white footer-navigation'>
                            <h3>{props.lang === 'ru' ? 'ДОП.ИНФОРМАЦИЯ':'ADDITIONAL INFORMATION'}</h3>
                            <Link to=''>{props.lang === 'ru' ? 'Контакты':'Contacts'}</Link><br /><br />
                            <Link to=''>{props.lang === 'ru' ? 'Политика конфиденциальности':'Privacy policy'}</Link><br /><br />
                            <Link to=''>{props.lang === 'ru' ? 'О нас':'About us'}</Link><br /><br />
                        </div>
                        <div className='color-white footer-navigation job'>
                            <h3><Link to=''>{props.lang === 'ru' ? 'Корпоративные клиенты':'Corporate clients'}</Link></h3>
                            <h3><Link to=''>{props.lang === 'ru' ? 'Для резюме':'For resume'}</Link></h3>
                            <h3><Link to=''>{props.lang === 'ru' ? 'Сотрудничество':'Cooperation'}</Link></h3>
                        </div>
                        <div className='color-white footer-navigation job'>
                            <h3><Link to=''>{props.lang === 'ru' ? 'Карта сайта':'Site map'}</Link></h3>
                            <h3><Link to=''>{props.lang === 'ru' ? 'Публичная оферта':'Public offer'}</Link></h3>
                        </div>
                        <div className='color-white footer-navigation'>
                            <h3>{props.lang === 'ru' ? 'МЫ ПРИНИМАЕМ К ОПЛАТЕ':'WE ACCEPT PAYMENT'}</h3>
                            <div className='display-flex align-items-center'>
                                <i className="fa fa-brands fa-cc-visa" style={{fontSize:50, marginRight:30}}></i>
                                <i className="fa fa-brands fa-cc-mastercard" style={{fontSize:50}}></i>
                            </div>
                        </div>
                    </div>
                    <div className='mobile-flex flex-wrap justify-between footer'>
                        <div className='color-white footer-navigation'>
                            <Link to='' style={{fontSize:22}}>{props.lang === 'ru' ? 'Контакты':'Contacts'}</Link><br /><br />
                            <Link to='' style={{fontSize:22}}>{props.lang === 'ru' ? 'Политика конфиденциальности':'Privacy policy'}</Link><br /><br />
                            <Link to='' style={{fontSize:22}}>{props.lang === 'ru' ? 'Карта сайта':'Site map'}</Link><br /><br />
                        </div>
                        <div className='color-white footer-navigation'>
                            <h3 style={{fontWeight:700}}>{props.lang === 'ru' ? 'МЫ ПРИНИМАЕМ К ОПЛАТЕ':'WE ACCEPT PAYMENT'}</h3>
                            <div className='display-flex align-items-center'>
                                <i className="fa fa-brands fa-cc-visa" style={{fontSize:50, marginRight:30}}></i>
                                <i className="fa fa-brands fa-cc-mastercard" style={{fontSize:50}}></i>
                            </div>
                        </div>
                    </div>
              </div>  
        </footer>
      </>
    )
}

export default App;

