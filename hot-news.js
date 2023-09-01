window.onload = function fetchData() {
  fetch("/public/hot-news.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let output = "";

      for (item in data) {
        console.log(data);

        // let slideIndex = 1;
       

        // function plusDivs(n) {
        //     showDivs((slideIndex += n));
        //   } 

        // function showDivs(n) {
        //   let i;
        //   let x = document.getElementsByClassName("slide");
        //   if (n > x.length) {
        //     slideIndex = 1;
        //   }
        //   if (n < 1) {
        //     slideIndex = x.length;
        //   }
        //   for (i = 0; i < x.length; i++) {
        //     x[i].style.display = "none";
        //   }
        //   x[slideIndex - 1].style.display = "block";
        // } 

          output += `
            <div class="slide #slide"> 
                <img src="${data[item].image}" alt="${
            data[item].alt
          }" class="main-picture"/>
                
             <div class="articles--main__text">
                 <h2 class="articles--main__title">${data[item].title}</h2>
                 <p class="articles--main__author">${data[item].author}</p>
                 <p class="articles--main__description">${
                   data[item].description
                 }</p>
             </div>
            </div>
     `; 
     
        } 

        //   let myIndex = 0;
        //   function carousel(){
        //      let i;
        //      let x = document.getElementsByClassName("slide");
        //      for (i = 0; i < x.length; i++) {
        //          x[i].style.display = "none";
        //      }
        //      myIndex++;
        //      if (myIndex > x.length) {
        //          myIndex = 1
        //      }
        //      x[myIndex-1].style.display = "block";
        //      setTimeout(carousel, 4000);
        //   }
      
      document.querySelector(".articles--main").innerHTML = output;
      //    carousel();
      
      
    });
};
