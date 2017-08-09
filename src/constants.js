export const API_URL = getUrl();
export const HOST_URL = getHostUrl();


function getUrl() {
  const PROXY_URL = 'https://galvanize-cors-proxy.herokuapp.com/';
   if (window.location.host.indexOf('localhost') != -1) {
       return 'http://localhost:4000';
   } else {
       return `https://findafourth.herokuapp.com`;
   }
 }

 function getHostUrl() {
    if (window.location.host.indexOf('localhost') != -1) {
        return 'http://localhost:3000';
    } else {
        return 'https://find-a-fourth-1495660183624.firebaseapp.com';
    }
  }
