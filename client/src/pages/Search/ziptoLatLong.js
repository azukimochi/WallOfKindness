import axios from "axios"
function lonlat() {
	
	let input = document.getElementById('zip');	
	let lonlat = document.getElementById('lonlat');
	
	if (event.keyCode === 13 && input.value.length === 6) {

		let address = input.value;

        axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
            params:{
                address:address,
                key:'AIzaSyC_nTVvqzEckQ6WzQmCV_POw6a80BmOQPo'

            }
        })
        .then(function(response){
            console.log(response.data.results[0].geometry.location.lat, response.data.results[0].geometry.location.lng);


        })
      
	} 
}



