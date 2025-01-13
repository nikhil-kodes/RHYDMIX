const locationfill = document.getElementById("location-get");
const locationicon = document.getElementById("location-symbol");
const loader = document.getElementById("loader-1");

locationicon.addEventListener("click" , positionget);

function positionget(){
    if("geolocation" in navigator){

        loader.style.display = "inline-block";

        navigator.geolocation.getCurrentPosition((pos)=>{
            const {latitude,longitude} = pos.coords;
            const posvalue = `${latitude},${longitude}`;
            locationfill.value = posvalue;
            loader.style.display = "none";
        },
        (error)=>{
            console.error("Error getting location", error.message);
            alert("Unable to retrieve location. Please allow location access!");
            loader.style.display = "none";
        })
    } else{
        alert("Geolocation is not supported in your browser.")
    }
};



////////////////////////////////////////////////////////
//this is just for the  testing 


async function fetchData() {
  const url = '/.netlify/functions/fetchData'; // Call the serverless function

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
