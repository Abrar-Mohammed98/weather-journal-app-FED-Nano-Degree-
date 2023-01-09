// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// The URL to retrieve weather information from his API (country : US)
const baseURL ="https://api.openweathermap.org/data/2.5/weather?zip=";
// Personal API Key for OpenWeatherMap API
const apiKey= ",&appid=56b18da82ce2ca6f91eef8c812fd35ce&units=metric";
// URL server to post data
const server = "http://127.0.0.1:8000";

// Event listener to add function to existing HTML DOM element
const SubmitBut = document.getElementById('generate');

SubmitBut.addEventListener("click",() => {
  
    const zipCode = document.getElementById("zip").value;
    const addFeel = document.getElementById("feelings").value;

  getWeatherData(baseUrl,apiKey, zipCode)
  .then((data) => {

      postData(server +{newDate, city,temp:Math.round(temp), feelings});
      updatingUI();
      document.getElementById('entry').style.opacity = 1;
    
});
});



/* Function called by event listener */
/* Function to GET Web API Data*/
const getWeatherData = async (baseUrl,apiKey, zipCode) => {
    try {
      const res = await fetch(baseUrl,apiKey, zipCode);
      const data = await res.json();
      return data;

    } catch (error) {
      console.log("error", error);
    }
  };
  
/* Function to POST data */

const postData = async (url = "", data = {}) => {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await req.json();
        console.log(newData,`data saved`);
        return newData;

    } catch (error) {
        console.log("error", error);
    }
};

//Function to GET Project Data.
const updatingUI = async () => {
    const req = await fetch(server + "getAll");
    try {
      const NewData = await req.json();
  
      document.getElementById("date").innerHTML = NewData.newDate;
      document.getElementById("city").innerHTML = NewData.city;
      document.getElementById("temp").innerHTML = NewData.temp + '&degC';
      document.getElementById("description").innerHTML = NewData.description;
      document.getElementById("content").innerHTML = NewData.feelings;
    } catch (error) {
      console.log(error);
    }
  };