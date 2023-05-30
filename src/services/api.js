import axios from 'axios';

//Base da URL: https:/api.mercadolibre.com/sites/MLB/
//URL da API: https:/api.mercadolibre.com/sites/MLB/search?q=notebooks

const api = axios.create({
  baseURL: 'https:/api.mercadolibre.com/sites/',
});

export default api;
