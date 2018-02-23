$('.content').hide();
  $('.listelement').on('click', function(){
    if(!($(this).children('.content').is(':visible'))){
      $('.content').slideUp();
      $(this).children('.content').slideDown();
    } else {
      $('.content').slideUp();
    }
  });