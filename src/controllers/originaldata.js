
import Promise from 'promise-polyfill'; 
if (!window.Promise) {
  window.Promise = Promise;
}
import 'whatwg-fetch';



// ************** DOCS HERE ******************

  //https://developers.themoviedb.org/3/getting-started/introduction

// *******************************************


// example successfull call -> https://api.themoviedb.org/3/search/movie?api_key=40c781f4f82334b037fc6d9c33cc1c58&query=batman

function fetchWrapper(args){
  //args[0] is 'movie', args [1] is 'batman'..
  var baseUrl = 'https://api.themoviedb.org/3/search/';
  var apiKey = '40c781f4f82334b037fc6d9c33cc1c58';
  console.log(baseUrl, apiKey)
  var endPoint; //<- create the endpoint call here
  var request = new Request(endPoint)
  var fPointer = fetch(request)
  .then(response =>{
    if (!response.ok) { throw Error(response.statusText); }
    return response;
  })
  .then(response => response.json());
  return fPointer;
}



// WINDOW.ORIGINALDATA
// originalData is meant to be a perfect copy of the data from the server
// originalData gets assigned to the window in windowDataObject
var originalData = {};




// get from an endpoint and store it 
if (!originalData['movieData']) originalData['movieData'] = null;
originalData['_getMovieData'] = (searchQuery) => {
  var fPointer = fetchWrapper(searchQuery);
  fPointer.then(data => {
    originalData['movieData'] = data;
  });
  return fPointer;
};




module.exports = originalData;




