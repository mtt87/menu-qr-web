let baseUrl = 'https://api.menu-qr.tech';
let productId = 'plan_HI4oo6XXGA7eEN';
let stripeKey = 'pk_test_Qf10DlLrzLdKiHxg7SaxXEIk00UIXiiPXU';
if (window && window.location.hostname.indexOf('localhost') > -1) {
  baseUrl = 'http://localhost:3001';
  productId = 'plan_HI4oo6XXGA7eEN';
  stripeKey = 'pk_test_Qf10DlLrzLdKiHxg7SaxXEIk00UIXiiPXU';
}

export const BASE_URL = baseUrl;
export const PRODUCT_ID = productId;
export const STRIPE_KEY = stripeKey;

export const MENU_TYPES = {
  DEFAULT: 'Menu completo',
  DRINK: 'Menu bevande e vini',
  DESSERT: 'Menu dessert',
  LUNCH: 'Menu pranzo',
  DINNER: 'Menu cena',
  DAILY: 'Menu del giorno',
  OTHER: 'Altro',
};
