export const restaurants = [
  {
    name: "Sweets",
    id: 1,
    image: require("./assets/categories/category-1.png"),
  },
  {
    name: "Fast food",
    id: 2,
    image: require("./assets/categories/category-2.png"),
  },
  {
    name: "Pizza",
    id: 3,
    image: require("./assets/categories/category-3.png"),
  },
  {
    name: "Noodles",
    id: 4,
    image: require("./assets/categories/category-4.png"),
  },
  {
    name: "Pizza",
    id: 5,
    image: require("./assets/categories/category-5.png"),
  },
  {
    name: "Drinks",
    id: 6,
    image: require("./assets/categories/category-6.png"),
  },
  {
    name: "Fish",
    id: 7,
    image: require("./assets/categories/category-7.png"),
  },
];

export const featured = [
  {
    name: "KFC",
    id: 1,
    image: require("./assets/restaurants/resturant-1.webp"),
    rating: 5,
    review: 4.5,
    type: "Chicken",
    nearBy: 154

  },
  {
    name: "Snacks",
    id: 2,
    image: require("./assets/restaurants/resturant-2.webp"),
    rating: 2,
    review: 2.3,
    type: "fastfood",
    nearBy: 20
  },
  {
    name: "Pizza",
    id: 3,
    image: require("./assets/restaurants/resturant-3.jpg"),
    rating: 4,
    review: 4.1,
    type: "fastfood",
    nearBy: 60
  },
  {
    name: "Burger",
    id: 4,
    image: require("./assets/restaurants/resturant-4.jpeg"),
    rating: 3,
    review: 3.3,
    type: "Burger",
    nearBy: 15
  },
  {
    name: "Pizza",
    id: 5,
    image: require("./assets/restaurants/resturant-5.jpg"),
    rating: 2,
    review: 2.9,
    type: "fastfood",
    nearBy: 45
  },
];

export const iceCreams = [
  {
    name: "Vanilla",
    id: 1,
    nearBy: 40,
    rating: 4.5,
    price: 3.99,
    available: true,
    type: "vanilla",
    allergens: ["dairy"],
    image: require("./assets/icecreams/Homemade-Vanilla.png.webp")
  },
  {
    name: "Chocolate",
    id: 2,
    nearBy: 40,
    rating: 4.7,
    price: 4.29,
    available: true,
    type: "chocolate",
    allergens: ["dairy"],
    image: require("./assets/icecreams/chocolate.webp")
  },
  {
    name: "Strawberry",
    id: 3,
    nearBy: 40,
    rating: 4.4,
    price: 4.19,
    available: true,
    type: "strawberry",
    allergens: ["dairy"],
    image: require("./assets/icecreams/Strawberry.jpeg")
  },
  {
    name: "Mint Chocolate Chip",
    id: 4,
    nearBy: 40,
    rating: 4.6,
    price: 4.39,
    available: true,
    type: "mint",
    allergens: ["dairy"],
    image: require("./assets/icecreams/mint-chocolate.jpeg")
  },
  {
    name: "Cookie Dough",
    id: 5,
    nearBy: 40,
    rating: 4.8,
    price: 4.59,
    available: true,
    type: "cookie • dough",
    allergens: ["dairy", "gluten"],
    image: require("./assets/icecreams/cookie-dough.jpeg")
  },
  {
    name: "Rocky Road",
    id: 6,
    nearBy: 40,
    rating: 4.7,
    price: 4.49,
    available: true,
    type: "chocolate • almond",
    allergens: ["dairy", "nuts"],
    image: require("./assets/icecreams/christmas-rocky-road.jpeg")
  },
  {
    name: "Pistachio",
    id: 7,
    nearBy: 40,
    rating: 4.5,
    price: 4.69,
    available: true,
    type: "pistachio",
    allergens: ["dairy", "nuts"],
    image: require("./assets/icecreams/Pistachio-Ice-Cream.jpeg")
  },
  {
    name: "Salted Caramel",
    id: 8,
    nearBy: 40,
    rating: 4.9,
    price: 4.79,
    available: true,
    type: "caramel",
    allergens: ["dairy"],
    image: require("./assets/icecreams/Salted_Caramel_Ice_Cream.webp")
  },
  {
    name: "Mango Sorbet",
    id: 9,
    nearBy: 40,
    rating: 4.3,
    price: 4.29,
    available: true,
    type: "mango",
    allergens: [],
    image: require("./assets/icecreams/Mango.jpeg")
  },
];

export const dishes = [
  {
    name: "Pizza",
    description: "Classic Italian pizza topped with fresh mozzarella and tomato sauce.",
    id: 1,
    price: "$10",
    image: require("./assets/dishes/dish-1.jpeg")
  },
  {
    name: "Roti's",
    description: "Soft and fluffy Indian flatbread, perfect for any curry.",
    id: 2,
    price: "$30",
    image: require("./assets/dishes/dish-2.jpeg")
  },
  {
    name: "Chicken",
    description: "Juicy grilled chicken seasoned with a blend of spices.",
    id: 3,
    price: "$80",
    image: require("./assets/dishes/dish-3.jpeg")
  },
  {
    name: "Curry",
    description: "A rich and flavorful curry with tender pieces of meat and vegetables.",
    id: 4,
    price: "$99",
    image: require("./assets/dishes/dish-4.jpeg")
  },
  {
    name: "Samosa",
    description: "Crispy pastry filled with spicy potatoes and peas.",
    id: 5,
    price: "$36",
    image: require("./assets/dishes/dish-5.jpeg")
  },
  {
    name: "Uttappa",
    description: "South Indian pancake topped with onions, tomatoes, and chilies.",
    id: 6,
    price: "$77",
    image: require("./assets/dishes/dish-6.jpeg")
  },
  {
    name: "Pasta",
    description: "Pasta cooked to perfection and tossed in a creamy Alfredo sauce.",
    id: 7,
    price: "$10",
    image: require("./assets/dishes/dish-7.jpeg")
  },
  {
    name: "Fish",
    description: "Grilled fish fillet served with a lemon butter sauce.",
    id: 8,
    price: "$40",
    image: require("./assets/dishes/dish-8.jpeg")
  },
  {
    name: "Noodles",
    description: "Stir-fried noodles with vegetables and your choice of protein.",
    id: 9,
    price: "$65",
    image: require("./assets/dishes/dish-9.jpeg")
  },
  {
    name: "Fried Rice",
    description: "Classic fried rice with eggs, vegetables, and a hint of soy sauce.",
    id: 10,
    price: "$80",
    image: require("./assets/dishes/dish-10.jpeg")
  },
  {
    name: "White Rice",
    description: "Steamed white rice, fluffy and perfect as a side dish.",
    id: 11,
    price: "$20",
    image: require("./assets/dishes/dish-11.jpeg")
  },
  {
    name: "Chicken",
    description: "Succulent roasted chicken with herbs and garlic.",
    id: 12,
    price: "$35",
    image: require("./assets/dishes/dish-12.jpeg")
  },
  {
    name: "Burger",
    description: "Juicy beef burger with lettuce, tomato, and cheese in a toasted bun.",
    id: 13,
    price: "$10",
    image: require("./assets/dishes/dish-13.jpeg")
  },
  {
    name: "Pizza",
    description: "Delicious pizza topped with pepperoni and extra cheese.",
    id: 14,
    price: "$50",
    image: require("./assets/dishes/dish-14.jpeg")
  },
  {
    name: "Chicken Roll",
    description: "Spicy chicken roll wrapped in a soft tortilla with fresh veggies.",
    id: 15,
    price: "$35",
    image: require("./assets/dishes/dish-15.jpeg")
  },
];

export const coolDrinks = [
  {
    name: "Coco Cola",
    id: 1,
    nearBy: "50",
    rating: 4.5,
    price: "$3.50",
    type: "cola",
    image: require("./assets/drinks/cola.jpeg")
  },
  {
    name: "Pepsi",
    id: 2,
    nearBy: "20",
    rating: 4.0,
    price: "$1.50",
    type: "pepsi",
    image: require("./assets/drinks/pepsi.jpeg")
  },
  {
    name: "Lemonade",
    id: 3,
    nearBy: "30",
    rating: 4.2,
    price: "$1.75",
    type: "lemon",
    image: require("./assets/drinks/Lemonade.jpeg")
  },
  {
    name: "Orange Soda",
    id: 4,
    nearBy: "40",
    rating: 4.1,
    price: "$1.40",
    type: "orange",
    image: require("./assets/drinks/Orange.jpeg")
  },
  {
    name: "Thums up",
    id: 5,
    nearBy: "60",
    rating: 4.3,
    price: "$1.60",
    type: "thums up",
    image: require("./assets/drinks/thums-up.avif")
  }
];


