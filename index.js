
const button = document.getElementById('search-btn');
const input = document.getElementById('city-input');

const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");


async function getData(CityName) {

    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=0dbe8f412eca45eaa3b114455242101&q=${CityName}&aqi=yes`)

    return await promise.json();
};

button.addEventListener('click', function () {
    if (input.value.trim().length <= 0) {
        alert("Enter something in the field!");
    }
});



button.addEventListener("click", async () => {
    const value = input.value;
    const result = await getData(value);
    cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`
    const localTime = new Date(result.location.localtime);
    cityTime.innerText = `Local time: ${localTime.toLocaleTimeString()}`;
    cityTemp.innerText = `${result.current.temp_c}°C`;

});

