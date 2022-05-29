/**
 * Slider
 */
export default function() {
  const resizeTextInsta = () => {
      setTimeout(function() {
        const $width = jQuery('.section-instagram .slick-center').width();
        const $pos = jQuery('.section-instagram .slick-center').offset().left + jQuery('.section-instagram .slick-center').width();
        const $target = jQuery('.section-instagram .block-text');
        $target.css({ 'left': $pos, 'width': $width });
        console.log('resizeTextInsta');
      }, 100);
      return false;
    }
    /* function resizeTextInsta() {
      const $width = jQuery('.section-instagram .slick-center').width();
      const $pos = jQuery('.section-instagram .slick-center').offset().left + jQuery('.section-instagram .slick-center').width();
      const $target = jQuery('.section-instagram .block-text');
      $target.css({ 'left': $pos, 'width': $width });
      return false;
    }*/
  if ($('#instabox').length != 0) {
    var token = 'IGQVJVbzM3VEdtVEh2T1J3M1VhWDVUeFN6T3VJOE1wQndsNEc5eG1ILVdDV0w5bzNDOUNvekEyVEpxYnJDcE56amxFUGZAuWldRQjlGOUdUWjNMTWpQMjd3QkhXbUNfd1pndGM1cTNPdWJBN0pOWFRrWgZDZD';
    var fields = 'id,media_type,media_url,permalink,caption';
    var limit = 10;
    var html = '';
    $.ajax({
      url: 'https://graph.instagram.com/me/media?fields=' + fields + '&access_token=' + token + '&limit=' + limit,
      type: 'GET',
      success: function(response) {
        $.each(response.data, function(index, value) {
          if (value.media_type === 'IMAGE') {
            html = '<div class="item"><img src="' + value.media_url + '" alt="' + value.caption + '"></div>';
            $('#instabox').append(html);
          }
        });
      },
      error: function() {
        var html = '<div class="class-no-data">No Images Found</div>';
        $('#instabox').append(html);
      },
      complete: function() {
        setTimeout(function() {
          const $instaslider = $('#instabox');
          $instaslider.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
            prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
            centerMode: true,
            focusOnSelect: true,
            adaptiveHeight: true,
            centerPadding: '170px',
            responsive: [{
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                centerPadding: '20vw',
              }
            }]
          });
          resizeTextInsta();
          $(window).on('resize', function() {
            console.log('oi');
            resizeTextInsta();
          });
        }, 200);
      }
    });
  }

}