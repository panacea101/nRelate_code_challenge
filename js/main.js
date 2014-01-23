$(function(){
  console.log("LOADED");
  getResponse();
});

var nRelate = {
  insert_html : function(response) {
    createPlaceholders(response);
    parseString(".nr_post_title");
    createOverlay();
  }
}

var createOverlay = function() {
  $(".response-d .nr_panel").hover(function(){
    $( this ).find(".nr_text").animate({
      top : "+=140px"
    }, 500);
    console.log("hello");
  },
  function() {
    $( this ).find(".nr_text").animate({
      top : "-=140px"
    }, 500);
  });
}

var createPlaceholders = function(response) {
  var responseHolders = ["a", "b", "c", "d"];
  for(var i = 0; i < responseHolders.length; i++) {
    var div = ($("<div>"))
                .addClass("response-" + responseHolders[i])
                .append($(response));
    $(".nrelate-placeholder").append(div);
    $(".response-a .nr_source").remove();
  }
}

var parseString = function(element) {
  var elementArr = $(element);
  _.each(elementArr, function(htmlElement){
    var text = $(htmlElement).text();
    if ( text.length >= 35 ) {
      var parsedText = text.substr(0, 35) + "...";
      $(htmlElement).text(parsedText);
    } 
  });
}

var getResponse = function() {
  $.ajax({
      cache: false,
      dataType: "jsonp", 
      type: "GET",
      crossDomain: true,
      jsonp: true,  
      url: "http://api.nrelate.com/common/frontend_test_response.php",
      async: true, // tried true
      error: function (XMLHttpRequest, textStatus, errorThrown) {
           console.log(textStatus, errorThrown);
      }
  });
}





