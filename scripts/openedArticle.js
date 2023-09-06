

let myIndex = 0;

let page = ""


let id;

let x = window.localStorage.getItem("main-titel")
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
    
          for (let n in newsAll){
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
           
         
            
            page += `
            <div class="article__articles" id="article">
                <img class="article__image" src="${newsAll[n].image}" alt="${newsAll[n].alt}"/>
                <p class="article__author" id="author">"${newsAll[n].author}"</p>
                <h2 class="article__title">"${newsAll[n].title}"</h2>
                <p class="article__text">"${newsAll[n].text}"</p>
                <p class="article__source">"${newsAll[n].source}"</p>
        </div>`;
         }
         document.querySelector(".article__articles").innerHTML = page;
    })

    
}