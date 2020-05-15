let baseUrl = 'https://api.menu-qr.tech';
if (window && window.location.hostname.indexOf('localhost') > -1) {
  baseUrl = 'http://localhost:3001';
}

export const BASE_URL = baseUrl;

export const MENU_TYPES = {
  DEFAULT: 'Menu completo',
  DRINK: 'Menu bevande e vini',
  DESSERT: 'Menu dessert',
  LUNCH: 'Menu pranzo',
  DINNER: 'Menu cena',
  DAILY: 'Menu del giorno',
  OTHER: 'Altro',
};
