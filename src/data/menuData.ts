export interface TranslatedText {
  en: string;
  ro: string;
}

export interface Product {
  id: string;
  name: TranslatedText;
  description: TranslatedText;
  price: number;
  available: boolean;
}

export interface MenuCategory {
  id: string;
  category: TranslatedText;
  products: Product[];
}

export const menuData: MenuCategory[] = [
  {
    id: "4f2c93a5-1cb7-4b3a-9819-fb43a17e1fc7",
    category: {
      en: "Pizza",
      ro: "Pizza"
    },
    products: [
      {
        id: "d3c2b1f0-512a-4f0b-bcc3-0a8cfc43b241",
        name: {
          en: "Margherita",
          ro: "Margherita"
        },
        description: {
          en: "Classic pizza with tomato sauce, mozzarella, and basil",
          ro: "Pizza clasica cu sos de rosii, mozzarella si busuioc"
        },
        price: 8.99,
        available: true,
      },
      {
        id: "1be48f7f-1052-42dc-80b7-607ba8a34a7a",
        name: {
          en: "Pepperoni",
          ro: "Pepperoni"
        },
        description: {
          en: "Tomato sauce, mozzarella, and pepperoni",
          ro: "Sos de rosii, mozzarella si salam Pepperoni"
        },
        price: 10.99,
        available: false,
      },
    ],
  },
  {
    id: "e48fc123-4c7d-4a8d-b0d4-1a5439f3fc2f",
    category: {
      en: "Burgers",
      ro: "Burgeri"
    },
    products: [
      {
        id: "c104a4e0-c76f-4040-9ec9-0fc68c31f7ec",
        name: {
          en: "Classic Beef Burger",
          ro: "Burger Clasic cu Vita"
        },
        description: {
          en: "Beef patty, lettuce, tomato, onion, and cheese",
          ro: "Chiftea de vita, salata, rosii, ceapa si branza"
        },
        price: 7.5,
        available: true,
      },
      {
        id: "eb9bda67-2f1b-4a8e-b45a-58b8362f25ed",
        name: {
          en: "Veggie Burger",
          ro: "Burger Vegetarian"
        },
        description: {
          en: "Grilled veggie patty, avocado, tomato, and vegan mayo",
          ro: "Chiftea vegetariana, avocado, rosii si maioneza vegana"
        },
        price: 6.75,
        available: true,
      },
    ],
  },
  {
    id: "5f42a9e7-e98a-4727-9f3a-0c86b4d6c02b",
    category: {
      en: "Drinks",
      ro: "Băuturi"
    },
    products: [
      {
        id: "7e20f2e4-9b88-4a01-9932-e15a7cf5d4e0",
        name: {
          en: "Coca-Cola",
          ro: "Coca-Cola"
        },
        description: {
          en: "Chilled 330ml can",
          ro: "Doza de 330ml, rece"
        },
        price: 1.5,
        available: true,
      },
      {
        id: "39f3ae77-0a70-4c7b-8d8d-cf84c2e5f08d",
        name: {
          en: "Lemonade",
          ro: "Limonada"
        },
        description: {
          en: "Fresh homemade lemonade with mint",
          ro: "Limonada de casa cu menta proaspata"
        },
        price: 2.0,
        available: true,
      },
    ],
  },
];
