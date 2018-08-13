$("document").ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();

    var fav1 = $("input#fav1").val();
    var fav2 = $("input#fav2").val();
    var fav3 = $("input#fav3").val();
    var fav4 = $("input#fav4").val();

    var favoriteThings = [fav1, fav2, fav3, fav4];


    $("ul#output").append("<li>" + favoriteThings[0] + "</li>");
    $("ul#output").append("<li>" + favoriteThings[1] + "</li>");
    $("ul#output").append("<li>" + favoriteThings[2] + "</li>");

  });
});
