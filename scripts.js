  console.log('sourced');
$('document').ready(function(){
  console.log('in doc ready');
var movieList=[];

$('#searchMov').on('click', function () {
  console.log('in the onclick');


var movieName=$('#moviesIn').val();
  console.log(movieName);
var searchMov='http:www.omdbapi.com/?s=' + movieName;
  $.ajax({
    url:searchMov,
    dataType:'JSON',
    success: function(data) {
      // console.log('SUCCESS!');
      // console.log('data', data.Search);
      var results=data.Search;
      movieList.push(results);
      console.log('local movie list array',movieList);
      displayMovies();

    }//success
  });//ajax

})//#searchMov
var displayMovies = function () {
  console.log('in displayMovies');
  console.log('in local array',movieList);
  $('#outputDiv').textContent="";
  for (var i = 0; i < movieList.length; i++) {
    var poster= document.createElement('img')
    var newHeader= document.createElement('h2');
    var newParagraph=document.createElement('p');
    
    console.log(poster);
    console.log(newHeader);
    console.log(newParagraph);

    poster.textContent= movieList[i].Poster;
    newHeader.textContent= movieList[i].Title;
    newParagraph.textContent= movieList[i].Year;



    $('#outputDiv').append(newHeader);
    $('#outputDiv').append(poster);
    $('#outputDiv').append(newParagraph);

  }//for loop


};//displayStudents


})//doc ready
