
//for solutions
$(document).ready(function(){
    $('.main-nav').show();
    $('.solutions').hide();
    $('.solutions-content').hide();
    function mediaQuery(){
       let screenWidth = $(document).width();
       console.log("hello");
       if(screenWidth<=768 ){
         console.log("hello1");
         $('.resources').hide();
         $('.networks').hide();
         $('.main-nav').hide();
         $('.solutions').show();
         $('.solutions-content').hide();
       } else if(screenWidth<1280 && screenWidth>768){
           console.log('Great');
           $('.main-nav').show();
         $('.solutions').show();
         $('.solutions-content').show();
         $('.resources').hide();
         $('.networks').hide();
        }
   }
   $('.solution-tab').click(mediaQuery)
});


//for resources
$(document).ready(function(){
    $('.main-nav').show();
    $('.resources').hide();
    function mediaQuery(){
        let screenWidth = $(document).width();
        console.log("hello");
        if(screenWidth<768){
          console.log("hello1");
          $('.resources').show();
          $('.main-nav').hide();
          $('.solutions').hide();
          $('.network').hide();
          $('.solutions-content').hide();
        }else if(screenWidth<1280 && screenWidth>768){
          console.log('Great');
          $('.main-nav').show();
          $('.solutions').hide();
          $('.solutions-content').hide();
          $('.resources').show();
          $('.networks').hide();
         }
    }
    $('.resource-tab').click(mediaQuery)
});


//for networks
$(document).ready(function(){
    $('.main-nav').show();
    $('.networks').hide();
    function mediaQuery(){
        let screenWidth = $(document).width();
        console.log("hello");
        if(screenWidth<768){
          console.log("hello1");
          $('.networks').show();
          $('.main-nav').hide();
          $('.solutions').hide();
          $('.solutions-content').hide();
          $('.resources').hide();
      
        }else if(screenWidth<1280 && screenWidth>768){
            console.log('Great');
            $('.main-nav').show();
            $('.solutions').hide();
            $('.solutions-content').hide();
            $('.resources').hide();
            $('.networks').show();
           }
    }
    $('.networks-tab').click(mediaQuery)
});


//for main-menu
$(document).ready(function(){
    $('.main-nav').show();
 function mediaQuery1(){
    let screenWidth = $(document).width();
    if(screenWidth< 768){
      $('.resources').hide();
      $('.solutions').hide();
      $('.solutions-content').hide();
      $('.networks').hide();
      $('.main-nav').show();
  
    }
}
$('.main-menu').click(mediaQuery1)


});


//for payment-solutions
$(document).ready(function(){
    $('.main-nav').show();
    $('.solutions').hide();
    $('.solutions-content').hide();
    $('.payment-solutions').hide();
    function mediaQuery(){
       let screenWidth = $(document).width();
       console.log("hello");
       if(screenWidth<=768 ){
         console.log("hello1");
         $('.resources').hide();
         $('.networks').hide();
         $('.main-nav').hide();
         $('.solutions').hide();
         $('.solutions-content').hide();
         $('.payment-solutions').show();
       } else if(screenWidth<1280 && screenWidth>768){
           console.log('Great');
           $('.main-nav').show();
         $('.solutions').show();
         $('.solutions-content').show();
         $('.payment-solutions').show();
         $('.resources').hide();
         $('.networks').hide();
        }
   }
   $('.payment-solution-tab').click(mediaQuery)
});



//for solutions-menu
$(document).ready(function(){
    // $('.main-nav').show();
 function mediaQuery1(){
    let screenWidth = $(document).width();
    if(screenWidth< 768){
      $('.resources').hide();
      $('.solutions').hide();
      $('.solutions-content').hide();
      $('.networks').hide();
      $('.payment-solutions').hide();
      $('.solutions').show();
  
    }
}
$('.paymentsolutions-menu').click(mediaQuery1)


});


//jquery for desktop screen

// $(document).ready(function(){
//     // $('.main-nav').show();
//  function mediaQuery1(){
//     let screenWidth = $(document).width();
//     if(screenWidth> 768){
//         jQuery('.solutions').show();
//       jQuery('.solutions-content').show();
  
//     }
// }
// $('..solution-tab').click(mediaQuery1)


// });


// jQuery(function () {
//     jQuery('.solution-tab').click(function () {
  
//       jQuery('.solutions').show();
//       jQuery('.solutions-content').show();
     

  
//     });
//   });


  // jQuery(function () {
  //   jQuery('.close').click(function () {
  //     jQuery('.solutions-content').hide();
     
  //   });
  // });