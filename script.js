/**API key**/
/**const APIKEY = 'f2f85762267ef18d0df71e18ec9f3737';**/
const APIKEY = '97a7e50e74deada62b1fd87a8533f892';
// City
const city = 'Seattle';
// Units for Farenheit
const units = 'imperial';
// URL query string
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=${units}`;

// Using fetch to get data
fetch(url)
.then( response => response.json() )
.then( data => {

  // check-check
  console.log( data );
  // console.log( data.name );
  // console.log( data.main.temp );
  
  // Get elements
  const city = document.querySelector('#city');
  const temp = document.querySelector('#temp');  
  const icon = document.querySelector('img');  
  const iconId = data.weather[0].icon;
  const feels = document.querySelector("#feels1");
  const humidity = document.querySelector("#humidity");
  // Set elements
  city.textContent = data.name;
  temp.textContent = " Temp. " + data.main.temp + "F";
  icon.src = `https://openweathermap.org/img/wn/${iconId}@4x.png`;
  feels.textContent = " Feels Like " + data.main.temp + "F";
  humidity.textContent = " Humidity " + data.main.humidity + `%`;
});





/** CITY 2 **/



/**City **/
const APIKEY2 = "f5eca8d7215316ad979d2310c7fea888";
const city2 = "Bothell";
const unit2 = "imperial";
const urlQueryString2 = `https://api.openweathermap.org/data/2.5/weather?appid=${APIKEY2}&q=${city2}&units=${unit2}`;

console.log(urlQueryString2);

fetch(urlQueryString2)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  
  
    //second city
    const city2 = document.querySelector("#city2");
    const temp2 = document.querySelector("#temp2");
    const secondicon = document.querySelector("img2");
    const feels2 = document.querySelector("#feels2");
    const humidity2 = document.querySelector("#humidity2");
    const iconId2 = data.weather[0].icon;

    //set element
    city2.textContent = data.name;
    temp2.textContent = " Temp. " + data.main.temp + "F";
    humidity2.textContent = " Humidity " + data.main.humidity + `%`;
    feels2.textContent = " Feels Like " + data.main.temp + "c";
    console.log(data.weather[0].icon);
    icon.src  = `https://openweathermap.org/img/wn/${iconId2}@4x.png`
  });
