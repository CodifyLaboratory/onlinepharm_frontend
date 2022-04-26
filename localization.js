import LocalizedStrings from 'react-localization';


export let strings = new LocalizedStrings({
    ru: {
        validation: {
            old_password: 'Старый пароль',
            password_must_match: 'Пароли должны совпадать',
            required_field: 'Обязательное поле',
            invalid_email: 'Некорректный email',
            simple_password: 'Слишком простой пароль',
            password_rule: 'Пароль должен содержать от 8 до 16 символов, включая как минимум одну строчную букву, одну заглавную букву и одну цифру.'
        },
        auth: {
            unauthorized: 'Войдите или зарегистрируйтесь,\n чтобы не потерять данные аккаунта,\n и иметь доступ с другого устройства',
            login: 'Войдите в профиль',
            signup: 'Зарегистрироваться',
            medicine_you_need: 'Приобретайте нужное вам лекарство',
            next: 'Далее',
            back: 'Назад',
            skip: 'Пропустить',
            nearest_pharmacy: 'Узнайте ближайший филиал аптеки',
            convenient_payment: 'Оплатите удобным для вас способом',
            get_your_product: 'Получите товар в руки совершенно бесплатно',
            as_guest: 'Войти как гость',
            email: 'Email',
            password: 'Пароль',
            confirm_password: 'Подтвердите пароль',
            login_via: 'Или войти через',
            already_have_account: 'Уже есть аккаунт?',
            confirm_code: 'Введите код подтверждения, отправленный \n на ваш email',
            enter_the_code: 'Введите код',
            personal_data: 'Укажите личные данные',
            name: 'Имя',
            surname: 'Фамилия',
            send_code_again: 'Отправить код еще раз',
            successfully_registered: 'Вы успешно зарегистрировались! Поздравляем!',
            enter: 'Войти',
            forgot_your_password: 'Забыли пароль?',
            dont_have_account: 'Еще нет аккаунта?',
            password_recovery: 'Восстановление пароля',
            enter_your_email: 'Введите ваш email, на который был \n зарегистрирован аккаунт. Мы отправим вам \n код для восстановления  доступа к аккаунту.',
            registration: 'Регистрация',
            code_from_email: 'Введите код, отправленный  вам на email.',
            resend_code: 'Отправить код еще раз',
            create_password: 'Создание пароля',
            new_password: 'Новый пароль',
            send: 'Отправить',
            password_changed: 'Ваш пароль был успешно изменен',
            phone: 'Телефон',
            seconds: 'сек.'
        },
        main: {
            main: 'Главная',
            pharmacies: 'Аптеки',
            product_categories: 'Категории товаров',
            show_all: 'Смотреть все',
            collections: 'Подборки',
            more: 'Подробнее',
            leave_feedback: 'Оставить отзыв',
            about_pharmacy: 'Об аптеке',
            reviews: 'Отзывы',
            list: 'Список',
            on_the_map: 'На карте',
            add_to_cart: 'В корзину',
            popular: 'Популярные',
            about_product: 'О продукте',
            new_feedback: 'Новый отзыв',
            write_review: 'Напишите ваш отзыв',
            feedback_sent: 'Ваш отзыв успешно отправлен',
            send_feedback: 'Отправить отзыв',
            select_pharmacy: 'Выберите аптеку',
            review_count: 'отзывов',
            without_feedbacks_pharmacy: 'Отзывов об аптеке еще нет',
            away: 'от вас',
            pharmacy_count: 'Количество аптек',
            pcs: 'шт',
            from: 'c',
            to: 'по',
            title: 'Главная',
            choice_of_pharmacy: 'Выбор аптеки'
        },
        news: {
            news: 'Новости',
            all: 'Все',
            stocks: 'Акции',
            discounts: 'Скидки',
            new_products: 'Новинки',
            title: 'Новости'
        },
        cart: {
            cart: 'Корзина',
            total: 'Итого',
            in_stock: 'В наличии',
            choose: 'Выбрать',
            price: 'Цена от',
            purchase: 'Приобрести',
            sum: 'Сумма',
            remove_item: 'Удалить товар из корзины?',
            add_card: 'Добавление карты',
            contact_details: 'Контактные данные',
            order_comments: 'Комментарии к заказу',
            delivery_type: 'Тип доставки',
            delivery: 'Доставка',
            pickup: 'Самовывоз',
            city: 'Город',
            apartment: 'Квартира',
            entrance: 'Подъезд',
            floor: 'Этаж',
            choose_on_map: 'Выбрать на карте',
            delivery_time: 'Время доставки',
            delivery_possible: 'Доставить как можно быстрее',
            select_delivery_time: 'Выбрать время и дату доставки',
            list_of_products: 'Список товаров',
            payment_methods: 'Способ оплаты',
            in_cash: `Наличными при \nполучении`,
            online_payment: 'Онлайн оплата',
            delivery_times: 'Срок доставки',
            shipping_cost: 'Стоимость доставки',
            checkout: 'Оформить заказ',
            to_pay: 'К оплате',
            list: 'Список',
            clear_basket: 'Очистить корзину',
            successfully_placed: 'Ваш заказ успешно оформлен! Ожидайте курьера он с вами свяжется в ближайшее время! ',
            in_cart: 'В корзине',
            to_main: 'На главную',
            empty_basket: 'Корзина пуста',
            title: 'Корзина',
            to_order: 'Заказать\n доставку'
        },
        profile: {
            profile: 'Профиль',
            my_account: 'Мой аккаунт',
            my_drugs: 'Мои лекарства',
            my_pharmacies: 'Мои аптеки',
            my_orders: 'Мои заказы',
            my_payment_methods: 'Мои способы оплаты',
            settings: 'Настройки',
            about_application: 'О приложении',
            logout: 'Выйти',
            save: 'Сохранить',
            delete_account: 'Удалить аккаунт',
            choose_language: 'Выбрать язык',
            change_password: 'Изменить пароль',
            current_password: 'Текущий пароль',
            new_password: 'Новый пароль',
            confirm_password: 'Подтвердите пароль',
            password_changed: 'Ваш пароль был успешно изменен',
            delete_your_account: 'Вы точно хотите удалить ваш аккаунт и все данные?',
            address: 'Адрес',
            title: 'Профиль',
            empty_list: 'Список пуст',
            want_to_go_out: 'Вы точно хотите выйти?'
        },
        search: {
            search: 'Поиск',
            find_product: 'Найдите желаемый продукт',
            title: 'Поиск',
            nothing: 'По вашему запросу ничего не найдено',
            change_query: 'Попробуйте изменить ваш запрос',
            check_query: 'Проверьте, нет ли ошибок или опечаток'
        },
        modals: {
            cancel: 'Отмена',
            delete: 'Удалить',
            clear_basket: 'Очистить корзину?',
            yes: 'Да',
            no: 'Нет'
        },
        product: {
            description: 'Описание',
            manufacturer: 'Производитель',
            INN: 'МНН',
            active_ingredients: 'Действующие вещества',
            release_form: 'Форма выпуска',
            packing: 'Фасовка',
            dosage: 'Дозировка',
            expiration_date: 'Срок годности',
            conditions: 'Условия отпуска из аптеки',
            instructions: 'Инструкция по применению',
            release_form_packing: 'Форма выпуска, упаковка и состав',
            shell_composition: 'Состав оболочки',
            pharmacological_action: 'Фармакологическое действие',
            pharmacokinetics: 'Фармакокинетика',
            indications: 'Показания препарата',
            application: 'Применение',
            dosage_regimen: 'Режим дозирования',
            side_effects: 'Побочные действие',
            contraindications: 'Противопоказания к применению',
            special_instructions: 'Особые указания',
            overdose: 'Передозировка',
            drug_interaction: 'Лекарственное взаимодействие',
            storage_conditions: 'Условия хранения',
        }
    },
    kg: {
        validation: {
            old_password: 'Старый пароль',
            password_must_match: 'Сырсөздөр дал келиши керек',
            required_field: 'Милдеттүү талаа',
            invalid_email: 'Туура эмес email',
            simple_password: 'Өтө жөнөкөй сырсөз',
            password_rule: 'Сырсөз кеминде бир кичине тамга, бир чоң тамга жана бир санды камтыган 8 жана 16 белгиден турушу керек.'
        },
        auth: {
            unauthorized: 'Кирүү же эсеп айрылып калбаш\n үчүн катталып жана башка түзмөктө мүмкүнчүлүк бар',
            login: 'Профильге кирүү',
            signup: 'Катталуу',
            medicine_you_need: 'Керектүү дары алыңыз',
            next: 'Кийинки',
            back: 'Артка',
            skip: 'Өткөрүп жиберүү',
            nearest_pharmacy: 'Жакын дарыкана тармагын билүү',
            convenient_payment: 'Төлөө ыңгайлуу ыкмасы сиз үчүн',
            get_your_product: 'Продукцияңызды бекер алыңыз',
            as_guest: 'Конок катары кирүү',
            email: 'Email',
            password: 'Купуя сөз',
            confirm_password: 'Сырсөздү ырастаңыз',
            login_via: 'Же кирүү',
            already_have_account: 'Аккаунт бар',
            confirm_code: 'Электрондук почтаңызга жөнөтүлгөн \n ырастоо кодун киргизиңиз',
            enter_the_code: 'Код киргизиңиз',
            personal_data: 'Жеке маалыматтарды киргизүү',
            name: 'Аты',
            surname: 'Фамилия',
            send_code_again: 'Кайра кодду жөнөтүү',
            successfully_registered: 'Сиз ийгиликтүү катталдыңыз! Куттуктайбыз! ',
            enter: 'Кирүү',
            forgot_your_password: 'Сыр сөздү унуттуңузбу?',
            dont_have_account: 'Дагы аккаунт барбы?',
            password_recovery: 'Сыр сөздү калыбына келтирүү',
            enter_your_email: 'Аккаунт катталган электрондук почта дарегиңизди киргизиңиз. Аккаунтка кирүү мүмкүнчүлүгүн калыбына келтирүү үчүн сизге код жөнөтөбүз.\n',
            registration: 'Каттоо',
            code_from_email: 'Сизге электрондук почта аркылуу жөнөтүлгөн кодду киргизиңиз.',
            resend_code: 'Кайра кодду жөнөтүү',
            create_password: 'Сырсөз түзүү',
            new_password: 'Жаңы сырсөз',
            send: 'Жөнөтүү',
            password_changed: 'Сиздин сырсөз ийгиликтүү өзгөрдү',
            phone: 'Телефон',
            seconds: 'сек.'
        },
        main: {
            main: 'Башкы',
            pharmacies: 'Дарыканалар',
            product_categories: 'Продукт категориялары',
            show_all: 'Бардыгын көрүү',
            collections: 'Тандоолор',
            more: 'Кененирээк',
            leave_feedback: 'Пикир калтыруу',
            about_pharmacy: 'Дарыкана жөнүндө',
            reviews: 'Сын-пикир',
            list: 'Тизме',
            on_the_map: 'Картада',
            add_to_cart: 'Себетке',
            popular: 'Популярдуу',
            about_product: 'Продукт жөнүндө',
            new_feedback: 'Жаңы пикир',
            write_review: 'Сын-пикириңизди жазыңыз',
            feedback_sent: 'Сиздин пикир ийгиликтүү жөнөтүлдү',
            send_feedback: 'Пикир жөнөтүү',
            select_pharmacy: 'дарыкана тандоо',
            review_count: 'сын-пикирлер',
            without_feedbacks_pharmacy: 'Отзывов об аптеке еще нет',
            away: 'от вас',
            pharmacy_count: 'дарыканалардын саны',
            pcs: 'шт',
            from: 'c',
            to: 'по',
            in_cart: 'В корзине',
            title: 'Башкы',
            choice_of_pharmacy: 'Дарыкана тандоо'
        },
        news: {
            news: 'Жаңылыктар',
            all: 'Баардыгы',
            stocks: 'Акциялар',
            discounts: 'Арзандатуулар',
            new_products: 'Жаңылар',
            title: 'Жаңылыктар',
        },
        cart: {
            cart: 'Себет',
            total: 'Бардыгы',
            in_stock: 'Кампада',
            choose: 'Тандоо',
            price: 'Баасы',
            purchase: 'Сатып алуу',
            sum: 'Сумма',
            remove_item: 'Себеттен буюмду алып саласызбы?',
            add_card: 'Картаны кошуу',
            contact_details: 'Байланыш маалыматы',
            order_comments: 'Тапшырыкка комментарийлер',
            delivery_type: 'Жеткирүү түрү',
            delivery: 'Жеткирүү',
            pickup: 'Өзүн-өзү ташуу',
            city: 'Шаар',
            apartment: 'Батир',
            entrance: 'Кирүү',
            floor: 'Кабат',
            choose_on_map: 'Картадан тандоо',
            delivery_time: 'Жеткирүү убактысы',
            delivery_possible: 'Мүмкүн болушунча тезирээк жеткирүү',
            select_delivery_time: 'Жеткирүү убактысын жана күнүн тандаңыз',
            list_of_products: 'Өндүрүм тизмеси',
            payment_methods: 'Төлөө ыкмасы',
            in_cash: 'Кабыл алуу боюнча накталай',
            online_payment: 'Онлайн төлөм',
            delivery_times: 'Жеткирүү мөөнөтү',
            shipping_cost: 'Жеткирүү акысы',
            checkout: 'Тапшырык \n жол-жоболоштуруу',
            to_pay: 'Төлөөгө',
            list: 'Тизме',
            clear_basket: 'Себетти тазалоо',
            successfully_placed: 'Буйрутмаңыз ийгиликтүү жайгаштырылды! Курьерди күтүңүз, ал сиз менен жакында байланышат',
            in_cart: 'В корзине',
            to_main: 'Башкы',
            empty_basket: 'Бош себет',
            title: 'Себет',
            to_order: 'жеткирүү \nтартиби'
        },
        profile: {
            profile: 'Профиль',
            my_account: 'Менин аккаунтум',
            my_drugs: 'Менин дарыларым',
            my_pharmacies: 'Менин дарыканаларым',
            my_orders: 'Менин буйруктарым',
            my_payment_methods: 'Менин төлөм ыкмаларым',
            settings: 'Орнотуулар',
            about_application: 'Тиркеме жөнүндө',
            logout: 'Чыгуу',
            save: 'Сактоо',
            delete_account: 'Аккаунт өчүрүү',
            choose_language: 'Тил тандаңыз',
            change_password: 'Сырсөздү өзгөртүү',
            current_password: 'Учурдагы Сырсөз',
            new_password: 'Жаңы сыр сөз',
            confirm_password: 'Сырсөздү ырастаңыз',
            password_changed: 'Сиздин сырсөз ийгиликтүү өзгөрдү',
            delete_your_account: 'Аккаунттузду жана бардык дайындарды чын эле жок кылгыңыз келеби?',
            address: 'Адрес',
            title: 'Профиль',
            empty_list: 'Тизме бош',
            want_to_go_out: 'Сиз чын эле чыгууну каалайсызбы?'
        },
        search: {
            search: 'Издөө',
            find_product: 'Каалаган продуктту табуу',
            title: 'Издөө',
            nothing: 'Сурамыңыз боюнча эч нерсе табылган жок',
            change_query: 'Өтүнүчүңүздү өзгөртүп көрүңүз',
            check_query: 'Мүчүлүштүктөр же каталар бар болсо, текшерүү'
        },
        modals: {
            cancel: 'Жокко чыгаруу',
            delete: 'Жок кылуу',
            clear_basket: 'Себетти тазалоо',
            yes: 'Ооба',
            no: 'Жок'
        },
        product: {
            description: 'Баяны',
            manufacturer: 'Өндүрүүчү',
            INN: 'ЭАПА',
            active_ingredients: 'Таасир этүүчү заттар',
            release_form: 'Чыгаруу формасы',
            packing: 'Таңгактоо',
            dosage: 'Дозалоо',
            expiration_date: 'Жарактуулук мөөнөтү',
            conditions: 'Дарыканадан чыгаруунун шарттары',
            instructions: 'Колдонуу боюнча нускама',
            release_form_packing: 'Чыгарылыш формасы, таңгагы жана курамы',
            shell_composition: 'Кабыгы курамы',
            pharmacological_action: 'Фармакологиялык таасири',
            pharmacokinetics: 'Фармакокинетика',
            indications: 'Дары көрсөтмөлөр',
            application: 'Колдонмо',
            dosage_regimen: 'Дозалоо режими',
            side_effects: 'Терс таасирлери',
            contraindications: 'Колдонууга каршы көрсөтмөлөр',
            special_instructions: 'Атайын көрсөтмөлөр',
            overdose: 'Ашыкча доза',
            drug_interaction: 'Дары өз ара аракеттенүү',
            storage_conditions: 'Сактоо шарттары',
        }
    },
    en: {
        validation: {
            old_password: 'Old password',
            password_must_match: 'Passwords must match',
            required_field: 'Required field',
            invalid_email: 'Invalid email',
            simple_password: 'Too simple password',
            password_rule: 'The password must be between 8 and 16 characters long, including at least one lowercase letter, one uppercase letter, and one number.'
        },
        auth: {
            unauthorized: 'Login or register in order\n not to lose your account data and have access from another device',
            login: 'Login to your profile',
            signup: 'Register',
            medicine_you_need: 'Get the medicine you need',
            next: 'Next',
            back: 'Back',
            skip: 'Skip',
            nearest_pharmacy: 'Find out the nearest pharmacy',
            convenient_payment: 'Pay in a convenient for you',
            get_your_product: 'Get your product for free',
            as_guest: 'Login as a guest',
            email: 'Email',
            password: 'Password',
            confirm_password: 'Confirm the password',
            login_via: 'Or login via',
            already_have_account: 'Already have an account?',
            confirm_code: 'Enter the confirmation code sent to your email',
            enter_the_code: 'Enter the code',
            personal_data: 'Enter your personal data',
            name: 'Name',
            surname: 'Surname',
            send_code_again: 'Send the code again',
            successfully_registered: 'You have successfully registered!  Congratulations!',
            enter: 'Login',
            forgot_your_password: 'Forgot your password ?',
            dont_have_account: 'Don\'t have an account yet?',
            password_recovery: 'Password recovery',
            enter_your_email: 'Enter the email address with which the account was registered. We have sent you a code to restore access to your account.',
            registration: 'Registration',
            code_from_email: 'Enter the code sent to you by email.',
            resend_code: 'Send the code again',
            create_password: 'Create a password',
            new_password: 'New password ',
            send: 'Send',
            password_changed: 'Your password has been successfully changed',
            phone: 'Phone',
            seconds: 's'
        },
        main: {
            main: 'Main',
            pharmacies: 'Pharmacies',
            product_categories: 'Product categories',
            show_all: 'See all',
            collections: 'Collections',
            more: 'More',
            leave_feedback: 'Leave feedback',
            about_pharmacy: 'About the pharmacy',
            reviews: 'Reviews',
            list: 'List',
            on_the_map: 'On the map',
            add_to_cart: 'Add to cart',
            popular: 'Popular',
            about_product: 'About product',
            new_feedback: 'New feedback',
            write_review: 'Write your review',
            feedback_sent: 'Your feedback has been sent successfully',
            send_feedback: 'Send feedback',
            select_pharmacy: 'Select pharmacy',
            review_count: 'reviews',
            without_feedbacks_pharmacy: 'There are no pharmacy reviews yet.',
            away: 'away from you',
            pharmacy_count: 'pharmacy count',
            pcs: 'pcs',
            from: 'from',
            to: 'to',
            in_cart: 'In the basket',
            title: 'Main',
            choice_of_pharmacy: 'Choosing a pharmacy'
        },
        news: {
            news: 'News',
            all: 'All',
            stocks: 'Stocks',
            discounts: 'Discounts',
            new_products: 'New products',
            title: 'News',
        },
        cart: {
            cart: 'Basket',
            total: 'Total',
            in_stock: 'In stock',
            choose: 'Choose',
            price: 'Price',
            purchase: 'Purchase',
            sum: 'Sum',
            remove_item: 'Remove item from cart?',
            add_card: 'Link a card',
            contact_details: 'Contact details',
            order_comments: 'Order comments',
            delivery_type: 'Delivery type',
            delivery: 'Delivery',
            pickup: 'Pickup',
            city: 'City',
            apartment: 'Apartment',
            entrance: 'Entrance',
            floor: 'Floor',
            choose_on_map: 'Choose on map',
            delivery_time: 'Delivery time',
            delivery_possible: 'Deliver as soon as possible',
            select_delivery_time: 'Select delivery time and date',
            list_of_products: 'List of products',
            payment_methods: 'Payment method',
            in_cash: 'In cash upon receipt',
            online_payment: 'Online payment',
            delivery_times: 'Delivery time',
            shipping_cost: 'Shipping cost',
            checkout: 'Checkout',
            to_pay: 'To pay',
            list: 'List',
            clear_basket: 'Clear all',
            successfully_placed: 'Your order has been successfully placed! Wait for the courier, he will contact you shortly!',
            in_cart: 'In the basket',
            to_main: 'To main',
            empty_basket: 'Empty shopping cart',
            title: 'Basket',
            to_order: 'to order \ndelivery'
        },
        profile: {
            profile: 'Profile',
            my_account: 'My account',
            my_drugs: 'My medicines',
            my_pharmacies: 'My pharmacies',
            my_orders: 'My orders',
            my_payment_methods: 'My payment methods',
            settings: 'Settings',
            about_application: 'About the application ',
            logout: 'Log out',
            save: 'Save',
            delete_account: 'Delete account',
            choose_language: 'Choose language',
            change_password: 'Change password',
            current_password: 'Current password',
            new_password: 'New password',
            confirm_password: 'Confirm new password',
            password_changed: 'Your password has been successfully changed',
            delete_your_account: 'Are you sure you want to delete your account and all data?',
            address: 'Address',
            title: 'Profile',
            empty_list: 'The list is empty',
            want_to_go_out: 'Are you sure you want to get out?'
        },
        search: {
            search: 'Search',
            find_product: 'Find the desired product',
            title: 'Search',
            nothing: 'Nothing found for your request',
            change_query: 'Try changing your request',
            check_query: 'Check for errors or typos'
        },
        modals: {
            cancel: 'Cancel',
            delete: 'Delete',
            clear_basket: 'Empty shopping cart?',
            yes: 'Yes',
            no: 'No'
        },
        product: {
            description: 'Description',
            manufacturer: 'Manufacturer',
            INN: 'INN',
            active_ingredients: 'Active ingredients',
            release_form: 'Release form',
            packing: 'Packing',
            dosage: 'Dosage',
            expiration_date: 'Expiration date',
            conditions: 'Conditions of vacation from the pharmacy',
            instructions: 'Instructions for use',
            release_form_packing: 'Release form, packaging and composition',
            shell_composition: 'Shell composition',
            pharmacological_action: 'Pharmacological action',
            pharmacokinetics: 'Pharmacokinetics',
            indications: 'Indications of the drug',
            application: 'Application',
            dosage_regimen: 'Dosage regimen',
            side_effects: 'Side effects',
            contraindications: 'Contraindications to use',
            special_instructions: 'Special instructions',
            overdose: 'Overdose',
            drug_interaction: 'Drug interaction',
            storage_conditions: 'Storage conditions',
        }
    },
});

