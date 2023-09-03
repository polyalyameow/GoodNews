


window.onload = function fetchData() {
  Promise.all([fetch("../public/hotNews.json"), fetch("../public/news.json")])
    .then((res) => {
      return Promise.all(res.map((res) => res.json()));
    })
    .then((data) => {
      console.log(data);
      const currentUrl =  window.location.pathname;
      let output = "";
      let openedArticle = "";
      let myIndex = 0;
      // console.log(data)
      // console.log(data.length)
      let newsAll = [];
      // array with all values in one place is needed bc otherwise the loop skips first three indexes of the second array with 34 values in it
      let newsCulture = []

 
      for (item in data[myIndex]) {
        // console.log(data[myIndex][item]);
        newsAll.push(data[myIndex][item]);
      }
      for (item in data[myIndex + 1]) {
        newsAll.push(data[myIndex + 1][item]);
      }

      console.log(newsAll);
      for (news in newsAll) {
       if (newsAll[news]["hashtag"] === "culture" && currentUrl === "/pages/culture.html"){
        output += `
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
        console.log(e.target.textContent)
        console.log(newsCulture) // array for data with culture-hashtag
        x = e.target.parentNode;
        console.log(x) // print out div of targeted el
        xTitle = x.querySelector(".culture__articles__title").textContent;
        
        
        //  window.location.replace ("../pages/openedArticle.html");
       
  }
   
    
  }
       
       else if(newsAll[news]["hashtag"] === "politics" && currentUrl === "/pages/politics.html") {
        console.log(newsAll[news]["title"])
        output += `
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
        output += `
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
        output += `
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

     
      
      for (news in newsAll) {
          if (currentUrl === "/pages/culture.html") {
            document.querySelector(".culture__articles").innerHTML = output;
            
          } else if (currentUrl === "/pages/politics.html") {
            document.querySelector(".politics__articles").innerHTML = output;
         } else if (currentUrl === "/pages/world.html") {
          document.querySelector(".world__articles").innerHTML = output;
       } else if (currentUrl === "/pages/health.html") {
        document.querySelector(".health__articles").innerHTML = output;
     }

    
      }
    
    });
    
    
};


