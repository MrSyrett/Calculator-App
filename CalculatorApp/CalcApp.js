$(document).ready(function(){
       var ray1 = "";
       $("#one").on('click', function(){
              $(".window").append(1);
              
       })
       $("#two").on('click', function(){
              $(".window").append(2);
       })
        $("#three").on('click', function(){
              $(".window").append(3);
       })
        $("#four").on('click', function(){
              $(".window").append(4);
       })
        $("#five").on('click', function(){
              $(".window").append(5);
       })
        $("#six").on('click', function(){
              $(".window").append(6);
       })
        $("#seven").on('click', function(){
              $(".window").append(7);
       })
        $("#eight").on('click', function(){
              $(".window").append(8);
       })
        $("#nine").on('click', function(){
              $(".window").append(9);
       })
        $("#zero").on('click', function(){
              $(".window").append(0);
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
              $(".window").text('');
       })
       $("#sub").on('click', function(){
              ray1 = $('.window').text() + " - ";
              $(".window").text('');
       })
       $("#divi").on('click', function(){
              ray1 = $('.window').text() + " / ";
              $(".window").text('');
       })
       $("#mult").on('click', function(){
              ray1 = $('.window').text() + " * ";
              $(".window").text('');
       })
       $("#perc").on('click', function(){
              var perc = parseInt($('.window').text()) / 100;
              percRez = perc * parseInt(ray1);
              $('.window').text(percRez);
       })
       $("#equal").on('click', function(){
              ray1 += $('.window').text();
              //var sum = parseInt(ray1[0]) + parseInt(ray2[0]);
              var result = eval(ray1);
              $(".window").text(result);
       })
});