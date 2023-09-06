

// const chosen = document.getElementById("culture-body")

// export const pressedTarget = []

// const chosenPressed = e => {
//   pressedTarget.push(e.target.parentNode.children[1].textContent);
//   console.log(pressedTarget)
//   window.open("../pages/openedArticle.html")
// }


let chosenArt = document.getElementById("culture").addEventListener("click", (e) => console.log(e.target.parentNode.children[1].classList.add("red"))) 

export let array=[]
let collection = document.getElementsByClassName("red")
array.push(collection)
console.log(array)


// console.log(targetedArt)

          // if (t.matches('red')){
          //   console.log("contains")
          // }


window.onload = function fetchData() {
  Promise.all([fetch("../public/hotNews.json"), fetch("../public/news.json")])
    .then((res) => {
      return Promise.all(res.map((res) => res.json()));
    })
    .then((data) => {
      console.log(data);

      const currentUrl = window.location.pathname;
      let result = "";

      let modalText = "";

      let myIndex = 0;
     

      // array with all values in one place is needed bc otherwise the loop skips first three indexes of the second array with 34 values in it
      let newsAll = [];
      let newsCulture = [];
      
      console.log(newsCulture);
      
    
      for (let item in data[myIndex]) {
        // console.log(data[myIndex][item]);
        newsAll.push(data[myIndex][item]);
      }
      for (let item in data[myIndex + 1]) {
        newsAll.push(data[myIndex + 1][item]);
      }

      console.log(newsAll);
      

      for (let news in newsAll) {
        newsCulture.push(newsAll[news]);
        

        if (
          newsAll[news]["hashtag"] === "culture" &&
          currentUrl === "/pages/culture.html"
        ) {
          
          result += `
        <div class="culture__articles" id="culture">
            <a href="${'../pages/openedArticle.html'}" target="${'_blank'}">
            <div class="culture__articles__container" id="culture-container">
              <img  src="${newsAll[news].image}" alt="${newsAll[news].alt}" class="culture__articles__pic" />
                <h2 class="culture__articles__title" id="culture-title">${newsAll[news].title}</h2>
                <p class="culture__articles__description">${newsAll[news].description}</p>
            </div>
            </a>
        </div>
    `;
    
    // const collection = document.getElementsByTagName("h2");
    // const element = collection.namedItem("culture");
    // let text = element.innerHTML;
    // console.log(text)
    // console.log(collection)
   

    // document.body.appendChild(div);
    // href="${'../pages/openedArticle/' + newsAll[news].id + '.html'}"
            // document.getElementById("culture").addEventListener("click", chosenPressed)


          //   document.getElementById("culture").addEventListener('click', e =>{ 
          //     // console.log(e.target.parentNode.children[1])
               
          //         if  (e.target.parentNode.children[1].textContent === newsAll[news]["title"]){
          //           console.log(newsAll[news]["id"])
                    
          //           // window.open("../pages/openedArticle.html")
                  
                  
          //   }
           
            
          // });
              
          
         
        } else if (
          newsAll[news]["hashtag"] === "politics" &&
          currentUrl === "/pages/politics.html"
        ) {
          console.log(newsAll[news]["title"]);
          result += `
        <div class="politics__articles" id="politics">
            <div class="culture__articles__container">
              <img  src="${newsAll[news].image}" alt="${newsAll[news].alt}" class="culture__articles__pic" />
                <h2 class="culture__articles__title">${newsAll[news].title}</h2>
                <p class="culture__articles__description">${newsAll[news].description}</p>
          </div>
        </div>
    `;
          document.getElementById("politics").onclick = function () {
            console.log("button was clicked");
          };
        } else if (
          newsAll[news]["hashtag"] === "world" &&
          currentUrl === "/pages/world.html"
        ) {
          result += `
        <div class="world__articles" id="world">
            <div class="culture__articles__container">
              <img  src="${newsAll[news].image}" alt="${newsAll[news].alt}" class="culture__articles__pic" />
                <h2 class="culture__articles__title">${newsAll[news].title}</h2>
                <p class="culture__articles__description">${newsAll[news].description}</p>
          </div>
        </div>
    `;
          document.getElementById("world").onclick = function () {
            console.log("button was clicked");
          };
        } else if (
          newsAll[news]["hashtag"] === "health" &&
          currentUrl === "/pages/health.html"
        ) {
          result += `
        <div class="health__articles" id="health">
            <div class="culture__articles__container">
              <img  src="${newsAll[news].image}" alt="${newsAll[news].alt}" class="culture__articles__pic" />
                <h2 class="culture__articles__title">${newsAll[news].title}</h2>
                <p class="culture__articles__description">${newsAll[news].description}</p>
          </div>
        </div>`;
          document.getElementById("health").onclick = function () {
            console.log("button was clicked");
          };
        }


      }

      for (let news in newsAll) {
        if (currentUrl === "/pages/culture.html") {
          document.querySelector(".culture__articles").innerHTML = result;
        } else if (currentUrl === "/pages/politics.html") {
          document.querySelector(".politics__articles").innerHTML = result;
        } else if (currentUrl === "/pages/world.html") {
          document.querySelector(".world__articles").innerHTML = result;
        } else if (currentUrl === "/pages/health.html") {
          document.querySelector(".health__articles").innerHTML = result;
        }
      }
      
      
      //  document.getElementById("culture-body").addEventListener('click', e =>{ 
      //   console.log(e.target.parentNode);
      //   for (let n in newsAll) {
      //   if  (e.target.parentNode.children[1].textContent === newsAll[n]["title"]){
      //     // console.log(newsAll[n])
      //     let myJSONString = JSON.stringify(newsAll[n]); 
      //     test.push(myJSONString)
          
        
          
      //   }
        
        
        
    //   }
      

    // })
        // 
        // console.log(document.querySelector(".article__title"))
        // for (let n in newsAll) {
        //   if ( e.target.parentNode.children[1].textContent === newsAll[n]["title"]){
        //   console.log(e.target.parentNode.children[1])
        //   window.open("../pages/openedArticle.html")
        //   }
        //  }
        
      }
      // document.getElementById("culture-body").onmouseup = (e) => {
      //   for (let n in newsAll) {
      //     if (
      //       e.target.parentNode.children[1].textContent === newsAll[n]["title"]
      //     ) {
      //         modalText += `
             
      //         <div id="myModal" class="modal">
      //           <div class="modal-content" id="content-m">
      //             <button class="close" id="closed">&times;</button>
      //             <div class="showArticle">
      //                <img class="showArticle__image" src="${newsAll[n]["image"]}"/>
      //                 <p class="showArticle__author" id="author">${"Author: " + newsAll[n]["author"]}</p>
      //                 <h2 class="showArticle__title">${newsAll[n]["title"]}</h2>
      //                 <p class="showArticle__text">${newsAll[n]["text"]}</p>
      //                 <p class="showArticle__source">${"Sourse: " + newsAll[n]["source"]}</p>
      //               </div>
      //             </div>
      //        </div>`;

      //        document.querySelector(".modal").style.backgroundColor = "red";

      //       }

           


           
      //       let modal =  document.getElementById("myModal");

      //     //   span.onclick = function() {
      //     //    modal.style.display = "none";

      //     // }

          


          
           
      //     //  closeMod();
          


         

      //     //   let el = document.querySelector(".modal")
      //     //   el.scrollTop = el.scrollHeight;
      //     //  setTimeout(function(){
      //     //   el.scrollTop = 0;
      //     // }, 20);


   
           
         
            
            

      //     //function closeMod() {
      //       //   document.querySelector(".close").onmouseup = () =>{
      //       //     document.querySelector(".modal").style.display = "none";}
      //       // }
            
      //       // closeMod();
            
            

      //       // function scrollToTop(){
      //       //   window.scrollTo({top: 0, behavior: 'smooth'});}
            

            
            

            
            
      //     }

          

      //     document.querySelector(".modal").innerHTML = modalText;
          

      //     // closeBtn.onclick = function(){
      //     //   document.querySelector(".modal").style.display = "none";
      //     // }
      //   //   function scrollToTop(){
      //   //     window.scrollTo({top: 0, behavior: 'smooth'});
      //   //  }
      //   //  scrollToTop()
  
         
      //     // console.log(newsAll[n])
          
      //   }


      

    
    )  
    
}

