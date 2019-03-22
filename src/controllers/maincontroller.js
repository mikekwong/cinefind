import dispatcher from 'libraries/bevent.js';


//   /******** CALL FOR DATA **********/

dispatcher.on('fetchAPI', fetchAPI);
function fetchAPI(searchQuery){
  window.originalData._getMovieData(searchQuery)
  .catch(err => {
    console.error(err); 
  })
  .then(()=>{
    if (window.originalData['movieData']) {
      console.log('call successful')
      ingest_movieData();
    } 
  });
}


//   /******** INGEST AND TRANSFORM DATA **********/

function ingest_movieData(){
  var movieData = window.originalData.movieData;
  //transform it in some useful way here
  var transformedMovieData = movieData; 
  //window.stores is where this movie data is acessible from
  window.stores.movieData = transformedMovieData;
  //update the component
  dispatcher.trigger('updateTestPage');
}



var setup = ()=>{
  //console.log('main controller imported')
}

module.exports = {
  setup
}