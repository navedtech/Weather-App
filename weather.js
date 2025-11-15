var API_KEY = '7683480eb3278246c2697555a6a75cef';



function LoadWeatherData(){

    var cityName = document.getElementById("txtCity").value;



    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)

    .then(function(response){

        return response.json();

    })

    .then(function(data){

         document.getElementById("lblCity").textContent = data.name;

         document.getElementById("lbltemp").innerHTML = `${data.main.temp}&deg; C`;

         document.getElementById("lblcloud").innerHTML= `${data.clouds.all} %`;  

         document.getElementById("lblsunrise").innerHTML= new Date(data.sys.sunrise * 1000).toLocaleTimeString();

         document.getElementById("lblwind").innerHTML= `${data.wind.speed}&nbsp; m/s`;

         document.getElementById("lblsunset").innerHTML= new Date(data.sys.sunset * 1000).toLocaleTimeString();

         document.getElementById("lblDescription").innerHTML = data.weather[0].description.toUpperCase();



    })

}



function SearchClick(){

    document.getElementById("detailsCard").style.display = "block";

    LoadWeatherData();

}
