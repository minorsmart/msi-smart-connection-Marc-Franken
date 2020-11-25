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


