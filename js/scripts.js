var flavors = [];
$(document).ready(function() {
  $("form#ice-cream-flavors").submit(function(event) {
    event.preventDefault();
    var input = $("input#flavors").val();
    flavors.push(input);
  });
  $("form#my-favorite-flavors").submit(function(event) {
    event.preventDefault();
    for(index = 0; index < flavors.length; index += 1) {
      flavors[index]
      $(".icecreamflavors").append("<li>" + flavors[index] + "</li>")
    };
  });
});
