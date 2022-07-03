/*AIzaSyDE0yJyoQ5kSbOD3H9XGYB2NNBAXc9vPvs*/
const options = {
  enableHighAccuracy: true,
  timeout:5000,
  maximunAge: 0

};

function success (pos){
  const crd = pos.coords;
  let link = "https://maps.googleapis.com/maps/api/geocode/json?latlng="; 
  let latitude = crd.latitude;
  let longitude = crd.longitude;
  let googleKey= "&key=AIzaSyDE0yJyoQ5kSbOD3H9XGYB2NNBAXc9vPvs";
  let completeLink= link +latitude+","+longitude+googleKey 

 console.log(completeLink)
      fetch(completeLink)
      .then(response=>response.json())
      .then(data=>{
        console.log(data);
        let city = data["results"]["5"]["address_components"][2]["long_name"];

        console.log(city);
        document.querySelector(".city").innerText = "Weather in " + city;
         let beginningOfTheLink="https://api.openweathermap.org/data/2.5/weather?q=";
         let appId="&appId=fb7d1b30a7118355b40022d2ba41b9b6";
         let metricUnit="&units=metric";
         let newLink=beginningOfTheLink+city+appId+metricUnit;
         console.log(newLink) 
         
        fetch(newLink)
        .then(info=>info.json())
        .then(tempInfo=>{
           
          let temp = tempInfo["main"]["temp"];
          let myButton = document.getElementById("button");
          myButton.addEventListener("click",myFunction)
          console.log(temp)
          let yourButton=document.getElementById("yourButton");
          yourButton.addEventListener("click",yourFunction)
          console.log(tempInfo)
          
           
           function myFunction(){
                 let fahrenheit = Math.round(temp) + 32;
                 document.querySelector(".temp").innerText=fahrenheit+" ºF"
                 if(temp>20){
                     alert("calor") 

                 }else{
                   alert("frío")
                 }
           }

           function yourFunction(){
                 document.querySelector(".temp").innerText=Math.round(temp)+" ºC"; 
                 if(temp>20){
                     alert("calor") 
                    // document.querySelector(".icon").src =;  
                 }else{
                   alert("frío")
                 } 
           }


           })
        })
      

     }
   


function error(err){
  console.warn(`ERROR(${err.code}): ${err.message}`);
  }


navigator.geolocation.getCurrentPosition(success,error,options);



 
























































/*const options = {
	enableHighAccuracy: true,
	timeout: 5000, 
	maximumAge: 0
};

function success(pos){
	const crd = pos.coords;

	console.log("Your current position is: ");
	console.log(` Latitude: ${crd.latitude}`);
	console.log(`Longitude: ${crd.longitude}`);
	console.log(`More or less ${crd.accuracy} meters.`);
     
   let latitude = `${crd.latitude}`;
    let longitude = `${crd.longitude}`; 
    let link = "maps.googleapis.com/maps/api/geocode/json?latlng=";     
    let coordinates = latitude+", "+longitude; 
    let myGoogleKey = "&key=AIzaSyDE0yJyoQ5kSbOD3H9XGYB2NNBAXc9vPvs";
    let completeLink = link+coordinates+myGoogleKey;

          console.log(completeLink);
    fetch(completeLink)
        .then(response=>response.json())
        .then(data=>console.log(data))   

     

} */

