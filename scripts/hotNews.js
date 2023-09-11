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
        // console.log(data);
        // console.log(data[item]);
       
        output += `
            <div class="slide"> 
            <a >
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

     // href="${"../pages/openedArticle.html"}"

        // console.log(data[item]);

        let val = Object.values(data[item])
        // console.log(val)
        arrayVal.push(val)
        // console.log(arrayVal)


        // document.querySelector(".articles--main").onclick = (e) => {
        //   if(x.includes(e.target.textContent)){
        //     console.log("found: " + e.target.textContent)
        //   } else (
        //     console.log("not found")
        //   )
        //  }



        //  console.log(data[item].title)
        // window.localStorage.setItem("main-titel", data[item].title)

        //     console.log(data[item].title)

        //  console.log(data[item].title)
      }
      // console.log(arrayVal)
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
            localStorage.setItem("hotNValue", value)
          }
          else if(e.target.textContent == "") {
            console.log(e.target.parentNode.children[0])
            let imageAdr = e.target.parentNode.children[0].src // returns http://127.0.0.1:5500/images/hot-news--coffee.jpg
            let matches = imageAdr.match(/[^/]*$/);
            let imageName = "/images/" + matches
            console.log(imageName)
            if(res[r].includes(imageName)){
              console.log("gotcha")
              // ind = res[r].indexOf(imageName)
              // value = res[r][ind];
              value = imageName;
              console.log(value);
              localStorage.setItem("hotNValue", value)
            }
          }
        }

        
      }

      
     

      document.querySelector(".articles--main").innerHTML = output;

      showDivs(myIndex);
      
    });

    
};
