$( document ).ready(
  function() {

    //showing the items-list and hiding it
    $(".cart-icon").click(function() {
         $(".cart-container .card").slideToggle(250);
      });
     
      // defining a slide index to start the count
      var slides= $(".slide");
      var thumbs = $(".thumb");
      var sliderThumbs = $('.img-cover:not(.thumb)');
      var bigImage = $(".main-one");

    // here on clicking on the big-image the lightbox will appear with the first img-thumb active

        bigImage.click(function(){
        slides.hide().removeClass("active");
        sliderThumbs.removeClass("active");
        $(slides[0]).fadeIn();
        $(sliderThumbs[0]).addClass("active");
      });

    // here on clicking on the thumbs which are on the main product page the lightbox will appear with the targeted thumb active and the
    // targeted big image will fade in


      thumbs.click(function(event){
        var targetedSlide = slides[thumbs.index(event.target)];
        var targetedThumb = sliderThumbs[thumbs.index(event.target)];     
         slides.hide().removeClass("active");
         sliderThumbs.removeClass("active");
         $(targetedThumb).addClass("active");
         $(targetedSlide).fadeIn();
         
    }
    );
     
    // here on clicking on the thumbs which are within the lightbox the targeted thumb will be active and the
    // targeted big image will fade in

     $(sliderThumbs).click(function(event) {
      var targetedSlide = slides[sliderThumbs.index(event.target)];
      var targetedThumb = sliderThumbs[sliderThumbs.index(event.target)];
        
            $(sliderThumbs).removeClass("active");
            $(slides).hide().fadeOut("fast");
            $(targetedThumb).addClass("active");
            $(targetedSlide).fadeIn();
     });
  

  //making the arrows do the job of a carousel but without using a static number
  
     $(".arrow-next").click(function() {
       
       for(i=0; i<slides.length; i++) {
         if($(sliderThumbs[i]).hasClass("active")){
           n = sliderThumbs.index(sliderThumbs[i])+1;
   
         }
       }
       var currentThumb = sliderThumbs[sliderThumbs.index(sliderThumbs[n-1])];
       var nextThumb = sliderThumbs[sliderThumbs.index(sliderThumbs[n])];
       var currntSlide = slides[sliderThumbs.index(sliderThumbs[n-1])];
       var nextSlide = slides[sliderThumbs.index(sliderThumbs[n])];
       $(currentThumb).removeClass("active");
       $(currntSlide).hide().fadeOut("fast");
       $(nextThumb).addClass("active");
       $(nextSlide).fadeIn();
      });


      $(".arrow-prev").click(function() {
       
        for(i=0; i<slides.length; i++) {
          if($(sliderThumbs[i]).hasClass("active")){
            if(i===0){
              n= slides.length;
            }else if(i !== 0){
              n = sliderThumbs.index(sliderThumbs[i]);
            }
          }
        }
        var currentThumb = sliderThumbs[sliderThumbs.index(sliderThumbs[n])];
        var nextThumb = sliderThumbs[sliderThumbs.index(sliderThumbs[n-1])];
        var currntSlide = slides[sliderThumbs.index(sliderThumbs[n])];
        var nextSlide = slides[sliderThumbs.index(sliderThumbs[n-1])];
        $(currentThumb).removeClass("active");
        $(currntSlide).hide().fadeOut("fast");
        $(nextThumb).addClass("active");
        $(nextSlide).fadeIn();
       });   
       
  //here i will make the plus and minus counter in the number of items
     $(".plus").click(function(){
       var counter = $(".quant small").text();
       counter++;
       $(".quant small").text(counter);
        
     });
     $(".minus").click(function(){
      var counter = $(".quant small").text();
      counter--;
      if(counter >= 0){
        $(".quant small").text(counter);
      }else{
        $(".quant small").text(0);
      }
    });

  // now let's make the cart button deliver a number of items to the items-list cart on the nav bar
  // the last thing to do which is to add the order to the cart
  var numItems = $("a span.badge .num-items");
     $(".cart-button").click(function(){
       var value = $(".quant small").text();
       var badge = $("a span");
       var cardEmpty = $(".card-empty");
       var cardFull = $(".card-full");
       var itemPrice = $(".i-price");
       var itemQuantity = $(".i-num");
       var totalPrice = $(".total");
        
       if(value == 0){
         cardFull.hide();
         cardEmpty.show();
         badge.hide();
       }else{
        var total = value * itemPrice.text();
        numItems.text(value);
        itemQuantity.html(value);
       
        totalPrice.text("$" + total );
        badge.fadeIn("Slow");
         cardEmpty.hide();
         cardFull.show();

       }
       $(".delete").click(function(){
          cardFull.hide();
          value= 0;
         numItems.text(value);
         badge.hide();
          cardEmpty.show();
         
      
       });
     });
     
     

       
  
    });
