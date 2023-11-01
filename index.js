let liveButton = document.querySelector(".live");
let searchButton = document.querySelector(".search");

let grantloc = document.querySelector(".grant-loc");
let loading = document.querySelector(".loading-container");
let info = document.querySelector(".info");
let form = document.querySelector(".form-container");

let accessbtn =document.querySelector(".btn");

accessbtn.addEventListener('click',getLocation);

function zindex0(){
    grantloc.style.zIndex="0";
    loading.style.zIndex="0";
    info.style.zIndex="0";
    form.style.zIndex="0";
}

liveButton.addEventListener('click',()=>{
    zindex0();
    grantloc.style.zIndex="1";
});
searchButton.addEventListener('click',()=>{
    zindex0();
    form.style.zIndex="1";
});





let button = document.querySelector(".getbtn");
let cityName= document.querySelector("#city_name");
let dataTemp = document.querySelector(".data-temp");
let dataCityName = document.querySelector(".data-cityName");
let city=""
let API_KEY="b1e7b739219268509a1b1249def75c82";

button.addEventListener('click',async ()=>{
    let city=cityName.value;
    let data =await fetchWeatherDetails(city);
   
    display.innerHTML = `${data?.main?.temp.toFixed(2)} °C`;
})


function renderWeatherInfo(data) {

    // newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`
    console.log(data);

}

async function fetchWeatherDetails(city) {
    try {
        

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();

        console.log("Weather data:-> " , data);
        return data
    
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


// function switchTab(clickedTab) {

//     apiErrorContainer.classList.remove("active");

//     if (clickedTab !== currentTab) {
//     currentTab.classList.remove("current-tab");
//     currentTab = clickedTab;
//     currentTab.classList.add("current-tab");

//     if (!searchForm.classList.contains("active")) {
//     userInfoContainer.classList.remove("active");
//     grantAccessContainer.classList.remove("active");
//     searchForm.classList.add("active");
//     } 
//     else {
//     searchForm.classList.remove("active");
//     userInfoContainer.classList.remove("active");
//     //getFromSessionStorage();
//     }

//     // console.log("Current Tab", currentTab);
//     }
// }

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
}