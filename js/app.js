
// For Fixing Nav Bar

document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 125) {
          document.getElementById('navbar_top').classList.add('fixed-top');
       
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 






// For NavBar Color Change




$(document).ready(function(){
    $(window).scroll(function(){
       var scroll = $(window).scrollTop();
       if (scroll > 125) {
         $("#navbar_top").css("background-color" , "#346a8cd8" );
         $(".nv").css("color" ,  "rgb(221, 221, 221)" );
         $(".ac").css("color" ,  "white" );
         $(".bag").css("color" ,  "white" );
         $("#count").css("color" ,  "white" );
         $("#count1").css("color" ,  "white" );
         $(".navbar-toggler").css("color" , "white" )
         $(".navbar-toggler").css("border-color" , "rgb(221, 221, 221)" )
         $(document).ready(function() {
          $('.nv').hover(function(){
                $(this).css({"color":"white"});
             }, 
             function(){
                $(this).css({"color":"rgb(221, 221, 221)"});
             }
          );
       });  
       }
 
 
       else{
          $("#navbar_top").css("background-color" , "#eaeaea");  	
          $(".nv").css("color" ,  "#726c6a" );
          $(".ac").css("color" ,  "#171717" );
          $(".bag").css("color" ,  "#000000" );
          $("#count").css("color" ,  "#000000" );
          $("#count1").css("color" ,  "#000000" );
          $(".navbar-toggler").css("color" , "#726c6a" )
          $(".navbar-toggler").css("border-color" , "#726c6a" )
          $(document).ready(function() {
             $('.nv').hover(function(){
                   $(this).css({"color":"#464646"});
                }, 
                function () {
                   $(this).css({"color":"#726c6a"});
                },
                
             );
          });
          }
 
    })
  })


















  //  For Categories Like Button


$(".wishlist1").click(function(){
    $(".wishlist1").css("color", "red",  )
  
 })
 
   $(".wishlist2").click(function(){
    $(".wishlist2").css("color", "red " );
 
 })
 $(".wishlist3").click(function(){
    $(".wishlist3").css("color", "red " );
 
 })
 $(".wishlist4").click(function(){
    $(".wishlist4").css("color", "red " );
 
 })
 $(".wishlist5").click(function(){
    $(".wishlist5").css("color", "red " );
 
 })
 $(".wishlist6").click(function(){
    $(".wishlist6").css("color", "red " );
 
 })
 $(".wishlist7").click(function(){
   $(".wishlist7").css("color", "red " );

})



 // For Loader

$(document).ready(function(){
    setTimeout(function(){
     $(".load").fadeOut()
     $(".start").fadeOut()
     $("#navbar_top").show()
    },2000)
})





// $(document).ready(function(){
//    $("#men").click(function(){
//       document.getElementById("dropdown-content1").style.display = "block";
//    }),

//    $("#women").click(function(){
//       document.getElementById("dropdown-content2").style.display = "block";
//    }),

//    $("#kids").click(function(){
//       document.getElementById("dropdown-content3").style.display = "block";
//    })

// })




 $(document).ready(function(){

    var count = 0;
    
    $("#plus").click(function(){
                        count ++;
                        
                        sessionStorage.setItem("count", count);   
                        sessionStorage.setItem("count", count); 

                        $("#count").val(sessionStorage.getItem("count"));
    
                       })



    
    $("#minus").click(function(){
                        count --;
                        sessionStorage.setItem("count", count);     
                        
                        $("#count").val(sessionStorage.getItem("count"));
    
                        })
    
                        // document.getElementById("heading").innerHTML  = sessionStorage.getItem("count");
    
    })


    $(document).ready(function(){

      var count = 0;
      
      $("#plus").click(function(){
                          count ++;
                          
                          sessionStorage.setItem("count", count);   
                          sessionStorage.setItem("count1", count); 
  
                          $("#count").val(sessionStorage.getItem("count"));
                          $("#count1").val(sessionStorage.getItem("count1"));
      
                         })
  
  
  
      
      $("#minus").click(function(){
                          count --;
                          sessionStorage.setItem("count", count);     
                          
                          $("#count").val(sessionStorage.getItem("count"));
      
                          })
      
                          // document.getElementById("heading").innerHTML  = sessionStorage.getItem("count");
      
      })
