// // import React from 'react';
// // import PlacesAutocomplete, {
// //   geocodeByAddress,
// //   getLatLng,
// // } from 'react-places-autocomplete';

// // class LocationSearchInput extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = { address: '' };
// //   }

// //   handleChange = address => {
// //     this.setState({ address });
// //   };

// //   handleSelect = address => {
// //     geocodeByAddress(address)
// //       .then(results => getLatLng(results[0]))
// //       .then(latLng => console.log('Success', latLng))
// //       .catch(error => console.error('Error', error));
// //   };

// //   render() {
// //     return (
// //       <PlacesAutocomplete
// //         value={this.state.address}
// //         onChange={this.handleChange}
// //         onSelect={this.handleSelect}
// //       >
// //         {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
// //           <div>
// //             <input
// //               {...getInputProps({
// //                 placeholder: 'Search Places ...',
// //                 className: 'location-search-input',
// //               })}
// //             />
// //             <div className="autocomplete-dropdown-container">
// //               {loading && <div>Loading...</div>}
// //               {suggestions.map(suggestion => {
// //                 const className = suggestion.active
// //                   ? 'suggestion-item--active'
// //                   : 'suggestion-item';
// //                 // inline style for demonstration purpose
// //                 const style = suggestion.active
// //                   ? { backgroundColor: '#fafafa', cursor: 'pointer' }
// //                   : { backgroundColor: '#ffffff', cursor: 'pointer' };
// //                 return (
// //                   <div
// //                     {...getSuggestionItemProps(suggestion, {
// //                       className,
// //                       style,
// //                     })}
// //                   >
// //                     <span>{suggestion.description}</span>
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           </div>
// //         )}
// //       </PlacesAutocomplete>
// //     );
// //   }
// // }


// {/* <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script> */}


// function getReverseGeocodingData(lat, lng) {
//   var latlng = new google.maps.LatLng(lat, lng);
//   // This is making the Geocode request
//   var geocoder = new google.maps.Geocoder();
//   geocoder.geocode({ 'latLng': latlng }, function (results, status) {
//       if (status !== google.maps.GeocoderStatus.OK) {
//           alert(status);
//       }
//       // This is checking to see if the Geoeode Status is OK before proceeding
//       if (status == google.maps.GeocoderStatus.OK) {
//           console.log(results);
//           var address = (results[0].formatted_address);
//       }
//   });
// }

// getReverseGeocodingData(5, 6)