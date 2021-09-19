import axios from 'axios'


// https://free.currconv.com/api/v7/convert?q=USD_BRL&compact=ultra&apiKey=9448fef49edf6bb516e5

const api = axios.create({
    baseURL: 'https://free.currconv.com/api/v7/'
});

export default api