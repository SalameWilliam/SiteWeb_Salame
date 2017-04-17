/**
 * Created by Okewii on 10/04/2017.
 */
$(document).ready(function(){

    var map;
    map = new GMaps({
        div: '#gmap',
        lat: 50.583663,
        lng: 4.058532
    });

    map.addMarker({
        lat: 50.583663,
        lng: 4.058532,
        title: 'Cabinet Dr.Salame',
        infoWindow: {
            content: '<p style="text-align: center">Cabinet Dr.Salame</p>'
        }
    });

    $('.leftMenu').click(function(event) {


        $('.midMenu').removeClass("underline");
        $('.rightMenu').removeClass("underline");
        $(this).addClass("underline");

        $( ".first.top" ).finish().animate({
            "margin-left":"0"
        }, 1000, $.bez([0.645, 0.045, 0.355, 1]));


    });

    $('.midMenu').click(function(event) {


        $('.leftMenu').removeClass("underline");
        $('.rightMenu').removeClass("underline");
        $(this).addClass("underline");

        $( ".first.top" ).finish().animate({
            "margin-left":"-100%"
        }, 1000,$.bez([0.645, 0.045, 0.355, 1]));


    });

    $('.rightMenu').click(function(event) {


        $('.leftMenu').removeClass("underline");
        $('.midMenu').removeClass("underline");
        $(this).addClass("underline");

        $( ".first.top" ).finish().animate({
            "margin-left":"-200%"
        }, 1000, $.bez([0.645, 0.045, 0.355, 1]));

    });
});