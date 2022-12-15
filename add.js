let btn = document.getElementById('getCountry')
let input = document.getElementById('infoCountry')
let bg = document.getElementById('displayMeteo')

btn.addEventListener("click", () => {

    let country = document.getElementById('country')
    let temperature = document.getElementById('temp')
    let weather = document.getElementById('weather')
    let input = document.getElementById('infoCountry')
    const requestURL = "https://api.openweathermap.org/data/2.5/weather?q=" + input.value + "&units=metric&lang=fr&appid=3c4d3267b822dc910df20020b02cea0a"

    let xhr = new XMLHttpRequest();
    xhr.open("GET", requestURL)
    xhr.responseType = "json"


    xhr.onload = function (){

        if(xhr.status === 404){
            alert("Ville non trouvée");
            return;
        }
        else if(xhr.status === 401){
            alert("Erreur d'authentification");
            return;
        }
        else if(xhr.status === 500){
            alert("Erreur sur l'API");
            return;
        }

        let response = xhr.response
        country.innerHTML = response.name
        temperature.innerHTML = response.main.temp_min + "°  |  " + response.main.temp_max + "°"
        weather.innerHTML = response.weather[0].description

        if (weather.innerHTML === 'couvert') {
            document.body.style.backgroundImage = "url(img/couvert.gif)"
            document.body.style.backgroundRepeat = "no-repeat"
            document.body.style.backgroundSize = "cover"
        }
        else if (weather.innerHTML === 'nuageux') {
            document.body.style.backgroundImage = "url(img/nuages.gif)"
            document.body.style.backgroundRepeat = "no-repeat"
            document.body.style.backgroundSize = "cover"
        }
        else if (weather.innerHTML === 'ciel dégagé') {
            document.body.style.backgroundImage = "url(img/dégagé.gif)"
            document.body.style.backgroundRepeat = "no-repeat"
            document.body.style.backgroundSize = "cover"
        }
        else if (weather.innerHTML === 'légère pluie') {
            document.body.style.backgroundImage = "url(img/pluie.gif)"
            document.body.style.backgroundRepeat = "no-repeat"
            document.body.style.backgroundSize = "cover"
        }
        else if (weather.innerHTML === 'neige') {
            document.body.style.backgroundImage = "url(img/neige.gif)"
            document.body.style.backgroundRepeat = "no-repeat"
            document.body.style.backgroundSize = "cover"
        }
    }
    xhr.send()
})
