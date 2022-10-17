//Use NASA's API to return all of their facility locations (~400). Display the name of the facility, its location, and the weather at the facility currently.

const api_key = 'e192de5b329a1ce2533b6b552cfd96e7'

const getFacility = () => {
  fetch(`https://data.nasa.gov/resource/gvk9-iz74`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.forEach((element,i) => {
      let ul = document.querySelector('ul');
      let li = document.createElement('li');
      let lat = data.location.latitude
      let lon = data.location.longitude
      
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=imperial`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        // let temperature = Math.floor(data.main.temp)

        li.innertext = `Facility Name: ${data.facility}, City: ${data.city}, State: ${data.state}, Temperature: ${weather.main.temp}`
        ul.appendChild(li)

      });
    });
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });
};

document.querySelector("button").addEventListener("click", getFacility);

