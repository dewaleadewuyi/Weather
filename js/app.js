const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');


// Updater to DOM  (3)
const updateUI = (data) => {

    // destructure properties
    const { cityDets, weather } = data;

    console.log(data)

    // update detail template
    details.innerHTML = `
    
   <h5 class="my-3">${cityDets.EnglishName}</h5>
   <div class="my-3">${weather[0].WeatherText}</div>
   <div class="display-4 my-4">
     <div class="display-4 my-4">
         <span>${weather[0].Temperature.Metric.Value}</span>   
         <span>&deg;C</span>
    </div>
     `;

    //  Setting the day and night image AND  icon image

    const iconSrc = `img/icons/${weather[0].WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    let timeSrc = weather[0].IsDayTime ? 'img/day.svg' : 'img/night.svg';
    time.setAttribute('src', timeSrc);


    //  remove d-none class if present
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none')
    };

};

//  get the city details and weather deatails from API (2)
const updateCity = async (city) => {

    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    return { cityDets, weather }
};


//  main function(1)
cityForm.addEventListener('submit', e => {

    // prevent default action
    e.preventDefault();

    // get new city
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // update the ui with the new city
    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err))
});