$(document).ready(function(){
    $(".bxslider").bxSlider()({
       
    }); 
});

$(document).ready(function(){
    $(".accordion").accordion({
       defaultOpen:''
    }); 
});

$(document).ready(function($){
    $('.primary-nav-trigger').on('click', function(){
        $('.menu-icon').toggleClass('is-clicked');
        $('.primary-nav').toggleClass('is-visible');
        $('body').toggleClass('overflow-hidden');
    });
});

$(document).ready(function($){
  $('.primary-nav-button').on('click', function(){
      $('.menu-icon').toggleClass('is-clicked');
      $('.primary-nav').toggleClass('is-visible');
      $('body').toggleClass('overflow-hidden');
  });
});

$( function() {
    $( "#accordion" )
      .accordion({
        heightStyle: "content",
        header: "> div > h3"
      })
      .sortable({
        axis: "y",
        handle: "h3",
        stop: function( event, ui ) {
          // IE doesn't register the blur when sorting
          // so trigger focusout handlers to remove .ui-state-focus
          ui.item.children( "h3" ).triggerHandler( "focusout" );
 
          // Refresh accordion to handle new order
          $( this ).accordion( "refresh" );
        }
      });
  } );

  