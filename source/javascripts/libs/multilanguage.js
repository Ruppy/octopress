function showEnglish() {
  document.cookie="language=#en; expires=Thu, 18 Dec 2999 12:00:00 GMT";
  $('.english').show();
  $('.portuguese').hide();
}

function showPortuguese() {
  document.cookie="language=#pt; expires=Thu, 18 Dec 2999 12:00:00 GMT";
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
  }
  else if(window.location.hash == "#en") {
    showEnglish();
  }
  else {
    if (getCookie("language") == "#pt") {
      window.location.hash = "#pt"
      showPortuguese();
    }
    else {
      window.location.hash = "#en"
      showEnglish();
    }

  }
});

function getCookie(cname)
{
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++)
    {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
  return "";
}