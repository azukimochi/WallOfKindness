// const axios =require('axios')
import axios from "axios"
function lonlat() {
	
	var input = document.getElementById('zip');	
	var lonlat = document.getElementById('lonlat');
	
	if (event.keyCode === 13 && input.value.length === 6) {

		var zipCode = input.value;

        axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
            params:{
                address:zipCode,
                key:'AIzaSyC_nTVvqzEckQ6WzQmCV_POw6a80BmOQPo'

            }
        })
        .then(function(response){
            console.log(response.data.results[0].geometry.location.lat, response.data.results[0].geometry.location.lng);


        })
      
	} 
}



