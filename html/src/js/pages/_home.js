/**
 * Home
 */
export default function() {
  // jQuery Ajax for feed Instagram Graph API 



  function resizeTextInsta() {
    const $width = jQuery('.section-instagram .slick-center').width();
    const $pos = jQuery('.section-instagram .slick-center').offset().left + jQuery('.section-instagram .slick-center').width();
    const $target = jQuery('.section-instagram .block-text');
    $target.css({ 'left': $pos, 'width': $width });
    return false;
  };
  $(document).on('click', '.anchor', function() {
    var $target = $(this).attr('href');
    var $offset = $($target).position().top;
    $('body,html').animate({ scrollTop: $offset }, 1000);
    return false;
  });

  resizeTextInsta();
  $(window).on('resize', function() {
    resizeTextInsta();
  });




}