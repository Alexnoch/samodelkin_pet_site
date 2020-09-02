var options={
    interval:3000,
    pause:'hover',
    wrap:true
};
/* $('#bestCarsCarousel').carousel(options); */

/* function dump(obj, obj_name) {
    var result = ""
    for (var i in obj)
      result += obj_name + "." + i + " = " + obj[i] + "\n";
    return result
  }

  console.log(window, window); */





  
 


  var timer;
  var z = document.getElementById('kok');
  z.addEventListener('click',noch,false);

  function noch(){
  var scrolled = window.pageYOffset;
  clik();

function clik(){
   
    if(scrolled>50){                                  // Если текущая высота больше 50 то выполнить код
                                                 // Присвоить переменной  scrollTop результат 24-1000 = -978 
         window.scrollTo(0, scrolled);             // Переместить страницу на текущую координату а именно 1000
         scrolled = scrolled - 100;                 // Присвоить координате текущий позиции новую позицию выражением - 100
         timer = setTimeout(clik,100);              // присвоить переменной таймер таймер  каждые 100мс вызывать функцию клик
    }
    else {
        clearTimeout(timer);
        window.scrollTo(0,0);
    } 
}         
};





