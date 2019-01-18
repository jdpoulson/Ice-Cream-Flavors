var flavors = [];
$(document).ready(function() {
  $("form#ice-cream-flavors").submit(function(event) {
    event.preventDefault();
    var input = $("input#flavors").val();
    flavors.push(input);
  });
  $("form#my-favorite-flavors").submit(function(event) {
    event.preventDefault();
    flavors.forEach(function(flavor) {
      $(".icecreamflavors").show();
      $(".icecreamflavors").append("<li>" + flavor + "</li>");
    });
  });
});
