"use client";
import { useEffect, useRef, useState, useMemo } from "react";

const PRODUCTS_PER_PAGE = 8;

const categories = [
  { id: "all", label: "All", emoji: "🌟" },
  { id: "drinks", label: "Drinks", emoji: "🥤" },
  { id: "snacks", label: "Snacks", emoji: "🍿" },
  { id: "icecream", label: "Ice Cream", emoji: "🍦" },
  { id: "grocery", label: "Grocery", emoji: "🛒" },
];

const ALL_PRODUCTS = [
  // ── DRINKS (20) ──────────────────────────────────────────────────────────
  {
    id: 1,
    name: "Coca-Cola 500ml",
    cat: "drinks",
    emoji: "🥤",
    desc: "Classic ice-cold Coca-Cola in 500ml bottle",
    price: "Rs. 70",
    tag: "Best Seller",
    color: "from-red-500 to-red-700",
    img: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&q=80",
  },
  {
    id: 2,
    name: "Pepsi 1.5L",
    cat: "drinks",
    emoji: "🫙",
    desc: "Large Pepsi bottle perfect for the whole family",
    price: "Rs. 130",
    tag: "Family Pack",
    color: "from-blue-600 to-blue-900",
    img: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&q=80",
  },
  {
    id: 3,
    name: "Sprite 250ml",
    cat: "drinks",
    emoji: "🍋",
    desc: "Crystal clear lemon-lime refreshment",
    price: "Rs. 50",
    tag: "Refreshing",
    color: "from-green-400 to-green-700",
    img: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=400&q=80",
  },
  {
    id: 4,
    name: "Mountain Dew",
    cat: "drinks",
    emoji: "💚",
    desc: "Neon green energy in a chilled bottle",
    price: "Rs. 70",
    tag: "Energy",
    color: "from-lime-400 to-green-600",
    img: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&q=80",
  },
  {
    id: 5,
    name: "Fanta Orange",
    cat: "drinks",
    emoji: "🍊",
    desc: "Juicy orange flavour fizzy drink",
    price: "Rs. 60",
    tag: "Fruity",
    color: "from-orange-400 to-orange-600",
    img: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=400&q=80",
  },
  {
    id: 6,
    name: "Mirinda Fruit Punch",
    cat: "drinks",
    emoji: "🍹",
    desc: "Tropical fruit punch in chilled bottle",
    price: "Rs. 60",
    tag: "Tropical",
    color: "from-purple-400 to-purple-700",
    img: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=400&q=80",
  },
  {
    id: 7,
    name: "Nestle Pure Life 1.5L",
    cat: "drinks",
    emoji: "💧",
    desc: "Pure mineral water for the whole family",
    price: "Rs. 80",
    tag: "Healthy",
    color: "from-sky-400 to-sky-600",
    img: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&q=80",
  },
  {
    id: 8,
    name: "Sting Energy Drink",
    cat: "drinks",
    emoji: "⚡",
    desc: "Red berry energy drink – full power",
    price: "Rs. 100",
    tag: "Energy",
    color: "from-red-400 to-pink-600",
    img: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=400&q=80",
  },
  {
    id: 9,
    name: "Rooh Afza Sherbet",
    cat: "drinks",
    emoji: "🌸",
    desc: "Traditional rose sherbet concentrate",
    price: "Rs. 350",
    tag: "Traditional",
    color: "from-pink-500 to-rose-700",
    img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&q=80",
  },
  {
    id: 10,
    name: "Nescafe 3-in-1",
    cat: "drinks",
    emoji: "☕",
    desc: "Instant coffee sachets – ready in seconds",
    price: "Rs. 30",
    tag: "Coffee",
    color: "from-amber-700 to-amber-900",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80",
  },
  {
    id: 11,
    name: "Lipton Yellow Label",
    cat: "drinks",
    emoji: "🍵",
    desc: "Pakistan's favourite tea bags pack of 100",
    price: "Rs. 680",
    tag: "Tea",
    color: "from-yellow-600 to-yellow-800",
    img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80",
  },
  {
    id: 12,
    name: "7UP",
    cat: "drinks",
    emoji: "🫧",
    desc: "Crisp & clean lemon-lime soda",
    price: "Rs. 60",
    tag: "Classic",
    color: "from-green-300 to-green-500",
    img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400&q=80",
  },
  {
    id: 13,
    name: "Coca-Cola Zero",
    cat: "drinks",
    emoji: "⚫",
    desc: "Zero sugar – same great Coca-Cola taste",
    price: "Rs. 80",
    tag: "Zero Sugar",
    color: "from-gray-700 to-gray-900",
    img: "https://images.unsplash.com/photo-1561758033-7e924f619b47?w=400&q=80",
  },
  {
    id: 14,
    name: "Pepsi Max",
    cat: "drinks",
    emoji: "💙",
    desc: "Maximum taste, zero sugar Pepsi",
    price: "Rs. 80",
    tag: "No Sugar",
    color: "from-blue-700 to-indigo-900",
    img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80",
  },
  {
    id: 15,
    name: "Tang Mango Sachet",
    cat: "drinks",
    emoji: "🥭",
    desc: "Mango flavoured instant drink mix",
    price: "Rs. 20",
    tag: "Mango",
    color: "from-yellow-400 to-orange-500",
    img: "https://images.unsplash.com/photo-1546173159-315724a31696?w=400&q=80",
  },
  {
    id: 16,
    name: "Dew Black Currant",
    cat: "drinks",
    emoji: "🍇",
    desc: "Dark grape flavour Mountain Dew variant",
    price: "Rs. 70",
    tag: "New Flavor",
    color: "from-purple-600 to-purple-900",
    img: "https://images.unsplash.com/photo-1503431128871-cd250803fa41?w=400&q=80",
  },
  {
    id: 17,
    name: "Pepsi 250ml Can",
    cat: "drinks",
    emoji: "🥫",
    desc: "Chilled Pepsi can – perfect on the go",
    price: "Rs. 90",
    tag: "Can",
    color: "from-blue-500 to-blue-800",
    img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&q=80",
  },
  {
    id: 18,
    name: "Nestle Fruita Vitals",
    cat: "drinks",
    emoji: "🍑",
    desc: "Real fruit nectar – mango, guava & mixed",
    price: "Rs. 60",
    tag: "Fruit Juice",
    color: "from-orange-300 to-orange-600",
    img: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&q=80",
  },
  {
    id: 19,
    name: "Coca-Cola 1.5L",
    cat: "drinks",
    emoji: "🍾",
    desc: "Giant Coke bottle for parties & family",
    price: "Rs. 150",
    tag: "Party Size",
    color: "from-red-600 to-red-800",
    img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80",
  },
  {
    id: 20,
    name: "Gourmet Lassi",
    cat: "drinks",
    emoji: "🥛",
    desc: "Sweet chilled lassi – pure dairy refreshment",
    price: "Rs. 80",
    tag: "Desi Drink",
    color: "from-yellow-200 to-amber-400",
    img: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=400&q=80",
  },

  // ── SNACKS (20) ──────────────────────────────────────────────────────────
  {
    id: 21,
    name: "Lays Classic",
    cat: "snacks",
    emoji: "🍟",
    desc: "Original salted Lays crisps – always crunchy",
    price: "Rs. 30",
    tag: "Classic",
    color: "from-yellow-400 to-yellow-600",
    img: "https://images.unsplash.com/photo-1621447504864-d8686e12698c?w=400&q=80",
  },
  {
    id: 22,
    name: "Kurkure Masala Munch",
    cat: "snacks",
    emoji: "🌶",
    desc: "Spicy crunchy corn puffs for the whole family",
    price: "Rs. 30",
    tag: "Spicy 🌶",
    color: "from-orange-500 to-red-600",
    img: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=400&q=80",
  },
  {
    id: 23,
    name: "Bisconni Chocolate",
    cat: "snacks",
    emoji: "🍫",
    desc: "Rich chocolate cream biscuits – kids love them",
    price: "Rs. 50",
    tag: "Sweet",
    color: "from-amber-700 to-amber-900",
    img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&q=80",
  },
  {
    id: 24,
    name: "Peek Freans Sooper",
    cat: "snacks",
    emoji: "🍪",
    desc: "Iconic plain biscuits great with tea",
    price: "Rs. 40",
    tag: "Tea Time",
    color: "from-stone-400 to-stone-600",
    img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&q=80",
  },
  {
    id: 25,
    name: "Lays Max Masala",
    cat: "snacks",
    emoji: "🌶",
    desc: "Extra spicy Lays chips with intense masala",
    price: "Rs. 50",
    tag: "Extra Spicy",
    color: "from-red-500 to-red-700",
    img: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&q=80",
  },
  {
    id: 26,
    name: "Nimko Mix",
    cat: "snacks",
    emoji: "🥜",
    desc: "Traditional spicy nimko – perfect evening snack",
    price: "Rs. 60",
    tag: "Traditional",
    color: "from-yellow-500 to-amber-700",
    img: "https://images.unsplash.com/photo-1608500218890-c4d42da1c626?w=400&q=80",
  },
  {
    id: 27,
    name: "Pringles Original",
    cat: "snacks",
    emoji: "🥫",
    desc: "Imported Pringles stacked crisps in a can",
    price: "Rs. 400",
    tag: "Premium",
    color: "from-red-400 to-red-700",
    img: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400&q=80",
  },
  {
    id: 28,
    name: "Cheeto Puffs",
    cat: "snacks",
    emoji: "🧡",
    desc: "Puffy cheesy corn snacks – kids go crazy for these",
    price: "Rs. 40",
    tag: "Cheesy",
    color: "from-orange-400 to-orange-600",
    img: "https://images.unsplash.com/photo-1614886137799-4a57d4f0c28e?w=400&q=80",
  },
  {
    id: 29,
    name: "Rio Biscuits",
    cat: "snacks",
    emoji: "🟤",
    desc: "Chocolate filled sandwich biscuits",
    price: "Rs. 30",
    tag: "Filled",
    color: "from-brown-500 to-amber-800",
    img: "https://images.unsplash.com/photo-1523637051780-1c4f6b19b252?w=400&q=80",
  },
  {
    id: 30,
    name: "Peanuts Pack",
    cat: "snacks",
    emoji: "🥜",
    desc: "Roasted salted peanuts in resealable pack",
    price: "Rs. 50",
    tag: "Healthy",
    color: "from-amber-500 to-amber-700",
    img: "https://images.unsplash.com/photo-1567177128219-a4efc0b2aebc?w=400&q=80",
  },
  {
    id: 31,
    name: "Digestive Biscuits",
    cat: "snacks",
    emoji: "🌾",
    desc: "Whole wheat digestive biscuits – healthy choice",
    price: "Rs. 80",
    tag: "Healthy",
    color: "from-stone-300 to-stone-500",
    img: "https://images.unsplash.com/photo-1590080874088-eec64895b423?w=400&q=80",
  },
  {
    id: 32,
    name: "Potato Twisties",
    cat: "snacks",
    emoji: "🌀",
    desc: "Twisted potato crisps with zingy seasoning",
    price: "Rs. 30",
    tag: "Crunchy",
    color: "from-yellow-300 to-yellow-500",
    img: "https://images.unsplash.com/photo-1573246123716-6b1782bfc499?w=400&q=80",
  },
  {
    id: 33,
    name: "Candies Mix Bag",
    cat: "snacks",
    emoji: "🍬",
    desc: "Assorted candy bag – Mentos, Polo & more",
    price: "Rs. 30",
    tag: "Sweet",
    color: "from-pink-400 to-pink-600",
    img: "https://images.unsplash.com/photo-1582058091218-3e06f3cbb7cb?w=400&q=80",
  },
  {
    id: 34,
    name: "Chocolairs",
    cat: "snacks",
    emoji: "🍭",
    desc: "Toffee chocolate chews – kids favourite",
    price: "Rs. 5",
    tag: "Toffee",
    color: "from-amber-600 to-brown-700",
    img: "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=400&q=80",
  },
  {
    id: 35,
    name: "Lemon Wafers",
    cat: "snacks",
    emoji: "🍋",
    desc: "Crispy lemon cream wafer biscuits",
    price: "Rs. 40",
    tag: "Wafers",
    color: "from-yellow-300 to-lime-400",
    img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&q=80",
  },
  {
    id: 36,
    name: "Jeera Biscuits",
    cat: "snacks",
    emoji: "🫘",
    desc: "Cumin-flavoured tea biscuits – desi classic",
    price: "Rs. 50",
    tag: "Desi Taste",
    color: "from-stone-400 to-amber-600",
    img: "https://images.unsplash.com/photo-1611292276823-b1ed9d2bd96b?w=400&q=80",
  },
  {
    id: 37,
    name: "Slanty Corn Crisps",
    cat: "snacks",
    emoji: "🌽",
    desc: "Angled corn crisps with tangy masala coating",
    price: "Rs. 20",
    tag: "Tangy",
    color: "from-yellow-400 to-orange-500",
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&q=80",
  },
  {
    id: 38,
    name: "Meezan Daal Nimko",
    cat: "snacks",
    emoji: "🫛",
    desc: "Crispy lentil nimko – great for tea time",
    price: "Rs. 80",
    tag: "Desi",
    color: "from-orange-300 to-amber-500",
    img: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&q=80",
  },
  {
    id: 39,
    name: "Gummy Bears",
    cat: "snacks",
    emoji: "🐻",
    desc: "Colourful gummy bears – sweet & chewy",
    price: "Rs. 60",
    tag: "Kids Fav",
    color: "from-pink-300 to-red-400",
    img: "https://images.unsplash.com/photo-1551196798-a38b5b90d4b6?w=400&q=80",
  },
  {
    id: 40,
    name: "Salt n Pepper Cashews",
    cat: "snacks",
    emoji: "🔩",
    desc: "Premium roasted cashews with sea salt & pepper",
    price: "Rs. 200",
    tag: "Premium",
    color: "from-amber-400 to-amber-600",
    img: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=400&q=80",
  },

  // ── ICE CREAM (20) ───────────────────────────────────────────────────────
  {
    id: 41,
    name: "Omore Vanilla Cup",
    cat: "icecream",
    emoji: "🍦",
    desc: "Classic creamy vanilla ice cream in a cup",
    price: "Rs. 60",
    tag: "Classic",
    color: "from-yellow-200 to-yellow-400",
    img: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&q=80",
  },
  {
    id: 42,
    name: "Walls Cornetto",
    cat: "icecream",
    emoji: "🍨",
    desc: "Chocolate filled wafer cone with vanilla ice cream",
    price: "Rs. 120",
    tag: "Best Seller",
    color: "from-orange-400 to-orange-600",
    img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80",
  },
  {
    id: 43,
    name: "Omore Mango Bar",
    cat: "icecream",
    emoji: "🥭",
    desc: "Tropical mango flavour ice cream on a stick",
    price: "Rs. 50",
    tag: "Mango",
    color: "from-yellow-400 to-orange-500",
    img: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&q=80",
  },
  {
    id: 44,
    name: "Walls Paddle Pop",
    cat: "icecream",
    emoji: "🌈",
    desc: "Rainbow stripe kids ice cream lolly",
    price: "Rs. 40",
    tag: "Kids Fav",
    color: "from-pink-400 to-purple-500",
    img: "https://images.unsplash.com/photo-1567206563114-c179706cce34?w=400&q=80",
  },
  {
    id: 45,
    name: "Omore Chocolate Fudge",
    cat: "icecream",
    emoji: "🍫",
    desc: "Rich dark chocolate fudge ice cream bar",
    price: "Rs. 70",
    tag: "Chocolate",
    color: "from-amber-800 to-stone-900",
    img: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&q=80",
  },
  {
    id: 46,
    name: "Omore Family Pack 1L",
    cat: "icecream",
    emoji: "🫙",
    desc: "1 litre family tub – vanilla & strawberry swirl",
    price: "Rs. 400",
    tag: "Family Size",
    color: "from-pink-300 to-rose-500",
    img: "https://images.unsplash.com/photo-1581666399663-f98a1e50abf3?w=400&q=80",
  },
  {
    id: 47,
    name: "Walls Feast",
    cat: "icecream",
    emoji: "🍫",
    desc: "Chocolate dipped vanilla bar with crunch layer",
    price: "Rs. 90",
    tag: "Premium",
    color: "from-stone-700 to-stone-900",
    img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&q=80",
  },
  {
    id: 48,
    name: "Omore Strawberry Cup",
    cat: "icecream",
    emoji: "🍓",
    desc: "Strawberry flavour creamy ice cream in a cup",
    price: "Rs. 60",
    tag: "Strawberry",
    color: "from-red-300 to-red-600",
    img: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&q=80",
  },
  {
    id: 49,
    name: "Walls Twister",
    cat: "icecream",
    emoji: "🌀",
    desc: "Twisted fruity ice lolly – orange & lemon",
    price: "Rs. 50",
    tag: "Fruity",
    color: "from-orange-400 to-yellow-500",
    img: "https://images.unsplash.com/photo-1549488451-43a0e8e9b96c?w=400&q=80",
  },
  {
    id: 50,
    name: "Omore Choco Cone",
    cat: "icecream",
    emoji: "🍦",
    desc: "Chocolate dipped wafer cone with choco ice cream",
    price: "Rs. 100",
    tag: "Crunchy",
    color: "from-amber-600 to-amber-900",
    img: "https://images.unsplash.com/photo-1558642084-fd07fae5282e?w=400&q=80",
  },
  {
    id: 51,
    name: "Mini Kulfi Sticks",
    cat: "icecream",
    emoji: "🟡",
    desc: "Traditional desi kulfi on sticks – pack of 4",
    price: "Rs. 120",
    tag: "Desi Kulfi",
    color: "from-yellow-400 to-amber-600",
    img: "https://images.unsplash.com/photo-1596803244618-8dea9f05a57d?w=400&q=80",
  },
  {
    id: 52,
    name: "Walls Big Deal",
    cat: "icecream",
    emoji: "🎉",
    desc: "Extra-large vanilla ice cream wafer sandwich",
    price: "Rs. 60",
    tag: "Value Deal",
    color: "from-green-400 to-green-600",
    img: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&q=80",
  },
  {
    id: 53,
    name: "Omore Pista Flavour",
    cat: "icecream",
    emoji: "🟢",
    desc: "Authentic pistachio flavoured ice cream bar",
    price: "Rs. 80",
    tag: "Special",
    color: "from-green-500 to-emerald-700",
    img: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&q=80",
  },
  {
    id: 54,
    name: "Walls Solero",
    cat: "icecream",
    emoji: "🍊",
    desc: "Creamy vanilla with real orange fruit sorbet",
    price: "Rs. 110",
    tag: "Imported",
    color: "from-orange-300 to-orange-500",
    img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80",
  },
  {
    id: 55,
    name: "Rose Ice Cream Tub",
    cat: "icecream",
    emoji: "🌹",
    desc: "Rooh Afza rose flavour creamy ice cream 500ml",
    price: "Rs. 350",
    tag: "Desi Taste",
    color: "from-pink-400 to-rose-600",
    img: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&q=80",
  },
  {
    id: 56,
    name: "Omore Malai Kulfi",
    cat: "icecream",
    emoji: "🍮",
    desc: "Rich creamy malai kulfi – traditional recipe",
    price: "Rs. 70",
    tag: "Traditional",
    color: "from-yellow-300 to-amber-500",
    img: "https://images.unsplash.com/photo-1567206563114-c179706cce34?w=400&q=80",
  },
  {
    id: 57,
    name: "Choco Milk Ice Cream",
    cat: "icecream",
    emoji: "🥛",
    desc: "Creamy milk chocolate ice cream on a wafer stick",
    price: "Rs. 60",
    tag: "Milk Choco",
    color: "from-amber-500 to-amber-700",
    img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80",
  },
  {
    id: 58,
    name: "Mango Shakes Pack",
    cat: "icecream",
    emoji: "🥭",
    desc: "Ready-to-eat frozen mango yoghurt cups – pack of 3",
    price: "Rs. 200",
    tag: "Mango",
    color: "from-yellow-400 to-orange-400",
    img: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&q=80",
  },
  {
    id: 59,
    name: "Frozen Lychee Sorbet",
    cat: "icecream",
    emoji: "🍈",
    desc: "Light refreshing lychee fruit sorbet bar",
    price: "Rs. 70",
    tag: "Light",
    color: "from-pink-200 to-pink-400",
    img: "https://images.unsplash.com/photo-1549488451-43a0e8e9b96c?w=400&q=80",
  },
  {
    id: 60,
    name: "Walls 2L Tub",
    cat: "icecream",
    emoji: "🪣",
    desc: "Mega family ice cream tub – vanilla + choc",
    price: "Rs. 700",
    tag: "Mega Pack",
    color: "from-blue-400 to-indigo-600",
    img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&q=80",
  },

  // ── GROCERY (20) ─────────────────────────────────────────────────────────
  {
    id: 61,
    name: "Basmati Rice 5kg",
    cat: "grocery",
    emoji: "🌾",
    desc: "Premium aged Basmati rice – fragrant & long grain",
    price: "Rs. 650",
    tag: "Staple",
    color: "from-amber-500 to-amber-700",
    img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80",
  },
  {
    id: 62,
    name: "Dalda Cooking Oil 5L",
    cat: "grocery",
    emoji: "🫙",
    desc: "Pure vegetable cooking oil – trusted Dalda brand",
    price: "Rs. 1800",
    tag: "Daily Use",
    color: "from-yellow-400 to-yellow-600",
    img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80",
  },
  {
    id: 63,
    name: "Tapal Danedar Tea 450g",
    cat: "grocery",
    emoji: "🍵",
    desc: "Strong & full-bodied danedar tea – family pack",
    price: "Rs. 650",
    tag: "Must Have",
    color: "from-green-700 to-green-900",
    img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80",
  },
  {
    id: 64,
    name: "Surf Excel 2kg",
    cat: "grocery",
    emoji: "🧺",
    desc: "Premium washing powder – tough on stains",
    price: "Rs. 700",
    tag: "Cleaning",
    color: "from-blue-400 to-blue-700",
    img: "https://images.unsplash.com/photo-1621886292650-520f76c4d176?w=400&q=80",
  },
  {
    id: 65,
    name: "Sugar 1kg",
    cat: "grocery",
    emoji: "🍚",
    desc: "Fine white granulated sugar – pure cane sugar",
    price: "Rs. 150",
    tag: "Staple",
    color: "from-gray-200 to-gray-400",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
  },
  {
    id: 66,
    name: "Atta Flour 10kg",
    cat: "grocery",
    emoji: "🌾",
    desc: "Finely milled wheat flour for roti & bread",
    price: "Rs. 1000",
    tag: "Staple",
    color: "from-stone-400 to-stone-600",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80",
  },
  {
    id: 67,
    name: "Ariel Liquid 1L",
    cat: "grocery",
    emoji: "🧴",
    desc: "Liquid laundry detergent – gentle on clothes",
    price: "Rs. 550",
    tag: "Cleaning",
    color: "from-teal-400 to-teal-700",
    img: "https://images.unsplash.com/photo-1585652757173-35b7c7e29a45?w=400&q=80",
  },
  {
    id: 68,
    name: "Red Lentils 1kg",
    cat: "grocery",
    emoji: "🟠",
    desc: "High protein red masoor daal – kitchen staple",
    price: "Rs. 280",
    tag: "Protein",
    color: "from-red-400 to-red-600",
    img: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=400&q=80",
  },
  {
    id: 69,
    name: "National Spice Mix",
    cat: "grocery",
    emoji: "🌶",
    desc: "Biryani, karahi & BBQ masala sachets",
    price: "Rs. 60",
    tag: "Spices",
    color: "from-orange-500 to-red-600",
    img: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=400&q=80",
  },
  {
    id: 70,
    name: "Lifebuoy Soap Bar",
    cat: "grocery",
    emoji: "🧼",
    desc: "Antibacterial soap – protects your whole family",
    price: "Rs. 80",
    tag: "Hygiene",
    color: "from-red-400 to-red-600",
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80",
  },
  {
    id: 71,
    name: "Nestlé Nido 400g",
    cat: "grocery",
    emoji: "🥛",
    desc: "Full cream fortified milk powder for the family",
    price: "Rs. 700",
    tag: "Nutrition",
    color: "from-blue-300 to-blue-500",
    img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80",
  },
  {
    id: 72,
    name: "Sunsilk Shampoo 185ml",
    cat: "grocery",
    emoji: "🧴",
    desc: "Hair fall control shampoo for smooth silky hair",
    price: "Rs. 200",
    tag: "Hair Care",
    color: "from-yellow-400 to-amber-500",
    img: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=400&q=80",
  },
  {
    id: 73,
    name: "Close-Up Toothpaste",
    cat: "grocery",
    emoji: "🪥",
    desc: "Whitening gel toothpaste with fresh mint",
    price: "Rs. 150",
    tag: "Dental",
    color: "from-red-400 to-pink-500",
    img: "https://images.unsplash.com/photo-1570197520026-a54a4c5e2faa?w=400&q=80",
  },
  {
    id: 74,
    name: "Chicken Masala 100g",
    cat: "grocery",
    emoji: "🍗",
    desc: "Karachi spice mix – perfect chicken curry blend",
    price: "Rs. 80",
    tag: "Spices",
    color: "from-orange-500 to-amber-700",
    img: "https://images.unsplash.com/photo-1618449840665-9ed506d73a34?w=400&q=80",
  },
  {
    id: 75,
    name: "Colgate Total 75ml",
    cat: "grocery",
    emoji: "🦷",
    desc: "12-hour protection toothpaste for whole family",
    price: "Rs. 180",
    tag: "Dental",
    color: "from-red-500 to-red-700",
    img: "https://images.unsplash.com/photo-1581382575275-97901c2635b7?w=400&q=80",
  },
  {
    id: 76,
    name: "Mortein Spray 400ml",
    cat: "grocery",
    emoji: "🦟",
    desc: "Fast-kill insect spray – protects from mosquitoes",
    price: "Rs. 500",
    tag: "Household",
    color: "from-green-500 to-green-700",
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80",
  },
  {
    id: 77,
    name: "Dettol Original 250ml",
    cat: "grocery",
    emoji: "🟢",
    desc: "Antiseptic liquid – kills 99.9% of germs",
    price: "Rs. 450",
    tag: "Hygiene",
    color: "from-emerald-500 to-green-700",
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80",
  },
  {
    id: 78,
    name: "Habib Ghee 1kg",
    cat: "grocery",
    emoji: "🫙",
    desc: "Pure desi ghee – traditional cooking fat",
    price: "Rs. 900",
    tag: "Desi Ghee",
    color: "from-yellow-300 to-amber-500",
    img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80",
  },
  {
    id: 79,
    name: "Black Chickpeas 1kg",
    cat: "grocery",
    emoji: "🟤",
    desc: "Kala chana daal – rich in fibre & protein",
    price: "Rs. 200",
    tag: "Protein",
    color: "from-stone-500 to-stone-700",
    img: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=400&q=80",
  },
  {
    id: 80,
    name: "Kitchen Towel Roll",
    cat: "grocery",
    emoji: "🧻",
    desc: "Absorbent kitchen paper rolls – pack of 2",
    price: "Rs. 120",
    tag: "Household",
    color: "from-blue-200 to-blue-400",
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80",
  },
];

function ProductCard({ product }) {
  return (
    <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e8dcc8] group h-full flex flex-col">
      <div className="relative h-40 sm:h-44 overflow-hidden flex-shrink-0">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-30`}
        />
        <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 text-xs font-bold text-[#0f5c2e] leading-tight">
          {product.tag}
        </div>
        <div className="absolute bottom-2.5 right-2.5 text-2xl">
          {product.emoji}
        </div>
      </div>
      <div className="p-3 sm:p-4 flex flex-col flex-1">
        <h3 className="font-display font-bold text-sm sm:text-base text-[#083d1e] mb-1 leading-tight">
          {product.name}
        </h3>
        <p className="text-xs text-gray-400 mb-3 font-body leading-snug flex-1">
          {product.desc}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="font-black text-[#c8920a] text-sm sm:text-base">
            {product.price}
          </span>
          <a
            href={`https://wa.me/923036751255?text=Hi! I want to order: ${encodeURIComponent(product.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-[#0f5c2e] text-white px-3 py-1.5 rounded-full font-semibold hover:bg-[#1a8a47] transition-colors whitespace-nowrap"
          >
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
}

function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = [];
  let start = Math.max(1, currentPage - 1);
  let end = Math.min(totalPages, currentPage + 1);
  if (currentPage === 1) end = Math.min(totalPages, 3);
  if (currentPage === totalPages) start = Math.max(1, totalPages - 2);
  for (let i = start; i <= end; i++) pages.push(i);

  return (
    <nav
      aria-label="Products pagination"
      className="flex items-center justify-center gap-1.5 sm:gap-2 mt-10 flex-wrap"
    >
      {/* Prev */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`flex items-center gap-1 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 border-2 ${
          currentPage === 1
            ? "border-gray-200 text-gray-300 cursor-not-allowed"
            : "border-[#0f5c2e] text-[#0f5c2e] hover:bg-[#0f5c2e] hover:text-white"
        }`}
      >
        ← <span className="hidden sm:inline">Prev</span>
      </button>

      {/* First page + ellipsis */}
      {start > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="w-9 h-9 rounded-full text-sm font-bold border-2 border-gray-200 text-gray-500 hover:border-[#0f5c2e] hover:text-[#0f5c2e] transition-all"
          >
            1
          </button>
          {start > 2 && <span className="text-gray-400 px-1">…</span>}
        </>
      )}

      {/* Numbered pages */}
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          aria-current={p === currentPage ? "page" : undefined}
          className={`w-9 h-9 rounded-full text-sm font-bold border-2 transition-all duration-200 ${
            p === currentPage
              ? "bg-[#0f5c2e] border-[#0f5c2e] text-white shadow-lg shadow-[#0f5c2e]/30 scale-110"
              : "border-gray-200 text-gray-600 hover:border-[#0f5c2e] hover:text-[#0f5c2e]"
          }`}
        >
          {p}
        </button>
      ))}

      {/* Last page + ellipsis */}
      {end < totalPages && (
        <>
          {end < totalPages - 1 && (
            <span className="text-gray-400 px-1">…</span>
          )}
          <button
            onClick={() => onPageChange(totalPages)}
            className="w-9 h-9 rounded-full text-sm font-bold border-2 border-gray-200 text-gray-500 hover:border-[#0f5c2e] hover:text-[#0f5c2e] transition-all"
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`flex items-center gap-1 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 border-2 ${
          currentPage === totalPages
            ? "border-gray-200 text-gray-300 cursor-not-allowed"
            : "border-[#0f5c2e] text-[#0f5c2e] hover:bg-[#0f5c2e] hover:text-white"
        }`}
      >
        <span className="hidden sm:inline">Next</span> →
      </button>
    </nav>
  );
}

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef(null);

  // IntersectionObserver only on the header, not cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 },
    );
    sectionRef.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filtered = useMemo(
    () =>
      activeCategory === "all"
        ? ALL_PRODUCTS
        : ALL_PRODUCTS.filter((p) => p.cat === activeCategory),
    [activeCategory],
  );

  const totalPages = Math.ceil(filtered.length / PRODUCTS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE,
  );

  const handleCategory = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
    // Smooth scroll to section top
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handlePage = (page) => {
    setCurrentPage(page);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const categoryCounts = useMemo(() => {
    const counts = { all: ALL_PRODUCTS.length };
    categories.slice(1).forEach((c) => {
      counts[c.id] = ALL_PRODUCTS.filter((p) => p.cat === c.id).length;
    });
    return counts;
  }, []);

  return (
    <section
      id="services"
      className="py-20 sm:py-24 bg-[#fdf6e3]"
      ref={sectionRef}
      aria-label="Our Products"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* SEO-friendly heading */}
        <div className="text-center mb-10 sm:mb-14 reveal">
          <span className="inline-block bg-[#0f5c2e]/10 text-[#0f5c2e] text-xs sm:text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            🛍️ Our Products
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#083d1e] section-heading mb-4">
            Everything You Need
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto font-body text-base sm:text-lg">
            From chilled cold drinks to fresh groceries — we stock the best
            brands so your family never runs short.
          </p>
          <p className="text-[#0f5c2e] font-semibold text-sm mt-2">
            {ALL_PRODUCTS.length} products available in store
          </p>
        </div>

        {/* Category filter tabs */}
        <div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 reveal"
          role="tablist"
          aria-label="Product categories"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              onClick={() => handleCategory(cat.id)}
              className={`flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-[#0f5c2e] text-white shadow-lg shadow-[#0f5c2e]/30 scale-105"
                  : "bg-white text-[#083d1e] border-2 border-[#e8dcc8] hover:border-[#0f5c2e] hover:text-[#0f5c2e]"
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
              <span
                className={`text-xs rounded-full px-1.5 py-0.5 font-black ${
                  activeCategory === cat.id
                    ? "bg-white/20 text-white"
                    : "bg-[#0f5c2e]/10 text-[#0f5c2e]"
                }`}
              >
                {categoryCounts[cat.id]}
              </span>
            </button>
          ))}
        </div>

        {/* Results info */}
        <div className="flex items-center justify-between mb-5 px-1">
          <p className="text-sm text-gray-500 font-body">
            Showing{" "}
            <span className="font-bold text-[#083d1e]">
              {(currentPage - 1) * PRODUCTS_PER_PAGE + 1}–
              {Math.min(currentPage * PRODUCTS_PER_PAGE, filtered.length)}
            </span>{" "}
            of{" "}
            <span className="font-bold text-[#083d1e]">{filtered.length}</span>{" "}
            products
          </p>
          <p className="text-xs text-gray-400">
            Page {currentPage} / {totalPages}
          </p>
        </div>

        {/* Product Grid — no reveal class on cards to prevent disappearing */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {paginated.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePage}
        />

        {/* WhatsApp CTA banner */}
        <div className="mt-14 reveal">
          <div className="bg-gradient-to-r from-[#0f5c2e] to-[#1a8a47] rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            <div className="relative z-10">
              <div className="text-4xl mb-3">🏠</div>
              <h3 className="font-display font-black text-xl sm:text-2xl lg:text-3xl mb-2">
                Free Home Delivery in Mohalla!
              </h3>
              <p className="text-white/80 mb-5 font-body text-sm sm:text-base max-w-lg mx-auto">
                Order on WhatsApp and we'll deliver to your doorstep within 500m
                — fast and free.
              </p>
              <a
                href="https://wa.me/923036751255"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold font-black px-7 py-3.5 text-sm sm:text-base inline-flex items-center gap-2"
              >
                📱 Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
