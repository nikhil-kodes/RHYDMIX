const locationfill = document.getElementById("location-get");
const locationicon = document.getElementById("location-symbol");
const loader = document.getElementById("loader-1");
const submit = document.getElementsByClassName("submit-btn");
// const happy = document.getElementById("happy");
// const sad = document.getElementById("sad");
// const excited = document.getElementById("excited");
// const rage = document.getElementById("rage");
// const relaxed = document.getElementById("relaxed");
// const romance = document.getElementById("romance");
// const evergreen = document.getElementById("evergreen");
// const lo_fi = document.getElementById("lo-fi");
// const rap = document.getElementById("rap");
// const ghazal = document.getElementById("ghazal");
// const party = document.getElementById("party");

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

const button = document.querySelectorAll('.button-group button')
button.forEach(button => {
    button.addEventListener('click', () => {
        const group = button.parentElement;
        // Allow multiple selections
        group.querySelectorAll('button').forEach(btn => btn.classList.remove('selected'));
        button.classList.toggle('selected');
    });
});

// if (sad.selected) {
    
// } else {
    
// }

    // Handle form submission
// document.getElementById('preferences-form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     const location_got = locationfill.value;
//     fetchData(location_got);
//     const location = document.getElementById('location').value;
//     const selectedButtons = document.querySelectorAll('.selected');
//     const preferences = [...selectedButtons].map(btn => btn.textContent);
    
//     });
document.getElementById("test-btn").addEventListener("click",()=>{
    const posNew = locationfill.value;
    fetchData(posNew);
});
////////////////////////////////////////////////////////
//this is just for the  testing 

// submit.addEventListener("click", ()=>{
//     preventDefault();
//     fetchData;
// })
async function fetchData(posNew) {
  const url = `/.netlify/functions/fetchData?${posNew}`; // Call the serverless function

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
