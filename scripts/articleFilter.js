let arrayVal = [];
let res = [];


window.onload = function fetchData() {
  Promise.all([fetch("../public/hotNews.json"), fetch("../public/news.json")])
    .then((res) => {
      return Promise.all(res.map((res) => res.json()));
    })
    .then((data) => {
      console.log(data);

      const currentUrl = window.location.href;
      console.log(currentUrl)
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
          currentUrl === "https://master--melodious-otter-3f6d38.netlify.app/pages/culture"
        ) {
          
          result += `
        <div class="culture__articles" id="culture">
            <a /href="${'../pages/openedArticle.html'}">
            <div class="culture__articles__container" id="culture-container">
              <img  src="${newsAll[news].image}" alt="${newsAll[news].alt}" class="culture__articles__pic" />
                <h2 class="culture__articles__title" id="culture-title">${newsAll[news].title}</h2>
                <p class="culture__articles__description">${newsAll[news].description}</p>
            </div>
            </a>
        </div>
    `;
          console.log(newsAll[news])
          
          let val = Object.values(newsAll[news])
          console.log(val)
          arrayVal.push(val) // to be able to access result everywhere in code


      console.log(arrayVal)

      document.querySelector(".culture__articles").onclick = (e) =>{
         for (let r = 0; r < arrayVal.length; r++ ){
          console.log(arrayVal[r]) // 9 res
          console.log(e.target.textContent)
          if(arrayVal[r].includes(e.target.textContent)){
            console.log("includes")
            let ind = arrayVal[r].indexOf(e.target.textContent);
            console.log(ind);
            let value = arrayVal[r][ind];
            console.log(value);
            localStorage.setItem("hotNValue", value)
          }          
           else if(e.target.textContent == "") {
              console.log(e.target.parentNode.children[0])
              let imageAdr = e.target.parentNode.children[0].src // returns http://127.0.0.1:5500/images/hot-news--coffee.jpg
              let matches = imageAdr.match(/[^/]*$/);
              let imageName = "/images/" + matches
              console.log(imageName)
              if(arrayVal[r].includes(imageName)){
                console.log("gotcha")
                let value = imageName;
                console.log(value);
                localStorage.setItem("hotNValue", value)
              }
          }

          } 
      }
         } 
         else if (
          newsAll[news]["hashtag"] === "politics" &&
          currentUrl === "https://master--melodious-otter-3f6d38.netlify.app/pages/politics"
        ) {
          console.log(newsAll[news]["title"]);
          result += `
        <div class="politics__articles" id="politics">
          <a href="${'../pages/openedArticle.html'}">
            <div class="culture__articles__container">
              <img  src="${newsAll[news].image}" alt="${newsAll[news].alt}" class="culture__articles__pic" />
                <h2 class="culture__articles__title">${newsAll[news].title}</h2>
                <p class="culture__articles__description">${newsAll[news].description}</p>
          </div>
          </a>
        </div>
    `;  
    let val = Object.values(newsAll[news])
    console.log(val)
    arrayVal.push(val) // to be able to access result everywhere in code


    console.log(arrayVal)

    document.querySelector(".politics__articles").onclick = (e) =>{
      for (let r = 0; r < arrayVal.length; r++ ){
        console.log(arrayVal[r]) // 9 res
        console.log(e.target.textContent)
        if(arrayVal[r].includes(e.target.textContent)){
          console.log("includes")
          let ind = arrayVal[r].indexOf(e.target.textContent);
          console.log(ind);
          let value = arrayVal[r][ind];
          console.log(value);
          localStorage.setItem("hotNValue", value)
        }          
        else if(e.target.textContent == "") {
            console.log(e.target.parentNode.children[0])
            let imageAdr = e.target.parentNode.children[0].src // returns http://127.0.0.1:5500/images/hot-news--coffee.jpg
            let matches = imageAdr.match(/[^/]*$/);
            let imageName = "/images/" + matches
            console.log(imageName)
            if(arrayVal[r].includes(imageName)){
              console.log("gotcha")
              // ind = res[r].indexOf(imageName)
              // value = res[r][ind];
              let value = imageName;
              console.log(value);
              localStorage.setItem("hotNValue", value)
            }
        }

        } 
}
          
        } else if (
          newsAll[news]["hashtag"] === "world" &&
          currentUrl === "https://master--melodious-otter-3f6d38.netlify.app/pages/world"
        ) {
          result += `
        <div class="world__articles" id="world">
          <a href="${'../pages/openedArticle.html'}">
            <div class="culture__articles__container">
              <img  src="${newsAll[news].image}" alt="${newsAll[news].alt}" class="culture__articles__pic" />
                <h2 class="culture__articles__title">${newsAll[news].title}</h2>
                <p class="culture__articles__description">${newsAll[news].description}</p>
          </div>
          </a>
        </div>
    `;
    let val = Object.values(newsAll[news])
    console.log(val)
    arrayVal.push(val) // to be able to access result everywhere in code


    console.log(arrayVal)

    document.querySelector(".world__articles").onclick = (e) =>{
      for (let r = 0; r < arrayVal.length; r++ ){
        console.log(arrayVal[r]) // 9 res
        console.log(e.target.textContent)
        if(arrayVal[r].includes(e.target.textContent)){
          console.log("includes")
          let ind = arrayVal[r].indexOf(e.target.textContent);
          console.log(ind);
          let value = arrayVal[r][ind];
          console.log(value);
          localStorage.setItem("hotNValue", value)
        }          
        else if(e.target.textContent == "") {
            console.log(e.target.parentNode.children[0])
            let imageAdr = e.target.parentNode.children[0].src // returns http://127.0.0.1:5500/images/hot-news--coffee.jpg
            let matches = imageAdr.match(/[^/]*$/);
            let imageName = "/images/" + matches
            console.log(imageName)
            if(arrayVal[r].includes(imageName)){
              console.log("gotcha")
              let value = imageName;
              console.log(value);
              localStorage.setItem("hotNValue", value)
            }
        }

        } 
}
        
        } else if (
          newsAll[news]["hashtag"] === "health" &&
          currentUrl === "https://master--melodious-otter-3f6d38.netlify.app/pages/health"
        ) {
          result += `
        <div class="health__articles" id="health">
          <a href="${'../pages/openedArticle.html'}">
            <div class="culture__articles__container">
              <img  src="${newsAll[news].image}" alt="${newsAll[news].alt}" class="culture__articles__pic" />
                <h2 class="culture__articles__title">${newsAll[news].title}</h2>
                <p class="culture__articles__description">${newsAll[news].description}</p>
          </div>
          </a>
        </div>`;
        let val = Object.values(newsAll[news])
        console.log(val)
        arrayVal.push(val) // to be able to access result everywhere in code
    
    
        console.log(arrayVal)
    
        document.querySelector(".health__articles").onclick = (e) =>{
          for (let r = 0; r < arrayVal.length; r++ ){
            console.log(arrayVal[r]) // 9 res
            console.log(e.target.textContent)
            if(arrayVal[r].includes(e.target.textContent)){
              console.log("includes")
              let ind = arrayVal[r].indexOf(e.target.textContent);
              console.log(ind);
              let value = arrayVal[r][ind];
              console.log(value);
              localStorage.setItem("hotNValue", value)
            }          
            else if(e.target.textContent == "") {
                console.log(e.target.parentNode.children[0])
                let imageAdr = e.target.parentNode.children[0].src // returns http://127.0.0.1:5500/images/hot-news--coffee.jpg
                let matches = imageAdr.match(/[^/]*$/);
                let imageName = "/images/" + matches
                console.log(imageName)
                if(arrayVal[r].includes(imageName)){
                  console.log("gotcha")
                  let value = imageName;
                  console.log(value);
                  localStorage.setItem("hotNValue", value)
                }
            }
    
            } 
    }
          
        }


      }

      for (let news in newsAll) {
        if (currentUrl === "https://master--melodious-otter-3f6d38.netlify.app/pages/culture") {
          document.querySelector(".culture__articles").innerHTML = result;
        } else if (currentUrl === "https://master--melodious-otter-3f6d38.netlify.app/pages/politics") {
          document.querySelector(".politics__articles").innerHTML = result;
        } else if (currentUrl === "https://master--melodious-otter-3f6d38.netlify.app/pages/world") {
          document.querySelector(".world__articles").innerHTML = result;
        } else if (currentUrl === "https://master--melodious-otter-3f6d38.netlify.app/pages/health") {
          document.querySelector("health__articles").innerHTML = result;
        }
      }
        
      }
    
    )  
    
}

