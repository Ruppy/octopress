function showEnglish() {
  $('.english').show();
  $('.portuguese').hide();
}

function showPortuguese() {
  $('.english').hide();
  $('.portuguese').show();
}

$( document ).ready(function() {
  $(".english-button").click( function() {
    showEnglish();
  });

  $(".portuguese-button").click( function() {
    showPortuguese();
  });

  if(window.location.hash == "#pt") {
    showPortuguese();
  } else {
    showEnglish();
  }
});