window.onscroll = function() {
    myFunction();
   };
   
   function myFunction() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
       navbar.style.backgroundColor = "green";
       navbar.style.color = "#fff";
    } else {
       navbar.style.backgroundColor = "blueviolet";
       navbar.style.color = "#fff";
    }
   }

   var myCarousel = document.querySelector('collection-section')
   var carousel = new bootstrap.Carousel(myCarousel)
   