const api = { 
  key: "7e3f21edee540e6110af347b55eb1ab2", 
  base: "https://api.openweathermap.org/data/2.5/" 
}

const cityinput=document.querySelector('.search');
const citydetails=document.querySelector('.city');
const temperature=document.querySelector('.temperature');
const weathertype=document.querySelector('.weathertype');
const weathertemp=document.querySelector('.weathertemp');
const date=document.querySelector('.date');

cityinput.addEventListener("keypress",(e)=>{
  if(e.keyCode===13)
  {
      getresult(cityinput.value);
  }

})

function getresult(query)
{
  fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
  .then(weather=>{
       return weather.json();
  })
  .then(response=>{
      console.log(response);
      displayresult(response);
  });
}

function displayresult(weather)
{
 const res=`${weather.name}, ${weather.sys.country}`;
 citydetails.innerHTML=res;
 const temp=`${Math.round(weather.main.temp)} °c`;
 temperature.innerHTML=temp;
 const wtype=weather.weather[0].main;
 weathertype.innerHTML=wtype;
 const wtemp=`${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
 weathertemp.innerHTML=wtemp;
 date.innerHTML=datebuilder();
}


function datebuilder()
{
  const date=new Date();
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  const getmonth=months[date.getMonth()];
  const getday=days[date.getDay()];
  const getdate=date.getDate();
  const getyear=date.getFullYear();

  return `${getday} ${getdate} ${getmonth} ${getyear}`;

}