$(document).ready(function(){
       var ray1 = "";
       var re = /[+-/*]/g;
       $("#one").on('click', function(){
        if ($("#add").hasClass("clicked") || $("#sub").hasClass("clicked") || $("#divi").hasClass("clicked") || $("#mult").hasClass("clicked")){
              $(".window").text('');
              $("#add").removeClass("clicked");
              $("#sub").removeClass("clicked");
              $("#divi").removeClass("clicked");
              $("#mult").removeClass("clicked");
        }
              $(".window").append(1);
       })
       $("#two").on('click', function(){
        if ($("#add").hasClass("clicked") || $("#sub").hasClass("clicked") || $("#divi").hasClass("clicked") || $("#mult").hasClass("clicked")){
              $(".window").text('');
              $("#add").removeClass("clicked");
              $("#sub").removeClass("clicked");
              $("#divi").removeClass("clicked");
              $("#mult").removeClass("clicked");
        }
              $(".window").append(2);
       })
        $("#three").on('click', function(){
              $(".window").append(3);
       })
        $("#four").on('click', function(){
        if ($("#add").hasClass("clicked") || $("#sub").hasClass("clicked") || $("#divi").hasClass("clicked") || $("#mult").hasClass("clicked")){
              $(".window").text('');
              $("#add").removeClass("clicked");
              $("#sub").removeClass("clicked");
              $("#divi").removeClass("clicked");
              $("#mult").removeClass("clicked");
        }
              $(".window").append(4);
       })
        $("#five").on('click', function(){
        if ($("#add").hasClass("clicked") || $("#sub").hasClass("clicked") || $("#divi").hasClass("clicked") || $("#mult").hasClass("clicked")){
              $(".window").text('');
              $("#add").removeClass("clicked");
              $("#sub").removeClass("clicked");
              $("#divi").removeClass("clicked");
              $("#mult").removeClass("clicked");
        }
              $(".window").append(5);
       })
        $("#six").on('click', function(){
        if ($("#add").hasClass("clicked") || $("#sub").hasClass("clicked") || $("#divi").hasClass("clicked") || $("#mult").hasClass("clicked")){
              $(".window").text('');
              $("#add").removeClass("clicked");
              $("#sub").removeClass("clicked");
              $("#divi").removeClass("clicked");
              $("#mult").removeClass("clicked");
        }
              $(".window").append(6);
       })
        $("#seven").on('click', function(){
        if ($("#add").hasClass("clicked") || $("#sub").hasClass("clicked") || $("#divi").hasClass("clicked") || $("#mult").hasClass("clicked")){
              $(".window").text('');
              $("#add").removeClass("clicked");
              $("#sub").removeClass("clicked");
              $("#divi").removeClass("clicked");
              $("#mult").removeClass("clicked");
        }
              $(".window").append(7);
       })
        $("#eight").on('click', function(){
        if ($("#add").hasClass("clicked") || $("#sub").hasClass("clicked") || $("#divi").hasClass("clicked") || $("#mult").hasClass("clicked")){
              $(".window").text('');
              $("#add").removeClass("clicked");
              $("#sub").removeClass("clicked");
              $("#divi").removeClass("clicked");
              $("#mult").removeClass("clicked");
        }
              $(".window").append(8);
       })
        $("#nine").on('click', function(){
        if ($("#add").hasClass("clicked") || $("#sub").hasClass("clicked") || $("#divi").hasClass("clicked") || $("#mult").hasClass("clicked")){
              $(".window").text('');
              $("#add").removeClass("clicked");
              $("#sub").removeClass("clicked");
              $("#divi").removeClass("clicked");
              $("#mult").removeClass("clicked");
        }
              $(".window").append(9);
       })
        $("#zero").on('click', function(){
        if ($("#add").hasClass("clicked") || $("#sub").hasClass("clicked") || $("#divi").hasClass("clicked") || $("#mult").hasClass("clicked")){
              $(".window").text('');
              $("#add").removeClass("clicked");
              $("#sub").removeClass("clicked");
              $("#divi").removeClass("clicked");
              $("#mult").removeClass("clicked");
        }
              $(".window").append(0);
       })
         $("#dot").on('click', function(){
        if ($("#add").hasClass("clicked") || $("#sub").hasClass("clicked") || $("#divi").hasClass("clicked") || $("#mult").hasClass("clicked")){
              $(".window").text('');
              $("#add").removeClass("clicked");
              $("#sub").removeClass("clicked");
              $("#divi").removeClass("clicked");
              $("#mult").removeClass("clicked");
        }
              $(".window").append('.');
       })
       $("#clear").on('click', function(){
              $('.window').text('');
       })
        $("#allClear").on('click', function(){
              $('.window').text('');
              ray1 = [];
       })
       $("#add").on('click', function(){
              ray1 = $('.window').text() + " + ";
              $("#add").addClass("clicked");
       })
       $("#sub").on('click', function(){
              ray1 = $('.window').text() + " - ";
              $("#sub").addClass("clicked");
       })
       $("#divi").on('click', function(){
              ray1 = $('.window').text() + " / ";
              $("#divi").addClass("clicked");
       })
       $("#mult").on('click', function(){
              ray1 = $('.window').text() + " * ";
              $("#mult").addClass("clicked");
       })
       $("#perc").on('click', function(){
              var perc = parseInt($('.window').text()) / 100;
              percRez = perc * parseInt(ray1);
              $('.window').text(percRez);
       })
       $("#equal").on('click', function(){
              ray1 += $('.window').text();
              var result = eval(ray1);
              $(".window").text(result);
       })
});