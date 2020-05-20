//image slider
$(document).ready(function(){
  $('#arrow-right').on('click', function(){
    let currentImages = $('.active');
    let next = currentImages.next();

    if (next.length) {
      currentImages.removeClass('active').css('z-index', -10);
      next.addClass('active').css('z-index', 10);
    }
    console.log('left-clicked-success');
  });
  $('#arrow-left').on('click', function(){
    let currentImages = $('.active');
    let prev = currentImages.prev();
    if (prev.length) {
      currentImages.removeClass('active').css('z-index',-10);
      prev.addClass('active').css('z-index',10);
    }
    console.log('left-clicked-success');
  });
});
