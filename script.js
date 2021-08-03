async function myfunc(){
  var response = await fetch("quotes.json");
  var responseJSON = await response.json();
  //var quote = responseJSON[3].quotes;
  //var movie = responseJSON[3].movie;
  //console.log(quote);
  //console.log(movie);
  var rand = Math.floor(Math.random() * 8);
  var quote = responseJSON[rand].quotes;
  var movie = responseJSON[rand].movie;
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("movie").innerHTML = "-" + movie;
}


