export const API_URL = getUrl();


function getUrl() {
   if (window.location.host.indexOf('localhost') != -1) {
       return 'http://localhost:4000';
   } else {
       return 'https://findafourth.herokuapp.com';
   }
 }
