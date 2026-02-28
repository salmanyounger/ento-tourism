module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/data/tours.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COMPANY",
    ()=>COMPANY,
    "OWNER",
    ()=>OWNER,
    "WHATSAPP",
    ()=>WHATSAPP,
    "tourCategories",
    ()=>tourCategories
]);
const WHATSAPP = '+971544735060';
const COMPANY = 'ENTO Tourism';
const OWNER = 'Salman Ali';
const tourCategories = [
    {
        slug: 'desert-safari',
        name: 'Desert Safari',
        tagline: 'Where the Desert Comes Alive',
        description: 'Experience the magic of the Arabian desert — from heart-pounding dune bashing to peaceful starlit camps. Six different desert adventures, each crafted for a different kind of traveller.',
        heroEmoji: '🏜️',
        subTours: [
            {
                slug: 'evening-safari',
                name: 'Evening Desert Safari',
                emoji: '🌅',
                tagline: 'The classic Dubai desert experience — sunset, stars, and a Bedouin feast',
                duration: '6 Hours',
                groupSize: 'Up to 40',
                difficulty: 'Easy',
                price: 45,
                rating: 4.9,
                reviews: 3847,
                badge: 'Most Popular',
                highlights: [
                    'Dune bashing in a 4x4',
                    'Camel riding at dusk',
                    'Sandboarding',
                    'Live Tanoura show',
                    'BBQ buffet dinner',
                    'Stargazing'
                ],
                includes: [
                    'Hotel pickup & drop-off',
                    'Dune bashing (30 min)',
                    'Camel ride',
                    'Sandboarding',
                    'Welcome drinks',
                    'Arabic coffee & dates',
                    'BBQ dinner',
                    'Live entertainment',
                    'Henna art'
                ],
                excludes: [
                    'Alcoholic beverages',
                    'Personal shopping',
                    'Travel insurance',
                    'Gratuities'
                ],
                itinerary: [
                    {
                        time: '3:00 PM',
                        title: 'Hotel Pickup',
                        desc: 'Your private 4x4 arrives at your hotel lobby. We drive 45 minutes into the heart of the Dubai desert.'
                    },
                    {
                        time: '4:00 PM',
                        title: 'Dune Bashing',
                        desc: 'Hold tight — your expert driver takes you over towering golden dunes at exhilarating angles. 30 minutes of pure adrenaline.'
                    },
                    {
                        time: '5:00 PM',
                        title: 'Sunset Activities',
                        desc: 'Try sandboarding down the dunes. Mount a camel for photos against the golden sky. Watch the desert turn orange.'
                    },
                    {
                        time: '6:00 PM',
                        title: 'Arrive at Camp',
                        desc: 'A traditional Bedouin camp awaits — lanterns, rugs, Arabic coffee, dates, and the scent of oud in the air.'
                    },
                    {
                        time: '7:00 PM',
                        title: 'Dinner & Show',
                        desc: 'A lavish BBQ spread with grilled meats, mezze, and fresh salads. Watch the spinning Tanoura dancer and fire performers.'
                    },
                    {
                        time: '9:00 PM',
                        title: 'Return to Hotel',
                        desc: 'Relaxed and full, your driver takes you back. The Milky Way follows you the whole way home.'
                    }
                ],
                safetyTips: [
                    'Wear seatbelt at all times during dune bashing',
                    'Take motion sickness tablet 30 min before if prone to nausea',
                    'Wear closed shoes — sandals sink in soft sand',
                    'Stay hydrated — carry extra water',
                    'Pregnant women & heart conditions should skip dune bashing',
                    'Keep children seated during bashing'
                ]
            },
            {
                slug: 'private-safari',
                name: 'Private Desert Safari',
                emoji: '👑',
                tagline: 'The desert, entirely yours — exclusive jeep, private camp, personal guide',
                duration: '6 Hours',
                groupSize: '2–8 People',
                difficulty: 'Easy',
                price: 149,
                rating: 5.0,
                reviews: 892,
                badge: 'Premium',
                highlights: [
                    'Private 4x4 just for your group',
                    'Exclusive camp setup',
                    'Personal Bedouin guide',
                    'Customisable menu',
                    'Photographer included',
                    'Stargazing with telescope'
                ],
                includes: [
                    'Private Land Cruiser',
                    'Dedicated guide',
                    'Private camp area',
                    'Customisable BBQ menu',
                    'Soft drinks',
                    'Camel ride',
                    'Sandboarding',
                    'Professional photographer'
                ],
                excludes: [
                    'Alcoholic beverages',
                    'Gratuities',
                    'Personal expenses'
                ],
                itinerary: [
                    {
                        time: '3:00 PM',
                        title: 'Exclusive Pickup',
                        desc: 'A premium Land Cruiser arrives just for your group. Your personal guide greets you by name.'
                    },
                    {
                        time: '4:00 PM',
                        title: 'Private Dune Bashing',
                        desc: 'No waiting, no sharing. Your driver takes you on a personalised route at whatever intensity you prefer.'
                    },
                    {
                        time: '5:00 PM',
                        title: 'Golden Hour',
                        desc: 'Sandboarding, camel ride, and time to photograph freely without crowds.'
                    },
                    {
                        time: '6:00 PM',
                        title: 'Private Camp',
                        desc: 'Your own exclusive section of the Bedouin camp, decorated for special occasions if needed.'
                    },
                    {
                        time: '7:00 PM',
                        title: 'Private Dinner',
                        desc: 'Your menu choices served at your own table. No sharing with strangers tonight.'
                    },
                    {
                        time: '9:00 PM',
                        title: 'Stargazing & Return',
                        desc: 'Your guide points out constellations before your private drop-off.'
                    }
                ],
                safetyTips: [
                    'Seatbelts mandatory during dune bashing',
                    'Inform guide of any medical conditions in advance',
                    'Sun protection essential in summer',
                    'Notify us of dietary restrictions before the trip'
                ]
            },
            {
                slug: 'overnight-safari',
                name: 'Overnight Desert Safari',
                emoji: '🌙',
                tagline: 'Sleep under a billion stars in a luxury Bedouin tent',
                duration: '16 Hours',
                groupSize: 'Up to 20',
                difficulty: 'Easy',
                price: 189,
                rating: 4.8,
                reviews: 541,
                badge: 'Unique Experience',
                highlights: [
                    'Luxury tent accommodation',
                    'Midnight stargazing',
                    'Desert sunrise breakfast',
                    'Morning camel trek',
                    'Full evening programme',
                    'Breakfast in the dunes'
                ],
                includes: [
                    'Hotel pickup & return next morning',
                    'Dune bashing',
                    'Camel ride',
                    'Full BBQ dinner',
                    'Overnight luxury tent',
                    'Bedding & towels',
                    'Morning breakfast'
                ],
                excludes: [
                    'Alcohol',
                    'Personal toiletries',
                    'Travel insurance'
                ],
                itinerary: [
                    {
                        time: '3:00 PM',
                        title: 'Afternoon Pickup',
                        desc: 'Depart hotel for the desert with your luggage for the overnight stay.'
                    },
                    {
                        time: '4–6 PM',
                        title: 'Evening Programme',
                        desc: 'Full evening safari — dune bashing, sunset activities, camp arrival.'
                    },
                    {
                        time: '7–10 PM',
                        title: 'Dinner & Entertainment',
                        desc: 'BBQ feast, live shows, bonfire, and Arabic coffee under the stars.'
                    },
                    {
                        time: '10:00 PM',
                        title: 'Stargazing',
                        desc: 'Your guide leads a dedicated stargazing session. The Milky Way is extraordinary here.'
                    },
                    {
                        time: '11:00 PM',
                        title: 'Retire to Your Tent',
                        desc: 'Air-cooled luxury Bedouin tent with proper beds, lighting, and privacy.'
                    },
                    {
                        time: '5:30 AM',
                        title: 'Desert Sunrise',
                        desc: 'Wake for the sunrise — a moment you will never forget.'
                    },
                    {
                        time: '7:00 AM',
                        title: 'Morning Activities',
                        desc: 'Morning camel trek through quiet dunes. Hot breakfast at the camp.'
                    },
                    {
                        time: '9:00 AM',
                        title: 'Return to Hotel',
                        desc: 'Relaxed morning drive back in time for a rest.'
                    }
                ],
                safetyTips: [
                    'Bring warm layers — desert nights drop to 15°C in winter',
                    'Fully charged phone before departure',
                    'Do not wander alone from the camp at night',
                    'Inform staff of any allergies or medical needs'
                ]
            },
            {
                slug: 'morning-safari',
                name: 'Morning Desert Safari',
                emoji: '🌄',
                tagline: 'The desert before the heat — cooler, quieter, and utterly magical',
                duration: '4 Hours',
                groupSize: 'Up to 30',
                difficulty: 'Easy',
                price: 55,
                rating: 4.7,
                reviews: 672,
                highlights: [
                    'Cooler morning temperatures',
                    'Quieter dunes',
                    'Dune bashing',
                    'Sandboarding',
                    'Camel ride',
                    'Light breakfast at camp'
                ],
                includes: [
                    'Hotel pickup',
                    'Dune bashing',
                    'Sandboarding',
                    'Camel ride',
                    'Arabic tea & dates',
                    'Light breakfast',
                    'Hotel drop-off'
                ],
                excludes: [
                    'Lunch',
                    'Alcoholic beverages',
                    'Gratuities'
                ],
                itinerary: [
                    {
                        time: '5:30 AM',
                        title: 'Early Pickup',
                        desc: 'Your 4x4 collects you as the city is still sleeping.'
                    },
                    {
                        time: '6:30 AM',
                        title: 'Sunrise Dune Bashing',
                        desc: 'The desert is quieter and cooler. Soft morning light turns every dune gold.'
                    },
                    {
                        time: '7:30 AM',
                        title: 'Activities',
                        desc: 'Sandboarding, camel ride, and photography in the best light of the day.'
                    },
                    {
                        time: '8:30 AM',
                        title: 'Camp Breakfast',
                        desc: 'Arabic tea, fresh bread, eggs, hummus, and dates.'
                    },
                    {
                        time: '9:30 AM',
                        title: 'Return',
                        desc: 'Drop-off at your hotel or any central Dubai location.'
                    }
                ],
                safetyTips: [
                    'Bring a light jacket — mornings can be cool',
                    'Sunscreen after 7AM as sun rises quickly',
                    'Seatbelt on during all dune bashing'
                ]
            },
            {
                slug: 'buggy-safari',
                name: 'Dune Buggy Safari',
                emoji: '🏎️',
                tagline: 'Take the wheel yourself — drive your own buggy through the golden dunes',
                duration: '3 Hours',
                groupSize: '2–12',
                difficulty: 'Moderate',
                price: 120,
                rating: 4.9,
                reviews: 1103,
                badge: 'Adrenaline',
                highlights: [
                    'Drive your own dune buggy',
                    '1000cc automatic',
                    'No experience needed',
                    'Safety briefing + guided trail',
                    'GoPro option',
                    'Desert photography stop'
                ],
                includes: [
                    'Safety helmet & goggles',
                    'Dune buggy (2-seater)',
                    'Guided buggy trail',
                    'Briefing & training',
                    'Bottled water',
                    'Desert photography stop'
                ],
                excludes: [
                    'Under 16 not permitted to drive',
                    'Travel insurance',
                    'Gratuities'
                ],
                itinerary: [
                    {
                        time: 'Arrival',
                        title: 'Safety Briefing',
                        desc: 'Full briefing on controls, safety rules, and trail etiquette. 15 minutes.'
                    },
                    {
                        time: '+15 min',
                        title: 'Practice Loop',
                        desc: 'A flat practice area to get comfortable with the buggy controls.'
                    },
                    {
                        time: '+30 min',
                        title: 'Guided Dune Trail',
                        desc: 'Follow your guide across a marked route through real dunes.'
                    },
                    {
                        time: '+90 min',
                        title: 'Desert Stop',
                        desc: 'Engines off. Silence. Photos. Water. The desert looks different from something you drove yourself.'
                    },
                    {
                        time: '+120 min',
                        title: 'Return Lap',
                        desc: 'Back to base at your own pace.'
                    }
                ],
                safetyTips: [
                    'Minimum age 16 to drive, 5 to ride as passenger',
                    'Closed shoes mandatory — no sandals',
                    'Goggles must be worn at all times on the trail',
                    'Pregnant women cannot participate'
                ]
            },
            {
                slug: 'quad-safari',
                name: 'Quad Bike Safari',
                emoji: '🏍️',
                tagline: 'Single-track freedom — you, a quad, and the open desert',
                duration: '1–2 Hours',
                groupSize: 'Any Size',
                difficulty: 'Moderate',
                price: 75,
                rating: 4.8,
                reviews: 2104,
                highlights: [
                    'Automatic 250cc quad bikes',
                    '30 or 60 minute options',
                    'Guided trail',
                    'All safety gear included',
                    'Can combine with evening safari'
                ],
                includes: [
                    'Quad bike',
                    'Safety helmet',
                    'Guided trail',
                    'Briefing',
                    'Water'
                ],
                excludes: [
                    'Under 16 cannot ride solo',
                    'Travel insurance',
                    'Gratuities'
                ],
                itinerary: [
                    {
                        time: 'Arrival',
                        title: 'Gear Up & Briefing',
                        desc: 'Helmet fitted, controls explained. Takes 10 minutes.'
                    },
                    {
                        time: '+10 min',
                        title: 'Guided Quad Trail',
                        desc: 'Follow your guide into the dunes. Flat sections first, then real climbing.'
                    },
                    {
                        time: 'Mid-ride',
                        title: 'Desert Viewpoint Stop',
                        desc: 'Stop at a high dune for photos and to catch your breath.'
                    },
                    {
                        time: 'End',
                        title: 'Return',
                        desc: 'If combining with the evening safari, continue straight to the camp.'
                    }
                ],
                safetyTips: [
                    'Minimum age 16 to ride solo, 5 as passenger',
                    'Helmet compulsory — no exceptions',
                    'Keep safe distance from the guide vehicle',
                    'Inform staff of any physical limitations'
                ]
            }
        ]
    }
];
}),
"[project]/lib/translations.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COUNTRY_LANG",
    ()=>COUNTRY_LANG,
    "LANGUAGES",
    ()=>LANGUAGES,
    "T",
    ()=>T,
    "detectLang",
    ()=>detectLang
]);
const LANGUAGES = {
    en: {
        name: 'English',
        flag: '🇬🇧'
    },
    ar: {
        name: 'العربية',
        flag: '🇦🇪',
        dir: 'rtl'
    },
    ru: {
        name: 'Русский',
        flag: '🇷🇺'
    },
    de: {
        name: 'Deutsch',
        flag: '🇩🇪'
    },
    fr: {
        name: 'Français',
        flag: '🇫🇷'
    },
    es: {
        name: 'Español',
        flag: '🇪🇸'
    },
    zh: {
        name: '中文',
        flag: '🇨🇳'
    },
    ja: {
        name: '日本語',
        flag: '🇯🇵'
    },
    hi: {
        name: 'हिन्दी',
        flag: '🇮🇳'
    },
    ur: {
        name: 'اردو',
        flag: '🇵🇰',
        dir: 'rtl'
    },
    pt: {
        name: 'Português',
        flag: '🇧🇷'
    },
    ko: {
        name: '한국어',
        flag: '🇰🇷'
    },
    it: {
        name: 'Italiano',
        flag: '🇮🇹'
    },
    nl: {
        name: 'Nederlands',
        flag: '🇳🇱'
    },
    tr: {
        name: 'Türkçe',
        flag: '🇹🇷'
    }
};
const COUNTRY_LANG = {
    AE: 'ar',
    SA: 'ar',
    EG: 'ar',
    JO: 'ar',
    KW: 'ar',
    BH: 'ar',
    QA: 'ar',
    OM: 'ar',
    LB: 'ar',
    IQ: 'ar',
    MA: 'ar',
    DZ: 'ar',
    TN: 'ar',
    LY: 'ar',
    YE: 'ar',
    RU: 'ru',
    BY: 'ru',
    KZ: 'ru',
    UA: 'ru',
    DE: 'de',
    AT: 'de',
    FR: 'fr',
    BE: 'fr',
    ES: 'es',
    MX: 'es',
    AR: 'es',
    CO: 'es',
    CL: 'es',
    PE: 'es',
    CN: 'zh',
    TW: 'zh',
    HK: 'zh',
    SG: 'zh',
    JP: 'ja',
    IN: 'hi',
    PK: 'ur',
    BR: 'pt',
    PT: 'pt',
    KR: 'ko',
    IT: 'it',
    NL: 'nl',
    TR: 'tr'
};
const T = {
    en: {
        home: 'Home',
        tours: 'Tours',
        about: 'About',
        contact: 'Contact',
        book_now: 'Book Now',
        hero_badge: "Dubai's Most Trusted Tour Operator",
        hero_title: 'Where the Desert\nComes Alive',
        hero_subtitle: 'Handcrafted desert experiences, city tours & UAE adventures — personally guided by Salman Ali with 10,000+ happy guests',
        hero_explore: 'Explore Tours',
        hero_whatsapp: 'WhatsApp Salman',
        categories_title: 'Explore UAE Experiences',
        categories_subtitle: 'From golden desert dunes to glittering city skylines — every adventure, personally curated',
        why_title: 'Why Guests Choose ENTO Tourism',
        why_subtitle: 'Not just a tour — a memory you keep forever',
        reviews_title: 'What Our Guests Say',
        reviews_subtitle: 'Real reviews from real travellers',
        book_title: 'Book Your Experience',
        book_subtitle: 'Free cancellation · No payment now · WhatsApp confirmation',
        per_person: 'per person',
        from: 'From',
        rating: 'Rating',
        reviews: 'reviews',
        duration: 'Duration',
        group_size: 'Group Size',
        difficulty: 'Level',
        highlights: 'Tour Highlights',
        itinerary: 'Your Experience',
        included: "What's Included",
        excluded: 'Not Included',
        back: 'Back',
        continue: 'Continue',
        confirm: 'Confirm Booking',
        footer_tagline: 'Premium desert safaris & UAE tours',
        all_rights: 'All rights reserved',
        step_date: 'Date & Guests',
        step_details: 'Your Details',
        step_pickup: 'Pickup Info',
        step_confirm: 'Confirm',
        switch_to_english: 'English',
        viewing_in: 'Viewing in'
    },
    ar: {
        home: 'الرئيسية',
        tours: 'الجولات',
        about: 'عن ENTO',
        contact: 'اتصل بنا',
        book_now: 'احجز الآن',
        hero_badge: 'أفضل شركة سياحة موثوقة في دبي',
        hero_title: 'حيث تنبض الصحراء\nبالحياة',
        hero_subtitle: 'تجارب صحراوية مصممة بعناية وجولات المدينة ومغامرات الإمارات — يقودها سلمان علي شخصياً',
        hero_explore: 'استكشف الجولات',
        hero_whatsapp: 'تواصل عبر واتساب',
        categories_title: 'استكشف تجارب الإمارات',
        categories_subtitle: 'من كثبان الصحراء الذهبية إلى أفق المدينة المتلألئ',
        why_title: 'لماذا يختار الضيوف ENTO Tourism',
        why_subtitle: 'ليست مجرد جولة — بل ذكرى تبقى معك إلى الأبد',
        reviews_title: 'ماذا يقول ضيوفنا',
        reviews_subtitle: 'تقييمات حقيقية من مسافرين حقيقيين',
        book_title: 'احجز تجربتك',
        book_subtitle: 'إلغاء مجاني · لا دفع الآن · تأكيد عبر واتساب',
        per_person: 'للشخص',
        from: 'من',
        rating: 'التقييم',
        reviews: 'تقييمات',
        duration: 'المدة',
        group_size: 'حجم المجموعة',
        difficulty: 'المستوى',
        highlights: 'أبرز الجولة',
        itinerary: 'تجربتك',
        included: 'ما يشمله',
        excluded: 'غير مشمول',
        back: 'رجوع',
        continue: 'متابعة',
        confirm: 'تأكيد الحجز',
        footer_tagline: 'سفاري الصحراء الفاخرة وجولات الإمارات',
        all_rights: 'جميع الحقوق محفوظة',
        step_date: 'التاريخ والضيوف',
        step_details: 'بياناتك',
        step_pickup: 'معلومات الاستلام',
        step_confirm: 'تأكيد',
        switch_to_english: 'English',
        viewing_in: 'تصفح بـ'
    },
    ru: {
        home: 'Главная',
        tours: 'Туры',
        about: 'О нас',
        contact: 'Контакты',
        book_now: 'Забронировать',
        hero_badge: 'Самый надёжный туроператор Дубая',
        hero_title: 'Там, где пустыня\nоживает',
        hero_subtitle: 'Уникальные туры по пустыне, экскурсии по городу и приключения в ОАЭ — под личным руководством Салмана Али',
        hero_explore: 'Смотреть туры',
        hero_whatsapp: 'WhatsApp Салману',
        categories_title: 'Откройте ОАЭ',
        categories_subtitle: 'От золотых дюн пустыни до сверкающих небоскрёбов',
        why_title: 'Почему выбирают ENTO Tourism',
        why_subtitle: 'Не просто тур — воспоминание на всю жизнь',
        reviews_title: 'Отзывы наших гостей',
        reviews_subtitle: 'Реальные отзывы реальных путешественников',
        book_title: 'Забронировать тур',
        book_subtitle: 'Бесплатная отмена · Оплата на месте · Подтверждение в WhatsApp',
        per_person: 'с человека',
        from: 'От',
        rating: 'Рейтинг',
        reviews: 'отзывов',
        duration: 'Продолжительность',
        group_size: 'Размер группы',
        difficulty: 'Уровень',
        highlights: 'Основные моменты',
        itinerary: 'Программа тура',
        included: 'Включено',
        excluded: 'Не включено',
        back: 'Назад',
        continue: 'Продолжить',
        confirm: 'Подтвердить бронирование',
        footer_tagline: 'Премиум сафари и туры по ОАЭ',
        all_rights: 'Все права защищены',
        step_date: 'Дата и гости',
        step_details: 'Ваши данные',
        step_pickup: 'Трансфер',
        step_confirm: 'Подтверждение',
        switch_to_english: 'English',
        viewing_in: 'Просмотр на'
    },
    de: {
        home: 'Startseite',
        tours: 'Touren',
        about: 'Über uns',
        contact: 'Kontakt',
        book_now: 'Jetzt buchen',
        hero_badge: 'Dubais vertrauenswürdigster Reiseveranstalter',
        hero_title: 'Wo die Wüste\nlebendig wird',
        hero_subtitle: 'Handgefertigte Wüstenerlebnisse, Stadttouren und VAE-Abenteuer — persönlich geführt von Salman Ali',
        hero_explore: 'Touren entdecken',
        hero_whatsapp: 'WhatsApp an Salman',
        categories_title: 'VAE Erlebnisse entdecken',
        categories_subtitle: 'Von goldenen Wüstendünen bis zu glitzernden Stadtskylines',
        why_title: 'Warum Gäste ENTO Tourism wählen',
        why_subtitle: 'Nicht nur eine Tour — eine Erinnerung für immer',
        reviews_title: 'Was unsere Gäste sagen',
        reviews_subtitle: 'Echte Bewertungen von echten Reisenden',
        book_title: 'Erlebnis buchen',
        book_subtitle: 'Kostenlose Stornierung · Keine Zahlung jetzt · WhatsApp Bestätigung',
        per_person: 'pro Person',
        from: 'Ab',
        rating: 'Bewertung',
        reviews: 'Bewertungen',
        duration: 'Dauer',
        group_size: 'Gruppengröße',
        difficulty: 'Niveau',
        highlights: 'Tour Highlights',
        itinerary: 'Ihr Erlebnis',
        included: 'Inklusive',
        excluded: 'Nicht inklusive',
        back: 'Zurück',
        continue: 'Weiter',
        confirm: 'Buchung bestätigen',
        footer_tagline: 'Premium Wüstensafaris & VAE Touren',
        all_rights: 'Alle Rechte vorbehalten',
        step_date: 'Datum & Gäste',
        step_details: 'Ihre Daten',
        step_pickup: 'Abholung',
        step_confirm: 'Bestätigen',
        switch_to_english: 'English',
        viewing_in: 'Ansicht auf'
    },
    fr: {
        home: 'Accueil',
        tours: 'Tours',
        about: 'À propos',
        contact: 'Contact',
        book_now: 'Réserver',
        hero_badge: "L'opérateur touristique le plus fiable de Dubaï",
        hero_title: 'Là où le désert\nprend vie',
        hero_subtitle: 'Expériences désertiques sur mesure, visites de la ville et aventures aux EAU — guidées par Salman Ali',
        hero_explore: 'Explorer les tours',
        hero_whatsapp: 'WhatsApp Salman',
        categories_title: 'Découvrez les EAU',
        categories_subtitle: 'Des dunes dorées aux skylines scintillantes',
        why_title: 'Pourquoi choisir ENTO Tourism',
        why_subtitle: 'Pas seulement un tour — un souvenir pour toujours',
        reviews_title: 'Ce que disent nos clients',
        reviews_subtitle: 'Vrais avis de vrais voyageurs',
        book_title: 'Réserver votre expérience',
        book_subtitle: 'Annulation gratuite · Pas de paiement maintenant · Confirmation WhatsApp',
        per_person: 'par personne',
        from: 'À partir de',
        rating: 'Note',
        reviews: 'avis',
        duration: 'Durée',
        group_size: 'Taille du groupe',
        difficulty: 'Niveau',
        highlights: 'Points forts',
        itinerary: 'Votre expérience',
        included: 'Inclus',
        excluded: 'Non inclus',
        back: 'Retour',
        continue: 'Continuer',
        confirm: 'Confirmer la réservation',
        footer_tagline: 'Safaris premium et tours aux EAU',
        all_rights: 'Tous droits réservés',
        step_date: 'Date & Invités',
        step_details: 'Vos détails',
        step_pickup: 'Prise en charge',
        step_confirm: 'Confirmer',
        switch_to_english: 'English',
        viewing_in: 'Affichage en'
    },
    es: {
        home: 'Inicio',
        tours: 'Tours',
        about: 'Nosotros',
        contact: 'Contacto',
        book_now: 'Reservar',
        hero_badge: 'El operador turístico más confiable de Dubái',
        hero_title: 'Donde el desierto\ncobra vida',
        hero_subtitle: 'Experiencias en el desierto, tours por la ciudad y aventuras en los EAU — guiadas por Salman Ali',
        hero_explore: 'Explorar tours',
        hero_whatsapp: 'WhatsApp a Salman',
        categories_title: 'Explora los EAU',
        categories_subtitle: 'Desde dunas doradas hasta rascacielos brillantes',
        why_title: 'Por qué elegir ENTO Tourism',
        why_subtitle: 'No solo un tour — un recuerdo para siempre',
        reviews_title: 'Lo que dicen nuestros clientes',
        reviews_subtitle: 'Opiniones reales de viajeros reales',
        book_title: 'Reserva tu experiencia',
        book_subtitle: 'Cancelación gratuita · Sin pago ahora · Confirmación WhatsApp',
        per_person: 'por persona',
        from: 'Desde',
        rating: 'Valoración',
        reviews: 'reseñas',
        duration: 'Duración',
        group_size: 'Tamaño del grupo',
        difficulty: 'Nivel',
        highlights: 'Puntos destacados',
        itinerary: 'Tu experiencia',
        included: 'Incluido',
        excluded: 'No incluido',
        back: 'Atrás',
        continue: 'Continuar',
        confirm: 'Confirmar reserva',
        footer_tagline: 'Safaris premium y tours por los EAU',
        all_rights: 'Todos los derechos reservados',
        step_date: 'Fecha y huéspedes',
        step_details: 'Tus datos',
        step_pickup: 'Recogida',
        step_confirm: 'Confirmar',
        switch_to_english: 'English',
        viewing_in: 'Viendo en'
    },
    zh: {
        home: '首页',
        tours: '旅游',
        about: '关于我们',
        contact: '联系我们',
        book_now: '立即预订',
        hero_badge: '迪拜最值得信赖的旅游运营商',
        hero_title: '沙漠在这里\n焕发生机',
        hero_subtitle: '精心打造的沙漠体验、城市游览和阿联酋冒险 — 由Salman Ali亲自带领',
        hero_explore: '探索旅游',
        hero_whatsapp: 'WhatsApp联系Salman',
        categories_title: '探索阿联酋体验',
        categories_subtitle: '从金色沙漠沙丘到闪耀的城市天际线',
        why_title: '为什么选择ENTO Tourism',
        why_subtitle: '不只是旅游 — 是永恒的记忆',
        reviews_title: '客人评价',
        reviews_subtitle: '真实旅行者的真实评价',
        book_title: '预订您的体验',
        book_subtitle: '免费取消 · 现在无需付款 · WhatsApp确认',
        per_person: '每人',
        from: '起价',
        rating: '评分',
        reviews: '评价',
        duration: '时长',
        group_size: '团队规模',
        difficulty: '难度',
        highlights: '旅游亮点',
        itinerary: '您的体验',
        included: '包含',
        excluded: '不包含',
        back: '返回',
        continue: '继续',
        confirm: '确认预订',
        footer_tagline: '高端沙漠safari和阿联酋旅游',
        all_rights: '版权所有',
        step_date: '日期和客人',
        step_details: '您的详情',
        step_pickup: '接送信息',
        step_confirm: '确认',
        switch_to_english: 'English',
        viewing_in: '正在使用'
    },
    ja: {
        home: 'ホーム',
        tours: 'ツアー',
        about: '私たちについて',
        contact: 'お問い合わせ',
        book_now: '今すぐ予約',
        hero_badge: 'ドバイで最も信頼されるツアーオペレーター',
        hero_title: '砂漠が\n生き生きとする場所',
        hero_subtitle: '手作りの砂漠体験、市内観光、UAEの冒険 — サルマン・アリが個人的にガイド',
        hero_explore: 'ツアーを探す',
        hero_whatsapp: 'サルマンにWhatsApp',
        categories_title: 'UAE体験を探る',
        categories_subtitle: '黄金の砂丘から輝く都市のスカイラインまで',
        why_title: 'なぜENTO Tourismを選ぶのか',
        why_subtitle: 'ただのツアーではなく — 永遠の思い出',
        reviews_title: 'お客様の声',
        reviews_subtitle: '本物の旅行者からの本物のレビュー',
        book_title: '体験を予約する',
        book_subtitle: '無料キャンセル · 今すぐ支払い不要 · WhatsApp確認',
        per_person: '一人あたり',
        from: '料金',
        rating: '評価',
        reviews: 'レビュー',
        duration: '所要時間',
        group_size: 'グループサイズ',
        difficulty: 'レベル',
        highlights: 'ツアーのハイライト',
        itinerary: 'あなたの体験',
        included: '含まれるもの',
        excluded: '含まれないもの',
        back: '戻る',
        continue: '続ける',
        confirm: '予約を確認する',
        footer_tagline: 'プレミアム砂漠サファリとUAEツアー',
        all_rights: '無断転載を禁じます',
        step_date: '日付とゲスト',
        step_details: 'あなたの詳細',
        step_pickup: '送迎情報',
        step_confirm: '確認',
        switch_to_english: 'English',
        viewing_in: '表示言語'
    },
    hi: {
        home: 'होम',
        tours: 'टूर',
        about: 'हमारे बारे में',
        contact: 'संपर्क करें',
        book_now: 'अभी बुक करें',
        hero_badge: 'दुबई का सबसे भरोसेमंद टूर ऑपरेटर',
        hero_title: 'जहाँ रेगिस्तान\nजीवंत हो उठता है',
        hero_subtitle: 'हस्तनिर्मित रेगिस्तान अनुभव, शहर के दौरे और UAE के रोमांच — सलमान अली द्वारा निर्देशित',
        hero_explore: 'टूर देखें',
        hero_whatsapp: 'सलमान को WhatsApp करें',
        categories_title: 'UAE अनुभव खोजें',
        categories_subtitle: 'सुनहरे रेत के टीलों से चमकते शहरों तक',
        why_title: 'ENTO Tourism क्यों चुनें',
        why_subtitle: 'सिर्फ एक टूर नहीं — हमेशा के लिए एक यादगार अनुभव',
        reviews_title: 'हमारे मेहमान क्या कहते हैं',
        reviews_subtitle: 'असली यात्रियों की असली समीक्षाएँ',
        book_title: 'अपना अनुभव बुक करें',
        book_subtitle: 'मुफ्त रद्दीकरण · अभी भुगतान नहीं · WhatsApp पुष्टि',
        per_person: 'प्रति व्यक्ति',
        from: 'से',
        rating: 'रेटिंग',
        reviews: 'समीक्षाएँ',
        duration: 'अवधि',
        group_size: 'समूह का आकार',
        difficulty: 'स्तर',
        highlights: 'टूर हाइलाइट्स',
        itinerary: 'आपका अनुभव',
        included: 'शामिल है',
        excluded: 'शामिल नहीं',
        back: 'वापस',
        continue: 'जारी रखें',
        confirm: 'बुकिंग की पुष्टि करें',
        footer_tagline: 'प्रीमियम डेजर्ट सफारी और UAE टूर',
        all_rights: 'सर्वाधिकार सुरक्षित',
        step_date: 'तारीख और मेहमान',
        step_details: 'आपका विवरण',
        step_pickup: 'पिकअप जानकारी',
        step_confirm: 'पुष्टि',
        switch_to_english: 'English',
        viewing_in: 'भाषा'
    },
    ur: {
        home: 'ہوم',
        tours: 'ٹور',
        about: 'ہمارے بارے میں',
        contact: 'رابطہ',
        book_now: 'ابھی بک کریں',
        hero_badge: 'دبئی کا سب سے قابل اعتماد ٹور آپریٹر',
        hero_title: 'جہاں صحرا\nزندہ ہو جاتا ہے',
        hero_subtitle: 'خصوصی صحرائی تجربات، شہر کے دورے اور UAE کے سنسنی خیز مہمات — سلمان علی کی ذاتی رہنمائی میں',
        hero_explore: 'ٹور دیکھیں',
        hero_whatsapp: 'سلمان کو WhatsApp کریں',
        categories_title: 'UAE کے تجربات دریافت کریں',
        categories_subtitle: 'سنہری ریت کے ٹیلوں سے چمکتے شہروں تک',
        why_title: 'ENTO Tourism کیوں چنیں',
        why_subtitle: 'صرف ایک ٹور نہیں — ہمیشہ کے لیے ایک یادگار تجربہ',
        reviews_title: 'ہمارے مہمان کیا کہتے ہیں',
        reviews_subtitle: 'حقیقی مسافروں کے حقیقی جائزے',
        book_title: 'اپنا تجربہ بک کریں',
        book_subtitle: 'مفت منسوخی · ابھی ادائیگی نہیں · WhatsApp تصدیق',
        per_person: 'فی شخص',
        from: 'سے',
        rating: 'ریٹنگ',
        reviews: 'جائزے',
        duration: 'مدت',
        group_size: 'گروپ کا سائز',
        difficulty: 'سطح',
        highlights: 'ٹور کی جھلکیاں',
        itinerary: 'آپ کا تجربہ',
        included: 'شامل ہے',
        excluded: 'شامل نہیں',
        back: 'واپس',
        continue: 'جاری رکھیں',
        confirm: 'بکنگ کی تصدیق',
        footer_tagline: 'پریمیم ڈیزرٹ سفاری اور UAE ٹور',
        all_rights: 'جملہ حقوق محفوظ ہیں',
        step_date: 'تاریخ اور مہمان',
        step_details: 'آپ کی تفصیلات',
        step_pickup: 'پک اپ معلومات',
        step_confirm: 'تصدیق',
        switch_to_english: 'English',
        viewing_in: 'زبان'
    },
    pt: {
        home: 'Início',
        tours: 'Tours',
        about: 'Sobre nós',
        contact: 'Contato',
        book_now: 'Reserve agora',
        hero_badge: 'O operador turístico mais confiável de Dubai',
        hero_title: 'Onde o deserto\nganha vida',
        hero_subtitle: 'Experiências no deserto, city tours e aventuras nos EAU — guiadas pessoalmente por Salman Ali',
        hero_explore: 'Explorar tours',
        hero_whatsapp: 'WhatsApp para Salman',
        categories_title: 'Explore os EAU',
        categories_subtitle: 'Das dunas douradas aos arranha-céus brilhantes',
        why_title: 'Por que escolher ENTO Tourism',
        why_subtitle: 'Não apenas um tour — uma memória para sempre',
        reviews_title: 'O que nossos hóspedes dizem',
        reviews_subtitle: 'Avaliações reais de viajantes reais',
        book_title: 'Reserve sua experiência',
        book_subtitle: 'Cancelamento gratuito · Sem pagamento agora · Confirmação WhatsApp',
        per_person: 'por pessoa',
        from: 'A partir de',
        rating: 'Avaliação',
        reviews: 'avaliações',
        duration: 'Duração',
        group_size: 'Tamanho do grupo',
        difficulty: 'Nível',
        highlights: 'Destaques do tour',
        itinerary: 'Sua experiência',
        included: 'Incluído',
        excluded: 'Não incluído',
        back: 'Voltar',
        continue: 'Continuar',
        confirm: 'Confirmar reserva',
        footer_tagline: 'Safáris premium e tours pelos EAU',
        all_rights: 'Todos os direitos reservados',
        step_date: 'Data e hóspedes',
        step_details: 'Seus detalhes',
        step_pickup: 'Informações de coleta',
        step_confirm: 'Confirmar',
        switch_to_english: 'English',
        viewing_in: 'Visualizando em'
    },
    ko: {
        home: '홈',
        tours: '투어',
        about: '소개',
        contact: '연락처',
        book_now: '지금 예약',
        hero_badge: '두바이에서 가장 신뢰받는 투어 운영사',
        hero_title: '사막이\n살아 숨쉬는 곳',
        hero_subtitle: '정성껏 만든 사막 체험, 도시 투어, UAE 어드벤처 — Salman Ali가 직접 안내',
        hero_explore: '투어 탐색',
        hero_whatsapp: 'Salman에게 WhatsApp',
        categories_title: 'UAE 체험 탐색',
        categories_subtitle: '황금빛 사막 모래언덕부터 빛나는 도시 스카이라인까지',
        why_title: 'ENTO Tourism을 선택하는 이유',
        why_subtitle: '단순한 투어가 아닌 — 영원한 추억',
        reviews_title: '고객 후기',
        reviews_subtitle: '실제 여행자의 진짜 리뷰',
        book_title: '체험 예약하기',
        book_subtitle: '무료 취소 · 지금 결제 불필요 · WhatsApp 확인',
        per_person: '1인당',
        from: '부터',
        rating: '평점',
        reviews: '리뷰',
        duration: '기간',
        group_size: '그룹 크기',
        difficulty: '난이도',
        highlights: '투어 하이라이트',
        itinerary: '나의 체험',
        included: '포함 사항',
        excluded: '미포함 사항',
        back: '뒤로',
        continue: '계속',
        confirm: '예약 확인',
        footer_tagline: '프리미엄 사막 사파리 및 UAE 투어',
        all_rights: '모든 권리 보유',
        step_date: '날짜 및 게스트',
        step_details: '내 정보',
        step_pickup: '픽업 정보',
        step_confirm: '확인',
        switch_to_english: 'English',
        viewing_in: '언어'
    },
    it: {
        home: 'Home',
        tours: 'Tour',
        about: 'Chi siamo',
        contact: 'Contatti',
        book_now: 'Prenota ora',
        hero_badge: "L'operatore turistico più affidabile di Dubai",
        hero_title: 'Dove il deserto\nprende vita',
        hero_subtitle: 'Esperienze nel deserto, tour della città e avventure negli EAU — guidate da Salman Ali',
        hero_explore: 'Esplora i tour',
        hero_whatsapp: 'WhatsApp a Salman',
        categories_title: 'Esplora gli EAU',
        categories_subtitle: 'Dalle dune dorate agli skyline scintillanti',
        why_title: 'Perché scegliere ENTO Tourism',
        why_subtitle: 'Non solo un tour — un ricordo per sempre',
        reviews_title: 'Cosa dicono i nostri ospiti',
        reviews_subtitle: 'Recensioni reali da viaggiatori reali',
        book_title: 'Prenota la tua esperienza',
        book_subtitle: 'Cancellazione gratuita · Nessun pagamento ora · Conferma WhatsApp',
        per_person: 'a persona',
        from: 'Da',
        rating: 'Valutazione',
        reviews: 'recensioni',
        duration: 'Durata',
        group_size: 'Dimensione gruppo',
        difficulty: 'Livello',
        highlights: 'Punti salienti',
        itinerary: 'La tua esperienza',
        included: 'Incluso',
        excluded: 'Non incluso',
        back: 'Indietro',
        continue: 'Continua',
        confirm: 'Conferma prenotazione',
        footer_tagline: 'Safari premium e tour negli EAU',
        all_rights: 'Tutti i diritti riservati',
        step_date: 'Data e ospiti',
        step_details: 'I tuoi dati',
        step_pickup: 'Info ritiro',
        step_confirm: 'Conferma',
        switch_to_english: 'English',
        viewing_in: 'Visualizzando in'
    },
    nl: {
        home: 'Home',
        tours: 'Tours',
        about: 'Over ons',
        contact: 'Contact',
        book_now: 'Nu boeken',
        hero_badge: 'De meest vertrouwde touroperator van Dubai',
        hero_title: 'Waar de woestijn\ntot leven komt',
        hero_subtitle: 'Ambachtelijke woestijnervaringen, stadstours en VAE-avonturen — persoonlijk begeleid door Salman Ali',
        hero_explore: 'Tours bekijken',
        hero_whatsapp: 'WhatsApp Salman',
        categories_title: 'Ontdek de VAE',
        categories_subtitle: 'Van gouden woestijnduinen tot glinsterende stadsskylines',
        why_title: 'Waarom ENTO Tourism kiezen',
        why_subtitle: 'Niet zomaar een tour — een herinnering voor altijd',
        reviews_title: 'Wat onze gasten zeggen',
        reviews_subtitle: 'Echte beoordelingen van echte reizigers',
        book_title: 'Boek uw ervaring',
        book_subtitle: 'Gratis annulering · Nu niet betalen · WhatsApp bevestiging',
        per_person: 'per persoon',
        from: 'Vanaf',
        rating: 'Beoordeling',
        reviews: 'beoordelingen',
        duration: 'Duur',
        group_size: 'Groepsgrootte',
        difficulty: 'Niveau',
        highlights: 'Tour hoogtepunten',
        itinerary: 'Uw ervaring',
        included: 'Inbegrepen',
        excluded: 'Niet inbegrepen',
        back: 'Terug',
        continue: 'Doorgaan',
        confirm: 'Boeking bevestigen',
        footer_tagline: "Premium woestijnsafari's en VAE-tours",
        all_rights: 'Alle rechten voorbehouden',
        step_date: 'Datum & gasten',
        step_details: 'Uw gegevens',
        step_pickup: 'Ophaalinformatie',
        step_confirm: 'Bevestigen',
        switch_to_english: 'English',
        viewing_in: 'Weergeven in'
    },
    tr: {
        home: 'Ana Sayfa',
        tours: 'Turlar',
        about: 'Hakkımızda',
        contact: 'İletişim',
        book_now: 'Hemen Rezervasyon',
        hero_badge: "Dubai'nin En Güvenilir Tur Operatörü",
        hero_title: 'Çölün Canlandığı\nYer',
        hero_subtitle: "El yapımı çöl deneyimleri, şehir turları ve BAE maceraları — Salman Ali tarafından kişisel olarak rehberlik edilir",
        hero_explore: 'Turları Keşfet',
        hero_whatsapp: "Salman'a WhatsApp",
        categories_title: 'BAE Deneyimlerini Keşfet',
        categories_subtitle: 'Altın çöl kumullarından parlayan şehir silüetlerine',
        why_title: 'Neden ENTO Tourism Seçilir',
        why_subtitle: 'Sadece bir tur değil — sonsuza kadar bir anı',
        reviews_title: 'Misafirlerimiz Ne Diyor',
        reviews_subtitle: 'Gerçek gezginlerden gerçek yorumlar',
        book_title: 'Deneyiminizi Rezerve Edin',
        book_subtitle: 'Ücretsiz iptal · Şimdi ödeme yok · WhatsApp onayı',
        per_person: 'kişi başı',
        from: 'Başlangıç',
        rating: 'Puan',
        reviews: 'yorum',
        duration: 'Süre',
        group_size: 'Grup Büyüklüğü',
        difficulty: 'Seviye',
        highlights: 'Tur Öne Çıkanları',
        itinerary: 'Deneyiminiz',
        included: 'Dahil',
        excluded: 'Dahil Değil',
        back: 'Geri',
        continue: 'Devam Et',
        confirm: 'Rezervasyonu Onayla',
        footer_tagline: 'Premium çöl safarileri ve BAE turları',
        all_rights: 'Tüm hakları saklıdır',
        step_date: 'Tarih ve Misafirler',
        step_details: 'Bilgileriniz',
        step_pickup: 'Alım Bilgisi',
        step_confirm: 'Onay',
        switch_to_english: 'English',
        viewing_in: 'Dil'
    }
};
function detectLang() {
    if ("TURBOPACK compile-time truthy", 1) return 'en';
    //TURBOPACK unreachable
    ;
    const saved = undefined;
    const browser = undefined;
}
}),
"[project]/context/LangContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LangProvider",
    ()=>LangProvider,
    "useLang",
    ()=>useLang
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/translations.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const Ctx = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    lang: 'en',
    t: (k)=>k,
    setLang: ()=>{},
    isRTL: false
});
function LangProvider({ children }) {
    const [lang, setLangState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('en');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Detect country via IP then fallback to browser lang
        const saved = localStorage.getItem('ento_lang');
        if (saved && __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["T"][saved]) {
            setLangState(saved);
            return;
        }
        fetch('https://ipapi.co/json/').then((r)=>r.json()).then((data)=>{
            const countryMap = {
                AE: 'ar',
                SA: 'ar',
                EG: 'ar',
                JO: 'ar',
                KW: 'ar',
                BH: 'ar',
                QA: 'ar',
                OM: 'ar',
                LB: 'ar',
                IQ: 'ar',
                MA: 'ar',
                DZ: 'ar',
                TN: 'ar',
                LY: 'ar',
                YE: 'ar',
                RU: 'ru',
                BY: 'ru',
                KZ: 'ru',
                UA: 'ru',
                DE: 'de',
                AT: 'de',
                FR: 'fr',
                BE: 'fr',
                ES: 'es',
                MX: 'es',
                AR: 'es',
                CO: 'es',
                CL: 'es',
                PE: 'es',
                CN: 'zh',
                TW: 'zh',
                HK: 'zh',
                SG: 'zh',
                JP: 'ja',
                IN: 'hi',
                PK: 'ur',
                BR: 'pt',
                PT: 'pt',
                KR: 'ko',
                IT: 'it',
                NL: 'nl',
                TR: 'tr'
            };
            const detected = countryMap[data.country_code];
            if (detected) setLangState(detected);
            else {
                const browser = navigator.language?.split('-')[0];
                if (browser && __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["T"][browser]) setLangState(browser);
            }
        }).catch(()=>{
            const browser = navigator.language?.split('-')[0];
            if (browser && __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["T"][browser]) setLangState(browser);
        });
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.documentElement.lang = lang;
        document.documentElement.dir = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LANGUAGES"][lang]?.dir === 'rtl' ? 'rtl' : 'ltr';
    }, [
        lang
    ]);
    const setLang = (l)=>{
        setLangState(l);
        localStorage.setItem('ento_lang', l);
    };
    const t = (k)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["T"][lang]?.[k] || __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["T"]['en']?.[k] || k;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Ctx.Provider, {
        value: {
            lang,
            t,
            setLang,
            isRTL: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LANGUAGES"][lang]?.dir === 'rtl'
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/context/LangContext.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
const useLang = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(Ctx);
}),
"[project]/components/layout/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$tours$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/tours.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$LangContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/LangContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/translations.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function Navbar() {
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [langOpen, setLangOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { lang, setLang, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$LangContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLang"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fn = ()=>setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', fn);
        return ()=>window.removeEventListener('scroll', fn);
    }, []);
    const links = [
        [
            '/',
            'home',
            t('home')
        ],
        [
            '/tours',
            'tours',
            t('tours')
        ],
        [
            '/blog',
            'blog',
            'Blog'
        ],
        [
            '/about',
            'about',
            t('about')
        ]
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            lang !== 'en' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-0 left-0 right-0 z-[60] bg-[#C9953A] text-white text-center text-xs py-1.5 flex items-center justify-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "opacity-75",
                        children: [
                            t('viewing_in'),
                            " ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LANGUAGES"][lang].flag,
                            " ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LANGUAGES"][lang].name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/Navbar.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setLang('en'),
                        className: "bg-white text-[#C9953A] font-bold px-3 py-0.5 rounded-full text-xs hover:bg-[#FAF5EC] transition-colors",
                        children: "🇬🇧 Switch to English"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Navbar.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Navbar.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `fixed left-0 right-0 z-50 transition-all duration-500 ${lang !== 'en' ? 'top-8' : 'top-0'} ${scrolled ? 'bg-[#FAF5EC]/95 backdrop-blur-xl shadow-sm py-3' : 'bg-transparent py-5'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-5 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-full bg-gradient-to-br from-[#C9953A] to-[#B84420] flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white font-bold text-sm",
                                            style: {
                                                fontFamily: 'serif'
                                            },
                                            children: "E"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Navbar.tsx",
                                            lineNumber: 46,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Navbar.tsx",
                                        lineNumber: 45,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-lg transition-colors duration-300",
                                        style: {
                                            fontFamily: 'var(--font-playfair,serif)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "gold-text",
                                                children: "ENTO"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Navbar.tsx",
                                                lineNumber: 49,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: scrolled ? 'text-[#1A1208]' : 'text-white',
                                                children: " Tourism"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Navbar.tsx",
                                                lineNumber: 50,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/layout/Navbar.tsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Navbar.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex items-center gap-7",
                                children: links.map(([href, , label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: href,
                                        className: `text-xs font-medium tracking-widest uppercase transition-colors hover:text-[#C9953A] ${scrolled ? 'text-[#1A1208]/60' : 'text-white/70'}`,
                                        children: label
                                    }, href, false, {
                                        fileName: "[project]/components/layout/Navbar.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Navbar.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setLangOpen(!langOpen),
                                                className: `flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-all ${scrolled ? 'border-[#1A1208]/15 text-[#1A1208]/60 hover:border-[#C9953A]/40' : 'border-white/20 text-white/70 hover:border-white/40'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LANGUAGES"][lang].flag
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/Navbar.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LANGUAGES"][lang].name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/Navbar.tsx",
                                                        lineNumber: 70,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "opacity-50 text-[10px]",
                                                        children: "▾"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/Navbar.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/layout/Navbar.tsx",
                                                lineNumber: 67,
                                                columnNumber: 15
                                            }, this),
                                            langOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "fixed inset-0 z-40",
                                                        onClick: ()=>setLangOpen(false)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/Navbar.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute right-0 top-full mt-2 w-44 bg-[#080C16] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "px-3 py-2 border-b border-white/08",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-white/30 text-[10px] uppercase tracking-widest",
                                                                    children: "Language"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layout/Navbar.tsx",
                                                                    lineNumber: 79,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/layout/Navbar.tsx",
                                                                lineNumber: 78,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "max-h-72 overflow-y-auto py-1",
                                                                children: Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LANGUAGES"]).map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>{
                                                                            setLang(l);
                                                                            setLangOpen(false);
                                                                        },
                                                                        className: `w-full flex items-center gap-2.5 px-3 py-2.5 text-sm transition-colors text-left ${l === lang ? 'bg-[#C9953A]/15 text-[#C9953A]' : 'text-white/60 hover:bg-white/05 hover:text-white'}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-base",
                                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LANGUAGES"][l].flag
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layout/Navbar.tsx",
                                                                                lineNumber: 85,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LANGUAGES"][l].name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layout/Navbar.tsx",
                                                                                lineNumber: 86,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            l === lang && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "ml-auto text-xs",
                                                                                children: "✓"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layout/Navbar.tsx",
                                                                                lineNumber: 87,
                                                                                columnNumber: 42
                                                                            }, this)
                                                                        ]
                                                                    }, l, true, {
                                                                        fileName: "[project]/components/layout/Navbar.tsx",
                                                                        lineNumber: 83,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/layout/Navbar.tsx",
                                                                lineNumber: 81,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/layout/Navbar.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/layout/Navbar.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `https://wa.me/${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$tours$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WHATSAPP"]}`,
                                        target: "_blank",
                                        rel: "noopener",
                                        className: `flex items-center gap-2 text-xs font-medium transition-colors hover:text-[#25D366] ${scrolled ? 'text-[#1A1208]/50' : 'text-white/60'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 rounded-full bg-[#25D366] wa-pulse inline-block"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Navbar.tsx",
                                                lineNumber: 98,
                                                columnNumber: 15
                                            }, this),
                                            "WhatsApp"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/layout/Navbar.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/tours",
                                        className: "bg-gradient-to-r from-[#C9953A] to-[#B84420] text-white text-xs font-semibold tracking-wider uppercase px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-[#C9953A]/30 hover:-translate-y-0.5 transition-all duration-200",
                                        children: t('book_now')
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Navbar.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Navbar.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setOpen(!open),
                                className: `md:hidden p-2 text-xl ${scrolled ? 'text-[#1A1208]' : 'text-white'}`,
                                children: open ? '✕' : '☰'
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Navbar.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/Navbar.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden bg-[#FAF5EC] border-t border-[#1A1208]/08 px-5 py-4 flex flex-col gap-4",
                        children: [
                            links.map(([href, , label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: href,
                                    onClick: ()=>setOpen(false),
                                    className: "text-sm font-medium text-[#1A1208]/70 hover:text-[#C9953A] uppercase tracking-wide",
                                    children: label
                                }, href, false, {
                                    fileName: "[project]/components/layout/Navbar.tsx",
                                    lineNumber: 116,
                                    columnNumber: 15
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[#1A1208]/40 text-xs uppercase tracking-widest mb-2",
                                        children: "Language"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Navbar.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-4 gap-2",
                                        children: Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LANGUAGES"]).map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setLang(l);
                                                    setOpen(false);
                                                },
                                                className: `flex flex-col items-center gap-0.5 py-2 rounded-xl text-xs transition-all ${l === lang ? 'bg-[#C9953A]/10 text-[#C9953A] font-semibold' : 'text-[#1A1208]/50 hover:bg-[#1A1208]/05'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-lg",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LANGUAGES"][l].flag
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/Navbar.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px]",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LANGUAGES"][l].name.slice(0, 6)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/Navbar.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, l, true, {
                                                fileName: "[project]/components/layout/Navbar.tsx",
                                                lineNumber: 126,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Navbar.tsx",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Navbar.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this),
                            lang !== 'en' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setLang('en');
                                    setOpen(false);
                                },
                                className: "bg-[#C9953A] text-white text-sm font-bold px-5 py-3 rounded-full text-center",
                                children: "🇬🇧 Switch to English"
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Navbar.tsx",
                                lineNumber: 136,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `https://wa.me/${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$tours$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WHATSAPP"]}`,
                                target: "_blank",
                                rel: "noopener",
                                className: "bg-[#25D366] text-white text-sm font-semibold px-5 py-3 rounded-full text-center",
                                children: "💬 WhatsApp Us"
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Navbar.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/Navbar.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Navbar.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__92687483._.js.map