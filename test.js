const put = document.querySelector("p");
async function fetchData() {
  const url = '/.netlify/functions/fetchData'; // Call the serverless function

  try {
    const response = await fetch(url);
    const data = await response.json();
    put.innerText = data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
