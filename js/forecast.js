// Get a reference to the city and the get the weather condition the city

const key = 'Sla0YGm9VFS1VtoOCdfNgDOAzUznrd4Z';

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

// Autocomplete


// Function to get autocomplete suggestions
const getSuggestions = async (query) => {

    const base = 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete';

    const response = await fetch(`${base}?apikey=${key}&q=${query}`);
    const data = await response.json();

    return data;
};