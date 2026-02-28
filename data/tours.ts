export const WHATSAPP = '+971544735060'
export const COMPANY = 'ENTO Tourism'
export const OWNER = 'Salman Ali'

export interface SubTour {
  slug: string; name: string; tagline: string; duration: string
  groupSize: string; difficulty: string; price: number; rating: number
  reviews: number; badge?: string; emoji: string
  highlights: string[]; includes: string[]; excludes: string[]
  itinerary: { time: string; title: string; desc: string }[]
  safetyTips: string[]
}

export interface TourCategory {
  slug: string; name: string; tagline: string; description: string
  heroEmoji: string; subTours: SubTour[]
}

export const tourCategories: TourCategory[] = [
  {
    slug: 'desert-safari',
    name: 'Desert Safari',
    tagline: 'Where the Desert Comes Alive',
    description: 'Experience the magic of the Arabian desert — from heart-pounding dune bashing to peaceful starlit camps. Six different desert adventures, each crafted for a different kind of traveller.',
    heroEmoji: '🏜️',
    subTours: [
      {
        slug: 'evening-safari', name: 'Evening Desert Safari', emoji: '🌅',
        tagline: 'The classic Dubai desert experience — sunset, stars, and a Bedouin feast',
        duration: '6 Hours', groupSize: 'Up to 40', difficulty: 'Easy',
        price: 45, rating: 4.9, reviews: 3847, badge: 'Most Popular',
        highlights: ['Dune bashing in a 4x4','Camel riding at dusk','Sandboarding','Live Tanoura show','BBQ buffet dinner','Stargazing'],
        includes: ['Hotel pickup & drop-off','Dune bashing (30 min)','Camel ride','Sandboarding','Welcome drinks','Arabic coffee & dates','BBQ dinner','Live entertainment','Henna art'],
        excludes: ['Alcoholic beverages','Personal shopping','Travel insurance','Gratuities'],
        itinerary: [
          { time:'3:00 PM', title:'Hotel Pickup', desc:'Your private 4x4 arrives at your hotel lobby. We drive 45 minutes into the heart of the Dubai desert.' },
          { time:'4:00 PM', title:'Dune Bashing', desc:'Hold tight — your expert driver takes you over towering golden dunes at exhilarating angles. 30 minutes of pure adrenaline.' },
          { time:'5:00 PM', title:'Sunset Activities', desc:'Try sandboarding down the dunes. Mount a camel for photos against the golden sky. Watch the desert turn orange.' },
          { time:'6:00 PM', title:'Arrive at Camp', desc:'A traditional Bedouin camp awaits — lanterns, rugs, Arabic coffee, dates, and the scent of oud in the air.' },
          { time:'7:00 PM', title:'Dinner & Show', desc:'A lavish BBQ spread with grilled meats, mezze, and fresh salads. Watch the spinning Tanoura dancer and fire performers.' },
          { time:'9:00 PM', title:'Return to Hotel', desc:'Relaxed and full, your driver takes you back. The Milky Way follows you the whole way home.' },
        ],
        safetyTips: ['Wear seatbelt at all times during dune bashing','Take motion sickness tablet 30 min before if prone to nausea','Wear closed shoes — sandals sink in soft sand','Stay hydrated — carry extra water','Pregnant women & heart conditions should skip dune bashing','Keep children seated during bashing'],
      },
      {
        slug: 'private-safari', name: 'Private Desert Safari', emoji: '👑',
        tagline: 'The desert, entirely yours — exclusive jeep, private camp, personal guide',
        duration: '6 Hours', groupSize: '2–8 People', difficulty: 'Easy',
        price: 149, rating: 5.0, reviews: 892, badge: 'Premium',
        highlights: ['Private 4x4 just for your group','Exclusive camp setup','Personal Bedouin guide','Customisable menu','Photographer included','Stargazing with telescope'],
        includes: ['Private Land Cruiser','Dedicated guide','Private camp area','Customisable BBQ menu','Soft drinks','Camel ride','Sandboarding','Professional photographer'],
        excludes: ['Alcoholic beverages','Gratuities','Personal expenses'],
        itinerary: [
          { time:'3:00 PM', title:'Exclusive Pickup', desc:'A premium Land Cruiser arrives just for your group. Your personal guide greets you by name.' },
          { time:'4:00 PM', title:'Private Dune Bashing', desc:'No waiting, no sharing. Your driver takes you on a personalised route at whatever intensity you prefer.' },
          { time:'5:00 PM', title:'Golden Hour', desc:'Sandboarding, camel ride, and time to photograph freely without crowds.' },
          { time:'6:00 PM', title:'Private Camp', desc:'Your own exclusive section of the Bedouin camp, decorated for special occasions if needed.' },
          { time:'7:00 PM', title:'Private Dinner', desc:'Your menu choices served at your own table. No sharing with strangers tonight.' },
          { time:'9:00 PM', title:'Stargazing & Return', desc:'Your guide points out constellations before your private drop-off.' },
        ],
        safetyTips: ['Seatbelts mandatory during dune bashing','Inform guide of any medical conditions in advance','Sun protection essential in summer','Notify us of dietary restrictions before the trip'],
      },
      {
        slug: 'overnight-safari', name: 'Overnight Desert Safari', emoji: '🌙',
        tagline: 'Sleep under a billion stars in a luxury Bedouin tent',
        duration: '16 Hours', groupSize: 'Up to 20', difficulty: 'Easy',
        price: 189, rating: 4.8, reviews: 541, badge: 'Unique Experience',
        highlights: ['Luxury tent accommodation','Midnight stargazing','Desert sunrise breakfast','Morning camel trek','Full evening programme','Breakfast in the dunes'],
        includes: ['Hotel pickup & return next morning','Dune bashing','Camel ride','Full BBQ dinner','Overnight luxury tent','Bedding & towels','Morning breakfast'],
        excludes: ['Alcohol','Personal toiletries','Travel insurance'],
        itinerary: [
          { time:'3:00 PM', title:'Afternoon Pickup', desc:'Depart hotel for the desert with your luggage for the overnight stay.' },
          { time:'4–6 PM', title:'Evening Programme', desc:'Full evening safari — dune bashing, sunset activities, camp arrival.' },
          { time:'7–10 PM', title:'Dinner & Entertainment', desc:'BBQ feast, live shows, bonfire, and Arabic coffee under the stars.' },
          { time:'10:00 PM', title:'Stargazing', desc:'Your guide leads a dedicated stargazing session. The Milky Way is extraordinary here.' },
          { time:'11:00 PM', title:'Retire to Your Tent', desc:'Air-cooled luxury Bedouin tent with proper beds, lighting, and privacy.' },
          { time:'5:30 AM', title:'Desert Sunrise', desc:'Wake for the sunrise — a moment you will never forget.' },
          { time:'7:00 AM', title:'Morning Activities', desc:'Morning camel trek through quiet dunes. Hot breakfast at the camp.' },
          { time:'9:00 AM', title:'Return to Hotel', desc:'Relaxed morning drive back in time for a rest.' },
        ],
        safetyTips: ['Bring warm layers — desert nights drop to 15°C in winter','Fully charged phone before departure','Do not wander alone from the camp at night','Inform staff of any allergies or medical needs'],
      },
      {
        slug: 'morning-safari', name: 'Morning Desert Safari', emoji: '🌄',
        tagline: 'The desert before the heat — cooler, quieter, and utterly magical',
        duration: '4 Hours', groupSize: 'Up to 30', difficulty: 'Easy',
        price: 55, rating: 4.7, reviews: 672,
        highlights: ['Cooler morning temperatures','Quieter dunes','Dune bashing','Sandboarding','Camel ride','Light breakfast at camp'],
        includes: ['Hotel pickup','Dune bashing','Sandboarding','Camel ride','Arabic tea & dates','Light breakfast','Hotel drop-off'],
        excludes: ['Lunch','Alcoholic beverages','Gratuities'],
        itinerary: [
          { time:'5:30 AM', title:'Early Pickup', desc:'Your 4x4 collects you as the city is still sleeping.' },
          { time:'6:30 AM', title:'Sunrise Dune Bashing', desc:'The desert is quieter and cooler. Soft morning light turns every dune gold.' },
          { time:'7:30 AM', title:'Activities', desc:'Sandboarding, camel ride, and photography in the best light of the day.' },
          { time:'8:30 AM', title:'Camp Breakfast', desc:'Arabic tea, fresh bread, eggs, hummus, and dates.' },
          { time:'9:30 AM', title:'Return', desc:'Drop-off at your hotel or any central Dubai location.' },
        ],
        safetyTips: ['Bring a light jacket — mornings can be cool','Sunscreen after 7AM as sun rises quickly','Seatbelt on during all dune bashing'],
      },
      {
        slug: 'buggy-safari', name: 'Dune Buggy Safari', emoji: '🏎️',
        tagline: 'Take the wheel yourself — drive your own buggy through the golden dunes',
        duration: '3 Hours', groupSize: '2–12', difficulty: 'Moderate',
        price: 120, rating: 4.9, reviews: 1103, badge: 'Adrenaline',
        highlights: ['Drive your own dune buggy','1000cc automatic','No experience needed','Safety briefing + guided trail','GoPro option','Desert photography stop'],
        includes: ['Safety helmet & goggles','Dune buggy (2-seater)','Guided buggy trail','Briefing & training','Bottled water','Desert photography stop'],
        excludes: ['Under 16 not permitted to drive','Travel insurance','Gratuities'],
        itinerary: [
          { time:'Arrival', title:'Safety Briefing', desc:'Full briefing on controls, safety rules, and trail etiquette. 15 minutes.' },
          { time:'+15 min', title:'Practice Loop', desc:'A flat practice area to get comfortable with the buggy controls.' },
          { time:'+30 min', title:'Guided Dune Trail', desc:'Follow your guide across a marked route through real dunes.' },
          { time:'+90 min', title:'Desert Stop', desc:'Engines off. Silence. Photos. Water. The desert looks different from something you drove yourself.' },
          { time:'+120 min', title:'Return Lap', desc:'Back to base at your own pace.' },
        ],
        safetyTips: ['Minimum age 16 to drive, 5 to ride as passenger','Closed shoes mandatory — no sandals','Goggles must be worn at all times on the trail','Pregnant women cannot participate'],
      },
      {
        slug: 'quad-safari', name: 'Quad Bike Safari', emoji: '🏍️',
        tagline: 'Single-track freedom — you, a quad, and the open desert',
        duration: '1–2 Hours', groupSize: 'Any Size', difficulty: 'Moderate',
        price: 75, rating: 4.8, reviews: 2104,
        highlights: ['Automatic 250cc quad bikes','30 or 60 minute options','Guided trail','All safety gear included','Can combine with evening safari'],
        includes: ['Quad bike','Safety helmet','Guided trail','Briefing','Water'],
        excludes: ['Under 16 cannot ride solo','Travel insurance','Gratuities'],
        itinerary: [
          { time:'Arrival', title:'Gear Up & Briefing', desc:'Helmet fitted, controls explained. Takes 10 minutes.' },
          { time:'+10 min', title:'Guided Quad Trail', desc:'Follow your guide into the dunes. Flat sections first, then real climbing.' },
          { time:'Mid-ride', title:'Desert Viewpoint Stop', desc:'Stop at a high dune for photos and to catch your breath.' },
          { time:'End', title:'Return', desc:'If combining with the evening safari, continue straight to the camp.' },
        ],
        safetyTips: ['Minimum age 16 to ride solo, 5 as passenger','Helmet compulsory — no exceptions','Keep safe distance from the guide vehicle','Inform staff of any physical limitations'],
      },
    ],
  },
]
