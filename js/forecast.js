// Get a reference to the city and the get the weather condition the city

const key = 'P2sWY92l5fc5nABf7aFUtdzGqYKAiuSo';

// getting weather info
const getWeather = async (id) => {
    const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data;
};

// getting city info
const getCity = async (city) => {
    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

