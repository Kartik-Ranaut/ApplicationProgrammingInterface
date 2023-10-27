let button = document.querySelector(".getbtn");
let cityName= document.querySelector("#city_name");
let display= document.querySelector(".temp2");
let city=""
let API_KEY="b1e7b739219268509a1b1249def75c82";

button.addEventListener('click',async ()=>{
    let city=cityName.value;
    let response =await fetchWeatherDetails(city);
    let data= response.json();
    display.innerHTML = `${data?.main?.temp.toFixed(2)} °C`;
})


function renderWeatherInfo(data) {
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`

    document.body.appendChild(newPara);
}

async function fetchWeatherDetails(city) {

try {
    

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await response.json();

    console.log("Weather data:-> " , data);

  
}
catch(err) {
    console.log(err)
}
//https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric

}

async function getCustomWeatherDetails() {
try{
    let latitude = 17.6333;
    let longitude = 18.3333;

    let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?
                            lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);

    let data = await result.json();

    console.log(data);
}
catch(err) {
    console.log("Errror Found" , err);
}

}


function switchTab(clickedTab) {

apiErrorContainer.classList.remove("active");

if (clickedTab !== currentTab) {
currentTab.classList.remove("current-tab");
currentTab = clickedTab;
currentTab.classList.add("current-tab");

if (!searchForm.classList.contains("active")) {
  userInfoContainer.classList.remove("active");
  grantAccessContainer.classList.remove("active");
  searchForm.classList.add("active");
} 
else {
  searchForm.classList.remove("active");
  userInfoContainer.classList.remove("active");
  //getFromSessionStorage();
}

// console.log("Current Tab", currentTab);
}
}

function getLocation() {
if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
}
else {
    console.log("No geoLocation Support");
}
}

function showPosition(position) {
let lat = position.coords.latitude;
let longi = position.coords.longitude;

console.log(lat);
console.log(longi);
}