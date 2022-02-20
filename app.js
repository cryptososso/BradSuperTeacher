// Carousel
const slides = document.getElementsByClassName('carousel-item');

let slidePosition = 0;

const totalSlides = slides.length;


function hideAllSlides(){

   for(let i = 0; i < slides.length; i++){
      slides[i].classList.remove('carousel-item-visible');
      slides[i].classList.add('carousel-item-hidden');
   }
}

function moveToNextSlide(){
   hideAllSlides();

 if(slidePosition === totalSlides - 1){
    slidePosition = 0;
 }else{
    slidePosition++;
 }

slides[slidePosition].classList.add("carousel-item-visible");

}


// Fetch jokes 
document.querySelector('.get-joke').addEventListener('click', getJokes);

function getJokes(){
   const xhr = new XMLHttpRequest();

   xhr.open('GET', `http://api.icndb.com/jokes/random?firstName=Brad&lastName=Traversy`, true);

   xhr.onload = function(){
      if(this.status === 200){
         const response = JSON.parse(this.responseText);
         console.log(response);

         let output = '';

       if(response.type === 'success'){
               output = `
                  <li>${response.value.joke}</li>  
               `
          }else{
             output = `Data not found`
          }

          document.querySelector('.joke-list').innerHTML = output;
       }
   

      }

      moveToNextSlide();


   xhr.send();

}



