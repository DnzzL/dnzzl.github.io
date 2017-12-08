/**
 * Fullpage.js
 */
$(document).ready(function () {
    $('#fullpage').fullpage({
        //Navigation
        anchors: ['home', 'bio', 'etudes', 'projets', 'skills', 'contact', 'credits'],
        slidesNavigation: true,
        lazyLoading: true,
        responsiveWidth: 1,
		responsiveHeight: 1,
        responsiveSlides: true,
        scrollOverflow: true,
        verticalCentered: true,

        onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
});

/* Header */
var mouseX, mouseY;
var ww = $( window ).width();
var wh = $( window ).height();
var traX, traY;
$(document).mousemove(function(e){
  mouseX = e.pageX;
  mouseY = e.pageY;
  traX = ((4 * mouseX) / 570) + 40;
  traY = ((4 * mouseY) / 570) + 50;
  console.log(traX);
  $(".title").css({"background-position": traX + "%" + traY + "%"});
});


/* Timeline */
jQuery(document).ready(function($){
	var timelineBlocks = $('.cd-timeline-block'),
		offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) 
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}
});