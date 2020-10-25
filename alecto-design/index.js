let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
 let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot1");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}




// let images = document.querySelectorAll('.img');
// console.log(images);
// let status = false;

// images.forEach(image => {
//   image.addEventListener('click',(e)=>{
    
//     if(status === false){
//       e.target.style.backgroundColor = 'green';
     
      
//     }
   
    
    

// });
// });
