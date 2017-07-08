var response;
$(function() {
  response = function(definitions) {
    if(definitions.length == 0) {
      $("div").empty().html("<p>Word not found.</p>");
      return;
    }
    var output = "";
    for(var i = 0; i < definitions.length; i++) {
      var definition = definitions[i];
      if(!i || definition.attributionText != definitions[i-1].attributionText)
        output += "<h3>" + definition.attributionText + "</h3>";
      output += "<p>" + definition.partOfSpeech + ": " + definition.text + "</p>"
    }
    $("div").empty().html(output);
  }

  $("input").keydown(function(event) {
    if(event.which == 13) {
      $("head").append($("<script>").attr("src", "https://api.wordnik.com/v4/word.json/" + $(this).val() + "/definitions?sourceDictionaries=all&api_key=e08c4dfc13c1234cd80040fccef03a5ef76e72b854c08995f&callback=response"));
      $(this).val("");
    }
  });

});
