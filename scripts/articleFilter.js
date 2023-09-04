window.onload = function fetchData() {

  Promise.all([fetch("../public/hotNews.json"), fetch("../public/news.json")])
    .then((res) => {
      return Promise.all(res.map((res) => res.json()));
    })
    .then((data) => {
      console.log(data);
      const currentUrl =  window.location.pathname;
      let result = "";
      
      
      let myIndex = 0;

      let newsAll = [];
      // array with all values in one place is needed bc otherwise the loop skips first three indexes of the second array with 34 values in it
      let newsCulture = []
    
      for (let item in data[myIndex]) {
        // console.log(data[myIndex][item]);
        newsAll.push(data[myIndex][item]);
      }
      for (let item in data[myIndex + 1]) {
        newsAll.push(data[myIndex + 1][item]);
      }
      
      console.log(newsAll);
      for (let news in newsAll) {
        
       if (newsAll[news]["hashtag"] === "culture" && currentUrl === "/pages/culture.html"){
        result += `
        <div class="culture__articles" id="culture">
            <div class="culture__articles__container" id="culture-container">
              <img  src="${newsAll[news].image}" alt="${newsAll[news].alt}" class="culture__articles__pic" />
                <h2 class="culture__articles__title">${newsAll[news].title}</h2>
                <p class="culture__articles__description">${newsAll[news].description}</p>
          </div>
        </div>
    `;
      newsCulture.push(newsAll[news]);
      
      document.getElementById('culture').onclick = e => {
        
        console.log(newsCulture) // array for data with culture-hashtag
        for (let cult in newsCulture) {
         if (e.target.parentNode.children[1].textContent == newsCulture[cult]["title"]){
          console.log(newsCulture[cult]) //object 
          
          function openArticle() {
            let myWindow = window.open();
            myWindow.document.write(`
            <!DOCTYPE html>
            <head>
              <link rel="stylesheet" href="../styles/normalize.css" />
              <link rel="stylesheet" href="../styles/openedArticle.css" />
            </head>
            <body>
            <div class="showArticle">
                <img class="showArticle__image" src="${newsCulture[cult]["image"]}"/>
                <p class="showArticle__author" id="author">${"Author: " + newsCulture[cult]["author"]}</p>
                <h2 class="showArticle__title">${newsCulture[cult]["title"]}</h2>
                <p class="showArticle__text">${newsCulture[cult]["text"]}</p>
                <p class="showArticle__source">${"Sourse: " + newsCulture[cult]["source"]}</p>
              </div>
            </div>
            </body>
            </html>
            `);
            } 
            openArticle();
         } else {
          console.log("not found")
         } 
        }     
  }
  
    
  }
       
       else if(newsAll[news]["hashtag"] === "politics" && currentUrl === "/pages/politics.html") {
        console.log(newsAll[news]["title"])
        result += `
        <div class="politics__articles" id="politics">
            <div class="culture__articles__container">
              <img  src="${newsAll[news].image}" alt="${newsAll[news].alt}" class="culture__articles__pic" />
                <h2 class="culture__articles__title">${newsAll[news].title}</h2>
                <p class="culture__articles__description">${newsAll[news].description}</p>
          </div>
        </div>
    `;
    document.getElementById('politics').onclick = function() {
      console.log("button was clicked");
       } }
       else if (newsAll[news]["hashtag"] === "world" && currentUrl === "/pages/world.html"){
        result += `
        <div class="world__articles" id="world">
            <div class="culture__articles__container">
              <img  src="${newsAll[news].image}" alt="${newsAll[news].alt}" class="culture__articles__pic" />
                <h2 class="culture__articles__title">${newsAll[news].title}</h2>
                <p class="culture__articles__description">${newsAll[news].description}</p>
          </div>
        </div>
    `;
    document.getElementById('world').onclick = function() {
      console.log("button was clicked");
      
       }
       } else if (newsAll[news]["hashtag"] === "health" && currentUrl === "/pages/health.html") {
        result += `
        <div class="health__articles" id="health">
            <div class="culture__articles__container">
              <img  src="${newsAll[news].image}" alt="${newsAll[news].alt}" class="culture__articles__pic" />
                <h2 class="culture__articles__title">${newsAll[news].title}</h2>
                <p class="culture__articles__description">${newsAll[news].description}</p>
          </div>
        </div>
    `;
        document.getElementById('health').onclick = function() {
          console.log("button was clicked");
       }
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

      
      });
      
    
   
};







