const i18n = {
  ru: {
    "about.name": "Лев Медяник",
    "about.subtitle": "AI / ML инженер · Прикладные AI-системы и внедрение",
    "about.bio":
      "Помогаю бизнесу и командам внедрять AI-решения, которые работают в продукте от данных и логики, до умного сервиса с API, интерфейсом и деплоем. Фокус на практический эффект: экономия времени, снижение ручной работы, поддержка решений данными.",
    "about.pill1": "ML-модели для решений",
    "about.pill2": "LLM/RAG для документов",
    "about.pill3": "Интеграция и деплой",
    // Nav
    "nav_about": "Обо мне",
    "nav_skills": "Что я умею",
    "nav_cases": "Кейсы",
    "nav_services": "Услуги",
    "nav_contacts": "Контакты",

    "about.effect.title": "Где мои решения дают максимальный эффект",
    "about.effect1": "Когда нужно сократить ручную работу и ускорить процессы",
    "about.effect2": "Когда есть данные, но нет понятной системы их использования",
    "about.effect3": "Когда модель должна работать в сервисе, а не в ноутбуке",
    "about.effect4": "Когда важен измеримый результат",

    "about.benefits.title": "Что вы получаете в работе со мной",
    "about.benefits1": "Чётко зафиксированные цели и критерии результата",
    "about.benefits2": "Предсказуемый объём работ и сроков",
    "about.benefits3": "Инженерный подход без лишней сложности",
    "about.benefits4": "Решение под задачу, а не шаблонный AI",

    "skills.titleA": "Что я",
    "skills.titleB": "умею",

    "skills.ai.h": "Прикладной искусственный интеллект",
    "skills.ai.p1": "AI-ассистенты и чат-боты для автоматизации типовых запросов и поддержки пользователей.",
    "skills.ai.p2": "Поиск и ответы по документам и базе знаний (RAG), когда информация распределена и её трудно находить вручную.",
    "skills.ai.p3": "Извлечение параметров из пользовательского ввода и текста для дальнейшей обработки в сервисах.",
    "skills.ai.p4": "Доведение решений до работающего сервиса: от данных и логики до интерфейса.",

    "skills.ml.h": "Машинное обучение и Data Science",
    "skills.ml.p1": "Модели под прикладные задачи: классификация, прогнозы, скоринг решений.",
    "skills.ml.p2": "Подготовка данных и моделей так, чтобы результат был корректным и проверяемым.",
    "skills.ml.p3": "Подбор решений с учётом ограничений задачи (бюджет, нормы, требования).",
    "skills.ml.p4": "Проверка качества и устойчивости моделей на реальных сценариях использования.",

    "skills.web.h": "Разработка умных веб-приложений",
    "skills.web.p1": "Проектирование сервисов с API и прикладной логикой под конкретные задачи.",
    "skills.web.p2": "Интерфейсы для работы с данными и AI-сервисами (формы, таблицы, чат-UI).",
    "skills.web.p3": "Интеграция ML/AI-решений в веб-сервисы при необходимости.",
    "skills.web.p4": "Деплой и поддержка решений, чтобы сервис работал стабильно.",

    "tech.langs_title": "Языки",
    "tech.tools_title": "Инструменты",
    "tech.web_stack_note": "Используются для UI и MVP-сервисов. Возможна работа со стеком заказчика (React, Vue, TypeScript, Node.js) при чётко заданных требованиях.",
    "tech.python_desc": "Основной язык для AI, ML, Data Science и backend-сервисов",

    "tech.tools_ai_cat": "AI / LLM",
    "tech.tools_ai_items": ": LangChain, FAISS, HuggingFaceEmbeddings, GPT, BERT, Telegram Bot",
    "tech.tools_ai_note": "Инструменты для AI-ассистентов, поиска по знаниям и работы с текстовыми данными.",

    "tech.tools_ml_cat": "ML / DS",
    "tech.tools_ml_items": ": NumPy, Pandas, scikit-learn, TensorFlow / PyTorch",
    "tech.tools_ml_note": "Используются для построения и оценки прикладных ML-моделей.",

    "tech.tools_backend_cat": "Backend",
    "tech.tools_backend_items": ": FastAPI, REST API",
    "tech.tools_backend_note": "Применяются для разработки API и сервисной логики под задачи проекта.",

    "tech.tools_dev_cat": "Dev / Research",
    "tech.tools_dev_items": ": Jupyter, Google Colab, Docker, Git / GitHub, VS Code",
    "tech.tools_dev_note": "Инструменты для разработки, деплоя и сопровождения решений.",

    "cases.title": "Кейсы",
    "cases.github": "GitHub репозиторий",
    "cases.try": "Попробовать",

    "cases.c1.title": "AI-калькулятор подбора освещения под нормы и бюджет",
    "cases.c1.subtitle": "Сервис для быстрого расчёта освещённости и подбора светильников по нормам (СП/СНиП) с понятным объяснением результата.",
    "cases.c1.b1": "<strong>Кому подходит:</strong> проектирование, продажи и подбор оборудования когда нужно быстро дать корректный расчёт",
    "cases.c1.b2": "<strong>Что на выходе:</strong> расчёт и рекомендации по светильникам с объяснением причин выбора меньше чем за 1 секунду",
    "cases.c1.b3": "<strong>Как работает:</strong> ввод параметров → расчёт → ранжирование вариантов (XGBoost) → выдача результата",
    "cases.c1.b4": "<strong>Формат для бизнеса:</strong> веб-сервис/API на FastAPI, готовый к интеграции и деплою",

    "cases.c2.title": "AI-каталог и подбор решений в большом ассортименте",
    "cases.c2.subtitle": "Каталог с фильтрацией и AI-подбором, помогающий быстро найти подходящий вариант по сценарию пользователя.",
    "cases.c2.b1": "<strong>Кому подходит:</strong> e-commerce и каталоги с большим ассортиментом, где сложно выбирать вручную",
    "cases.c2.b2": "<strong>Что на выходе:</strong> топ-рекомендации и быстрое ранжирование вариантов под запрос пользователя",
    "cases.c2.b3": "<strong>Как работает:</strong> текстовый запрос → извлечение параметров (NLP/spaCy) → скоринг и ранжирование (CatBoost)",
    "cases.c2.b4": "<strong>Формат для продукта:</strong> фронт + API + модель, масштабируется под новые данные и категории",

    "cases.c3.title": "Бот поддержки Telegram с AI-FAQ и контролем уверенности",
    "cases.c3.subtitle": "Автоматизация первой линии поддержки: бот сопоставляет вопросы с базой FAQ и отвечает только при достаточной уверенности, иначе переводит на оператора.",
    "cases.c3.b1": "<strong>Кому подходит:</strong> поддержка в Telegram (личные/групповые чаты), где важно снизить нагрузку и избежать ложных автоответов",
    "cases.c3.b2": "<strong>Что на выходе:</strong> бот с режимами confident / non-confident с воспроизводимым NLP/ML-пайплайном",
    "cases.c3.b3": "<strong>Как работает:</strong> очистка вариаций → эмбеддинги → cosine similarity → threshold-логика → ответ или передача оператору",
    "cases.c3.b4": "<strong>Контроль качества:</strong> настраиваемый порог уверенности, исключающий ложные автоответы без изменения логики бота",

    "cases.note.title": "Примечание",
    "cases.note.text": "В демо используются синтетические данные, так как для реальных проектов требуется доступ к прайсам и CRM. Кейсы показывают продуктовую архитектуру, UX и формат интеграции ML-модели в рабочий сервис.",

    // ===== Services =====
    "services.title": "Услуги",
    "services.subtitle": "Я делаю прикладные AI/автоматизационные решения, которые экономят время, снижают ошибки и дают понятные цифры для управления" +
    "Стоимость и сроки фиксируются перед стартом. Вы можете начать с одного «Пакета» и при необходимости подключить надстройки.",

    // Group 1: ML/DL
    "services.ml.title": "🧠 Машинное обучение для прикладных задач",
    "services.ml.sub": "ML-модели и аналитические решения, которые помогают принимать решения на основе данных, а не интуиции. Подходит компаниям и командам, работающим с данными.",

    "services.ml.base.badge": "Пакет",
    "services.ml.base.price": "35 000–60 000 ₽ (~$380–660)",
    "services.ml.base.term": "7–14 дней",
    "services.ml.base.li1": "<strong>Постановка задачи:</strong> цель, данные, метрики качества, критерии приёмки",
    "services.ml.base.li2": "<strong>Анализ данных:</strong> очистка, исследование, выявление ограничений",
    "services.ml.base.li3": "<strong>Модель:</strong> baseline-решение (классификация / регрессия / скоринг и др.)",
    "services.ml.base.li4": "<strong>Оценка:</strong> метрики, интерпретация результатов и ограничений",
    "services.ml.base.li5": "<strong>Результат:</strong> воспроизводимый ML-пайплайн + инструкция использования",
    "services.ml.base.note": "Итог: рабочая ML-модель и понятное описание того, как и для чего её применять.",

    "services.ml.ext.badge": "Надстройка: Качество и устойчивость",
    "services.ml.ext.price": "10 000–18 000 ₽ (~$110–200)",
    "services.ml.ext.term": "5–10 дней",
    "services.ml.ext.li1": "Тюнинг модели под целевые метрики",
    "services.ml.ext.li2": "Анализ ошибок и граничных случаев",
    "services.ml.ext.li3": "Повышение устойчивости к шуму и смещению данных",
    "services.ml.ext.note": "Подходит, если модель планируется использовать в реальных рабочих условиях.",

    "services.ml.ops.badge": "Надстройка: Подготовка к использованию",
    "services.ml.ops.price": "12 000–20 000 ₽ (~$130–220)",
    "services.ml.ops.term": "7–14 дней",
    "services.ml.ops.li1": "Документация модели и требований к данным",
    "services.ml.ops.li2": "Форматы входных и выходных данных",
    "services.ml.ops.li3": "Подготовка решения к передаче аналитикам или разработчикам",
    "services.ml.ops.li4": "Краткое пояснение и ответы на вопросы (1–2 сессии)",
    "services.ml.ops.note": "Уровень для подготовки решения к передаче в разработку или дальнейшему развитию. Включает согласованные форматы входных и выходных данных модели. Развёртывание в инфраструктуре заказчика обсуждается отдельно.",

    // Group 2: AI / Bots
    "services.ai.title": "🤖 Чат-боты и AI-ассистенты",
    "services.ai.sub": "Бот, который отвечает клиентам/сотрудникам, ищет по документам и помогает разгрузить поддержку. Упор на сценарии и предсказуемость.",

    "services.ai.base.badge": "Пакет",
    "services.ai.base.price": "40 000–65 000 ₽ (~$440–720)",
    "services.ai.base.term": "7–14 дней",
    "services.ai.base.li1": "<strong>Сценарии:</strong> что бот делает и что не делает (границы)",
    "services.ai.base.li2": "<strong>Ответы и база знаний:</strong> документы/FAQ/таблицы/ссылки (по доступу)",
    "services.ai.base.li3": "<strong>Запуск:</strong> Telegram-бот или простой API",
    "services.ai.base.li4": "<strong>Демо:</strong> показ ключевых сценариев + инструкция",
    "services.ai.base.note": "Примеры: бот для поддержки, внутренний помощник по регламентам, поиск по PDF/докам, быстрые ответы на типовые вопросы.",

    "services.ai.ext.badge": "Надстройка: Предсказуемость",
    "services.ai.ext.price": "10 000–18 000 ₽ (~$110–200)",
    "services.ai.ext.term": "5–10 дней",
    "services.ai.ext.li1": "Обработка ошибок, ограничение поведения и «что делать при непонимании»",
    "services.ai.ext.li2": "Расширенные сценарии и роли пользователей",
    "services.ai.ext.li3": "Тест-набор типовых вопросов и регресс-проверки",
    "services.ai.ext.note": "Чтобы бот меньше генерировал ложных сведений и работал в рамках согласованных правил.",

    "services.ai.ops.badge": "Надстройка: Передача и развитие",
    "services.ai.ops.price": "12 000–20 000 ₽ (~$130–220)",
    "services.ai.ops.term": "7–14 дней",
    "services.ai.ops.li1": "Документация, правила использования, чек-лист обновлений",
    "services.ai.ops.li2": "Рекомендации по масштабированию (источники, доступы, интеграции)",
    "services.ai.ops.li3": "Подготовка к сопровождению (структура проекта/конфиг)",
    "services.ai.ops.note": "Для команд, которые планируют регулярно обновлять контент и расширять функциональность.",

    // Group 3: Analytics
    "services.ds.title": "📊 Аналитика для решений",
    "services.ds.sub": "Отвечаю на вопросы бизнеса цифрами: что происходит, почему, и что делать дальше. Вы получаете выводы и план действий.",

    "services.ds.base.badge": "Пакет",
    "services.ds.base.price": "30 000–55 000 ₽ (~$330–600)",
    "services.ds.base.term": "7-14 дней",
    "services.ds.base.li1": "Цели и вопросы: какие решения вы хотите принять",
    "services.ds.base.li2": "Подготовка данных: очистка, проверки, сводные показатели",
    "services.ds.base.li3": "Анализ и визуализация: ключевые драйверы, сегменты, тренды",
    "services.ds.base.li4": "Результат: выводы + рекомендации",
    "services.ds.base.note": "Подходит для разового анализа: маркетинг, продажи, продуктовые метрики, операции, качество данных.",

    "services.ds.ext.badge": "Надстройка: Регулярный отчёт",
    "services.ds.ext.price": "8 000–15 000 ₽ (~$90–160)",
    "services.ds.ext.term": "5–10 дней",
    "services.ds.ext.li1": "Шаблон отчёта (таблица/дашборд/ноутбук) и обновление по расписанию",
    "services.ds.ext.li2": "Автоматизация выгрузок (при наличии доступов)",
    "services.ds.ext.li3": "Мини-инструкция: как обновлять и что проверять",
    "services.ds.ext.note": "Снижает ручной труд и делает аналитику живой.",

    "services.ds.ops.badge": "Надстройка: Сложные источники",
    "services.ds.ops.price": "12 000–22 000 ₽ (~$130–240)",
    "services.ds.ops.term": "7–14 дней",
    "services.ds.ops.li1": "Объединение нескольких источников, сверки, дедупликация",
    "services.ds.ops.li2": "Документация полей, правил и расчётов",
    "services.ds.ops.li3": "Фиксация критериев приёмки для регулярного обновления",
    "services.ds.ops.note": "Нужно, если данные приходят из разных систем и «всё не сходится».",

    // Group 4: Smart Web Apps
    "services.web.title": "🌐 MVP и внутренние веб-инструменты",
    "services.web.sub": "Делают работу команды быстрее: панель, сервис, мини-приложение, которое объединяет данные, автоматизацию и AI-логику.",

    "services.web.base.badge": "Пакет",
    "services.web.base.price": "45 000–70 000 ₽ (~$500–770)",
    "services.web.base.term": "14–21 день",
    "services.web.base.li1": "MVP-сценарии: 2–4 ключевых пользовательских сценария",
    "services.web.base.li2": "Backend/API: сервис на FastAPI + базовая логика",
    "services.web.base.li3": "Интерфейс: простой UI (HTML/CSS/JS) или интеграция в существующий фронт",
    "services.web.base.li4": "Интеграции: БД/внешние API/AI-модуль (по задаче)",
    "services.web.base.li5": "Передача: инструкция запуска и структура проекта",
    "services.web.base.note": "Подходит для внутренних инструментов, прототипов, мини-CRM, панелей контроля, AI-сервисов.",

    "services.web.ext.badge": "Надстройка: Интеграции и качество",
    "services.web.ext.price": "12 000–22 000 ₽ (~$130–240)",
    "services.web.ext.term": "7–14 дней",
    "services.web.ext.li1": "Адаптация под существующий стек и дополнительные API",
    "services.web.ext.li2": "Валидации, роли, базовая безопасность (по потребности)",
    "services.web.ext.li3": "Логирование и диагностика ошибок",
    "services.web.ext.note": "Фиксируем объём интеграций заранее, чтобы сроки не «уплывали».",

    "services.web.ops.badge": "Надстройка: Поддержка",
    "services.web.ops.price": "15 000–25 000 ₽ (~$160–275)",
    "services.web.ops.term": "7–14 дней",
    "services.web.ops.li1": "Документация (README, API, конфигурации)",
    "services.web.ops.li2": "Унификация структуры проекта и деплой-сценарии",
    "services.web.ops.li3": "Подготовка к сопровождению (чек-листы, инструкции)",
    "services.web.ops.note": "Для проектов, которые будут жить и развиваться внутри команды.",

    // Conditions
    "services.terms.title": "Как я работаю",
    "services.terms.li1": "Перед стартом фиксируем цель, результат, данные и критерии приёмки, чтобы проект шёл без разночтений и внеплановых правок.",
    "services.terms.li2": "Стоимость и сроки фиксируются до начала работ. Надстройки подключаются только после согласования.",
    "services.terms.li3": "Изменение требований (цель/данные/объём) после фиксации требует отдельной оценки и согласования.",
    "services.terms.li4": "Беру в работу задачи, где понятны входные данные и достижим результат в рамках выбранного пакета.",
    "services.terms.li5": "<strong>Работа делится на этапы с понятными промежуточными результатами.</strong> Это даёт прозрачность по срокам, качеству и бюджету.",

    "contacts.title": "Контакты",
    "contacts.connectTitle": "Связаться",
    "contacts.connectLead": "Напишите мне – буду рад обсудить задачу, объём и критерии приёмки.",

    "contacts.locationLabel": "Местоположение",
    "contacts.locationValue": "Россия. Амурская обл. г. Благовещенск",

    "contacts.phoneLabel": "Телефон",

    "contacts.linksTitle": "Ссылки",
    "contacts.linksLead": "Проекты, демо и исходники – в GitHub. Профиль и опыт – в LinkedIn.",

    "contacts.note": "❗ Если у Вас есть краткое ТЗ, описание и цель задачи, данные, дедлайн, желаемый результат – приложите сразу."
  },

en: {
  "about.name": "Lev Medianik",
  "about.subtitle": "AI/ML Engineer · Production-ready AI systems",
  "about.bio": "I help teams ship AI solutions that run in production from requirements and data to a deployed service with API, UI, and release. Focus: measurable impact (time saved, less manual work, data-backed decisions).",
  "about.pill1": "Applied ML models",
  "about.pill2": "LLM/RAG for documents",
  "about.pill3": "Integration & deployment",

  "nav_about": "About",
  "nav_skills": "What I deliver",
  "nav_cases": "Cases",
  "nav_services": "Services",
  "nav_contacts": "Contact",

  "about.effect.title": "Where my work delivers the most impact",
  "about.effect1": "When you need to cut manual work and speed up a process",
  "about.effect2": "When you have data but no clear system to use it",
  "about.effect3": "When the model must run in a service, not a notebook",
  "about.effect4": "When a measurable outcome matters",

  "about.benefits.title": "What you get working with me",
  "about.benefits1": "Clear goals and acceptance criteria upfront",
  "about.benefits2": "Predictable scope and timeline",
  "about.benefits3": "Engineering-first approach – no unnecessary complexity",
  "about.benefits4": "A solution tailored to your task, not a generic AI template",

  "skills.titleA": "What I",
  "skills.titleB": "deliver",

  "skills.ai.h": "Applied AI",
  "skills.ai.p1": "AI assistants and chatbots to automate repetitive requests and support workflows.",
  "skills.ai.p2": "RAG search/QA over documents and knowledge bases when information is scattered.",
  "skills.ai.p3": "Parameter extraction from user input and text to turn requests into structured data.",
  "skills.ai.p4": "End-to-end delivery into a working service: data + logic → UI/API.",

  "skills.ml.h": "Machine Learning & Data Science",
  "skills.ml.p1": "Applied models for classification, forecasting, and decision scoring.",
  "skills.ml.p2": "Data and model preparation so results are correct and verifiable.",
  "skills.ml.p3": "Solutions under constraints (budget, rules, requirements).",
  "skills.ml.p4": "Quality and robustness checks on realistic scenarios and edge cases.",

  "skills.web.h": "Smart Web Apps",
  "skills.web.p1": "Service design with API and applied business logic for specific tasks.",
  "skills.web.p2": "Interfaces for data and AI services (forms, tables, chat-style UI).",
  "skills.web.p3": "ML/AI integration into web services when it adds value.",
  "skills.web.p4": "Deployment and support so the service stays stable.",

  "tech.langs_title": "Languages",
  "tech.tools_title": "Tooling",
  "tech.web_stack_note": "Used for UI and MVP services. I can work with your stack (React, Vue, TypeScript, Node.js) with clear requirements.",
  "tech.python_desc": "Primary language for AI/ML, data work, and backend services",

  "tech.tools_ai_cat": "AI / LLM",
  "tech.tools_ai_items": ": LangChain, FAISS, HuggingFaceEmbeddings, GPT, BERT, Telegram Bot",
  "tech.tools_ai_note": "Tooling for assistants, RAG search, and text pipelines.",

  "tech.tools_ml_cat": "ML / DS",
  "tech.tools_ml_items": ": NumPy, Pandas, scikit-learn, TensorFlow / PyTorch",
  "tech.tools_ml_note": "Tooling for building and evaluating applied ML models.",

  "tech.tools_backend_cat": "Backend",
  "tech.tools_backend_items": ": FastAPI, REST API",
  "tech.tools_backend_note": "API development and service logic for product integration.",

  "tech.tools_dev_cat": "Dev / Research",
  "tech.tools_dev_items": ": Jupyter, Google Colab, Docker, Git / GitHub, VS Code",
  "tech.tools_dev_note": "Tooling for development, deployment, and maintainability.",

  "cases.title": "Cases",
  "cases.github": "GitHub repository",
  "cases.try": "Live demo",

  "cases.c1.title": "AI lighting calculator for standards and budget",
  "cases.c1.subtitle":
    "Fast illuminance calculation and luminaire selection under standards (SP/SNiP) with clear, explainable results.",
  "cases.c1.b1":
    "<strong>Best for:</strong> engineering, sales, and equipment selection when you need a correct estimate fast",
  "cases.c1.b2":
    "<strong>Output:</strong> calculations in less than 1 second + recommended luminaires with reasoning behind the choice",
  "cases.c1.b3":
    "<strong>How it works:</strong> inputs → calculation → option ranking (XGBoost) → results",
  "cases.c1.b4":
    "<strong>Delivery:</strong> FastAPI web service/API, integration- and deployment-ready",

  "cases.c2.title": "AI catalog with smart selection at scale",
  "cases.c2.subtitle":
    "A catalog with filtering and AI-assisted selection to quickly find the right option for a user scenario.",
  "cases.c2.b1":
    "<strong>Best for:</strong> e-commerce and large catalogs where manual selection is painful",
  "cases.c2.b2":
    "<strong>Output:</strong> top recommendations and ranked options for the request",
  "cases.c2.b3":
    "<strong>How it works:</strong> text query → parameter extraction (NLP/spaCy) → scoring & ranking (CatBoost)",
  "cases.c2.b4":
    "<strong>Product format:</strong> frontend + API + model – scalable to new data and categories",

  "cases.c3.title": "Telegram support bot with AI FAQ matching and confidence control",
  "cases.c3.subtitle": "First-line support automation: the bot matches user questions to an FAQ base and answers only when confidence is high; otherwise it routes to an operator.",
  "cases.c3.b1": "<strong>Best for:</strong> Telegram support (DMs/groups) where you need to reduce load and avoid false auto-replies",
  "cases.c3.b2": "<strong>Output:</strong> bot with confident / non-confident behavior with a reproducible NLP/ML pipeline",
  "cases.c3.b3": "<strong>How it works:</strong> variant cleanup → embeddings → cosine similarity → threshold logic → answer or operator handoff",
  "cases.c3.b4": "<strong>Quality control:</strong> configurable confidence threshold to prevent false auto-replies without changing bot logic",

  "cases.note.title": "Note",
  "cases.note.text":
    "The demo uses synthetic data because real projects require access to price lists and CRM. These cases showcase product-ready architecture, UX, and ML integration into a working service.",

  "services.title": "Services",
  "services.subtitle": "I build applied AI/automation solutions that save time, reduce errors, and produce clear numbers for decision-making. Price and timeline are fixed before we start. You can begin with one package and add add-ons if needed.",

  // Group 1: ML/DL
  "services.ml.title": "🧠 Applied Machine Learning",
  "services.ml.sub":
    "ML models and analytics that help teams make decisions based on data — not gut feeling. Best for data-driven teams.",

  "services.ml.base.badge": "Package",
  "services.ml.base.price": "35 000–60 000 ₽ (~$380–660)",
  "services.ml.base.term": "7–14 days",
  "services.ml.base.li1": "<strong>Problem framing:</strong> goal, data, quality metrics, acceptance criteria",
  "services.ml.base.li2": "<strong>Data review:</strong> cleaning, exploration, constraints",
  "services.ml.base.li3": "<strong>Model:</strong> baseline solution (classification / regression / scoring, etc.)",
  "services.ml.base.li4": "<strong>Evaluation:</strong> metrics + interpretation of results and limits",
  "services.ml.base.li5": "<strong>Deliverable:</strong> reproducible ML pipeline + usage notes",
  "services.ml.base.note":
    "Outcome: a working model plus clear guidance on how and where to use it.",

  "services.ml.ext.badge": "Add-on: Quality & Robustness",
  "services.ml.ext.price": "10 000–18 000 ₽ (~$110–200)",
  "services.ml.ext.term": "5–10 days",
  "services.ml.ext.li1": "Tuning toward target metrics",
  "services.ml.ext.li2": "Error analysis and edge cases",
  "services.ml.ext.li3": "Improved robustness to noise and data drift",
  "services.ml.ext.note":
    "Best if the model will be used in real operating conditions.",

  "services.ml.ops.badge": "Add-on: Ready for handoff",
  "services.ml.ops.price": "12 000–20 000 ₽ (~$130–220)",
  "services.ml.ops.term": "7–14 days",
  "services.ml.ops.li1": "Model documentation and data requirements",
  "services.ml.ops.li2": "Input/output formats",
  "services.ml.ops.li3": "Packaging for analysts or engineers",
  "services.ml.ops.li4": "Q&A session (1–2 calls)",
  "services.ml.ops.note":
    "For clean handoff to engineering or further development. Deployment in your infrastructure is discussed separately.",

  // Group 2: AI / Bots
  "services.ai.title": "🤖 AI Assistants & Chatbots",
  "services.ai.sub":
    "Bots that answer customers/employees, search documents, and reduce support load. Focus: clear scenarios and predictable behavior.",

  "services.ai.base.badge": "Package",
  "services.ai.base.price": "40 000–65 000 ₽ (~$440–720)",
  "services.ai.base.term": "7–14 days",
  "services.ai.base.li1": "<strong>Scenarios:</strong> what the bot does and does not do (boundaries)",
  "services.ai.base.li2": "<strong>Knowledge base:</strong> docs/FAQ/tables/links (with access)",
  "services.ai.base.li3": "<strong>Launch:</strong> Telegram bot or a simple API",
  "services.ai.base.li4": "<strong>Demo:</strong> key scenarios + usage notes",
  "services.ai.base.note":
    "Examples: support bot, internal policy assistant, PDF/doc search, fast answers to repetitive questions.",

  "services.ai.ext.badge": "Add-on: Predictability",
  "services.ai.ext.price": "10 000–18 000 ₽ (~$110–200)",
  "services.ai.ext.term": "5–10 days",
  "services.ai.ext.li1": "Error handling, behavior limits, and fallback logic",
  "services.ai.ext.li2": "Extended scenarios and user roles",
  "services.ai.ext.li3": "Test set + regression checks for typical questions",
  "services.ai.ext.note":
    "To reduce hallucinations and keep the bot within agreed rules.",

  "services.ai.ops.badge": "Add-on: Handoff & growth",
  "services.ai.ops.price": "12 000–20 000 ₽ (~$130–220)",
  "services.ai.ops.term": "7–14 days",
  "services.ai.ops.li1": "Documentation, usage rules, update checklist",
  "services.ai.ops.li2": "Scaling recommendations (sources, access, integrations)",
  "services.ai.ops.li3": "Maintenance-ready project structure (config, layout)",
  "services.ai.ops.note":
    "For teams that plan to keep content fresh and expand functionality.",

  // Group 3: Analytics
  "services.ds.title": "📊 Analytics for decisions",
  "services.ds.sub":
    "I answer business questions with numbers: what’s happening, why it’s happening, and what to do next — with clear conclusions and actions.",

  "services.ds.base.badge": "Package",
  "services.ds.base.price": "30 000–55 000 ₽ (~$330–600)",
  "services.ds.base.term": "7–14 days",
  "services.ds.base.li1": "<strong>Goals & questions:</strong> what decision you need to make",
  "services.ds.base.li2": "<strong>Data prep:</strong> cleaning, checks, summary metrics",
  "services.ds.base.li3": "<strong>Analysis & visuals:</strong> key drivers, segments, trends",
  "services.ds.base.li4": "<strong>Result:</strong> conclusions + recommendations",
  "services.ds.base.note":
    "Best for one-off analysis: marketing, sales, product metrics, ops, data quality.",

  "services.ds.ext.badge": "Add-on: Recurring report",
  "services.ds.ext.price": "8 000–15 000 ₽ (~$90–160)",
  "services.ds.ext.term": "5–10 days",
  "services.ds.ext.li1": "Report template (table/dashboard/notebook) + scheduled refresh",
  "services.ds.ext.li2": "Automated data pulls (with access)",
  "services.ds.ext.li3": "Mini guide: how to refresh and what to verify",
  "services.ds.ext.note":
    "Reduces manual work and keeps analytics up to date.",

  "services.ds.ops.badge": "Add-on: Complex sources",
  "services.ds.ops.price": "12 000–22 000 ₽ (~$130–240)",
  "services.ds.ops.term": "7–14 days",
  "services.ds.ops.li1": "Merging multiple sources, reconciliation, deduplication",
  "services.ds.ops.li2": "Field definitions, rules, and calculation documentation",
  "services.ds.ops.li3": "Acceptance criteria for recurring updates",
  "services.ds.ops.note":
    "Best when data comes from multiple systems and nothing matches out of the box.",

  // Group 4: Smart Web Apps
  "services.web.title": "🌐 MVPs & internal web tools",
  "services.web.sub":
    "Tools that speed up your team: dashboards, mini-apps, and services that combine data, automation, and AI logic.",

  "services.web.base.badge": "Package",
  "services.web.base.price": "45 000–70 000 ₽ (~$500–770)",
  "services.web.base.term": "14–21 days",
  "services.web.base.li1": "<strong>MVP scope:</strong> 2–4 key user scenarios",
  "services.web.base.li2": "<strong>Backend/API:</strong> FastAPI service + core logic",
  "services.web.base.li3": "<strong>UI:</strong> simple HTML/CSS/JS or integration into an existing frontend",
  "services.web.base.li4": "<strong>Integrations:</strong> DB / external APIs / AI module (as needed)",
  "services.web.base.li5": "<strong>Handoff:</strong> run instructions + project structure",
  "services.web.base.note":
    "Best for internal tools, prototypes, mini-CRM, control panels, and AI-enabled services.",

  "services.web.ext.badge": "Add-on: Integrations & quality",
  "services.web.ext.price": "12 000–22 000 ₽ (~$130–240)",
  "services.web.ext.term": "7–14 days",
  "services.web.ext.li1": "Adaptation to your stack and additional APIs",
  "services.web.ext.li2": "Validation, roles, basic security (as needed)",
  "services.web.ext.li3": "Logging and error diagnostics",
  "services.web.ext.note":
    "Integration scope is agreed upfront to keep timelines predictable.",

  "services.web.ops.badge": "Add-on: Support",
  "services.web.ops.price": "15 000–25 000 ₽ (~$160–275)",
  "services.web.ops.term": "7–14 days",
  "services.web.ops.li1": "Documentation (README, API, configuration)",
  "services.web.ops.li2": "Project structure cleanup and deployment scenarios",
  "services.web.ops.li3": "Maintenance-ready handoff (checklists, instructions)",
  "services.web.ops.note":
    "For projects that will live and evolve inside your team.",

  // Conditions
  "services.terms.title": "How I work",
  "services.terms.li1":
    "Before we start, <strong>we lock the goal, deliverables, data, and acceptance criteria</strong> to avoid scope creep and rework.",
  "services.terms.li2":
    "<strong>Price and timeline are agreed upfront.</strong> Add-ons are included only after approval.",
  "services.terms.li3":
    "<strong>Changes in goal/data/scope</strong> after sign-off require a separate estimate and approval.",
  "services.terms.li4":
    "I take projects where <strong>inputs are clear and the outcome is achievable</strong> within the selected package.",
  "services.terms.li5": "<strong>Projects are delivered in clear stages with visible interim results,</strong> so you can track progress, timeline, and budget.",

  "contacts.title": "Contact",
  "contacts.connectTitle": "Get in touch",
  "contacts.connectLead": "Message me — I’ll be happy to discuss your task, scope, and acceptance criteria.",

  "contacts.locationLabel": "Location",
  "contacts.locationValue": "Russia · Amur Region · Blagoveshchensk",

  "contacts.phoneLabel": "Phone",

  "contacts.linksTitle": "Links",
  "contacts.linksLead": "Projects, demos, and source code: GitHub. Profile and experience: LinkedIn.",

  "contacts.note": "❗ If you already have a short brief (goal, context), data, deadline, and expected deliverable — attach it upfront."
  }
};

function getI18nValue(dict, key) {
  if (Object.prototype.hasOwnProperty.call(dict, key)) return dict[key];
  const parts = key.split(".");
  let cur = dict;
  for (const p of parts) {
    if (cur && Object.prototype.hasOwnProperty.call(cur, p)) cur = cur[p];
    else return undefined;
  }
  return cur;
}

const __i18nSnapshots = {
  servicesRU: null,
};

function applyLang(lang) {
  const dict = i18n[lang] || i18n.ru;
  const scrollY = window.scrollY;

  // 1) Generic i18n (data-i18n)
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = getI18nValue(dict, key);

    if (typeof val !== "string") return;
    const looksLikeHtml = /<\/?[a-z][\s\S]*>/i.test(val);
    if (looksLikeHtml) el.innerHTML = val;
    else el.textContent = val;
  });

  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);
  requestAnimationFrame(() => {
    window.scrollTo({ top: scrollY });
  });

    // ===== Services restore for RU =====
  const servicesSection = document.getElementById("services");
  if (servicesSection) {
    // Save initial RU HTML once (on first call, before we overwrite it with EN)
    if (!__i18nSnapshots.servicesRU) {
      __i18nSnapshots.servicesRU = servicesSection.innerHTML;
    }

    // If user switches back to RU — restore original RU HTML
    if (lang === "ru") {
      servicesSection.innerHTML = __i18nSnapshots.servicesRU;
    }
  }
  
  // 2) Services (programmatic i18n without touching HTML)
  // RU: keep original HTML texts
  if (lang === "en") {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      // Title / subtitle
      const sectionTitle = servicesSection.querySelector(".section-title .grad-text");
      if (sectionTitle) {
        const v = getI18nValue(dict, "services.title");
        if (typeof v === "string") sectionTitle.textContent = v;
      }

      const sectionSubtitle = servicesSection.querySelector(".section-text.section-text--center");
      if (sectionSubtitle) {
        const v = getI18nValue(dict, "services.subtitle");
        if (typeof v === "string") sectionSubtitle.textContent = v;
      }

      const setText = (el, key) => {
        if (!el) return;
        const v = getI18nValue(dict, key);
        if (typeof v === "string") el.textContent = v;
      };

      const setHTML = (el, key) => {
        if (!el) return;
        const v = getI18nValue(dict, key);
        if (typeof v === "string") el.innerHTML = v;
      };

      const groupKeys = ["ml", "ai", "ds", "web"];
      const cardKeys = ["base", "ext", "ops"]; // Base / Extension / Preparation for Use

      const groups = Array.from(servicesSection.querySelectorAll(".service-group"));
      groups.forEach((groupEl, gi) => {
        const gk = groupKeys[gi];
        if (!gk) return;

        // Group title/subtitle
        setText(groupEl.querySelector(".service-group-title"), `services.${gk}.title`);
        setText(groupEl.querySelector(".service-group-sub"), `services.${gk}.sub`);

        const cards = Array.from(groupEl.querySelectorAll(".service-card"));
        cards.forEach((cardEl, ci) => {
          const ck = cardKeys[ci];
          if (!ck) return;

          // Badge
          setText(cardEl.querySelector(".service-badge"), `services.${gk}.${ck}.badge`);

          // Price:
          // If there is data-price-rub, the converter (DOMContentLoaded) will render it.
          // For ranged prices stored in i18n (e.g. "35 000–55 000 ₽ (~$...)"), remove data-price-rub from HTML.
          const priceEl = cardEl.querySelector(".service-price");
          if (priceEl && !priceEl.hasAttribute("data-price-rub")) {
            setText(priceEl, `services.${gk}.${ck}.price`);
          }

          // Term
          setText(cardEl.querySelector(".service-term"), `services.${gk}.${ck}.term`);

          // List items (do not add/remove <li>, only overwrite existing)
          const ul = cardEl.querySelector(".service-list");
          if (ul) {
            const liEls = Array.from(ul.querySelectorAll("li"));
            liEls.forEach((li, idx) => {
              const key = `services.${gk}.${ck}.li${idx + 1}`;
              const v = getI18nValue(dict, key);
              if (typeof v === "string") {
              const looksLikeHtml = /<\/?[a-z][\s\S]*>/i.test(v);
              if (looksLikeHtml) li.innerHTML = v;
              else li.textContent = v;}
            });
          }

          // Notes (1st: note, 2nd: foot)
          const notes = Array.from(cardEl.querySelectorAll(".service-note"));
          if (notes[0]) setText(notes[0], `services.${gk}.${ck}.note`);
          if (notes[1]) setText(notes[1], `services.${gk}.${ck}.foot`);
        });
      });

      // Conditions block (allows HTML because of <strong>)
      const cond = servicesSection.querySelector(".services-conditions");
      if (cond) {
        setText(cond.querySelector(".services-conditions-title"), "services.terms.title");

        const liEls = Array.from(cond.querySelectorAll(".services-conditions-list li"));
        if (liEls[0]) setHTML(liEls[0], "services.terms.li1");
        if (liEls[1]) setHTML(liEls[1], "services.terms.li2");
        if (liEls[2]) setHTML(liEls[2], "services.terms.li3");
        if (liEls[3]) setHTML(liEls[3], "services.terms.li4");
        if (liEls[4]) setHTML(liEls[4], "services.terms.li5");
      }
    }
  }

  // 3) Active styles for language buttons
  const ruBtn = document.getElementById("lang-ru");
  const enBtn = document.getElementById("lang-en");
  if (ruBtn && enBtn) {
    ruBtn.classList.toggle("active", lang === "ru");
    enBtn.classList.toggle("active", lang === "en");
  }

  localStorage.setItem("lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  // language init
  const saved = localStorage.getItem("lang") || "ru";
  applyLang(saved);

  const ruBtn = document.getElementById("lang-ru");
  const enBtn = document.getElementById("lang-en");
  ruBtn?.addEventListener("click", () => applyLang("ru"));
  enBtn?.addEventListener("click", () => applyLang("en"));

  // ===== Services pricing: RUB -> USD =====
  // IMPORTANT: Change ONLY here when exchange rate changes.
  const USD_RATE_RUB = 77.83;

  function formatRub(n) {
    const s = Math.round(Number(n))
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return `${s} ₽`;
  }

  function formatUsdFromRub(rub) {
    const usd = Number(rub) / USD_RATE_RUB;
    return `$${Math.round(usd)}`;
  }

  document.querySelectorAll("[data-price-rub]").forEach((el) => {
    const rub = Number(el.getAttribute("data-price-rub"));
    const prefix = el.getAttribute("data-price-prefix") || "";
    const rubTxt = formatRub(rub);
    const usdTxt = formatUsdFromRub(rub);

    el.textContent = `${prefix}${rubTxt} (~${usdTxt})`;
  });

  // ----- Carousels -----
  document.querySelectorAll("[data-carousel]").forEach((root) => {
    const track = root.querySelector(".carousel-track");
    const slides = Array.from(root.querySelectorAll(".carousel-track img"));
    const prev = root.querySelector(".carousel-btn.prev");
    const next = root.querySelector(".carousel-btn.next");
    const dotsWrap = root.querySelector(".carousel-dots");

    if (!track || slides.length === 0 || !prev || !next || !dotsWrap) return;

    let idx = 0;

    // dots
    dotsWrap.innerHTML = "";
    const dots = slides.map((_, i) => {
      const d = document.createElement("div");
      d.className = "carousel-dot" + (i === 0 ? " active" : "");
      dotsWrap.appendChild(d);
      return d;
    });

    const render = () => {
      track.style.transform = `translateX(${-idx * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle("active", i === idx));
    };

    prev.addEventListener("click", () => {
      idx = (idx - 1 + slides.length) % slides.length;
      render();
    });

    next.addEventListener("click", () => {
      idx = (idx + 1) % slides.length;
      render();
    });
  });
});