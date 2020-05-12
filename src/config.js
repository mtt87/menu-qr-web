let baseUrl = 'https://api.menu-qr.tech';
if (window && window.location.hostname.indexOf('localhost') > -1) {
  baseUrl = 'http://localhost:3001';
}

export const BASE_URL = baseUrl;
