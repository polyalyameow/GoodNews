window.onload = function fetchData() {
  Promise.all([fetch("../public/hotNews.json"), fetch("../public/news.json")])
    .then((res) => {
      return Promise.all(res.map((res) => res.json()));
    })
    .then((data) => {
      console.log(data);
      const currentUrl =  window.location.pathname;
      let output = "";
      let myIndex = 0;
      // console.log(data)
      // console.log(data.length)
      let newsAll = [];
      // array with all values in one place is needed bc otherwise the loop skips first three indexes of the second array with 34 values in it
      for (item in data[myIndex]) {
        console.log(data[myIndex][item]);
        newsAll.push(data[myIndex][item]);
      }
      for (item in data[myIndex + 1]) {
        newsAll.push(data[myIndex + 1][item]);
      }

      console.log(newsAll);
      for (news in newsAll) {
       if (newsAll[news]["hashtag"] === "culture" && currentUrl === "/pages/culture.html"){
        output += `
        <div class="culture__articles">
            <div class="culture__articles__container">
              <img  src="${newsAll[news].image}" alt="${newsAll[news].alt}" class="culture__articles__pic" />
                <h2 class="culture__articles__title">${newsAll[news].title}</h2>
                <p class="culture__articles__description">${newsAll[news].description}</p>
          </div>
        </div>
    `;
    
       } 
       
       else if(newsAll[news]["hashtag"] === "politics" && currentUrl === "/pages/politics.html") {
        console.log(newsAll[news]["title"])
        output += `
        <div class="politics__articles">
            <div class="culture__articles__container">
              <img  src="${newsAll[news].image}" alt="${newsAll[news].alt}" class="culture__articles__pic" />
                <h2 class="culture__articles__title">${newsAll[news].title}</h2>
                <p class="culture__articles__description">${newsAll[news].description}</p>
          </div>
        </div>
    `;
       }
       else {
        console.log("not found")
       }
       
      }

      for (news in newsAll) {
          if (currentUrl === "/pages/culture.html") {
            document.querySelector(".culture__articles").innerHTML = output;
          } else if (currentUrl === "/pages/politics.html") {
            document.querySelector(".politics__articles").innerHTML = output;
         }
      }
    });
};
