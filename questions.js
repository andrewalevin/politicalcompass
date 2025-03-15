questions = [

// Экономическое регулирование - Плановая экономика
    {"id": 0, "question": "В текущей системе необходимо, чтобы государство вмешивалось в экономику для защиты потребителей.", "effects": {"y": -5, "ay": 5}},
    {"id": 1, "question": "Без вмешательства государства монополии нарушали бы права человека.", "effects": {"y": -5, "ay": -5}},

// Экономическое регулирование - Лаиссез-фэр
    {"id": 2, "question": "Большинство корпораций должно быть государственной собственностью.", "effects": {"y": -5, "ay": 5}},
    {"id": 3, "question": "Рынок сам регулирует себя, так как несправедливые монополии наказываются банкротством.", "effects": {"y": -5, "ay": -5}},
    {"id": 4, "question": "Регулируемая экономика более несправедлива для людей, по сравнению с экономикой лаиссез-фэр.", "effects": {"y": -5, "ay": -5}},

// Экономическая система - Капитализм
    {"id": 5, "question": "Свобода бизнеса — лучший практический способ для процветания общества.", "effects": {"x": 5, "ax": 5}},
    {"id": 6, "question": "Коммунизм — это идеология, которая никогда не сработает на практике.", "effects": {"y": 5, "ay": 5}},
    {"id": 7, "question": "Государственные социальные программы должны быть заменены частными благотворительными организациями.", "effects": {"x": 5, "ax": 5}},
    {"id": 8, "question": "Если существует заработная плата и валюта, то не должно быть минимальной заработной платы.", "effects": {"x": 5, "ax": 5}},
    {"id": 9, "question": "Все медицинские услуги должны быть приватизированы.", "effects": {"x": 5, "ax": 5}},
    {"id": 10, "question": "Налогообложение граждан с применением насильственных методов можно считать актом кражи или агрессии.", "effects": {"x": 5, "ax": 5}},
    {"id": 11, "question": "Судебная система должна быть частично или полностью приватизирована.", "effects": {"x": 5, "ax": 5}},
    {"id": 12, "question": "Наследование является законной формой богатства.", "effects": {"x": 5, "ax": 5}},

// Экономическая система - Социализм
    {"id": 13, "question": "От каждого по способностям, каждому по потребностям.", "effects": {"x": -5, "ax": -5}},
    {"id": 14, "question": "Угнетение со стороны корпораций является большой проблемой.", "effects": {"x": -5, "ax": -5}},
    {"id": 15, "question": "Средства производства должны принадлежать рабочим.", "effects": {"x": -5, "ax": -5}},
    {"id": 15, "question": "Дороги и транспорт должны быть в общественной собственности.", "effects": {"x": -5, "ax": -5}},
    {"id": 16, "question": "Электричество должно быть в общественной собственности.", "effects": {"x": -5, "ax": -5}},

// Государственная система - Автократия
    {"id": 17, "question": "Автократия более выгодна, чем любая демократическая система.", "effects": {"y": 5, "bx": -5}},
    {"id": 18, "question": "Для успешной демократии необходимы высокий уровень образования.", "effects": {"y": 5, "bx": -5}},

// Государственная система - Демократия
    {"id": 19, "question": "Либеральная демократия — наименьшее из зол среди систем правления.", "effects": {"y": -5, "bx": 5}},

// Размер государства - Авторитаризм
    {"id": 20, "question": "Государство необходимо для существования функционирующего общества.", "effects": {"y": 5, "by": 5}},
    {"id": 21, "question": "Насилие недопустимо при протестах против правительства.", "effects": {"y": 5, "by": 5}},
    {"id": 25, "question": "Жертва некоторых гражданских свобод необходима для защиты от терроризма.", "effects": {"y": 5, "by": 5}},
    {"id": 23, "question": "При возникновении угрозы необходимо пожертвовать некоторыми свободами ради поддержания стабильности и процветания.", "effects": {"y": 5, "by": 5}},

// Размер государства - Либертарианизм
    {"id": 24, "question": "Любое действие, которое не наносит агрессии другим, не должно считаться преступлением.", "effects": {"y": -5, "by": -5}},
    {"id": 25, "question": "Вся власть должна подвергаться сомнению.", "effects": {"y": -5, "by": -5}},
    {"id": 26, "question": "Существование государства нарушает нашу свободу и права.", "effects": {"y": -5, "by": -5}},

// Дипломатические отношения - Универсальные
    {"id": 27, "question": "Мои политические взгляды должны быть распространены как можно шире.", "effects": {"cx": -5}},
    {"id": 28, "question": "Страны с авторитарными правительствами должны быть осуждены.", "effects": {"cx": -5}},

// Дипломатические отношения - Особые
    {"id": 29, "question": "Разные страны и культуры имеют разные предпочтения относительно типа правительства.", "effects": {"cx": 5}},

// Дипломатические отношения - Национализм
    {"id": 30, "question": "Я буду поддерживать только те международные организации, которые соответствуют моим политическим взглядам.", "effects": {"cy": 5}},
    {"id": 31, "question": "Национальный суверенитет очень важен.", "effects": {"cy": 5}},

// Дипломатические отношения - Глобализм
    {"id": 32, "question": "Глобальная нация, в которой все страны объединены, будет полезна для человечества.", "effects": {"cy": -5}},
    {"id": 33, "question": "Глобальная организация, которая приносит пользу, должна обладать значительными полномочиями.", "effects": {"cy": -5}},
    {"id": 34, "question": "Я поддерживаю региональные союзы, такие как Европейский Союз.", "effects": {"cy": -5}},

// Социальные традиции - Традиция
    {"id": 35, "question": "Важно, чтобы мы сохраняли нашу культуру и традиции.", "effects": {"dx": 5}},

// Социальные традиции - Прогресс
    {"id": 36, "question": "Религия в основном вымышленна.", "effects": {"dx": -5}},
    {"id": 37, "question": "Традиции не имеют самостоятельной ценности.", "effects": {"dx": -5}},
    {"id": 38, "question": "Я поддерживаю ЛГБТ-сообщество.", "effects": {"dx": -5}},
    {"id": 39, "question": "Я поддерживаю организацию Black Lives Matter.", "effects": {"dx": -5}},
    {"id": 40, "question": "Если существует налог, то церкви должны облагаться налогом так же, как и другие учреждения.", "effects": {"dx": -5}},

// Социальные изменения - Консерватизм
    {"id": 41, "question": "Быстрые изменения часто ведут к ухудшению жизни людей.", "effects": {"dy": 5}},
    {"id": 42, "question": "Реформы должны происходить постепенно и медленно.", "effects": {"dy": 5}},

// Социальные изменения - Реформизм
    {"id": 43, "question": "Долгосрочное мышление важнее краткосрочного.", "effects": {"dy": -5}},
    {"id": 44, "question": "Текущая политическая система в моей стране несовершенна.", "effects": {"dy": -5}},

// Технологическое замедление
    {"id": 45, "question": "Технологии негативно влияют на современное общество.", "effects": {"ex": -5}},
    {"id": 46, "question": "Промышленная революция и её последствия стали катастрофой для человечества.", "effects": {"ex": -5}},
    {"id": 47, "question": "Использование генетической модификации для животных и растений должно быть минимизировано.", "effects": {"ex": -5}},
    {"id": 48, "question": "Современность и социальный прогресс привели к снижению счастья, и часто лишены смысла.", "effects": {"ex": -5}},

// Трансгуманизм
    {"id": 49, "question": "Преодоление физических ограничений с помощью технологий принесёт пользу человечеству.", "effects": {"ey": 5}},
    {"id": 50, "question": "Технологии, улучшающие умственные и физические способности, не должны использоваться в любой политической системе.", "effects": {"ey": 5}},

// Примитивизм
    {"id": 51, "question": "Технологии, улучшающие умственные и физические способности, не должны использоваться в любой политической системе.", "effects": {"ey": -5}},
    {"id": 52, "question": "Риски трансгуманизма перевешивают его преимущества.", "effects": {"ey": -5}},

// Правовая система - Гражданское право
    {"id": 53, "question": "Принципы права должны быть кодифицированы в удобную для использования систему.", "effects": {"fx": 5}},
    {"id": 54, "question": "Законодатели и юристы должны иметь больше влияния, чем судьи.", "effects": {"fx": 5}},

// Правовая система - Общее право
    {"id": 55, "question": "Суды должны ссылаться на другие судебные решения.", "effects": {"fx": -5}},
    {"id": 56, "question": "Судьи должны иметь больше власти, чем законодатели.", "effects": {"fx": -5}},
    {"id": 57, "question": "Если решение невозможно, нужно ссылаться на аналогичные дела в прошлом.", "effects": {"fx": -5}},

// Право - Наказание
    {"id": 58, "question": "Реабилитационная система несправедлива.", "effects": {"fy": 5}},
    {"id": 59, "question": "Наказание должно цениться выше, чем реабилитация.", "effects": {"fy": 5}},
    {"id": 60, "question": "Попытки реабилитировать некоторых преступников — пустая трата времени.", "effects": {"fy": 5}},
    {"id": 61, "question": "Я поддерживаю смертную казнь.", "effects": {"fy": 5}},


    {"id": 62, "question": "Каждый заслуживает второго шанса.", "effects": {"fy": -5}},

// Равенство и иерархия
    {"id": 63, "question": "Необходимо создать систему равных результатов.", "effects": {"gx": -5}},
    {"id": 64, "question": "Люди должны быть равны, независимо от их группы и характеристик.", "effects": {"gx": -5}},

// Культурная иерархия - Иерархия
    {"id": 65, "question": "Хотя равные возможности могут привести к равным результатам, общество должно сосредоточиться на равных возможностях, а не на равных результатах.", "effects": {"gx": -5}},
    {"id": 66, "question": "Иерархии будут неизбежно формироваться в любом обществе в любое время.", "effects": {"gx": -5}},
    {"id": 67, "question": "Любое хорошо функционирующее общество требует иерархии.", "effects": {"gx": -5}},

// Культурная ассимиляция - Моно-культура
    {"id": 68, "question": "Если мы принимаем мигрантов, они должны ассимилироваться в нашу культуру.", "effects": {"gy": 5}},
    {"id": 69, "question": "Мультикультурализм нереалистичен.", "effects": {"gy": 5}},
    {"id": 70, "question": "Некоторые культуры изначально превосходят другие.", "effects": {"gy": 5}},

// Культурная ассимиляция - Мультикультурализм
    {"id": 71, "question": "Моя нация должна быть более разнообразной.", "effects": {"gy": 5}},
    {"id": 72, "question": "Моно-культурализм разрушителен для общества.", "effects": {"gy": 5}},
    {"id": 73, "question": "Некоторые культуры изначально превосходят другие.", "effects": {"gy": 5}},

// Процесс компромисса - Компромисс
    {"id": 74, "question": "Компромиссы должны быть достигнуты ради удовлетворения потребностей большинства людей.", "effects": {"hx": -5}},
    {"id": 75, "question": "Компромиссы могут помочь избежать ненужных конфликтов.", "effects": {"hx": -5}},
    {"id": 76, "question": "Принятие радикальных идей невозможно без компромиссов.", "effects": {"hx": -5}},

// Процесс перехода - Переходное государство
    {"id": 77, "question": "Должно быть установлено переходное государство.", "effects": {"hy": 5}},

// Процесс перехода - Прямое установление
    {"id": 78, "question": "Моя идеология должна быть установлена как можно быстрее.", "effects": {"hy": -5}},
    {"id": 79, "question": "Мои политические идеалы могут быть достигнуты в течение 10 лет.", "effects": {"hy": -5}},

// Политический экстремизм - Радикализм
    {"id": 80, "question": "Моя идеология иногда считается 'экстремальной'.", "effects": {"ix": 5}},
    {"id": 81, "question": "Насилие и революции необходимы для установления моей идеологии.", "effects": {"ix": 5}},
    {"id": 82, "question": "Текущие общественные настроения проблематичны.", "effects": {"ix": 5}},
    {"id": 83, "question": "Мои политические взгляды сильно отличаются от нынешнего статус-кво.", "effects": {"ix": 5}},

// Политическая вовлеченность - Аполитичность
    {"id": 84, "question": "Политика скучна для меня.", "effects": {"iy": -5}},
    {"id": 85, "question": "Почти все политики злые и проблематичные, независимо от их политических взглядов.", "effects": {"iy": -5}},
    {"id": 86, "question": "Политику следует избегать в повседневной жизни.", "effects": {"iy": -5}},

// Политическая вовлеченность - Политизированность
    {"id": 87, "question": "Политика очень важна для общества и не должна быть проигнорирована.", "effects": {"iy": 5}},

// Коллективизация
    {"id": 88, "question": "Большинство дел можно выполнить только через группу.", "effects": {"ja": -5}},
    {"id": 89, "question": "Если используется текущая карьерная система, личная и рабочая жизнь человека должны быть разделены.", "effects": {"ja": 5}},
    {"id": 90, "question": "Самостоятельность (как личность) — это положительная черта.", "effects": {"ja": 5}},

// Революция
    {"id": 91, "question": "Изменение статус-кво насильственными методами в основном бесполезно.", "effects": {"jb": 5}},
    {"id": 92, "question": "Пацифизм в целом нереалистичен при протестах против правительства.", "effects": {"jb": -5}},

// Идеализм
    {"id": 93, "question": "Идеалисты в основном нереалистичны.", "effects": {"jc": 5}},
    {"id": 94, "question": "Мы не должны игнорировать идеологии, которые кажутся радикальными, но имеют шанс на успех.", "effects": {"jc": -5}},
    {"id": 95, "question": "Мы должны быть более оптимистичными относительно множества разных идей.", "effects": {"jc": -5}},

// Последствия
    {"id": 96, "question": "Око за око, зуб за зуб.", "effects": {"jd": 5}},
    {"id": 97, "question": "Мы должны судить о действии на основе его последствий.", "effects": {"jd": 5}},
    {"id": 98, "question": "Действие должно оцениваться как правильное или неправильное через набор правил и принципов.", "effects": {"jd": -5}},
    {"id": 99, "question": "Намерение важнее последствий при оценке действия.", "effects": {"jd": -5}}

];
