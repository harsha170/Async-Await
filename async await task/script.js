async function makeReq(){
    try{
        let countriesResponse = await fetch('https://restcountries.eu/rest/v2/all')
        let countryData = await countriesResponse.json()
        var content = document.getElementById('content')
        countryData.map(async (x)=>{
            var weatherApi = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${x.name}&appid=b9ef44e415710b200ed1ebd8a62a494c`)
            var weatherData = await weatherApi.json()
            $(function () {
                $('[data-toggle="popover"]').popover()
              })
            console.log(weatherData)
            content.innerHTML+=`<div class="card row col-lg-4 col-sm-12" id="card" style="width: 18rem;">
            <h5 class="card-title header">${x.name}</h5><br>
            <img src="${x.flag}" class="card-img-top" id="flag" alt="flag">
            <div class="card-body">
            <p class="card-title" style="text-align:center"><b>Capital:</b>${x.capital}</p>
            <p class="card-title" style="text-align:center"><b>Region:</b>${x.region}</p>
            <p class="card-title" style="text-align:center"><b>Country-code:</b>${x.alpha3Code}</p>
            <button type="button" class="btn btn-primary" data-container="body" data-toggle="popover" data-placement="top" data-content="${weatherData.main.temp} | pressure: ${weatherData.main.pressure} | Humidity:${weatherData.main.humidity}">
            Click here for weather:
            </button>
            
            </div>
            </div>`
        })
    }
    catch(err){console.log(err)}
}
makeReq()