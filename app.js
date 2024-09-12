let input = document.getElementById('user');
const head = document.getElementById('head')
const pera1 = document.getElementById('val1');
const pera2 = document.getElementById('val2');
const pera3 = document.getElementById('val3');
const pera4 = document.getElementById('val4');
const pera5 = document.getElementById('val5');
const pera6 = document.getElementById('val6');
const heading = document.getElementById('heading');
const image = document.getElementById('image')

let apikey = "01d9f2d66b5fb9c863aa86b5cb001cd2";

const weatherfun = () =>{
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apikey}&units=metric`)
.then((res)=> res.json())
.then((data)=>{
    
    console.log(data);

    pera4.innerHTML = data.weather[0].description;
    heading.innerHTML = data.name;
    pera5.innerHTML = data.sys.sunset;
    

weath.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

    
    pera1.innerHTML = data.main.temp + "°C";
    pera2.innerHTML = data.main.humidity + "%";
    pera3.innerHTML = data.wind.speed + " Km/h";
    pera6.innerHTML = data.wind.deg + "°";




    
});
};
