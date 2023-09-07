

let myIndex = 0;

let page = ""


let id;

let x = window.localStorage.getItem("hotNValue")
console.log(x)
// console.log(window.localStorage.length)




window.onload = function openedArticle(){
    Promise.all([fetch("../public/hotNews.json"), fetch("../public/news.json")])
    .then((res) => {
      return Promise.all(res.map((res) => res.json()));
    })
    .then((data) => {
        console.log(data)
        
        let newsAll = [];
        
        for (let item in data[myIndex]) {
            // console.log(data[myIndex][item]);
            newsAll.push(data[myIndex][item]);
          }
          for (let item in data[myIndex + 1]) {
            newsAll.push(data[myIndex + 1][item]);
          }
          console.log(newsAll)
          for (let n in newsAll){
            // console.log(newsAll[n])
            const values = (Object.values(newsAll[n])) //array with value
            // console.log(values)
            if(values.includes(x)){
              console.log("here")
              let findKey = Object.keys(newsAll[n]).find(key => newsAll[n][key] === x);
              // console.log(findKey)
              // console.log(findKey, x)
              if (newsAll[n].hasOwnProperty(findKey) && Object.values(newsAll[n]).includes(x)){
                let pageRes = newsAll[n];
                console.log(pageRes);

                page += `
            <div class="article__articles" id="article">
                <div class="article__styling">
                <img class="article__image" src="${pageRes.image}" alt="${pageRes.alt}"/>
                <p class="article__author" id="author">Author: ${pageRes.author}</p>
                <h2 class="article__title">${pageRes.title}</h2>
                <p class="article__text">${pageRes.text}</p>
                <p class="article__source">Source: ${pageRes.source}</p>
               </div>
        </div>`;
                window.localStorage.removeItem(x)
              }
              
              
              
            } else {
              "not here"
            }
            ; // id of an element
            
            // console.log(newsAll[n]) //each el in news array
            // if (window.location.href.toString().includes(id)){
            //     console.log("per")
            // } else {
            //     console.log("not included")
            // }
            
            // if (window.location.href === ("/pages/openedArticle/" + newsAll[n]["id"] + ".html")) {
            //     console.log("done")
            // }
           
         
            
            
         }
         document.querySelector(".article__articles").innerHTML = page;
    })

    
}