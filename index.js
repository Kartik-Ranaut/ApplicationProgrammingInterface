console.log("trying fetching from api");

let city ="goa";
let api_key ="b1e7b739219268509a1b1249def75c82";
weather();

async function weather(){
    let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`);
    const data= await response.json();
    console.log(data);
}