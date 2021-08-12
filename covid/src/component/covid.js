import React, {useEffect, useState} from 'react'
const Covid = () => {
    const [data, setData] = useState ([]);
    const getCovidData = async () => {
        try {
            const res = await fetch ('https://api.covid19india.org/data.json');
           const actualData = await res.json();
           console.log(actualData.statewise[0]);
           setData(actualData.statewise[0]);
        }
        catch (err) {
console.log(err);
        }
        
    }
    useEffect(() => {
         getCovidData();
        
    }, []);
    return (
        <>
       <body>
       <div class="main-container">
  <div class="heading">
      <h2>🔴 LIVE</h2>
    <h1 class="heading__title">Covid-19 Dashboard</h1>
    {/* <p class="heading__credits"><a class="heading__link" target="_blank" href="https://dribbble.com/sl">Design by Simon Lurwer on Dribbble</a></p> */}
  </div>
  
  <div class="cards">
    <div class="card card-6">
      {/* <div class="card__icon"><i class="fas fa-bolt"></i></div> */}
      {/* <p class="card__exit"><i class="fas fa-times"></i></p> */}
<h1 class = "card_name">
    Country Name
</h1>
      <h2 class="card__title">India</h2>
  
        {/* <a class="card__link" href="#">Apply Now <i class="fas fa-arrow-right"></i></a> */}
     
    </div>
    <div class="card card-1">
      {/* <div class="card__icon"><i class="fas fa-bolt"></i></div> */}
      {/* <p class="card__exit"><i class="fas fa-times"></i></p> */}
<h1 class = "card_name">
    Total Active Cases
</h1>
      <h2 class="card__title">{data.active}</h2>
  
        {/* <a class="card__link" href="#">Apply Now <i class="fas fa-arrow-right"></i></a> */}
     
    </div>
    <div class="card card-2">
      {/* <div class="card__icon"><i class="fas fa-bolt"></i></div> */}
      {/* <p class="card__exit"><i class="fas fa-times"></i></p> */}
      <h1 class = "card_name">
    Total Confirmed Cases
</h1>
      <h2 class="card__title">{data.confirmed}</h2>
      <p class="card__apply">
        {/* <a class="card__link" href="#">Apply Now <i class="fas fa-arrow-right"></i></a> */}
      </p>
    </div>
    <div class="card card-3">
      {/* <div class="card__icon"><i class="fas fa-bolt"></i></div> */}
      {/* <p class="card__exit"><i class="fas fa-times"></i></p> */}
      <h1 class = "card_name">
    Total Deaths
</h1>
      <h2 class="card__title">{data.deaths}</h2>
      <p class="card__apply">
        {/* <a class="card__link" href="#">Apply Now <i class="fas fa-arrow-right"></i></a> */}
      </p>
    </div>
    <div class="card card-4">
      {/* <div class="card__icon"><i class="fas fa-bolt"></i></div> */}
      {/* <p class="card__exit"><i class="fas fa-times"></i></p> */}
      <h1 class = "card_name">
   Total Recovered Cases
</h1>
      <h2 class="card__title">{data.recovered}</h2>
      <p class="card__apply">
        {/* <a class="card__link" href="#">Apply Now <i class="fas fa-arrow-right"></i></a> */}
      </p>
    </div>
    <div class="card card-5">
      {/* <div class="card__icon"><i class="fas fa-bolt"></i></div> */}
      {/* <p class="card__exit"><i class="fas fa-times"></i></p> */}
      <h1 class = "card_name">
    Last Updated Time
</h1>
      <h2 class="card__title">{data.lastupdatedtime}</h2>
      <p class="card__apply">
        {/* <a classname ="card__link" href="#">Apply Now <i classname ="fas fa-arrow-right"></i></a> */}
      </p>
    </div>
    
  </div>
</div>

</body>
        </>
    )
}
export default Covid