var palindrome = function(word) {
  if (typeof word === "number") {
    word = word.toString();
  }
  var originalWord = word.replace(/\s/g,"");
  originalWord = originalWord.split('');
  var reverseWord = originalWord.slice().reverse();
  var result = true;
  for (var i =0; i < originalWord.length; i++) {
    if (originalWord[i] != reverseWord[i]) {
      result = false;
    }
  }
  return result;
};

$(document).ready(function() {
  $("form#palindrome").submit(function(event){
    var sentence = ($("input#sentence").val());
    var result = palindrome(sentence)

    $(".palindrome").text(sentence);
    $(".result").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
