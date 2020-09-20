//Week 4
let now = new Date();

let daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let currentDate = daysOfTheWeek[now.getDay()];

let monthsOfTheYear = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec"
];
//
let currentMonth = monthsOfTheYear[now.getMonth()];
//
let currentDayOfMonth = now.getDate();
let currentHour = now.getHours();
if (currentHour < 10) {
  currentHour = `0${currentHour}`;
}
//
let currentMinute = now.getMinutes();
if (currentMinute < 10) {
  currentMinute = `0${currentMinute}`;
}
//
let currentDayAndTime = document.querySelector("#todays-date");
currentDayAndTime.innerHTML = `${currentDate} ${currentMonth} ${currentDayOfMonth}, ${currentHour}: ${currentMinute}`;
//
function searchCity(event) {
  event.preventDefault();
  let enterCity = document.querySelector(".city-input");
  let newCity = document.querySelector(".city");
  newCity.innerHTML = `${enterCity.value}`;
}
let searchEngine = document.querySelector("form");
searchEngine.addEventListener("submit", searchCity);

//Week 5

function search(event) {
  event.preventDefault();
  let apiKey = "60caab9a35563c73f82e0b57d5d52a5b";
  let cityName = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}
let currentTemp = document.querySelector("#search-form");
currentTemp.addEventListener("submit", search);

//current location

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "60caab9a35563c73f82e0b57d5d52a5b";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  console.log(apiUrl);
}

function currentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}
let button = document.querySelector("button");
button.addEventListener("click", currentPosition);
