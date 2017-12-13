$(document).ready(function(){
  var imgItems = $('.Carousel li').length; //creo una variable para saber la cantidad de listas que tengo//
  var imgPos = 1;

  for(i = 1; i <= imgItems; i++){
    $('.sliding'). append('<li><span><i class="fa fa-circle" aria-hidden="true"></i></span> </li>');//agrego un elemento html a mi clase sliding
  }


  $('.Carousel li').hide();//oculto los img
  $('.Carousel li:first').show();//muestro los img que quiero
  $('.sliding li:first').css({'color':'gray'});//doy color a mi primer items

  //le doy el desplazamiento
  $('.sliding li').click(sliding); // Al dar click a mi lista se va ejecutar la funcion con el mismo nombre
  $('.rigth span').click(nextCarousel);
  $('.left span').click(prevCarousel);

  setInterval(function(){
    nextCarousel();
  }, 2500);

  //Funcionalidad

  function sliding(){
    var slidingPos = $(this).index() + 1;//numero de la posicion del elemento
    $('.Carousel li').hide();
    $('.Carousel li:nth-child('+ slidingPos +')').fadeIn();//muestro mi lista de imagen seleccionada

    $('.sliding li').css({'color':'orange'})
    $(this).css({'color':'gray'});

    imgPos = slidingPos;//combino el desplazamiento con flechitas y circulos
  }


//=============funcionalidad a las flechitas <..>
  function nextCarousel(){
    if(imgPos >= imgItems){imgPos = 1;}
    else {imgPos++;}

    $('.sliding li').css({'color':'orange'});
    $('.sliding li:nth-child('+ imgPos +')').css({'color':'gray'});

    $('.Carousel li').hide();
    $('.Carousel li:nth-child('+ imgPos +')').fadeIn();//muestro mi lista de imagen seleccionada
  }

  function prevCarousel(){
    if(imgPos <= 1){imgPos = imgItems;}
    else {imgPos--;}

    $('.sliding li').css({'color':'orange'});
    $('.sliding li:nth-child('+ imgPos +')').css({'color':'gray'});

    $('.Carousel li').hide();
    $('.Carousel li:nth-child('+ imgPos +')').fadeIn();//muestro mi lista de imagen seleccionada
  }




});
