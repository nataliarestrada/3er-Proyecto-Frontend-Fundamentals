var type = new Typed('.typing-text',{
    strings : [,'student', 'future engineer','full stack developer', 'content creator', 'enthusiastic' ],
    typeSpeed: 120,
    loop:true
});



$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
});


const contactForm = document.getElementById("formContacto")
const errorDiv = document.getElementById("error")

contactForm.onsubmit = function(event){
    event.preventDefault()
    console.log(event)
    const nombre = event.target.name.value
    const email = event.target.email.value
    const asunto = event.target.asunt.value
    const mensaje = event.target.message.value

    
    if(nombre!="" && email!="" && asunto!="" && mensaje!=""){
        console.log("Datos correctos!")
        event.target.submit()
    }else{
        errorDiv.innerHTML=""
        const p = document.createElement("p")
        p.innerText = "Datos incorrectos! Favor de verificar"
        errorDiv.appendChild(p)
    }

    // Regular expresions
}