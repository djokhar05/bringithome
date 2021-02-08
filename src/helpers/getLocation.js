import { PermissionsAndroid, Platform, View, BackHandler, Text } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';
import store from '../redux/store';
import { locationFound } from '../redux/actions/locationActions';

//Make sure to double check your API_STRING;

let error = ''; //Global variable to hold error

//This method is used for requesting permssion
// from a user
export const seekLocationPermission = async () => {
    if(Platform.OS === 'ios'){
        //Get code from 
        //https://aboutreact.com/react-native-geolocation/  
        //this.getOneTimeLocation();
        //this.subscribeLocationLocation();
        console.log('IOS Specific')
    } else {
        console.log("Asking Permssion...");
        //Ask the user to garnt permission
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
                title: 'Location Access Required',
                message: `We need access to your location, so we can only show you vendors around your area.`
            }
        )
        
        // Granted, call the getOneTimeLocation
        //to actually retrieve th elocation
        if(granted === PermissionsAndroid.RESULTS.GRANTED){
            console.log("Getting location...");

            Geolocation.getCurrentPosition(
            position => {
                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude;
                
                //Use an IIFE because the called function returns a promise;
                (async () =>{
                    let result = await fetchLocationName(latitude,longitude);
                    //console.log(result);
                    store.dispatch(locationFound(result));
                })();
                
            }, err => {
                console.log(err);
                error = `Something went wrong getting your current position, please select it manually`
            }, {
                enableHighAccuracy: true,
                timeout: 30000,
                maximumAge: 10000
            })
            
            
            
        } else if(granted !== PermissionsAndroid.RESULTS.GRANTED) {
            return {error: `You have to grant access to your location to use this app seamlessly.`}
        } else {
            return {error: `Your Location is turned off, either you turn it on and try again or select location manualy`}
        }
    }
}


//Try to resolve the coordinates to city, state, ....
const fetchLocationName = async (latitude,longitude) => { 
    console.log("Getting Location name...");
    //api from https://opencagedata.com/dashboard#api-keys
    let API_KEY = `c5aa25caa3fb4213a6d3372c210f43b1`;
    let api_string = `https://api.opencagedata.com/geocode/v1/json?key=${API_KEY}&q=${latitude}%2C${longitude}&pretty=1&no_annotations=1`;

    try {
        const result = await axios.get(api_string);
        const data = await result.data;
        
        let address = data.results[0].formatted;
        let suburb = data.results[0].components.village || data.results[0].components.county || data.results[0].components.suburb 
    
        return {address, suburb};
    } catch(err) {
        error = `Sorry, we couldn't Get the name of your vicinity, please select it manually`
    }
};