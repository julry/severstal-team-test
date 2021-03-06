import {
    alexEinstein,
    dmitriiFilin,
    eva,
    grishaPotter,
    illyaVoroshenec,
    ivanNedobriy,
    jackyChanov,
    jamesGoslingov,
    javonius,
    leonardoDaVinchin,
    michaelLomouhov, nazimirKalevich,
    nicolaiTesla,
    ninjaTurtles,
    pavelUmnov,
    rajaBharatiya,
    steelMan,
    steveWorks,
    superWoman,
    vinBenzin
} from "./constants/images";


export const projects = [{
        id: "1",
        title: 'Кто-то создаёт\nчат-боты...',
        list: ["«В отделе закупок мы хотим мгновенно получать информацию по всем поставщикам»",
                '«Юристам нужен быстрый доступ к необходимым документам»',
                '«Новым сотрудникам требуется удобная платформа со всей информацией в первые дни работы»'
            ],
        stepCounts: 1,
        result: {
            success: {
                title: 'Да ты огонь! Сразу видно, что не просто так за 3 года до Team lead должности добрался \n',
                text: '\nЗадачка решена в срок, всеми чат-ботами коллеги теперь занимаются сами, а мы пойдем разруливать следующее задание!'
            },
            fail: {
                title: 'Кажется что-то пошло не так…',
                text: 'Возможно, ты пока не разобрался, что к чему, но в следующем проекте точно нужно спасать свою репутацию.'
            }
        },
        team: [
            {
                id: '1',
                name: 'Стив Воркс',
                position: 'Технический архитектор',
                description: 'Человек, покоривший весь Воронеж своей историей успеха. \n' +
                    'Именно он прошёл огромный путь от мастерской в отцовском гараже до «Северсталь-инфокома». Говорят, что в своей собственной книге он описывает огромное множество всевозможных ИТ-решений для разных бизнес задач, а под его надзором разрабатываются многие программы и проекты. ',
                isCorrect: true,
                image: steveWorks
            },
            {
                id: '2',
                name: 'Вин Бензин',
                position: 'Javascript-разработчик',
                description: 'Студент из Америки. Приехал в Череповец по обмену и влюбился в крановщицу цеха горячего проката. Решил остаться навсегда. Работает в компании «Северсталь» на должности фронтэнд разработчика. Из языков прекрасно владеет английским и джаваскриптом.',
                isCorrect: true,
                image: vinBenzin,
            },
            {
                id: '3',
                name: 'Алексей Эйнштейн',
                position: 'Технический аналитик',
                description: 'Влечение компьютерными технологиями с малых лет способствовало формированию огромного круга знаний и навыков. Помимо технической части, уделял внимание психологии и этике. Его самый известный приём, высунутый язык, означает, что заказчик получит свой продукт в лучшем виде. Мечтает преподавать в ВГУ. ',
                isCorrect: true,
                image: alexEinstein,
            },
            {
                id: '4',
                name: 'Иван Недобрый',
                position: 'DevOps - инженер',
                description: 'Человек, способный контролировать все процессы разработки, администрирования и тестирования, не прикладывая никаких усилий. Под его надзором программный код исправляет ошибки сам в себе, устройства в принципе не ломаются, а вся команда компании получает +100 к дисциплине.',
                isCorrect: false,
                image: ivanNedobriy,
            },
            {
                id: '5',
                name: 'Гриша Поттер',
                position: 'Сотрудник Северстали',
                description: 'Настоящий мастер юридического дела. Способен одним взмахом палочки разрешить любую спорную ситуацию. Поговаривают, что он иногда издаёт какие-то непонятные звуки, поэтому суеверных уборщиц к нему в кабинет не пускают.',
                isCorrect: false,
                image: grishaPotter,
            },
            {
                id: '6',
                name: 'Джеймс Гослингов',
                position: 'Java-разработчик',
                description: 'Создатель языка программирования Java. С недавних пор занялся разработкой в компании «Северсталь». Уделяет особое внимание качеству кода и комментариям, оставленным в нём. Считает, что самое страшное испытание в жизни – исправлять или дописывать чужой код.',
                isCorrect: true,
                image: jamesGoslingov,
            },
        ]

    },
    {
        id: "2",
        title: 'Коллеги придумали\nнечто гениальное!',
        list: ["Организовать удобный заказ средств индивидуальной защиты – маски, респираторы, перчатки, защитные костюмы. Все то, без чего и раньше невозможно было представить производство, в последний год стало настоящим must have для каждого сотрудника. Твоя задача – добавить в приложение функционал удобного заказа средств индивидуальной защиты и автоматического анализа остатков, чтобы все самое нужное всегда было под рукой",
            'Проверка работоспособности оборудования одной кнопкой, например, не пора ли ремонтировать стан 2000? ',
        ],
        stepCounts: 2,
        result: {
            success: {
                title: 'Ого!',
                text: 'Если кодишь ты так же здорово, как собираешь проектную команду, в «Северсталь-инфоком» точно ждут тебя на собеседование и в самый крутой проект :)'
            },
            fail: {
                title: 'Мы знаем, ты старался...',
                text: 'но, кажется, с таким составом команды часть функций пришлось бы забрать на себя.\n' +
                    'А у тебя, помимо этого, есть достаточно задач. Попробуй тщательнее предусмотреть все необходимые роли в следующий раз.'
            }
        },
        team: [
            {
                id: '1',
                name: 'Джеки Чанов',
                position: 'Технический аналитик',
                description: 'Китайский ИТ-специалист в компании «Северсталь». Отличается своим уникальным подходом к работе в команде, использует физическую силу для повышения производительности разработки. Благодаря своим нунчакам способен добиться одобрения от любого заказчика.',
                isCorrect: true,
                image: jackyChanov
            },
            {
                id: '2',
                name: 'Раджа Бхаратия',
                position: 'Android - разработчик',
                description: 'Студент ВГТУ, родом из Индии. Автор самого популярного канала по мобильной разработке на youtube. Идеально владеет Английским и Kotlin\'ом. Уникальная способность: в своих видео решает все самые изощрённые проблемы, которые только могут возникнуть у кодеров со всего мира.',
                isCorrect: true,
                image: rajaBharatiya,
            },
            {
                id: '3',
                name: 'Илья Воронежец',
                position: 'PHP - разработчик',
                description: 'Богатырь компьютерного дела. Направо пойдёт - бэкэнд соберёт, налево пойдёт - все баги найдёт, прямо пойдёт - сервак развернёт.',
                isCorrect: false,
                image: illyaVoroshenec
            },
            {
                id: '4',
                name: 'Дмитрий Филин',
                position: 'Технический архитектор',
                description: 'Выпускник ЧГУ, связавший свою жизнь с карьерой в «Северсталь». Начинал свой путь со стажёра, благодаря обучению и профессиональной команде Инфокома, поднялся до руководителя большого подразделения. Имеет привычку жить по чёткому графику, именно поэтому в компании занимается алгоритмизацией разработки и подбором технических систем для реализации подсистем.',
                isCorrect: true,
                image: dmitriiFilin,
            },
            {
                id: '5',
                name: 'Леонардо да Винчин',
                position: 'UX - дизайнер',
                description: 'Знает FlowMapp и AdobeXD как имена всех персонажей "Тайной Вечерии". Помимо навыков разработки интерфейсов, обладает чётким пониманием принципа работы человека с системой. Славится своим уникальным подходом к работе. Именно он изобрёл модель "Универсального дизайна взаимодействия человека и системы".',
                isCorrect: true,
                image: leonardoDaVinchin,
            },
            {
                id: '6',
                name: 'Стальной человек',
                position: 'Сотрудник Северстали',
                description: 'Самый сильный человек из отдела охраны. Может стрелять руками и летать. Благодаря этим навыкам способен решить почти любые проблемы, которые возникают у него или у его коллег.',
                isCorrect: false,
                image: steelMan
            },
            {
                id: '7',
                name: 'Ева',
                position: 'IOS-разработчик',
                description:'Студентка ВГУИТа. Обладательница собственного яблочного сада и самой престижной комнаты в общаге. \n' +
                    'Секрет её успеха прост – стажировка в «Северсталь-инфокоме». Обладает уникальными знаниями языка Objective-C, благодаря чему уверенно достигает поставленных целей в мобильной разработке.',
                isCorrect: true,
                image: eva
            },
        ]

    },
    {
        id: "3",
        title: 'В «Северстали», \nкак ты уже понял',
        list: [],
        stepCounts: 2,
        result: {
            success: {
                title: 'Блестяще! Это была задачка со звёздочкой, и ты отлично справился.',
                text: '\nНам нужны такие классные эксперты, как ты! \n \n' +
                    'Готов кодить на максималках?\n' +
                    'Заполняй анкету и присоединяйся к стажёрской программе в «Северсталь-инфокоме». \n' +
                    'Как ты уже наверняка понял,  интересных задач у нас — хоть отбавляй.'  },
            fail: {
                title: 'Не расстраивайся, это была задачка со звёздочкой.',
                text: 'В проекте интернет-магазина участвует более 300 человек на разных функциях, и роль каждого члена команды крайне важна.\n' +
                    ' \n' +
                    'Готов кодить на максималках?\n' +
                    'Приходи к нам, чтобы решать эти и множество других интересных задач! Заполняй анкету для отбора на стажёрскую программу «Северсталь-инфокома».\n'
            }
        },
        team: [
            {
                id: '1',
                name: 'Черепашки ниндзя',
                position: 'Команда Javascript разработчиков',
                description: 'Опытная группа фронтэнд разработчиков, настоящие друзья и любители пиццы. Способны победить любой баг. Предпочитают работать удалённо из дома, поэтому переехали в Воронеж, где интернет ловит даже в канализации.',
                isCorrect: true,
                image: ninjaTurtles,
            },
            {
                id: '2',
                name: 'Назимир Калевич',
                position: 'UI - дизайнер',
                description: 'Настоящий профессионал дизайнерского мастерства. Своими работами поднимает целые волны обсуждений в социальных сетях. Один из его интерфейсов оказался настолько необычным, что его продали за 100 миллионов денег одной компании.',
                isCorrect: true,
                image: nazimirKalevich,
            },
            {
                id: '3',
                name: 'Джавониус',
                position: 'Java-разработчик',
                description: 'Древний и могучий бог программирования. В "Священном уставе программиста" прописано, что именно он явился во сне к разработчику языка Java. Именно он считает все пропущенные фигурные скобки в коде и решает, куда отправить программиста - в ад или в «Северсталь» .',
                isCorrect: true,
                image: javonius,
            },
            {
                id: '4',
                name: 'Супервумен',
                position: 'Технический архитектор',
                description: 'Обладательница северной стойкости и стальных нервов. Способна расписать конкретную пошаговую инструкцию для любой поставленной задачи. Умеет превращать слова в алгоритмы, алгоритмы в блоксхемы, а блоксхемы в готовые программы.',
                isCorrect: true,
                image: superWoman
            },

            {
                id: '5',
                name: 'Михаил Ломоухов',
                position: 'Системный аналитик',
                description: 'Услышав о Воронежском офисе «Северсталь», пешком за три месяца дошёл из Москвы до Воронежа. За десять лет работы в компании довёл до автоматизма процесс создания Технических Заданий. Подробно изучив все особенности и тонкости своей работы и ИТ в целом, открыл корпоративный институт для сотрудников компании.',
                isCorrect: true,
                image: michaelLomouhov,
            },
            {
                id: '6',
                name: 'Илья Воронежец',
                position: 'PHP - разработчик',
                description: 'Богатырь компьютерного дела. Направо пойдёт - бэкэнд соберёт, налево пойдёт - все баги найдёт, прямо пойдёт - сервак развернёт .',
                isCorrect: true,
                image: illyaVoroshenec
            },
            {
                id: '7',
                name: 'Николай Тесла',
                position: 'Системный администратор',
                description:'Рвение создавать и изобретать привело Николу к огромному количеству знаний в сфере компьютерных технологий. Он способен разобраться с любыми проблемами, связанными с компьютерами, сетями и серверами. Большой набор навыков позволяет ему собственноручно чинить и собирать устройства любой сложности',
                isCorrect: true,
                image: nicolaiTesla
            },
            {
                id: '8',
                name: 'Иван Недобрый',
                position: 'DevOps - инженер',
                description: 'Человек, способный контролировать все процессы разработки, администрирования и тестирования, не прикладывая никаких усилий. Под его надзором программный код исправляет ошибки сам в себе, устройства в принципе не ломаются, а вся команда компании получает +100 к дисциплине.',
                isCorrect: true,
                image: ivanNedobriy,
            },
            {
                id: '9',
                name: 'Гриша Поттер',
                position: 'Сотрудник Северстали',
                description: 'Настоящий мастер юридического дела. Способен одним взмахом палочки разрешить любую спорную ситуацию. Поговаривают, что он иногда издаёт какие-то непонятные звуки, поэтому суеверных уборщиц к нему в кабинет не пускают.',
                isCorrect: false,
                image: grishaPotter,
            },
            {
                id: '10',
                name: 'Павел Умнов',
                position: 'UX - дизайнер',
                description:'Ведущий специалист, прекрасно понимающий всю концепцию взаимодействия пользователей с продуктом. Читает множество книг по психологии, разработке и дизайну. Однажды, из-за своей большой любви к спорту, унёс из офиса шведскую стенку, после чего коллеги запустили хэштэг #УМНОВВЕРНИСТЕНУ.',
                isCorrect: true,
                image: pavelUmnov
            },
        ]
    },
]