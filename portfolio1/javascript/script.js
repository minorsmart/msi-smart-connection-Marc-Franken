var req = new XMLHttpRequest();
var url = "https://api.nasa.gov/planetary/apod?api_key=";
var api_key = "9zCEz4AvLoJfF29wHceugg1b8oxxM509TWNF1jUm";

req.open("GET", url + api_key);
req.send();

req.addEventListener("load", function(){
	if(req.status == 200 && req.readyState == 4){
  	var response = JSON.parse(req.responseText);
    document.getElementById("title").textContent = response.title;
    document.getElementById("date").textContent = response.date;
    document.getElementById("pic").src = response.hdurl;
    document.getElementById("explanation").textContent = response.explanation;
  }
})


$(function(){  googleTranslateElementInit
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
});



var coll = document.getElementsByClassName("collapsible-text");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

$(function(){
  var documentEl = $(document),
    fadeElem = $('.fade-scroll');

    documentEl.on('scroll', function() {
      var currScrollPos = documentEl.scrollTop();

        fadeElem.each(function(){
          var $this = $(this),
          elemOffsetTop = $this.offset().top;
          if (currScrollPos > elemOffsetTop) $this.css('opacity', 1 -(currScrollPos-elemOffsetTop)/800);

        });
    });
});

$(function(){
  var documentEl = $(document),
    fadeElem = $('.fade-scroll-banner');

    documentEl.on('scroll', function() {
      var currScrollPos = documentEl.scrollTop();

        fadeElem.each(function(){
          var $this = $(this),
          elemOffsetTop = $this.offset().top;
          if (currScrollPos > elemOffsetTop) $this.css('opacity', 1 -(currScrollPos-elemOffsetTop)/300);

        });
    });
});

function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}

(function newFact() {
  var facts = ['Alone we can do so little; together we can do so much. – Helen Keller', 
  'If everyone is moving forward together, then success takes care of itself. – Henry Ford', 
  'Many ideas grow better when transplanted into another mind than the one where they sprang up. – Oliver Wendell Holmes ',
  'If I have seen further, it is by standing on the shoulders of giants. – Isaac Newton',
  'It is the long history of humankind (and animal kind, too) that those who learned to collaborate and improvise most effectively have prevailed. – Charles Darwin',
  'Talent wins games, but teamwork and intelligence win championships." – Michael Jordan',
  'Individually, we are one drop. Together, we are an ocean. - Ryunosuke Satoro',
  'Not finance, not strategy. Not technology. It is teamwork that remains the ultimate competitive advantage, both because it is so powerful and rare. - Patrick Lencioni',
  'Surround yourself with a trusted and loyal team. It makes all the difference. - Alison Pincus',
  'Tough times don’t last. Tough teams do. - Robert Schuller',
  '"None of us is as smart as all of us. - Ken Blanchard',
  'The bigger the dream, the more important to the team. - Robin Sharma'];
  var randomFact = Math.floor(Math.random() * facts.length);
  document.getElementById('factDisplay').innerHTML = facts[randomFact];
})();



function goBack() {
  window.history.back();
}



