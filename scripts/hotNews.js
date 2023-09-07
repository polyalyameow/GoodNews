let myIndex = 1;
let i;
let x = document.getElementsByClassName("slide");
let btnRight = document.getElementsByClassName("btn-right");
let btnLeft = document.getElementsByClassName("btn-left");
let clickedRight = false;
let clickedLeft = false;

let arrayVal = [];
let res =[];

let content = document.getElementsByClassName("articles--main");
let result = document.getElementsByClassName("result");

function clickHandle(n) {
  showDivs((myIndex += n));
}

function showDivs(n) {
  // console.log(x);
  console.log(x.length);
  if (n > x.length) {
    myIndex = 1;
  }
  if (n < 1) {
    myIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[myIndex - 1].style.display = "block";
}

window.onload = function hotNews() {
  fetch("/public/hotNews.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let output = "";

      for (let item in data) {
        console.log(data);
        console.log(data[item]);
       
        output += `
            <div class="slide"> 
            <a href="${"../pages/openedArticle.html"}" target="${"_blank"}">
            <div class="articles--img">
                <img src="${data[item].image}" alt="${
          data[item].alt
        }" class="main-picture"/>
            </div>
             <div class="articles--main__text">
                 <h2 class="articles--main__title">${data[item].title}</h2>
                 <p class="articles--main__author">${data[item].author}</p>
                 <p class="articles--main__description">${
                   data[item].description
                 }</p>
             </div>
             </a>
            </div>
            <div class="result"></div>
            
     `; 

        console.log(data[item]);

        let val = Object.values(data[item])

        arrayVal.push(val)


        document.querySelector(".articles--main").onclick = (e) => {
          if(x.includes(e.target.textContent)){
            console.log("found: " + e.target.textContent)
          } else (
            console.log("not found")
          )
         }



        //  console.log(data[item].title)
        // window.localStorage.setItem("main-titel", data[item].title)

        //     console.log(data[item].title)

        //  console.log(data[item].title)
      }
      console.log(arrayVal)
      for (v in arrayVal){
        // console.log(arrayVal[v])
        res.push(arrayVal[v])
      } 

      document.querySelector(".articles--main").onclick = (e) =>{
      for (let r = 0; r < res.length; r++ ){
        console.log(res[r])
          if(res[r].includes(e.target.textContent)){
            console.log("includes")
            let ind = res[r].indexOf(e.target.textContent);
            console.log(ind);
            let value = res[r][ind];
            console.log(value);
            window.localStorage.setItem("hotNValue", value)
          }
          else {
            console.log("doesnt include")
          }
        }

        
      }

      
     

      document.querySelector(".articles--main").innerHTML = output;

      showDivs(myIndex);
      
    });

    
};
