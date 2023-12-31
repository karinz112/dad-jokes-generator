const  btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "2AH/qItS41iV62VWAL6lPQ==Q5jWaSs2iFqCOtL8";

const options ={
    method: "GET", //GET because we are requesting for the data
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){

    try {
        jokeEl.innerText = "Updating...";
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
        const response = await fetch(apiURL, options);
        const data = await response.json();
    
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a Joke";
    
        jokeEl.innerText = data[0].joke;        
    } catch (error) {
        jokeEl.innerText = "An error happened, try again later";
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a Joke";
    }

}

btnEl.addEventListener("click", getJoke);