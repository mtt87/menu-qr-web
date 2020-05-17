let baseUrl = 'https://api.menu-qr.tech';
let productId = 'plan_HI4oo6XXGA7eEN';
if (window && window.location.hostname.indexOf('localhost') > -1) {
  baseUrl = 'http://localhost:3001';
  productId = 'plan_HI4oo6XXGA7eEN';
}

export const BASE_URL = baseUrl;
export const PRODUCT_ID = productId;

export const MENU_TYPES = {
  DEFAULT: 'Menu completo',
  DRINK: 'Menu bevande e vini',
  DESSERT: 'Menu dessert',
  LUNCH: 'Menu pranzo',
  DINNER: 'Menu cena',
  DAILY: 'Menu del giorno',
  OTHER: 'Altro',
};
