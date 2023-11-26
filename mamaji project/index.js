let apikey = "7c551e4790a53da3c86ccafbd76fa0e4";

// getdetails();

async function getdetails(){
    data= await fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_wxBYZ2gFBnmMrOVj3UbM866J1P3tJyGApjdQfC8u&currencies=USD%2CEUR%2CGBP%2CJPY%2CCAD&base_currency=INR`);
    converted= await data.json();
    console.log(converted);
}


