let myIndex = 1;
let i;
let x = document.getElementsByClassName("slide");
let btnRight = document.getElementsByClassName("btn-right");
let btnLeft = document.getElementsByClassName("btn-left");
let clickedRight = false;
let clickedLeft = false; 

function clickHandle(n){
    showDivs(myIndex += n);
    
}

function showDivs(n) {
  console.log(x);
  console.log(x.length)
    if (n > x.length) {myIndex = 1}
    if (n < 1) {myIndex = x.length}
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    x[myIndex-1].style.display = "block";  
  }


window.onload = function hotNews() {
  fetch("/public/hotNews.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let output = "";
      
      
      for (let item in data) {
        console.log(data);
        

          output += `
            <div class="slide"> 
                <img src="${data[item].image}" alt="${data[item].alt}" class="main-picture"/>
             <div class="articles--main__text">
                 <h2 class="articles--main__title">${data[item].title}</h2>
                 <p class="articles--main__author">${data[item].author}</p>
                 <p class="articles--main__description">${data[item].description}</p>
             </div>
            </div>

     ` ; 

     
      }

      document.querySelector(".articles--main").innerHTML = output;
      
 
           showDivs(myIndex)

        
    });
};
